import React, { useEffect } from 'react';
import { Reveal } from './Reveal';
import { companyData } from '../data/content';

export const CncPage: React.FC = () => {
  useEffect(() => {
    document.title = "Usługi CNC | mores";
    window.scrollTo(0, 0);
  }, []);

  const productionFeatures = [
    {
      title: "Nesting i rozkrój płyt",
      desc: "Optymalne wykorzystanie materiału i precyzyjne cięcie CNC."
    },
    {
      title: "Frezowanie CNC",
      desc: "Precyzyjne frezowanie 2D i 3D MDF, płyty, sklejki i PVC."
    },
    {
      title: "Elementy meblowe",
      desc: "Wykonywanie frontów, korpusów, półek i innych elementów na wymiar."
    },
    {
      title: "Komponenty pod montaż",
      desc: "Dokładne wykonanie elementów gotowych do dalszego montażu."
    },
    {
      title: "Fronty frezowane",
      desc: "Estetyka i precyzja w każdym detalu elementów dekoracyjnych."
    },
    {
      title: "Elementy POS i ekspozytory",
      desc: "Funkcjonalne i estetyczne rozwiązania dla przestrzeni komercyjnych."
    },
    {
      title: "Produkcja indywidualna i seryjna",
      desc: "Elastyczność i powtarzalna jakość w małych i większych seriach."
    },
    {
      title: "Wsparcie projektowe",
      desc: "Przygotowanie dokumentacji produkcyjnej (DWG, DXF), optymalizacja detali."
    }
  ];

  const targetAudiences = [
    "Bary & Restauracje",
    "Hotele & Pensjonaty",
    "Sieci Handlowe & Retail",
    "Producenci Mebli & Agencje POS/BTL",
    "Architekci Wnętrz & Deweloperzy",
    "Pracownie Stolarskie & Rzemieślnicy"
  ];

  const workSteps = [
    { title: "Zapytanie i Dokumentacja", desc: "Analizujemy dostarczone przez Ciebie pliki." },
    { title: "Wycena i Dobór Technologii", desc: "Przedstawiamy optymalne rozwiązania produkcyjne." },
    { title: "Wzór i Seria Próbna", desc: "Testujemy detale przed produkcją wieloseryjną." },
    { title: "Produkcja Seryjna i Dostawa", desc: "Zapewniamy terminową realizację i powtarzalność." }
  ];

  const machines = [
    { name: "Centrum Nestingowe CNC", image: "https://pgcnc.pl/cache/images/public/images/shop/940_940_auto/894545_bananaproai_com-202654132.webp" },
    { name: "Okleiniarka Krawędziowa", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" },
    { name: "Formatyzacja", image: "https://www.auto-tap.pl/images/oferta/thumbs/frezowanie.jpg" },
    { name: "Lorem ipsum", image: "https://skladydrzewne.pl/wp-content/uploads/2021/01/plyty-wiorowe.jpg" },
    { name: "Lorem ipsum", image: "https://skladydrzewne.pl/wp-content/uploads/2021/01/plyty-wiorowe.jpg" },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          <div>
            <Reveal>
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand mb-4 block">
                Wsparcie produkcyjne dla firm, seryjne produkcje, podwykonawstwo
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] tracking-tight mb-8">
                Twoja koncepcja naszą precyzją.<br />
                <span className="text-brand">My zamieniamy ją w gotowy produkt.</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-ink/70 font-light leading-relaxed mb-10 max-w-lg">
                Od prototypu po krótkie serie produkcyjne – precyzyjnie, bez zbędnych formalności. Zapewniamy powtarzalność i elastyczne terminy realizacji.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a 
                href="/#kontakt" 
                className="bg-ink text-paper px-8 py-4 text-[15px] font-medium hover:bg-graphite transition-colors inline-flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Przejdź do formularza kontaktowego
              </a>
            </Reveal>
          </div>
          
          <Reveal delay={300} className="relative h-[400px] md:h-[500px] lg:h-[600px] group cursor-pointer">
            <div className="absolute inset-0 bg-ash/20 rounded-sm overflow-hidden flex items-center justify-center">
              <img 
                src="https://pgcnc.pl/cache/images/public/images/shop/940_940_auto/894545_bananaproai_com-202654132.webp" 
                alt="Maszyna PG CNC 2030 ATC" 
                className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal" 
              />
            </div>
            <div className="absolute bottom-8 -left-4 md:-left-12 bg-paper/95 backdrop-blur-sm p-6 shadow-xl border border-ink/5 z-10 max-w-sm transition-transform duration-700 group-hover:-translate-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand mb-2 block">PG CNC 2030 ATC</span>
              <p className="text-sm font-medium text-ink/90 leading-relaxed">
                Wielkoformatowe centra CNC, pole robocze do 3000 x 2000 mm, tolerancja obróbki ±0.1 mm, frezowanie 3D, nesting, wiercenie i rowkowanie.
              </p>
            </div>
          </Reveal>
        </div>

        {/* DLA KOGO PRACUJEMY */}
        <div className="mb-24 md:mb-32">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-12">Dla kogo pracujemy?</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {targetAudiences.map((audience, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="group relative py-8 hairline-t flex items-center hover:bg-ash/20 transition-colors px-4 -mx-4 md:px-6 md:-mx-6 cursor-default">
                  <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-brand scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <span className="text-brand font-serif text-2xl mr-5 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    /
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-ink transition-colors duration-500 group-hover:text-brand">
                    {audience}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CO WYKONUJEMY */}
        <div className="mb-24 md:mb-32">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-12 text-center">Co wykonujemy?</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionFeatures.map((item, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="p-6 hairline-l hairline-t hover:bg-ash/10 transition-colors h-full flex flex-col justify-start">
                  <h3 className="font-serif text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-ink/60 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* JAK PRACUJEMY */}
        <div className="mb-24 md:mb-32">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-12 text-center">Jak pracujemy?</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[28px] left-10 right-10 h-[1px] bg-ink/10" />
            {workSteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100} className="relative text-center">
                <div className="w-14 h-14 bg-paper border border-ink/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 font-serif text-xl text-brand">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-xl text-ink mb-2">{step.title}</h3>
                <p className="text-ink/60 font-light text-sm">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* PARK MASZYNOWY */}
        <div className="mb-24 md:mb-32 bg-graphite p-8 md:p-16 rounded-sm text-paper overflow-hidden relative">
          <div className="absolute inset-0 bg-rings opacity-[0.04] pointer-events-none" aria-hidden="true" />
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-center">Park maszynowy</h2>
            <p className="text-center text-ash/70 font-light mb-12 max-w-2xl mx-auto">
              Nowoczesne zaplecze techniczne gwarantuje precyzję i powtarzalność przy dużych seriach produkcyjnych.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {machines.map((machine, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group cursor-pointer">
                  <div className="w-full aspect-square bg-ink/50 overflow-hidden rounded-sm mb-4 relative">
                    <img 
                      src={machine.image} 
                      alt={machine.name} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 mix-blend-screen group-hover:mix-blend-normal"
                    />
                  </div>
                  <h4 className="text-paper text-sm text-center font-medium">{machine.name}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* MATERIAŁY I MOŻLIWOŚCI */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24 md:mb-32 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-3xl text-ink mb-6">Materiały i możliwości</h2>
              <p className="text-ink/70 font-light leading-relaxed mb-6">
                Realizujemy zarówno pojedyncze zamówienia, jak i produkcję seryjną. Oferujemy indywidualną wycenę dla każdego zlecenia.
              </p>
              <p className="text-ink/70 font-light leading-relaxed">
                Chętnie podejmiemy współpracę jako zaplecze produkcyjne przy większych realizacjach komercyjnych, deweloperskich i prywatnych. Niezależnie czy jesteś stolarzem, architektem, czy reprezentujesz sieć retail – jeśli potrzebujesz mocy produkcyjnych do wykonania nietypowych detali, elementów meblowych czy wykończeń – jesteśmy idealnym partnerem.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-0">
            <Reveal delay={100}>
              <div className="pb-6 hairline-b">
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink/40 mb-2">Obrabiane materiały</h4>
                <p className="text-lg text-ink font-light">MDF, HDF, sklejka, płyty wiórowe, OSB, drewno, laminaty kompaktowe i dekoracyjne, Plexi (PMMA), dibond, PVC spienione i twarde oraz HPL.</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="py-6 hairline-b">
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink/40 mb-2">Produkcja meblowa i komercyjna</h4>
                <p className="text-lg text-ink font-light">Wykonywanie frontów, korpusów, zaawansowanych elementów zabudów, liter przestrzennych, logotypów i ekspozytorów reklamowych.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="py-6 hairline-b">
                <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink/40 mb-2">Frezowanie precyzyjne</h4>
                <p className="text-lg text-ink font-light">Wycinanie niestandardowych kształtów, otworów, rowków oraz zaawansowane frezowanie 2D i 3D z zachowaniem niezwykłej dokładności.</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* BLOK KONTAKTOWY */}
        <Reveal delay={300}>
          <div className="bg-graphite text-paper p-8 md:p-16 lg:p-20 relative overflow-hidden rounded-sm shadow-2xl">
            <div className="absolute inset-0 bg-rings opacity-[0.04] pointer-events-none" aria-hidden="true" />
            <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-10 pointer-events-none" aria-hidden="true" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              
              <div>
                <h2 className="font-serif text-4xl text-paper mb-4">Prześlij pliki do wyceny</h2>
                <p className="text-ash/70 font-light mb-10 text-lg">
                  Przygotujemy szczegółową wycenę i odpowiemy na wszystkie pytania.
                </p>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
                  <div>
                    <h4 className="text-paper font-medium text-sm mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand block"></span> Szybka wycena
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-paper font-medium text-sm mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand block"></span> Wsparcie techniczne
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-paper font-medium text-sm mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand block"></span> Precyzyjne wykonanie
                    </h4>
                  </div>
                  <div>
                    <h4 className="text-paper font-medium text-sm mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand block"></span> Lokalny partner
                    </h4>
                  </div>
                </div>

                <a 
                  href="/#kontakt" 
                  className="inline-block bg-paper text-ink px-8 py-4 text-[15px] font-medium hover:bg-brand hover:text-white transition-colors rounded-sm"
                >
                  Zapytaj o wycenę
                </a>
              </div>

              <div className="flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-paper/10 pt-10 lg:pt-0 lg:pl-16 space-y-8">
                <div>
                  <p className="text-xl font-serif text-paper mb-1">Kamilia Piotrowska</p>
                </div>

                <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="group inline-flex items-center gap-4 text-ash hover:text-brand transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-max">
                  <span className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center group-hover:border-brand/30 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <span className="text-xl font-light tracking-wide">{companyData.phone}</span>
                </a>

                <a href={`mailto:${companyData.email}`} className="group inline-flex items-center gap-4 text-ash hover:text-brand transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-max">
                  <span className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center group-hover:border-brand/30 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                  </span>
                  <span className="text-xl font-light">{companyData.email}</span>
                </a>

                <a href="https://www.google.com/maps/search/?api=1&query=Łąkowa+6,+55-095+Mirków" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 text-ash hover:text-brand transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-max">
                  <span className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center group-hover:border-brand/30 transition-colors shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <span className="text-lg font-light leading-snug">
                    {companyData.addressLine1}<br />{companyData.addressLine2} k. Wrocławia
                  </span>
                </a>
              </div>
              
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};