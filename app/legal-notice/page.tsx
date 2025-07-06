'use client'

import { Building, Server, Shield, Eye, Link, Scale, FileText, Mail } from 'lucide-react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Header */}
      <header className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-block bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-full px-4 py-2 text-sm text-gray-400 mb-8">
              MENTIONS LÉGALES
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Legal Notice
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              In accordance with Articles 6-III and 19 of the French Law No. 2004-575 of June 21, 2004 (LCEN), 
              we hereby disclose the following information related to the AUCTA Protocol website and services.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          
          {/* Website Publisher */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Building className="w-6 h-6 mr-3 text-gray-400" />
              1. Website Publisher
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Corporate Name:</span>
                  <p className="text-white font-medium">AUCTA Protocol SARL</p>
                </div>
                <div>
                  <span className="text-gray-400">Legal Form:</span>
                  <p className="text-gray-300">Société à responsabilité limitée (SARL)</p>
                </div>
                <div>
                  <span className="text-gray-400">SIREN:</span>
                  <p className="text-gray-300">[To Be Assigned]</p>
                </div>
                <div>
                  <span className="text-gray-400">RCS:</span>
                  <p className="text-gray-300">Paris</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">VAT Number:</span>
                  <p className="text-gray-300">FR[XX XXX XXX XXX]</p>
                </div>
                <div>
                  <span className="text-gray-400">Share Capital:</span>
                  <p className="text-gray-300">[To Be Defined]</p>
                </div>
                <div>
                  <span className="text-gray-400">Headquarters:</span>
                  <p className="text-gray-300">[Legal Address], Paris, France</p>
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>
                  <p className="text-blue-400">legal@aucta.io</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <span className="text-gray-400">Director of Publication:</span>
              <p className="text-white font-medium">[Founder/CEO Name]</p>
            </div>
          </div>

          {/* Hosting Provider */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Server className="w-6 h-6 mr-3 text-gray-400" />
              2. Hosting Provider
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Host:</span>
                  <p className="text-gray-300">[Host Provider Name]</p>
                </div>
                <div>
                  <span className="text-gray-400">Company Name:</span>
                  <p className="text-gray-300">[Host Company Legal Name]</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400">Registered Office:</span>
                  <p className="text-gray-300">[Host Legal Address]</p>
                </div>
                <div>
                  <span className="text-gray-400">Contact:</span>
                  <p className="text-gray-300">[Host Contact Information]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Website Access */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-gray-400" />
              3. Website Access
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                The site <span className="text-blue-400">www.aucta.io</span> is accessible at all times, 
                except during maintenance or security updates. AUCTA may suspend access temporarily or 
                permanently without notice for operational, legal, or security reasons.
              </p>
              <p>
                Use of the site implies full acceptance of the Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-gray-400" />
              4. Intellectual Property
            </h2>
            <div className="text-gray-300 leading-relaxed">
              <p>
                The full content of this site — structure, code, trademarks, design, icons, logos, text, 
                and imagery — is the exclusive property of AUCTA Protocol SARL or its licensed partners. 
                Any reproduction, distribution, or exploitation without prior written consent is prohibited.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-gray-400" />
              5. Limitation of Liability
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                While we aim for accuracy and security, AUCTA does not guarantee the completeness, 
                reliability, or continuous availability of the information on this site. We reserve 
                the right to correct or modify content at any time.
              </p>
              <p>
                Under no circumstances shall AUCTA be liable for any direct or indirect damages 
                arising from the use or interpretation of the website.
              </p>
            </div>
          </div>

          {/* Hyperlinks */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Link className="w-6 h-6 mr-3 text-gray-400" />
              6. Hyperlinks
            </h2>
            <div className="text-gray-300 leading-relaxed">
              <p>
                The site may include links to third-party content. AUCTA holds no responsibility for 
                external content, privacy practices, or accuracy once a user leaves our controlled environment.
              </p>
            </div>
          </div>

          {/* Applicable Law */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-gray-400" />
              7. Applicable Law
            </h2>
            <div className="text-gray-300 leading-relaxed">
              <p>
                This legal notice is governed by <span className="text-white font-medium">French law</span>. 
                In the event of dispute, jurisdiction is assigned to the competent courts of 
                <span className="text-white font-medium"> Paris</span>, unless otherwise provided by 
                mandatory legal provisions.
              </p>
            </div>
          </div>

          {/* Personal Data */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 mb-8 hover:border-gray-600/50 transition-all duration-300">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-gray-400" />
              8. Personal Data
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                AUCTA&apos;s processing of personal data is governed by its Privacy Policy, in full compliance 
                with <span className="text-white font-medium">EU GDPR</span> and French 
                <span className="text-white font-medium"> Loi Informatique et Libertés</span>. 
                All users have the right to access, rectify, erase, and object to the use of their data.
              </p>
              <p>
                To exercise your rights, please email <span className="text-blue-400">privacy@aucta.io</span>.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-light text-white mb-6 flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3 text-gray-400" />
              9. Contact
            </h2>
            <div className="text-gray-300 space-y-2">
              <p>For any legal inquiries, please contact:</p>
              <div className="mt-4">
                <p className="font-medium text-white">AUCTA Protocol SARL</p>
                <p>Legal Department</p>
                <p>[Legal Address]</p>
                <p>Paris, France</p>
                <p className="text-blue-400 mt-2">legal@aucta.io</p>
              </div>
            </div>
          </div>

        </div>
      </div>

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

      <Footer />
    </div>
  )
}