import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

// Enhanced SEO metadata for #1 ranking
export const metadata: Metadata = {
  title: {
    default: "Zyren - #1 AI Automation & Intelligent Business Solutions Company",
    template: "%s | Zyren - Leading AI Automation Experts",
  },
  description:
    "Zyren is the leading AI automation company transforming businesses worldwide. AI Automation for businesses · AI-Based Website & App Development · AI-Generated Code & Debugging Assistance · AI-Powered Game Development · AI-Powered Software Testing & Automation",
  keywords: [
    // Primary brand keywords
    "Zyren",
    "Zyren AI",
    "Zyren automation",
    "Zyren company",
    "Zyren AI solutions",
    "Zyren artificial intelligence",

    // High-volume AI keywords
    "AI automation company",
    "artificial intelligence solutions",
    "business automation services",
    "intelligent automation platform",
    "AI development company",
    "machine learning services",
    "AI consulting firm",
    "enterprise AI solutions",
    "custom AI development",
    "AI integration services",

    // Long-tail keywords
    "best AI automation company 2024",
    "top artificial intelligence solutions provider",
    "leading AI development services",
    "professional AI consulting company",
    "enterprise AI transformation services",
    "custom machine learning solutions",
    "AI workflow automation platform",
    "intelligent business process automation",

    // Industry-specific
    "AI for business optimization",
    "AI-powered workflow automation",
    "intelligent process automation IPA",
    "AI chatbot development",
    "predictive analytics solutions",
    "natural language processing services",
    "computer vision automation",
    "robotic process automation RPA",

    // Geographic targeting
    "AI company USA",
    "AI automation services worldwide",
    "global AI solutions provider",
    "international AI development firm",
  ],
  authors: [{ name: "Zyren AI Team", url: "https://zyren-roan.vercel.app/about" }],
  creator: "Zyren - AI Automation Experts",
  publisher: "Zyren Inc.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zyren-roan.vercel.app",
    siteName: "Zyren - AI Automation Leaders",
    title: "Zyren - #1 AI Automation & Intelligent Business Solutions",
    description:
      "AI Automation for businesses · AI-Based Website & App Development · AI-Generated Code & Debugging Assistance · AI-Powered Game Development · AI-Powered Software Testing & Automation",
    images: [
      {
        url: "https://zyren-roan.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zyren - Leading AI Automation Company",
        type: "image/jpeg",
      },
      {
        url: "https://zyren-roan.vercel.app/images/logo.png",
        width: 400,
        height: 400,
        alt: "Zyren AI Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyren - AI Automation Company",
    description:
      "AI Automation for businesses · AI-Based Website & App Development · AI-Generated Code & Debugging Assistance · AI-Powered Game Development · AI-Powered Software Testing & Automation",
    images: ["/images/zyren-twitter-card.jpg"],
    creator: "@ZyrenAI",
    site: "@ZyrenAI",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7c3aed" }],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://zyren-roan.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/en-gb",
    },
  },
  category: "Technology",
  classification: "AI Automation & Business Intelligence Solutions",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "Z7kA9w3viKL5ACe_XZXmI_5ARc2bH_CSztbJAKUKj6c",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
    },
  },
  other: {
    "google-site-verification": "Z7kA9w3viKL5ACe_XZXmI_5ARc2bH_CSztbJAKUKj6c",
    "msvalidate.01": "your-bing-verification-code",
    "p:domain_verify": "your-pinterest-verification-code",
  },
}

// Enhanced Structured Data for better SERP features
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zyren-roan.vercel.app/#organization",
  name: "Zyren",
  legalName: "Zyren Inc.",
  alternateName: ["Zyren AI", "Zyren Automation"],
  description:
    "AI Automation for businesses · AI-Based Website & App Development · AI-Generated Code & Debugging Assistance · AI-Powered Game Development · AI-Powered Software Testing & Automation",
  url: "https://zyren-roan.vercel.app",
  logo: {
    "@type": "ImageObject",
    url: "https://zyren-roan.vercel.app/images/logo.png",
    width: 300,
    height: 100,
  },
  image: "https://zyren-roan.vercel.app/images/og-image.jpg",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Zyren Founder",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-ZYREN-AI",
      contactType: "customer service",
      email: "hello@zyren-roan.vercel.app",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-800-ZYREN-AI",
      contactType: "sales",
      email: "sales@zyren-roan.vercel.app",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 AI Innovation Drive",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US",
  },
  sameAs: [
    "https://twitter.com/ZyrenAI",
    "https://linkedin.com/company/zyren-ai",
    "https://github.com/zyren-ai",
    "https://instagram.com/zyren.ai",
    "https://facebook.com/zyren.ai",
    "https://youtube.com/@zyrenai",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "247",
    bestRating: "5",
    worstRating: "1",
  },
  award: ["Best AI Automation Company 2024", "Top AI Innovation Award 2024", "Excellence in AI Development 2024"],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zyren-roan.vercel.app/#website",
  url: "https://zyren-roan.vercel.app",
  name: "Zyren - AI Automation Company",
  description: "Leading AI automation and intelligent business solutions provider",
  publisher: {
    "@id": "https://zyren-roan.vercel.app/#organization",
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://zyren-roan.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://zyren-roan.vercel.app/#service",
  name: "AI Automation Services",
  description: "Comprehensive AI automation and intelligent business solutions",
  provider: {
    "@id": "https://zyren-roan.vercel.app/#organization",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development",
          description: "Custom AI solution development for business automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Machine Learning Solutions",
          description: "Advanced ML models and predictive analytics",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Automation",
          description: "Intelligent process automation and optimization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integration",
          description: "Seamless AI integration with existing systems",
        },
      },
    ],
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://zyren-roan.vercel.app",
    },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Zyren?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zyren is a leading AI automation company that provides intelligent business solutions, custom AI development, and machine learning services to help businesses optimize their operations and drive growth.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Zyren offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zyren offers AI development, machine learning solutions, workflow automation, intelligent process automation, AI consulting, and custom AI integration services for businesses of all sizes.",
      },
    },
  ],
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema, serviceSchema, breadcrumbSchema, faqSchema],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Enhanced Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* Additional Meta Tags for SEO */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zyren AI" />

        {/* Geo targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="San Francisco" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />

        {/* Business info */}
        <meta name="rating" content="5" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="Business" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/zyren-hero-image.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Additional favicons for better brand recognition */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50 focus:z-[9999]"
        >
          Skip to main content
        </a>

        <Suspense fallback={<div className="h-16 bg-black animate-pulse" />}>
          <Navbar />
        </Suspense>

        <main id="main-content" className="relative overflow-hidden flex-1" role="main">
          {children}
        </main>

        <Suspense fallback={<div className="h-32 bg-black animate-pulse" />}>
          <Footer />
        </Suspense>

        {/* Analytics and Performance Monitoring */}
        <Analytics />
        <SpeedInsights />

        {/* Enhanced Google Analytics with custom events */}
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CLB64KSVE6"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLB64KSVE6', {
                page_title: 'Zyren - AI Automation Company',
                page_location: window.location.href,
                custom_map: {
                  'custom_parameter_1': 'brand_search'
                }
              });
              
              // Track brand searches
              gtag('event', 'page_view', {
                'custom_parameter_1': 'zyren_homepage'
              });
            `,
          }}
        />

        {/* Microsoft Clarity for user behavior analytics */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "your-clarity-id");
            `,
          }}
        />

        {/* Hotjar for user experience insights */}
        <Script
          id="hotjar-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:your-hotjar-id,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  )
}
