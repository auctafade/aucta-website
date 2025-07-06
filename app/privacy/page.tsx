'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Shield, Lock, Users, Eye, Database, FileText, Clock, MapPin, Circle, CheckCircle } from 'lucide-react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export default function PrivacyPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
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

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const mainSections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: <FileText className="w-5 h-5" />,
      content: `At AUCTA, privacy is more than a legal obligation — it's part of our protocol design.

We operate with a "Privacy by Infrastructure" principle: every client interaction, product registration, transfer, or inquiry is secured through tiered access, encryption, and minimum exposure.

This Privacy Policy explains:
• What personal data we collect
• How and why we use it
• Your rights under GDPR
• How we store and secure your data
• How our blockchain, biometric, and NFC technologies are managed under EU law`
    },
    {
      id: 'who-we-are',
      title: '2. Who We Are',
      icon: <Users className="w-5 h-5" />,
      content: `AUCTA Protocol SARL
RCS Registered in Paris, France
SIREN: [To Be Assigned]
Email: privacy@aucta.io
DPO: Appointed internally under Article 37 GDPR

AUCTA is a private infrastructure offering custody, traceability, and value management of high-value objects.`
    },
    {
      id: 'data-collection',
      title: '3. What Data We Collect',
      icon: <Database className="w-5 h-5" />,
      content: `A. Identification Data
• Full name, address, phone, email
• Country of birth, nationality
• Identity documents (passport, ID, residency permit)
• Facial recognition data (if opted in)

B. Professional Data
• Company name, job title, VAT registration
• Professional references for institutions or brands

C. Product Data
• Photos, serial numbers, NFC chip UID
• Marketplace transaction IDs
• Ownership history logs
• AUCTA UUID (vault-linked identifier)
• Appraisal data, receipts, and certifications

D. Technical & Security Data
• IP address, browser type, OS
• Login timestamps, multi-factor status
• Session IDs
• Biometric scan logs (if consented)

E. Blockchain Data
• Soulbound Token (SBT) minting metadata
• Wallet address (custodial or external)
• Encrypted transaction hashes
• Ownership delegation smart contracts

F. Communication Data
• Inquiries to our team (support, legal, conciergerie)
• Email correspondence
• Concierge call logs (where applicable)`
    },
    {
      id: 'processing-purposes',
      title: '4. Why We Process Your Data',
      icon: <Eye className="w-5 h-5" />,
      content: `AUCTA does not sell or rent data. Data may be shared only with verified institutional partners for the sole purpose of verifying ownership, activating benefits, or fulfilling concierge deliveries.`
    },
    {
      id: 'biometric-data',
      title: '5. Biometric & Sensitive Data',
      icon: <Shield className="w-5 h-5" />,
      content: `You may optionally enable biometric verification (facial recognition or fingerprint) to secure access to your vault or trigger smart contract-based delegation.

• Stored as encrypted vectors, not raw images
• Processed locally where possible, or in secure cloud regions in the EU
• Never shared with third parties
• Fully revocable at any time`
    },
    {
      id: 'blockchain',
      title: '6. Blockchain & Data Immutability',
      icon: <Lock className="w-5 h-5" />,
      content: `AUCTA uses a private blockchain protocol to:
• Log object minting, transfers, and inheritance events
• Anchor each item with a unique SBT (Soulbound Token)
• Secure institutional ownership trails

Please note: blockchain data is by design immutable.
However, we ensure that any on-chain identifiers are pseudonymised (UUIDs, not full names) and off-chain metadata (client identity, KYC) is fully erasable upon request.

This ensures GDPR compatibility via hybrid storage:
• Identifiable data → stored securely off-chain
• Permanent records → hashed and anonymised on-chain`
    }
  ]

  const processingTable = [
    { purpose: 'KYC & AML compliance', basis: 'Legal obligation (Art. 6.1.c)' },
    { purpose: 'Secure access to vault & services', basis: 'Contractual necessity (Art. 6.1.b)' },
    { purpose: 'Ownership verification & traceability', basis: 'Legitimate interest (Art. 6.1.f)' },
    { purpose: 'Biometric verification (optional)', basis: 'Explicit consent (Art. 9.2.a)' },
    { purpose: 'Product activation & resale tracking', basis: 'Contractual necessity' },
    { purpose: 'Appraisal, custody, and insurance referrals', basis: 'Legitimate interest' },
    { purpose: 'Marketing (minimal)', basis: 'Consent (if applicable)' }
  ]

  const sharingTable = [
    { recipient: 'Internal Security Teams', reason: 'Fraud detection, internal audit' },
    { recipient: 'Certified Authenticators', reason: 'Item verification or valuation' },
    { recipient: 'Conciergerie Partners', reason: 'Deliveries, client contact' },
    { recipient: 'Auction Houses / Brands', reason: 'On request and with consent' },
    { recipient: 'Legal authorities', reason: 'Upon valid French or EU court orders' },
    { recipient: 'Payment Providers', reason: 'For cashback and rewards distribution' }
  ]

  const retentionTable = [
    { dataType: 'Identification', retention: '10 years (AML compliance)' },
    { dataType: 'Product & Ownership', retention: 'Indefinitely (traceability requirement)' },
    { dataType: 'Communication Logs', retention: '5 years' },
    { dataType: 'Biometric (opt-in)', retention: '30 days after deactivation' },
    { dataType: 'Blockchain Data', retention: 'Indefinite, anonymised' }
  ]

  const rights = [
    'Access to your data',
    'Rectification of incorrect information',
    'Erasure ("Right to be Forgotten")',
    'Restriction of processing',
    'Portability (in machine-readable format)',
    'Withdrawal of consent (where applicable)',
    'Human review of automated decisions',
    'Objection to specific processing'
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
          className="absolute right-0 top-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 animate-section" data-section="hero">
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
            PRIVACY BY INFRASTRUCTURE
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-8 transition-all duration-1000 delay-200 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Privacy<br/>
            <span className="text-gray-400">Policy</span>
          </h1>
          
          <div 
            className={`text-gray-400 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible.hero ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-lg font-light mb-2">Effective Date: January 2025</p>
            <p className="text-sm mb-6">Entity: AUCTA Protocol SARL (France)</p>
            <div className="text-xs text-gray-500">
              <p>Regulated under:</p>
              <p>EU Regulation 2016/679 (GDPR)</p>
              <p>Loi Informatique et Libertés (French Data Protection Act)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Main Sections */}
          <div className="space-y-6 mb-24">
            {mainSections.map((section, index) => (
              <div
                key={section.id}
                className={`group transition-all duration-1000 ${
                  isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-8 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-all">
                          <div className="text-gray-500 group-hover:text-gray-300 transition-colors">
                            {section.icon}
                          </div>
                        </div>
                        <h2 className="text-xl font-light text-white">
                          {section.title}
                        </h2>
                      </div>
                      <div className="text-gray-500 group-hover:text-gray-300 transition-colors">
                        {expandedSection === section.id ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                    
                    {expandedSection === section.id && (
                      <div className="px-8 pb-8">
                        <div className="border-t border-white/5 pt-8">
                          <div className="text-gray-400 font-light leading-relaxed whitespace-pre-line">
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

          {/* Processing Purposes Table */}
          <div className="mb-16 animate-section" data-section="processing">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                <h3 className="text-2xl font-extralight mb-8">Processing Purposes & Legal Basis</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Purpose</th>
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Legal Basis (GDPR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {processingTable.map((row, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="text-gray-300 py-4 pr-6 font-light">{row.purpose}</td>
                          <td className="text-gray-500 py-4 text-sm">{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-16 animate-section" data-section="sharing">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                <h3 className="text-2xl font-extralight mb-8 flex items-center">
                  <Users className="w-6 h-6 mr-4 text-gray-500" />
                  Data Sharing & Access
                </h3>
                <p className="text-gray-400 mb-8 font-light">Your data may be shared with:</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Recipient</th>
                        <th className="text-left text-gray-500 font-light text-sm uppercase tracking-wider pb-4">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sharingTable.map((row, index) => (
                        <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="text-gray-300 py-4 pr-6 font-light">{row.recipient}</td>
                          <td className="text-gray-500 py-4 text-sm">{row.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 text-sm mt-6 italic font-light">We never share data for commercial profiling or advertising.</p>
              </div>
            </div>
          </div>

          {/* Storage & Retention */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 animate-section" data-section="storage">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 h-full hover:border-white/10 transition-all">
                <h3 className="text-xl font-light mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                  Storage Location
                </h3>
                <div className="text-gray-400 text-sm font-light leading-relaxed space-y-4">
                  <div>
                    <span className="text-gray-300">Main servers:</span>
                    <p className="text-gray-500 mt-1">France & Luxembourg (EU legal jurisdiction)</p>
                  </div>
                  <div>
                    <span className="text-gray-300">Backup vaults:</span>
                    <p className="text-gray-500 mt-1">Encrypted cold storage, EU-only</p>
                  </div>
                  <div>
                    <span className="text-gray-300">Biometric data:</span>
                    <p className="text-gray-500 mt-1">Apple Secure Enclave (local) or EU-region AWS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 h-full hover:border-white/10 transition-all">
                <h3 className="text-xl font-light mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-gray-500" />
                  Retention Period
                </h3>
                <div className="space-y-3">
                  {retentionTable.map((row, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-gray-300 text-sm font-light">{row.dataType}</span>
                      <span className="text-gray-500 text-xs">{row.retention}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16 animate-section" data-section="rights">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                <h3 className="text-2xl font-extralight mb-8 flex items-center">
                  <Shield className="w-6 h-6 mr-4 text-gray-500" />
                  Your Rights (under GDPR)
                </h3>
                <p className="text-gray-400 mb-8 font-light">You may request at any time:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {rights.map((right, index) => (
                    <div key={index} className="flex items-center text-gray-300 hover:text-gray-200 transition-colors group">
                      <CheckCircle className="w-4 h-4 text-purple-500/60 mr-3 group-hover:text-purple-400 transition-colors" />
                      <span className="font-light">{right}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gray-900/30 backdrop-blur rounded-2xl border border-white/5">
                  <p className="text-gray-400 font-light">
                    Send all requests to: <span className="text-purple-400">privacy@aucta.io</span><br/>
                    Or by mail: AUCTA Protocol SARL – Data Protection Officer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="space-y-8 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                <h3 className="text-xl font-light mb-6">10. Cookies & Tracking</h3>
                <div className="text-gray-400 text-sm font-light leading-relaxed space-y-3">
                  <p>Our website uses minimal cookies, only to:</p>
                  <div className="ml-4 space-y-2">
                    {['Maintain session', 'Track fraud attempts', 'Enable dark/light theme'].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1 h-1 bg-gray-700 rounded-full mr-3" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 italic">No third-party analytics or ads. We do not use Google Analytics, Facebook Pixel, or similar tools.</p>
                  <p>A cookie banner is displayed upon entry as per ePrivacy Directive.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                <h3 className="text-xl font-light mb-6">11. Minors</h3>
                <div className="text-gray-400 text-sm font-light leading-relaxed">
                  <p>AUCTA is not available to minors. We do not knowingly process data of individuals under 18. If you believe a minor has accessed our platform, please contact <span className="text-purple-400">security@aucta.io</span>.</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                <h3 className="text-xl font-light mb-6">12. Policy Updates</h3>
                <div className="text-gray-400 text-sm font-light leading-relaxed">
                  <p>This Privacy Policy may evolve. Users will be notified 30 days before material changes. All previous versions are archived and timestamped.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Supervisory Authority */}
          <div className="animate-section" data-section="authority">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12 text-center hover:border-white/10 transition-all">
                <h3 className="text-3xl font-extralight mb-8">13. Supervisory Authority</h3>
                <div className="text-gray-400 space-y-3 font-light">
                  <p>You may file a complaint with:</p>
                  <p className="text-xl text-gray-300">CNIL – Commission Nationale de l&apos;Informatique et des Libertés</p>
                  <p className="text-purple-400">https://www.cnil.fr/</p>
                  <p className="text-sm text-gray-500">3 Place de Fontenoy, 75007 Paris, France</p>
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