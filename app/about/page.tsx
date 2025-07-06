'use client'

import { useState, useEffect } from 'react'
import { Heart, Eye, Circle, Infinity, Users, Shield, ArrowRight } from 'lucide-react'
import Header from '../components/layout/header'

export default function About() {
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
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-20 animate-float">
            <Circle className="w-2 h-2 text-white/10 fill-current" />
          </div>
          <div className="absolute top-48 right-32 animate-float" style={{ animationDelay: '1s' }}>
            <Circle className="w-1 h-1 text-white/20 fill-current" />
          </div>
          <div className="absolute bottom-32 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
            <Circle className="w-1 h-1 text-white/15 fill-current" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            PHILOSOPHY
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-12 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gray-100 mb-2">Built</div>
            <div className="text-gray-100 mb-2">for what</div>
            <div className="text-gray-400">outlives us</div>
          </h1>
          
          <div 
            className={`max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gray-400 text-lg font-light mb-6 leading-relaxed">
              AUCTA is a protocol of memory.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We exist to preserve the identity, value, and story<br/>
              of the world&apos;s most exceptional objects.
            </p>
          </div>
        </div>
      </section>

      {/* Luxury ends too early */}
      <section className="py-32 px-6 animate-section" data-section="luxury">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-16 leading-[0.9] transition-all duration-1000 ${
                isVisible.luxury ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Luxury ends<br/>
              <span className="text-gray-400">too early</span>
            </h2>
            
            <div 
              className={`max-w-2xl mx-auto space-y-6 mb-16 transition-all duration-1000 delay-200 ${
                isVisible.luxury ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-gray-300 text-lg font-light">The sale happens.</p>
              <p className="text-gray-300 text-lg font-light">The box is opened.</p>
              <p className="text-gray-300 text-lg font-light">The story begins.</p>
              
              <div className="py-8">
                <p className="text-gray-600 text-sm italic">And yet —</p>
              </div>
            </div>
          </div>
          
          {/* Three problems */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: Heart, 
                title: 'Connection broken', 
                desc: 'The moment that object leaves the boutique, its connection is severed. The maison forgets it.',
                color: 'text-red-500/40'
              },
              { 
                icon: Eye, 
                title: 'Marketplace blind', 
                desc: 'No one can track it. No one can verify it. The story becomes folklore.',
                color: 'text-red-500/40'
              },
              { 
                icon: Circle, 
                title: 'Client powerless', 
                desc: 'Nothing but a receipt. No continuity. No custody. No lasting connection.',
                color: 'text-red-500/40'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.luxury ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-red-500/10 transition-all group">
                  <item.icon className={`w-8 h-8 ${item.color} group-hover:text-red-400/60 transition-colors`} />
                </div>
                
                <h3 className="text-xl font-light mb-6">{item.title}</h3>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-500 text-base italic font-light">What does value mean if it can&apos;t be preserved?</p>
            <p className="text-gray-500 text-base italic font-light">What does legacy mean if it disappears at transfer?</p>
          </div>
        </div>
      </section>

      {/* Not to sell. To structure. */}
      <section className="py-32 px-6 animate-section" data-section="structure">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                isVisible.structure ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Not to sell.<br/>
              <span className="text-gray-400">To structure.</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
                isVisible.structure ? 'opacity-100' : 'opacity-0'
              }`}
            >
              AUCTA was created to give physical luxury 
              the infrastructure it deserves.
            </p>
            
            <div 
              className={`space-y-3 mb-12 transition-all duration-1000 delay-400 ${
                isVisible.structure ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-gray-500 text-sm">Not marketing. Not tracking. Not hype.</p>
              <p className="text-gray-300 font-light">But real, protocol-level infrastructure.</p>
            </div>
            
            <p className="text-gray-400 mb-16">We built a private system where:</p>
          </div>
          
          {/* Four principles grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Every object has a living identity',
              'Every resale activates cashback and royalties',
              'Every Maison stays connected',
              'Every inheritance is traceable'
            ].map((text, i) => (
              <div 
                key={i}
                className={`group transition-all duration-1000 ${
                  isVisible.structure ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (i % 2 === 0 ? '-translate-x-8' : 'translate-x-8')
                }`}
                style={{ transitionDelay: `${600 + i * 150}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-purple-500/10 transition-all">
                    <div className="flex items-center gap-3">
                      <Circle className="w-2 h-2 text-purple-500/40 fill-current" />
                      <span className="text-sm font-light">{text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-400 text-base font-light">And every action is protected by encrypted logic — not promises.</p>
          </div>
        </div>
      </section>

      {/* What we protect */}
      <section className="py-32 px-6 animate-section" data-section="protect">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                isVisible.protect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              What we protect<br/>
              <span className="text-gray-400">is not the object.</span>
            </h2>
            
            <p 
              className={`text-gray-300 text-xl font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible.protect ? 'opacity-100' : 'opacity-0'
              }`}
            >
              It&apos;s what it represents.
            </p>
          </div>
          
          {/* Three core values */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Infinity, 
                title: 'Continuity', 
                subtitle: 'THE UNBROKEN CHAIN',
                desc: 'We make sure the chain of ownership is never lost. Whether you sell, gift, or inherit — AUCTA keeps the story intact.'
              },
              { 
                icon: Users, 
                title: 'Custody', 
                subtitle: 'VERIFIED HUMANITY',
                desc: 'Each object is tied to a verified human — not a wallet, not a QR code. No one else can claim it. Nothing gets diluted.'
              },
              { 
                icon: Shield, 
                title: 'Control', 
                subtitle: 'PROGRAMMABLE RIGHTS',
                desc: 'Clients define what happens: who can see, touch, transfer, inherit, or delegate. All rights are programmable. All actions are logged.'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.protect ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-purple-500/20 transition-all group">
                  <item.icon className="w-8 h-8 text-gray-500 group-hover:text-purple-400/60 transition-colors" />
                </div>
                
                <h3 className="text-xl font-light mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-6">{item.subtitle}</p>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From physical to protected */}
      <section className="py-32 px-6 animate-section" data-section="physical">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                isVisible.physical ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              From physical<br/>
              <span className="text-gray-400">to protected</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible.physical ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Every certified item in AUCTA is:
            </p>
          </div>
          
          {/* Six protections grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-20">
            {[
              'Tagged with a secure NFC chip',
              'Linked to a soulbound token on a private blockchain',
              'Logged into a client vault',
              'Transferable only through verified auction',
              'Economically activated through our ECHO system',
              'Protected by 5% resale commission engine'
            ].map((text, i) => (
              <div 
                key={i}
                className={`group transition-all duration-1000 ${
                  isVisible.physical ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-xl p-5 hover:border-purple-500/10 transition-all">
                    <div className="flex items-start gap-3">
                      <Circle className="w-1.5 h-1.5 text-purple-500/40 fill-current mt-1.5 flex-shrink-0" />
                      <span className="text-xs font-light text-gray-400">{text}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-base font-light mb-2">This turns passive objects into financial identities —</p>
            <p className="text-gray-500 italic text-sm">without losing the soul of the item.</p>
          </div>
        </div>
      </section>

      {/* We believe */}
      <section className="py-32 px-6 animate-section" data-section="believe">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-16 transition-all duration-1000 ${
              isVisible.believe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We believe
          </h2>
          
          <div 
            className={`space-y-12 mb-20 transition-all duration-1000 delay-200 ${
              isVisible.believe ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gray-300 text-xl font-light leading-relaxed">
              Every object of value deserves a system that respects it.
            </p>
            
            <div className="space-y-3">
              <p className="text-gray-400 text-base font-light">Not just a place to be bought or sold —</p>
              <p className="text-gray-400 text-base font-light">but a structure that remembers, protects, and evolves with time.</p>
            </div>
            
            <div className="space-y-3 pt-8">
              <p className="text-gray-400 text-base font-light">AUCTA is not here to disrupt luxury.</p>
              <p className="text-gray-200 text-lg font-light">We are here to preserve what makes it matter.</p>
            </div>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              isVisible.believe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white text-black px-10 py-4 rounded-full font-light hover:scale-105 transition-transform flex items-center gap-3">
                Discover the Protocol
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
            <button className="px-10 py-4 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all">
              Become a Certified Vault Holder
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