import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter, Page } from '../router';

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Private Label Services', page: 'services' },
  { label: 'Products', page: 'products' },
  { label: 'Exports', page: 'exports' },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { page, navigate } = useRouter();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (p: Page) => {
    navigate(p);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-8 lg:px-20">
      <nav className="bg-white/95 backdrop-blur-sm rounded-xl w-full max-w-[1400px] h-12 sm:h-14 md:h-20 flex items-center justify-between px-3 sm:px-5 md:px-8 shadow-sm border border-white/20">
        <div className="flex items-center cursor-pointer flex-shrink-0" onClick={() => handleNav('home')}>
          <img
            src="/porwal logo.png"
            alt="Porwal Tea & Deri Max Beverages"
            className="h-7 sm:h-9 md:h-20 w-auto object-contain -ml-2 sm:-ml-3"
          />
        </div>

        <ul className="hidden xl:flex items-center gap-4 text-md font-bold uppercase text-gray-700">
          {navLinks.map((link, i) => (
            <li key={link.page} className="flex items-center gap-3 uppercase">
              {i > 0 && <span className="text-gray-400 select-none">/</span>}
              <button
                onClick={() => handleNav(link.page)}
                className={`transition-colors text-sm font-bold tracking-wide ${page === link.page
                    ? 'text-[#428031] uppercase'
                    : 'text-gray-600 hover:text-[#1a1a1a] uppercase'
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav('contact')}
            className="h-8 sm:h-9 md:h-10 bg-[#152912] rounded-full flex items-center justify-center text-white hover:bg-[#326325] transition-colors px-3 sm:px-5 text-xs font-semibold whitespace-nowrap"
          >
            Get A Quote
          </button>

          <button
            className="xl:hidden text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="xl:hidden absolute top-full mt-2 left-3 right-3 sm:left-4 sm:right-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`flex w-full text-left text-sm font-semibold py-3 px-3 rounded-xl transition-colors ${page === link.page
                    ? 'text-[#428031] bg-green-50'
                    : 'text-gray-700 hover:text-[#1a1a1a] hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button
              onClick={() => handleNav('contact')}
              className="w-full bg-[#152912] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#326325] transition-colors"
            >
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
