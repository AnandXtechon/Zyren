"use client"

import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const staggerContainer: Variants = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
}

const HeroSection = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      opacity: number
      duration: number
      delay: number
    }>
  >([])

  useEffect(() => {
    const particleCount = 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden bg-black z-30 h-[750px]">
      {/* Moving particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: particle.opacity,
              scale: 1,
              y: [0, -20, 0],
              x: [0, 10, -15, 5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}

        {/* Additional floating particles with different colors */}
        {particles.slice(0, 20).map((particle) => (
          <motion.div
            key={`purple-${particle.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: particle.opacity * 0.7,
              scale: 1,
              y: [0, 15, 25, 10, 0],
              x: [0, -10, 20, -5, 0],
            }}
            transition={{
              duration: particle.duration * 1.5,
              delay: particle.delay * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-purple-300 rounded-full"
            style={{
              left: `${(particle.x + 20) % 100}%`,
              top: `${(particle.y + 30) % 100}%`,
              width: `${particle.size * 0.8}px`,
              height: `${particle.size * 0.8}px`,
            }}
          />
        ))}

        {/* Larger glowing particles */}
        {particles.slice(0, 10).map((particle) => (
          <motion.div
            key={`glow-${particle.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [particle.opacity * 0.4, particle.opacity * 0.6, particle.opacity * 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration * 0.8,
              delay: particle.delay * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bg-purple-500 rounded-full blur-sm"
            style={{
              left: `${(particle.x + 50) % 100}%`,
              top: `${(particle.y + 50) % 100}%`,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
        {/* Main headline */}
        <motion.h1 variants={fadeInUp} className="text-white text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          Intelligent Automation for Modern Businesses.
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-xl text-lg">
          Zyren brings AI automation to your fingertips & streamlines tasks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4 justify-center">
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="/contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Get in touch →
          </motion.a>
          <motion.a
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            href="/services"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            View services
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
