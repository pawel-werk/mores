import React, { useEffect, useRef } from 'react';
import { XIcon } from './Icons';
import { GalleryItem } from '../data/gallery';
import { MaterialPanel } from './MaterialPanel';

interface LightboxProps {
  item: GalleryItem;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, currentIndex, total, onClose, onNext, onPrev }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    containerRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-graphite/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd zdjęcia"
    >
      <div ref={containerRef} tabIndex={-1} className="w-full max-w-7xl h-full relative flex flex-col items-center outline-none">
        
        <div className="w-full flex justify-between items-center text-ash mb-6 px-4 absolute top-0 z-10">
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">{currentIndex + 1} / {total}</span>
          <button onClick={onClose} className="p-2 text-ash/60 hover:text-brand transition-colors" aria-label="Zamknij">
            <XIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="relative w-full flex-1 flex items-center justify-center group my-16">
          <button 
            onClick={onPrev} 
            className="absolute left-0 p-4 text-ash/30 hover:text-brand transition-colors z-10 hidden md:block outline-none focus-visible:text-brand"
            aria-label="Poprzednie"
          >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div className="w-full max-w-3xl aspect-square md:aspect-[4/3] shadow-2xl relative">
             {/* Pełne wsparcie dla wygenerowanych paneli ORAZ zwykłych zdjęć */}
             <MaterialPanel 
               src={item.src}
               variant={item.variant}
               profile={item.profile}
               className="w-full h-full"
             />
          </div>
          
          <button 
            onClick={onNext} 
            className="absolute right-0 p-4 text-ash/30 hover:text-brand transition-colors z-10 hidden md:block outline-none focus-visible:text-brand"
            aria-label="Następne"
          >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        
        <div className="text-center px-4 max-w-2xl">
          <h3 className="font-serif text-2xl text-paper mb-2">{item.title}</h3>
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-ash/50">{item.description}</p>
        </div>
      </div>
    </div>
  );
};