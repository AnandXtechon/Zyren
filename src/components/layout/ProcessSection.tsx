import Image from "next/image"

const ProcessSection = () => {
  const processSteps = [
    {
      step: "Step 1",
      title: "Smart Analyzing",
      description: "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
      imageAlt: "Smart analyzing workflow interface showing system checks and process optimization",
    },
    {
      step: "Step 2",
      title: "AI Development",
      description: "Our team builds intelligent automation systems tailored to your business processes.",
      imageAlt: "AI development code editor showing automation trigger functions",
    },
    {
      step: "Step 3",
      title: "Seamless Integration",
      description: "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
      imageAlt: "Integration dashboard showing seamless connection between systems",
    },
    {
      step: "Step 4",
      title: "Continuous Optimization",
      description: "We refine performance, analyze insights, and enhance automation for long-term growth.",
      imageAlt: "Optimization metrics showing efficiency improvements and system updates",
    },
  ]

  return (
    <section
      className="relative flex flex-col items-center justify-center py-16 px-6 bg-black overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Process Badge */}
      <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900 mb-6">
        <span className="text-gray-300 text-sm font-medium">Our Process</span>
      </div>

      {/* Header section */}
      <header className="flex flex-col items-center justify-center max-w-4xl mb-16 relative z-10">
        <h1 id="process-heading" className="text-4xl md:text-5xl font-bold text-white text-center leading-tight mb-6">
          Our Simple, Smart, and Scalable Process
        </h1>
        <p className="text-gray-400 text-lg text-center max-w-2xl">
          We design, develop, and implement automation tools that help you work smarter, not harder
        </p>
      </header>

      {/* Process Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
        {processSteps.map((process, index) => (
          <article
            key={index}
            className="bg-zinc-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:border-gray-700"
          >
            {/* Step Badge */}
            <div className="text-gray-500 text-sm font-medium mb-4">{process.step}</div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-4">{process.title}</h2>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed mb-8">{process.description}</p>

            {/* Image */}
            <div className="bg-zinc-800/50 border border-gray-700 rounded-lg h-48 flex items-center justify-center overflow-hidden">
              <Image
              
                src="/images/ai.jpg"
                alt={process.imageAlt}
                width={500}
                height={200}
                className="object-cover rounded-lg"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProcessSection
