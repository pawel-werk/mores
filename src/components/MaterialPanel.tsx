import React from 'react';

export type MaterialVariant = 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
// DODANO: 'grooved' dla pojedynczego, delikatnego frezu obwiedniowego
export type ProfileType = 'flat' | 'frame' | 'slatted' | 'grooved';

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
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-sm ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  const getVariantStyle = () => {
    switch (variant) {
      case 'bazalt': return 'bg-graphite'; 
      case 'magma': return 'bg-brand'; 
      case 'lithos': return 'bg-ash'; 
      case 'tundra': return 'bg-oak bg-grain'; 
      case 'lumina': return 'bg-paper'; 
      default: return 'bg-graphite';
    }
  };

  const isDark = variant === 'bazalt' || variant === 'magma';
  const shadowOp = isDark ? '0.5' : '0.15';
  const highlightOp = isDark ? '0.1' : '0.6';

  return (
    <div className={`relative overflow-hidden rounded-sm shadow-xl ${getVariantStyle()} ${className}`}>
      {/* Miękkie światło z boku */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />

      {/* Profil 1: Klasyczna, szeroka rama (Shaker) */}
      {profile === 'frame' && (
        <div 
          className="absolute inset-[18%] border-t border-l"
          style={{
            borderColor: `rgba(255,255,255,${highlightOp})`,
            boxShadow: `inset 4px 4px 12px rgba(0,0,0,${shadowOp}), 1px 1px 0 rgba(255,255,255,${highlightOp})`
          }}
        >
          <div className="absolute inset-0 border-b border-r" style={{ borderColor: `rgba(0,0,0,${shadowOp})` }} />
        </div>
      )}

      {/* Profil 2: Listwowanie (Lamele) */}
      {profile === 'slatted' && (
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

      {/* Profil 3: DELIKATNY FREZ OBWIEDNIOWY (Nowy ze zdjęcia) */}
      {profile === 'grooved' && (
        <div 
          className="absolute inset-[12%] pointer-events-none rounded-[2px]"
          style={{
            borderTop: `1.5px solid rgba(0,0,0,${shadowOp})`,
            borderLeft: `1.5px solid rgba(0,0,0,${shadowOp})`,
            borderBottom: `1.5px solid rgba(255,255,255,${highlightOp})`,
            borderRight: `1.5px solid rgba(255,255,255,${highlightOp})`,
          }}
        />
      )}
    </div>
  );
};