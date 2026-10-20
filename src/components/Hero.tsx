import React from 'react';
import { ArrowRight, FactoryIcon, PaintIcon, TruckIcon } from './Icons';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const trustIndicators = [
    { label: "Własna produkcja", icon: FactoryIcon },
    { label: "Lakiernia", icon: PaintIcon },
    { label: "Magazyn i logistyka", icon: TruckIcon }
  ];

  return (
    <section className="relative bg-paper pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-line">
      {/* Delikatny motyw wektorowych słojów drewna wtapiający się w tło */}
      <div className="absolute inset-0 bg-wood-grain opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Kolumna tekstowa - szersza (7/12) dla asymetrii */}
          <div className="lg:col-span-7 z-10">
            <Reveal>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5rem] text-ink leading-[1.05] tracking-tight mb-8">
                Fronty meblowe i zlecenia nietypowe. <br/>
                <span className="italic font-light text-brand">Od cięcia po lakierowanie.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-muted mb-10 max-w-xl font-sans font-light leading-relaxed">
                Własne, kompletne zaplecze produkcyjne w jednym miejscu dla stolarzy i producentów mebli. Bez ograniczeń co do różnorodności i złożoności.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4 mb-16 md:mb-24">
                <a href="#kontakt" className="bg-ink text-paper px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand transition-colors inline-flex items-center gap-3">
                  Zapytaj o wycenę <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a href="#/katalog" className="bg-transparent border border-line text-ink px-8 py-4 text-sm uppercase tracking-widest font-bold hover:border-ink transition-colors">
                  Zobacz katalog
                </a>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              {/* Wskaźniki zaufania nad cienką linią separatora */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-line pt-6">
                {trustIndicators.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-ink">
                      <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                      <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
          
          {/* Kolumna wizualna - węższa (5/12), układ edytorski ("zdjęcie w ramie") */}
          <div className="lg:col-span-5 relative z-0 h-[50vh] min-h-[400px] lg:h-[75vh] w-full mt-8 lg:mt-0">
            <Reveal delay={400}>
              <div className="w-full h-full relative p-3 md:p-5 bg-stone border border-line shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80" 
                  alt="Warsztat i fronty meblowe" 
                  fetchPriority="high"
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.1]"
                />
                {/* Ocieplający filtr w kolorze akcentu */}
                <div className="absolute inset-3 md:inset-5 bg-brand/5 mix-blend-multiply pointer-events-none" aria-hidden="true" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};