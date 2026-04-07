import React from 'react';
import { Compass, Home, Building2, Factory, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Residential Vastu",
    description: "Create a peaceful and prosperous home environment by balancing the five elements.",
    icon: Home,
  },
  {
    title: "Commercial Vastu",
    description: "Optimize your office or shop for better growth, customer flow, and financial success.",
    icon: Building2,
  },
  {
    title: "Industrial Vastu",
    description: "Expert guidance for factory layouts, machinery placement, and labor harmony.",
    icon: Factory,
  },
  {
    title: "Plot Selection",
    description: "Scientific analysis of land energy and surroundings before you make an investment.",
    icon: Compass,
  },
  {
    title: "Vastu Remedies",
    description: "Effective solutions for Vastu defects without structural demolition.",
    icon: ShieldCheck,
  },
  {
    title: "Interior Planning",
    description: "Color therapy and furniture placement based on Vastu zones for maximum positivity.",
    icon: Star,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Comprehensive Vastu Solutions</h2>
          <p className="text-gold-700 max-w-2xl mx-auto text-lg">
            We blend ancient wisdom with modern practicalities to bring balance to your living and working spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-gold-100 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-900/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gold-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
