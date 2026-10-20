import React from 'react';
import { Reveal } from './Reveal';
import { LayersIcon, CutIcon, PaintIcon, TruckIcon } from './Icons';

const steps = [
  { title: "Półprodukty", icon: LayersIcon },
  { title: "Wycinarnia", icon: CutIcon },
  { title: "Lakiernia", icon: PaintIcon },
  { title: "Magazyn i logistyka", icon: TruckIcon }
];

export const Production: React.FC = () => {
  return (
    <section id="produkcja" className="py-20 md:py-32 bg-brand-dark text-white" aria-labelledby="production-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 id="production-title" className="text-3xl md:text-4xl font-bold mb-6">Wszystko pod jednym dachem</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Największą przewagą mores jest kompletne zaplecze produkcyjne. Posiadając własną wycinarnię, lakiernię oraz obszerny magazyn, zdejmujemy z Ciebie problem szukania podwykonawców.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Dzięki temu nie mamy ograniczeń co do różnorodności i kompleksowości zleceń. Zyskujesz jeden punkt kontaktu, pełną kontrolę jakości i pewność realizacji bez zbędnych opóźnień.
              </p>
            </Reveal>
          </div>
          
          <div className="relative pt-4 pb-4">
            {/* Linia łącząca w tle (pionowa oś czasu) */}
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-white/20 z-0 hidden sm:block"></div>
            <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/20 z-0 sm:hidden -translate-x-1/2"></div>

            <div className="space-y-6 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} delay={i * 150}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-6">
                      {/* Ikona z numeracją */}
                      <div className="relative flex-shrink-0 w-12 h-12 bg-brand-dark border-2 border-white/20 rounded-full flex items-center justify-center text-white/90 z-10">
                        <span className="absolute -left-8 text-white/30 font-mono text-sm font-medium hidden sm:block">
                          0{i + 1}
                        </span>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      
                      {/* Karta etapu - równe szerokości, brak łamania na 3 linie */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex-1 w-full text-center sm:text-left flex items-center justify-center sm:justify-start backdrop-blur-sm">
                        <span className="font-medium text-lg tracking-wide">{step.title}</span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};