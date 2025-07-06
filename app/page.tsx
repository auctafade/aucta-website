'use client'

import { useState, useEffect } from 'react'
import { Shield, Lock, Crown, TrendingUp, RotateCcw, Key, CheckCircle, Circle, Square, Users, Building, Clock } from 'lucide-react'
import Header from './components/layout/header'

export default function Home() {
  type SectionKey = 'hero' | 'why' | 'community' | 'vault' | 'timeline' | 'value' | 'legacy' | 'cta';
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
          className="absolute right-0 top-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 animate-section" data-section="hero">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                  isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-8 h-px bg-gray-700" />
                CLOSED PROTOCOL
              </div>
              
              <h1 
                className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-8 transition-all duration-1000 delay-200 ${
                  isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="mb-2">Because value</div>
                <div className="text-gray-400">should echo.</div>
              </h1>
              
              <p 
                className={`text-gray-400 text-lg font-light mb-12 max-w-xl leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                A secure protocol for luxury assets. Authentication, ownership, and inheritance — 
                built for objects that matter across generations.
              </p>
              
              <div 
                className={`space-y-3 mb-12 transition-all duration-1000 delay-600 ${
                  isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                {['Instant boutique recognition', 'Private client pickups', 'NFC/QR activations', 'Legacy transfer rights'].map((text, i) => (
                  <div key={i} className="flex items-center text-gray-500 hover:text-gray-300 transition-colors group">
                    <div className="w-1 h-1 bg-gray-700 rounded-full mr-4 group-hover:scale-150 transition-transform" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
              
              <div 
                className={`flex items-center gap-6 transition-all duration-1000 delay-800 ${
                  isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <button className="relative group">
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white text-black px-8 py-3 rounded-full font-light hover:scale-105 transition-transform">
                    Get Aucta →
                  </div>
                </button>
                <div className="text-xs text-gray-600">
                  <div>By invitation only</div>
                  <div>Verification required</div>
                </div>
              </div>
            </div>
            
            {/* Interactive Security Visualization */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
                <div 
                  className="absolute inset-8 rounded-full border border-white/10 animate-spin"
                  style={{ animationDuration: '30s' }}
                />
                <div 
                  className="absolute inset-16 rounded-full border border-white/5 animate-spin"
                  style={{ animationDuration: '20s', animationDirection: 'reverse' }}
                />
                
                {/* Floating elements */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 animate-float">
                  <div className="bg-gray-900/80 backdrop-blur border border-white/10 rounded-xl px-4 py-2 text-xs flex items-center gap-2">
                    <Lock className="w-3 h-3" />
                    SECURE
                  </div>
                </div>
                
                <div className="absolute right-10 top-1/2 -translate-y-1/2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="bg-gray-900/80 backdrop-blur border border-white/10 rounded-xl px-4 py-2 text-xs flex items-center gap-2">
                    <CheckCircle className="w-3 h-3" />
                    VERIFIED
                  </div>
                </div>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="bg-gray-900/80 backdrop-blur border border-white/10 rounded-xl px-4 py-2 text-xs flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    SEALED
                  </div>
                </div>
                
                {/* Center icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10 hover:scale-110 transition-transform">
                    <Square className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AUCTA Exists */}
      <section className="py-32 px-6 animate-section" data-section="why">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              THE PROTOCOL
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 transition-all duration-1000 delay-200 ${
                isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Why AUCTA exists.
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible.why ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Luxury objects lose their story. Provenance breaks. Value disappears. 
              AUCTA solves this with permanent digital identity for physical luxury.
            </p>
          </div>
          
          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Shield, title: 'Permanent Identity', desc: 'Unbreakable digital identity that travels forever' },
              { icon: Lock, title: 'Private Ownership', desc: 'Encrypted vaults invisible to the world' },
              { icon: Crown, title: 'Generational Value', desc: 'Assets that compound across time' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`group transition-all duration-1000 ${
                  isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 200}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-gray-900/30 backdrop-blur border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all">
                    <item.icon className="w-10 h-10 text-gray-500 mb-6" />
                    <h3 className="text-xl font-light mb-4">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Problem/Solution */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12 md:p-16">
              <h3 className="text-2xl font-light mb-12 text-center">The Problem with Luxury Today</h3>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 mb-16">
                {[
                  'Provenance gets lost or fabricated',
                  'Authentication is expensive and unreliable',
                  'Inheritance requires complex legal processes',
                  'No ongoing relationship with brands',
                  'Resale value depends on scattered paperwork',
                  'Value dies with the physical object'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    <div className="w-1 h-1 bg-red-900 rounded-full" />
                    {text}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-xl font-light mb-8">AUCTA changes this. Permanently.</p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="px-6 py-3 rounded-full border border-white/10 text-sm hover:bg-white/5 transition-all">
                    See How It Works
                  </button>
                  <button className="px-6 py-3 rounded-full bg-white text-black text-sm hover:scale-105 transition-transform">
                    Join Aucta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for those who understand value */}
      <section className="py-32 px-6 animate-section" data-section="community">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.community ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              VERIFIED COMMUNITY
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.community ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Built for those who<br/>
              <span className="text-gray-400">understand value.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Crown, title: 'Verified Collectors', desc: 'Ownership as stewardship of value' },
              { icon: Building, title: 'Institutional Partners', desc: 'Maisons recognizing permanent infrastructure' },
              { icon: Users, title: 'Legacy Builders', desc: 'Planning value across generations' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.community ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 hover:border-white/10 transition-all group">
                  <item.icon className="w-8 h-8 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-xl font-light mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-8 py-3 rounded-full bg-white text-black text-sm hover:scale-105 transition-transform">
              Book A Private Tour →
            </button>
          </div>
        </div>
      </section>

      {/* Your vault. Your rules. */}
      <section className="py-32 px-6 animate-section" data-section="vault">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div 
                className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                  isVisible.vault ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-8 h-px bg-gray-700" />
                PRIVATE ACCESS
              </div>
              
              <h2 
                className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                  isVisible.vault ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Your vault.<br/>
                <span className="text-gray-400">Your rules.</span>
              </h2>
              
              <p 
                className={`text-gray-400 text-lg font-light mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible.vault ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Access your certified assets through a private interface designed for discretion. 
                Banking-grade security meets iOS elegance.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Shield, title: 'Biometric Authentication', desc: 'Face ID and Touch ID integration' },
                  { icon: Circle, title: 'Offline Capability', desc: 'View and verify without connectivity' },
                  { icon: Key, title: 'Emergency Protocols', desc: 'Inheritance planning built-in' }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className={`transition-all duration-1000 ${
                      isVisible.vault ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${600 + i * 200}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <item.icon className="w-5 h-5 text-gray-600 mt-0.5" />
                      <div>
                        <h4 className="font-light mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile App Visualization */}
            <div 
              className={`hidden lg:flex justify-center transition-all duration-1000 delay-800 ${
                isVisible.vault ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-[3rem] blur-3xl" />
                <div className="relative w-80 h-[600px] bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] p-3">
                  <div className="w-full h-full bg-black rounded-[2.5rem] p-6 overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-8 text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-1 h-3 bg-white/60 rounded-sm" />
                        <div className="w-5 h-3 bg-white/60 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-light">AUCTA</h3>
                      <p className="text-xs text-gray-500">Private Vault</p>
                    </div>
                    
                    {/* Asset cards */}
                    <div className="space-y-3">
                      <div className="bg-gray-900/50 backdrop-blur border border-white/5 rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-sm font-light">Patek Philippe</h4>
                            <p className="text-xs text-gray-500">Ref 5711/1A</p>
                            <p className="text-xs text-blue-400 mt-1">Verified • Insured</p>
                          </div>
                          <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg" />
                        </div>
                      </div>
                      
                      <div className="bg-gray-900/50 backdrop-blur border border-white/5 rounded-2xl p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-sm font-light">Hermès</h4>
                            <p className="text-xs text-gray-500">Birkin 25</p>
                            <p className="text-xs text-blue-400 mt-1">Certified • Protected</p>
                          </div>
                          <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom actions */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                      <button className="flex-1 bg-gray-900 py-3 rounded-xl text-xs">
                        Add Asset
                      </button>
                      <button className="flex-1 bg-white text-black py-3 rounded-xl text-xs font-medium">
                        Verify Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 animate-section" data-section="timeline">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              IMMUTABLE RECORD
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Every moment.<br/>
              <span className="text-gray-400">Forever recorded.</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
              
              {/* Timeline events */}
              <div className="space-y-8">
                {[
                  { title: 'Initial Certification', date: '2024.01.15', location: 'Geneva, Switzerland' },
                  { title: 'Service Record', date: '2024.05.18', location: 'Authorized Dealer' },
                  { title: 'Ownership Transfer', date: '2024.08.22', location: 'Private Sale' },
                  { title: 'Current Owner', date: '2024.11.28', location: 'Private Vault' }
                ].map((event, i) => (
                  <div 
                    key={i}
                    className={`relative flex items-center transition-all duration-1000 ${
                      isVisible.timeline ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${200 + i * 150}ms` }}
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-white/10">
                      <div className="w-2 h-2 bg-white/20 rounded-full" />
                    </div>
                    <div className="ml-8 flex-1 bg-gray-900/20 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-light mb-1">{event.title}</h4>
                          <p className="text-xs text-gray-500">{event.location}</p>
                        </div>
                        <span className="text-xs text-gray-600 font-mono">{event.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money that echoes forever */}
      <section className="py-32 px-6 animate-section" data-section="value">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              REWARDS THAT KEEP GIVING
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Money that<br/>
              <span className="text-gray-400">echoes forever.</span>
            </h2>
            
            <p 
              className={`text-gray-400 text-lg font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible.value ? 'opacity-100' : 'opacity-0'
              }`}
            >
              AUCTA transforms luxury objects into yield-generating assets. 
              Each verified transaction creates perpetual value for the original owner.
            </p>
          </div>
          
          {/* Value Flow Visualization */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-900/50 rounded-full flex items-center justify-center border border-white/10">
                    <Circle className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm">Original Purchase</p>
                </div>
                
                <div className="flex-1 mx-8">
                  <div className="relative h-px bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <RotateCcw className="w-4 h-4 text-gray-600 animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-900/50 rounded-full flex items-center justify-center border border-white/10">
                    <TrendingUp className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm">Every Resale</p>
                </div>
              </div>
              
              <p className="text-center mt-12 text-gray-500">
                Buy once. Earn forever.
              </p>
            </div>
          </div>
          
          {/* Three benefit pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Resale Royalties', desc: 'Earn from every future sale' },
              { icon: RotateCcw, title: 'Protocol Rewards', desc: 'Cashback for verified transfers' },
              { icon: Key, title: 'Access Privileges', desc: 'Exclusive events and priority' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`text-center transition-all duration-1000 ${
                  isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + i * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/30 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 hover:border-white/10 transition-all group">
                  <item.icon className="w-6 h-6 text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for generations */}
      <section className="py-32 px-6 animate-section" data-section="legacy">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.legacy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              SUCCESSION
              <div className="w-8 h-px bg-gray-700" />
            </div>
            
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.legacy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Built for<br/>
              <span className="text-gray-400">generations.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Shield, title: 'Secure Planning', desc: 'Multi-signature and time-lock protocols' },
              { icon: Clock, title: 'Automated Transfer', desc: 'Mathematical certainty, no delays' },
              { icon: Users, title: 'Family Continuity', desc: 'Legacy preserved, wealth sustained' }
            ].map((item, i) => (
              <div 
                key={i}
                className={`transition-all duration-1000 ${
                  isVisible.legacy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 200}ms` }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all">
                    <item.icon className="w-8 h-8 text-gray-500 mb-6" />
                    <h3 className="text-lg font-light mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Digital Testament */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12 md:p-16">
              <h3 className="text-2xl font-light mb-12 text-center">Digital Testament</h3>
              
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-sm font-light mb-6 text-gray-400">Traditional Wills</h4>
                  <div className="space-y-3">
                    {['Probate delays', 'Legal disputes', 'Asset location uncertainty', 'Value erosion over time'].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-1 h-1 bg-gray-700 rounded-full" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-light mb-6 text-gray-400">AUCTA Protocol</h4>
                  <div className="space-y-3">
                    {['Instant transfer execution', 'Cryptographic certainty', 'Complete asset visibility', 'Perpetual value generation'].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-gray-600" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 animate-section" data-section="cta">
        <div className="container mx-auto max-w-4xl text-center">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            INVITATION ONLY
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-16 leading-[1.1] transition-all duration-1000 delay-200 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Join the protocol. 
            <span className="text-gray-400"> Activate your card.</span>
            <span className="text-gray-600"> Secure your legacy.</span>
          </h2>
          
          <div 
            className={`max-w-md mx-auto transition-all duration-1000 delay-400 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gray-900/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-lg font-light mb-6">Request Private Access</h3>
                
                <div className="flex gap-3 mb-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-black/50 border border-white/10 rounded-full px-5 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                  />
                  <button className="px-6 py-3 rounded-full bg-white text-black text-sm hover:scale-105 transition-transform">
                    Request →
                  </button>
                </div>
                
                <p className="text-xs text-gray-600">
                  Verification required. Membership is curated and limited.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            {['Closed Protocol', 'Private by Design', 'Built for Generations'].map((text, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/5 text-xs text-gray-600">
                {text}
              </span>
            ))}
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