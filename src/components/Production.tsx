import React from 'react';
import { Reveal } from './Reveal';

const steps = ["Półprodukty", "Wycinarnia", "Lakiernia", "Magazyn i logistyka"];

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
          
          <div>
            <div className="flex flex-col sm:flex-row gap-4">
              {steps.map((step, i) => (
                <Reveal key={step} delay={i * 150}>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-6 flex-1 relative flex items-center justify-center sm:flex-col text-center sm:min-h-[140px]">
                    <div className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-white/40">
                      {i < steps.length - 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <div className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 rotate-90">
                      {i < steps.length - 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <span className="font-semibold text-lg">{step}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};