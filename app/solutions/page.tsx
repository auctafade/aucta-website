'use client'

import { useState, useEffect } from 'react'
import { Link2, Shield, Zap, ArrowRight, AlertTriangle, BookOpen, TrendingDown, Eye, CheckCircle, Circle, Star } from 'lucide-react'
import Header from '../components/layout/header'

export default function Solutions() {
  type SectionKey = 'hero' | 'gap' | 'bridge' | 'process' | 'permanence' | 'cta';
  const [isVisible, setIsVisible] = useState<Partial<Record<SectionKey, boolean>>>({})
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
      {/* Header */}
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
          className="absolute right-0 top-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

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
          <div className="absolute bottom-32 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <Circle className="w-1 h-1 text-white/15 fill-current" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            THE COMPLETE SOLUTION
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-12 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gray-100 mb-2">Luxury</div>
            <div className="text-gray-100 mb-2">Infrastructure</div>
            <div className="text-gray-400">Solutions</div>
          </h1>
          
          <p 
            className={`text-gray-400 text-lg font-light max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            The first protocol that transforms physical luxury into permanent digital identity, 
            creating an unbreakable chain of value, authenticity, and legacy.
          </p>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="py-32 px-6 animate-section" data-section="gap">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                isVisible.gap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              The gap between<br/>
              <span className="text-gray-400">creation and forever</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible.gap ? 'opacity-100' : 'opacity-0'
              }`}
            >
              What happens after the boutique doors close?
            </p>
          </div>
          
          {/* Three problems */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Link2, 
                title: 'Connection Lost', 
                desc: 'The moment luxury leaves its origin, the relationship breaks. No continuity, no custody, no control.',
                note: 'Value becomes unverifiable',
                color: 'text-red-500/60'
              },
              { 
                icon: BookOpen, 
                title: 'Stories Fade', 
                desc: 'Heritage dissolves across generations. Provenance becomes folklore. Authenticity becomes questionable.',
                note: 'Legacy disappears',
                color: 'text-red-500/60'
              },
              { 
                icon: TrendingDown, 
                title: 'Economics Invisible', 
                desc: 'Creators never benefit from resale success. Owners can\'t prove what they have. Markets operate blindly.',
                note: 'Value is lost forever',
                color: 'text-red-500/60'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`group transition-all duration-1000 ${
                  isVisible.gap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 h-full hover:border-red-500/10 transition-all">
                    <div className="w-16 h-16 mx-auto mb-8 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-red-500/20 transition-all">
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-light mb-6 text-center">{item.title}</h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center">
                      {item.desc}
                    </p>
                    
                    <p className="text-gray-600 italic text-xs text-center">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Built the Bridge Section */}
      <section className="py-32 px-6 animate-section" data-section="bridge">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 transition-all duration-1000 ${
                isVisible.bridge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              We built the bridge.
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible.bridge ? 'opacity-100' : 'opacity-0'
              }`}
            >
              AUCTA creates permanent digital identity for physical luxury, 
              ensuring value, authenticity, and story persist forever.
            </p>
          </div>
          
          {/* Three solutions */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Link2, 
                title: 'Digital Twin', 
                subtitle: 'EVERY OBJECT BECOMES IMMORTAL',
                desc: 'Secure NFC integration creates an unbreakable link between physical and digital identity.',
                color: 'text-green-500/60'
              },
              { 
                icon: Shield, 
                title: 'Soulbound Ownership', 
                subtitle: 'IDENTITY-LOCKED VERIFICATION',
                desc: 'Private blockchain technology ensures ownership can never be forged, stolen, or disputed.',
                color: 'text-green-500/60'
              },
              { 
                icon: Zap, 
                title: 'Economic Engine', 
                subtitle: 'VALUE FLOWS PERPETUALLY',
                desc: 'ECHO system ensures creators benefit from every resale while owners build lasting wealth.',
                color: 'text-green-500/60'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.bridge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-green-500/20 transition-all group">
                  <item.icon className={`w-8 h-8 ${item.color} group-hover:text-green-400 transition-colors`} />
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

      {/* Process Section */}
      <section className="py-32 px-6 animate-section" data-section="process">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              From physical to<br/>
              <span className="text-gray-400">protected forever</span>
            </h2>
          </div>
          
          {/* Three-step process */}
          <div className="max-w-5xl mx-auto space-y-24">
            {[
              {
                number: '01',
                title: 'Integration',
                subtitle: 'PHYSICAL MEETS DIGITAL',
                desc: 'Every luxury object receives a tamper-proof NFC chip, invisible to the eye but containing the object\'s complete digital identity.',
                features: ['Certified embedding', 'Tamper-proof sealing', 'Aesthetic preservation'],
                icon: Zap,
                color: 'from-yellow-500/10 to-transparent'
              },
              {
                number: '02',
                title: 'Registration',
                subtitle: 'OWNERSHIP VERIFIED',
                desc: 'Objects are minted as soulbound tokens on our private blockchain, creating an unbreakable link to verified human identity.',
                features: ['Immutable ownership', 'Encrypted metadata', 'Private verification'],
                icon: Shield,
                color: 'from-blue-500/10 to-transparent'
              },
              {
                number: '03',
                title: 'Activation',
                subtitle: 'ECOSYSTEM ENGAGED',
                desc: 'ECHO system activates, creating automatic royalties, inheritance protocols, and value redistribution across the entire ecosystem.',
                features: ['5% resale commission', 'Automatic inheritance', 'Multi-party settlements'],
                icon: Star,
                color: 'from-purple-500/10 to-transparent'
              }
            ].map((step, i) => (
              <div 
                key={i}
                className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                  isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                <div className={i % 2 === 1 ? 'order-2' : ''}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl font-extralight text-gray-700">{step.number}</div>
                    <div>
                      <h3 className="text-3xl font-extralight mb-2">{step.title}</h3>
                      <p className="text-xs text-gray-600 uppercase tracking-wider">{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {step.desc}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {step.features.map((feature, j) => (
                      <div key={j} className="bg-gray-900/30 backdrop-blur-sm border border-white/5 rounded-xl p-3 text-center hover:border-white/10 transition-all">
                        <div className="text-xs text-gray-500">{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`flex justify-center ${i % 2 === 1 ? 'order-1' : ''}`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-3xl`} />
                    <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                      <div className="w-32 h-32 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl border border-white/5 flex items-center justify-center">
                        <step.icon className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="text-center mt-4 text-sm text-gray-500">{step.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permanence Section */}
      <section className="py-32 px-6 animate-section" data-section="permanence">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                isVisible.permanence ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Beyond protection.<br/>
              <span className="text-gray-400">True permanence.</span>
            </h2>
          </div>
          
          {/* Four guarantees */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Eye, value: '∞', title: 'Generational Tracking', desc: 'Complete provenance across all transfers' },
              { icon: CheckCircle, value: '100%', title: 'Authenticity Verification', desc: 'Mathematically verifiable ownership' },
              { icon: AlertTriangle, value: '0%', title: 'Creator Royalties Lost to Friction', desc: 'Every resale creates value' },
              { icon: Shield, value: '24/7', title: 'Global Protection Always Available', desc: 'Never offline security' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`group transition-all duration-1000 ${
                  isVisible.permanence ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl p-6 h-full hover:border-white/10 transition-all text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gray-900/50 backdrop-blur rounded-xl flex items-center justify-center border border-white/5">
                      <item.icon className="w-6 h-6 text-gray-500" />
                    </div>
                    
                    <div className="text-3xl font-extralight mb-3">{item.value}</div>
                    <h4 className="text-sm font-light mb-2 leading-tight">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 animate-section" data-section="cta">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ready to make<br/>
            <span className="text-gray-400">luxury permanent?</span>
          </h2>
          
          <p 
            className={`text-gray-400 text-lg font-light mb-16 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible.cta ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Join the protocol that ensures your most precious objects maintain their 
            identity, value, and story across generations.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white text-black px-10 py-4 rounded-full font-light hover:scale-105 transition-transform flex items-center gap-3">
                Begin Integration
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
            <button className="px-10 py-4 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all">
              Discover Your Benefits
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-xs">© 2024 AUCTA. All rights reserved.</div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Security</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Support</a>
            </div>
          </div>
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