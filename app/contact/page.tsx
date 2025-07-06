'use client'

import { useState, useEffect } from 'react'
import { Building, Users, Shield, Mail, Globe, Bell, Eye, Linkedin, ArrowRight } from 'lucide-react'
import Header from '../components/layout/header'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const id = section.getAttribute('data-section')
        if (rect.top < window.innerHeight * 0.75 && id) {
          setIsVisible(prev => ({ ...prev, [id]: true }))
        }
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 animate-section" data-section="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            PRIVATE ACCESS
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-8 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gray-100">Let&#39;s</div>
            <div className="text-gray-100">Connect</div>
          </h1>
          
          <p 
            className={`text-3xl md:text-4xl lg:text-5xl font-extralight text-gray-400 mb-16 transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Quietly
          </p>
          
          <p 
            className={`text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            AUCTA is not open-access. We work with vetted partners,<br/>
            verified clients, and certified institutions.
          </p>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="py-32 px-6 animate-section" data-section="categories">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <p 
              className={`text-gray-400 text-lg font-light leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ${
                isVisible.categories ? 'opacity-100' : 'opacity-0'
              }`}
            >
              If you believe your brand, boutique, or marketplace<br/>
              belongs within our ecosystem —<br/>
              we invite you to reach out with intent.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Institutional Partnerships */}
            <div 
              className={`group transition-all duration-1000 ${
                isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-purple-500/10 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-all">
                        <Building className="w-6 h-6 text-gray-500 group-hover:text-purple-400/60 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-light mb-3">Institutional Partnerships</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                          Brands, auction houses, platforms, or authorizations looking to integrate 
                          AUCTA into your infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs">
                          <div>
                            <span className="text-gray-600 block mb-1">Email</span>
                            <div className="text-gray-400">partnerships@aucta.io</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all flex items-center gap-2 whitespace-nowrap">
                      Send Partnership Inquiry
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Clients & Vault Holders */}
            <div 
              className={`group transition-all duration-1000 ${
                isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-purple-500/10 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-all">
                        <Users className="w-6 h-6 text-gray-500 group-hover:text-purple-400/60 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-light mb-3">Clients & Vault Holders</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                          Already own an AUCTA-certified item? Want to unlock your vault or 
                          explore advanced features?
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs">
                          <div>
                            <span className="text-gray-600 block mb-1">Email</span>
                            <div className="text-gray-400">support@aucta.io</div>
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all flex items-center gap-2 whitespace-nowrap">
                      Access Vault Request
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Support */}
            <div 
              className={`group transition-all duration-1000 ${
                isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-red-500/10 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-red-500/20 transition-all">
                        <Shield className="w-6 h-6 text-gray-500 group-hover:text-red-400/60 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-light mb-3">Security & Support</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                          To report an issue, unauthorized attempt, or concern regarding your 
                          asset or security.
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs">
                          <div>
                            <span className="text-gray-600 block mb-1">Email</span>
                            <div className="text-gray-400">security@aucta.io</div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs mt-4 leading-relaxed">
                          Our team operates with real-time alerts and rapid protection. You will be acknowledged 
                          within minutes, not hours.
                        </p>
                      </div>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-red-500/20 text-sm font-light hover:bg-red-500/5 transition-all flex items-center gap-2 whitespace-nowrap text-red-300/80">
                      Report Security Issue
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Other Inquiries */}
            <div 
              className={`group transition-all duration-1000 ${
                isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
                        <Mail className="w-6 h-6 text-gray-500 group-hover:text-gray-400 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-light mb-3">All Other Inquiries</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                          Press, legal, or general requests.
                        </p>
                        <div className="flex flex-wrap gap-6 text-xs">
                          <div>
                            <span className="text-gray-600 block mb-1">Email</span>
                            <div className="text-gray-400">contact@aucta.io</div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs mt-4 leading-relaxed">
                          Limited response rate. We respond to professional outreach.
                        </p>
                      </div>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all flex items-center gap-2 whitespace-nowrap">
                      Send General Inquiry
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Presence */}
      <section className="py-32 px-6 animate-section" data-section="office">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 transition-all duration-1000 ${
                isVisible.office ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Office Presence
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                isVisible.office ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Discretion is part of our infrastructure. AUCTA operates globally through 
              closed partnerships with legal entities based in Paris and 
              operational primary overseas under EU law.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Global Network', desc: 'Worldwide reach' },
              { icon: Bell, title: 'EU Compliance', desc: 'Regulatory oversight' },
              { icon: Eye, title: 'Private Tier', desc: 'Exclusive access' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.office ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-purple-500/20 transition-all group">
                  <item.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors" />
                </div>
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-32 px-6 animate-section" data-section="social">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 transition-all duration-1000 ${
              isVisible.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Social
          </h2>
          
          <p 
            className={`text-gray-400 text-lg font-light mb-16 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible.social ? 'opacity-100' : 'opacity-0'
            }`}
          >
            We maintain a single verified LinkedIn presence.
          </p>
          
          {/* LinkedIn Link */}
          <div 
            className={`mb-20 transition-all duration-1000 delay-400 ${
              isVisible.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="https://linkedin.com/company/aucta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl text-gray-400 hover:text-gray-200 hover:border-purple-500/10 transition-all group"
            >
              <Linkedin className="w-5 h-5 mr-3 text-gray-500 group-hover:text-purple-400/60 transition-colors" />
              LinkedIn.com/company/aucta
            </a>
          </div>
          
          {/* Footer Text */}
          <div 
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12 hover:border-purple-500/10 transition-all">
              <div className="text-gray-500 leading-relaxed space-y-2 text-sm">
                <p>Every interaction is logged.</p>
                <p>Every response is considered.</p>
                <p>Every contact, archived.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-gray-600 text-xs mb-4 max-w-3xl mx-auto leading-relaxed">
            AUCTA is infrastructure for luxury asset management. A closed protocol designed for authentication, ownership, and 
            inheritance of high-value objects. Not a marketplace. Not open access. A standard.
          </p>
          
          <p className="text-gray-700 text-xs">
            © 2025 AUCTA. All rights reserved. Private access only.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 0.1; 
          }
          50% { 
            transform: translateY(-20px); 
            opacity: 0.3; 
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}