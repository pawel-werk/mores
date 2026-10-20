import React, { useState, useEffect } from 'react';
import { galleryData, GalleryItem } from '../data/gallery';
import { Lightbox } from '../components/Lightbox';

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
  }, []);

  const filteredData = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="py-12 md:py-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">Galeria realizacji</h1>
          <p className="text-muted text-lg">Przykładowe produkcje, wykończenia lakiernicze i projekty wykonane dla naszych klientów B2B.</p>
        </header>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              aria-pressed={filter === c.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c.id ? 'bg-brand text-white' : 'bg-stone text-ink hover:bg-line'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-square bg-stone rounded-xl overflow-hidden focus-visible:ring-2 focus-visible:ring-brand outline-none"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium text-sm text-left">{item.title}</span>
              </div>
            </button>
          ))}
        </div>
        
        {filteredData.length === 0 && (
           <div className="text-center py-20 text-muted">Brak zdjęć w tej kategorii.</div>
        )}

        <div className="mt-20 text-center bg-stone p-8 rounded-xl border border-line">
          <h2 className="text-xl font-bold text-ink mb-4">Masz podobny projekt?</h2>
          <a href="#kontakt" className="inline-block bg-brand text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-dark transition-colors">
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