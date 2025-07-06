'use client'

import { Cookie, Shield, Settings, Eye, CheckCircle, X, AlertCircle } from 'lucide-react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export default function CookiesPolicyPage() {
  type CookieColor = 'green' | 'blue' | 'purple' | 'gray' | 'orange'

  type CookieType = {
    type: string
    purpose: string
    duration: string
    consent: boolean
    color: CookieColor
  }

  const cookieTypes: CookieType[] = [
    {
      type: 'Essential',
      purpose: 'Enables secure login, form submissions, vault access',
      duration: 'Session / 12h',
      consent: false,
      color: 'green'
    },
    {
      type: 'Security',
      purpose: 'Prevents fraud, detects bot access, logs abnormal access',
      duration: '30 days',
      consent: false,
      color: 'blue'
    },
    {
      type: 'User Preferences',
      purpose: 'Saves theme mode (light/dark), session language',
      duration: '6 months',
      consent: false,
      color: 'purple'
    },
    {
      type: 'Analytics (Local Only)',
      purpose: 'Basic performance tracking (anonymised, internal)',
      duration: '12 months',
      consent: false,
      color: 'gray'
    },
    {
      type: 'Biometric Flags',
      purpose: 'Tracks whether Face ID or fingerprint is activated',
      duration: 'Session',
      consent: false,
      color: 'orange'
    }
  ]

  const notUsedItems = [
    'Google Analytics',
    'Facebook Pixel',
    'Retargeting cookies',
    'Commercial advertising trackers'
  ]

  const browserInstructions = [
    {
      browser: 'Chrome',
      instructions: 'Settings > Privacy > Cookies and other site data'
    },
    {
      browser: 'Safari',
      instructions: 'Preferences > Privacy'
    },
    {
      browser: 'Firefox',
      instructions: 'Options > Privacy & Security > Cookies and Site Data'
    },
    {
      browser: 'Edge',
      instructions: 'Settings > Site Permissions > Cookies and site data'
    }
  ]

  const getColorClasses = (
    color: 'green' | 'blue' | 'purple' | 'gray' | 'orange'
  ) => {
    const colors = {
      green: 'bg-green-900/40 border-green-700/30 text-green-400',
      blue: 'bg-blue-900/40 border-blue-700/30 text-blue-400',
      purple: 'bg-purple-900/40 border-purple-700/30 text-purple-400',
      gray: 'bg-gray-700/40 border-gray-600/30 text-gray-400',
      orange: 'bg-orange-900/40 border-orange-700/30 text-orange-400'
    }
    return colors[color] || colors.gray
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Header */}
      <header className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-block bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-full px-4 py-2 text-sm text-gray-400 mb-8">
              MINIMAL TRACKING
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Cookies Policy
            </h1>
            <div className="text-gray-400 space-y-2">
              <p>Effective Date: January 2025</p>
              <p>Entity: AUCTA Protocol SARL</p>
              <p className="text-sm">
                Applicable Law: ePrivacy Directive (2002/58/EC), GDPR (EU 2016/679), and French CNIL guidelines
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-3xl font-light text-white mb-6 flex items-center">
              <Cookie className="w-8 h-8 mr-4 text-gray-400" />
              1. Introduction
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                This Cookies Policy explains how AUCTA uses cookies and similar technologies on our website and services. 
                We operate with <span className="text-white font-medium">minimal tracking</span>, no third-party profiling, 
                and only use cookies that are:
              </p>
              <ul className="ml-6 space-y-2">
                <li>• <span className="text-white">Strictly necessary</span></li>
                <li>• <span className="text-white">Security-focused</span></li>
                <li>• <span className="text-white">User experience-enhancing</span></li>
              </ul>
            </div>
          </div>

          {/* What Is a Cookie */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-3xl font-light text-white mb-6 flex items-center">
              <Settings className="w-8 h-8 mr-4 text-gray-400" />
              2. What Is a Cookie?
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                A <span className="text-white font-medium">cookie</span> is a small text file stored on your device 
                (computer, tablet, smartphone) when you visit a website. Cookies help the website function properly 
                and remember your preferences securely.
              </p>
              <p>Cookies can be:</p>
              <ul className="ml-6 space-y-2">
                <li>• <span className="text-white">Session-based</span> (deleted when you close your browser)</li>
                <li>• <span className="text-white">Persistent</span> (remain for a defined time)</li>
                <li>• <span className="text-white">First-party</span> (set by AUCTA) or <span className="text-white">Third-party</span> (none used here)</li>
              </ul>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-3xl font-light text-white mb-8 flex items-center">
              <Shield className="w-8 h-8 mr-4 text-gray-400" />
              3. Types of Cookies We Use
            </h2>
            
            {/* Cookies Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700/50">
                    <th className="text-left text-gray-400 font-medium pb-4">Cookie Type</th>
                    <th className="text-left text-gray-400 font-medium pb-4">Purpose</th>
                    <th className="text-left text-gray-400 font-medium pb-4">Duration</th>
                    <th className="text-left text-gray-400 font-medium pb-4">Consent Required</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {cookieTypes.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-800/50">
                      <td className="py-4 pr-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getColorClasses(cookie.color)}`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="text-gray-300 py-4 pr-6">{cookie.purpose}</td>
                      <td className="text-gray-400 py-4 pr-6">{cookie.duration}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <X className="w-4 h-4 text-red-400 mr-2" />
                          <span className="text-gray-400">No</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* What We Don't Use */}
            <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/30">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                We do NOT use:
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {notUsedItems.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cookie Banner & Control */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-3xl font-light text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 mr-4 text-gray-400" />
              4. Cookie Banner & Control
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                When you first visit <span className="text-blue-400">www.aucta.io</span>, you will see a cookie banner that allows you to:
              </p>
              <ul className="ml-6 space-y-2">
                <li>• Accept or refuse optional cookies (if added in future)</li>
                <li>• Learn about your rights</li>
                <li>• Link directly to this policy</li>
              </ul>
              <p>
                By continuing to use our site with default settings, only <span className="text-white font-medium">essential cookies</span> will be stored.
              </p>
            </div>
          </div>

          {/* How to Manage Cookies */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-3xl font-light text-white mb-6 flex items-center">
              <Settings className="w-8 h-8 mr-4 text-gray-400" />
              5. How to Manage Cookies
            </h2>
            <p className="text-gray-300 mb-6">You can control or delete cookies in your browser settings:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {browserInstructions.map((browser, index) => (
                <div key={index} className="bg-gray-800/40 rounded-xl p-4 border border-gray-700/30">
                  <h3 className="text-white font-medium mb-2">{browser.browser}</h3>
                  <p className="text-gray-400 text-sm">{browser.instructions}</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-900/20 border border-orange-700/30 rounded-xl p-4 flex items-start">
              <AlertCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm">
                Disabling essential cookies may impair access to AUCTA Vault or Concierge features.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-3xl font-light text-white mb-6">6. Changes to This Policy</h2>
            <div className="text-gray-300 leading-relaxed">
              <p>
                This Cookies Policy may be updated in line with changes in law or functionality. 
                We will notify you of any material changes via banner or platform message.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-light text-white mb-6">7. Contact</h2>
            <div className="text-gray-300 space-y-2">
              <p>For any questions about this Cookies Policy:</p>
              <div className="mt-4">
                <p className="font-medium text-white">AUCTA Protocol SARL</p>
                <p>Data Protection Officer</p>
                <p className="text-blue-400 mt-2">privacy@aucta.io</p>
                <p className="text-gray-400">Paris, France</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />

      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}