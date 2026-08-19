import { Roboto, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://treboldigital.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

const hasValue = (value) => Boolean(value && !/^X+$/i.test(value));
const hasGaId = hasValue(GA_ID);
const hasMetaPixelId = hasValue(META_PIXEL_ID);
const hasLinkedInPartnerId = hasValue(LINKEDIN_PARTNER_ID);

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trébol Digital | Estrategia Digital, IA y Desarrollo Organizacional en México",
    template: "%s | Trébol Digital",
  },
  description:
    "Trébol Digital transforma negocios y emprendimientos en marcas visibles que atraen clientes. Estrategia digital integral, inteligencia artificial y desarrollo organizacional para empresas en desarrollo.",
  keywords: [
    "estrategia digital",
    "inteligencia artificial",
    "marketing digital",
    "desarrollo web",
    "capacitación IA",
    "desarrollo organizacional",
    "PYMEs",
    "Toluca",
    "Santa Fe",
    "CDMX",
    "México",
  ],
  authors: [{ name: "Trébol Digital", url: SITE_URL }],
  creator: "Trébol Digital",
  publisher: "Trébol Digital",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Trébol Digital",
    title: "Trébol Digital | Estrategia Digital, IA y Desarrollo Organizacional en México",
    description:
      "Trébol Digital transforma negocios y emprendimientos en marcas visibles que atraen clientes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trébol Digital - Estrategia Digital, IA y Desarrollo Organizacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trébol Digital | Estrategia Digital, IA y Desarrollo Organizacional en México",
    description:
      "Trébol Digital transforma negocios y emprendimientos en marcas visibles que atraen clientes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/images/TREBOL_01.png?v=8', type: 'image/png' },
      { url: '/icon.png?v=8', type: 'image/png' },
      { url: '/favicon.ico?v=8', sizes: 'any' },
    ],
    shortcut: ['/images/TREBOL_01.png?v=8'],
    apple: ['/images/TREBOL_01.png?v=8'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Trébol Digital",
  description:
    "Empresa de estrategia digital integral, inteligencia artificial y desarrollo organizacional para empresas en desarrollo.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+52-55-6492-9081",
  email: "hola@treboldigital.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Celaya",
    addressRegion: "Guanajuato",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.5218,
    longitude: -100.8147,
  },
  areaServed: [
    { "@type": "City", name: "Toluca" },
    { "@type": "City", name: "Santa Fe" },
    { "@type": "City", name: "Ciudad de México" },
    { "@type": "Country", name: "México" },
  ],
  sameAs: [
    "https://www.facebook.com/treboldigital",
    "https://www.instagram.com/treboldigital",
    "https://www.linkedin.com/company/treboldigital",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopupSystem from "../components/PopupSystem";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${roboto.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/icon.png?v=7" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=7" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.className} antialiased`}>

        {/* ═══ Ambient Light: Radial Gradient (GPU Optimized) ═══ */}
        <div 
          className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-[#F5F5F5] isolate"
          aria-hidden="true"
          style={{
            backgroundImage: `
              radial-gradient(900px circle at -15% -20%, rgba(92, 158, 67, 0.06), transparent 70%),
              radial-gradient(800px circle at 110% 115%, rgba(92, 158, 67, 0.06), transparent 70%)
            `
          }}
        />

        <Navbar />
        {children}
        <Footer />
        <PopupSystem />

        {/* ═══ Analytics & Tracking ═══ */}

        {/* Google Analytics 4 */}
        {hasGaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {hasMetaPixelId && (
          <Script id="meta-pixel" strategy="lazyOnload">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* LinkedIn Insight Tag */}
        {hasLinkedInPartnerId && (
          <>
            <Script id="linkedin-insight" strategy="lazyOnload">
              {`
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push("${LINKEDIN_PARTNER_ID}");
                (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s)})(window.lintrk);
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt=""
                src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
