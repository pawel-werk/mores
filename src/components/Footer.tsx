import React from 'react';
import { Logo, LogoFallback } from './Logo';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-graphite text-ash relative overflow-hidden py-10 md:py-12 border-t border-ink">
      
      {/* Tekstury materii B2B premium w stopce */}
      <div className="absolute inset-0 bg-rings opacity-[0.04] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-10 pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 hairline-b">
          
          {/* Kolumna z logo i opisem */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
            <a href="#/" className="inline-block mb-8 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm group">
              {/* Używamy białego wariantu Logo i dodajemy czysty kontrastowy hover */}
              <Logo className="h-6 md:h-7 transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:contrast-125" variant="light" />
              <LogoFallback variant="light" />
            </a>
            <p className="text-ash/60 font-light text-sm md:text-base max-w-sm leading-relaxed">
              Produkcja frontów meblowych i realizacja zleceń nietypowych. Łączymy rzemieślniczą precyzję z nowoczesnym zapleczem technologicznym.
            </p>
          </div>
          
          {/* Kolumna nawigacji */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ash/30 mb-8">Nawigacja</h4>
            <ul className="space-y-4 font-light text-ash/80">
              <li><a href="#oferta" className="hover:text-brand transition-colors inline-block">Oferta</a></li>
              <li><a href="#/galeria" className="hover:text-brand transition-colors inline-block">Galeria realizacji</a></li>
              <li><a href="#/katalog" className="hover:text-brand transition-colors inline-block">Katalog frontów</a></li>
            </ul>
          </div>

          {/* Kolumna kontaktu */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-ash/30 mb-8">Współpraca</h4>
            <ul className="space-y-4 font-light text-ash/80">
              <li><a href="#kontakt" className="hover:text-brand transition-colors inline-block">Kontakt i wycena</a></li>
              <li><a href="#faq" className="hover:text-brand transition-colors inline-block">Częste pytania</a></li>
              <li className="pt-4 mt-4 border-t border-ash/10">
                <a href="mailto:info@mores.pl" className="font-medium text-paper hover:text-brand transition-colors inline-block">info@mores.pl</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Pasek dolny z copyrightem i (TBD) polityką */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 gap-6 text-[11px] font-light text-ash/40">
          <div>
            &copy; {year} mores. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex gap-8 uppercase tracking-widest font-medium text-ash/30">
            {/* Zgodnie z wytycznymi martwe linki usuwamy / komentujemy dopóki nie ma podstron */}
            {/* <a href="/polityka" className="hover:text-ash transition-colors">Polityka prywatności</a> */}
            {/* <a href="/cookies" className="hover:text-ash transition-colors">Cookies</a> */}
            <span>Polityka Prywatności (W przygotowaniu)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};