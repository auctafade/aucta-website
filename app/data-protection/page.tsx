'use client'

import { useState, useEffect } from 'react'
import { Shield, Lock, Database, Eye, Server, Users, FileText, AlertTriangle, CheckCircle, Circle } from 'lucide-react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export default function DataProtectionPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
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

  const dataCategories = [
    { category: 'Identification', examples: 'Name, address, ID, selfie', access: 'Owner, Legal, DPO only' },
    { category: 'Ownership', examples: 'Vault ID, product UUID, timestamp', access: 'Owner, AUCTA internal' },
    { category: 'Activity', examples: 'Logins, confirmations, Face ID checks', access: 'Security only' },
    { category: 'Communication', examples: 'Messages with concierge, transfer requests', access: 'Concierge + owner' },
    { category: 'Blockchain', examples: 'Wallet address (or vault proxy), transaction hashes', access: 'Owner, system, public pseudonymised' }
  ]

  const storageDurations = [
    { dataType: 'Identity (KYC)', duration: '10 years (AMLD5 compliance)' },
    { dataType: 'Vault & Object History', duration: 'Indefinite (compliance + ownership proof)' },
    { dataType: 'Session Logs', duration: '12 months' },
    { dataType: 'Biometric (opt-in)', duration: 'Deleted within 30 days of deactivation' },
    { dataType: 'Transfer/Resale History', duration: 'Indefinite, hashed' }
  ]

  const vaultAccessControls = [
    { role: 'Owner', auth: 'Email + Password + 2FA + Facial ID (if active)' },
    { role: 'Concierge', auth: 'Temporary vault key + SMS code' },
    { role: 'Legal Delegate', auth: 'Smart contract trigger + identity proof' },
    { role: 'AUCTA Admin', auth: 'Read-only access under audit approval only' }
  ]

  const clientControls = [
    'Access or export of your full vault data',
    'Deletion of personal identity (subject to legal restrictions)',
    'Deactivation of facial/biometric features',
    'Transfer of assets to heirs or proxies',
    'Review of who accessed your vault (access logs available)'
  ]

  const complianceItems = [
    'Regulation (EU) 2016/679 (GDPR)',
    'Loi Informatique et Libertés (France)',
    'ePrivacy Directive (cookies, tracking)',
    'AMLD5 & AMLD6 (Anti-Money Laundering Directives for identity checks)'
  ]

  const zeroTrackingItems = [
    'No Google Analytics',
    'No social pixel trackers',
    'No third-party cookies',
    'No automated advertising',
    'No external mailing providers without encryption',
    'All analytics are anonymised and run in-house'
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
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

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 animate-section" data-section="hero">
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
            <Circle className="w-3 h-3 text-white/5 fill-current" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            PRIVACY BY INFRASTRUCTURE
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-8 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Data Protection<br/>
            <span className="text-gray-400">Protocol</span>
          </h1>
          
          <div 
            className={`text-gray-400 text-sm space-y-2 mb-12 transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p>Last Updated: January 2025</p>
            <p>Entity: AUCTA Protocol SARL</p>
            <p>Jurisdiction: French Republic (EU)</p>
          </div>

          <div 
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto hover:border-white/10 transition-all">
              <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
                At AUCTA, data protection is not a feature — it is the foundation. Every vault, object, 
                smart contract, and client interaction is encrypted, segmented, and controlled by a custom protocol architecture.
              </p>
              <div className="space-y-3 text-gray-500">
                <p className="font-light">We do not run ads. We do not sell data. We do not allow third-party analytics.</p>
                <p className="text-gray-300 font-light">We engineer for privacy permanence, not just compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* Design Principles */}
          <div className="mb-16 animate-section" data-section="principles">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 
                  className={`text-4xl md:text-5xl font-extralight mb-12 flex items-center transition-all duration-1000 ${
                    isVisible.principles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Shield className="w-8 h-8 mr-6 text-gray-500" />
                  Design Principles
                </h2>
                <p 
                  className={`text-gray-400 font-light mb-12 transition-all duration-1000 delay-200 ${
                    isVisible.principles ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  AUCTA applies a three-tiered data protection model:
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Users,
                      title: 'Tier 1: Client Privacy',
                      color: 'purple',
                      items: [
                        'All user data in EU-hosted servers under strict RLS controls',
                        'No AUCTA employee has default access to full identity sets',
                        'Optional facial verification processed on-device'
                      ]
                    },
                    {
                      icon: Database,
                      title: 'Tier 2: Object Privacy',
                      color: 'purple',
                      items: [
                        'Object metadata stored separately from client data',
                        'Only owner or designated proxies can access both sets',
                        'Privacy bridge for resale or inheritance transfers'
                      ]
                    },
                    {
                      icon: Lock,
                      title: 'Tier 3: Protocol Privacy',
                      color: 'purple',
                      items: [
                        'Transactions hashed and stored on private blockchain',
                        'Smart contracts handle transfers pseudonymously',
                        'Identity-minimised permanence architecture'
                      ]
                    }
                  ].map((tier, i) => (
                    <div 
                      key={i}
                      className={`group transition-all duration-1000 ${
                        isVisible.principles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${400 + i * 200}ms` }}
                    >
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative bg-gray-900/30 backdrop-blur rounded-2xl p-6 border border-white/5 h-full hover:border-white/10 transition-all">
                          <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-xl flex items-center justify-center border border-white/5 mb-6 group-hover:border-purple-500/20 transition-all">
                            <tier.icon className={`w-6 h-6 text-${tier.color}-500/60 group-hover:text-${tier.color}-400 transition-colors`} />
                          </div>
                          <h3 className="text-lg font-light text-white mb-4">{tier.title}</h3>
                          <ul className="space-y-2">
                            {tier.items.map((item, j) => (
                              <li key={j} className="text-gray-500 text-sm font-light flex items-start">
                                <div className="w-1 h-1 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Categories */}
          <div className="mb-16 animate-section" data-section="categories">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 
                  className={`text-4xl md:text-5xl font-extralight mb-12 flex items-center transition-all duration-1000 ${
                    isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Database className="w-8 h-8 mr-6 text-gray-500" />
                  Data Categories
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Category</th>
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Examples</th>
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Access Scope</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategories.map((row, index) => (
                        <tr 
                          key={index} 
                          className={`border-b border-white/5 hover:bg-white/[0.02] transition-all ${
                            isVisible.categories ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                          <td className="text-white font-light py-4 pr-6">{row.category}</td>
                          <td className="text-gray-400 text-sm py-4 pr-6">{row.examples}</td>
                          <td className="text-gray-500 text-sm py-4">{row.access}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Locations & Storage */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-section" data-section="storage">
            <div 
              className={`relative group transition-all duration-1000 ${
                isVisible.storage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 h-full hover:border-white/10 transition-all">
                <h3 className="text-2xl font-extralight mb-8 flex items-center">
                  <Server className="w-6 h-6 mr-4 text-gray-500" />
                  Processing Locations
                </h3>
                <div className="text-gray-400 font-light leading-relaxed space-y-4">
                  <p>All personal data is stored in <span className="text-gray-300">France or Luxembourg</span>.</p>
                  <p>Backup copies (encrypted) are stored in cold storage vaults under contracted EU ISO27001+ providers.</p>
                  <p>Biometric data is not stored in raw form, and processed either on-device or in anonymised vector format.</p>
                </div>
              </div>
            </div>

            <div 
              className={`relative group transition-all duration-1000 delay-200 ${
                isVisible.storage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 h-full hover:border-white/10 transition-all">
                <h3 className="text-2xl font-extralight mb-8 flex items-center">
                  <FileText className="w-6 h-6 mr-4 text-gray-500" />
                  Storage Durations
                </h3>
                <div className="space-y-3">
                  {storageDurations.map((row, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-300 text-sm font-light">{row.dataType}</span>
                      <span className="text-gray-500 text-xs text-right ml-4">{row.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client Controls */}
          <div className="mb-16 animate-section" data-section="controls">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 
                  className={`text-4xl md:text-5xl font-extralight mb-8 flex items-center transition-all duration-1000 ${
                    isVisible.controls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Users className="w-8 h-8 mr-6 text-gray-500" />
                  Client Controls
                </h2>
                <p 
                  className={`text-gray-400 font-light mb-8 transition-all duration-1000 delay-200 ${
                    isVisible.controls ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  You can request at any time:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {clientControls.map((control, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start text-gray-300 hover:text-gray-200 transition-all group ${
                        isVisible.controls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-purple-500/60 mr-4 flex-shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                      <span className="font-light">{control}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gray-900/30 backdrop-blur rounded-2xl border border-white/5">
                  <p className="text-gray-400 font-light">
                    Contact: <span className="text-purple-400">privacy@aucta.io</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GDPR Compliance */}
          <div className="mb-16 animate-section" data-section="gdpr">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 className="text-4xl md:text-5xl font-extralight mb-8 flex items-center">
                  <Shield className="w-8 h-8 mr-6 text-gray-500" />
                  GDPR Compliance
                </h2>
                <p className="text-gray-400 font-light mb-8">AUCTA is fully compliant with:</p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="flex items-start text-gray-300 hover:text-gray-200 transition-colors group">
                      <CheckCircle className="w-4 h-4 text-purple-500/60 mr-4 flex-shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm font-light italic">
                  Our appointed Data Protection Officer (DPO) monitors all access logs and audit trails.
                </p>
              </div>
            </div>
          </div>

          {/* Vault Access Controls */}
          <div className="mb-16 animate-section" data-section="vault">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 className="text-4xl md:text-5xl font-extralight mb-12 flex items-center">
                  <Lock className="w-8 h-8 mr-6 text-gray-500" />
                  Vault Access Controls
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Role</th>
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Authentication Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vaultAccessControls.map((row, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="text-white font-light py-4 pr-6">{row.role}</td>
                          <td className="text-gray-400 text-sm py-4">{row.auth}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-sm font-light italic mt-8">
                  We log every access, including IP address, timestamp, and what data was viewed or modified.
                </p>
              </div>
            </div>
          </div>

          {/* Blockchain Compatibility */}
          <div className="mb-16 animate-section" data-section="blockchain">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 className="text-4xl md:text-5xl font-extralight mb-8 flex items-center">
                  <Database className="w-8 h-8 mr-6 text-gray-500" />
                  Blockchain Compatibility
                </h2>
                <div className="text-gray-400 font-light leading-relaxed space-y-6">
                  <p>Blockchain records are by nature immutable. To stay GDPR-compliant, AUCTA:</p>
                  <div className="space-y-3 ml-8">
                    {[
                      'Stores no plain identity on-chain',
                      'Uses UUID-linked tokens for object and client traces',
                      'Anchors metadata off-chain (where it can be deleted)',
                      'Uses layered permissions to restrict lookup and access'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-1 h-1 bg-gray-700 rounded-full mt-2 mr-4" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mt-8">We can prove history — without exposing identity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zero Third-Party Profiling */}
          <div className="mb-16 animate-section" data-section="tracking">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 className="text-4xl md:text-5xl font-extralight mb-8 flex items-center">
                  <Eye className="w-8 h-8 mr-6 text-gray-500" />
                  Zero Third-Party Profiling
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {zeroTrackingItems.map((item, index) => (
                    <div key={index} className="flex items-start text-gray-300 hover:text-gray-200 transition-colors group">
                      <CheckCircle className="w-4 h-4 text-purple-500/60 mr-4 flex-shrink-0 mt-0.5 group-hover:text-purple-400 transition-colors" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Breach Policy */}
          <div className="mb-16 animate-section" data-section="breach">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <h2 className="text-4xl md:text-5xl font-extralight mb-8 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-6 text-red-500/60" />
                  Reporting & Breach Policy
                </h2>
                <p className="text-gray-400 font-light mb-6">In the event of a confirmed data breach:</p>
                <div className="space-y-3 ml-8">
                  {[
                    'You will be notified within 72 hours, as per GDPR Article 33',
                    'Breach type, scope, and impact will be fully disclosed',
                    'AUCTA will freeze all vault activity and regenerate session keys'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start text-gray-300">
                      <div className="w-1 h-1 bg-red-900 rounded-full mt-2 mr-4" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-section" data-section="contact">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 text-center hover:border-white/10 transition-all">
                <h2 className="text-4xl md:text-5xl font-extralight mb-12 flex items-center justify-center">
                  <FileText className="w-8 h-8 mr-6 text-gray-500" />
                  Contact
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-light text-white mb-6">Data Protection Request</h3>
                    <div className="text-gray-400 space-y-2 font-light">
                      <p>AUCTA Protocol SARL</p>
                      <p>Délégué à la Protection des Données (DPO)</p>
                      <p className="text-purple-400">privacy@aucta.io</p>
                      <p>[Legal Address], France</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white mb-6">File a Complaint</h3>
                    <div className="text-gray-400 space-y-2 font-light">
                      <p>CNIL - Commission Nationale de l&apos;Informatique et des Libertés</p>
                        <p className="text-purple-400">https://www.cnil.fr/</p>
                        <p>Commission Nationale de l&apos;Informatique et des Libertés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Background Grid Animation */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.02}px)`
          }}
        />
      </div>

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

      <Footer />
    </div>
  )
}