import React from 'react';
import { Reveal } from './Reveal';
import { faqData } from '../data/content';
import { ChevronDown } from './Icons';

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-paper" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 id="faq-title" className="font-serif text-4xl md:text-5xl text-ink mb-6">
              Częste pytania
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed">
              Odpowiedzi na najczęstsze pytania dotyczące współpracy, technologii i logistyki.
            </p>
          </div>
        </Reveal>
        
        <div className="border-t border-line">
          {faqData.map((faq, i) => (
            <Reveal key={i} delay={i * 100}>
              <details className="group border-b border-line overflow-hidden">
                <summary className="flex justify-between items-center text-lg md:text-xl font-serif text-ink cursor-pointer list-none py-6 md:py-8 hover:text-brand focus-visible:outline-none focus-visible:text-brand transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                  <span className="pr-8">{faq.question}</span>
                  <span className="flex-shrink-0 transition-transform duration-500 group-open:rotate-180 text-brand">
                    <ChevronDown className="w-6 h-6" aria-hidden="true" />
                  </span>
                </summary>
                <div className="text-muted font-light leading-relaxed pb-8 md:pr-12">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
};