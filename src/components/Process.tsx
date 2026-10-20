import React from 'react';
import { Reveal } from './Reveal';
import { FileTextIcon, CalculatorIcon, MachineIcon, TruckIcon } from './Icons';

const processSteps = [
  { 
    step: "1", 
    title: "Zapytanie", 
    desc: "Prześlij wymiary, wzór i ilości.", 
    icon: FileTextIcon 
  },
  { 
    step: "2", 
    title: "Wycena", 
    desc: "Otrzymasz jasną wycenę projektu.", 
    icon: CalculatorIcon 
  },
  { 
    step: "3", 
    title: "Produkcja", 
    badges: ["Standard 14 dni", "Opcja ekspres (+50%)"], 
    icon: MachineIcon 
  },
  { 
    step: "4", 
    title: "Dostawa", 
    desc: "Odbiór własny lub nasz transport.", 
    icon: TruckIcon 
  }
];

export const Process: React.FC = () => {
  return (
    <section id="proces" className="py-20 md:py-32 bg-stone" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-ink mb-16 text-center">Jak złożyć zamówienie?</h2>
        </Reveal>
        
        <div className="relative">
          {/* Oś czasu - pionowa linia w tle dla mobile (środek okręgów to dokładnie 3rem / 48px) */}
          <div className="absolute top-12 left-12 bottom-12 w-px bg-line z-0 lg:hidden" aria-hidden="true"></div>
          {/* Oś czasu - pozioma linia w tle dla desktopu (od środka pierwszej do środka ostatniej karty) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-line z-0" aria-hidden="true"></div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.step} delay={i * 100}>
                  <div className="relative z-10 flex lg:flex-col gap-6 lg:items-center group">
                    
                    {/* Kontener ikony z kwadratowym tłem bg-stone, które idealnie maskuje linię przebiegającą pod spodem */}
                    <div className="relative bg-stone flex-shrink-0 z-10">
                      <div className="w-24 h-24 rounded-full bg-paper border border-line flex items-center justify-center text-brand group-hover:border-brand/40 group-hover:shadow-sm transition-all duration-300">
                        <Icon className="w-10 h-10" aria-hidden="true" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-stone">
                        {p.step}
                      </div>
                    </div>

                    {/* Treść kroku */}
                    <div className="flex-1 lg:text-center mt-3 lg:mt-0">
                      <h3 className="font-bold text-xl text-ink mb-2">{p.title}</h3>
                      {p.desc && <p className="text-muted leading-relaxed">{p.desc}</p>}
                      
                      {/* Wizualne wyróżnienie czasów realizacji - tzw. "chipy" */}
                      {p.badges && (
                        <div className="flex flex-wrap gap-2 lg:justify-center mt-3">
                          {p.badges.map(b => (
                            <span key={b} className="inline-flex items-center justify-center bg-brand/10 text-brand text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
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