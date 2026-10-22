import React, { useEffect } from 'react';
import { XIcon } from './Icons';
import { MaterialPanel } from './MaterialPanel';

type LightboxProps = {
  item: any;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export const Lightbox: React.FC<LightboxProps> = ({ item, currentIndex, total, onClose, onNext, onPrev }) => {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const handleScrollToContact = () => {
    onClose(); 
    setTimeout(() => {
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#kontakt';
      }
    }, 150);
  };

  // Ustawienie domyślnych detali w przypadku ich braku (dla starszych zdjęć w bazie)
  const displayDetails = item.details || [
    { label: 'Kategoria', value: item.category },
    { label: 'Typ wykończenia', value: item.description }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-ink/90 backdrop-blur-sm transition-opacity duration-300">
      
      <div className="relative w-full max-w-[1400px] w-[96vw] bg-paper rounded-sm shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[95dvh] lg:h-[85vh]">
        
        {/* Przycisk ZAMKNIJ */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 lg:top-8 lg:right-8 p-2 text-ink/70 hover:text-brand transition-colors z-50 bg-paper/90 backdrop-blur-md rounded-full shadow-sm"
          aria-label="Zamknij"
        >
          <XIcon className="w-6 h-6 lg:w-8 lg:h-8" aria-hidden="true" />
        </button>

        {/* LEWA STRONA: Zdjęcie i nawigacja */}
        <div className="w-full lg:w-[60%] h-[40vh] lg:h-full relative shrink-0 bg-ash/30 flex items-center justify-center overflow-hidden">
          
          <button onClick={onPrev} className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 p-2 lg:p-4 text-ink hover:text-brand transition-colors z-40 bg-paper/90 backdrop-blur-md rounded-full shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button onClick={onNext} className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 p-2 lg:p-4 text-ink hover:text-brand transition-colors z-40 bg-paper/90 backdrop-blur-md rounded-full shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {item.image ? (
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-[60%] max-w-[340px] aspect-[3/4]">
              <MaterialPanel variant={item.variant || 'bazalt'} profile={item.profile || 'flat'} className="w-full h-full shadow-2xl rounded-sm" />
            </div>
          )}
        </div>

        {/* PRAWA STRONA: Opis, detale i CTA wyśrodkowane */}
        <div className="w-full lg:w-[40%] p-6 sm:p-10 lg:p-16 flex flex-col justify-center items-center text-center lg:text-left lg:items-start overflow-y-auto">
          
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand mb-4 block">
              {item.description}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-2">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-ink/50 text-sm lg:text-base font-light mb-8 lg:mb-10">
                {item.subtitle}
              </p>
            )}
            
            <p className="text-ink/70 font-light leading-relaxed text-sm sm:text-base lg:text-lg mb-12 text-left">
              {item.longDesc || "Ekskluzywna realizacja dopasowana do indywidualnych potrzeb klienta. Wykorzystanie najwyższej jakości materiałów i precyzyjne wykończenie zapewniają ponadczasowy efekt."}
            </p>

            <div className="w-full space-y-4 mb-12 border-t border-ink/10 pt-8 text-left">
              {displayDetails.map((detail: any, idx: number) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 pb-4 border-b border-ink/5 last:border-0">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ink/40">
                    {detail.label}
                  </span>
                  <span className="text-ink text-sm font-medium">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Wyśrodkowany przycisk na środku kolumny */}
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#kontakt" 
                onClick={handleScrollToContact}
                className="inline-block bg-ink text-paper text-center px-8 py-4 text-[14px] lg:text-[15px] font-medium hover:bg-brand hover:text-white transition-colors rounded-sm"
              >
                Zapytaj o wycenę
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};