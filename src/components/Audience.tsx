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
    <section id="klienci" className="py-20 md:py-32 bg-stone" aria-labelledby="audience-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 id="audience-title" className="font-serif text-4xl md:text-5xl text-ink mb-6">
              Dla kogo pracujemy?
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed">
              Jako niezależna manufaktura wspieramy profesjonalistów na każdym etapie realizacji projektów wnętrzarskich.
            </p>
          </div>
        </Reveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex flex-col h-full group lg:border-l lg:border-line lg:px-10 lg:first:pl-0 lg:first:border-l-0">
                  <div className="mb-8 text-ink/40 transition-colors duration-500 group-hover:text-brand">
                    <Icon className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted font-light leading-relaxed">
                    {item.desc}
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