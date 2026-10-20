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
    badges: ["Standard 14 dni", "Ekspres (+50%)"], 
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
    <section id="proces" className="py-20 md:py-32 bg-stone" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
            <h2 id="process-title" className="font-serif text-4xl md:text-5xl text-ink mb-6">
              Jak złożyć zamówienie?
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed">
              Prosty i przejrzysty proces od wyceny po gotowe fronty. Szanujemy Twój czas.
            </p>
          </div>
        </Reveal>
        
        <div className="relative">
          {/* Oś czasu - pionowa linia w tle dla mobile */}
          <div className="absolute left-[39px] md:left-[47px] top-10 bottom-10 w-px bg-line z-0 lg:hidden" aria-hidden="true"></div>
          {/* Oś czasu - pozioma linia w tle dla desktopu */}
          <div className="hidden lg:block absolute top-[47px] left-[12.5%] right-[12.5%] h-px bg-line z-0" aria-hidden="true"></div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.step} delay={i * 100}>
                  <div className="relative z-10 flex lg:flex-col gap-6 lg:items-center group">
                    
                    {/* Kontener ikony z tłem maskującym linię przebiegającą pod spodem */}
                    <div className="relative bg-stone flex-shrink-0 z-10 py-2 lg:px-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-line flex items-center justify-center text-ink group-hover:border-brand group-hover:text-brand transition-colors duration-500 bg-stone">
                        <Icon className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
                      </div>
                      {/* Duża edytorska numeracja obok okręgu */}
                      <div className="absolute -top-2 -right-3 md:top-0 md:-right-2 text-brand font-serif text-2xl font-bold bg-stone px-1.5 transition-transform duration-500 group-hover:scale-110">
                        {p.step}
                      </div>
                    </div>

                    {/* Treść kroku */}
                    <div className="flex-1 lg:text-center mt-2 lg:mt-0">
                      <h3 className="font-serif text-2xl text-ink mb-3 transition-colors duration-500 group-hover:text-brand">
                        {p.title}
                      </h3>
                      {p.desc && <p className="text-muted font-light leading-relaxed">{p.desc}</p>}
                      
                      {/* Wizualne wyróżnienie czasów realizacji - eleganckie etykiety */}
                      {p.badges && (
                        <div className="flex flex-wrap gap-2 lg:justify-center mt-5">
                          {p.badges.map(b => (
                            <span key={b} className="inline-flex items-center justify-center border border-line bg-paper text-ink text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-sm whitespace-nowrap">
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