'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Shield, Lock, Users, Eye, Scale, FileText } from 'lucide-react'
import Header from '../components/layout/header'

export default function TermsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
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

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: <FileText className="w-5 h-5" />,
      content: `AUCTA is a closed infrastructure for object traceability, custody, and digital value protection. These Terms govern your use of our platform, services, and client interfaces. Access is granted by invitation or verification only.

Use of AUCTA requires full acceptance of these Terms.`
    },
    {
      id: 'eligibility',
      title: '2. Eligibility & Access',
      icon: <Users className="w-5 h-5" />,
      content: `• You must be 18+ and legally capable.
• AUCTA is not open-access: only verified clients, certified institutions, and approved professionals may register.
• KYC (Know Your Customer) is mandatory, under EU anti-money laundering laws (AMLD5).
• AUCTA may revoke access at any time for breach, fraud, or risk reasons.`
    },
    {
      id: 'services',
      title: '3. Service Description',
      icon: <Shield className="w-5 h-5" />,
      content: `AUCTA offers:
• Digital Vault creation
• Ownership traceability via Soulbound Tokens
• Resale royalty & cashback logic (ECHO)
• Legacy protocols (inheritance, delegation)
• P2P secure transfer via QR or code-based triggers
• Concierge services for delivery, authentication, and real-time custody routing`
    },
    {
      id: 'security',
      title: '4. Account Security',
      icon: <Lock className="w-5 h-5" />,
      content: `• All accounts are protected by multi-factor authentication.
• You must safeguard your credentials, NFC-enabled devices, and vault card.
• You are responsible for activity under your access unless demonstrably compromised.`
    },
    {
      id: 'ip',
      title: '5. Intellectual Property',
      icon: <Eye className="w-5 h-5" />,
      content: `All brand elements, blockchain architecture, user flows, smart contracts, and UI/UX are the property of AUCTA Protocol SARL.

Unauthorized reproduction or reverse engineering is strictly forbidden.`
    },
    {
      id: 'fees',
      title: '6. Fees & Transactions',
      icon: <Scale className="w-5 h-5" />,
      content: `• AUCTA operates on a 6% protocol fee per resale transaction, partially redistributed as cashback (ECHO).
• Certain services (e.g., conciergerie, NFT minting, cold storage) may incur custom fees.
• Fees are denominated in Euros (€), excluding VAT.`
    }
  ]

  const annexes = [
    {
      id: 'consumer-rights',
      title: 'ANNEX I — EU Consumer Rights',
      content: `If you are a consumer (non-professional) in the EU:
• Right of withdrawal: 14 days to cancel digital services unless explicitly waived.
• Legal guarantees: 2-year guarantee of conformity under EU Directive 2019/770.
• Out-of-court resolution: Use of European Online Dispute Resolution (ODR) portal is permitted.

Note: most AUCTA access is institutional, and consumer protection does not always apply.`
    },
    {
      id: 'inheritance',
      title: 'ANNEX II — Inheritance & Legal Delegation',
      content: `AUCTA allows inheritance setup during onboarding:
• You may name 1–3 legal heirs or proxies.
• AUCTA will verify these parties under legal custody laws before releasing ownership.
• Soulbound Tokens (SBTs) linked to your products will be reissued via smart contract logic upon death, verified by civil certificate + biometric check.
• Clients must update heir profiles at least once every 24 months to retain active status.`
    },
    {
      id: 'vault-objects',
      title: 'ANNEX III — Vault Objects & NFC Protocol',
      content: `All registered objects are:
• Embedded with encrypted NFC chips (ISO 14443-A)
• Assigned a unique AUCTA Identifier (UUID v6)
• Anchored via private blockchain
• Linked to a legal custodian (client or brand)
• Traceable through API and on-chain access with permission-based audit

The vault is personal. Only the owner, verified heirs, or assigned proxies may request vault access.`
    },
    {
      id: 'echo',
      title: 'ANNEX IV — Cashback (ECHO) Protocol',
      content: `AUCTA introduces ECHO: a cashback mechanism triggered during verified resale.
• First Buyer always receives up to 2% on future resales
• Maison (brand) receives 1% when resale occurs externally
• Marketplaces must route transactions through AUCTA to activate cashback
• Clients holding assets in vault > 12 months may receive long-term holding bonuses

The protocol automates this via smart contract and logs all transactions on-chain.`
    },
    {
      id: 'security-protocol',
      title: 'ANNEX V — Security Protocol',
      content: `• End-to-end encryption on all communications (TLS 1.3 minimum)
• Facial recognition or biometric unlock for certain features (opt-in)
• Backend architecture compliant with ISO 27001
• Randomized access pings may be triggered upon suspicious access
• Cold storage available for vaults with > €100k of appraised value
• AUCTA will notify users in the event of any confirmed breach within 72 hours as per GDPR Article 33.`
    }
  ]

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
      <section className="pt-32 pb-16 px-6 animate-section" data-section="hero">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div 
              className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-gray-700" />
              LEGAL FRAMEWORK
              <div className="w-8 h-px bg-gray-700" />
            </div>
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Terms of Service
            </h1>
            <div 
              className={`text-gray-500 space-y-2 text-sm transition-all duration-1000 delay-400 ${
                isVisible.hero ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p>Effective Date: January 2025</p>
              <p>Entity: AUCTA Protocol SARL (France)</p>
              <p>Jurisdiction: French & EU law</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 pb-20">
        <div className="container mx-auto max-w-4xl">
          
          {/* Main Sections */}
          <div className="space-y-4 mb-16 animate-section" data-section="main">
            {sections.map((section, i) => (
              <div
                key={section.id}
                className={`transition-all duration-1000 ${
                  isVisible.main ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/10 transition-all">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-gray-600 group-hover:text-purple-400/60 transition-colors">
                          {section.icon}
                        </div>
                        <h2 className="text-lg font-light">
                          {section.title}
                        </h2>
                      </div>
                      <div className="text-gray-600 group-hover:text-gray-400 transition-colors">
                        {expandedSection === section.id ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </button>
                    
                    {expandedSection === section.id && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-white/5 pt-6">
                          <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                            {section.content}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 animate-section" data-section="additional">
            {/* Data Protection */}
            <div 
              className={`group transition-all duration-1000 ${
                isVisible.additional ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-purple-500/10 transition-all h-full">
                  <h3 className="text-lg font-light mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-gray-600 group-hover:text-purple-400/60 transition-colors" />
                    7. Data Protection (GDPR)
                  </h3>
                  <div className="text-gray-500 text-sm leading-relaxed space-y-3">
                    <p>AUCTA complies with:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• EU GDPR (2016/679)</li>
                      <li>• CNIL & French Data Protection Act</li>
                    </ul>
                    <p>You have the right to access, rectify, erase, and restrict your data.</p>
                    <p className="text-gray-600 text-xs">For full details, see Privacy Policy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Acceptable Use */}
            <div 
              className={`group transition-all duration-1000 ${
                isVisible.additional ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-purple-500/10 transition-all h-full">
                  <h3 className="text-lg font-light mb-4 flex items-center">
                    <Eye className="w-5 h-5 mr-3 text-gray-600 group-hover:text-purple-400/60 transition-colors" />
                    8. Acceptable Use
                  </h3>
                  <div className="text-gray-500 text-sm leading-relaxed space-y-3">
                    <p>You may not:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Launder money or bypass sanctions</li>
                      <li>• Tamper with NFC devices or encryption</li>
                      <li>• Sell, share, or sublicense your access</li>
                      <li>• Circumvent security protocols</li>
                    </ul>
                    <p className="text-red-500/60 text-xs">Violations result in immediate ban and legal escalation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Sections */}
          <div className="space-y-4 mb-16 animate-section" data-section="remaining">
            {[
              {
                title: '9. Termination',
                content: (
                  <div className="space-y-2">
                    <p>You may request termination at any time via <span className="text-purple-400/60">legal@aucta.io</span></p>
                    <p>We may terminate your access with notice if you breach these terms, regulatory changes require us to, or suspicion of illicit behavior arises.</p>
                    <p>Ownership history will remain on-chain and accessible unless legally erased.</p>
                  </div>
                )
              },
              {
                title: '10. Jurisdiction & Disputes',
                content: (
                  <div className="space-y-2">
                    <p>This agreement is governed by French law.</p>
                    <p>Disputes not resolved privately will be escalated to the Tribunal de Commerce de Paris or relevant EU consumer mediation services (if applicable).</p>
                  </div>
                )
              },
              {
                title: '11. Amendments',
                content: (
                  <p>We reserve the right to amend these Terms. Notice will be provided 30 days prior to enforcement via secure email or app banner. Continued use after notice constitutes acceptance.</p>
                )
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`group transition-all duration-1000 ${
                  isVisible.remaining ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-purple-500/10 transition-all">
                    <h3 className="text-lg font-light mb-4">{item.title}</h3>
                    <div className="text-gray-500 text-sm leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Annexes */}
          <div className="mb-16 animate-section" data-section="annexes">
            <h2 
              className={`text-3xl font-extralight text-center mb-8 transition-all duration-1000 ${
                isVisible.annexes ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-gray-600">📎</span> Annexes
            </h2>
            <div className="space-y-4">
              {annexes.map((annex, i) => (
                <div
                  key={annex.id}
                  className={`transition-all duration-1000 ${
                    isVisible.annexes ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                    <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/10 transition-all">
                      <button
                        onClick={() => toggleSection(annex.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                      >
                        <h3 className="text-base font-light">
                          {annex.title}
                        </h3>
                        <div className="text-gray-600 group-hover:text-gray-400 transition-colors">
                          {expandedSection === annex.id ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </button>
                      
                      {expandedSection === annex.id && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-white/5 pt-6">
                            <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                              {annex.content}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className={`animate-section transition-all duration-1000 ${
              isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-section="contact"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 text-center hover:border-purple-500/10 transition-all">
                <h3 className="text-2xl font-extralight mb-6">12. Contact</h3>
                <div className="text-gray-400 space-y-2 text-sm">
                  <p className="font-light text-gray-300">AUCTA Protocol SARL</p>
                  <p>Legal & Compliance</p>
                  <p className="text-purple-400/60">legal@aucta.io</p>
                  <p className="text-gray-600 text-xs mt-4">EU VAT: [To Be Assigned]</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

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
    </div>
  )
}