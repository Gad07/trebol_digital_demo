export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://treboldigital.com.mx'
).replace(/\/$/, '');

export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
};

/**
 * Builds a self-referencing canonical + OG metadata block for a route.
 * Every indexable page must pass its own `path`; omitting it makes the route
 * inherit the root layout's canonical, which collapses the whole site onto
 * the homepage.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
  publishedTime,
}) {
  const url = path ? `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}` : SITE_URL;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
    openGraph: {
      type,
      locale: 'es_MX',
      url,
      siteName: 'Trébol Digital',
      title,
      description,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  };
}
