'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribe:', email)
      alert('Thank you for subscribing to the AUCTA protocol!')
      setEmail('')
    }
  }

  return (
    <footer className="py-20 px-4 border-t border-gray-800/30 bg-black">
      <div className="container mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
                Join the Protocol
              </h2>
              <p className="text-gray-400 text-lg">
                One message a month. Only if it matters.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-900/40 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors backdrop-blur-sm"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                We treat your information like we treat our assets — securely.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold text-white">aucta</span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-4">About us</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                AUCTA is a closed protocol for the certification, custody, and financial activation of luxury goods. Not a platform. Not a marketplace.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A standard — built for continuity.
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">PRODUCTS</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/institutions" className="text-gray-400 hover:text-white transition-colors">
                  Institutions
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/get-aucta" className="text-gray-400 hover:text-white transition-colors">
                  Get AUCTA
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/mission" className="text-gray-400 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">LEGAL</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal-notice" className="text-gray-400 hover:text-white transition-colors">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="text-gray-400 hover:text-white transition-colors">
                  Data Protection Protocol
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>AUCTA © 2025. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              No open access. No resale without verification.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}