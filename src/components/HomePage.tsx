import React from 'react';
import { Hero } from '../components/Hero';
import { Offer } from '../components/Offer';
import { Production } from '../components/Production';
import { Audience } from '../components/Audience';
import { GalleryTeaser } from '../components/GalleryTeaser';
import { CatalogTeaser } from '../components/CatalogTeaser';
import { Process } from '../components/Process';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = "mores | Fronty meblowe i zlecenia nietypowe dla stolarzy";
    
    // Generowanie JSON-LD dla FAQ i LocalBusiness
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "mores",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mirków k. Wrocławia",
          "addressCountry": "PL"
        },
        "telephone": "+48000000000",
        "email": "biuro@mores.pl",
        "areaServed": "PL"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy realizujecie zlecenia nietypowe według projektu?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tak, nasza wycinarnia i lakiernia pozwalają nam realizować zamówienia poza standardowymi wymiarami." }
          }
        ]
      }
    ]);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <>
      <Hero />
      <Offer />
      <Production />
      <Audience />
      <GalleryTeaser />
      <CatalogTeaser />
      <Process />
      <Faq />
      <Contact />
    </>
  );
};