import React from 'react';
import { ArrowRight } from './Icons';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight tracking-tight mb-6">
              Fronty meblowe i zlecenia nietypowe. <br/>
              <span className="text-brand">Od cięcia po lakierowanie.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted mb-8 max-w-lg">
              Własne, kompletne zaplecze produkcyjne w jednym miejscu dla stolarzy i producentów mebli. Bez ograniczeń co do różnorodności i złożoności.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-4">
              <a href="#kontakt" className="bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors inline-flex items-center gap-2">
                Zapytaj o wycenę <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#/katalog" className="bg-white border border-line text-ink px-6 py-3 rounded-lg font-medium hover:bg-stone transition-colors">
                Zobacz katalog
              </a>
            </div>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-ink">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full"></span> Własna produkcja
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full"></span> Lakiernia
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-brand rounded-full"></span> Magazyn i logistyka
              </span>
            </div>
          </Reveal>
        </div>
        
        <div className="relative z-0 h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" 
            alt="Warsztat i fronty meblowe" 
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};