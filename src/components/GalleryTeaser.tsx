import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

export const GalleryTeaser: React.FC = () => {
  // Zastępujemy niedziałający link 404 z Unsplash działającymi zdjęciami wnętrz
  const placeholders = [
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="realizacje" className="py-20 md:py-32 bg-paper" aria-labelledby="gallery-teaser-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-6">
          <Reveal>
            <div>
              <h2 id="gallery-teaser-title" className="text-3xl md:text-4xl font-bold text-ink mb-4">Nasze realizacje</h2>
              <p className="text-muted text-lg max-w-xl">Zobacz, jakie fronty i projekty nietypowe opuszczają naszą lakiernię.</p>
            </div>
          </Reveal>
          <Reveal>
            <a href="#/galeria" className="inline-flex items-center gap-2 font-bold text-brand hover:text-brand-dark transition-colors group">
              Zobacz całą galerię 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {placeholders.map((url, i) => (
            <Reveal key={i} delay={i * 100}>
              <a href="#/galeria" className="block relative aspect-square rounded-xl overflow-hidden group bg-stone">
                <img 
                  src={url} 
                  alt={`Zrealizowany projekt frontów meblowych ${i + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};