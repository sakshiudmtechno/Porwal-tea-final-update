import { Check, Circle } from 'lucide-react';
import AnimateIn from './AnimateIn';

const features = [
  {
    title: 'No manufacturing setup required',
    description: 'Launch your own tea brand without investing in any production infrastructure. PTDM handles all manufacturing from sourcing to packaging.',
  },
  {
    title: 'Custom packaging & labeling',
    description: 'Fully customized packaging designed according to your brand identity — boxes, jars, pouches, tea bags, cans, and bulk formats available.',
  },
  {
    title: 'Over 25 premium tea blends',
    description: 'Choose from a wide range of Karak, Samovar, Black, Green, and Premix tea blends to create a diverse product portfolio for your brand.',
  },
  {
    title: 'Scalable production capacity',
    description: "PTDM's manufacturing facility processes up to 5,000 kg of tea per day, ensuring consistent product availability for growing brands.",
  },
  {
    title: 'Export-ready logistics',
    description: 'Full export documentation, bulk packaging, and international shipping coordination to supply markets beyond the UAE seamlessly.',
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-green-900 mb-4">
              Why choose <span className="text-[#152912]">PTDM</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Porwal Tea & Deri Max Beverages stands apart with its complete private label ecosystem, handling everything from tea sourcing and blending to packaging, labeling, storage, and logistics — all under one roof.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn variant="scale" delay={120}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid grid-cols-12 bg-[#5d3033] text-white">
              <div className="col-span-8 px-3 sm:px-6 py-4 text-xs sm:text-sm font-semibold">Advantage</div>
              <div className="col-span-2 px-2 sm:px-4 py-4 text-xs sm:text-sm font-semibold text-center border-l border-green-700">
                PTDM
              </div>
              <div className="col-span-2 px-2 sm:px-4 py-4 text-xs sm:text-sm font-semibold text-center border-l border-green-700">
                Others
              </div>
            </div>

            {features.map((feature, index) => (
              <AnimateIn key={feature.title} delay={index * 90}>
                <div
                  className={`grid grid-cols-12 border-b border-gray-100 hover:bg-green-50 transition-colors duration-200 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
                  }`}
                >
                  <div className="col-span-8 px-3 sm:px-6 py-4 sm:py-5">
                    <p className="text-xs sm:text-sm font-semibold text-green-900 mb-1">{feature.title}</p>
                    <p className="hidden sm:block text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="col-span-2 flex items-center justify-center border-l border-gray-100">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-700 stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center justify-center border-l border-gray-100">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <Circle className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
