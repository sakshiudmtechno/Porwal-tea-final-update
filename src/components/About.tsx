import { Leaf, ArrowRight, Package, Globe, Warehouse } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-4">More About PTDM</p>
        </AnimateIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn variant="left">
            <div>
              <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
                At Porwal Tea & Deri Max Beverages, we honor decades of tea craftsmanship with complete private label solutions.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Since 1980, PTDM has been supporting tea sellers, entrepreneurs, wholesalers, and distributors by providing end-to-end tea packaging and branding services. We handle everything — so you can focus on building your brand.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/about">
                <button className="px-6 py-3 bg-[#152912] text-white text-sm font-semibold rounded-full hover:bg-[#5d3033] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Our full story <ArrowRight className="w-4 h-4" />
                </button>
                  </a>
               
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {[
                  { icon: <Leaf className="w-4 h-4 text-green-700" />, label: 'Est. 1980', sub: '40+ years of expertise' },
                  { icon: <Package className="w-4 h-4 text-green-700" />, label: '25+ Blends', sub: 'Premium tea varieties' },
                  { icon: <Globe className="w-4 h-4 text-green-700" />, label: 'UAE & Export', sub: 'Global delivery network' },
                ].map((stat, i) => (
                  <AnimateIn key={stat.label} delay={i * 120}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {stat.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-900">{stat.label}</p>
                        <p className="text-xs text-gray-500">{stat.sub}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-100 rounded-2xl" />
              <img
                src="https://www.octavius.in/cdn/shop/articles/The_journey_of_a_tea_leaf_From_farm_to_cup.jpg?v=1693027986"
                alt="Tea manufacturing"
                className="relative z-10 w-full h-80 lg:h-[500px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute z-20 bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Warehouse className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">5,000 kg / day</p>
                    <p className="text-xs text-gray-500">Production capacity</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
