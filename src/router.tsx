import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'products'
  | 'exports'
  | 'contact'
  | 'blog'
  | 'product-karak-tea'
  | 'product-samovar-tea'
  | 'product-premix-tea'
  | 'product-green-tea'
  | 'product-black-tea'
  | 'product-coffee'
  | 'blog-white-label-tea-manufacturer-india'
  | 'blog-private-label-tea-business'
  | 'blog-tea-packaging-ideas'
  | 'blog-start-tea-business-india'
  | 'blog-private-label-tea-benefits'
  | 'blog-bulk-tea-supply-chain'
  | 'blog-best-karak-tea-dubai'
  | 'blog-tea-manufacturing-process-uae'
  | 'blog-wholesale-tea-supplier-dubai'
  | 'blog-custom-tea-packaging-dubai';

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/products': 'products',
  '/exports': 'exports',
  '/contact': 'contact',
  '/blog': 'blog',
  '/products/karak-tea': 'product-karak-tea',
  '/products/samovar-tea': 'product-samovar-tea',
  '/products/premix-tea': 'product-premix-tea',
  '/products/green-tea': 'product-green-tea',
  '/products/black-tea': 'product-black-tea',
  '/products/coffee': 'product-coffee',
  '/blog/white-label-tea-manufacturer-india': 'blog-white-label-tea-manufacturer-india',
  '/blog/private-label-tea-business': 'blog-private-label-tea-business',
  '/blog/tea-packaging-ideas': 'blog-tea-packaging-ideas',
  '/blog/start-tea-business-india': 'blog-start-tea-business-india',
  '/blog/private-label-tea-benefits': 'blog-private-label-tea-benefits',
  '/blog/bulk-tea-supply-chain': 'blog-bulk-tea-supply-chain',
  '/blog/best-karak-tea-dubai': 'blog-best-karak-tea-dubai',
  '/blog/tea-manufacturing-process-uae': 'blog-tea-manufacturing-process-uae',
  '/blog/wholesale-tea-supplier-dubai': 'blog-wholesale-tea-supplier-dubai',
  '/blog/custom-tea-packaging-dubai': 'blog-custom-tea-packaging-dubai',
};

const pageToPath: Record<Page, string> = {
  home: '/',
  about: '/about',
  services: '/services',
  products: '/products',
  exports: '/exports',
  contact: '/contact',
  blog: '/blog',
  'product-karak-tea': '/products/karak-tea',
  'product-samovar-tea': '/products/samovar-tea',
  'product-premix-tea': '/products/premix-tea',
  'product-green-tea': '/products/green-tea',
  'product-black-tea': '/products/black-tea',
  'product-coffee': '/products/coffee',
  'blog-white-label-tea-manufacturer-india': '/blog/white-label-tea-manufacturer-india',
  'blog-private-label-tea-business': '/blog/private-label-tea-business',
  'blog-tea-packaging-ideas': '/blog/tea-packaging-ideas',
  'blog-start-tea-business-india': '/blog/start-tea-business-india',
  'blog-private-label-tea-benefits': '/blog/private-label-tea-benefits',
  'blog-bulk-tea-supply-chain': '/blog/bulk-tea-supply-chain',
  'blog-best-karak-tea-dubai': '/blog/best-karak-tea-dubai',
  'blog-tea-manufacturing-process-uae': '/blog/tea-manufacturing-process-uae',
  'blog-wholesale-tea-supplier-dubai': '/blog/wholesale-tea-supplier-dubai',
  'blog-custom-tea-packaging-dubai': '/blog/custom-tea-packaging-dubai',
};

function getPageFromPath(): Page {
  const path = window.location.pathname;
  return pathToPage[path] ?? 'home';
}

interface RouterContextType {
  page: Page;
  navigate: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType>({
  page: 'home',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>(getPageFromPath);

  useEffect(() => {
    const onPopState = () => {
      setPage(getPageFromPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (p: Page) => {
    const path = pageToPath[p];
    window.history.pushState({}, '', path);
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
