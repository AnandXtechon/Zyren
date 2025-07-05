"use client"
import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Automation Tools", href: "/services/automation" },
    { name: "Smart Analytics", href: "/services/analytics" },
    { name: "Integration Services", href: "/services/integration" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github, ariaLabel: "Follow us on GitHub" },
    { name: "Twitter", href: "#", icon: Twitter, ariaLabel: "Follow us on Twitter" },
    { name: "LinkedIn", href: "#", icon: Linkedin, ariaLabel: "Connect with us on LinkedIn" },
    { name: "Instagram", href: "#", icon: Instagram, ariaLabel: "Follow us on Instagram" },
  ]

  return (
    <footer className="bg-black border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-4 inline-block">
              Zyren<span className="text-purple-600">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              We design, develop, and implement automation tools that help you work smarter, not harder. Transform your
              business with intelligent AI solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-3 text-purple-600" />
                <a href="mailto:hello@zyren.com" className="hover:text-white transition">
                  hello@zyren.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-3 text-purple-600" />
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-purple-600 flex-shrink-0" />
                <address className="not-italic">
                  123 Innovation Street
                  <br />
                  Tech City, TC 12345
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <nav aria-label="Services navigation">
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 text-sm hover:text-white transition">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            {/* Newsletter Signup */}
            <form className="mb-6" aria-label="Newsletter signup">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-zinc-900 border border-gray-700 rounded-l-md text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-600"
                  required
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-r-md hover:bg-purple-700 transition"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-3 text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-purple-600 transition"
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Zyren. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <nav aria-label="Legal navigation">
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
