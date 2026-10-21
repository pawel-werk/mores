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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-ink/90 backdrop-blur-sm transition-