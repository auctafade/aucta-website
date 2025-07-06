'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff, Shield, Lock, Key, ArrowRight, Database, Wifi, WifiOff, Settings, Circle } from 'lucide-react'
import Header from '../components/layout/header'

export default function Services() {
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
      {/* Import Header component */}
      <Header />

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
          className="absolute right-0 bottom-0 w-96 h-96 bg-white/3 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 animate-section" data-section="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            WELCOME TO THE AUCTA CIRCLE
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-12 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Not open.<br/>
            Not visible.<br/>
            <span className="text-gray-400">Not optional.</span>
          </h1>
          
          <div 
            className={`max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              AUCTA only operates once trust is verified.<br/>
              You don&apos;t use AUCTA — you&apos;re inside it.
            </p>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-600 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white text-black px-10 py-4 rounded-full font-light hover:scale-105 transition-transform flex items-center gap-3">
                Request Access
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* AUCTA Card Section - Redesigned for better mobile */}
      <section className="py-32 px-6 animate-section" data-section="card">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                  isVisible.card ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Your access.<br/>
                Your vault.<br/>
                <span className="text-gray-400">Your card.</span>
              </h2>
              
              <p 
                className={`text-gray-400 text-lg font-light mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible.card ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Welcome to the AUCTA Circle. The Black Card is not optional — it&apos;s symbolic of AUCTA&apos;s philosophy: you 
                only hold what you&apos;ve earned, and everything you earn is protected.
              </p>
              
              <div 
                className={`space-y-4 transition-all duration-1000 delay-400 ${
                  isVisible.card ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                {['Instant boutique recognition', 'Private client pickups', 'NFC/QR activations', 'Legacy transfer rights'].map((text, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mr-4" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* AUCTA Card Visual - Responsive */}
            <div 
              className={`flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
                isVisible.card ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-all">
                  {/* Card */}
                  <div className="relative w-72 md:w-80 h-44 md:h-48 bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-2xl p-6 shadow-2xl border border-gray-800/50">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="text-sm font-light tracking-wider text-gray-300">AUCTA</div>
                        <div className="text-xs text-gray-600 mt-1">CLOSED PROTOCOL</div>
                      </div>
                      
                      <div>
                        <div className="font-mono text-base md:text-lg tracking-wider text-gray-300 mb-1">•••• •••• •••• 8472</div>
                        <div className="text-xs text-gray-600">FRIENDS & FAMILY</div>
                      </div>
                    </div>
                    
                    {/* Chip icon on card */}
                    <div className="absolute top-6 right-6">
                      <div className="w-10 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md border border-gray-700/30"></div>
                    </div>
                  </div>
                  
                  {/* NFC Badge */}
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-full px-4 py-2 text-xs text-gray-500">
                      <Circle className="w-2 h-2" />
                      NFC ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closed Suite Section */}
      <section className="py-32 px-6 animate-section" data-section="suite">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.suite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              THE SUITE
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.suite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Closed Suite
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible.suite ? 'opacity-100' : 'opacity-0'
              }`}
            >
              A permission-based infrastructure that activates once you&apos;re inside. 
              Not a platform. Not an app. Not a marketplace.
            </p>
          </div>
          
          {/* Three core principles */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: EyeOff, title: 'Not Open', desc: 'No public browsing. No open access. Every interaction is permissioned and logged.' },
              { icon: Eye, title: 'Not Visible', desc: 'Sealed system with no external exposure. Privacy by architecture, not policy.' },
              { icon: Shield, title: 'Not Optional', desc: 'Once verified, AUCTA becomes your permanent infrastructure for luxury assets.' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.suite ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-white/10 transition-all group">
                  <item.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-lg font-light mb-3">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ownership Infrastructure */}
      <section className="py-32 px-6 animate-section" data-section="ownership">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.ownership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              INFRASTRUCTURE
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.ownership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Ownership<br/>
              <span className="text-gray-400">Infrastructure</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible.ownership ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Full traceability through identity-locked verification and sealed blockchain protocols.
            </p>
          </div>
          
          {/* Three infrastructure pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Key, title: 'Soulbound Tokens', desc: 'Identity-locked verification that cannot be transferred or counterfeited.' },
              { icon: Database, title: 'Private Blockchain', desc: 'Fully sealed with no external exposure. Every transaction permanently recorded.' },
              { icon: Wifi, title: 'Discreet NFC', desc: 'Embedded authentication chip, invisible to the naked eye.' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.ownership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-white/10 transition-all group">
                  <item.icon className="w-8 h-8 text-gray-600 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-lg font-light mb-3">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Value Redistribution */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-light mb-4">Value Redistribution</h3>
                <p className="text-gray-400 text-base italic">&ldquo;Value doesn&apos;t vanish. It echoes.&rdquo;</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h4 className="text-lg font-light mb-6">Every Transaction Tracked</h4>
                  <div className="space-y-3">
                    {['Automatic cashback distribution', 'Brand royalties on resale', 'Complete audit trail', 'Legal delegation support'].map((text, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500 hover:text-gray-300 transition-colors">
                        <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-light mb-6">Reward Persistence</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    You don&apos;t lose your reward — it follows the object. Every gift, inheritance, or resale continues the value chain for all participants in the ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Trust Section */}
      <section className="py-32 px-6 animate-section" data-section="trust">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.trust ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              TRUST ARCHITECTURE
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.trust ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Structured<br/>
              <span className="text-gray-400">Trust</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible.trust ? 'opacity-100' : 'opacity-0'
              }`}
            >
              This isn&apos;t assistance. It&apos;s structured trust. Luxury service is no longer about being 
              pampered — it&apos;s about being protected.
            </p>
          </div>
          
          {/* Four trust pillars */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {[
              { icon: Shield, title: 'White-Glove Delivery', desc: 'Secure, personalized handover with full chain of custody.' },
              { icon: Key, title: 'Transfer Protocol', desc: 'Cryptographically verified ownership transfers between parties.' },
              { icon: Settings, title: 'Inheritance Triggers', desc: 'Automated succession based on predefined legal conditions.' },
              { icon: Lock, title: 'Legal Proxy', desc: 'Delegated authority for stylists, heirs, and trusted advisors.' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.trust ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/30 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 transition-all group">
                  <item.icon className="w-6 h-6 text-gray-600 group-hover:text-gray-300 transition-colors" />
                </div>
                <h4 className="text-base font-light mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Security Protocols */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-light mb-4">Security Protocols</h3>
              <p className="text-gray-400 text-base font-light max-w-3xl mx-auto">
                More than protection — this is digital vault infrastructure that operates like private banking systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Lock, title: 'Emergency Escrow', desc: 'Multi-signature security with time-locked recovery protocols. Your assets remain accessible even in crisis scenarios.' },
                { icon: WifiOff, title: 'Offline Mode', desc: 'Critical functions operate without network dependency. Your security infrastructure remains operational always.' },
                { icon: Eye, title: 'Biometric Fallback', desc: 'Identity verification that cannot be stolen or duplicated. Multiple authentication layers ensure only you control access.' },
                { icon: Settings, title: 'Command Center', desc: 'Delegated control hub for managing multiple assets, beneficiaries, and authorization levels from one interface.' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`transition-all duration-1000 ${
                    isVisible.trust ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + i * 150}ms` }}
                >
                  <div className="flex items-start gap-4 bg-gray-900/20 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                    <item.icon className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-base font-light mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 animate-section" data-section="cta">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            &ldquo;Silence, control,<br/>
            <span className="text-gray-400">trust, reward.&rdquo;</span>
          </h2>
          
          <p 
            className={`text-gray-400 text-lg font-light mb-16 italic transition-all duration-1000 delay-200 ${
              isVisible.cta ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Infrastructure, not a dealer.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="px-8 py-3 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all">
              Learn More
            </button>
            <button className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white text-black px-8 py-3 rounded-full text-sm font-light hover:scale-105 transition-transform flex items-center justify-center gap-3">
                Request Access
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
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
            © 2024 AUCTA. All rights reserved. Private access only.
          </p>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}