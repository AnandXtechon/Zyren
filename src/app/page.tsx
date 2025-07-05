import BenefitsSection from "@/components/layout/BenefitsSection"
import HeroSection from "@/components/layout/HeroSection"
import ProcessSection from "@/components/layout/ProcessSection"
import ServiceSection from "@/components/layout/ServiceSection"
import TestimonialSection from "@/components/layout/TestimonialSection"

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
