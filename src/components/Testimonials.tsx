import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import AnimateIn from './AnimateIn';

const testimonials = [
  {
    id: 1,
    name: 'Mohammed Al Rashid',
    role: 'Private Label Partner',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Building a private label is like crafting a story — each product is a new chapter that strengthens your brand\'s voice. PTDM made that journey seamless with their end-to-end packaging and branding expertise.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed Al Farsi',
    role: 'Tea Distributor, UAE',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'PTDM\'s Karak Tea blends are outstanding. The Assam and Darjeeling quality is consistent every batch. Their production capacity of 5,000 kg per day means I never face supply shortages. Highly recommend.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rajesh Porwal',
    role: 'Wholesaler & Brand Owner',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Since 1980, the Porwal Tea family has delivered nothing but excellence. Their private label service allowed us to launch our own brand within weeks. The custom packaging and 25+ blend options give us a real market edge.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fatima Al Ali',
    role: 'Procurement Manager, Five-Star Hotel',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'We have been working with PTDM to supply tea for our hotels for years. The quality never wavers, and delivery is always on time. Our guests consistently praise the tea flavor every single time.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Abdullah Al Mansoori',
    role: 'Cafe Chain Owner',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'PTDM\'s Karak Tea is the secret behind our cafe\'s success. Customers come back daily for that authentic taste. Consistency in quality is a rare trait we don\'t find with any other supplier.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Noura Bint Salem',
    role: 'Entrepreneur, Tea Brand',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'I launched my own tea brand with PTDM\'s support in less than a month. Their team was incredibly cooperative in designing the packaging and selecting the right blend for my target market.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Khalid Bin Hamdan',
    role: 'Importer & Exporter, Dubai',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'I have dealt with many tea suppliers, but PTDM stands out for its professionalism and commitment to quality. Their export documentation is complete and easy to work with.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Mariam Al Zahrani',
    role: 'Marketing Manager, Food Company',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'PTDM\'s Premix Tea has become one of our best-selling products. The diverse flavors and professional packaging made our product stand out prominently on store shelves.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Saeed Al Kaabi',
    role: 'Purchasing Officer, Restaurant Chain',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Working with PTDM saved us a lot of time and effort. Instead of dealing with multiple suppliers, we get all our tea and coffee needs from one trusted source.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Aisha Al Qasimi',
    role: 'Luxury Retail Store Owner',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'PTDM\'s Green Tea and Samovar Tea perfectly suit the taste of our upscale store\'s clientele. The elegant packaging and premium quality perfectly reflect our brand identity.',
    rating: 5,
  },
];

const VISIBLE = 3;
const INTERVAL_MS = 3000;

export default function Testimonials() {
  const [offset, setOffset] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setOffset((o) => (o + 1) % total);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const getVisible = () => {
    return [0, 1, 2].map((i) => testimonials[(offset + i) % total]);
  };

  return (
    <section className="py-16 lg:py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-xs font-semibold text-[#5D3033] uppercase tracking-widest text-center mb-2">Partner testimonials</p>
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-green-900 text-center mb-12">
            What partners <span className="text-[#152912]">say</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisible().map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${offset}-${idx}`}
              className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 relative flex flex-col"
              style={{
                animation: 'fadeSlideIn 0.5s ease both',
                animationDelay: `${idx * 80}ms`,
              }}
            >
              <div className="absolute top-6 right-6 text-green-100">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-100 flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-green-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 italic">{testimonial.role}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm italic relative z-10 flex-1">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === offset ? 'bg-green-800 w-6' : 'bg-gray-300 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
