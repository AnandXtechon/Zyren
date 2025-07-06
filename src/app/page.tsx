import BenefitsSection from "@/components/layout/BenefitsSection"
import HeroSection from "@/components/layout/HeroSection"
import ProcessSection from "@/components/layout/ProcessSection"
import ServiceSection from "@/components/layout/ServiceSection"
import TestimonialSection from "@/components/layout/TestimonialSection"
import { Metadata } from "next"

// Page-specific metadata for homepage
export const metadata: Metadata = {
  title: "Zyren - #1 AI Automation Company | Transform Your Business with AI",
  description:
    "Zyren is the world's leading AI automation company. We help businesses transform with intelligent automation, custom AI development, and machine learning solutions. Trusted by 500+ companies worldwide. Get started with AI today!",
  keywords: [
    "Zyren",
    "Zyren AI automation",
    "best AI company",
    "AI automation services",
    "artificial intelligence solutions",
    "business automation",
    "AI development company",
    "machine learning services",
    "intelligent automation platform",
  ],
  openGraph: {
    title: "Zyren - #1 AI Automation Company | Transform Your Business",
    description:
      "Leading AI automation company helping 500+ businesses worldwide. Custom AI solutions, intelligent automation, and machine learning services.",
    url: "https://zyren.com",
    images: [
      {
        url: "https://zyren.com/images/zyren-homepage-og.jpg",
        width: 1200,
        height: 630,
        alt: "Zyren AI Automation Company Homepage",
      },
    ],
  },
  twitter: {
    title: "Zyren - #1 AI Automation Company",
    description: "Transform your business with Zyren's AI automation solutions. Trusted by 500+ companies worldwide.",
    images: ["/images/zyren-twitter-homepage.jpg"],
  },
  alternates: {
    canonical: "https://zyren.com",
  },
}

const page = () => {
  
  return (
    <div className="bg-black">
      <HeroSection />
      <ServiceSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialSection />
    </div>
  )
}

export default page
