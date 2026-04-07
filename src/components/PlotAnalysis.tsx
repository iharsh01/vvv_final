import React from 'react';
import { Compass, ShieldCheck, ArrowRight, IndianRupee } from 'lucide-react';
import { motion } from 'motion/react';

export default function PlotAnalysis() {
  const handleRequest = () => {
    const whatsappNumber = "918288979148";
    const text = `*Plot Analysis Request*
I am interested in getting a professional Vastu analysis for my plot. Please guide me on the process and payment.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="plot-analysis" className="py-24 bg-gold-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Land Plot for Analysis"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold-900/20" />
            </div>
            
            {/* Price Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gold-100">
              <div className="flex items-center gap-2 text-gold-600 font-bold mb-1">
                <IndianRupee className="w-4 h-4" />
                <span className="text-2xl">2100</span>
              </div>
              <p className="text-xs text-gold-500 font-bold uppercase tracking-wider">Premium Service</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-100 text-gold-700 font-medium text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Scientific Land Energy Analysis</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Professional <span className="text-gold-600">Plot Analysis</span> for Your Future Home
            </h2>
            <p className="text-lg text-gold-800 mb-8 leading-relaxed">
              Before you build, ensure the foundation is right. Our professional plot analysis service provides a detailed report on soil energy, direction alignment, and surrounding influences.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Soil Quality & Energy Testing",
                "Directional Alignment (8 Zones)",
                "Surrounding Environment Impact",
                "Customized Vastu Remedies",
                "Prosperity & Health Potential"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gold-900 font-medium">
                  <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center text-white">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={handleRequest}
              className="w-full sm:w-auto px-10 py-5 gold-gradient text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Plot Analysis Report <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-gold-500 italic">
              * This is a paid service. Report will be shared after manual audit and payment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
