export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export const seoConfig: Record<string, SEOData> = {
  home: {
    title: "Private Label Tea Manufacturer in Dubai UAE | Porwal Tea & Deri Max",
    description: "Leading private label tea manufacturer in Dubai, UAE since 1980. Custom tea packaging, 25+ premium blends, 5,000 kg daily capacity. Karak, Samovar, Green Tea & Coffee. Get a quote today!",
    keywords: "private label tea manufacturer Dubai, white label tea UAE, custom tea packaging Dubai, tea supplier UAE, bulk tea wholesale, karak tea manufacturer, tea blending services Dubai",
  },
  about: {
    title: "About PTDM | Trusted Tea Manufacturer in Dubai Since 1980",
    description: "Porwal Tea & Deri Max Beverages: 40+ years of tea manufacturing excellence in Dubai. Complete private label solutions, 5,000 kg daily production, trusted by leading UAE brands.",
    keywords: "tea manufacturer Dubai, private label tea company UAE, tea blending company, wholesale tea supplier Dubai, tea packaging services",
  },
  services: {
    title: "Private Label Tea Services Dubai | Custom Packaging & Blending",
    description: "Complete private label tea services in Dubai: custom packaging, tea blending, labeling, storage & export logistics. 20+ packaging formats, MOQ from 240 units. Request a quote!",
    keywords: "custom tea packaging Dubai, tea blending services UAE, private label packaging, tea manufacturing services, white label tea production",
  },
  products: {
    title: "Premium Tea Products Dubai | Karak, Samovar, Green Tea & Coffee",
    description: "Explore 25+ premium tea blends: Karak Tea, Samovar Tea, Black Tea, Green Tea, Premix Tea & Coffee. Wholesale prices from AED 10.87/kg. Private label available in Dubai UAE.",
    keywords: "karak tea wholesale Dubai, samovar tea UAE, green tea supplier Dubai, premix tea manufacturer, coffee products wholesale UAE",
  },
  exports: {
    title: "Tea Export Services UAE | Pan-UAE & International Shipping",
    description: "Export-ready tea logistics from UAE: complete documentation, bulk packaging, international shipping to GCC & worldwide. Storage facility available. Request export quote!",
    keywords: "tea export UAE, bulk tea shipping Dubai, tea wholesale export, international tea supplier UAE, tea logistics services",
  },
  contact: {
    title: "Contact Porwal Tea Dubai | Get Private Label Tea Quote",
    description: "Contact PTDM for private label tea solutions in Dubai. Free consultation, sample testing available. Call +971 or email info@porwalderimax.com. Response within 24 hours!",
    keywords: "contact tea manufacturer Dubai, tea supplier enquiry UAE, private label tea quote, custom tea packaging quote Dubai",
  },
  blog: {
    title: "Tea Business Insights | Private Label Tea Blog | PTDM Dubai",
    description: "Expert guides on starting a tea brand, private label manufacturing, tea packaging ideas & supply chain. Learn from 40+ years of industry experience in Dubai UAE.",
    keywords: "tea business blog, private label tea guide, how to start tea business, tea industry insights, tea packaging ideas",
  },
  "product-karak-tea": {
    title: "Karak Tea Manufacturer Dubai | Premium Arabian Tea Blends",
    description: "Authentic Karak Tea blends: Arabia, Dune & Souk varieties. Premium Assam & Darjeeling sourcing, from AED 10.87/kg. Private label packaging available in Dubai UAE.",
    keywords: "karak tea Dubai, Arabian tea blend, karak chai manufacturer UAE, wholesale karak tea, private label karak tea",
  },
  "product-samovar-tea": {
    title: "Samovar Tea Supplier Dubai | Traditional Tea Blends UAE",
    description: "Premium Samovar Tea: Al Shai, Aseel & Safa blends. Pure Assam & Darjeeling dust, from AED 10.87/kg. Traditional tea for UAE market. Private label available.",
    keywords: "samovar tea Dubai, traditional tea UAE, wholesale samovar tea, private label samovar, Arabian tea supplier",
  },
  "product-premix-tea": {
    title: "Premix Tea Manufacturer Dubai | 3-in-1 Instant Tea UAE",
    description: "3-in-1 Premix Tea: Masala, Cardamom, Ginger, Saffron, Chocolate & more. Ready-brew sachets from AED 17.17/kg. Perfect for offices & hospitality. Private label in Dubai.",
    keywords: "premix tea Dubai, 3-in-1 tea UAE, instant tea manufacturer, office tea supplier Dubai, premix chai wholesale",
  },
  "product-green-tea": {
    title: "Green Tea Wholesale Dubai | Premium Health Tea Supplier UAE",
    description: "Premium Green Tea: Shai & Hadeel varieties. Antioxidant-rich, health-focused blends. Wholesale pricing, private label packaging available in Dubai UAE.",
    keywords: "green tea wholesale Dubai, health tea supplier UAE, organic green tea, private label green tea Dubai",
  },
  "product-black-tea": {
    title: "Black Tea Manufacturer Dubai | Premium Leaf Tea Wholesale UAE",
    description: "Premium Black Tea: Leaf Rimal & Leaf Nakheel varieties. Full-bodied flavor from finest estates. Wholesale bulk supply, private label in Dubai UAE.",
    keywords: "black tea wholesale Dubai, premium tea leaves UAE, bulk black tea supplier, private label black tea Dubai",
  },
  "product-coffee": {
    title: "Coffee Manufacturer Dubai | Agglomerated & Premix Coffee UAE",
    description: "100% Agglomerated Coffee from Chikmagalur estate. 80/20 & 60/40 chicory blends plus 3-in-1 premix. Wholesale prices, private label available in Dubai UAE.",
    keywords: "coffee manufacturer Dubai, agglomerated coffee UAE, chicory coffee blend, premix coffee wholesale, private label coffee Dubai",
  },
};

export function updateDocumentMeta(pageKey: string): void {
  const seo = seoConfig[pageKey];
  if (!seo) return;

  document.title = seo.title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seo.description);

  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', seo.keywords);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', seo.title);

  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', seo.description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  const path = pageKey === 'home' ? '' : `/${pageKey.replace('product-', 'products/').replace(/-/g, '-')}`;
  canonical.setAttribute('href', `https://www.porwalderimax.com${path}`);
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.porwalderimax.com/#organization",
  "name": "Porwal Tea & Deri Max Beverages",
  "alternateName": "PTDM",
  "description": "Leading private label tea manufacturer in Dubai, UAE since 1980. Custom tea packaging, blending, and export services with 5,000 kg daily production capacity.",
  "url": "https://www.porwalderimax.com",
  "logo": "https://www.porwalderimax.com/porwal logo.png",
  "image": "https://www.porwalderimax.com/porwal logo.png",
  "telephone": "+971564171070",
  "email": "info@porwalderimax.com",
  "foundingDate": "1980",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "94 25C St, Ras Al Khor Industrial Area 2",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.1631",
    "longitude": "55.3556"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "AED",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "GeoCircle",
      "name": "GCC Region",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "2000 km"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/porwaltea",
    "https://www.instagram.com/porwaltea",
    "https://www.linkedin.com/company/porwal-tea"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tea Products & Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Label Tea Manufacturing",
          "description": "Complete private label tea solutions including custom packaging, blending, and branding"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Tea Packaging",
          "description": "20+ packaging formats including boxes, jars, tea bags, and bulk packaging"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tea Export Services",
          "description": "International export logistics with complete documentation support"
        }
      }
    ]
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Porwal Tea & Deri Max Beverages",
  "alternateName": "PTDM",
  "url": "https://www.porwalderimax.com",
  "logo": "https://www.porwalderimax.com/porwal logo.png",
  "foundingDate": "1980",
  "description": "Leading private label tea manufacturer in Dubai, UAE. 40+ years of excellence in tea blending, packaging, and export services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "94 25C St, Ras Al Khor Industrial Area 2",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971564171070",
    "contactType": "sales",
    "email": "info@porwalderimax.com",
    "availableLanguage": ["English", "Arabic", "Hindi"]
  },
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 50,
    "maxValue": 100
  }
};

export const breadcrumbSchema = (items: {name: string; url: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceSchema = (service: {name: string; description: string; url: string}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Porwal Tea & Deri Max Beverages",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "94 25C St, Ras Al Khor Industrial Area 2",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  }
});

export const productSchema = (product: {name: string; description: string; price?: string; image?: string}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image || "https://www.porwalderimax.com/porwal logo.png",
  "brand": {
    "@type": "Brand",
    "name": "Porwal Tea & Deri Max"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Porwal Tea & Deri Max Beverages"
  },
  ...(product.price && {
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AED",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Porwal Tea & Deri Max Beverages"
      }
    }
  })
});

export const faqSchema = (faqs: {question: string; answer: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author,
    "url": "https://www.porwalderimax.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Porwal Tea & Deri Max Beverages",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.porwalderimax.com/porwal logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});
