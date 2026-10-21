import React from 'react';
import { Reveal } from './Reveal';
import { faqData } from '../data/content';

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-paper relative z-10" aria-labelledby="faq-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Lewa kolumna - Sticky Nagłówek */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <Reveal>
              <h2 id="faq-title" className="font-serif text-4xl md:text-5xl text-ink leading-tight">
                Częste pytania
              </h2>
              <p className="text-ink/70 text-lg font-light leading-relaxed mt-6 max-w-sm">
                Odpowiedzi na najczęstsze pytania dotyczące współpracy, technologii i logistyki.
              </p>
            </Reveal>
          </div>
          
          {/* Prawa kolumna - Akordeon oparty na natywnym tagu details */}
          <div className="lg:col-span-8">
            <div className="hairline-t">
              {faqData.map((faq, i) => (
                <Reveal key={i} delay={i * 100}>
                  {/* Atrybut 'name' pozwala na automatyczne zamykanie pozostałych zakładek w nowoczesnych przeglądarkach */}
                  <details name="faq-accordion" className="group hairline-b overflow-hidden marker:content-['']">
                    <summary className="flex justify-between items-center text-xl md:text-2xl font-serif text-ink cursor-pointer list-none py-8 hover:text-brand focus-visible:outline-none focus-visible:text-brand transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                      <span className="pr-8">{faq.question}</span>
                      
                      {/* Architektoniczna ikona Plus/Minus budowana w czystym CSS */}
                      <span className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
                        {/* Pozioma linia (zawsze widoczna, w kolorze brandu) */}
                        <span className="absolute w-4 h-[1.5px] bg-brand transition-transform duration-500 ease-out" />
                        {/* Pionowa linia (znika/obraca się po otwarciu, tworząc minus) */}
                        <span className="absolute w-[1.5px] h-4 bg-ink transition-transform duration-500 ease-out group-open:rotate-90 group-open:scale-0" />
                      </span>
                    </summary>
                    
                    {/* Wewnętrzny kontener z miękkim pojawieniem się treści */}
                    <div className="text-ink/70 font-light text-lg leading-relaxed pb-10 md:pr-16 opacity-0 -translate-y-2 group-open:opacity-100 group-open:translate-y-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {faq.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};