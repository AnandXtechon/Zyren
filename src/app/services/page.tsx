import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// SEO-optimized metadata for Services page
export const metadata: Metadata = {
  title: "Services",
  description:
    "Transform your business with Zyren's AI automation services. From workflow automation to custom AI assistants, we help you work smarter with cutting-edge AI solutions.",
  keywords: [
    "AI automation services",
    "workflow automation",
    "AI assistant development",
    "custom AI solutions",
    "business process automation",
    "AI consulting services",
    "sales automation",
    "marketing automation",
    "AI integration services",
    "intelligent automation",
  ],
  openGraph: {
    title: "AI Automation Services - Transform Your Business | Zyren",
    description:
      "Discover Zyren's comprehensive AI automation services. From workflow automation to custom AI development, we help businesses scale smarter.",
    url: "https://zyren-roan.vercel.app/services",
    images: [
      {
        url: "https://zyren-roan.vercel.app/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Zyren AI Automation Services",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
        {/* Our Services badge */}
        <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900">
          <h2 className="text-gray-300 text-sm font-medium">Our Services</h2>
        </div>

        {/* Header section */}
        <div className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
            AI Solutions That Take Your Business to the Next Level
          </h1>
          <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </div>
      </section>

      {/* Service 1 - Workflow Automation */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl w-full mx-auto relative z-10 my-10 px-6">
        {/* Left side - Image */}
        <div className="flex-1 max-w-lg">
          <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
            <Image
              className="rounded-xl object-cover"
              src="/placeholder.svg?height=400&width=500"
              alt="Workflow Automation Dashboard"
              width={500}
              height={400}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-w-lg">
          <div className="mb-2">
            <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-6">
              <span className="text-gray-300 text-sm font-medium">Workflow Automation</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Automate repetitive tasks</h2>
          <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
            We help you streamline internal operations by automating manual workflows like data entry, reporting, and
            approval chains saving time and cutting down errors.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Internal Task Bots</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">100+ Automations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - AI Assistant */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-7xl w-full mx-auto relative z-10 my-10 px-6">
        {/* Left side - Content */}
        <div className="flex-1 max-w-lg">
          <div className="mb-2">
            <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-2">
              <span className="text-gray-300 text-sm font-medium">AI Assistant</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Delegate Daily Tasks</h2>
          <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
            From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock
            to keep your business running smarter and faster.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Summaries</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Scheduling</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Many More</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 max-w-lg">
          <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
            <Image
              className="rounded-xl object-cover"
              src="/placeholder.svg?height=400&width=500"
              alt="AI Assistant Interface"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Service 3 - Sales & Marketing */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl w-full mx-auto relative z-10 my-10 px-6">
        {/* Left side - Image */}
        <div className="flex-1 max-w-lg">
          <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
            <Image
              className="rounded-xl object-cover"
              src="/placeholder.svg?height=400&width=500"
              alt="Sales & Marketing Automation"
              width={500}
              height={400}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-w-lg">
          <div className="mb-2">
            <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-6">
              <span className="text-gray-300 text-sm font-medium">Sales & Marketing</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Accelerate Sales Growth</h2>
          <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
            AI tools for lead generation, personalized outreach, and automated content creation that scales your sales
            efforts and builds stronger brand presence.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Leads</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Content</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Social Post</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4 - Custom Projects */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-7xl w-full mx-auto relative z-10 my-10 px-6">
        {/* Left side - Content */}
        <div className="flex-1 max-w-lg">
          <div className="mb-2">
            <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-6">
              <span className="text-gray-300 text-sm font-medium">Custom Projects</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">Build Smarter Systems</h2>
          <p className="text-gray-400 text-[17px] my-2 leading-relaxed">
            Whether you are starting from scratch or enhancing an existing system, we offer strategic consulting and
            develop custom AI projects aligned with your unique goals.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Strategy</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Custom AI</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md">
              <span className="text-gray-300 text-sm font-medium">Consulting</span>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 max-w-lg">
          <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
            <Image
              className="rounded-xl object-cover"
              src="/placeholder.svg?height=400&width=500"
              alt="Custom AI Development"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900 inline-block mb-6">
              <span className="text-gray-300 text-sm font-medium">More Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete AI Transformation</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Beyond our core services, we offer comprehensive solutions for every aspect of your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web3 Integration",
                description: "Blockchain and decentralized solutions for modern businesses",
                tags: ["Smart Contracts", "DApps", "NFTs"],
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable business insights",
                tags: ["Dashboards", "Reports", "Predictions"],
              },
              {
                title: "AI Training",
                description: "Custom model training and fine-tuning for your specific needs",
                tags: ["Custom Models", "Training", "Optimization"],
              },
              {
                title: "Integration Support",
                description: "Seamless integration with your existing tools and workflows",
                tags: ["APIs", "Webhooks", "Connectors"],
              },
              {
                title: "Maintenance & Support",
                description: "Ongoing support and optimization for all your AI systems",
                tags: ["24/7 Support", "Updates", "Monitoring"],
              },
              {
                title: "AI Strategy Consulting",
                description: "Strategic guidance for your AI transformation journey",
                tags: ["Planning", "Roadmap", "Best Practices"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {service.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="px-3 py-1 bg-zinc-800 border border-gray-700 rounded-md">
                      <span className="text-gray-300 text-xs font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-purple-800 border-t border-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            {`Let's discuss how our AI solutions can transform your operations and accelerate your growth.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
