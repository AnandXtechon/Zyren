import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ready to transform your business with AI automation? Contact Zyren today for a free consultation. Let's discuss your project and build intelligent solutions together.",
  keywords: [
    "contact Zyren",
    "AI automation consultation",
    "get started with AI",
    "AI project consultation",
    "business automation contact",
    "AI development inquiry",
    "custom AI solutions contact",
    "automation consulting",
  ],
  openGraph: {
    title: "Contact Zyren - Start Your AI Transformation",
    description:
      "Ready to automate your business processes? Contact Zyren for expert AI automation solutions and custom development.",
    url: "https://zyren-roan.vercel.app/contact",
    images: [
      {
        url: "https://zyren-roan.vercel.app/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Zyren - AI Automation Experts",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return <ContactClient />
}
