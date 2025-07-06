import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Globe, Zap, Brain, Target, Shield } from "lucide-react"

// SEO-optimized metadata for Projects page
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Zyren's portfolio of successful AI automation projects. See how we've transformed businesses with workflow automation, AI assistants, and custom solutions.",
  keywords: [
    "AI automation projects",
    "automation case studies",
    "AI project portfolio",
    "workflow automation examples",
    "AI assistant implementations",
    "custom AI solutions",
    "business automation results",
    "AI transformation case studies",
    "Web3 projects",
    "blockchain automation",
  ],
  openGraph: {
    title: "AI Automation Projects & Case Studies | Zyren",
    description:
      "Discover real-world AI automation projects and their impact. See how Zyren transforms businesses with intelligent solutions.",
    url: "https://zyren-roan.vercel.app/projects",
    images: [
      {
        url: "https://zyren-roan.vercel.app/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Zyren AI Automation Projects",
      },
    ],
  },
  alternates: {
    canonical: "/projects",
  },
}

export default function Projects() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Workflow Automation",
      description:
        "Automated order processing, inventory management, and customer support for a growing e-commerce platform, reducing manual work by 85%.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Workflow Automation",
      industry: "E-commerce",
      technologies: ["Python", "AI APIs", "Webhooks", "Database Integration"],
      results: {
        efficiency: "85% reduction in manual tasks",
        time: "12 hours saved daily",
        accuracy: "99.2% processing accuracy",
      },
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "AI-Powered Sales Assistant",
      description:
        "Intelligent sales assistant that qualifies leads, schedules meetings, and provides personalized follow-ups, increasing conversion rates by 40%.",
      image: "/placeholder.svg?height=400&width=600",
      category: "AI Assistant",
      industry: "SaaS",
      technologies: ["OpenAI GPT", "CRM Integration", "Natural Language Processing", "Calendar APIs"],
      results: {
        conversion: "40% increase in conversions",
        leads: "300% more qualified leads",
        response: "24/7 instant responses",
      },
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Web3 DeFi Analytics Platform",
      description:
        "Real-time analytics dashboard for DeFi protocols with automated risk assessment and portfolio optimization recommendations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web3 & Blockchain",
      industry: "Fintech",
      technologies: ["Ethereum", "Web3.js", "Smart Contracts", "React", "AI Analytics"],
      results: {
        users: "10K+ active users",
        volume: "$50M+ tracked volume",
        accuracy: "95% prediction accuracy",
      },
      link: "#",
      featured: true,
    },
  ]

  const allProjects = [
    {
      id: 4,
      title: "Healthcare Data Processing",
      description: "Automated patient data analysis and report generation system for healthcare providers.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Custom AI",
      industry: "Healthcare",
      technologies: ["Machine Learning", "HIPAA Compliance", "Data Analytics"],
      metrics: "70% faster reporting",
    },
    {
      id: 5,
      title: "Content Marketing Automation",
      description: "AI-driven content creation and social media scheduling platform for marketing agencies.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Sales & Marketing",
      industry: "Marketing",
      technologies: ["GPT-4", "Social APIs", "Content Management"],
      metrics: "5x content output",
    },
    {
      id: 6,
      title: "Supply Chain Optimization",
      description: "Predictive analytics system for inventory management and demand forecasting.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Custom AI",
      industry: "Logistics",
      technologies: ["Predictive Analytics", "IoT Integration", "Machine Learning"],
      metrics: "30% cost reduction",
    },
    {
      id: 7,
      title: "NFT Marketplace Automation",
      description: "Automated NFT minting, pricing, and marketplace management system.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web3 & Blockchain",
      industry: "Digital Art",
      technologies: ["Ethereum", "IPFS", "Smart Contracts", "Metadata APIs"],
      metrics: "1000+ NFTs automated",
    },
    {
      id: 8,
      title: "Customer Support Chatbot",
      description: "Intelligent chatbot handling 90% of customer inquiries with human-like responses.",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI Assistant",
      industry: "SaaS",
      technologies: ["Natural Language Processing", "Knowledge Base", "Live Chat APIs"],
      metrics: "90% query resolution",
    },
    {
      id: 9,
      title: "Financial Risk Assessment",
      description: "AI-powered risk analysis tool for loan approvals and credit scoring.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Custom AI",
      industry: "Fintech",
      technologies: ["Machine Learning", "Risk Modeling", "Financial APIs"],
      metrics: "60% faster approvals",
    },
  ]

  const categories = [
    { name: "All Projects", icon: <Globe className="w-4 h-4" />, count: allProjects.length + featuredProjects.length },
    { name: "Workflow Automation", icon: <Zap className="w-4 h-4" />, count: 3 },
    { name: "AI Assistant", icon: <Brain className="w-4 h-4" />, count: 2 },
    { name: "Sales & Marketing", icon: <Target className="w-4 h-4" />, count: 1 },
    { name: "Custom AI", icon: <Shield className="w-4 h-4" />, count: 3 },
    { name: "Web3 & Blockchain", icon: <Globe className="w-4 h-4" />, count: 2 },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
        {/* Our Projects badge */}
        <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900">
          <h2 className="text-gray-300 text-sm font-medium">Our Projects</h2>
        </div>

        {/* Header section */}
        <div className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
            Real AI Solutions, Real Results
          </h1>
          <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
            {`Explore our portfolio of successful AI automation projects and see how we've transformed businesses across`}
            industries
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-gray-700 rounded-md hover:border-purple-600 transition-colors"
              >
                {category.icon}
                <span className="text-gray-300 text-sm font-medium">{category.name}</span>
                <span className="text-purple-400 text-xs">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900 inline-block mb-6">
              <span className="text-gray-300 text-sm font-medium">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformative AI Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover how our AI solutions have delivered measurable results for businesses
            </p>
          </div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-center gap-12 w-full relative z-10`}
              >
                {/* Image */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-[400px] flex items-center justify-center">
                    <Image
                      className="rounded-xl object-cover"
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 max-w-lg">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md mb-2">
                      <span className="text-gray-300 text-sm font-medium">{project.category}</span>
                    </div>
                    <div className="inline-block px-3 py-2 bg-purple-900/30 border border-purple-700 rounded-md mb-6 ml-2">
                      <span className="text-purple-300 text-sm font-medium">{project.industry}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-normal text-white leading-tight mb-4">{project.title}</h3>

                  <p className="text-gray-400 text-[17px] mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="px-3 py-1 bg-zinc-800 border border-gray-700 rounded-md">
                        <span className="text-gray-300 text-xs font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-lg font-bold text-purple-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Link
                      href={project.link}
                      className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <button className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-purple-600 transition-colors">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900 inline-block mb-6">
              <span className="text-gray-300 text-sm font-medium">More Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Portfolio</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our full range of AI automation and Web3 projects across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-600 transition-colors group"
              >
                {/* Project Image */}
                <div className="h-48 bg-zinc-800 flex items-center justify-center">
                  <Image
                    className="object-cover w-full h-full"
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <div className="px-2 py-1 bg-zinc-800 border border-gray-700 rounded text-xs text-gray-300">
                      {project.category}
                    </div>
                    <div className="px-2 py-1 bg-purple-900/30 border border-purple-700 rounded text-xs text-purple-300">
                      {project.industry}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex gap-1 mb-4 flex-wrap">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <div key={index} className="px-2 py-1 bg-zinc-800 rounded text-xs text-gray-400">
                        {tech}
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <div className="px-2 py-1 bg-zinc-800 rounded text-xs text-gray-400">
                        +{project.technologies.length - 3}
                      </div>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="text-sm font-medium text-purple-400 mb-4">{project.metrics}</div>

                  {/* Action */}
                  <button className="w-full py-2 border border-gray-700 text-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-400 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-purple-800 border-t border-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            {`Let's discuss how we can create a custom AI solution that delivers real results for your business.`}
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
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
