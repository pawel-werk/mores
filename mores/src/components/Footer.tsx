import React from 'react';
import { Logo, LogoFallback } from './Logo';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper border-t border-line py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="h-8 grayscale opacity-80" />
            <LogoFallback />
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted font-medium">
            <a href="#oferta" className="hover:text-brand">Oferta</a>
            <a href="#/galeria" className="hover:text-brand">Galeria</a>
            <a href="#/katalog" className="hover:text-brand">Katalog PDF</a>
            <a href="#kontakt" className="hover:text-brand">Kontakt</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted/60">
          &copy; {year} mores. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};