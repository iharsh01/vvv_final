import React from 'react';
import { Compass, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gold-100 rounded-full blur-[120px] opacity-60 translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gold-200 rounded-full blur-[100px] opacity-40 -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 font-medium text-sm mb-6">
                <Compass className="w-4 h-4 animate-spin-slow" />
                <span>Trusted Vastu Consultancy in Ludhiana</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6">
                Harmonize Your Space with <span className="text-gold-600">Verma Vastu Vision</span>
              </h1>
              <p className="text-xl text-gold-800 mb-10 leading-relaxed max-w-xl">
                Expert Vastu guidance by <span className="font-bold">Harsh Verma</span>. Unlock prosperity, health, and happiness through scientific Vastu Shastra analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#plot-analysis"
                  className="px-8 py-4 gold-gradient text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:scale-105 transition-all"
                >
                  Get Plot Analysis <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#consultation"
                  className="px-8 py-4 bg-white border-2 border-gold-200 text-gold-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gold-50 transition-all"
                >
                  <Phone className="w-5 h-5" /> Book Consultation
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-gold-600 text-sm">Years Experience</p>
                </div>
                <div className="w-px h-10 bg-gold-200" />
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-gold-600 text-sm">Happy Clients</p>
                </div>
                <div className="w-px h-10 bg-gold-200" />
                <div>
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-gold-600 text-sm">Remedy Success</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Vastu Home"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-950/40 to-transparent" />
            </div>
            
            {/* Decorative Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-3xl z-20 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="font-bold text-sm">Scientific Vastu</p>
              </div>
              <p className="text-xs text-gold-700">We use energy scanning and scientific tools for accurate results.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
