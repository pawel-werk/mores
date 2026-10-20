import React from 'react';
import { Reveal } from './Reveal';

export const Audience: React.FC = () => {
  return (
    <section id="klienci" className="py-20 md:py-32 bg-stone" aria-labelledby="audience-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="audience-title" className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">Dla kogo pracujemy?</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Stolarze i pracownie", desc: "Zleć nam produkcję frontów lub trudnych elementów, a sam skup się na projekcie i montażu u klienta." },
            { title: "Producenci mebli", desc: "Skorzystaj z naszego zaplecza jako wsparcia przy dużych seriach lub specjalistycznych wykończeniach." },
            { title: "Handlowcy i hurtownie", desc: "Rozszerz swoją ofertę o wysokiej jakości fronty meblowe produkowane terminowo i powtarzalnie." }
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="bg-paper p-8 rounded-xl border border-line h-full">
                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};