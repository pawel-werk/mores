import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';

export const GalleryTeaser: React.FC = () => {
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
            <a href="#/galeria" className="inline-flex items-center gap-2 font-medium text-brand hover:text-brand-dark transition-colors">
              Zobacz całą galerię <ArrowRight className="w-5 h-5" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Reveal key={i} delay={i * 100}>
              <a href="#/galeria" className="block relative aspect-square rounded-xl overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-1610222013897-400d7fb7973f?auto=format&fit=crop&w=400&q=80`} 
                  alt="Realizacja placeholder" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};