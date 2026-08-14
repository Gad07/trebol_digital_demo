import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { text, voice = 'nova' } = await request.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const openAiApiKey = process.env.OPENAI_API_KEY;
    const elevenLabsApiKey = process.env.ELEVENLABS_API_KEY;

    // 1. ElevenLabs API (Voz Humana Premium)
    if (elevenLabsApiKey) {
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
        return new NextResponse(audioBuffer, {
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-cache, no-store, must-revalidate' },
        });
      }
    }

    // 2. OpenAI TTS API (Voz Humana Ultra-Realista)
    if (openAiApiKey) {
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAiApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: voice || 'nova',
          speed: 1.0,
        }),
      });

      if (response.ok) {
        const audioBuffer = await response.arrayBuffer();
        return new NextResponse(audioBuffer, {
          headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'no-cache, no-store, must-revalidate' },
        });
      }
    }

    // 3. Fallback Neural Humano Gratis (Google Neural Voice MP3 en Español)
    const encodedText = encodeURIComponent(text.slice(0, 200));
    const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=es&client=tw-ob`;

    const gResponse = await fetch(googleTtsUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (gResponse.ok) {
      const audioBuffer = await gResponse.arrayBuffer();
      return new NextResponse(audioBuffer, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-TTS-Fallback': 'true'
        },
      });
    }

    return NextResponse.json({ error: 'TTS unavailable' }, { status: 500 });
  } catch (error) {
    console.error('TTS API Error:', error);
    return NextResponse.json({ error: 'Failed to generate TTS audio' }, { status: 500 });
  }
}
