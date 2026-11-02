import React, { useEffect, useState } from 'react';
import { ExternalLinkIcon, XIcon } from './Icons';
import { Reveal } from './Reveal';
import { MaterialPanel } from './MaterialPanel';

type CatalogItem = {
  title: string;
  desc: string;
  variant: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile: 'flat' | 'frame' | 'slatted' | 'grooved' | 'integrated-handle' | 'half-round' | 'integrated-handle-full' | 'integrated-handle-centered' | 'integrated-handle-hidden' | 'raised-panel' | 'micro-frame' | 'shaker' | 'complex-raised-panel' | 'double-stepped-panel' | 'vertical-stiles-raised' | 'flat-grooves' | 'concave-grooves' | 'mullion-frame';
  longDesc: string;
};

const catalogFronts: CatalogItem[] = [
  { title: "F-1", desc: "Płaski / Uchwyt pełny", variant: "lithos", profile: "integrated-handle-full", longDesc: "Czysty, płaski front ze zintegrowanym uchwytem frezowanym na całej szerokości krawędzi. Kwintesencja minimalizmu i funkcjonalności." },
  { title: "F-2", desc: "Płaski / Uchwyt asymetryczny", variant: "lithos", profile: "integrated-handle", longDesc: "Minimalistyczny front z precyzyjnie wyfrezowanym, zintegrowanym uchwytem krawędziowym. Łączy w sobie czystość formy z najwyższą ergonomią bezuchwytowego otwierania." },
  { title: "F-3", desc: "Płaski / Uchwyt symetryczny", variant: "lithos", profile: "integrated-handle-centered", longDesc: "Nowoczesny front z wycentrowanym, symetrycznym frezem uchwytowym. Zakończony eleganckimi skosami z obu stron." },
  { title: "F-4", desc: "Płaski / Uchwyt ukryty", variant: "lithos", profile: "integrated-handle-hidden", longDesc: "Front z wycięciem w górnej krawędzi. Front od przodu zachowuje jednolitą, gładką płaszczyznę, a frez uchwytowy pozostaje całkowicie niewidoczny." },
  { title: "F-6", desc: "Ramowy / Wypukła płycina", variant: "lithos", profile: "raised-panel", longDesc: "Klasyczny front ramowy z frezowaną, wypukłą płyciną wewnętrzną. Wprowadza tradycyjny, elegancki charakter do nowoczesnych projektów, nawiązując do najwyższej klasy stolarki angielskiej." },
  { title: "F-7", desc: "Płaski / Mikroramka", variant: "lithos", profile: "micro-frame", longDesc: "Nowoczesny front z niezwykle cienką, subtelną ramką na samych krawędziach. Idealny kompromis między gładkim minimalizmem a klasycznym, ramiakowym stylem." },
  { title: "F-8", desc: "Ramowy / Shaker", variant: "lithos", profile: "shaker", longDesc: "Klasyczny, ponadczasowy front ramiakowy (tzw. Shaker) z głęboko osadzoną, płaską płyciną opadającą pod kątem 45 stopni. Wprowadza architektoniczny rygor i czystość formy." },
  { title: "F-9", desc: "Ramowy / Klasyczny z frezem", variant: "lithos", profile: "complex-raised-panel", longDesc: "Rozbudowany front klasyczny łączący szeroką ramę, podwójne fazy pod kątem 45 stopni (w dół i w górę) oraz dodatkowy, subtelny frez obwiedniowy na zewnętrznej płaszczyźnie." },
  { title: "F-10", desc: "Ramowy / Podwójny schodek", variant: "lithos", profile: "double-stepped-panel", longDesc: "Elegancki front z szeroką ramą, która schodkuje w dół pod kątem 45 stopni, rozdzielona płaską frezą i kolejnym spadkiem, aż do zagłębionej płyciny. Nowoczesna interpretacja tradycyjnego stylu ramiakowego." },
  { title: "F-11", desc: "Ramowy / Pionowe ramiaki", variant: "lithos", profile: "vertical-stiles-raised", longDesc: "Front inspirowany klasyczną konstrukcją z wyraźnymi, pionowymi fugami przechodzącymi przez całą wysokość. Wewnętrzna płycina jest dodatkowo wyprofilowana i wypukła, wprowadzając rzemieślniczy, tradycyjny detal do zabudowy." },
  { title: "F-12", desc: "Ryflowany / Płaskie frezy", variant: "lithos", profile: "flat-grooves", longDesc: "Front ryflowany o geometrycznym, technicznym charakterze. Pionowe, płaskie wycięcia tworzą powtarzalny, nowoczesny rytm. Idealny do urozmaicenia gładkich powierzchni zabudowy." },
  { title: "F-13", desc: "Płaski / Frez obwiedniowy", variant: "lithos", profile: "grooved", longDesc: "Klasyczny, elegancki front z subtelnym, pojedynczym frezem obwiedniowym. Detal, który dodaje wyrafinowania bez obciążania przestrzeni." },
  { title: "F-14", desc: "Ryflowany / Wklęsłe frezy", variant: "lithos", profile: "concave-grooves", longDesc: "Gęste, rytmiczne ryflowanie w formie wklęsłych wcięć oddzielonych wąskimi, płaskimi paskami. Niezwykle taktylna powierzchnia o mocnym, wertykalnym rysunku." },
  { title: "F-15", desc: "Ryflowany / Półwałek", variant: "lithos", profile: "half-round", longDesc: "Niezwykle modne ryflowanie o miękkim, wypukłym profilu półwałka. Tworzy powtarzalny, organiczny wzór, który doskonale rozprasza światło i nadaje wnętrzu przytulny, a zarazem nowoczesny charakter." },
{ title: "F-16", desc: "Witryna / Szprosy krzyżowe", variant: "lithos", profile: "mullion-frame", longDesc: "Klasyczny front witrynowy z krzyżowymi szprosami i fazowanymi krawędziami okienek pod kątem 45 stopni. Nadaje zabudowie lekkości i eksponuje zawartość szafek." },
{ title: "F-17", desc: "Witryna / Szklana tafla", variant: "lithos", profile: "glass-frame", longDesc: "Klasyczna witryna z szeroką ramą, ściętą precyzyjnie pod kątem 45 stopni w kierunku pojedynczej, dużej tafli szkła. Minimalistyczna forma otwierająca przestrzeń wewnątrz szafki." },
{ title: "F-18", desc: "Ramowy / Kratka", variant: "lithos", profile: "lattice-frame", longDesc: "Front ramowy z klasycznym, ukośnym dziurkowaniem (kratką) w płaskiej płycinie. Ścięcie ramki pod kątem 45 stopni płynnie łączy się z dekoracyjnym, ażurowym środkiem, zapewniając wentylację i unikalny styl retro." }
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

            {/* LEWA STRONA: Grafika */}
            <div className="w-full md:w-1/2 bg-ash/30 p-6 pt-12 pb-8 md:p-20 lg:p-24 relative flex items-center justify-center min-h-[340px] md:min-h-0 md:h-full shrink-0">
              <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[340px] aspect-[3/4] rounded-sm shadow-md mt-4 md:mt-0">
                <MaterialPanel variant={selectedFront.variant} profile={selectedFront.profile} className="w-full h-full rounded-sm" />
                
                {/* Lupa powiększająca - PRAWDZIWE SKALOWANIE CSS */}
                <div className="absolute -top-8 -right-10 sm:-top-10 sm:-right-12 md:-top-24 md:-right-28 lg:-top-[130px] lg:-right-[150px] w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-[340px] lg:h-[340px] rounded-full border-[4px] md:border-[8px] border-paper shadow-2xl overflow-hidden z-20 pointer-events-none bg-paper flex items-start justify-end">
                  <div className="origin-top-right transform scale-[1.6] sm:scale-[1.8] md:scale-[2.2] lg:scale-[2.5] mt-4 mr-4 md:mt-10 md:mr-10">
                    <div className="w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] aspect-[3/4] rounded-sm flex-shrink-0">
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

            {/* PRAWA STRONA: Teksty */}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-12">
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