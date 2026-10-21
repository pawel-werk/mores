import React from 'react';
import { ArrowRight, FactoryIcon, PaintIcon, TruckIcon } from './Icons';
import { Reveal } from './Reveal';
import { MaterialPanel } from './MaterialPanel';

export const Hero: React.FC = () => {
  const trustIndicators = [
    { label: "Własna produkcja", icon: FactoryIcon },
    { label: "Lakiernia", icon: PaintIcon },
    { label: "Magazyn i logistyka", icon: TruckIcon }
  ];

  return (
    <section className="relative bg-paper pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden hairline-b">
      {/* Bardzo dyskretne ziarno dla szlachetności tła */}
      <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Kolumna tekstowa - Asymetrycznie szersza (7/12) */}
          <div className="lg:col-span-7 z-10">
            <Reveal>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5rem] text-ink leading-[1.05] tracking-tight mb-8">
                Fronty meblowe i zlecenia nietypowe. <br/>
                {/* Naprawiona klasa serif -> font-serif, waga font-light teraz działa dzięki załadowaniu 300 */}
                <span className="font-serif font-light text-brand">Od cięcia po lakierowanie.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-xl font-light leading-relaxed">
                Własne, kompletne zaplecze produkcyjne w jednym miejscu dla stolarzy i producentów mebli. Bez ograniczeń co do różnorodności i złożoności.
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-8 mb-16 md:mb-24">
                {/* Spokojniejsze przyciski (Primary) bez krzyczących wersalików */}
                <a href="#kontakt" className="bg-ink text-paper px-8 py-4 text-[15px] font-medium hover:bg-brand transition-colors inline-flex items-center gap-3 rounded-sm">
                  Zapytaj o wycenę <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                {/* Secondary Button - Klasyczny link z animowaną linią */}
                <a href="#/katalog" className="text-[15px] font-medium text-ink hover:text-brand transition-colors relative group">
                  Zobacz katalog
                  <span className="absolute left-0 -bottom-1.5 w-full h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              {/* Pasek zaufania jako cicha, precyzyjna linia techniczna z małymi etykietami */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 hairline-t pt-8">
                {trustIndicators.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-ink">
                      <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                      <span className="text-[10px] uppercase tracking-widest font-bold text-ink/60">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
          
          {/* Kolumna wizualna - Węższa (5/12). Kompozycja nakładających się paneli (MaterialPanel) */}
          <div className="lg:col-span-5 relative z-0 h-[60vh] min-h-[500px] w-full mt-8 lg:mt-0 group perspective-1000">
            {/* Przekazany className do Reveal naprawia błąd z niewypełnieniem wysokości */}
            <Reveal variant="clip" className="w-full h-full relative">
              
              {/* Panel lewy tylny - Tundra (fornir) płaski */}
              <div className="absolute left-0 top-[15%] w-[45%] h-[60%] transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:-translate-y-4">
                <MaterialPanel variant="tundra" profile="flat" className="w-full h-full" />
                <div className="absolute -left-4 top-8 bg-paper/90 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-ink/70 hairline-b shadow-sm pointer-events-none">
                  Tundra / Fornir płaski
                </div>
              </div>

              {/* Panel prawy dolny - Magma (pomarańcz) listwowany */}
              <div className="absolute right-0 top-[25%] w-[40%] h-[55%] transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-y-6">
                <MaterialPanel variant="magma" profile="slatted" className="w-full h-full" />
                <div className="absolute -right-2 bottom-12 bg-paper/90 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-ink/70 hairline-b shadow-sm pointer-events-none">
                  Magma / Listwowanie
                </div>
              </div>

              {/* Panel główny środkowy - Bazalt (grafit) z profilem ramowym */}
              <div className="absolute left-[20%] top-[5%] w-[55%] h-[80%] z-10 transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:-translate-y-2 md:group-hover:scale-[1.02]">
                <MaterialPanel variant="bazalt" profile="frame" className="w-full h-full" />
                <div className="absolute -right-6 top-1/4 bg-paper/90 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-ink/70 hairline-b shadow-sm z-20 pointer-events-none">
                  Bazalt / Profil ramowy
                </div>
              </div>

            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};