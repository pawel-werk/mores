import React, { useEffect, useState } from 'react';
import { DownloadIcon, ExternalLinkIcon } from './Icons';

export const CatalogPage: React.FC = () => {
  const [pdfError, setPdfError] = useState(false);
  const pdfUrl = "/katalog/mores-katalog.pdf";

  useEffect(() => {
    document.title = "Katalog PDF | mores";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 md:py-32 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-8 border-b border-line pb-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Katalog frontów</h1>
            <p className="text-muted text-lg max-w-xl font-light leading-relaxed">
              Poznaj nasze propozycje frezowań i wykończeń dla Twoich projektów.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
             <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border border-line text-ink px-6 py-3.5 text-xs uppercase tracking-widest font-bold hover:border-ink transition-colors flex items-center justify-center gap-3"
            >
              <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" /> Nowa karta
            </a>
            <a 
              href={pdfUrl} 
              download 
              className="bg-ink text-paper px-6 py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-brand transition-colors flex items-center justify-center gap-3"
            >
              <DownloadIcon className="w-4 h-4" aria-hidden="true" /> Pobierz PDF
            </a>
          </div>
        </header>

        <div className="bg-stone border border-line mb-24 relative rounded-sm shadow-sm">
          {!pdfError ? (
            <object 
              data={pdfUrl} 
              type="application/pdf" 
              className="w-full h-[60vh] md:h-[80vh] block"
              onError={() => setPdfError(true)}
            >
              <div className="p-16 text-center flex flex-col items-center justify-center h-full">
                <p className="text-ink font-light mb-6 text-lg">Twoja przeglądarka nie obsługuje podglądu PDF.</p>
                <a href={pdfUrl} download className="bg-ink text-paper px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand transition-colors">
                  Pobierz plik
                </a>
              </div>
            </object>
          ) : (
            <div className="p-20 text-center flex flex-col items-center justify-center min-h-[500px]">
              <div className="w-16 h-16 border border-line flex items-center justify-center mb-6 text-ink/40">
                <DownloadIcon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl mb-4 text-ink">Katalog w przygotowaniu</h2>
              <p className="text-muted font-light leading-relaxed max-w-md mx-auto">
                Plik nie został jeszcze wgrany na serwer. Skontaktuj się z nami w celu uzyskania oferty.
              </p>
            </div>
          )}
        </div>

        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl text-ink mb-10">Jak korzystać z katalogu?</h2>
            <ul className="space-y-0">
              {[
                { title: "Wybierz wzór (np. F-01)", desc: "Zwróć uwagę na głębokość frezu oraz opcje uchwytów wpuszczanych." },
                { title: "Wybierz wykończenie", desc: "Oferujemy mat, półmat oraz wysoki połysk. Każdy front może być przygotowany również do lakierowania we własnym zakresie (surowy MDF)." },
                { title: "Wyślij zapytanie", desc: "Podaj kod frontu i zestawienie formatek do szybkiej wyceny." }
              ].map((step, idx) => (
                <li key={idx} className="flex gap-6 border-t border-line py-6 group">
                  <span className="flex-shrink-0 font-serif text-2xl font-bold text-brand transition-transform duration-500 group-hover:scale-110">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink mb-2 transition-colors duration-500 group-hover:text-brand">{step.title}</h3>
                    <p className="text-muted font-light leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-ink text-paper p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 bg-wood-grain opacity-[0.03] pointer-events-none" aria-hidden="true" />
            
            <div className="relative z-10 text-center">
              <h3 className="font-serif text-3xl mb-6">Potrzebujesz wyceny konkretnych wzorów?</h3>
              <p className="mb-10 text-paper/70 font-light leading-relaxed">
                Skopiuj numery wzorów z katalogu, dodaj wymiary i prześlij zapytanie do naszego zespołu.
              </p>
              <a href="#kontakt" className="inline-block bg-brand text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-brand-dark transition-colors w-full sm:w-auto">
                Przejdź do formularza
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};