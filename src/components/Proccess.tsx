import React from 'react';
import { Reveal } from './Reveal';

const processSteps = [
  { step: "1", title: "Zapytanie", desc: "Prześlij wymiary, wzór i ilości." },
  { step: "2", title: "Wycena", desc: "Otrzymasz jasną wycenę projektu." },
  { step: "3", title: "Produkcja", desc: "Standard 14 dni. Opcja ekspres (+50%)." },
  { step: "4", title: "Dostawa", desc: "Odbiór własny lub nasz transport." }
];

export const Process: React.FC = () => {
  return (
    <section id="proces" className="py-20 bg-stone" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="process-title" className="text-3xl font-bold text-ink mb-12 text-center">Jak złożyć zamówienie?</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="relative text-center z-10">
                <div className="w-16 h-16 mx-auto bg-brand text-white text-2xl font-bold rounded-full flex items-center justify-center mb-4 border-4 border-stone">
                  {p.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-muted text-sm">{p.desc}</p>
              </div>
            </Reveal>
          ))}
          {/* Linia łącząca na desktopie */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-line z-0"></div>
        </div>
      </div>
    </section>
  );
};