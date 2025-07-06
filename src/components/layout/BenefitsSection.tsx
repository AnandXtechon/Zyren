"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "/icons/thuder.svg",
      title: "Increased Productivity",
      description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
      alt: "Productivity",
    },
    {
      icon: "/icons/hand-shake.svg",
      title: "Better Customer Experience",
      description:
        "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
      alt: "CustomerExperience",
    },
    {
      icon: "/icons/timer.svg",
      title: "24/7 Availability",
      description:
        "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
      alt: "Timer",
    },
    {
      icon: "/icons/circle-dollar.svg",
      title: "Cost Reduction",
      description:
        "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
      alt: "Productivity",
    },
    {
      icon: "/icons/piechart.svg",
      title: "Data-Driven Insights",
      description:
        "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
      alt: "CustomerExperience",
    },
    {
      icon: "/icons/barchart.svg",
      title: "Scalability & Growth",
      description:
        "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
      alt: "Timer",
    },
  ]

  return (
    <section className="relative flex flex-col items-center justify-center py-10 px-6 bg-black overflow-hidden">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900"
      >
        <h2 className="text-gray-300 text-sm font-medium">Benefits</h2>
      </motion.div>

      {/* Header section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
          The Key Benefits of AI for Your Business Growth
        </h2>
        <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
          Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster
          processes.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col items-center justify-center py-6 gap-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="border border-zinc-900 rounded-lg p-6 w-[400px] relative overflow-hidden hover:border-zinc-700 transition-colors duration-300"
            >
              <Image
                className="py-1"
                src={benefit.icon || "/placeholder.svg"}
                alt={benefit.alt}
                width={25}
                height={25}
              />
              <h2 className="text-white text-xl font-medium">{benefit.title}</h2>
              <p className="w-[300px] text-purple-200 mt-2">{benefit.description}</p>
              <div className="bg-purple-500 blur-xl w-[300px] h-2 rounded-full absolute bottom-5 left-9"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsSection
