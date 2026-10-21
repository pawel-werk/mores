import React from 'react';
import { Reveal } from './Reveal';
import { DownloadIcon, ArrowRight } from './Icons';
import { Logo } from './Logo';

export const CatalogTeaser: React.FC = () => {
  return (
    <section id="katalog-teaser" className="py-24 md:py-32 bg-oak text-ink overflow-hidden hairline-b" aria-labelledby="catalog-teaser-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Kolumna tekstowa - Lewa (5/12) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <h2 id="catalog-teaser-title" className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
                Katalog kolekcji frontów
              </h2>
              <p className="text-ink/70 text-lg font-light leading-relaxed mb-12 max-w-md">
                Zapoznaj się z naszymi standardowymi wzorami, rodzajami frezowań i wykończeniami. Pobierz materiały techniczne przygotowane z myślą o profesjonalistach.
              </p>
            </Reveal>
            
            <Reveal delay={100}>
              <div className="flex flex-wrap items-center gap-8">
                {/* Nowy, uspokojony przycisk Primary */}
                <a href="#/katalog" className="bg-ink text-paper px-8 py-4 text-[15px] font-medium hover:bg-graphite transition-colors inline-flex items-center gap-3 rounded-sm">
                  Zobacz online <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                {/* Secondary Button - Jako klasyczny, czysty link B2B */}
                <a href="/katalog/mores-katalog.pdf" download className="text-[15px] font-medium text-ink hover:text-brand transition-colors relative group inline-flex items-center gap-2">
                  <DownloadIcon className="w-4 h-4" aria-hidden="true" />
                  Pobierz PDF
                  <span className="absolute left-0 -bottom-1.5 w-full h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Kolumna wizualna - Prawa (7/12) - Realistyczny stos arkuszy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={200} variant="clip" className="p-4 sm:p-8">
              <div className="relative w-64 sm:w-80 aspect-[1/1.414] group cursor-pointer perspective-1000">
                
                {/* Miękkie, rozproszone światło/cień kontaktowy pod całym stosem */}
                <div className="absolute -inset-4 bg-graphite/5 blur-xl rounded-full translate-y-4 group-hover:translate-y-6 group-hover:blur-2xl transition-all duration-[1000ms] pointer-events-none" />
                
                {/* Dolny arkusz papieru */}
                <div className="absolute inset-0 bg-paper border border-ink/5 shadow-sm rotate-3 translate-x-3 translate-y-2 group-hover:rotate-6 group-hover:translate-x-6 group-hover:translate-y-4 transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                
                {/* Środkowy arkusz papieru */}
                <div className="absolute inset-0 bg-paper border border-ink/5 shadow-sm rotate-1 translate-x-1.5 translate-y-1 group-hover:rotate-2 group-hover:translate-x-3 group-hover:translate-y-2 transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                
                {/* Główna okładka (Top sheet) */}
                <a 
                  href="#/katalog"
                  className="absolute inset-0 bg-paper border border-ink/10 shadow-md flex flex-col justify-between overflow-hidden transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:-translate-x-2"
                >
                  {/* Faktura papieru */}
                  <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
                  
                  {/* Linearny rysunek architektoniczny (przekrój profilu) z SVG */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-1/4 left-0 stroke-ink fill-none" strokeWidth="0.5">
                      <path d="M-10,50 L20,50 C25,50 30,55 30,60 L30,90 C30,95 35,100 40,100 L110,100" />
                      <path d="M-10,40 L30,40 C40,40 45,45 45,55 L45,85 C45,90 50,95 55,95 L110,95" />
                      <path d="M-10,30 L40,30 C55,30 60,35 60,50 L60,80 C60,85 65,90 70,90 L110,90" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 p-8 md:p-10">
                    <Logo className="h-5 opacity-80" variant="dark" />
                    <div className="w-8 h-[1px] bg-brand mt-10" />
                  </div>
                  
                  <div className="relative z-10 p-8 md:p-10">
                    <h3 className="font-serif text-3xl md:text-4xl text-ink leading-[1.05] mb-4">
                      Katalog<br/>frontów
                    </h3>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-ink/40">
                      Wydanie Techniczne / 2026
                    </p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};