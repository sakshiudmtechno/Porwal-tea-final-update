import { Package, Layers, FlaskConical, Tag, Warehouse, Globe, CheckCircle, ArrowRight, Lightbulb, Settings } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import { useRouter } from '../router';

const services = [
  {
    icon: Package,
    title: 'Custom Tea Packaging',
    desc: 'Fully customized packaging designed to match your brand identity. We understand the importance of your brand\'s value and offer 20+ formats tailored to your unique requirements.',
    features: ['Tea Pouches', 'Tea Boxes', 'Tea Jars', 'Tea Dips', 'Tea Cans', 'Bulk Packaging'],
    image: 'custom tea packing.jpeg',
  },
  {
    icon: FlaskConical,
    title: 'Tea Blending',
    desc: 'Access over 25 premium tea blends crafted from the finest Assam and Darjeeling estates. Each blend crafted for consistent quality, aroma, and taste — maintained 365 days a year.',
    features: ['25+ Blends', 'Assam Sourcing', 'Darjeeling Sourcing', 'Custom Blends', 'Flavor Profiling', 'R&D Support'],
    image: 'tea blending.jpeg',
  },
  {
    icon: Layers,
    title: 'Production & Packaging',
    desc: 'High-capacity processing facility capable of handling up to 5,000 kg of tea processing and packaging per day, ensuring scalability for growing businesses.',
    features: ['5,000 kg/day', 'Filling & Sealing', 'Batch Coding', 'Inner Pouch Sealing', 'Master Carton', 'Box Strapping'],
    image: 'production $packaging.jpeg',
  },
  {
    icon: Tag,
    title: 'Labeling & Branding',
    desc: 'Professional label and branding services including stickers, sleeves, and full custom artwork. We help establish a distinct brand presence for every packaging format.',
    features: ['Custom Artwork', 'Sticker Labels', 'Sleeves', 'Multilingual Labels', 'Brand Identity', 'Artwork Support'],
    image: 'labeling branding.jpeg',
  },
  {
    icon: Warehouse,
    title: 'Storage Facility',
    desc: 'We provide dedicated storage space for our clients, allowing you to stock your tea inventory without the worry of warehousing — keeping your supply chain seamless.',
    features: ['Dedicated Space', 'Secure Storage', 'Inventory Mgmt', 'Flexible Terms', 'Continuous Supply', 'Cost Savings'],
    image: 'storage facility.jpeg',
  },
  {
    icon: Globe,
    title: 'Export Logistics',
    desc: 'Quick and reliable export logistics to meet global demand efficiently. Connected with all major transport networks for seamless Pan-UAE delivery and international shipping.',
    features: ['Export Documentation', 'Bulk Packaging', 'International Shipping', 'Pan-UAE Delivery', 'Customs Support', 'Wholesale & Retail'],
    image: 'export logistics.jpeg',
  },
];

const packagingFormats = [
  {
    title: 'Box',
    image: 'box.jpeg',
    cbm: 'CBM – 1',
    services: ['Filling', 'Inner Pouch Sealing', 'Batch Coding', 'Master Carton', 'Box Strapping'],
    variants: [
      { size: '200G – 250G', moq: '1,125 Boxes', price: '0.50 AED' },
      { size: '400G – 500G', moq: '525 Boxes', price: '0.85 AED' },
      { size: '800G – 1KG', moq: '240 Boxes', price: '1.65 AED' },
    ],
  },
  {
    title: 'Jar Square',
    image: 'Jar Square.jpeg',
    cbm: 'CBM – 1.043',
    services: ['Filling', 'Sealing', 'Sticker or Sleeves', 'Batch Coding', 'Master Carton'],
    variants: [
      { size: '200G – 250G', moq: '1,008 Jars', price: '0.67 AED' },
      { size: '400G – 500G', moq: '490 Jars', price: '1.27 AED' },
      { size: '800G – 1KG', moq: '280 Jars', price: '2.45 AED' },
    ],
  },
  {
    title: 'Jar Round',
    image: 'Jar Round.jpeg',
    cbm: 'CBM – 1.043',
    services: ['Filling', 'Sealing', 'Sticker or Sleeves', 'Batch Coding', 'Master Carton'],
    variants: [
      { size: '200G – 250G', moq: '672 Jars', price: '0.67 AED' },
      { size: '400G – 500G', moq: '336 Jars', price: '1.27 AED' },
      { size: '800G – 1KG', moq: '280 Jars', price: '2.45 AED' },
    ],
  },
  {
    title: 'Single Chamber Tea Bags',
    image: 'Single Chamber Tea Bags.jpeg',
    cbm: 'CBM – 1',
    services: ['Dip Single Chamber', 'Tags', 'Envelope (25 or 100 dips)', 'Mono Carton', 'Outer Carton'],
    variants: [
      { size: '25 Tea Bag', moq: '21,600 Dips', price: '0.15 AED' },
      { size: '100 Tea Bag', moq: '54,000 Dips', price: '0.11 AED' },
    ],
  },
  {
    title: 'Double Chamber Tea Bags',
    image: 'Double Chamber Tea Bags.jpeg',
    cbm: 'CBM – 1.78',
    services: ['Dip Double Chamber', 'Tags', 'Envelope (25 or 100 dips)', 'Mono Carton', 'Outer Carton'],
    variants: [
      { size: '25 Tea Bag', moq: '108,000 Dips', price: '0.11 AED' },
      { size: '100 Tea Bag', moq: '105,000 Dips', price: '0.09 AED' },
    ],
  },
  {
    title: 'Pyramid Tea Bags',
    image: 'Pyramid Tea Bags.jpeg',
    cbm: 'CBM – 1',
    services: ['Pyramid Tea Bag', 'Tags', 'Envelope (25 or 100 dips)', 'Mono Carton', 'Outer Carton'],
    variants: [
      { size: '25 Tea Bag', moq: '22,500 Dips', price: '0.22 AED' },
      { size: '100 Tea Bag', moq: '54,000 Dips', price: '0.19 AED' },
    ],
  },
  {
    title: 'Premix Tea Packs',
    image: 'Premix Tea Packs.jpeg',
    cbm: 'CBM – 1',
    services: ['Filling', 'Box of 10 (Sachets)', 'Batch Coding', 'Master Carton', 'Box Strapping'],
    variants: [
      { size: '1 KG', moq: '300 Units', price: '0.60 AED' },
      { size: '13G or 14G', moq: '54,000 Dips', price: '0.15 AED' },
    ],
  },
  {
    title: 'Bulk Bags',
    image: 'Bulk Bags.jpeg',
    cbm: 'CBM – 7.31',
    services: ['5kg Single Color (60 Bags)', '@50/- 10.56$/per bag', 'Further customisation available'],
    variants: [
      { size: '5KG Tea Bag', moq: '510 Bags', price: '1.25 AED' },
    ],
  },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'Discuss your brand vision, target market, and packaging requirements with our team.' },
  { num: '02', title: 'Blend Selection', desc: 'Choose from 25+ premium blends or request a custom blend for your brand.' },
  { num: '03', title: 'Packaging Design', desc: 'Submit artwork or work with our design support team to create stunning packaging.' },
  { num: '04', title: 'Production', desc: 'Our facility processes and packages your tea to the highest quality standards.' },
  { num: '05', title: 'Delivery', desc: 'We handle storage, logistics, and delivery — UAE-wide or international export.' },
];

export default function ServicesPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[45vh] sm:h-[40vh] min-h-[320px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="PTDM Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#152912]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <AnimateIn>
            <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">Complete Tea Solutions</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Our Services
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              End-to-end private label tea manufacturing — from sourcing and blending to packaging, storage, and export logistics.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* 6 Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">What We Offer</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">
                Six Pillars of <span className="text-[#5d3033]">Excellence</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 80}>
                <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#152912]/60 group-hover:bg-[#152912]/40 transition-colors duration-300" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#152912] text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <ul className="grid grid-cols-2 gap-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-10">
      <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-2">
        MOQ & Pricing
      </p>
      <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912]">
        Packaging Options
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {packagingFormats.map((fmt) => (
        <div
          key={fmt.title}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
        >
          {/* IMAGE */}
          <div className="relative h-28">
            <img src={fmt.image} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-2 left-3">
              <h3 className="text-white text-xs font-bold">{fmt.title}</h3>
              <p className="text-[10px] text-gray-200">{fmt.cbm}</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-3 text-xs">

            {/* SERVICES */}
            <div className="mb-2">
              <p className="font-semibold text-[#5d3033] text-[10px] mb-1">
                Services
              </p>
              <ul className="space-y-[2px]">
                {fmt.services.slice(0, 3).map((s) => (
                  <li key={s} className="flex gap-1 text-gray-500">
                    • {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* VARIANTS */}
            <div className="border-t pt-2 space-y-1">
              {fmt.variants.map((v) => (
                <div key={v.size} className="flex justify-between text-[11px]">
                  <span>{v.size}</span>
                  <span className="font-bold text-[#5d3033]">{v.price}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      ))}
    </div>

    <p className="text-center text-xs text-gray-400 mt-4">
      *10% OFF on Tea Prices
    </p>

  </div>
</section>
          <section className="py-12 bg-stone-50">
  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-10">
      <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-2">
        How It Works
      </p>
      <h2 className="font-playfair text-3xl font-bold text-[#152912]">
        From Concept to Shelf
      </h2>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {steps.map((step) => (
        <div key={step.num} className="text-center">

          <div className="w-10 h-10 mx-auto mb-2 bg-[#152912] text-white rounded-full flex items-center justify-center text-sm font-bold">
            {step.num}
          </div>

          <h4 className="text-xs font-bold text-[#152912] mb-1">
            {step.title}
          </h4>

          <p className="text-[11px] text-gray-500 leading-tight">
            {step.desc}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>
      {/* Special Customization */}
      <section className="py-16 bg-[#152912] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">Think Outside the Box</p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">Special Customisation</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              { icon: Package, text: 'Looking for something out of the box?' },
              { icon: Layers, text: 'Exotic Tea Packaging?' },
              { icon: Tag, text: 'Corporate Gifting Solution?' },
              { icon: Lightbulb, text: 'A different idea for tea packaging?' },
            ].map((item, i) => (
              <AnimateIn key={item.text} delay={i * 70}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
                  <item.icon className="w-6 h-6 text-[#c2c89a] mx-auto mb-3" />
                  <p className="text-white/90 text-sm font-medium">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <AnimateIn variant="left" delay={100}>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <Settings className="w-8 h-8 text-[#c2c89a] flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm mb-1">R&D Support</p>
                  <p className="text-white/70 text-xs leading-relaxed">Share your project and we will provide the R&D behind it.</p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn variant="right" delay={100}>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
                <Lightbulb className="w-8 h-8 text-[#c2c89a] flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm mb-1">Idea Execution</p>
                  <p className="text-white/70 text-xs leading-relaxed">We can help in executing the idea from concept to finished product.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={200}>
            <div className="text-center">
              <button
                onClick={() => navigate('contact')}
                className="px-8 py-3 bg-white text-[#152912] font-bold text-sm rounded-full hover:bg-[#c2c89a] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
