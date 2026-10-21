import React from 'react';

export type MaterialVariant = 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
export type ProfileType = 'flat' | 'frame' | 'slatted';

interface MaterialPanelProps {
  src?: string;
  alt?: string;
  variant?: MaterialVariant;
  profile?: ProfileType;
  className?: string;
}

export const MaterialPanel: React.FC<MaterialPanelProps> = ({
  src,
  alt = "Próbka frontu",
  variant = 'bazalt',
  profile = 'flat',
  className = ''
}) => {
  // Jeśli dostarczono prawdziwe zdjęcie, komponent automatycznie się w nie zamienia
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-sm ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  // Symulacja materiałów (z geologiczno-mineralnym nazewnictwem)
  const getVariantStyle = () => {
    switch (variant) {
      case 'bazalt': return 'bg-graphite'; // Ciepły, głęboki orzech/grafit (zdefiniowany w tokenach)
      case 'magma': return 'bg-brand'; // Nasycony, satynowy pomarańcz marki
      case 'lithos': return 'bg-ash'; // Chłodniejszy, szarobeżowy kamień
      case 'tundra': return 'bg-oak bg-grain'; // Drewno/fornir wykorzystujące nasze SVG feTurbulence
      case 'lumina': return 'bg-paper'; // Czysta złamana biel / mat
      default: return 'bg-graphite';
    }
  };

  // Dostosowanie kontrastu światłocienia w zależności od tego, czy materiał jest jasny, czy ciemny
  const isDark = variant === 'bazalt' || variant === 'magma';
  const shadowOp = isDark ? '0.4' : '0.12';
  const highlightOp = isDark ? '0.08' : '0.4';

  return (
    <div className={`relative overflow-hidden rounded-sm shadow-xl ${getVariantStyle()} ${className}`}>
      {/* Miękkie światło z boku (gradient) dla fizyczności obiektu */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

      {/* Rysowanie profili/frezowań za pomocą cieni CSS */}
      {profile === 'frame' && (
        // Profil ramowy (shaker) z wypukłym ramiakiem i głęboką płyciną
        <div 
          className="absolute inset-[15%] border-t border-l"
          style={{
            borderColor: `rgba(255,255,255,${highlightOp})`,
            boxShadow: `inset 4px 4px 12px rgba(0,0,0,${shadowOp}), 1px 1px 0 rgba(255,255,255,${highlightOp})`
          }}
        >
          <div className="absolute inset-0 border-b border-r" style={{ borderColor: `rgba(0,0,0,${shadowOp})` }} />
        </div>
      )}

      {profile === 'slatted' && (
        // Profil listwowany (frez pionowy)
        <div className="absolute inset-0 flex justify-evenly pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="h-full w-[10%] border-r" 
              style={{ 
                borderColor: `rgba(0,0,0,${shadowOp})`,
                boxShadow: `1px 0 2px rgba(255,255,255,${highlightOp})`
              }} 
            />
          ))}
        </div>
      )}
    </div>
  );
};