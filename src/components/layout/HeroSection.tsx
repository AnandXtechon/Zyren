"use client"

import { useEffect, useState } from "react"

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
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Additional floating particles with different colors */}
        {particles.slice(0, 20).map((particle) => (
          <div
            key={`purple-${particle.id}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full animate-float-reverse"
            style={{
              left: `${(particle.x + 20) % 100}%`,
              top: `${(particle.y + 30) % 100}%`,
              width: `${particle.size * 0.8}px`,
              height: `${particle.size * 0.8}px`,
              opacity: particle.opacity * 0.7,
              animationDuration: `${particle.duration * 1.5}s`,
              animationDelay: `${particle.delay * 2}s`,
            }}
          />
        ))}

        {/* Larger glowing particles */}
        {particles.slice(0, 10).map((particle) => (
          <div
            key={`glow-${particle.id}`}
            className="absolute bg-purple-500 rounded-full blur-sm animate-pulse-slow"
            style={{
              left: `${(particle.x + 50) % 100}%`,
              top: `${(particle.y + 50) % 100}%`,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
              opacity: particle.opacity * 0.4,
              animationDuration: `${particle.duration * 0.8}s`,
              animationDelay: `${particle.delay * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Top badges */}
      {/* <div className="flex items-center space-x-2 mb-6 relative z-10">
          <span className="px-3 py-1 text-sm text-white bg-purple-600 rounded-full font-medium">New</span>
          <span className="px-3 py-1 text-sm text-white bg-gray-800 rounded-full font-medium">
            Automated Lead Generation
          </span>
        </div> */}

      {/* Main headline */}
      <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl leading-tight relative z-10">
        Intelligent Automation for Modern Businesses.
      </h1>

      {/* Subheading */}
      <p className="text-gray-400 mt-4 max-w-xl text-lg relative z-10">
        Zyren brings AI automation to your fingertips & streamlines tasks.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-4 relative z-10">
        <a
          href="/contact"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Get in touch →
        </a>
        <a
          href="/services"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          View services
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(15px) translateX(-10px);
          }
          50% {
            transform: translateY(25px) translateX(20px);
          }
          75% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-reverse {
          animation: float-reverse linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default HeroSection
