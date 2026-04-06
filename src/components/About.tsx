import { Leaf, ArrowRight, Package, Globe, Warehouse } from 'lucide-react';
import AnimateIn from './AnimateIn';

export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="about-ptdm" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-4">Trusted Tea Manufacturer in Dubai Since 1980</p>
        </AnimateIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn variant="left">
            <article>
              <h2 id="about-heading" className="font-playfair text-3xl lg:text-5xl font-bold text-green-900 leading-tight mb-6">
                Leading Private Label Tea Manufacturer in Dubai, UAE with 40+ Years of Excellence
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Since 1980, <strong>Porwal Tea & Deri Max Beverages (PTDM)</strong> has been Dubai's trusted partner for private label tea manufacturing. We support tea sellers, entrepreneurs, wholesalers, and distributors across the UAE and GCC with complete end-to-end tea packaging, blending, and branding services. Our state-of-the-art facility in Ras Al Khor Industrial Area, Dubai processes <strong>5,000 kg of tea daily</strong>, delivering consistent quality with every batch. From Karak tea to Samovar blends, we handle everything so you can focus on growing your brand.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="/about" aria-label="Learn more about our tea manufacturing story and capabilities">
                <button className="px-6 py-3 bg-[#152912] text-white text-sm font-semibold rounded-full hover:bg-[#5d3033] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </button>
                  </a>

              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                {[
                  { icon: <Leaf className="w-4 h-4 text-green-700" />, label: 'Est. 1980', sub: '40+ years tea expertise' },
                  { icon: <Package className="w-4 h-4 text-green-700" />, label: '25+ Blends', sub: 'Assam & Darjeeling sourced' },
                  { icon: <Globe className="w-4 h-4 text-green-700" />, label: 'UAE & GCC', sub: 'Pan-UAE delivery network' },
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
            </article>
          </AnimateIn>

          <AnimateIn variant="right">
            <figure className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-100 rounded-2xl" aria-hidden="true" />
              <img
                src="https://www.octavius.in/cdn/shop/articles/The_journey_of_a_tea_leaf_From_farm_to_cup.jpg?v=1693027986"
                alt="Tea manufacturing process at PTDM facility showing tea blending and quality control in Dubai"
                className="relative z-10 w-full h-80 lg:h-[500px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <figcaption className="absolute z-20 bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Warehouse className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">5,000 kg / day</p>
                    <p className="text-xs text-gray-500">Daily production capacity</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
