import { ArrowLeft, CheckCircle, Star, Package, Award, Coffee } from 'lucide-react';
import { useRouter } from '../../router';
import AnimateIn from '../../components/AnimateIn';

const blends = [
  { name: 'Arabica Blend', description: 'Smooth, mild and aromatic with hints of fruit and light acidity.' },
  { name: 'Robusta Blend', description: 'Bold, strong and full-bodied with a rich crema and intense kick.' },
  { name: 'Arabic Coffee (Qahwa)', description: 'Traditional cardamom-spiced coffee for Middle Eastern serving rituals.' },
  { name: 'Premix Coffee', description: 'Instant 3-in-1 coffee with milk and sugar — just add hot water.' },
];

const specs = [
  { label: 'Type', value: 'Arabica, Robusta, Qahwa, Premix' },
  { label: 'Origin', value: 'Ethiopia, Brazil, Vietnam' },
  { label: 'Process', value: 'Washed, Natural, Blend' },
  { label: 'Packaging Options', value: 'Tin, Pouch, Sachet, Bulk' },
  { label: 'Sizes Available', value: '100g, 200g, 500g, 1kg, 5kg' },
  { label: 'MOQ', value: '50 kg per blend' },
  { label: 'Price', value: 'On Request' },
  { label: 'Shelf Life', value: '18 months (sealed)' },
];

const features = [
  'Sourced from top-grade coffee growing regions',
  'Custom roast profiles available on request',
  'Traditional Arabic Qahwa blend for UAE market',
  'Private label tin, pouch, and sachet packaging',
  'Halal certified and export-documentation ready',
  'Instant premix variant available for hospitality sector',
];

export default function CoffeePage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Coffee"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/85" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <button
            onClick={() => navigate('products')}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-800 text-white text-xs font-bold px-3 py-1 rounded-full">Premium</span>
            <span className="text-white/70 text-sm">PTDM Collection</span>
          </div>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-3">Coffee</h1>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">High-Quality Arabica & Robusta</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AnimateIn>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-4">About Our Coffee</h2>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  PTDM's coffee range extends the same dedication to quality that defines our tea collection. Sourced from the world's premier growing regions — Ethiopia, Brazil, and Vietnam — our coffee blends are crafted to satisfy the diverse tastes of the UAE and MENA market.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  From smooth Arabica for gourmet cafés to bold Robusta for high-volume foodservice, and from traditional Arabic Qahwa for cultural settings to convenient 3-in-1 premix for offices and hospitality — PTDM covers every coffee occasion.
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  All blends are available under your private label — fully branded, packaged, and ready to ship. Our R&D team can develop custom roast profiles and proprietary blends tailored specifically to your target customer.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Coffee className="w-5 h-5 text-amber-700" />
                  <h2 className="font-playfair text-2xl font-bold text-[#152912]">Coffee Blends</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {blends.map((b) => (
                    <div key={b.name} className="bg-amber-50 rounded-2xl p-5 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <Coffee className="w-5 h-5 text-amber-700" />
                      </div>
                      <h3 className="font-semibold text-[#152912] mb-2">{b.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={150}>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.pexels.com/photos/1599000/pexels-photo-1599000.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Coffee beans"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent flex items-center px-8">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">Sourced from</p>
                    <p className="text-white text-3xl font-playfair font-bold">World's Best</p>
                    <p className="text-white/80 text-sm">Coffee Growing Regions</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <div className="space-y-6">
            <AnimateIn variant="right">
              <div className="bg-[#152912] text-white rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-amber-400" />
                  <h3 className="font-semibold text-lg">Product Specifications</h3>
                </div>
                <div className="space-y-3">
                  {specs.map((s) => (
                    <div key={s.label} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <p className="text-white/60 text-xs mb-0.5">{s.label}</p>
                      <p className="text-white text-sm font-medium">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn variant="right" delay={100}>
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-amber-700" />
                  <h3 className="font-semibold text-[#152912]">Private Label Ready</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Launch your own coffee brand with PTDM's complete private label service — custom roast, custom packaging, your brand.
                </p>
                <button
                  onClick={() => navigate('contact')}
                  className="w-full bg-[#152912] text-white text-sm font-semibold py-3 rounded-xl hover:bg-green-800 transition-colors"
                >
                  Request a Quote
                </button>
              </div>
            </AnimateIn>

            <AnimateIn variant="right" delay={150}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coffee cup"
                  className="w-full h-48 object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </div>
  );
}
