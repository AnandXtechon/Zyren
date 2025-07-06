"use client"

import { SchemaMarkupProps } from "@/app/types/schema"
import Script from "next/script"

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case "article": {
        const articleData = data as import("@/app/types/schema").ArticleSchemaData;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: articleData.title,
          description: articleData.description,
          author: {
            "@type": "Organization",
            name: "Zyren",
            url: "https://zyren-roan.vercel.app",
          },
          publisher: {
            "@type": "Organization",
            name: "Zyren",
            logo: {
              "@type": "ImageObject",
              url: "https://zyren-roan.vercel.app/images/logo.png",
            },
          },
          datePublished: articleData.publishedDate,
          dateModified: articleData.modifiedDate,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleData.url,
          },
        }
      }

      case "service":
        const serviceData = data as import("@/app/types/schema").ServiceSchemaData
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceData.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Zyren",
            url: "https://zyren-roan.vercel.app",
          },
          areaServed: "Worldwide",
          serviceType: serviceData.serviceType,
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}
