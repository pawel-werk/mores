import React from 'react';
import { Logo, LogoFallback } from './Logo';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-ink text-paper relative overflow-hidden py-16 md:py-24 border-t border-line">
      {/* Subtelne tekstury tła (ziarno i słoje) */}
      <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-wood-grain opacity-[0.03] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">
          
          {/* Kolumna z logo i opisem */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
            <a href="#/" className="inline-block mb-6 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm">
              <Logo className="h-8" variant="light" />
              <LogoFallback variant="light" />
            </a>
            <p className="text-paper/50 font-light max-w-sm leading-relaxed">
              Produkcja frontów meblowych i realizacja zleceń nietypowych. Łączymy rzemieślniczą precyzję z nowoczesnym zapleczem technologicznym.
            </p>
          </div>
          
          {/* Kolumna nawigacji */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30 mb-6">Nawigacja</h4>
            <ul className="space-y-4 font-light text-paper/70">
              <li><a href="#oferta" className="hover:text-brand transition-colors inline-block">Oferta</a></li>
              <li><a href="#produkcja" className="hover:text-brand transition-colors inline-block">Park maszynowy</a></li>
              <li><a href="#/galeria" className="hover:text-brand transition-colors inline-block">Galeria realizacji</a></li>
              <li><a href="#/katalog" className="hover:text-brand transition-colors inline-block">Katalog frezowań</a></li>
            </ul>
          </div>

          {/* Kolumna kontaktu */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30 mb-6">Współpraca</h4>
            <ul className="space-y-4 font-light text-paper/70">
              <li><a href="#kontakt" className="hover:text-brand transition-colors inline-block">Kontakt i wycena</a></li>
              <li><a href="#faq" className="hover:text-brand transition-colors inline-block">Częste pytania</a></li>
              <li className="pt-4 mt-4 border-t border-white/10">
                <a href="mailto:info@mores.pl" className="font-medium text-paper hover:text-brand transition-colors inline-block">info@mores.pl</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Pasek dolny z copyrightem i polityką */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 gap-6 text-xs font-light text-paper/40">
          <div>
            &copy; {year} mores. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex gap-6 uppercase tracking-widest font-bold text-paper/30">
            <a href="#" className="hover:text-paper transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-paper transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};