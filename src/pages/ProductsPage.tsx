import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import { useRouter } from '../router';

const categories = ['All', 'Karak Tea', 'Samovar Tea', 'Black Tea', 'Green Tea', 'Premix Tea', 'Coffee'];

const products = [
  {
    id: 1,
    category: 'Karak Tea',
    name: 'Karak Arabia',
    blend: 'Pure Assam & Darjeeling BP, BOPSM & BOP',
    price: 'AED 10.87 per kg',
    badge: 'Bestseller',
    desc: 'Rich, full-bodied karak tea blend crafted for the classic Arabian palate. Perfect for milk tea preparation.',
    image: 'karak.png',
  },
  {
    id: 2,
    category: 'Karak Tea',
    name: 'Karak Dune',
    blend: 'Pure Assam & Darjeeling BP, BOPSM & BOP',
    price: 'AED 11.95 per kg',
    badge: null,
    desc: 'Smooth and aromatic karak blend with balanced strength — ideal for everyday brewing.',
    image: 'karak dune.jpeg',
  },
  {
    id: 3,
    category: 'Karak Tea',
    name: 'Karak Souk',
    blend: 'Pure Assam & Darjeeling BP, BOPSM & BOP',
    price: 'AED 14.26 per kg',
    badge: 'Premium',
    desc: 'Market-inspired karak blend delivering an authentic street-tea experience — bold and aromatic.',
    image: 'karak souk.jpeg',
  },
  {
    id: 4,
    category: 'Samovar Tea',
    name: 'Samovar Al Shai',
    blend: 'Pure Assam & Darjeeling PD & Dust',
    price: 'AED 10.87 per kg',
    badge: null,
    desc: 'Delicate samovar-style tea with a light yet flavorful profile — perfect served plain or with mint.',
    image: 'samovar .png',
  },
  {
    id: 5,
    category: 'Samovar Tea',
    name: 'Samovar Aseel',
    blend: 'Pure Assam & Darjeeling PD & Dust',
    price: 'AED 11.95 per kg',
    badge: null,
    desc: 'Rich samovar blend with deep earthy notes, crafted for traditional tea lovers.',
    image: 'samovar aseel.jpeg',
  },
  {
    id: 6,
    category: 'Samovar Tea',
    name: 'Samovar Safa',
    blend: 'Pure Assam & Darjeeling PD & Dust',
    price: 'AED 14.26 per kg',
    badge: 'Premium',
    desc: 'Pure and clean samovar blend delivering a refreshing, smooth cup every time.',
    image: 'samovar safa2.png',
  },
  {
    id: 7,
    category: 'Black Tea',
    name: 'Leaf Rimal',
    blend: 'Premium Black Tea Leaves',
    price: 'On Request',
    badge: null,
    desc: 'Premium black tea with a bold, satisfying flavour — crafted for everyday enjoyment.',
    image: 'black tea.jpeg',
  },
  {
    id: 8,
    category: 'Black Tea',
    name: 'Leaf Nakheel',
    blend: 'Premium Black Tea Leaves',
    price: 'On Request',
    badge: null,
    desc: 'Smooth and full-flavoured black tea blend suitable for everyday consumption.',
    image: 'https://img.freepik.com/premium-photo/cup-black-tea-dry-black-tea-leaves-wooden-table_172235-39.jpg',
  },
  {
    id: 9,
    category: 'Green Tea',
    name: 'Green Leaf Shai',
    blend: 'Premium Green Tea Leaves',
    price: 'On Request',
    badge: 'Healthy',
    desc: 'Light and refreshing green tea packed with antioxidants, ideal for health-conscious consumers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsi0RSj-YNmuTIEHCfXmrGkg406kSv-uiRw&s',
  },
  {
    id: 10,
    category: 'Green Tea',
    name: 'Green Leaf Hadeel',
    blend: 'Premium Green Tea Leaves',
    price: 'On Request',
    badge: null,
    desc: 'Elegant green tea known for health benefits and refreshing taste — a premium everyday beverage.',
    image: 'green tea.jpeg',
  },
];

const premixFlavors = [
  {
    name: 'Masala Tea',
    image: 'Masala Tea.jpeg',
    points: ['Rich Indian spices', 'Bold and aromatic', 'Perfect for an energizing break'],
  },
  {
    name: 'Coconut Tea',
    image: 'Coconut Tea.jpeg',
    points: ['Creamy tropical flavor', 'Smooth and mildly sweet', 'Refreshing island-inspired taste'],
  },
  {
    name: 'Cardamom Tea',
    image: 'CardamomTea.jpeg',
    points: ['Fragrant and soothing', 'Subtle sweetness', 'Ideal for relaxation'],
  },
  {
    name: 'Lemongrass Tea',
    image: 'LemongrassTea.jpeg',
    points: ['Citrusy and fresh', 'Uplifting aroma', 'Calms and refreshes the senses'],
  },
  {
    name: 'Saffron Tea',
    image: 'Saffron Tea.jpeg',
    points: ['Luxurious flavor', 'Golden color and aroma', 'Symbol of richness and wellness'],
  },
  {
    name: 'Ginger Tea',
    image: 'Ginger Tea.jpeg',
    points: ['Spicy and warming', 'Aids digestion', 'Great for cold or rainy days'],
  },
  {
    name: 'Chocolate Tea',
    image: 'Chocolate Tea.jpeg',
    points: ['Decadent cocoa blend', 'Comforting and indulgent', 'Perfect dessert-time tea'],
  },
];

const coffeeOptions = [
  {
    title: '100% Agglomerated Coffee',
    subtitle: "India's finest coffee estate — Chikmagalur",
    desc: 'Pure soluble coffee with no chicory. Rich, bold flavour from India\'s finest Chikmagalur Estate.',

    image: 'Coffee2.jpeg',
  },
  {
    title: '80% Coffee + 20% Chicory',
    subtitle: 'Rich coffee blended with chicory for a smooth, earthy kick',
    desc: 'A balanced blend of agglomerated coffee and chicory delivering a smooth, earthy taste.',

    image: 'coffee1.jpeg',
  },
  {
    title: '60% Coffee + 40% Chicory',
    subtitle: 'Bold coffee infused with chicory for a deep, aromatic taste',
    desc: 'Strong aromatic blend — bold coffee infused with chicory for a deep, full-bodied experience.',

    image: 'coffee3.jpeg',
  },
  {
    title: 'Premix Coffee',
    subtitle: '3-in-1 instant coffee with milk and sugar',
    desc: 'Ready-to-brew 3-in-1 premix coffee sachet — just add hot water for a perfect cup.',

    image: 'Premix Coffee.jpeg',
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { navigate } = useRouter();

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[45vh] sm:h-[55vh] min-h-[320px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="PTDM Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#152912]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <AnimateIn>
            <p className="text-xs font-semibold text-[#c2c89a] uppercase tracking-widest mb-3">PTDM Tea Collection</p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">Our Products</h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Karak, Samovar, Black Tea, Green Tea, Premix flavours, and premium Coffee — all available for private label.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Tea Types Overview */}
      <section className="py-10 bg-[#152912]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
            {[
              { label: 'Karak', sub: 'Arabia · Dune · Souk' },
              { label: 'Samovar', sub: 'Al Shai · Aseel · Safa' },
              { label: 'Black Tea', sub: 'Leaf Rimal · Leaf Nakheel' },
              { label: 'Green Tea', sub: 'Shai · Hadeel' },
              { label: 'Premix Tea', sub: '7 Tea + 1 Coffee' },
              { label: 'Coffee', sub: '100% · 80% · 60%' },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 60}>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="font-bold text-[#c2c89a] text-sm">{item.label}</p>
                  <p className="text-white/60 text-xs mt-1">{item.sub}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter + Products */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${activeCategory === cat
                      ? 'bg-[#152912] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-[#152912]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {filtered.map((product, i) => (
              <AnimateIn key={product.id} delay={i * 60}>
                <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-stone-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-2 left-2 bg-[#152912] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        onClick={() => navigate('contact')}
                        className="w-full bg-white text-[#152912] text-xs font-bold py-1.5 rounded-full"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-[#5d3033] font-semibold mb-0.5">{product.category}</p>
                    <h3 className="font-bold text-[#152912] text-sm mb-1 leading-tight">{product.name}</h3>
                    <p className="text-xs text-gray-400 mb-2 leading-tight line-clamp-2">{product.blend}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Premix Tea Flavors */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">3-in-1 Convenience</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">
                Premix Tea
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
                3-in-1 Milk, Tea or Coffee & Sugar. Ready-to-brew in seconds.
                <br />
                <span className="font-bold text-[#152912]">Premix Tea All Flavour — AED 17.17 per kg</span>
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
            {premixFlavors.map((flavor, i) => (
              <AnimateIn key={flavor.name} delay={i * 60}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-28 overflow-hidden">
                    <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#152912]/50 group-hover:bg-[#152912]/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-end p-3">
                      <p className="font-bold text-white text-xs leading-tight">{flavor.name}</p>
                    </div>
                  </div>
                  <div className="p-3">
                    <ul className="space-y-1">
                      {flavor.points.map(pt => (
                        <li key={pt} className="text-xs text-gray-500 leading-tight flex items-start gap-1">
                          <span className="text-[#5d3033] font-bold flex-shrink-0">·</span>
                          {pt}
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

      {/* Coffee Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">Beyond Tea</p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#152912]">Coffee Products</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
                100% Agglomerated Coffee sourced from <strong className="text-[#152912]">India's finest Chikmagalur Estate</strong> — available in three chicory blends plus premix.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coffeeOptions.map((coffee, i) => (
              <AnimateIn key={coffee.title} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <img src={coffee.image} alt={coffee.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#5d3033]/60 group-hover:bg-[#5d3033]/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div>
                        <p className="font-bold text-white text-sm leading-tight">{coffee.title}</p>
                        <p className="text-white/70 text-xs mt-0.5">{coffee.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">{coffee.desc}</p>
                    <p className="font-bold text-[#5d3033] text-sm">{coffee.price}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#152912]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="font-dancing text-4xl text-[#c2c89a] mb-3">Start Your Brand Today</p>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-4">Ready to launch your private label?</h2>
            <p className="text-white/70 text-sm mb-8">Contact us for a custom quote — we'll find the perfect blend and packaging for your brand.</p>
            <button
              onClick={() => navigate('contact')}
              className="px-10 py-3 bg-white text-[#152912] font-bold text-sm rounded-full hover:bg-[#c2c89a] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              Request a Quote <ChevronRight className="w-4 h-4" />
            </button>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
