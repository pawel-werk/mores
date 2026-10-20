import React from 'react';
import { Reveal } from './Reveal';
import { FrontIcon, PaintIcon, CutIcon, CustomIcon, LayersIcon, TruckIcon } from './Icons';

const services = [
  { 
    title: "Fronty meblowe", 
    desc: "Szeroki wybór wykończeń. Tworzymy fronty frezowane, gładkie, MDF, akrylowe, fornirowane – zgodnie z aktualnymi trendami.",
    icon: FrontIcon
  },
  { 
    title: "Lakierowanie", 
    desc: "Własna, nowoczesna lakiernia gwarantująca powtarzalność i najwyższą jakość powierzchni matowych i w połysku.",
    icon: PaintIcon
  },
  { 
    title: "Cięcie i formatowanie", 
    desc: "Precyzyjna wycinarnia przygotowująca materiały do dalszej obróbki szybko i z optymalizacją odpadu.",
    icon: CutIcon
  },
  { 
    title: "Zlecenia nietypowe", 
    desc: "Zabudowy na wymiar, jednostkowe serie i realizacje projektów specjalnych, które wymagają indywidualnego podejścia.",
    icon: CustomIcon
  },
  { 
    title: "Półprodukty", 
    desc: "Bezpośredni dostęp do płyt, oklein i materiałów niezbędnych do szybkiego uruchomienia produkcji.",
    icon: LayersIcon
  },
  { 
    title: "Logistyka", 
    desc: "Magazynowanie i bezpieczne dostawy własnym transportem do warsztatu stolarza lub na miejsce montażu.",
    icon: TruckIcon
  },
];

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-20 md:py-32 bg-paper" aria-labelledby="offer-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 border-b border-line pb-8">
            <h2 id="offer-title" className="font-serif text-4xl md:text-5xl text-ink">
              Nasza oferta
            </h2>
            <p className="text-muted text-lg max-w-md font-light leading-relaxed">
              Kompleksowe wsparcie dla branży meblarskiej.
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            const number = String(i + 1).padStart(2, '0');
            
            return (
              <Reveal key={svc.title} delay={i * 100}>
                <div className="group flex flex-col h-full">
                  <div className="flex justify-between items-center border-t border-line pt-5 mb-6 transition-colors duration-500 group-hover:border-brand">
                    <span className="text-sm font-bold uppercase tracking-widest text-ink/30 transition-colors duration-500 group-hover:text-brand">
                      {number}
                    </span>
                    <Icon className="w-8 h-8 text-ink transition-colors duration-500 group-hover:text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-4 transition-colors duration-500 group-hover:text-brand">
                    {svc.title}
                  </h3>
                  <p className="text-muted font-light leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};