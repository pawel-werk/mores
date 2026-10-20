import React from 'react';
import { Reveal } from './Reveal';
import { UsersIcon, FactoryIcon, StoreIcon } from './Icons';

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
  }
];

export const Audience: React.FC = () => {
  return (
    <section id="klienci" className="py-20 md:py-32 bg-stone" aria-labelledby="audience-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="audience-title" className="text-3xl md:text-4xl font-bold text-ink mb-16 text-center">Dla kogo pracujemy?</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex flex-col h-full pt-8 border-t-2 border-line hover:border-brand/40 transition-colors duration-300">
                  <div className="mb-6 text-brand">
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-4">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};