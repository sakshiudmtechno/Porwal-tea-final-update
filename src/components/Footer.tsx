import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import AnimateIn from './AnimateIn';
import { useRouter, Page } from '../router';

const servicesLinks: { label: string; page: Page }[] = [
  { label: 'Custom Tea Packaging', page: 'services' },
  { label: 'Tea Blending', page: 'services' },
  { label: 'Private Label Manufacturing', page: 'services' },
  { label: 'Export Logistics', page: 'exports' },
  { label: 'Storage & Warehousing', page: 'services' },
];

const productsLinks: { label: string; page: Page }[] = [
  { label: 'Karak Tea', page: 'product-karak-tea' },
  { label: 'Samovar Tea', page: 'product-samovar-tea' },
  { label: 'Green Tea', page: 'product-green-tea' },
  { label: 'Premix Tea', page: 'product-premix-tea' },
  { label: 'Coffee Products', page: 'product-coffee' },
];

const quickLinks: { label: string; page: Page }[] = [
  { label: 'Get a Quote', page: 'contact' },
  { label: 'Our Products', page: 'products' },
  { label: 'Exports', page: 'exports' },
  { label: 'About Us', page: 'about' },
  { label: 'Contact Us', page: 'contact' },
];

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#152912] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <AnimateIn>
            <div>
              <img
                src="/porwal logo.png"
                alt="Porwal Tea & Deri Max Beverages"
                className="h-14 mb-4 brightness-0 invert"
              />
              <p className="text-xs text-white/70 mb-4 max-w-xs">
                Est. 1980 — Complete private label tea manufacturing and packaging solutions.
              </p>
              <p className="text-xs text-white/70 mb-4">
                www.porwalderimax.com
              </p>

              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:scale-110 hover:bg-white/20 transition"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* SERVICES */}
          <AnimateIn delay={100}>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide mb-4">Services</h4>
              <ul className="space-y-2">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.page)}
                      className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* PRODUCTS */}
          <AnimateIn delay={200}>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide mb-4">Products</h4>
              <ul className="space-y-2">
                {productsLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.page)}
                      className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* CONTACT + MAP */}
          <AnimateIn delay={300}>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wide mb-4">Get in Touch</h4>

              {/* CONTACT INFO */}
              <div className="space-y-3 text-sm text-white/70 mb-5">

                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  +971 XXXXXXXX
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  info@porwalderimax.com
                </div>

                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1" />
                  <a
                    href="https://maps.google.com/?q=Sadaf Al Bahar Technical Services LLC Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    94 25C St - Ras Al Khor Industrial Area,<br />
                    Ras Al Khor Industrial Area 2 - Dubai
                  </a>
                </div>

              </div>

              {/* FIXED GOOGLE MAP */}
              <div className="w-full h-[220px] rounded-xl overflow-hidden shadow-lg border border-white/10">
                <iframe
                  src="https://maps.google.com/maps?q=Sadaf%20Al%20Bahar%20Technical%20Services%20LLC%20Dubai&z=17&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </AnimateIn>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-green-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/60">
          <p>
            © 2026 Porwal Tea & Deri Max Beverages. All rights reserved. Est. 1980 — UAE.
          </p>

          <a href="https://udmtechno.com" target="_blank" rel="noopener noreferrer">
            <p className="hover:underline">
              Made with ❤️ by UDM Techno
            </p>
          </a>
        </div>

      </div>
    </footer>
  );
}