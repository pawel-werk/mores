import React from 'react';
import { Reveal } from './Reveal';
import { faqData } from '../data/content';
import { ChevronDown } from './Icons';

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-paper" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">Częste pytania</h2>
        </Reveal>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <Reveal key={i} delay={i * 100}>
              <details className="group border border-line rounded-lg bg-stone overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-ink hover:text-brand focus-visible:outline-brand">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-muted" />
                  </span>
                </summary>
                <div className="text-muted p-6 pt-0 leading-relaxed border-t border-line/50">
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