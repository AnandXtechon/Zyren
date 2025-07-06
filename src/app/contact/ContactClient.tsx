"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from "lucide-react"

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // // Simulate form submission
    // try {
    //   await new Promise((resolve) => setTimeout(resolve, 2000))
    //   setSubmitStatus("success")
    //   setFormData({
    //     name: "",
    //     email: "",
    //     company: "",
    //     phone: "",
    //     service: "",
    //     budget: "",
    //     timeline: "",
    //     message: "",
    //   })
    // } catch (error) 
    //   setSubmitStatus("error")
    // } finally {
    //   setIsSubmitting(false)
    // // }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@zyren.com",
      action: "mailto:hello@zyren.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: "Call Us",
      description: "Speak directly with our AI automation experts",
      contact: "+1 (234) 567-890",
      action: "tel:+1234567890",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
      title: "Live Chat",
      description: "Chat with our team for immediate assistance",
      contact: "Available 9 AM - 6 PM EST",
      action: "#",
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation call",
      contact: "Free consultation available",
      action: "#",
    },
  ]

  const services = [
    "Workflow Automation",
    "AI Assistant Development",
    "Sales & Marketing Automation",
    "Custom AI Solutions",
    "Web3 & Blockchain Integration",
    "Data Analytics & Insights",
    "AI Strategy Consulting",
    "Other",
  ]

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let's discuss",
  ]

  const timelines = ["ASAP", "Within 1 month", "1-3 months", "3-6 months", "6+ months", "Just exploring"]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-6 bg-black overflow-hidden">
        {/* Contact Us badge */}
        <div className="px-4 py-2 border border-gray-700 rounded-md bg-zinc-900">
          <h2 className="text-gray-300 text-sm font-medium">Contact Us</h2>
        </div>

        {/* Header section */}
        <div className="flex flex-col items-center justify-center max-w-4xl mt-6 mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight">
            {`Let's Build Something Amazing Together`}
          </h1>
          <p className="text-gray-400 text-lg mt-6 text-center max-w-2xl">
            {`Ready to transform your business with AI automation? Get in touch with our experts and let's discuss your
            project.`}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.action}
                className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-600 transition-colors group"
              >
                <div className="flex items-center mb-4">
                  {method.icon}
                  <h3 className="text-lg font-semibold text-white ml-3 group-hover:text-purple-400 transition-colors">
                    {method.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{method.description}</p>
                <p className="text-purple-400 text-sm font-medium">{method.contact}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-8">
              <div className="mb-8">
                <div className="px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md inline-block mb-4">
                  <span className="text-gray-300 text-sm font-medium">Get Started</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Tell Us About Your Project</h2>
                <p className="text-gray-400">
                  {`Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.`}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-600 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-600 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                {/* Company and Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-600 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-600 focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white focus:border-purple-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white focus:border-purple-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white focus:border-purple-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, current challenges, and what you're looking to achieve with AI automation..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {/* {submitStatus === "success" && (
                  <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg">
                    <p className="text-green-400 text-sm">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )} */}

                {/* {submitStatus === "error" && (
                  <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg">
                    <p className="text-red-400 text-sm">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                )} */}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-8">
                <div className="px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md inline-block mb-4">
                  <span className="text-gray-300 text-sm font-medium">Office</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Visit Our Office</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400 text-sm">
                        123 Innovation Street
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="text-white font-medium">Business Hours</p>
                      <p className="text-gray-400 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM EST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-8">
                <div className="px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md inline-block mb-4">
                  <span className="text-gray-300 text-sm font-medium">FAQ</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Answers</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">How quickly can you start my project?</h4>
                    <p className="text-gray-400 text-sm">
                      Most projects can begin within 1-2 weeks after contract signing and requirements gathering.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">Do you offer free consultations?</h4>
                    <p className="text-gray-400 text-sm">
                      Yes! We offer a free 30-minute consultation to discuss your project and provide initial
                      recommendations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-2">{`What's your typical project timeline?`}</h4>
                    <p className="text-gray-400 text-sm">
                      {`Project timelines vary from 2-12 weeks depending on complexity. We'll provide a detailed timeline
                      during consultation.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-8">
                <div className="px-3 py-2 bg-zinc-900 border border-gray-700 rounded-md inline-block mb-4">
                  <span className="text-gray-300 text-sm font-medium">Follow Us</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Stay Connected</h3>

                <div className="flex gap-4">
                  {[
                    { name: "Twitter", url: "https://twitter.com/zyren" },
                    { name: "LinkedIn", url: "https://linkedin.com/company/zyren" },
                    { name: "GitHub", url: "https://github.com/zyren" },
                    { name: "Instagram", url: "https://instagram.com/zyren" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      className="px-4 py-2 bg-zinc-800 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-600 hover:text-purple-400 transition-colors text-sm"
                    >
                      {social.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-purple-800 border-t border-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Not Ready to Contact Us Yet?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Explore our services and projects to learn more about how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
