import { ArrowLeft, CheckCircle, Star, Package, Leaf, Award, Zap } from 'lucide-react';
import { useRouter } from '../../router';
import AnimateIn from '../../components/AnimateIn';

const flavors = [
  { name: 'Masala', description: 'A warming blend of spices — ginger, cardamom, cinnamon and clove.' },
  { name: 'Saffron', description: 'Delicate floral notes of premium saffron in every cup.' },
  { name: 'Coconut', description: 'Creamy coconut essence with a tropical twist.' },
  { name: 'Ginger', description: 'Bold and spicy with a natural ginger kick.' },
  { name: 'Cardamom', description: 'Aromatic cardamom for that authentic Middle Eastern taste.' },
  { name: 'Chocolate', description: 'Indulgent cocoa richness blended into a comforting tea.' },
  { name: 'Lemongrass', description: 'Light and refreshing with bright citrus undertones.' },
];

const specs = [
  { label: 'Type', value: '3-in-1 Ready-to-Brew Premix' },
  { label: 'Includes', value: 'Tea, Milk Powder & Sugar' },
  { label: 'Flavors Available', value: '7 Variants' },
  { label: 'Packaging Options', value: 'Sachet, Pouch, Box, Jar' },
  { label: 'Sizes', value: '14g sachet, 200g, 500g, 1kg' },
  { label: 'MOQ', value: '100 kg per flavor' },
  { label: 'Price', value: 'On Request' },
  { label: 'Shelf Life', value: '18 months' },
];

const features = [
  'Instant 3-in-1 formula — just add hot water',
  'Consistent taste with every single cup',
  'Available in 7 unique, market-tested flavors',
  'Custom sachet, pouch or jar packaging available',
  'Ideal for hotels, offices, and retail chains',
  'Full private label and white label options',
];

export default function PremixTeaPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Premix Tea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#152912]/60 via-[#152912]/40 to-[#152912]/80" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <button
            onClick={() => navigate('products')}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">3-in-1</span>
            <span className="text-white/70 text-sm">PTDM Tea Collection</span>
          </div>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-3">Premix Tea</h1>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">Instant Ready-to-Brew</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AnimateIn>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-4">About This Product</h2>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  PTDM's Premix Tea is a complete 3-in-1 ready-to-brew solution — tea leaves, whole milk powder, and sugar pre-blended into a single, perfectly balanced sachet. Just add hot water and your perfect cup is ready in seconds.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Designed for modern convenience without sacrificing quality, our premix range comes in 7 distinctive flavors: Masala, Saffron, Coconut, Ginger, Cardamom, Chocolate, and Lemongrass. Each flavor is developed by our in-house R&D team and tested extensively before launch.
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  Whether you're stocking hotel rooms, office pantries, vending machines, or retail shelves — PTDM's Premix Tea delivers consistent taste, superior quality, and your brand identity on every cup.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-green-600" />
                  <h2 className="font-playfair text-2xl font-bold text-[#152912]">Available Flavors</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {flavors.map((f) => (
                    <div key={f.name} className="bg-stone-50 rounded-2xl p-4 border border-stone-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                      <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                        <Leaf className="w-4 h-4 text-amber-700" />
                      </div>
                      <h3 className="font-semibold text-[#152912] text-sm mb-1">{f.name}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
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
                  src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Premix tea cup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#152912]/60 to-transparent flex items-center px-8">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">Ready in</p>
                    <p className="text-white text-4xl font-playfair font-bold">Seconds</p>
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
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-amber-700" />
                  <h3 className="font-semibold text-[#152912]">Private Label Ready</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Launch your own premix tea brand. Custom flavors, custom sachets, custom packaging — all under your brand name.
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
                  src="https://images.pexels.com/photos/1599000/pexels-photo-1599000.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tea packaging"
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
