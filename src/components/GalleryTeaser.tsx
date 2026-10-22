import React, { useState, useEffect } from 'react';
import { XIcon } from './Icons';
import { Reveal } from './Reveal';

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  details: { label: string; value: string }[];
};

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Szałwia i Drewno',
    subtitle: 'Dom pod miastem',
    category: 'Kuchnia / Ryflowania',
    image: 'https://i.postimg.cc/6pJTtTbK/DSC-5246.jpg',
    description: 'Projekt nowoczesnej kuchni łączącej ryflowane fronty w odcieniu szałwii z ciepłym, naturalnym drewnem. Precyzyjne frezowania dodają głębi i tekstury, tworząc przytulne, a zarazem niezwykle eleganckie wnętrze, w którym rzemiosło gra główne skrzypce.',
    details: [
      { label: 'Fronty', value: 'Ryflowane / Gładkie' },
      { label: 'Wykończenie', value: 'Lakier matowy / Naturalny fornir' },
      { label: 'Detale', value: 'Frezowanie asymetryczne' }
    ]
  },
  {
    id: '2',
    title: 'Ciemna Elegancja',
    subtitle: 'Apartament pokazowy',
    category: 'Kuchnia / Lamele',
    image: 'https://i.postimg.cc/433YFqFj/DSC-5394.jpg',
    description: 'Ekskluzywna zabudowa kuchenna oparta na głębokiej czerni i strukturze drobnych lameli. Połączenie ciemnego, szczotkowanego drewna z monumentalną, kamienną wyspą podkreśla luksusowy i bezkompromisowy charakter otwartej przestrzeni.',
    details: [
      { label: 'Fronty', value: 'Lamele / Płaskie' },
      { label: 'Wykończenie', value: 'Fornir barwiony / Ultramat' },
      { label: 'Detale', value: 'Zintegrowane podcięcia' }
    ]
  },
  {
    id: '3',
    title: 'Grafitowy Minimalizm',
    subtitle: 'Loft industrialny',
    category: 'Zabudowa / Gładki mat',
    image: 'https://i.postimg.cc/FzvmwJsq/DSC-5540.jpg',
    description: 'Monochromatyczna, minimalistyczna kuchnia w głębokim graficie. Gładkie, matowe powierzchnie o podwyższonej odporności na ślady palców idealnie wpisują się w nowoczesną architekturę, stanowiąc czyste tło dla reszty wyposażenia.',
    details: [
      { label: 'Fronty', value: 'Płaskie' },
      { label: 'Wykończenie', value: 'Głęboki mat' },
      { label: 'Detale', value: 'Bezuchwytowy system Tip-On' }
    ]
  },
  {
    id: '4',
    title: 'Jasna Klasyka',
    subtitle: 'Rezydencja Konstancin',
    category: 'Kuchnia / Shaker',
    image: 'https://i.postimg.cc/MH6Ny0GB/DSC-6492.jpg',
    description: 'Ponadczasowa, jasna kuchnia z frontami ramiakowymi inspirowanymi stylem shaker. Klasyczna elegancja przełamanej bieli połączona z mosiężnymi uchwytami i grubymi, kamiennymi blatami tworzy wyjątkowo jasną, prestiżową strefę dzienną.',
    details: [
      { label: 'Fronty', value: 'Ramowe (Klasyczny Shaker)' },
      { label: 'Wykończenie', value: 'Lakier półmatowy' },
      { label: 'Detale', value: 'Klasyczne proporcje ramiaka' }
    ]
  }
];

export const GalleryTeaser: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject) setActiveProject(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    if (activeProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <section id="realizacje" className="py-24 md:py-32 bg-paper relative">
      
      {/* Modal detalu realizacji */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-ink/90 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-[1400px] w-[96vw] bg-paper rounded-sm shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[95dvh] lg:h-[85vh]">
            
            <button 
              onClick={() => setActiveProject(null)} 
              className="absolute top-4 right-4 lg:top-8 lg:right-8 p-2 text-paper hover:text-brand transition-colors z-50 bg-ink/50 backdrop-blur-md rounded-full"
              aria-label="Zamknij"
            >
              <XIcon className="w-6 h-6 lg:w-8 lg:h-8" aria-hidden="true" />
            </button>

            {/* Zdjęcie na pełną wysokość */}
            <div className="w-full lg:w-[60%] h-[40vh] lg:h-full relative shrink-0">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Opis */}
            <div className="w-full lg:w-[40%] p-6 sm:p-10 lg:p-16 flex flex-col overflow-y-auto">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand mb-4 block">
                {activeProject.category}
              </span>
              <h3