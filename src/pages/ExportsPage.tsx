import { Globe, FileText, Package, Truck, Warehouse, CheckCircle, ArrowRight, MapPin, ShieldCheck, Zap } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import { useRouter } from '../router';


const exportFeatures = [
  {
    icon: FileText,
    title: 'Export Documentation',
    desc: 'Complete export documentation support including certificates of origin, health certificates, customs declarations, and all regulatory paperwork required for international shipments.',
  },
  {
    icon: Package,
    title: 'Bulk Packaging',
    desc: 'Export-grade bulk packaging in 5kg bags (MOQ 510 bags @1.25 AED) and larger formats. Durable materials designed to withstand international shipping conditions.',
  },
  {
    icon: Truck,
    title: 'International Shipping',
    desc: 'Coordination with reliable freight forwarders and logistics partners for seamless delivery to international destinations. Air, sea, and land freight options available.',
  },
  {
    icon: Warehouse,
    title: 'Pre-Shipment Storage',
    desc: 'Dedicated warehouse space to consolidate export orders. Climate-controlled storage ensures tea quality is maintained until your shipment is ready to depart.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Every export shipment passes rigorous quality checks. Consistent product standards batch after batch, ensuring your international customers receive the same premium product.',
  },
  {
    icon: Zap,
    title: 'Quick & Reliable',
    desc: 'Quick and reliable export logistics to meet global demand efficiently. Our experienced team ensures your orders are fulfilled on time, every time.',
  },
];

const uaeNetwork = [
  { region: 'Dubai', type: 'Wholesale & Retail', desc: 'Full coverage across all Dubai zones' },
  { region: 'Abu Dhabi', type: 'Wholesale & Retail', desc: 'UAE capital — complete distribution' },
  { region: 'Sharjah', type: 'Retail & Export Hub', desc: 'Northern emirates coverage' },
  { region: 'All Emirates', type: 'Pan-UAE Delivery', desc: 'Seamless delivery to every corner of UAE' },
];

const internationalNetwork = [
  { region: 'GCC Countries', coverage: 'Saudi Arabia, Kuwait, Qatar, Bahrain, Oman', type: 'Export Orders' },
  { region: 'South Asia', coverage: 'India, Pakistan, Bangladesh, Sri Lanka', type: 'Bulk Export' },
  { region: 'Europe', coverage: 'Custom shipping coordination', type: 'International' },
  { region: 'Global Markets', coverage: 'Worldwide on request', type: 'International' },
];

const storageFeatures = [
  'Dedicated storage space for client inventory',
  'Stock your tea inventory without warehousing worries',
  'Reduces client warehousing overhead costs',
  'Ensures continuous supply pipeline',
  'Flexible short and long-term storage terms',
  'Real-time inventory tracking',
];

const processSteps = [
  { num: '01', title: 'Order Placement', desc: 'Submit your export order with quantity, destination, and packaging specifications.' },
  { num: '02', title: 'Production', desc: 'Tea is blended, packaged, and labeled to your brand specifications and export requirements.' },
  { num: '03', title: 'Quality Check', desc: 'Every batch undergoes rigorous quality inspection before clearance for shipment.' },
  { num: '04', title: 'Documentation', desc: 'We prepare all necessary export documents — certificates, customs paperwork, and packing lists.' },
  { num: '05', title: 'Shipping', desc: 'Your consignment is dispatched via your preferred freight channel with full tracking.' },
];

export default function ExportsPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[45vh] sm:h-[55vh] min-h-[320px] overflow-hidden">
        <img src="/export.png" alt="UAE delivery network" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#152912]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <AnimateIn>
            <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">Pan-UAE & International</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Exports & Logistics
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              We're connected with all major transport networks, making seamless delivery possible to every corner of UAE — and beyond.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-[#5d3033]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-center flex-wrap">
            {[
              { label: 'Pan-UAE Delivery', sub: 'All major networks' },
              { label: 'Export Ready', sub: 'Since 1980' },
              { label: 'Full Documentation', sub: 'Support included' },
              { label: '5,000 kg/day', sub: 'Production capacity' },
            ].map((item) => (
              <div key={item.label} className="text-white">
                <p className="font-bold text-base sm:text-lg">{item.label}</p>
                <p className="text-white/60 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pan-UAE Delivery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <AnimateIn variant="left">
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Pan-UAE Coverage</p>
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912] leading-tight mb-4">
                  Seamless Delivery Across the UAE
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  PTDM is connected with all major transport networks, making seamless delivery possible to every corner of UAE. Our logistics infrastructure supports wholesale distribution, retail delivery, and export orders.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {uaeNetwork.map((item) => (
                    <div key={item.region} className="bg-stone-50 rounded-xl p-4 hover:bg-green-50 transition-colors duration-200">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-[#152912] flex-shrink-0" />
                        <p className="font-bold text-[#152912] text-sm">{item.region}</p>
                      </div>
                      <p className="text-gray-500 text-xs mb-1">{item.desc}</p>
                      <span className="inline-block text-xs bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
            <AnimateIn variant="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-[450px]">
                <img
                  src="/export2.png"
                  alt="UAE delivery network"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152912]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-playfair text-2xl font-bold text-white mb-1">Pan-UAE Delivery</p>
                  <p className="text-white/70 text-xs">Connected with all major transport networks</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Export Features */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Export Support</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">
                Complete Export <span className="text-[#5d3033]">Ecosystem</span>
              </h2>
              <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
                PTDM handles every aspect of international trade — so you can focus on growing your brand in new markets.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {exportFeatures.map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 80}>
                <div className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#152912]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-50 group-hover:bg-[#152912] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#152912] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#152912] text-base mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Export Process</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">
                From Order to Destination
              </h2>
            </div>
          </AnimateIn>
          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.num} delay={i * 80} variant="left">
                <div className="flex gap-5 bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#152912] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#152912] text-sm mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* International Network */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">International Reach</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">
                Global Market Coverage
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internationalNetwork.map((item, i) => (
              <AnimateIn key={item.region} delay={i * 80}>
                <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#152912]/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#152912] rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#152912] text-base">{item.region}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.coverage}</p>
                    <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 font-semibold px-2.5 py-0.5 rounded-full">{item.type}</span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Storage */}
      <section className="py-16 lg:py-20 bg-[#152912] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn variant="left">
              <div>
                <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">Warehousing</p>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">Storage Facility</h2>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  PTDM provides dedicated storage space for our clients, allowing you to stock your tea inventory without the worry of warehousing — keeping your supply chain seamless and cost-effective.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {storageFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#c2c89a] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn variant="right" delay={100}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Warehouse storage"
                  className="w-full h-72 object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912] mb-4">Ready to Export Your Tea Brand?</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">From packaging to documentation to delivery — PTDM handles every step of your export journey.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => navigate('contact')} className="px-8 py-3 bg-[#152912] text-white font-semibold text-sm rounded-full hover:bg-[#5d3033] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Start Export Enquiry <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('products')} className="px-8 py-3 border border-[#152912] text-[#152912] font-semibold text-sm rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300">
                View Products
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
