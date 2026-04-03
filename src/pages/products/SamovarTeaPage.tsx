import { ArrowLeft, CheckCircle, Star, Package, Leaf, Award } from 'lucide-react';
import { useRouter } from '../../router';
import AnimateIn from '../../components/AnimateIn';

const variants = [
  { name: 'Samovar Al Shai', description: 'A classic Arabic tea blend with deep amber liquor and smooth, balanced strength.' },
  { name: 'Samovar Aseel', description: 'A pure, unadulterated black tea blend delivering a clean, crisp flavor profile.' },
  { name: 'Samovar Safa', description: 'A lighter, clean-tasting tea for those who prefer a delicate, refreshing cup.' },
];

const specs = [
  { label: 'Base Blend', value: 'Assam & Darjeeling PD & Dust' },
  { label: 'Origin', value: 'Assam & Darjeeling, India' },
  { label: 'Packaging Options', value: 'Box, Pouch, Loose Leaf, Bulk' },
  { label: 'Sizes Available', value: '200g, 500g, 1kg, 2kg, 5kg' },
  { label: 'MOQ', value: '50 kg per variant' },
  { label: 'Price', value: 'On Request' },
  { label: 'Shelf Life', value: '24 months' },
  { label: 'Certifications', value: 'FSSAI, Halal Certified' },
];

const features = [
  'Classic Arabic tea style with fine PD & Dust grades',
  'Ideal for brewing in traditional samovar urns',
  'Available in custom private label packaging',
  'Consistent color and flavor in every batch',
  'Export-ready — shipped to 15+ countries',
  'Custom blend strength available on request',
];

export default function SamovarTeaPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Samovar Tea"
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
            <span className="text-white/70 text-sm">PTDM Tea Collection</span>
          </div>
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-3">Samovar Tea</h1>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">Arabic Style Blend</span>
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
                  Samovar Tea draws its character from the rich tradition of Arabic tea culture — a slow, deliberate brew served in glass cups from a gleaming samovar urn. PTDM's Samovar Tea blends fine Assam and Darjeeling PD and Dust grades to produce a bold, amber liquor with a clean, satisfying finish.
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Available in three variants — Samovar Al Shai, Samovar Aseel, and Samovar Safa — each captures a different character of the Arabic tea-drinking tradition. From strong and malty to clean and light, there is a Samovar blend for every palate.
                </p>
                <p className="text-gray-600 leading-relaxed text-base">
                  Perfect for hotels, restaurants, cafés, and private label brands looking to offer an authentic Arabic tea experience. PTDM delivers consistent quality with every order, batch after batch.
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
                  src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Traditional tea service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#152912]/60 to-transparent flex items-center px-8">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">Traditional Arabic</p>
                    <p className="text-white text-3xl font-playfair font-bold">Tea Heritage</p>
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
                  Brand your own Samovar Tea line with PTDM's complete private label manufacturing and packaging service.
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
                  src="https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tea cups"
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
