import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';
import { MaterialPanel } from './MaterialPanel';
import { galleryData } from '../data/gallery';

export const GalleryTeaser: React.FC = () => {
  // Pobieramy 4 zróżnicowane projekty do teasera
  const projects = galleryData.slice(0, 4);

  // Definiujemy zróżnicowane proporcje (aspect ratios) dla fizyczności kafli w teaserze
  const aspectRatios = [
    "aspect-[4/5]",  // Portret
    "aspect-[16/9]", // Pejzaż
    "aspect-square", // Kwadrat
    "aspect-[3/4]"   // Smukły portret
  ];

  return (
    <section id="realizacje" className="py-24 md:py-32 bg-ash overflow-hidden" aria-labelledby="gallery-teaser-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek i link wyrównane na końcach, bez zbędnego szarego podtytułu (cisza) */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 md:mb-20 gap-6">
          <Reveal>
            <h2 id="gallery-teaser-title" className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Nasze realizacje
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a href="#/galeria" className="inline-flex items-center gap-3 text-[15px] font-medium text-ink hover:text-brand transition-colors group">
              Zobacz całą galerię 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

      </div>

      {/* Pas ze scroll-snap, trzymający lewy margines kontenera, ale ucięty (bleed) przy prawej krawędzi ekranu */}
      <Reveal delay={200} variant="clip">
        <div className="pl-4 sm:pl-6 lg:pl-8 ml-auto max-w-7xl relative">
          <div className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[500px] flex flex-col group cursor-pointer"
              >
                <a href="#/galeria" className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ash rounded-sm">
                  {/* Kafel z fizycznym obrazem/materiałem bez ciemnych filtrów */}
                  <div className={`w-full ${aspectRatios[idx]} overflow-hidden rounded-sm shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2`}>
                    <MaterialPanel 
                      variant={project.variant} 
                      profile={project.profile}
                      className="w-full h-full transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtelne, techniczne podpisy poniżej kafla */}
                  <div className="mt-6 flex justify-between items-baseline gap-4 hairline-t pt-4">
                    <h3 className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-brand truncate">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-ink/40 whitespace-nowrap">
                      {project.description}
                    </span>
                  </div>
                </a>
              </div>
            ))}
            
            {/* Pusty element wymuszający padding na samym końcu paska przewijania */}
            <div className="shrink-0 w-4 sm:w-8" aria-hidden="true"></div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};