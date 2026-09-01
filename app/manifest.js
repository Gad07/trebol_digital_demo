export default function manifest() {
  return {
    name: 'Trébol Digital | Estrategia Digital, IA & Marketing',
    short_name: 'Trébol Digital',
    description: 'Empresa de estrategia digital integral, inteligencia artificial y desarrollo organizacional en México.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F4F0',
    theme_color: '#5C9E43',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/images/TREBOL_01.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
