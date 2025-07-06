'use client'

import { useState, useEffect } from 'react'
import { Users, CreditCard, ArrowLeft, ChevronDown, ArrowRight } from 'lucide-react'
import Header from '../components/layout/header'

export default function GetAuctaPage() {
  const [currentView, setCurrentView] = useState('selection')
  const [isVisible, setIsVisible] = useState<{ selection?: boolean; request?: boolean; activate?: boolean }>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    requestType: '',
    additionalInfo: '',
    productDetails: '',
    chipId: '',
    purchaseDate: '',
    serialNumber: ''
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
    alert(`${type} form submitted successfully!`)
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      requestType: '',
      additionalInfo: '',
      productDetails: '',
      chipId: '',
      purchaseDate: '',
      serialNumber: ''
    })
  }

  const goToSelection = () => {
    setCurrentView('selection')
    resetForm()
  }

  const SelectionView = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 animate-section" data-section="selection">
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

      <div className="text-center max-w-5xl mx-auto relative z-10">
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
          className={`text-5xl md:text-7xl lg:text-8xl font-extralight mb-8 leading-[0.9] transition-all duration-1000 delay-200 ${
            isVisible.selection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="text-gray-100">Get</div>
          <div className="text-gray-100">AUCTA</div>
        </h1>
        
        <p 
          className={`text-gray-400 text-lg font-light mb-16 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible.selection ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Join the protocol. Activate your card. Secure your legacy.
        </p>
        
        <p 
          className={`text-gray-500 text-base mb-16 font-light transition-all duration-1000 delay-600 ${
            isVisible.selection ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Choose your path:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Request Access Card */}
          <div 
            onClick={() => setCurrentView('request')}
            className={`group cursor-pointer transition-all duration-1000 ${
              isVisible.selection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12 hover:border-purple-500/10 transition-all hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-8 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-all">
                  <Users className="w-8 h-8 text-gray-500 group-hover:text-purple-400/60 transition-colors" />
                </div>
                <h3 className="text-2xl font-light mb-6">Request Access</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Apply to join the AUCTA protocol. Our team will review your application and contact you.
                </p>
                <div className="flex items-center justify-center text-purple-400/60 text-sm font-light group-hover:text-purple-400/80 transition-colors">
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
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
              <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-12 hover:border-purple-500/10 transition-all hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-8 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-all">
                  <CreditCard className="w-8 h-8 text-gray-500 group-hover:text-purple-400/60 transition-colors" />
                </div>
                <h3 className="text-2xl font-light mb-6">Activate Card</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Already own an AUCTA-certified product? Activate your card and unlock your vault.
                </p>
                <div className="flex items-center justify-center text-purple-400/60 text-sm font-light group-hover:text-purple-400/80 transition-colors">
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

  const RequestAccessForm = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-24 animate-section" data-section="request">
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

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-4 leading-[0.9] transition-all duration-1000 ${
              isVisible.request ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gray-100">Get</div>
            <div className="text-gray-100">AUCTA</div>
          </h1>
          <p 
            className={`text-gray-400 text-base font-light mb-8 transition-all duration-1000 delay-200 ${
              isVisible.request ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Join the protocol. Activate your card. Secure your legacy.
          </p>
          
          <button 
            onClick={goToSelection}
            className={`flex items-center text-gray-500 hover:text-gray-300 transition-all mx-auto ${
              isVisible.request ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back to selection
          </button>
        </div>

        <div 
          className={`transition-all duration-1000 delay-400 ${
            isVisible.request ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center mr-4 border border-white/5">
                  <Users className="w-6 h-6 text-purple-400/60" />
                </div>
                <div>
                  <h2 className="text-2xl font-light">Request AUCTA Access</h2>
                  <p className="text-gray-500 text-xs">Complete the form below and our team will contact you within 48 hours.</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-sm font-light mb-4 text-gray-300">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter first name"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter last name"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter email address"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div>
                  <h3 className="text-sm font-light mb-4 text-gray-300">Professional Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Company/Organization</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Enter company name"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Role/Title</label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="Enter your role"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-gray-600 text-xs block mb-2">Request Type *</label>
                    <div className="relative">
                      <select
                        value={formData.requestType}
                        onChange={(e) => handleInputChange('requestType', e.target.value)}
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/20 transition-all appearance-none text-sm"
                      >
                        <option value="">Select request type</option>
                        <option value="individual">Individual Access</option>
                        <option value="institutional">Institutional Partnership</option>
                        <option value="brand">Brand Integration</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="text-gray-600 text-xs block mb-2">Additional Information</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any additional details you'd like to share..."
                    rows={4}
                    className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleSubmit('Request Access')}
                  className="relative w-full group"
                >
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white text-black py-4 px-8 rounded-full font-light hover:scale-105 transition-transform">
                    Submit Application
                    <ArrowRight className="inline-block w-3 h-3 ml-2" />
                  </div>
                </button>

                <p className="text-gray-600 text-xs leading-relaxed text-center">
                  Your information is encrypted and protected by AUCTA&apos;s privacy protocols. We will only use this data to process your request and will never share it with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const ActivateCardForm = () => (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-24 animate-section" data-section="activate">
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

      <div className="max-w-2xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div 
            className={`inline-flex items-center gap-2 text-xs text-gray-500 uppercase tracking-[0.2em] mb-8 transition-all duration-1000 ${
              isVisible.activate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="w-8 h-px bg-gray-700" />
            EXCLUSIVE ACCESS
            <div className="w-8 h-px bg-gray-700" />
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-extralight mb-4 leading-[0.9] transition-all duration-1000 delay-200 ${
              isVisible.activate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-gray-100">Get</div>
            <div className="text-gray-100">AUCTA</div>
          </h1>
          <p 
            className={`text-gray-400 text-base font-light mb-8 transition-all duration-1000 delay-400 ${
              isVisible.activate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Join the protocol. Activate your card. Secure your legacy.
          </p>
          
          <button 
            onClick={goToSelection}
            className={`flex items-center text-gray-500 hover:text-gray-300 transition-all mx-auto ${
              isVisible.activate ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back to selection
          </button>
        </div>

        <div 
          className={`transition-all duration-1000 delay-600 ${
            isVisible.activate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-900/50 backdrop-blur rounded-2xl flex items-center justify-center mr-4 border border-white/5">
                  <CreditCard className="w-6 h-6 text-purple-400/60" />
                </div>
                <div>
                  <h2 className="text-2xl font-light">Activate Your AUCTA Card</h2>
                  <p className="text-gray-500 text-xs">Provide your product details to receive your AUCTA card and activate your vault.</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-sm font-light mb-4 text-gray-300">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter first name"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter last name"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter email address"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter phone number"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div>
                  <h3 className="text-sm font-light mb-4 text-gray-300">Product Information</h3>
                  <div>
                    <label className="text-gray-600 text-xs block mb-2">Product Details *</label>
                    <input
                      type="text"
                      value={formData.productDetails}
                      onChange={(e) => handleInputChange('productDetails', e.target.value)}
                      placeholder="Brand, model, collection, etc"
                      className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Chip ID *</label>
                      <input
                        type="text"
                        value={formData.chipId}
                        onChange={(e) => handleInputChange('chipId', e.target.value)}
                        placeholder="AUCTA chip identifier"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-600 text-xs block mb-2">Purchase Date</label>
                      <input
                        type="text"
                        value={formData.purchaseDate}
                        onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                        placeholder="MM/YYYY"
                        className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-gray-600 text-xs block mb-2">Serial/Model Number</label>
                    <input
                      type="text"
                      value={formData.serialNumber}
                      onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                      placeholder="Where you purchased the item"
                      className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="text-gray-600 text-xs block mb-2">Additional Information</label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    placeholder="Any additional details you'd like to share..."
                    rows={4}
                    className="w-full bg-gray-900/30 backdrop-blur border border-white/5 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-purple-500/20 transition-all resize-none text-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleSubmit('Card Activation')}
                  className="relative w-full group"
                >
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white text-black py-4 px-8 rounded-full font-light hover:scale-105 transition-transform">
                    Request Card Activation
                    <ArrowRight className="inline-block w-3 h-3 ml-2" />
                  </div>
                </button>

                <p className="text-gray-600 text-xs leading-relaxed text-center">
                  Your information is encrypted and protected by AUCTA&apos;s privacy protocols. We will only use this data to process your request and will never share it with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative">
      {/* Header */}
      <Header />

      {currentView === 'selection' && <SelectionView />}
      {currentView === 'request' && <RequestAccessForm />}
      {currentView === 'activate' && <ActivateCardForm />}
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black">
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