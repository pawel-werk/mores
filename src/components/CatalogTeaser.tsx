import React from 'react';
import { Reveal } from './Reveal';
import { DownloadIcon } from './Icons';

export const CatalogTeaser: React.FC = () => {
  return (
    <section id="katalog-teaser" className="py-20 md:py-32 bg-brand text-white" aria-labelledby="catalog-teaser-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <h2 id="catalog-teaser-title" className="text-3xl md:text-4xl font-bold mb-6">Katalog kolekcji frontów (PDF)</h2>
          <p className="text-white/80 text-lg mb-8">
            Zapoznaj się z naszymi standardowymi wzorami, rodzajami frezowań i wykończeniami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#/katalog" className="bg-white text-brand px-6 py-3 rounded-lg font-bold hover:bg-stone transition-colors">
              Zobacz katalog online
            </a>
            <a href="/katalog/mores-katalog.pdf" download className="bg-transparent border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
              <DownloadIcon className="w-5 h-5" aria-hidden="true" /> Pobierz PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};