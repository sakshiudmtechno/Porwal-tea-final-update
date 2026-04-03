import { Leaf, Award, Users, Warehouse, Globe, TrendingUp, Heart, Shield, ArrowRight, CheckCircle, Mail, Linkedin } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import { useRouter } from '../router';

const stats = [
  { icon: Award, label: '40+ Years', sub: 'Of Excellence' },
  { icon: Leaf, label: '25+ Blends', sub: 'Premium Teas' },
  { icon: Warehouse, label: '5,000 kg', sub: 'Daily Capacity' },
  { icon: Users, label: '20+ Formats', sub: 'Packaging Options' },
];

const benefits = [
  {
    num: '1',
    title: 'Packaging Solutions',
    desc: 'We offer a wide range of 20+ tea packaging formats including Tea Pouches, Tea Boxes, Tea Jars, Tea Dips, Tea Cans, Bulk Tea Packaging.',
  },
  {
    num: '2',
    title: 'Production Capacity',
    desc: 'Our facility can handle up to 5,000 kg of tea processing and packaging per day, ensuring scalability for growing businesses.',
  },
  {
    num: '3',
    title: 'Tea Blends',
    desc: 'Choose from over 25 premium tea blends — each crafted for consistent quality, aroma, and taste, maintained throughout the year (365 days).',
  },
  {
    num: '4',
    title: 'Pan-UAE Delivery',
    desc: "We're connected with all major transport networks, making seamless delivery possible to every corner of UAE.",
  },
  {
    num: '5',
    title: 'Storage Facility',
    desc: 'We provide dedicated storage space for our clients, allowing you to stock your tea inventory without the worry of warehousing.',
  },
  {
    num: '6',
    title: 'Export Ready',
    desc: 'Quick and reliable export logistics to meet global demand efficiently.',
  },
];

const values = [
  { icon: Shield, title: 'Quality First', desc: 'Every blend sourced from premium estates — Assam, Darjeeling, and beyond.' },
  { icon: Heart, title: 'Partner-Centric', desc: 'We grow together. Your brand success is our shared mission.' },
  { icon: TrendingUp, title: 'Scalable Solutions', desc: 'From startup quantities to large-scale export orders — we adapt to your growth.' },
  { icon: Globe, title: 'Global Reach', desc: 'Export-ready logistics supporting brands across the UAE and international markets.' },
];

const trustedBrands = [
  { name: 'LG FMCG Trading', logo: '/lglogo.png' },
  { name: 'Hindustan Foods', logo: '/hindustan.png' },
  { name: 'Maniza', logo: '/maniza.png' },
  { name: 'Tasneem', logo: '/tasneem.png' },
  { name: 'Ramz', logo: '/ramz.png' },
  { name: 'Nirvana Tea', logo: '/nirwana.png' },
];

const teamMembers = [
  {
    name: 'Shreyans Jain',
    role: 'COO',
    image: '/Shreyans Jain (2).jpeg',
    bio: 'With over a decade of experience in operations and supply chain management, Shreyans leads our day-to-day operations with a focus on efficiency, quality, and customer satisfaction. His strategic vision has been instrumental in scaling our production capacity while maintaining the highest standards of tea quality.',
    specialties: ['Operations Management', 'Supply Chain Optimization', 'Quality Assurance'],
  },
  {
    name: 'Yogita Yadav',
    role: 'Business Development Professional',
    image: '/Yogita Yadav1.jpeg',
    bio: 'Yogita brings exceptional expertise in building strategic partnerships and driving business growth. Her deep understanding of market dynamics and client needs has helped numerous brands successfully launch and scale their private label tea ventures in the UAE and beyond.',
    specialties: ['Business Strategy', 'Client Relations', 'Market Expansion'],
  },
];

export default function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[50vh] min-h-[300px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="About PTDM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#152912]/78" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#c2c89a] text-xs font-semibold uppercase tracking-widest">Since 1980</span>
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Growing Together<br className="hidden sm:block" /> in Tea
            </h1>
            <p className="text-white text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Porwal Tea & Deri Max Beverages provides end-to-end tea packaging solutions, ensuring a smooth and hassle-free experience for our buyers.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#152912]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 80}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-[#c2c89a]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">{stat.label}</p>
                    <p className="text-white/60 text-xs">{stat.sub}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction — Private Label */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn variant="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#5d3033]/10 rounded-2xl" />
                <div className="relative z-10 bg-stone-50 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Your Brand Tea"
                    className="w-full h-52 sm:h-72 object-cover"
                  />
                  <div className="p-6 text-center bg-[#152912]">
                    <p className="font-dancing text-3xl text-[#c2c89a]">Your brand.</p>
                    <p className="font-dancing text-3xl text-white">Your tea.</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn variant="right">
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Introduction</p>
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912] leading-tight mb-4">
                  Private Label in Tea<br />with PTDM
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Porwal Tea & Deri Max Beverages provides end-to-end tea packaging solutions, ensuring a smooth and hassle-free experience for our buyers.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Guided by our philosophy of <span className="font-semibold text-[#152912]">"Growing Together in Tea,"</span> we are committed to supporting tea sellers, wholesalers, and entrepreneurs by simplifying their operations.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  When you partner with us, you can focus on building your brand, expanding your reach, and boosting your sales — while we expertly manage the backend processes including packaging, labeling, and supply. From helping you choose the perfect packaging style to ensuring prompt and reliable delivery, we handle it all so you can grow your tea business with confidence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => navigate('services')} className="px-6 py-3 bg-[#152912] text-white text-sm font-semibold rounded-full hover:bg-[#5d3033] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Our Services <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={() => navigate('contact')} className="px-6 py-3 border border-[#152912] text-[#152912] text-sm font-semibold rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300">
                    Get in Touch
                  </button>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What is Private Label Tea */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn variant="left">
              <div>
                <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Custom Packaging</p>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912] mb-4">
                  What is Private Label or White Label Tea?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We understand the importance of your brand's value, and that's why we offer fully customized tea packaging tailored to your unique requirements.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Private label (or white label) tea refers to an arrangement where a supplier manufactures and packages tea under the buyer's brand name at the supplier's facility. The buyer then markets and distributes the product as their own.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  This business model is a proven strategy that helps reduce both production and supply chain costs while allowing you to focus on building your brand and market presence.
                </p>
                <ul className="space-y-2">
                  {['No manufacturing setup required', 'Lower production cost', 'Faster market entry', 'Focus on branding & marketing', 'Scalable business model'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn variant="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96">
                <img
                  src="https://media.istockphoto.com/id/520621350/photo/sunny-early-on-tea-plantation.jpg?s=612x612&w=0&k=20&c=KPPFGt8KmcUVpnoAXdgZbfXgqR2EebZy7TR9PieBzQU="
                  alt="Custom packaging"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#152912]/30" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#152912] to-transparent">
                  <p className="text-white font-semibold text-sm">Fully customised packaging</p>
                  <p className="text-white/70 text-xs">Tailored to your brand identity</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 6 Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Why Choose PTDM</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912] leading-tight">
                Benefits of Doing Private Label Tea<br className="hidden sm:block" />
                <span className="text-[#5d3033]"> with Porwal Tea & Deri Max</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <AnimateIn key={b.num} delay={i * 80}>
                <div className="group flex gap-4 p-6 bg-stone-50 rounded-2xl hover:bg-[#152912] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#152912] group-hover:bg-white/10 rounded-full flex items-center justify-center font-bold text-white text-base transition-colors duration-300">
                    {b.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#152912] group-hover:text-[#c2c89a] text-sm mb-1.5 uppercase tracking-wide transition-colors duration-300">{b.title}</h3>
                    <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">{b.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">What Drives Us</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">Our Core Values</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 90}>
                <div className="group p-6 bg-white rounded-2xl hover:bg-[#152912] transition-all duration-300 cursor-default shadow-sm">
                  <div className="w-12 h-12 bg-green-100 group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                    <v.icon className="w-6 h-6 text-[#152912] group-hover:text-[#c2c89a] transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#152912] group-hover:text-white text-base mb-2 transition-colors duration-300">{v.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 lg:py-20 bg-[#152912] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="font-playfair text-xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              "Building a private label is like crafting a story — each product is a new chapter that strengthens your brand's voice"
            </p>
            <p className="text-[#c2c89a] text-base font-semibold">— Sarah Williams</p>
          </AnimateIn>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Trusted By</p>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912]">Brands We've Built</h2>
              <p className="text-gray-800 text-sm mt-2">Let's make your brand — and add it to this list.</p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-6 items-center">
            {trustedBrands.map((brand, i) => (
              <AnimateIn key={brand.name} delay={i * 60}>
                <div className="group flex items-center justify-center p-3 bg-white rounded-xl border border-gray-100 hover:border-[#152912]/20 hover:shadow-md transition-all duration-300">
                  <img src={brand.logo} alt={brand.name} className="h-10 sm:h-16 w-auto object-contain transition-all duration-300" />
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <p className="text-center text-xs text-gray-400 mt-6">and many more...</p>
          </AnimateIn>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Leadership</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">Meet Our Team</h2>
              <p className="text-gray-600 text-sm mt-3 max-w-2xl mx-auto">
                Passionate professionals dedicated to your success. Our experienced team brings expertise,
                innovation, and a personal touch to every partnership.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 120} variant={i === 0 ? 'left' : 'right'}>
                <div className="group bg-stone-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#152912] via-[#152912]/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#c2c89a] text-sm font-semibold uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="space-y-2 mb-5">
                      <p className="text-xs font-semibold text-[#152912] uppercase tracking-wider mb-2">
                        Key Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-3 py-1.5 bg-green-100 text-[#152912] text-xs font-medium rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <button className="flex items-center gap-2 text-[#152912] hover:text-[#5d3033] text-xs font-semibold transition-colors duration-300">
                        <Mail className="w-4 h-4" />
                        Contact
                      </button>
                      <button className="flex items-center gap-2 text-[#152912] hover:text-[#5d3033] text-xs font-semibold transition-colors duration-300">
                        <Linkedin className="w-4 h-4" />
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#152912] mb-4">Ready to Start Your Tea Brand?</h2>
            <p className="text-gray-500 text-sm mb-8">PTDM provides everything you need — sourcing, blending, packaging, labeling, storage, and logistics.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => navigate('services')} className="px-8 py-3 bg-[#152912] text-white font-semibold text-sm rounded-full hover:bg-[#5d3033] hover:scale-105 transition-all duration-300">
                Explore Services
              </button>
              <button onClick={() => navigate('contact')} className="px-8 py-3 border border-[#152912] text-[#152912] font-semibold text-sm rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
