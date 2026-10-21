import React from 'react';
import { ArrowRight } from './Icons';
import { Reveal } from './Reveal';
import { MaterialPanel } from './MaterialPanel';

export const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Kolumna tekstowa */}
          <div className="max-w-2xl">
            <Reveal>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] tracking-tight mb-8">
                Fronty meblowe i<br />
                zlecenia nietypowe.<br />
                <span className="text-brand">Od cięcia po lakierowanie.</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed mb-10 max-w-lg">
                Własne, kompletne zaplecze produkcyjne w jednym miejscu dla stolarzy i producentów mebli. Bez ograniczeń co do różnorodności i złożoności.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-6">
                <a href="#kontakt" className="bg-ink text-paper px-8 py-4 text-[15px] font-medium hover:bg-graphite transition-colors inline-flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
                  Zapytaj o wycenę <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
                </a>
                <a href="#/katalog" className="text-[15px] font-medium text-ink hover:text-brand transition-colors px-4 py-4 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm">
                  Zobacz katalog
                </a>
              </div>
            </Reveal>
          </div>

          {/* Kolumna wizualna - Fronty (Teraz jako klikalny link) */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <Reveal delay={300} className="w-full h-full relative">
              {/* Cała grupa jest linkiem do katalogu */}
              <a 
                href="#/katalog" 
                className="absolute inset-0 flex items-center justify-center lg:justify-end group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                aria-label="Przejdź do katalogu frontów"
              >
                
                {/* Delikatna pomarańczowa poświata na hover */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Główny kontener animujący się na hover */}
                <div className="relative w-full max-w-[500px] aspect-square transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:-translate-x-2">
                  
                  {/* Panel 1: Tundra (rozsuwa się w lewo i w górę na hover) */}
                  <div className="absolute left-0 top-1/4 w-[50%] h-[60%] z-10 transition-transform duration-700 group-hover:-translate-y-4 group-hover:-translate-x-2 group-hover:-rotate-2">
                    <MaterialPanel variant="tundra" profile="slatted" className="w-full h-full shadow-xl" />
                    <div className="absolute top-6 -left-4 bg-paper/95 backdrop-blur-sm px-3 py-1.5 text-[8px] uppercase tracking-widest font-bold text-ink shadow-sm border border-ink/5">
                      Tundra / Fornir
                    </div>
                  </div>

                  {/* Panel 2: Magma (rozsuwa się w dół i w prawo na hover) */}
                  <div className="absolute right-0 bottom-1/4 w-[45%] h-[55%] z-20 transition-transform duration-700 group-hover:translate-y-4 group-hover:translate-x-2 group-hover:rotate-2">
                    <MaterialPanel variant="magma" profile="slatted" className="w-full h-full shadow-2xl" />
                    {/* POPRAWKA: Przesunięto plakietkę na lewą stronę (-left-8 md:-left-16), by uniknąć obcinania krawędzią ekranu */}
                    <div className="absolute bottom-6 -left-8 md:-left-16 bg-paper/95 backdrop-blur-sm px-3 py-1.5 text-[8px] uppercase tracking-widest font-bold text-ink shadow-sm border border-ink/5 z-30">
                      Magma / Listwowanie
                    </div>
                  </div>

                  {/* Panel 3: Bazalt (Wychodzi do przodu na hover) */}
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[55%] h-[70%] z-30 transition-transform duration-700 group-hover:scale-105">
                    <MaterialPanel variant="bazalt" profile="frame" className="w-full h-full shadow-2xl" />
                    <div className="absolute top-1/4 -right-12 bg-paper/95 backdrop-blur-sm px-3 py-1.5 text-[8px] uppercase tracking-widest font-bold text-ink shadow-sm border border-ink/5 z-40">
                      Bazalt / Profil ramowy
                    </div>
                  </div>

                </div>
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};