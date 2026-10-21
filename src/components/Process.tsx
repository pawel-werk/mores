import React from 'react';
import { Reveal } from './Reveal';
import { FileTextIcon, CalculatorIcon, MachineIcon, TruckIcon } from './Icons';

const processSteps = [
  { 
    step: "01", 
    title: "Zapytanie", 
    desc: "Prześlij wymiary, wzór i ilości. Im więcej szczegółów, tym szybciej odpowiemy.", 
    icon: FileTextIcon 
  },
  { 
    step: "02", 
    title: "Wycena", 
    desc: "Otrzymasz od nas przejrzystą, wiążącą kalkulację kosztów projektu.", 
    icon: CalculatorIcon 
  },
  { 
    step: "03", 
    title: "Produkcja", 
    desc: "Precyzyjna obróbka i lakierowanie.",
    badges: ["Standard 14 dni", "Ekspres 7 dni"],
    icon: MachineIcon 
  },
  { 
    step: "04", 
    title: "Dostawa", 
    desc: "Odbiór osobisty w warsztacie lub bezpieczny transport naszej floty.", 
    icon: TruckIcon 
  }
];

export const Process: React.FC = () => {
  return (
    <section id="proces" className="py-12 md:py-16 bg-ash relative" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="mb-16 md:mb-20 max-w-2xl">
            <h2 id="process-title" className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              Jak złożyć zamówienie?
            </h2>
            <p className="text-ink/70 text-lg font-light leading-relaxed">
              Prosty i przejrzysty proces od wyceny po gotowe fronty. Szanujemy Twój czas.
            </p>
          </div>
        </Reveal>
        
        <div className="relative">
          {/* Oś czasu - pozioma linia dla desktopu */}
          <div className="hidden lg:block absolute top-[1.35rem] left-0 right-0 h-[1px] z-0">
            <Reveal variant="line" className="w-full h-full bg-ink/10" />
          </div>

          {/* Oś czasu - pionowa linia dla mobile */}
          <div className="lg:hidden absolute left-[15px] top-6 bottom-0 w-[1px] bg-ink/10 z-0" aria-hidden="true" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.step} delay={i * 100}>
                  <div className="relative pl-12 lg:pl-0 group flex flex-col lg:items-center lg:text-center">
                    
                    <div className="lg:hidden absolute left-[11px] top-3 w-[9px] h-[9px] bg-ash border border-ink/20 rounded-full group-hover:border-brand transition-colors duration-500" />
                    
                    <div className="flex items-center gap-4 mb-6 lg:bg-ash lg:px-4 z-10">
                      {/* Lity jasnoszary kolor (text-[#B6B2AE]) bez opacity eliminuje widoczne nakładanie się linii */}
                      <div className="text-[#B6B2AE] group-hover:text-brand transition-colors duration-500">
                        <Icon className="w-9 h-9" aria-hidden="true" />
                      </div>
                      <div className="font-serif text-5xl text-ink/10 group-hover:text-brand transition-colors duration-500">
                        {p.step}
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-center">
                      <h3 className="font-serif text-2xl text-ink mb-3 transition-colors duration-500 group-hover:text-brand">
                        {p.title}
                      </h3>
                      {p.desc && <p className="text-ink/70 font-light leading-relaxed">{p.desc}</p>}
                      
                      {p.badges && (
                        <div className="flex flex-wrap justify-start lg:justify-center gap-2 mt-5">
                          {p.badges.map(b => (
                            <span key={b} className="inline-flex items-center justify-center border border-ink/10 text-ink/60 text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm whitespace-nowrap bg-paper/50">
                              {b}
                            </span>
                          ))}
                        </div>
                      )}
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