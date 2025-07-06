'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/institutions', label: 'Institutions' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/about', label: 'Our Mission' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-black/50 border-b border-white/5' 
            : 'backdrop-blur-md bg-black/30'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group"
              onClick={() => setActiveLink('/')}
            >
              <span className="text-xl font-light tracking-wider text-white transition-opacity duration-300 hover:opacity-70">
                AUCTA
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className="relative text-sm group"
                >
                  <span className={`transition-colors duration-300 ${
                    activeLink === link.href 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  
                  {/* Active indicator */}
                  <div className={`absolute -bottom-1 left-0 right-0 h-px bg-white transition-all duration-300 ${
                    activeLink === link.href 
                      ? 'opacity-100 scale-x-100' 
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </nav>
            
            {/* CTA Section */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <Link 
                href="/join-aucta"
                className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black text-sm font-light hover:scale-105 transition-transform duration-300"
              >
                Get AUCTA
                <ArrowRight className="w-3 h-3" />
              </Link>
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-black/90 backdrop-blur-xl border-l border-white/10 transition-transform duration-500 ${
            isMobileMenuOpen 
              ? 'translate-x-0' 
              : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <span className="text-xl font-light tracking-wider text-white">AUCTA</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors duration-300"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeLink === link.href 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="text-base font-light">{link.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
            
            {/* Mobile CTA */}
            <div className="p-6 border-t border-white/5">
              <Link 
                href="/join-aucta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:scale-105 transition-transform duration-300"
              >
                Get AUCTA
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add slide-in animation for mobile menu items */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        ${isMobileMenuOpen ? `
          nav a {
            animation: slideIn 0.3s ease forwards;
          }
        ` : ''}
      `}</style>
    </>
  )
}