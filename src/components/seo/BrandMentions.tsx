"use client"

import { useEffect } from "react"


export default function BrandMentions() {
  useEffect(() => {
    // Track brand mentions and searches
    const trackBrandMention = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "brand_mention", {
          event_category: "SEO",
          event_label: "Zyren Brand Search",
          value: 1,
        })
      }
    }

    // Track when users search for "Zyren"
    const searchParams = new URLSearchParams(window.location.search)
    const query = searchParams.get("q") || searchParams.get("query")

    if (query && query.toLowerCase().includes("zyren")) {
      trackBrandMention()
    }

    // Track organic brand searches from referrer
    if (document.referrer.includes("google.com") || document.referrer.includes("bing.com")) {
      trackBrandMention()
    }
  }, [])

  return null
}
