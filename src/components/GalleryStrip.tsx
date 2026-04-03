import AnimateIn from './AnimateIn';

const galleryImages = [
  'https://www.shutterstock.com/image-photo/heap-dried-tea-fresh-green-600nw-2291950731.jpg',
  'https://media.istockphoto.com/id/1177633539/photo/green-tea-leaves-young-shoots-that-are-beautiful.jpg?s=612x612&w=0&k=20&c=e8l8BvS-szb_bIXocv6ZKq2E9X2TUABZbgNLfr4Pu18=',
  'https://cdn.britannica.com/89/102489-050-FD2DE9F4/Women-tea-leaves-hand-plantation-India-Kaziranga.jpg',
  'https://media.istockphoto.com/id/1264096949/photo/lush-tea-leaves-in-the-human-hands.jpg?s=612x612&w=0&k=20&c=zCZ-Gh7hM3rJ0vdhmPVB1xgMEP3HFPUGtX_EP2dwjE8=',
  'https://images.immediate.co.uk/production/volatile/sites/30/2023/08/tea-plantation-2e4af22.jpg?quality=90&fit=700,466',
  'https://domf5oio6qrcr.cloudfront.net/medialibrary/8468/conversions/Tea-thumb.jpg',
];

const marqueeText = [
  'Indulge in pure goodness',
  'Enjoy everything with tea',
  'Feel Morning wonders',
  'Quality with every sip',
  'Nature in every cup',
  'Pure Organic Bliss',
];

export default function GalleryStrip() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-3 md:grid-cols-6 h-48 lg:h-64 overflow-hidden">
        {galleryImages.map((src, i) => (
          <AnimateIn key={i} variant="scale" delay={i * 80} className="relative overflow-hidden group h-full">
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/0 transition-all duration-300" />
          </AnimateIn>
        ))}
      </div>

      <div className="bg-[#5D3033] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mr-8 text-lg font-semibold text-white uppercase tracking-wider"
            >
              <span className="text-white">✦</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
