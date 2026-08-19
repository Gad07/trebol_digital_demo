import { NextResponse } from 'next/server';

// Memoria caché para audio generado (respuestas instantáneas en milisegundos)
const ttsMemoryCache = new Map();

function splitTextIntoChunks(text, maxLen = 160) {
  if (text.length <= maxLen) return [text];
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const chunks = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    if ((currentChunk + ' ' + trimmed).trim().length <= maxLen) {
      currentChunk = (currentChunk ? currentChunk + ' ' : '') + trimmed;
    } else {
      if (currentChunk) chunks.push(currentChunk);
      if (trimmed.length <= maxLen) {
        currentChunk = trimmed;
      } else {
        const subParts = trimmed.split(/,\s*/);
        for (const sub of subParts) {
          if ((currentChunk + ' ' + sub).trim().length <= maxLen) {
            currentChunk = (currentChunk ? currentChunk + ' ' : '') + sub;
          } else {
            if (currentChunk) chunks.push(currentChunk);
            currentChunk = sub;
          }
        }
      }
    }
  }
  if (currentChunk) chunks.push(currentChunk);
  return chunks.length > 0 ? chunks : [text.slice(0, maxLen)];
}

async function fetchGoogleTtsChunk(phrase) {
  const encoded = encodeURIComponent(phrase.trim());
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encoded}&tl=es&client=tw-ob`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`Google TTS error status: ${res.status}`);
  return await res.arrayBuffer();
}

export async function POST(request) {
  try {
    const { text, voice = 'nova' } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const cacheKey = `${voice}_${text.trim()}`;
    if (ttsMemoryCache.has(cacheKey)) {
      const cachedBuffer = ttsMemoryCache.get(cacheKey);
      return new NextResponse(cachedBuffer, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=604800, immutable',
          'X-TTS-Source': 'cache'
        },
      });
    }

    const openAiApiKey = process.env.OPENAI_API_KEY;
    const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY;

    // 1. ElevenLabs API (Voz Humana Premium)
    if (elevenLabsApiKey) {
      try {
        const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
          method: 'POST',
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': elevenLabsApiKey,
          },
          body: JSON.stringify({
            text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: { stability: 0.5, similarity_boost: 0.75 },
          }),
        });

        if (response.ok) {
          const audioBuffer = await response.arrayBuffer();
          ttsMemoryCache.set(cacheKey, audioBuffer);
          return new NextResponse(audioBuffer, {
            headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=604800, immutable' },
          });
        }
      } catch (e) {
        console.warn('ElevenLabs TTS error, trying OpenAI/Google...', e);
      }
    }

    // 2. OpenAI TTS API (Voz Humana Ultra-Realista)
    if (openAiApiKey) {
      try {
        const response = await fetch('https://api.openai.com/v1/audio/speech', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'tts-1',
            input: text,
            voice: voice === 'v2' || voice === 'shimmer' ? 'shimmer' : 'nova',
            speed: 1.0,
          }),
        });

        if (response.ok) {
          const audioBuffer = await response.arrayBuffer();
          ttsMemoryCache.set(cacheKey, audioBuffer);
          return new NextResponse(audioBuffer, {
            headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=604800, immutable' },
          });
        }
      } catch (e) {
        console.warn('OpenAI TTS error, trying Google fallback...', e);
      }
    }

    // 3. Google Neural Voice MP3 en Español (con soporte para textos largos)
    try {
      const chunks = splitTextIntoChunks(text, 160);
      const chunkBuffers = await Promise.all(chunks.map(chunk => fetchGoogleTtsChunk(chunk)));

      const totalLength = chunkBuffers.reduce((sum, b) => sum + b.byteLength, 0);
      const merged = new Uint8Array(totalLength);
      let offset = 0;
      for (const b of chunkBuffers) {
        merged.set(new Uint8Array(b), offset);
        offset += b.byteLength;
      }

      const finalBuffer = merged.buffer;
      ttsMemoryCache.set(cacheKey, finalBuffer);

      return new NextResponse(finalBuffer, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=604800, immutable',
          'X-TTS-Source': 'google-neural-multichunk'
        },
      });
    } catch (gErr) {
      console.error('Google TTS Fallback failed:', gErr);
    }

    return NextResponse.json({ error: 'TTS unavailable' }, { status: 500 });
  } catch (error) {
    console.error('TTS API Error:', error);
    return NextResponse.json({ error: 'Failed to generate TTS audio' }, { status: 500 });
  }
}
