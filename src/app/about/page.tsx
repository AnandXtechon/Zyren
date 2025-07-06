import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Users, Zap, Shield, Globe, Brain, Rocket } from "lucide-react"

// SEO-optimized metadata for About page
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zyren's mission to revolutionize business through AI automation and Web3 technologies. Discover our team, values, and commitment to intelligent business transformation.",
  keywords: [
    "About Zyren",
    "AI automation company",
    "Web3 development team",
    "AI consulting experts",
    "business automation specialists",
    "intelligent systems company",
    "AI transformation leaders",
    "Web3 innovation team",
  ],
  openGraph: {
    title: "About Zyren - Leading AI Automation & Web3 Solutions",
    description:
      "Discover how Zyren is transforming businesses through cutting-edge AI automation and Web3 technologies.",
    url: "https://zyren-roan.vercel.app/about",
    images: [
      {
        url: "https://zyren-roan.vercel.app/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Zyren - AI Automation Team",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function About() {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "Innovation First",
      description: "We push the boundaries of AI and Web3 technology to create solutions that didn't exist yesterday.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We build lasting partnerships through transparent communication and exceptional results.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security & Trust",
      description: "We prioritize data security and ethical AI practices in every solution we develop.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Rapid Execution",
      description:
        "We move fast without compromising quality, delivering solutions that accelerate your business growth.",
    },
  ]

  const services = [
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "AI Development",
      description: "Custom AI solution development for business automation",
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Smart Analytics",
      description: "Intelligent data analysis and workflow optimization",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "Seamless Integration",
      description: "AI integration services for existing business infrastructure",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Continuous Optimization",
      description: "Ongoing AI performance monitoring and enhancement",
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pioneering the Future of
              <span className="text-purple-400 block">AI Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
             {`At Zyren, we're not just building AI solutions – we're crafting the intelligent infrastructure that will
              power tomorrow's businesses.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We exist to democratize AI and Web3 technologies, making them accessible and actionable for businesses
                of all sizes. Our mission is to bridge the gap between cutting-edge technology and practical business
                solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded in 2024, Zyren has quickly established itself as a trusted partner for companies looking to
                harness the power of artificial intelligence and blockchain technology to drive growth, efficiency, and
                innovation.
              </p>
            </div>
            <div className="bg-black border border-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To be the global leader in AI automation and Web3 integration, empowering businesses to achieve
                unprecedented levels of efficiency and innovation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do, from the solutions we build to the relationships we nurture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/30 rounded-full mb-6 group-hover:bg-purple-800/50 transition-colors border border-purple-800">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive suite of AI and Web3 services designed to transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 p-6 rounded-xl hover:border-purple-600 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Transform</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From fintech to healthcare, we bring AI automation to every sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Fintech",
              "Healthcare",
              "E-commerce",
              "Logistics",
              "Manufacturing",
              "Education",
              "Real Estate",
              "Startups",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-purple-800/30 border border-purple-800/50 p-6 rounded-xl text-center hover:from-purple-800/30 hover:to-purple-700/40 hover:border-purple-600 transition-all"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800 border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
            Join the growing number of companies that trust Zyren to deliver intelligent automation solutions that drive
            real results.
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
