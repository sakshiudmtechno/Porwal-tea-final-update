import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimateIn from './AnimateIn';
import { useRouter, Page } from '../router';

const products = [
  {
    id: 1,
    name: 'Karak Tea',
    price: 'On Request',
    badge: 'Bestseller',
    description: 'Blend of pure Assam & Darjeeling BP, BOPSM & BOP. Available in Karak Arabia, Karak Dune & Karak Souk.',
    image: 'karak.png',
    page: 'product-karak-tea' as Page,
  },
  {
    id: 2,
    name: 'Samovar Tea',
    price: 'On Request',
    badge: null,
    description: 'Blend of Assam & Darjeeling PD & Dust. Available in Samovar Al Shai, Samovar Aseel & Samovar Safa.',
    image: 'samovar .png',

    page: 'product-samovar-tea' as Page,
  },
  {
    id: 3,
    name: 'Premix Tea',
    price: 'On Request',
    badge: '3-in-1',
    description: 'Ready-to-brew 3-in-1 premix with milk, tea & sugar. Flavors: Masala, Saffron, Coconut, Ginger, Cardamom, Chocolate, Lemongrass.',
    image: 'premix .png',
    page: 'product-premix-tea' as Page,
  },
  {
    id: 4,
    name: 'Green Tea',
    price: 'On Request',
    badge: null,
    description: 'Premium green tea known for health benefits and refreshing taste. Available as Green Leaf Shai & Green Leaf Hadeel.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAsi0RSj-YNmuTIEHCfXmrGkg406kSv-uiRw&s',
    page: 'product-green-tea' as Page,
  },
  {
    id: 5,
    name: 'Black Tea',
    price: 'On Request',
    badge: null,
    description: 'Premium black tea known for its strong aroma and rich flavor. Perfect for daily consumption and widely used for making classic milk tea and masala chai.',
    image: 'https://img.freepik.com/premium-photo/cup-black-tea-dry-black-tea-leaves-wooden-table_172235-39.jpg',
    page: 'product-black-tea' as Page,
  },
  {
    id: 6,
    name: 'Coffee',
    price: 'On Request',
    badge: null,
    description: 'High-quality coffee with a bold aroma and smooth taste. Ideal for energizing mornings and refreshing breaks, available in multiple blends for coffee lovers.',
    image: 'https://media.istockphoto.com/id/1403325012/photo/coffee-fruit-on-the-plant.jpg?s=612x612&w=0&k=20&c=hiCO4aok9l_YcC0e2uaVbn4pfRsHs3CA0WkuJz2mYzw=',
    page: 'product-coffee' as Page,
  },
];

const tabs = ['All', 'Karak Tea', 'Samovar', 'Premix', 'Green Tea'];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const { navigate } = useRouter();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold text-[#152912] uppercase tracking-widest mb-2">PTDM Tea Collection</p>
              <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-[#152912]">
                Our tea <span className="text-[#5d3033]">varieties</span>
              </h2>
            </div>
            <button onClick={() => navigate('products')} className="hidden md:flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-900 transition-colors">
              View all products <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>

        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <AnimateIn key={product.id} delay={i * 100}>
              <div className="product-card group cursor-pointer hover-lift ]" onClick={() => navigate(product.page)}>
                <div className="relative overflow-hidden rounded-2xl bg-stone-50 mb-4 aspect-square ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-all duration-300" />
                  <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs font-semibold px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap shadow-lg">
                   View More
                  </button>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-green-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">{product.description}</p>
                  <p className="text-sm font-bold text-green-800">{product.price}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  dot === 0 ? 'bg-green-800 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
