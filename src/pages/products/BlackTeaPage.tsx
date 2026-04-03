import { ArrowLeft, CheckCircle, Star, Package, Leaf, Award } from 'lucide-react';
import { useRouter } from '../../router';
import AnimateIn from '../../components/AnimateIn';

const useCases = [
  { name: 'Classic Milk Tea', description: 'Bold base that pairs perfectly with full-fat milk for a rich, creamy cup.' },
  { name: 'Masala Chai', description: 'Strong enough to hold spice infusions and remain full-bodied.' },
  { name: 'Iced Tea', description: 'Brews cold without bitterness — ideal for refreshing iced tea preparations.' },
  { name: 'Straight Black', description: 'Drinks beautifully on its own — clean, strong, and satisfying.' },
];

const specs = [
  { label: 'Tea Type', value: 'Premium Black Tea (CTC & Orthodox)' },
  { label: 'Grades', value: 'BP, BOP, BOPSM, PD, Dust' },
  { label: 'Origin', value: 'Assam & Darjeeling, India' },
  { label: 'Packaging Options', value: 'Box, Pouch, Tea Bag, Bulk Bag' },
  { label: 'Sizes Available', value: '200g, 500g, 1kg, 2kg, 5kg' },
  { label: 'MOQ', value: '50 kg' },
  { label: 'Price', value: 'On Request' },
  { label: 'Shelf Life', value: '24 months' },
];

const features = [
  'Sourced from premium Assam & Darjeeling gardens',
  'Strong, full-bodied brew with rich amber color',
  'Multiple grades available for custom blending',
  'Suitable for daily household and commercial use',
  'Full private label packaging options available',
  'Consistent quality certified by international standards',
];

export default function BlackTeaPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Black Tea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <button
            onClick={() => navigate('products')}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-stone-700 text-white text-xs font-bold px-3 py-1 rounded-full">Classic</span>
            <span className="text-white/70 text-sm">PTDM Tea Collection</span>
          </div>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-3">Black Tea</h1>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">Premium Grade Blend</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AnimateIn>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-4">About This Blend</h2>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Black Tea is the world's most consumed tea, and PTDM produces it at its finest. Sourced from the renowned gardens of Assam and Darjeeling, our black tea offers a bold, robust character with a deep amber brew that holds strong through milk, sugar, and spice.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Available in multiple grades — BP, BOP, BOPSM, PD, and Dust — our black tea can be blended and customized to meet the precise requirements of any market. It's the backbone of classic milk tea, masala chai, iced tea, and daily household brewing.
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  PTDM has been blending and packaging black tea for over four decades, serving clients across the UAE and international markets with consistent quality that their customers trust and come back to, every single day.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-6">Perfect For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {useCases.map((u) => (
                    <div key={u.name} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center mb-3">
                        <Leaf className="w-5 h-5 text-stone-700" />
                      </div>
                      <h3 className="font-semibold text-[#152912] mb-2">{u.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{u.description}</p>
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
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Black tea cup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent flex items-center px-8">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">The world's most</p>
                    <p className="text-white text-3xl font-playfair font-bold">Beloved Tea</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <div className="space-y-6">
            <AnimateIn variant="right">
              <div className="bg-[#152912] text-white rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Package className="w-5 h-5 text-green-400" />
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
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-stone-700" />
                  <h3 className="font-semibold text-[#152912]">Private Label Ready</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Build your black tea brand on a foundation trusted by leading UAE companies. Full packaging and branding support included.
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
                  src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tea estate"
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
