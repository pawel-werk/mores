import React from 'react';
import { Reveal } from './Reveal';
import { UsersIcon, FactoryIcon, StoreIcon, ArchitectIcon } from './Icons';

const audiences = [
  { 
    title: "Stolarze i pracownie", 
    desc: "Zleć nam produkcję frontów lub trudnych elementów, a sam skup się na projekcie i montażu u klienta.",
    icon: UsersIcon
  },
  { 
    title: "Producenci mebli", 
    desc: "Skorzystaj z naszego zaplecza jako wsparcia przy dużych seriach lub specjalistycznych wykończeniach.",
    icon: FactoryIcon
  },
  { 
    title: "Handlowcy i hurtownie", 
    desc: "Rozszerz swoją ofertę o wysokiej jakości fronty meblowe produkowane terminowo i powtarzalnie.",
    icon: StoreIcon
  },
  {
    title: "Architekci i projektanci",
    desc: "Zrealizujemy Twoje autorskie koncepcje i nietypowe wizje projektowe z dbałością o precyzję i każdy detal wykończenia.",
    icon: ArchitectIcon
  }
];

export const Audience: React.FC = () => {
  return (
    <section id="klienci" className="py-12 md:py-16 bg-paper" aria-labelledby="audience-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="mb-16 md:mb-24">
            <h2 id="audience-title" className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Dla kogo pracujemy?
            </h2>
          </div>
        </Reveal>
        
        <div className="hairline-t">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group relative flex flex-col md:flex-row md:items-center gap-6 py-10 md:py-12 hairline-b hover:bg-ash/20 transition-colors duration-500 px-4 md:px-8 -mx-4 md:mx-0">
                  
                  {/* Animowana linia akcentowa rysująca się na hover */}
                  <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />

                  {/* Tytuł - duża typografia, 1/3 szerokości */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <h3 className="font-serif text-3xl md:text-4xl text-ink transition-colors duration-500 group-hover:text-brand">
                      {item.title}
                    </h3>
                  </div>

                  {/* Opis - 1/2 szerokości */}
                  <div className="md:flex-1 md:pr-12 mt-2 md:mt-0">
                    <p className="text-ink/70 font-light text-lg leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>

                  {/* Ikona - wyrównana do prawej na desktopie */}
                  <div className="hidden md:flex flex-shrink-0 justify-end items-center text-ink/20 transition-colors duration-500 group-hover:text-brand">
                    <Icon className="w-10 h-10 transform transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  </div>
                  
                </div>
              </Reveal>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};