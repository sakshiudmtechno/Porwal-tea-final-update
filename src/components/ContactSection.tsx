import { ArrowRight, Mail, Phone, Globe } from 'lucide-react';
import AnimateIn from './AnimateIn';
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-green-950 py-16 lg:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url(https://www.thepahadistory.com/cdn/shop/articles/shutterstock_719690932_1080-X-683-pxl_A3.jpg?v=1656563550&width=2048)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateIn variant="left">
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Growing Together in Tea</p>
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-white leading-tight mb-3">
                Our door is<br />always open
              </h2>
              <h3 className="font-dancing text-3xl lg:text-4xl text-[#5D3033] mb-6">Partner with PTDM</h3>
              <p className="text-white text-sm leading-relaxed mb-4 max-w-md">
                Ready to launch your own tea brand? Porwal Tea & Deri Max Beverages provides complete private label solutions since 1980. Let's grow together.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <a href="https://www.porwalderimax.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-sm hover:text-white transition-colors">
                  <Globe className="w-4 h-4 text-white" /> www.porwalderimax.com
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                
                <a href="tel:+97100000000" className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="right" delay={150}>
            <div className="max-w-4xl mx-auto py-20">
      <ContactForm />
    </div>
            {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5 sm:p-8">
              <h4 className="text-white font-semibold text-lg mb-6">Request a Quote</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white/70 text-sm focus:outline-none focus:border-white/50 transition-colors">
                  <option value="" className="text-gray-800">Select tea category</option>
                  <option value="karak" className="text-gray-800">Karak Tea</option>
                  <option value="samovar" className="text-gray-800">Samovar Tea</option>
                  <option value="premix" className="text-gray-800">Premix Tea</option>
                  <option value="green" className="text-gray-800">Green Tea</option>
                  <option value="black" className="text-gray-800">Black Tea</option>
                  <option value="coffee" className="text-gray-800">Coffee Products</option>
                </select>
                <textarea
                  placeholder="Describe your packaging requirements..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none"
                />
                <button className="w-full bg-[#5D3033] text-white py-3 rounded-xl font-semibold text-sm hover:bg-green-500 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  Send Request <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div> */}


            
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
