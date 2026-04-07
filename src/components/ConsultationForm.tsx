import React, { useState } from 'react';
import { Phone, Globe, User, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "918288979148";
    const text = `*New Consultation Request*
Name: ${formData.name}
Phone: ${formData.phone}
Preferred Time: ${formData.preferredTime}
Requirements: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-20 bg-gold-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold-400 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-600 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Book a Professional Consultation</h2>
              <p className="text-gold-200 text-lg mb-8">
                Take the first step towards a more harmonious and prosperous life. Harsh Verma offers personalized Vastu audits for homes, offices, and industrial plots.
              </p>
            </motion.div>

            <div className="space-y-6">
              <a 
                href="https://wa.me/918288979148" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold-400 text-sm">Call or WhatsApp</p>
                  <p className="text-xl font-medium group-hover:text-gold-400 transition-colors">+91 8288979148</p>
                </div>
              </a>

              <a 
                href="https://vermavastuvision.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold-400 text-sm">Official Website</p>
                  <p className="text-xl font-medium group-hover:text-gold-400 transition-colors">vermavastuvision.in</p>
                </div>
              </a>

              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-serif text-xl mb-2">Office Address</h4>
                <p className="text-gold-200">#179 Green Avenue<br/>Ludhiana, Punjab</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white text-gold-950 p-8 md:p-10 rounded-[2.5rem] shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4 text-gold-600" /> Full Name
                      </label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-gold-50 border border-gold-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-400 outline-none"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gold-600" /> Phone Number
                      </label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-gold-50 border border-gold-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-400 outline-none"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-600" /> Preferred Time for Call
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Tomorrow 10:00 AM"
                      className="w-full bg-gold-50 border border-gold-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-400 outline-none"
                      value={formData.preferredTime}
                      onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gold-600" /> Your Requirements
                    </label>
                    <textarea 
                      required
                      className="w-full bg-gold-50 border border-gold-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold-400 outline-none h-32 resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full gold-gradient text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    Request Consultation
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p className="text-gold-700">
                    Thank you for reaching out. Harsh Verma will contact you shortly to discuss your Vastu requirements.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-gold-600 font-medium hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
