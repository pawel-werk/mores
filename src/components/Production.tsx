import React from 'react';
import { Reveal } from './Reveal';
import { LayersIcon, CutIcon, PaintIcon, TruckIcon } from './Icons';

const steps = [
  { title: "Półprodukty", icon: LayersIcon },
  { title: "Wycinarnia", icon: CutIcon },
  { title: "Lakiernia", icon: PaintIcon },
  { title: "Magazyn i\u00A0logistyka", icon: TruckIcon } // \u00A0 (twarda spacja) zapobiega sierotom
];

export const Production: React.FC = () => {
  return (
    <section id="produkcja" className="py-24 md:py-32 bg-graphite relative overflow-hidden" aria-labelledby="production-title">
      
      {/* WIDOCZNE, wyraziste faktury drewna (słoje + szczotkowany fornir) dedykowane dla ciemnych sekcji */}
      <div className="absolute inset-0 bg-rings text-ash opacity-[0.04] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-10 pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 id="production-title" className="font-serif text-4xl md:text-5xl text-paper leading-tight">
                Wszystko pod <br className="hidden lg:block"/> jednym dachem
              </h2>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7">
            {/* Tekst rozbity na edytorskie dwie kolumny */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-4 lg:mt-0">
              <Reveal delay={100}>
                <p className="text-ash/70 font-light leading-relaxed">
                  Największą przewagą mores jest kompletne zaplecze produkcyjne. Posiadając własną wycinarnię, lakiernię oraz obszerny magazyn, zdejmujemy z Ciebie problem szukania podwykonawców.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-ash/70 font-light leading-relaxed">
                  Dzięki temu nie mamy ograniczeń co do różnorodności i kompleksowości zleceń. Zyskujesz jeden punkt kontaktu, pełną kontrolę jakości i pewność realizacji bez zbędnych opóźnień.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        
        {/* Karta specyfikacji technicznej: 4 komórki tworzące ścisłą siatkę (grid) zamiast luźnych kropek */}
        <Reveal delay={300} variant="clip">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-ash/10 bg-graphite/40 backdrop-blur-sm relative group/grid">
            
            {/* Animowana linia podkreślająca cały blok przy scrollu */}
            <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-brand scale-x-0 group-hover/grid:scale-x-100 origin-left transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const number = String(i + 1).padStart(2, '0');
              
              return (
                <div 
                  key={step.title} 
                  className="group relative border-r border-b border-ash/10 p-8 lg:p-10 min-h-[220px] lg:min-h-[280px] flex flex-col justify-between hover:bg-ash/[0.03] transition-colors duration-500"
                >
                  <div className="flex justify-between items-start mb-8">
                    <Icon className="w-8 h-8 text-ash/30 group-hover:text-brand transition-colors duration-500" aria-hidden="true" />
                    <span className="font-serif text-3xl text-ash/10 group-hover:text-brand transition-colors duration-500">
                      {number}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-[22px] text-paper group-hover:text-brand transition-colors duration-500">
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}

          </div>
        </Reveal>

      </div>
    </section>
  );
};