import React from 'react';
import { Reveal } from './Reveal';
import { DownloadIcon, ArrowRight } from './Icons';
import { Logo } from './Logo';

export const CatalogTeaser: React.FC = () => {
  return (
    <section id="katalog-teaser" className="py-20 md:py-32 bg-[#E4DDD0] text-ink overflow-hidden" aria-labelledby="catalog-teaser-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Kolumna wizualna - Okładka CSS */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end lg:pr-12">
            <Reveal delay={200}>
              <div className="relative w-64 sm:w-80 aspect-[1/1.414] group cursor-pointer">
                <div className="absolute -inset-4 bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full pointer-events-none" />
                
                {/* Główna bryła katalogu - pozostaje jaśniejsza (bg-paper) aby odstawała od tła */}
                <a 
                  href="#/katalog"
                  className="block w-full h-full bg-paper rounded-r-md rounded-l-sm border-l-[16px] border-brand shadow-2xl relative overflow-hidden transition-all duration-[600ms] ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:-rotate-1"
                >
                  <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                  
                  <div className="flex flex-col justify-between h-full p-8 md:p-10">
                    <div className="relative z-10">
                      <Logo className="h-5 opacity-80" variant="dark" />
                      <div className="w-12 h-px bg-ink/10 mt-8" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="font-serif text-3xl md:text-4xl text-ink leading-[1.1] mb-3">
                        Katalog<br/>frontów
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink/40">
                        Edycja / 2026
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-black/15 pointer-events-none" />
                  <div className="absolute left-1.5 top-0 bottom-0 w-px bg-white/40 pointer-events-none" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Kolumna tekstowa */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 id="catalog-teaser-title" className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
                Katalog kolekcji <br className="hidden lg:block"/> frontów
              </h2>
              <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                Zapoznaj się z naszymi standardowymi wzorami, rodzajami frezowań i wykończeniami. Pobierz materiały przygotowane z myślą o profesjonalistach.
              </p>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#/katalog" className="bg-brand text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand-dark transition-colors text-center inline-flex justify-center items-center gap-3">
                  Zobacz online <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a href="/katalog/mores-katalog.pdf" download className="bg-transparent border border-ink/20 text-ink px-8 py-4 text-sm uppercase tracking-widest font-bold hover:border-ink hover:bg-ink/5 transition-colors text-center inline-flex justify-center items-center gap-3">
                  <DownloadIcon className="w-5 h-5" aria-hidden="true" /> Pobierz PDF
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};