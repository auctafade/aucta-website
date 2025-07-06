'use client'

import { useState, useEffect } from 'react'
import { Users, CreditCard, ArrowLeft, ArrowRight, Circle } from 'lucide-react'
import Header from '../components/layout/header'

export default function GetAuctaPage() {
  const [currentView, setCurrentView] = useState('selection')
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })

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
  }, [currentView])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (type: string) => {
    console.log(`Submitting ${type} form:`, formData)
    // Show success state
    setCurrentView('success')
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    })
  }

  const goToSelection = () => {
    setCurrentView('selection')
    resetForm()
  }

  const SelectionView = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 animate-section" data-section="selection">
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div 
          className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
            isVisible.selection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="w-8 h-px bg-gray-700" />
          EXCLUSIVE ACCESS
          <div className="w-8 h-px bg-gray-700" />
        </div>
        
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-extralight mb-12 leading-[0.9] transition-all duration-1000 delay-200 ${
            isVisible.selection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Get AUCTA
        </h1>
        
        <p 
          className={`text-gray-400 text-lg font-light max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible.selection ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Join the protocol. Activate your card. Secure your legacy.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Request Access Card */}
          <div 
            onClick={() => setCurrentView('request')}
            className={`group cursor-pointer transition-all duration-1000 ${
              isVisible.selection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
                  <Users className="w-8 h-8 text-gray-600 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-xl font-light mb-4">Request Access</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Apply to join the AUCTA protocol
                </p>
                <div className="flex items-center justify-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Apply Now
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Activate Card */}
          <div 
            onClick={() => setCurrentView('activate')}
            className={`group cursor-pointer transition-all duration-1000 ${
              isVisible.selection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/10 transition-all">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-all">
                  <CreditCard className="w-8 h-8 text-gray-600 group-hover:text-gray-300 transition-colors" />
                </div>
                <h3 className="text-xl font-light mb-4">Activate Card</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Already own an AUCTA product
                </p>
                <div className="flex items-center justify-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Activate Now
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SimpleForm = ({ type }: { type: 'request' | 'activate' }) => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-24 animate-section" data-section={type}>
      <div className="container mx-auto max-w-xl relative z-10">
        <div className="text-center mb-12">
          <button 
            onClick={goToSelection}
            className={`flex items-center text-gray-500 hover:text-gray-300 transition-all mx-auto mb-8 ${
              isVisible[type] ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back
          </button>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 ${
              isVisible[type] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {type === 'request' ? 'Request Access' : 'Activate Card'}
          </h1>
          
          <p 
            className={`text-gray-400 font-light leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible[type] ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Our concierge will contact you within 48 hours
          </p>
        </div>

        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible[type] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="First Name"
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Last Name"
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>

                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => handleSubmit(type)}
                    className="relative w-full group"
                  >
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative bg-white text-black py-4 px-8 rounded-full font-light hover:scale-105 transition-transform">
                      Submit
                    </div>
                  </button>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed text-center">
                  Protected by AUCTA&apos;s privacy protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const SuccessView = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 animate-section" data-section="success">
      <div className="container mx-auto max-w-xl text-center relative z-10">
        <div 
          className={`transition-all duration-1000 ${
            isVisible.success ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="w-20 h-20 mx-auto mb-8 bg-gray-900/30 backdrop-blur rounded-full flex items-center justify-center border border-white/5">
            <Circle className="w-8 h-8 text-green-400/60" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extralight mb-4">Thank You</h1>
          
          <p className="text-gray-400 font-light mb-12 leading-relaxed">
            Your request has been received.<br/>
            Our concierge will contact you within 48 hours.
          </p>
          
          <button 
            onClick={goToSelection}
            className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
          >
            Return to home
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative bg-black min-h-screen">
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

      {/* Header */}
      <Header />

      {currentView === 'selection' && <SelectionView />}
      {currentView === 'request' && <SimpleForm type="request" />}
      {currentView === 'activate' && <SimpleForm type="activate" />}
      {currentView === 'success' && <SuccessView />}
      
      {/* Footer - only show on selection view */}
      {currentView === 'selection' && (
        <footer className="fixed bottom-0 w-full py-6 px-6 bg-gradient-to-t from-black to-transparent">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-600 text-xs">© 2024 AUCTA. All rights reserved.</div>
              <div className="flex gap-6 text-xs">
                <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Privacy</a>
                <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Terms</a>
                <a href="#" className="text-gray-600 hover:text-gray-400 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}