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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://treboldigital.com.mx";
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
    default: "Trébol Digital | Estrategia Digital, IA & Marketing",
    template: "%s | Trébol Digital",
  },
  description:
    "Impulsamos empresas con Estrategia Digital, Inteligencia Artificial aplicada, Desarrollo Web y Cultura Organizacional en Toluca, CDMX y México. Agenda tu cita.",
  keywords: [
    "Trébol Digital",
    "estrategia digital",
    "inteligencia artificial empresas",
    "marketing digital b2b",
    "desarrollo web nextjs",
    "capacitación IA",
    "desarrollo organizacional",
    "automatizaciones make zapier",
    "agencia digital toluca",
    "agencia de marketing cdmx",
    "consultoria digital mexico",
  ],
  authors: [{ name: "Trébol Digital", url: SITE_URL }],
  creator: "Trébol Digital",
  publisher: "Trébol Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Trébol Digital",
    title: "Trébol Digital | Estrategia Digital, IA & Marketing",
    description:
      "Transformamos empresas en marcas visibles y rentables con Inteligencia Artificial, Desarrollo Web y Estrategia Digital en México.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trébol Digital - Estrategia Digital, IA y Desarrollo Organizacional",
      },
      {
        url: "/images/TREBOL_01.png",
        width: 512,
        height: 512,
        alt: "Trébol Digital Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trébol Digital | Estrategia Digital, IA & Marketing",
    description:
      "Transformamos empresas en marcas visibles y rentables con Inteligencia Artificial, Desarrollo Web y Estrategia Digital en México.",
    images: ["/og-image.png"],
    creator: "@treboldigital",
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/TREBOL_01.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/TREBOL_01.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Trébol Digital",
      legalName: "Trébol Digital",
      alternateName: ["Trebol Digital", "Trébol Digital México"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/images/TREBOL_01.png`,
        caption: "Trébol Digital Logo",
        width: "512",
        height: "512"
      },
      image: `${SITE_URL}/og-image.png`,
      slogan: "Tenemos la suerte de encontrarnos",
      description: "Agencia y consultora de Estrategia Digital, Inteligencia Artificial aplicada, Desarrollo Web de alto rendimiento y Desarrollo Organizacional.",
      telephone: "+52-55-6492-9081",
      email: "hola@treboldigital.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Paseo Tollocan & Av. Insurgentes Sur",
        addressLocality: "Toluca / Ciudad de México",
        addressRegion: "Estado de México / CDMX",
        postalCode: "50000",
        addressCountry: "MX"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+52-55-6492-9081",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
          areaServed: ["MX", "US", "LATAM"]
        }
      ],
      sameAs: [
        "https://www.facebook.com/share/1Jj6UY2hQT/?mibextid=wwXIfr",
        "https://www.instagram.com/treboldigital_?igsi=MTR6Zm92ZXBscHY0dQ%3D%3D&utm_source=qr",
        "https://www.linkedin.com/company/tr%C3%A9bol-digital/",
        "https://wa.me/525564929081"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Trébol Digital | Soluciones Empresariales & IA",
      url: SITE_URL,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      logo: `${SITE_URL}/images/TREBOL_01.png`,
      image: `${SITE_URL}/og-image.png`,
      telephone: "+52-55-6492-9081",
      email: "hola@treboldigital.com",
      priceRange: "$$",
      currenciesAccepted: "MXN, USD",
      paymentAccepted: "Credit Card, Debit Card, Bank Transfer, Stripe, Cash",
      areaServed: [
        { "@type": "City", name: "Toluca" },
        { "@type": "City", name: "Metepec" },
        { "@type": "City", name: "Santa Fe" },
        { "@type": "City", name: "Ciudad de México" },
        { "@type": "Country", name: "México" }
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Principales de Trébol Digital",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Marketing Estratégico & SEO Local",
              description: "Estrategia de contenidos, posicionamiento en Google Maps, pauta digital y embudos de captación de clientes."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Inteligencia Artificial Aplicada",
              description: "Automatización de flujos operativos con Make/Zapier, agentes IA de ventas 24/7 y consultoría especializada."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo Web de Alto Rendimiento",
              description: "Plataformas web serverless en Next.js, tiendas en línea, paneles autoadministrables y diseño UX/UI."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desarrollo Organizacional & Capacitación",
              description: "Alineación de equipos, cultura empresarial, definición de roles RACI y talleres in-company."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Trébol Digital",
      alternateName: ["Trébol Digital México", "Trebol Digital"],
      description: "Estrategia Digital, Inteligencia Artificial, Marketing y Desarrollo Organizacional en México",
      inLanguage: "es-MX",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/insights/blog?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

const siteNavigationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#sitelinks`,
      name: "Secciones Principales de Trébol Digital",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Soluciones",
          description: "Nuestros 4 pilares: Marketing, IA, Desarrollo Web y Organizacional.",
          url: `${SITE_URL}/soluciones`
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Método Trébol",
          description: "Nuestra metodología de trabajo de 4 etapas para transformar tu empresa.",
          url: `${SITE_URL}/metodo`
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Desarrollo Web",
          description: "Plataformas web serverless en Next.js, aplicaciones a la medida y optimización UX/UI.",
          url: `${SITE_URL}/soluciones/desarrollo-web`
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Inteligencia Artificial",
          description: "Agentes de atención y ventas 24/7, automatización de procesos operativos e IA.",
          url: `${SITE_URL}/soluciones/ia-aplicada`
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Marketing Estratégico",
          description: "Embudos de captación B2B/B2C, pauta publicitaria rentable y posicionamiento SEO local.",
          url: `${SITE_URL}/soluciones/marketing-estrategico`
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Desarrollo Organizacional",
          description: "Alineación estratégica de equipos, cultura de autonomía operativa y capacitación.",
          url: `${SITE_URL}/soluciones/desarrollo-organizacional`
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "Casos de Éxito",
          description: "Historias de éxito y resultados medibles de nuestros clientes.",
          url: `${SITE_URL}/casos-de-exito`
        },
        {
          "@type": "SiteNavigationElement",
          position: 8,
          name: "Nosotros",
          description: "Conoce la historia, filosofía y equipo multidisciplinario de Trébol Digital.",
          url: `${SITE_URL}/nosotros`
        },
        {
          "@type": "SiteNavigationElement",
          position: 9,
          name: "Insights & Recursos",
          description: "Artículos de blog, plantillas descargables y capacitaciones.",
          url: `${SITE_URL}/insights`
        },
        {
          "@type": "SiteNavigationElement",
          position: 10,
          name: "Agendar Cita",
          description: "Reserva una sesión de diagnóstico estratégico gratuito con nuestros especialistas.",
          url: `${SITE_URL}/agenda`
        }
      ]
    }
  ]
};

import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopupSystem from "../components/PopupSystem";
import ScrollManager from "../components/ScrollManager";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${roboto.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/images/TREBOL_01.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#5C9E43" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
        />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <Suspense fallback={null}>
          <ScrollManager />
        </Suspense>

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
