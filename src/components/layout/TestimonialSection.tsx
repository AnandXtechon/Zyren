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
      staggerChildren: 0.2,
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

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
      name: "David Peterson",
      title: "CEO at TechFlow Solutions",
      image: "/person-1.png",
    },
    {
      quote:
        "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
      name: "James Carter",
      title: "Operations Manager at NexaCorp",
      image: "/person-2.png",
    },
    {
      quote:
        "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
      name: "Charles Martinez",
      title: "Head of Sales at GrowthPeak",
      image: "/person-4.png",
    },
    {
      quote:
        "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract",
      name: "Sophia Wong",
      title: "Customer Success Lead at SupportHive",
      image: "/person-3.png",
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
        <h2 className="text-gray-300 text-sm font-medium">Testimonials</h2>
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
          Why Businesses Love <br /> Our AI Solutions
        </h2>
        <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
          Real businesses, real results with AI automation.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="border border-zinc-900 bg-zinc-950 rounded-lg p-6 w-[500px] relative overflow-hidden hover:border-zinc-700 transition-colors duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex space-x-1 mb-2"
              >
                {[...Array(5)].map((_, starIndex) => (
                  <Image
                    key={starIndex}
                    src="/icons/star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    className="py-1"
                  />
                ))}
              </motion.div>
              <p className="text-purple-200 mt-2 mb-2">{`"${testimonial.quote}"`}</p>
              <div className="bg-purple-500 blur-2xl w-[300px] h-3 rounded-full absolute bottom-10 right-0"></div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex item-start"
              >
                <Image
                  className="rounded-full mt-3"
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={45}
                  height={45}
                />
                <div className="flex flex-col items-start justify-center mx-2 mt-2">
                  <h3 className="text-white text-lg font-medium">{testimonial.name}</h3>
                  <span className="text-xs text-zinc-500 font-medium">{testimonial.title}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialSection
