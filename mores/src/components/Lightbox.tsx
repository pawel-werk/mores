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
    
    // Focus trap setup
    containerRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-ink/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Podgląd zdjęcia"
    >
      <div ref={containerRef} tabIndex={-1} className="w-full max-w-6xl relative flex flex-col items-center outline-none">
        
        <div className="w-full flex justify-between items-center text-white mb-4 px-2">
          <span className="text-sm font-medium">{currentIndex + 1} / {total}</span>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition" aria-label="Zamknij">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="relative w-full flex items-center justify-center group h-[70vh] lg:h-[80vh]">
          <button 
            onClick={onPrev} 
            className="absolute left-2 md:-left-12 p-3 bg-ink/50 hover:bg-ink text-white rounded-full transition"
            aria-label="Poprzednie"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          
          <img 
            src={imageSrc} 
            alt={altText} 
            className="max-h-full max-w-full object-contain shadow-2xl rounded-sm"
          />
          
          <button 
            onClick={onNext} 
            className="absolute right-2 md:-right-12 p-3 bg-ink/50 hover:bg-ink text-white rounded-full transition"
            aria-label="Następne"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        
        <div className="mt-4 text-white/80 text-center px-4 max-w-2xl">
          {description}
        </div>
      </div>
    </div>
  );
};