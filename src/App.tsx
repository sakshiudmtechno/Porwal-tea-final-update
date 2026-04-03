import { RouterProvider, useRouter } from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import About from './components/About';
import ComparisonTable from './components/ComparisonTable';
import GalleryStrip from './components/GalleryStrip';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Clients from './components/Clients';
import WhatsAppButton from './components/WhatsAppButton';

import ContactSection from './components/ContactSection';

import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ExportsPage from './pages/ExportsPage';
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ContactPage from './pages/ContactPage';

import KarakTeaPage from './pages/products/KarakTeaPage';
import SamovarTeaPage from './pages/products/SamovarTeaPage';
import PremixTeaPage from './pages/products/PremixTeaPage';
import GreenTeaPage from './pages/products/GreenTeaPage';
import BlackTeaPage from './pages/products/BlackTeaPage';
import CoffeePage from './pages/products/CoffeePage';



function AppContent() {
  const { page } = useRouter();

  return (
    <div className="min-h-screen">
      <Navbar />
      {page === 'home' && (
        <>
          <Hero />
          <About />
          <ComparisonTable />
          <GalleryStrip />
          <Products />
          <Testimonials />
          <Newsletter />
          <Clients />
     <WhatsAppButton/>
    
          <ContactSection />
        </>
      )}
      {page === 'about' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <AboutPage />
        </div>
      )}
      {page === 'services' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <ServicesPage />
        </div>
      )}
      {page === 'products' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <ProductsPage />
        </div>
      )}
      {page === 'exports' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <ExportsPage />
        </div>
      )}
      {page === 'blog' && (
  <div className="pt-16 sm:pt-20 md:pt-24">
    <BlogPage />
  </div>
)}
{page?.startsWith('blog-') && (
  <div className="pt-16 sm:pt-20 md:pt-24">
    <BlogDetail />
  </div>
)}
      {page === 'contact' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <ContactPage />
        </div>
      )}
      {page === 'product-karak-tea' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <KarakTeaPage />
        </div>
      )}
      {page === 'product-samovar-tea' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <SamovarTeaPage />
        </div>
      )}
      {page === 'product-premix-tea' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <PremixTeaPage />
        </div>
      )}
      {page === 'product-green-tea' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <GreenTeaPage />
        </div>
      )}
      {page === 'product-black-tea' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <BlackTeaPage />
        </div>
      )}
      {page === 'product-coffee' && (
        <div className="pt-16 sm:pt-20 md:pt-24">
          <CoffeePage />
        </div>
      )}
   
    
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
