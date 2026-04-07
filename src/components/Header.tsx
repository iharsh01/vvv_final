import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../logo.jpg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Plot Analysis', href: '#plot-analysis' },
    { name: 'Consultation', href: '#consultation' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Verma Vastu Vision Logo"
            className="h-14 w-14 object-contain rounded-full transition-transform group-hover:scale-105"
          />
          <div>
            <span className="text-xl font-serif font-bold block leading-none">Verma Vastu Vision</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-bold">Harsh Verma</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gold-900 hover:text-gold-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:8288979148"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-950 text-white text-sm font-bold hover:bg-gold-800 transition-all"
          >
            <Phone className="w-4 h-4" /> 8288979148
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gold-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gold-100 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-gold-900 py-2"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:8288979148"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gold-950 text-white font-bold"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
