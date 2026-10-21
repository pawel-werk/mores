import React, { useEffect, useState } from 'react';
import { ExternalLinkIcon, XIcon } from './Icons';
import { Reveal } from './Reveal';
import { MaterialPanel } from './MaterialPanel';

type CatalogItem = {
  title: string;
  desc: string;
  variant: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile: 'flat' | 'frame' | 'slatted';
  longDesc: string;
};

const catalogFronts: CatalogItem[] = [
  { title: "Lumina", desc: "Płaski / Gładki mat", variant: "lumina", profile: "flat", longDesc: "Minimalistyczny front o jedwabiście gładkiej powierzchni. Idealnie rozprasza światło, nadając wnętrzu nowoczesny, czysty charakter. Doskonały wybór do bezuchwytowych systemów zabudowy." },
  { title: "Silva", desc: "Ramowy / Klasyczny Shaker", variant: "lumina", profile: "frame", longDesc: "Klasyczny profil ramiakowy inspirowany stylem Shaker. Łączy w sobie tradycyjne rzemiosło z nowoczesną precyzją wykonania. Ponadczasowy design dla eleganckich projektów." },
  { title: "Ignis", desc: "Ryflowany / Drobne lamele", variant: "lumina", profile: "slatted", longDesc: "Precyzyjnie frezowane, drobne lamele tworzące wyrazistą teksturę. Gra światłocienia nadaje powierzchni niezwykłą dynamikę. Świetny akcent dekoracyjny w nowoczesnych wnętrzach." },
  
  { title: "Bazalt", desc: "Płaski / Głęboki ultramat", variant: "bazalt", profile: "flat", longDesc: "Głęboki, matowy finisz o podwyższonej odporności na zarysowania. Pochłania światło, tworząc niezwykle nastrojowy i wyrafinowany klimat. Idealna baza do loftowych i męskich aranżacji." },
  { title: "Granit", desc: "Ramowy / Szeroka rama", variant: "bazalt", profile: "frame", longDesc: "Masywna, szeroka rama nadająca frontom solidny i monumentalny wygląd. Podkreśla luksusowy charakter zabudowy. Świetnie komponuje się z elementami z mosiądzu lub ciemnego kamienia." },
  { title: "Onyks", desc: "Ryflowany / Asymetryczny", variant: "bazalt", profile: "slatted", longDesc: "Asymetryczny układ ryflowania przełamujący standardowe schematy. Wprowadza do wnętrza intrygujący rytm i geometryczną nowoczesność. Wyjątkowy wybór dla odważnych projektantów." },
  
  { title: "Tundra", desc: "Fornir / Dąb naturalny", variant: "tundra", profile: "flat", longDesc: "Starannie wyselekcjonowany fornir dębowy o naturalnym usłojeniu. Wprowadza do wnętrza ciepło i autentyczność prawdziwego drewna. Zabezpieczony wysokiej klasy lakierem matowym." },
  { title: "Taiga", desc: "Fornir / Wąska ramka", variant: "tundra", profile: "frame", longDesc: "Nowoczesne połączenie naturalnego drewna z bardzo wąską, subtelną ramką. Harmonijnie łączy tradycję z minimalizmem. Detal, który przyciąga wzrok i świadczy o precyzji rzemiosła." },
  { title: "Borea", desc: "Fornir / Szczotkowany", variant: "tundra", profile: "slatted", longDesc: "Mocno szczotkowana powierzchnia forniru, która podkreśla haptyczną strukturę drewna. Front, którego nie tylko dobrze się ogląda, ale i czuje pod palcami. Prawdziwe rzemiosło w nowym wydaniu." },
  
  { title: "Lithos", desc: "Płaski / Kamienny beż", variant: "lithos", profile: "flat", longDesc: "Kamienny, ciepły beż inspirowany naturą. Kolorystyka, która koi zmysły i stanowi idealne tło dla reszty wyposażenia. Świetna alternatywa dla czystej, chłodnej bieli." },
  { title: "Petra", desc: "Ramowy / Podwójny frez", variant: "lithos", profile: "frame", longDesc: "Unikalny, podwójny frez tworzący schodkową strukturę wewnątrz ramy. Dodaje frontom architektonicznej głębi i klasycznej elegancji. Detal, który mocno wyróżnia ten model na tle standardów." },
  { title: "Terra", desc: "Ryflowany / Szeroka fala", variant: "lithos", profile: "slatted", longDesc: "Szeroka, łagodna fala frezowania o miękkich przejściach. Tworzy organiczną, uspokajającą strukturę na powierzchni mebla. Idealne rozwiązanie do wnętrz w stylu japandi lub wabi-sabi." },
  
  { title: "Magma", desc: "Płaski / Akcent satynowy", variant: "magma", profile: "flat", longDesc: "Wyjątkowe wykończenie z subtelnym, satynowym refleksem. Powierzchnia delikatnie odbija światło, ożywiając przestrzeń. Niezwykle łatwa w utrzymaniu czystości dzięki gładkiej strukturze." },
  { title: "Vulcan", desc: "Ramowy / Ukryty uchwyt", variant: "magma", profile: "frame", longDesc: "Innowacyjny front ze zintegrowanym, ukrytym podcięciem zamiast klasycznego uchwytu. Czysta forma i pełna funkcjonalność w jednym. Zapewnia minimalistyczny wygląd bez kompromisów." },
  { title: "Caldera", desc: "Ryflowany / Wysoki kontrast", variant: "magma", profile: "slatted", longDesc: "Głębokie, mocno kontrastujące frezy tworzące wyrazisty, architektoniczny rytm. Front, który staje się głównym bohaterem przestrzeni. Skrojony z myślą o wyrazistych i prestiżowych realizacjach." },
  
  { title: "Opal", desc: "Płaski / Biel perłowa", variant: "lumina", profile: "flat", longDesc: "Chłodna, perłowa biel o niezwykłej głębi. Rozświetla mniejsze pomieszczenia i optycznie powiększa przestrzeń. Ponadczasowa klasyka w absolutnie najwyższym standardzie lakierowania." },
  { title: "Obsydian", desc: "Płaski / Czarny metalik", variant: "bazalt", profile: "flat", longDesc: "Czarny, głęboki lakier z delikatną, metaliczną poświatą widoczną w mocnym słońcu. Kwintesencja luksusu i tajemniczości. Front zaprojektowany dla najbardziej wymagających inwestorów." },
  { title: "Agat", desc: "Fornir / Orzech", variant: "tundra", profile: "flat", longDesc: "Szlachetny fornir orzechowy o bogatej, czekoladowej kolorystyce i eleganckim usłojeniu. Wnosi do wnętrza atmosferę prestiżu i klasycznego piękna. Precyzyjnie pasowany wzór na stykach." }
];

export const CatalogPage: React.FC = () => {
  const [selectedFront, setSelectedFront] = useState<CatalogItem | null>(null);
  const pdfUrl = "/katalog/mores-katalog.pdf";

  useEffect(() => {
    document.title = "Katalog PDF | mores";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedFront) setSelectedFront(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    
    if (selectedFront) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedFront]);

  const handleScrollToContact = () => {
    setTimeout(() => {
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="pt-12 md:pt-16 pb-16 md:pb-24 bg-paper min-h-screen">
      
      {/* --- MODAL DETALU FRONTU --- */}
      {selectedFront && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-ink/90 backdrop-blur-sm transition-opacity duration-300">
          
          <div className="relative w-full max-w-[1600px] w-[98vw] bg-paper rounded-sm shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[95dvh] md:h-[94vh]">
            
            <button 
              onClick={() => setSelectedFront(null)} 
              className="absolute top-3 right-3 md:top-8 md:right-8 p-2 text-ink/70 hover:text-brand transition-colors z-50 bg-paper/90 md:bg-paper/50 backdrop-blur-md rounded-full shadow-sm md:shadow-none"
              aria-label="Zamknij podgląd"
            >
              <XIcon className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
            </button>

            {/* LEWA STRONA: Grafiki */}
            <div className="w-full md:w-1/2 bg-ash/30 p-6 pt-12 pb-8 md:p-20 lg:p-24 relative flex items-center justify-center min-h-[340px] md:min-h-0 md:h-full shrink-0">
              
              {/* DODATKOWE ZDJĘCIE CAŁEGO FRONTU: czysta bryła, 1:1 jak z katalogu, wkomponowana w róg */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-12 md:left-12 w-20 sm:w-24 md:w-32 lg:w-40 aspect-[3/4] rounded-sm shadow-xl bg-paper z-30 pointer-events-none transition-transform duration-300 hover:scale-105 border-2 md:border-4 border-paper/50">
                <MaterialPanel variant={selectedFront.variant} profile={selectedFront.profile} className="w-full h-full rounded-sm" />
              </div>

              {/* GŁÓWNE ZDJĘCIE Z LUPĄ (Zoom) */}
              <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[340px] aspect-[3/4] rounded-sm shadow-md mt-4 md:mt-0">
                <MaterialPanel variant={selectedFront.variant} profile={selectedFront.profile} className="w-full h-full rounded-sm" />
                
                {/* Kółko z Zoomem */}
                <div className="absolute -top-8 -right-10 sm:-top-10 sm:-right-12 md:-top-24 md:-right-28 lg:-top-[130px] lg:-right-[150px] w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-[340px] lg:h-[340px] rounded-full border-[4px] md:border-[8px] border-paper shadow-2xl overflow-hidden z-20 pointer-events-none bg-paper">
                  <div className="w-full h-full flex justify-end items-start pt-4 pr-4 md:pt-10 md:pr-10 lg:pt-12 lg:pr-12">
                    <div className="w-[200%] md:w-[220%] lg:w-[240%] aspect-[3/4] flex-shrink-0 shadow-sm rounded-sm overflow-hidden">
                      <MaterialPanel 
                        variant={selectedFront.variant} 
                        profile={selectedFront.profile} 
                        className="w-full h-full" 
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* PRAWA STRONA: Teksty i wyśrodkowane CTA */}
            <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center text-center md:text-left overflow-y-auto">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-ink mb-1 md:mb-4">{selectedFront.title}</h2>
              <p className="text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-widest font-bold text-brand mb-3 md:mb-10">{selectedFront.desc}</p>
              
              <p className="text-ink/70 font-light leading-snug md:leading-relaxed mb-4 md:mb-16 text-[14px] sm:text-[15px] md:text-xl lg:text-2xl text-left">
                {selectedFront.longDesc}
              </p>

              <a 
                href="#kontakt" 
                onClick={(e) => {
                  setSelectedFront(null);
                  handleScrollToContact();
                }}
                className="bg-ink text-paper px-6 py-3 md:px-12 md:py-5 text-[14px] md:text-lg font-medium hover:bg-brand transition-colors rounded-sm inline-block text-center w-max mx-auto mt-1 md:mt-4"
              >
                Zapytaj o ten front
              </a>
            </div>

          </div>
        </div>
      )}

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
                <div className="group cursor-pointer" onClick={() => setSelectedFront(item)}>
                  <div className="w-full aspect-[3/4] rounded-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:scale-[1.03] shadow-sm group-hover:shadow-lg">
                    <MaterialPanel 
                      variant={item.variant} 
                      profile={item.profile}
                      className="w-full h-full rounded-sm"
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

        <section className="grid lg:grid-cols-12 gap-16 items-center">
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
            <Reveal delay={200}>
              <div className="bg-graphite text-ash p-12 md:p-16 relative overflow-hidden flex flex-col justify-center rounded-sm">
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