import React, { useEffect } from 'react';
import { ExternalLinkIcon } from './Icons';
import { Reveal } from './Reveal';
import { MaterialPanel } from './MaterialPanel';

type CatalogItem = {
  title: string;
  desc: string;
  variant: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile: 'flat' | 'frame' | 'slatted';
};

const catalogFronts: CatalogItem[] = [
  { title: "Lumina 01", desc: "Płaski / Gładki mat", variant: "lumina", profile: "flat" },
  { title: "Lumina 02", desc: "Ramowy / Klasyczny Shaker", variant: "lumina", profile: "frame" },
  { title: "Lumina 03", desc: "Ryflowany / Drobne lamele", variant: "lumina", profile: "slatted" },
  
  { title: "Bazalt 01", desc: "Płaski / Głęboki ultramat", variant: "bazalt", profile: "flat" },
  { title: "Bazalt 02", desc: "Ramowy / Szeroka rama", variant: "bazalt", profile: "frame" },
  { title: "Bazalt 03", desc: "Ryflowany / Asymetryczny", variant: "bazalt", profile: "slatted" },
  
  { title: "Tundra 01", desc: "Fornir / Dąb naturalny", variant: "tundra", profile: "flat" },
  { title: "Tundra 02", desc: "Fornir / Wąska ramka", variant: "tundra", profile: "frame" },
  { title: "Tundra 03", desc: "Fornir / Szczotkowany", variant: "tundra", profile: "slatted" },
  
  { title: "Lithos 01", desc: "Płaski / Kamienny beż", variant: "lithos", profile: "flat" },
  { title: "Lithos 02", desc: "Ramowy / Podwójny frez", variant: "lithos", profile: "frame" },
  { title: "Lithos 03", desc: "Ryflowany / Szeroka fala", variant: "lithos", profile: "slatted" },
  
  { title: "Magma 01", desc: "Płaski / Akcent satynowy", variant: "magma", profile: "flat" },
  { title: "Magma 02", desc: "Ramowy / Ukryty uchwyt", variant: "magma", profile: "frame" },
  { title: "Magma 03", desc: "Ryflowany / Wysoki kontrast", variant: "magma", profile: "slatted" },
  
  { title: "Opal 01", desc: "Płaski / Biel perłowa", variant: "lumina", profile: "flat" },
  { title: "Obsydian 01", desc: "Płaski / Czarny metalik", variant: "bazalt", profile: "flat" },
  { title: "Agat 01", desc: "Fornir / Orzech", variant: "tundra", profile: "flat" }
];

export const CatalogPage: React.FC = () => {
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
    <div className="pt-12 md:pt-16 pb-16 md:pb-24 bg-paper min-h-screen">
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
              <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" /> Otwórz PDF w nowej karcie
              <span className="absolute left-0 -bottom-1.5 w-full h-[1px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </Reveal>
        </header>

        <section className="mb-24">
          <Reveal>
            <div className="flex justify-between items-end mb-10 hairline-b pb-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-ink">Baza wykończeń</h2>
                <p className="text-ink/60 font-light mt-4">Poglądowe zestawienie frezowań, fornirów i powłok lakierniczych.</p>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-12">
            {catalogFronts.map((item, idx) => (
              <Reveal key={idx} delay={(idx % 6) * 50} variant="clip">
                <div className="group cursor-pointer">
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-sm shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
                    <MaterialPanel 
                      variant={item.variant} 
                      profile={item.profile}
                      className="w-full h-full transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 hairline-t pt-3">
                    <h3 className="font-serif text-lg text-ink transition-colors duration-300 group-hover:text-brand">
                      {item.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-ink/40 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

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