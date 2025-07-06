'use client'

import { useState, useEffect } from 'react'
import { Building, ArrowRight, CheckCircle, Shield, Zap, Users, Lock, Database, FileCheck, Star } from 'lucide-react'
import Header from '../components/layout/header'

export default function Institutions() {
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
            INSTITUTIONAL INFRASTRUCTURE
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-12 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Infrastructure for the<br/>
            <span className="text-gray-400">Luxury Economy</span>
          </h1>
          
          <div 
            className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-gray-400 text-lg font-light mb-6 leading-relaxed">
              AUCTA is not a marketplace. Not a wallet. Not a feature.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              It&apos;s the invisible layer linking boutiques, platforms, auction houses, and verified resellers 
              — through a single protocol of custody and value.
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
                Request Integration Access
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Stripe Comparison Section */}
      <section className="py-32 px-6 animate-section" data-section="stripe">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                  isVisible.stripe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                AUCTA Is to Marketplaces<br/>
                <span className="text-gray-400">What Stripe Is to Checkout</span>
              </h2>
              
              <p 
                className={`text-gray-400 text-lg font-light mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible.stripe ? 'opacity-100' : 'opacity-0'
                }`}
              >
                When a luxury item is sold on a participating marketplace, buyers can 
                now pay &quot;with AUCTA.&quot; This simple trigger links the transaction directly 
                to the protocol: product metadata is secured, the vault is assigned, 
                ownership is logged, and cashback or royalties are activated — all 
                without leaving the platform.
              </p>
              
              <div 
                className={`mb-12 transition-all duration-1000 delay-400 ${
                  isVisible.stripe ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-light mb-4">No migration. No codebase rewrites.</p>
                <p className="text-gray-500 text-sm italic">AUCTA operates as a certified checkout layer that quietly handles:</p>
              </div>
              
              <div 
                className={`grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12 transition-all duration-1000 delay-600 ${
                  isVisible.stripe ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                {[
                  'Ownership transfer',
                  'KYC verification',
                  'Cashback logic',
                  'Vault activation',
                  'Brand royalties',
                  'Traceability confirmation'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-200 transition-colors">
                    <CheckCircle className="w-3 h-3 text-green-500/60" />
                    {item}
                  </div>
                ))}
              </div>
              
              <p className="text-gray-500 italic text-sm font-light">
                Platforms keep their interface. We handle the chain of trust.
              </p>
            </div>
            
            {/* Protocol Integration Visual */}
            <div 
              className={`hidden lg:flex justify-center transition-all duration-1000 delay-800 ${
                isVisible.stripe ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-sm font-light">Protocol Integration</span>
                    <Zap className="w-4 h-4 text-yellow-500/60" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-sm text-gray-400">Seamless marketplace integration</span>
                      <div className="w-10 h-4 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full flex items-center justify-end pr-0.5">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
                      <div className="text-center text-sm font-light mb-6">Checkout Layer</div>
                      
                      <div className="space-y-3">
                        {['Identity verification', 'Metadata capture', 'Vault assignment', 'Value distribution'].map((text, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-500">
                            <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auction Houses Section */}
      <section className="py-32 px-6 animate-section" data-section="auction">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Auction Integration Visual */}
            <div 
              className={`hidden lg:flex justify-center order-2 lg:order-1 transition-all duration-1000 ${
                isVisible.auction ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <Building className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-light">Auction Integration</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Pre-sale verification', status: 'Active', color: 'text-green-400' },
                      { label: 'NFC embedding', status: 'Optional', color: 'text-blue-400' },
                      { label: 'Buyer identity logging', status: 'Secured', color: 'text-green-400' },
                      { label: 'Vault assignment', status: 'Instant', color: 'text-purple-400' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3">
                        <span className="text-sm text-gray-400">{item.label}</span>
                        <span className={`text-xs ${item.color}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
                  isVisible.auction ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Trusted by the World&apos;s<br/>
                <span className="text-gray-400">Leading Auction Houses</span>
              </h2>
              
              <p 
                className={`text-gray-400 text-lg font-light mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible.auction ? 'opacity-100' : 'opacity-0'
                }`}
              >
                AUCTA provides end-to-end infrastructure for physical goods sold at 
                auction — ensuring each object&apos;s identity is verified, its provenance is 
                preserved, and its resale value remains traceable beyond the hammer.
              </p>
              
              <div 
                className={`mb-12 transition-all duration-1000 delay-400 ${
                  isVisible.auction ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-light mb-6">Auction houses use AUCTA to:</p>
                
                <div className="space-y-3">
                  {[
                    'Verify pre-sale identity and condition',
                    'Embed NFC traceability chips (optional)',
                    'Log buyer identity and payment',
                    'Assign certified ownership to a private vault',
                    'Provide post-sale custody, royalty distribution, or legacy delegation'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      <div className="w-1 h-1 bg-gray-700 rounded-full mt-2" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-500 italic text-sm font-light">
                Once the sale is confirmed, the product becomes a self-aware digital asset — no 
                matter how many times it resells, inherits, or transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondhand Economy Section */}
      <section className="py-32 px-6 animate-section" data-section="secondhand">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.secondhand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              AUTHENTICATION GATEWAY
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.secondhand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Bringing Structure to the<br/>
              <span className="text-gray-400">Secondhand Economy</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible.secondhand ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Pre-owned pieces entering the AUCTA system must pass through a certified authentication gateway.
            </p>
          </div>
          
          {/* Four authentication steps */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {[
              { icon: Database, title: 'Digital Fingerprinting', desc: 'Metadata + NFC tagging' },
              { icon: CheckCircle, title: 'Verified Assignment', desc: 'Confirmed buyer identity' },
              { icon: Lock, title: 'Private Resale Entry', desc: 'Secured marketplace access' },
              { icon: Zap, title: 'Value Logic Setup', desc: 'Cashback and royalty systems' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.secondhand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
          
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2 italic">We don&apos;t verify once.</p>
            <p className="text-xl font-light">We maintain provenance across generations.</p>
          </div>
        </div>
      </section>

      {/* Digital to Doorstep Section */}
      <section className="py-32 px-6 animate-section" data-section="delivery">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                  isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-8 h-px bg-gray-700" />
                CONCIERGE SERVICE
              </div>
              
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                  isVisible.delivery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                From Digital<br/>
                <span className="text-gray-400">to Doorstep</span>
              </h2>
              
              <p 
                className={`text-gray-400 text-lg font-light mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible.delivery ? 'opacity-100' : 'opacity-0'
                }`}
              >
                AUCTA&apos;s private delivery services are available to Black and Centurion 
                clients. Personal stylists, curators, and houses may send pieces directly 
                to clients with verified AUCTA vaults.
              </p>
              
              <div 
                className={`mb-12 transition-all duration-1000 delay-600 ${
                  isVisible.delivery ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-light mb-6">Each delivery includes:</p>
                
                <div className="space-y-3">
                  {[
                    'Embedded NFC tagging',
                    'Sealed ownership logs',
                    'Immediate app visibility',
                    'Concierge support',
                    'One-tap transfer if refused or returned'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      <div className="w-1 h-1 bg-gray-700 rounded-full" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-500 italic text-sm font-light">
                Think of it as luxury&apos;s version of peer-to-peer.<br/>
                But logged, insured, and permanent.
              </p>
            </div>
            
            {/* Concierge Network Visual */}
            <div 
              className={`hidden lg:flex justify-center transition-all duration-1000 delay-800 ${
                isVisible.delivery ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl blur-3xl" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <Users className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-light">Concierge Network</span>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { label: 'Private Stylists', value: '24/7' },
                      { label: 'Curated Houses', value: 'Verified' },
                      { label: 'White-glove Delivery', value: 'Global' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{item.label}</span>
                        <span className="text-sm font-mono text-gray-300">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* P2P Section */}
      <section className="py-32 px-6 animate-section" data-section="p2p">
        <div className="container mx-auto max-w-7xl text-center">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.p2p ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            PEER TO PEER
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
              isVisible.p2p ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            P2P, Without<br/>
            <span className="text-gray-400">the Risk</span>
          </h2>
          
          <p 
            className={`text-gray-400 text-lg font-light max-w-4xl mx-auto leading-relaxed mb-20 transition-all duration-1000 delay-400 ${
              isVisible.p2p ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Private clients can transfer high-value items securely between AUCTA vaults. All peer-to-peer 
            resales or gifts go through encrypted smart delegation, facial reauthentication, and recorded 
            pricing logic.
          </p>
          
          {/* Four guarantees */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Shield, text: 'No fraud' },
              { icon: CheckCircle, text: 'No broken provenance' },
              { icon: Star, text: 'No lost royalties' },
              { icon: FileCheck, text: 'No paper trails' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.p2p ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + i * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/30 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 transition-all group">
                  <item.icon className="w-6 h-6 text-gray-600 group-hover:text-gray-300 transition-colors" />
                </div>
                <h4 className="text-base font-light">{item.text}</h4>
              </div>
            ))}
          </div>
          
          <p className="text-gray-500 text-lg italic font-light">Just clean, sealed, protocol-led movement.</p>
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
            Wherever Luxury Moves,<br/>
            <span className="text-gray-400">AUCTA Follows</span>
          </h2>
          
          <p 
            className={`text-gray-400 text-lg font-light mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible.cta ? 'opacity-100' : 'opacity-0'
            }`}
          >
            From boutiques to bids, from gifting to legacy — every moment of value 
            deserves a system that protects it.
          </p>
          
          <p 
            className={`text-xl font-light mb-16 transition-all duration-1000 delay-400 ${
              isVisible.cta ? 'opacity-100' : 'opacity-0'
            }`}
          >
            AUCTA is that system.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="px-8 py-3 rounded-full border border-white/10 text-sm font-light hover:bg-white/5 transition-all flex items-center justify-center gap-3">
              Contact Institutional Team
              <ArrowRight className="w-3 h-3" />
            </button>
            <button className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white text-black px-8 py-3 rounded-full text-sm font-light hover:scale-105 transition-transform flex items-center justify-center gap-3">
                Become a Certified Partner
                <Lock className="w-3 h-3" />
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