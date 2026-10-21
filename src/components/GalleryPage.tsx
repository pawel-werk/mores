import React, { useState, useEffect } from 'react';
import { galleryData } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { MaterialPanel } from './MaterialPanel';
import { Reveal } from './Reveal';

const categories = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'fronty', label: 'Fronty' },
  { id: 'lakierowanie', label: 'Lakierowanie' },
  { id: 'nietypowe', label: 'Zlecenia nietypowe' }
];

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Galeria realizacji | mores";
    window.scrollTo(0, 0);
  }, []);

  const filteredData = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const handleScrollToContact = () => {
    setTimeout(() => {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="py-24 md:py-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 md:mb-20">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Galeria realizacji</h1>
            <p className="text-ink/70 text-lg font-light leading-relaxed max-w-2xl">
              Przykładowe produkcje, wykończenia lakiernicze i projekty wykonane dla naszych klientów B2B.
            </p>
          </Reveal>
        </header>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-8 mb-16 hairline-b">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                aria-pressed={filter === c.id}
                className={`pb-4 text-[13px] uppercase tracking-widest font-medium outline-none transition-colors relative group ${
                  filter === c.id ? 'text-brand' : 'text-ink/50 hover:text-ink'
                }`}
              >
                {c.label}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] transition-transform duration-300 origin-left ${filter === c.id ? 'bg-brand scale-x-100' : 'bg-ink scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
          </div>
        </Reveal>

        {/* Pionowe prostokąty 3:4 na podstronie galerii */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
          {filteredData.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 50} variant="clip">
              <button
                onClick={() => setLightboxIndex(idx)}
                className="group w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-paper rounded-sm"
              >
                <div className="w-full aspect-[3/4] overflow-hidden rounded-sm shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-md">
                  <MaterialPanel 
                    src={item.src}
                    variant={item.variant}
                    profile={item.profile}
                    className="w-full h-full transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                
                <div className="mt-5 flex flex-col gap-1 hairline-t pt-3">
                  <h3 className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-brand truncate">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/40 whitespace-nowrap">
                    {item.description}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        
        {filteredData.length === 0 && (
           <div className="text-center py-32 text-ink/40 font-light">Brak projektów w tej kategorii.</div>
        )}

        <Reveal delay={200}>
          <div className="mt-32 relative bg-graphite p-12 md:p-20 overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-rings text-ash opacity-[0.04] pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-10 pointer-events-none" aria-hidden="true" />
            
            <div className="relative z-10 md:w-2/3">
              <h2 className="font-serif text-3xl md:text-4xl text-paper mb-6">Masz podobny projekt?</h2>
              <p className="text-ash/60 font-light text-lg mb-10 max-w-md leading-relaxed">
                Chętnie wycenimy Twoje zestawienie materiałowe. Skontaktuj się z naszym zespołem.
              </p>
              <a 
                href="#kontakt" 
                onClick={handleScrollToContact}
                className="inline-block bg-paper text-ink px-8 py-4 text-[15px] font-medium hover:bg-brand hover:text-white transition-colors rounded-sm"
              >
                Zapytaj o wycenę
              </a>
            </div>
          </div>
        </Reveal>

      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          item={filteredData[lightboxIndex]}
          currentIndex={lightboxIndex}
          total={filteredData.length}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((prev) => (prev! + 1) % filteredData.length)}
          onPrev={() => setLightboxIndex((prev) => (prev! - 1 + filteredData.length) % filteredData.length)}
        />
      )}
    </div>
  );
};