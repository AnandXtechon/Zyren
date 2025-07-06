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

const ServiceSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
      {/* Badge */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900"
      >
        <h2 className="text-gray-300 text-sm font-medium">Our Services</h2>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          AI Solutions That Take Your Business to the Next Level
        </h2>
        <p className="text-gray-400 text-lg mt-6 max-w-2xl">
          We design, develop, and implement automation tools that help you work smarter, not harder
        </p>
      </motion.div>

      {/* REPEATED CONTENT BLOCKS WITH ANIMATION */}
      {[1, 2, 3, 4].map((index) => {
        const isReversed = index % 2 === 0
        return (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className={`flex flex-col ${
              isReversed ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-center gap-12 max-w-7xl w-full relative z-10 my-10`}
          >
            {/* Image */}
            <div className="flex-1 max-w-lg">
              <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
                <Image
                  className="rounded-xl"
                  src="/images/dashboard.jpg"
                  alt="Dashboard"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 max-w-lg">
              <div className="mb-2">
                <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-2">
                  <span className="text-gray-300 text-sm font-medium">
                    {["Workflow Automation", "AI Assistant", "Sales & Marketing", "Custom Projects"][index - 1]}
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">
                {
                  [
                    "Automate repetitive tasks",
                    "Delegate Daily Tasks",
                    "Accelerate Sales Growth",
                    "Build Smarter Systems",
                  ][index - 1]
                }
              </h2>
              <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
                {
                  [
                    "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.",
                    "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
                    "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
                    "Whether you are starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
                  ][index - 1]
                }
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                {[
                  ["Internal Task Bots", "100+ Automations"],
                  ["Summaries", "Scheduling", "Many More"],
                  ["Leads", "Content", "Social Post"],
                  ["Strategy", "Custom AI", "Consulting"],
                ][index - 1].map((tag, i) => (
                  <div key={i} className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
                    <span className="text-gray-300 text-sm font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}

export default ServiceSection
