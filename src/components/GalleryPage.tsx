import React, { useState, useEffect } from 'react';
import { galleryData } from '../data/gallery';
import { Lightbox } from './Lightbox';

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

  return (
    <div className="py-20 md:py-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Galeria realizacji</h1>
          <p className="text-muted text-lg font-light leading-relaxed">
            Przykładowe produkcje, wykończenia lakiernicze i projekty wykonane dla naszych klientów B2B.
          </p>
        </header>

        {/* Minimalistyczne filtry (zakładki) */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-line">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
              className={`pb-4 text-sm uppercase tracking-widest font-bold outline-none transition-colors border-b-2 -mb-[1px] ${
                filter === c.id 
                  ? 'border-brand text-brand' 
                  : 'border-transparent text-ink/40 hover:text-ink'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-square bg-stone overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy" 
                className="w-full h-full object-cover grayscale-[15%] transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-brand/10 mix-blend-multiply transition-colors duration-700" />
              
              {/* Tytuł pokazujący się na hover - minimalistyczny pasek na dole */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-ink/90 backdrop-blur-sm">
                <span className="text-paper text-xs uppercase tracking-widest font-bold block text-left truncate">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
        
        {filteredData.length === 0 && (
           <div className="text-center py-32 text-muted font-light">Brak zdjęć w tej kategorii.</div>
        )}

        <div className="mt-32 text-center bg-stone p-12 md:p-16 border border-line rounded-sm">
          <h2 className="font-serif text-3xl text-ink mb-8">Masz podobny projekt?</h2>
          <a href="#kontakt" className="inline-block bg-ink text-paper px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand transition-colors">
            Zapytaj o wycenę
          </a>
        </div>

      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          imageSrc={filteredData[lightboxIndex].src}
          altText={filteredData[lightboxIndex].alt}
          description={filteredData[lightboxIndex].title}
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