import { ArrowLeft, CheckCircle, Star, Package, Leaf, Award } from 'lucide-react';
import { useRouter } from '../../router';
import AnimateIn from '../../components/AnimateIn';

const variants = [
  { name: 'Karak Arabia', description: 'Rich, bold blend crafted for the classic Gulf taste. Deep amber color with a robust malty finish.' },
  { name: 'Karak Dune', description: 'Smooth and slightly spiced, inspired by the warm desert evenings. Perfect for slow sipping.' },
  { name: 'Karak Souk', description: 'A fragrant, market-inspired blend with subtle cardamom notes. A timeless street-tea experience.' },
];

const specs = [
  { label: 'Base Blend', value: 'Assam & Darjeeling BP, BOPSM & BOP' },
  { label: 'Origin', value: 'Assam, India & Darjeeling, India' },
  { label: 'Packaging Options', value: 'Box, Pouch, Can, Bulk Bag' },
  { label: 'Sizes Available', value: '200g, 500g, 1kg, 2kg, 5kg' },
  { label: 'MOQ', value: '50 kg per variant' },
  { label: 'Price', value: 'On Request' },
  { label: 'Shelf Life', value: '24 months' },
  { label: 'Certifications', value: 'FSSAI, Halal Certified' },
];

const features = [
  'Bold malty flavor with strong brew characteristics',
  'Perfect for making UAE-style milk karak tea',
  'Available in custom private label packaging',
  'Blended under strict quality control protocols',
  'Export-ready with full documentation support',
  'Customizable blend strength on request',
];

export default function KarakTeaPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Karak Tea"
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
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Bestseller</span>
            <span className="text-white/70 text-sm">PTDM Tea Collection</span>
          </div>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-3">Karak Tea</h1>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">Premium Blend</span>
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
                  Karak Tea is the heartbeat of UAE tea culture. PTDM's Karak Tea is a masterfully crafted blend of pure Assam and Darjeeling BP, BOPSM & BOP — delivering the thick, malty richness that makes UAE-style milk tea an everyday ritual for millions.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Our Karak Tea comes in three distinct variants — Karak Arabia, Karak Dune, and Karak Souk — each tailored to a unique taste profile while maintaining the signature full-bodied character that defines great karak. Whether served in a roadside dhaba or a premium café, this tea never disappoints.
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  As the UAE's trusted private label tea manufacturer since 1980, PTDM ensures every batch is blended, tested, and packaged to the highest standards — ready for your brand, your customers, and your market.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-6">Available Variants</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {variants.map((v) => (
                    <div key={v.name} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:border-green-200 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                        <Leaf className="w-5 h-5 text-green-700" />
                      </div>
                      <h3 className="font-semibold text-[#152912] mb-2">{v.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
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
                  src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Tea brewing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#152912]/50 to-transparent flex items-center px-8">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">Blended with care since</p>
                    <p className="text-white text-4xl font-playfair font-bold">1980</p>
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
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-green-700" />
                  <h3 className="font-semibold text-[#152912]">Private Label Ready</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Launch your own Karak Tea brand with PTDM's full private label service — custom packaging, branding, and logistics included.
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
                  src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600"
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
