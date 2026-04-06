import { useEffect } from 'react';
import { updateDocumentMeta, localBusinessSchema, organizationSchema } from '../utils/seo';

type SchemaObject = Record<string, unknown>;

interface SEOHeadProps {
  page: string;
  customSchema?: SchemaObject | SchemaObject[];
}

export default function SEOHead({ page, customSchema }: SEOHeadProps) {
  useEffect(() => {
    updateDocumentMeta(page);

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    const schemas: SchemaObject[] = [
      localBusinessSchema as SchemaObject,
      organizationSchema as SchemaObject
    ];

    if (customSchema) {
      if (Array.isArray(customSchema)) {
        schemas.push(...customSchema);
      } else {
        schemas.push(customSchema);
      }
    }

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [page, customSchema]);

  return null;
}
