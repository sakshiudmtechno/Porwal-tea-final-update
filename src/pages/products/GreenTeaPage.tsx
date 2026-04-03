import { ArrowLeft, CheckCircle, Star, Package, Leaf, Award, Heart } from 'lucide-react';
import { useRouter } from '../../router';
import AnimateIn from '../../components/AnimateIn';

const variants = [
  { name: 'Green Leaf Shai', description: 'A classic green tea with a light, grassy aroma and refreshing clean taste.' },
  { name: 'Green Leaf Hadeel', description: 'A premium green tea with smooth, mellow flavor and subtle floral undertones.' },
];

const healthBenefits = [
  { title: 'Rich in Antioxidants', desc: 'Packed with catechins and polyphenols that protect cells.' },
  { title: 'Supports Metabolism', desc: 'Naturally boosts metabolic rate and energy levels.' },
  { title: 'Heart Health', desc: 'Regular consumption supports healthy cardiovascular function.' },
  { title: 'Mental Clarity', desc: 'L-theanine and caffeine work together for calm focus.' },
];

const specs = [
  { label: 'Tea Type', value: 'Premium Green Tea' },
  { label: 'Grade', value: 'TGFOP, GFOP, BOP Green' },
  { label: 'Origin', value: 'Darjeeling & Nilgiri, India' },
  { label: 'Packaging Options', value: 'Box, Pouch, Tea Bags, Bulk' },
  { label: 'Sizes Available', value: '100g, 200g, 500g, 1kg' },
  { label: 'MOQ', value: '50 kg per variant' },
  { label: 'Price', value: 'On Request' },
  { label: 'Shelf Life', value: '24 months' },
];

const features = [
  'Sourced from premium Darjeeling gardens',
  'Light, clean liquor with natural health benefits',
  'Available in loose leaf and tea bag formats',
  'Custom private label branding included',
  'Ideal for health-conscious retail brands',
  'Consistent batch quality guaranteed',
];

export default function GreenTeaPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Green Tea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-green-900/40 to-green-900/80" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <button
            onClick={() => navigate('products')}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </button>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">Health Tea</span>
            <span className="text-white/70 text-sm">PTDM Tea Collection</span>
          </div>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-3">Green Tea</h1>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">Premium Health Blend</span>
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
                  PTDM's Green Tea is sourced from the finest Darjeeling and Nilgiri gardens in India — where altitude, climate, and soil converge to produce leaves of exceptional quality. Minimally processed to preserve natural antioxidants, our green tea delivers a light, clean cup with every brew.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Available in two premium variants — Green Leaf Shai and Green Leaf Hadeel — both offer distinct taste profiles while retaining the health-giving properties that make green tea one of the world's most celebrated beverages.
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  Whether you're building a wellness brand or expanding an existing tea range, PTDM's green tea collection gives you the quality, consistency, and packaging flexibility to succeed in any market.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div>
                <h2 className="font-playfair text-2xl font-bold text-[#152912] mb-6">Available Variants</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {variants.map((v) => (
                    <div key={v.name} className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                        <Leaf className="w-5 h-5 text-emerald-700" />
                      </div>
                      <h3 className="font-semibold text-[#152912] mb-2">{v.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={120}>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  <h2 className="font-playfair text-2xl font-bold text-[#152912]">Health Benefits</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {healthBenefits.map((b) => (
                    <div key={b.title} className="flex gap-4 p-4 bg-stone-50 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                      <div>
                        <h4 className="font-semibold text-[#152912] text-sm mb-1">{b.title}</h4>
                        <p className="text-xs text-gray-500">{b.desc}</p>
                      </div>
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
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="relative rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Green tea garden"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent flex items-center px-8">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">Sourced from</p>
                    <p className="text-white text-3xl font-playfair font-bold">Darjeeling</p>
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
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-semibold text-[#152912]">Private Label Ready</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Launch your own green tea wellness brand with PTDM's complete private label service.
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
                  alt="Green tea packaging"
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
