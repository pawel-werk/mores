import React, { useEffect, useState } from 'react';
import { DownloadIcon, ExternalLinkIcon } from '../components/Icons';

export const CatalogPage: React.FC = () => {
  const [pdfError, setPdfError] = useState(false);
  const pdfUrl = "/katalog/mores-katalog.pdf";

  useEffect(() => {
    document.title = "Katalog PDF | mores";
  }, []);

  return (
    <div className="py-12 md:py-20 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-line pb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4">Katalog frontów</h1>
            <p className="text-muted text-lg max-w-xl">Poznaj nasze propozycje frezowań i wykończeń dla Twoich projektów.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
             <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone text-ink px-5 py-2.5 rounded-lg font-medium hover:bg-line transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLinkIcon className="w-5 h-5" /> Nowa karta
            </a>
            <a 
              href={pdfUrl} 
              download 
              className="bg-brand text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              <DownloadIcon className="w-5 h-5" /> Pobierz PDF
            </a>
          </div>
        </header>

        <div className="bg-stone rounded-xl border border-line overflow-hidden mb-16 relative">
          {!pdfError ? (
            <object 
              data={pdfUrl} 
              type="application/pdf" 
              className="w-full h-[60vh] md:h-[80vh]"
              onError={() => setPdfError(true)}
            >
              <div className="p-12 text-center flex flex-col items-center justify-center h-full">
                <p className="text-ink font-medium mb-4">Twoja przeglądarka nie obsługuje podglądu PDF.</p>
                <a href={pdfUrl} download className="bg-brand text-white px-6 py-3 rounded-lg">Pobierz plik</a>
              </div>
            </object>
          ) : (
            <div className="p-20 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-4 text-brand">
                <DownloadIcon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Katalog w przygotowaniu</h2>
              <p className="text-muted">Plik nie został jeszcze wgrany na serwer. Skontaktuj się z nami w celu uzyskania oferty.</p>
            </div>
          )}
        </div>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Jak korzystać z katalogu?</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-soft text-brand rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <h3 className="font-bold">Wybierz wzór (np. F-01)</h3>
                  <p className="text-muted text-sm mt-1">Zwróć uwagę na głębokość frezu oraz opcje uchwytów wpuszczanych.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-soft text-brand rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <h3 className="font-bold">Wybierz wykończenie</h3>
                  <p className="text-muted text-sm mt-1">Oferujemy mat, półmat oraz wysoki połysk. Każdy front może być przygotowany również do lakierowania we własnym zakresie (surowy MDF).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-soft text-brand rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <h3 className="font-bold">Wyślij zapytanie</h3>
                  <p className="text-muted text-sm mt-1">Podaj kod frontu i zestawienie formatek do szybkiej wyceny.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-brand text-white p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Potrzebujesz wyceny konkretnych wzorów?</h3>
            <p className="mb-8 text-white/80">Skopiuj numery wzorów z katalogu, dodaj wymiary i prześlij zapytanie.</p>
            <a href="#kontakt" className="inline-block bg-white text-brand px-6 py-3 rounded-lg font-bold hover:bg-stone transition-colors w-full sm:w-auto">
              Przejdź do formularza
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};