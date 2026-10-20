import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

export const GalleryTeaser: React.FC = () => {
  const placeholders = [
    "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="realizacje" className="py-20 md:py-32 bg-paper border-t border-line" aria-labelledby="gallery-teaser-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16 gap-8">
          <Reveal>
            <div>
              <h2 id="gallery-teaser-title" className="font-serif text-4xl md:text-5xl text-ink mb-6">
                Nasze realizacje
              </h2>
              <p className="text-muted text-lg max-w-xl font-light leading-relaxed">
                Zobacz, jakie fronty i projekty nietypowe opuszczają naszą lakiernię. Precyzja wykończenia w każdym detalu.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <a href="#/galeria" className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-bold text-ink hover:text-brand transition-colors group">
              Zobacz całą galerię 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        {/* Asymetryczny układ edytorski (1 duży + 3 mniejsze) */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          
          {/* Lewa strona - Duży kafel portretowy */}
          <div className="w-full md:w-1/2">
            <Reveal delay={100}>
              <a href="#/galeria" className="block relative w-full aspect-square md:aspect-[4/5] overflow-hidden group bg-stone rounded-sm">
                <img 
                  src={placeholders[0]} 
                  alt="Zrealizowany projekt frontów meblowych 1" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-brand/10 transition-colors duration-700 mix-blend-multiply" />
              </a>
            </Reveal>
          </div>
          
          {/* Prawa strona - Siatka mniejszych kafli */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
            
            {/* Szeroki kafel krajobrazowy */}
            <Reveal delay={200}>
              <a href="#/galeria" className="block relative w-full aspect-video md:aspect-[16/9] overflow-hidden group bg-stone rounded-sm">
                <img 
                  src={placeholders[1]} 
                  alt="Zrealizowany projekt frontów meblowych 2" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-brand/10 transition-colors duration-700 mix-blend-multiply" />
              </a>
            </Reveal>
            
            {/* Dwa małe kwadratowe kafle na dole */}
            <div className="flex gap-4 md:gap-6 flex-1">
              <div className="w-1/2">
                <Reveal delay={300}>
                  <a href="#/galeria" className="block relative w-full aspect-square overflow-hidden group bg-stone rounded-sm">
                    <img 
                      src={placeholders[2]} 
                      alt="Zrealizowany projekt frontów meblowych 3" 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[15%] transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-brand/10 transition-colors duration-700 mix-blend-multiply" />
                  </a>
                </Reveal>
              </div>
              <div className="w-1/2">
                <Reveal delay={400}>
                  <a href="#/galeria" className="block relative w-full aspect-square overflow-hidden group bg-stone rounded-sm">
                    <img 
                      src={placeholders[3]} 
                      alt="Zrealizowany projekt frontów meblowych 4" 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[15%] transition-transform duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-brand/10 transition-colors duration-700 mix-blend-multiply" />
                  </a>
                </Reveal>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};