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
    <section id="produkcja" className="py-20 md:py-32 bg-[#E4DDD0] relative overflow-hidden" aria-labelledby="production-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-28">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 id="production-title" className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
                Wszystko pod <br className="hidden lg:block"/> jednym dachem
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={100}>
              <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed">
                Największą przewagą mores jest kompletne zaplecze produkcyjne. Posiadając własną wycinarnię, lakiernię oraz obszerny magazyn, zdejmujemy z Ciebie problem szukania podwykonawców.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-ink/70 text-lg md:text-xl font-light leading-relaxed">
                Dzięki temu nie mamy ograniczeń co do różnorodności i kompleksowości zleceń. Zyskujesz jeden punkt kontaktu, pełną kontrolę jakości i pewność realizacji bez zbędnych opóźnień.
              </p>
            </Reveal>
          </div>
        </div>
        
        <div className="relative">
          {/* Pozioma oś czasu (desktop) przebiegająca za ikonami */}
          <div className="hidden sm:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-ink/10 z-0" aria-hidden="true"></div>
          {/* Pionowa oś czasu (mobile) */}
          <div className="sm:hidden absolute left-6 top-6 bottom-6 w-px bg-ink/10 z-0" aria-hidden="true"></div>

          <div className="grid sm:grid-cols-4 gap-12 sm:gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 150}>
                  <div className="flex sm:flex-col items-center sm:items-center gap-6 sm:gap-5 group">
                    
                    {/* Okrąg z ikoną maskujący linię tła (bg-[#E4DDD0]) */}
                    <div className="relative flex-shrink-0 w-12 h-12 bg-[#E4DDD0] border border-ink/10 rounded-full flex items-center justify-center text-ink transition-colors duration-500 group-hover:border-brand group-hover:text-brand group-hover:bg-brand/5 z-10">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    
                    {/* Tekst */}
                    <div className="flex-1 sm:w-full text-left sm:text-center">
                      <div className="text-brand font-bold text-xs uppercase tracking-widest mb-1.5 transition-opacity duration-300">
                        0{i + 1}
                      </div>
                      <h3 className="font-serif text-xl sm:text-lg lg:text-xl text-ink tracking-wide lg:whitespace-nowrap transition-colors duration-500 group-hover:text-brand">
                        {step.title}
                      </h3>
                    </div>
                    
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};