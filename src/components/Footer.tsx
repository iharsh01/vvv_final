import React from 'react';
import { MapPin, Phone, Globe, Instagram } from 'lucide-react';
import logo from '../logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gold-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Verma Vastu Vision Logo"
                className="h-14 w-14 object-contain rounded-full"
              />
              <span className="text-xl font-serif font-bold">Verma Vastu Vision</span>
            </div>
            <p className="text-gold-700 leading-relaxed">
              Bringing harmony and prosperity to your spaces through scientific Vastu analysis and traditional wisdom.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/vermavastuvision?igsh=MWhqaGRqcnU5dG1tdg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 hover:bg-gold-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gold-700 hover:text-gold-600 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gold-700 hover:text-gold-600 transition-colors">Our Services</a></li>
              <li><a href="#plot-analysis" className="text-gold-700 hover:text-gold-600 transition-colors">Plot Analysis</a></li>
              <li><a href="#consultation" className="text-gold-700 hover:text-gold-600 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gold-700">Residential Vastu</li>
              <li className="text-gold-700">Commercial Vastu</li>
              <li className="text-gold-700">Industrial Vastu</li>
              <li className="text-gold-700">Vastu for Health</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gold-700">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0" />
                <span>#179 Green Avenue, Ludhiana, Punjab</span>
              </li>
              <li className="flex gap-3 text-gold-700">
                <Phone className="w-5 h-5 text-gold-600 shrink-0" />
                <span>+91 8288979148</span>
              </li>
              <li className="flex gap-3 text-gold-700">
                <Globe className="w-5 h-5 text-gold-600 shrink-0" />
                <span>vermavastuvision.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-100 text-center text-gold-500 text-sm">
          <p>© {new Date().getFullYear()} Verma Vastu Vision. All rights reserved. Designed for Harsh Verma.</p>
        </div>
      </div>
    </footer>
  );
}
