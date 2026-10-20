import React from 'react';
import { Reveal } from './Reveal';

const services = [
  { title: "Fronty meblowe", desc: "Szeroki wybór wykończeń. Tworzymy fronty frezowane, gładkie, MDF, akrylowe, fornirowane – zgodnie z aktualnymi trendami." },
  { title: "Lakierowanie", desc: "Własna, nowoczesna lakiernia gwarantująca powtarzalność i najwyższą jakość powierzchni matowych i w połysku." },
  { title: "Cięcie i formatowanie", desc: "Precyzyjna wycinarnia przygotowująca materiały do dalszej obróbki szybko i z optymalizacją odpadu." },
  { title: "Zlecenia nietypowe", desc: "Zabudowy na wymiar, jednostkowe serie i realizacje projektów specjalnych, które wymagają indywidualnego podejścia." },
  { title: "Półprodukty", desc: "Bezpośredni dostęp do płyt, oklein i materiałów niezbędnych do szybkiego uruchomienia produkcji." },
  { title: "Logistyka", desc: "Magazynowanie i bezpieczne dostawy własnym transportem do warsztatu stolarza lub na miejsce montażu." },
];

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-20 md:py-32 bg-paper" aria-labelledby="offer-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="offer-title" className="text-3xl md:text-4xl font-bold text-ink mb-4">Nasza oferta</h2>
            <p className="text-muted text-lg">Kompleksowe wsparcie dla branży meblarskiej.</p>
          </div>
        </Reveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 100}>
              <div className="bg-stone border border-line rounded-xl p-8 h-full hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-6">
                  <span className="block w-4 h-4 bg-brand rounded-sm"></span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{svc.title}</h3>
                <p className="text-muted leading-relaxed">{svc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};