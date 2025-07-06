import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Script from "next/script"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

// SEO-optimized metadata
export const metadata: Metadata = {
  title: {
    default: "Zyren - AI Automation & Smart Solutions",
    template: "%s | Zyren - AI Automation & Business Optimization",
  },
  description:
    "Accelerate your business with cutting-edge AI automation solutions. Zyren specializes in intelligent systems, workflow automation, and seamless AI integration to help you scale smarter and work more efficiently.",

  keywords: [
    // Branded & Core
    "Zyren AI",
    "Zyren automation",
    "Zyren Web3 solutions",

    // AI & Automation
    "AI automation",
    "intelligent automation",
    "business automation",
    "workflow automation",
    "intelligent process automation",
    "machine learning automation",
    "AI-powered solutions",
    "smart AI tools",
    "AI infrastructure",
    "AI consulting services",
    "AI integration services",
    "natural language processing",
    "computer vision automation",
    "predictive analytics tools",
    "deep learning development",
    "robotic process automation (RPA)",
    "AI model deployment",
    "AI for business transformation",
    "AI transformation services",
    "AI operations (AIOps)",
    "AI workflow orchestration",
    "enterprise AI systems",
    "AI chatbots and assistants",
    "automated decision systems",

    // Web3, Blockchain, Decentralization
    "Web3 automation",
    "Web3 development",
    "blockchain integration",
    "AI and Web3",
    "AI smart contracts",
    "blockchain automation tools",
    "decentralized AI solutions",
    "AI in blockchain",
    "decentralized applications (dApps)",
    "NFT automation",
    "DAO automation tools",
    "Web3 infrastructure services",
    "Ethereum smart contract development",
    "AI-driven tokenization",
    "Web3 SaaS solutions",
    "Web3 consulting services",
    "smart contract audit automation",
    "blockchain-based automation",
    "AI for decentralized finance (DeFi)",

    // Industry Use Cases
    "AI for fintech",
    "AI for healthcare automation",
    "AI for logistics",
    "AI for ecommerce",
    "Web3 for digital identity",
    "blockchain for supply chain",
    "AI-powered analytics for business",
    "smart automation for startups",
    "intelligent CRM automation",

    // Target Geography & Services
    "AI company in India",
    "Web3 development India",
    "AI automation company India",
    "enterprise AI solutions India",
    "intelligent automation India"
  ],

  authors: [{ name: "Zyren Team" }],
  creator: "Zyren",
  publisher: "Zyren",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zyren-roan.vercel.app",
    siteName: "Zyren",
    title: "Zyren - AI Automation & Smart Solutions",
    description:
      "Discover intelligent AI automation tools and services by Zyren. Streamline processes, optimize workflows, and innovate with expert-built AI solutions.",
    images: [
      {
        url: "https://zyren-roan.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zyren - AI Automation & Smart Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyren - AI Automation & Smart Solutions",
    description:
      "Zyren empowers businesses with intelligent AI automation and smart workflow solutions. Explore our innovative tech today.",
    images: ["/images/og-image.png"],
    creator: "@zyren",
    site: "@zyren",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#7c3aed",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://zyren-roan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  category: "Technology",
  classification: "AI Automation & Business Solutions",
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
  },
};


// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zyren",
  description: "AI automation and smart solutions company specializing in intelligent business process optimization.",
  url: "https://zyren-roan.vercel.app",
  logo: "https://zyren-roan.vercel.app/images/logo.png",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-890",
    contactType: "customer service",
    email: "hello@zyren.com",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Innovation Street",
    addressLocality: "Tech City",
    addressRegion: "TC",
    postalCode: "12345",
    addressCountry: "US",
  },
  sameAs: [
    "https://twitter.com/zyren",
    "https://linkedin.com/company/zyren",
    "https://github.com/zyren",
    "https://instagram.com/zyren",
  ],
  service: [
    {
      "@type": "Service",
      name: "AI Development",
      description: "Custom AI solution development for business automation",
    },
    {
      "@type": "Service",
      name: "Smart Analytics",
      description: "Intelligent data analysis and workflow optimization",
    },
    {
      "@type": "Service",
      name: "Seamless Integration",
      description: "AI integration services for existing business infrastructure",
    },
    {
      "@type": "Service",
      name: "Continuous Optimization",
      description: "Ongoing AI performance monitoring and enhancement",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistMono.variable} ${geistSans.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>

        <main id="main-content" className="relative overflow-hidden flex-1" role="main">
          {children}
        </main>

        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>

        {/* Analytics */}
        <Analytics />

        {/* Performance monitoring script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CLB64KSVE6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CLB64KSVE6');
            `,
          }}
        />
      </body>
    </html>
  )
}
