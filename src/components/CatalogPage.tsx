import React, { useEffect, useState } from 'react';
import { DownloadIcon, ExternalLinkIcon } from './Icons';
import { Reveal } from './Reveal';

export const CatalogPage: React.FC = () => {
  const [pdfError, setPdfError] = useState(false);
  const pdfUrl = "/katalog/mores-katalog.pdf";

  useEffect(() => {
    document.title = "Katalog PDF | mores";
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToContact = () => {
    setTimeout(() => {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="py-24 md:py-32 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 md:mb-20 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10">
          <Reveal className="lg:w-1/2">
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6">Katalog frontów</h1>
            <p className="text-ink/70 text-lg font-light leading-relaxed">
              Poznaj nasze propozycje frezowań i wykończeń dla Twoich projektów.
            </p>
          </Reveal>
          <Reveal delay={100} className="flex flex-col sm:flex-row gap-6">
             <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-ink hover:text-brand transition-colors relative group inline-flex items-center gap-2"
            >
              <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" /> Nowa karta
              <span className="absolute left-0 -bottom-1.5 w-full h-[1px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a 
              href={pdfUrl} 
              download 
              className="bg-ink text-paper px-8 py-3.5 text-[15px] font-medium hover:bg-graphite transition-colors inline-flex items-center gap-3 rounded-sm"
            >
              <DownloadIcon className="w-4 h-4" aria-hidden="true" /> Pobierz PDF
            </a>
          </Reveal>
        </header>

        <Reveal delay={200} variant="clip">
          <div className="bg-ash/20 hairline-t hairline-b mb-24 relative rounded-sm">
            {!pdfError ? (
              <object 
                data={pdfUrl} 
                type="application/pdf" 
                className="w-full h-[60vh] md:h-[80vh] block"
                onError={() => setPdfError(true)}
              >
                <div className="p-16 text-center flex flex-col items-center justify-center h-full">
                  <p className="text-ink/70 font-light mb-8 text-lg">Twoja przeglądarka nie obsługuje podglądu PDF.</p>
                  <a href={pdfUrl} download className="bg-ink text-paper px-8 py-4 text-[15px] font-medium hover:bg-brand transition-colors rounded-sm">
                    Pobierz plik
                  </a>
                </div>
              </object>
            ) : (
              <div className="p-20 text-center flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 flex items-center justify-center mb-6 text-ink/20">
                  <DownloadIcon className="w-10 h-10" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-3xl mb-4 text-ink">Katalog w przygotowaniu</h2>
                <p className="text-ink/70 font-light leading-relaxed max-w-md mx-auto">
                  Wydanie cyfrowe nie zostało jeszcze wgrane na serwer. Skontaktuj się z nami w celu uzyskania oferty bezpośredniej.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 hairline-t">
            <Reveal>
              <h2 className="font-serif text-3xl text-ink mb-10 pt-8">Jak korzystać z katalogu?</h2>
            </Reveal>
            <div className="space-y-0">
              {[
                { title: "Wybierz wzór", desc: "Zwróć uwagę na głębokość frezu oraz opcje uchwytów wpuszczanych." },
                { title: "Wybierz wykończenie", desc: "Oferujemy mat, półmat oraz wysoki połysk. Każdy front może być przygotowany również w surowym MDF." },
                { title: "Wyślij zapytanie", desc: "Podaj kod frontu i zestawienie formatek do szybkiej wyceny." }
              ].map((step, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="group relative flex gap-8 py-8 hairline-b hover:bg-ash/20 transition-colors duration-500 px-4 -mx-4">
                    {/* Animacja rysowania linii na hover */}
                    <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    <span className="flex-shrink-0 font-serif text-2xl text-ink/20 transition-colors duration-500 group-hover:text-brand">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-ink mb-2 transition-colors duration-500 group-hover:text-brand">{step.title}</h3>
                      <p className="text-ink/70 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <Reveal delay={200} className="h-full">
              <div className="bg-graphite text-ash p-12 md:p-16 relative overflow-hidden h-full flex flex-col justify-center rounded-sm">
                <div className="absolute inset-0 bg-rings opacity-[0.04] pointer-events-none" aria-hidden="true" />
                <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-10 pointer-events-none" aria-hidden="true" />
                
                <div className="relative z-10">
                  <h3 className="font-serif text-3xl text-paper mb-6">Potrzebujesz wyceny konkretnych wzorów?</h3>
                  <p className="mb-10 text-ash/70 font-light leading-relaxed">
                    Skopiuj numery wzorów z katalogu, dodaj wymiary i prześlij zapytanie do naszego zespołu za pomocą formularza.
                  </p>
                  <a 
                    href="#kontakt" 
                    onClick={handleScrollToContact}
                    className="inline-block bg-paper text-ink px-8 py-4 text-[15px] font-medium hover:bg-brand hover:text-white transition-colors rounded-sm"
                  >
                    Przejdź do formularza
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </div>
  );
};