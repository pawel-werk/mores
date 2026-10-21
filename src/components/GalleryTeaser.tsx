import React from 'react';
import { Reveal } from './Reveal';
import { ArrowRight } from './Icons';
import { MaterialPanel } from './MaterialPanel';
import { galleryData } from '../data/gallery';

export const GalleryTeaser: React.FC = () => {
  // Pobieramy dokładnie 4 realizacje zgodnie z założeniem
  const projects = galleryData.slice(0, 4);

  return (
    <section id="realizacje" className="py-12 md:py-16 bg-ash overflow-hidden" aria-labelledby="gallery-teaser-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100} variant="clip">
              <div className="group cursor-pointer">
                <a href="#/galeria" className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-ash rounded-sm">
                  
                  {/* Pusty prostokąt symulujący materiał (proporcja pionowa) */}
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-sm shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                    <MaterialPanel 
                      variant={project.variant} 
                      profile={project.profile}
                      className="w-full h-full transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="mt-5 flex flex-col gap-1 hairline-t pt-3">
                    <h3 className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-brand truncate">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-ink/40 whitespace-nowrap">
                      {project.description}
                    </span>
                  </div>
                  
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
    </section>
  );
};