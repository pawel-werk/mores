import React, { useEffect, useRef } from 'react';
import { XIcon } from './Icons';

interface LightboxProps {
  imageSrc: string;
  altText: string;
  description: string;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ imageSrc, altText, description, currentIndex, total, onClose, onNext, onPrev }) => {
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
      className="fixed inset-0 z-50 bg-ink/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd zdjęcia"
    >
      <div ref={containerRef} tabIndex={-1} className="w-full max-w-7xl h-full relative flex flex-col items-center outline-none">
        
        <div className="w-full flex justify-between items-center text-paper mb-6 px-4 absolute top-0 z-10">
          <span className="text-xs uppercase tracking-widest font-bold opacity-50">{currentIndex + 1} / {total}</span>
          <button onClick={onClose} className="p-3 hover:bg-white/10 transition-colors" aria-label="Zamknij">
            <XIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        <div className="relative w-full flex-1 flex items-center justify-center group">
          <button 
            onClick={onPrev} 
            className="absolute left-0 p-4 text-paper/50 hover:text-paper transition-colors z-10"
            aria-label="Poprzednie"
          >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <img 
            src={imageSrc} 
            alt={altText} 
            className="max-h-full max-w-full object-contain shadow-2xl"
          />
          
          <button 
            onClick={onNext} 
            className="absolute right-0 p-4 text-paper/50 hover:text-paper transition-colors z-10"
            aria-label="Następne"
          >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        
        <div className="mt-6 text-paper text-center px-4 max-w-2xl font-serif text-xl tracking-wide">
          {description}
        </div>
      </div>
    </div>
  );
};