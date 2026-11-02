import React from 'react';

export type MaterialVariant = 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
export type ProfileType = 'flat' | 'frame' | 'slatted' | 'grooved' | 'integrated-handle' | 'half-round' | 'integrated-handle-full' | 'integrated-handle-centered' | 'integrated-handle-hidden';

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
  const shadowOp = isDark ? '0.7' : '0.15'; 
  const highlightOp = isDark ? '0.1' : '0.7'; 

  return (
    <div className={`relative overflow-hidden rounded-sm shadow-xl ${getVariantStyle()} ${className}`}>
      
      {/* Profil 5: Wypukłe półwałki (F-15) */}
      {profile === 'half-round' && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              to right,
              rgba(0,0,0,${Number(shadowOp) * 1.5}) 0%,
              rgba(0,0,0,${Number(shadowOp) * 1.5}) 0.05%,
              rgba(255,255,255,${Number(highlightOp) * 1.4}) 0.6%,
              rgba(255,255,255,${Number(highlightOp) * 0.5}) 1.5%,
              rgba(0,0,0,0) 1.9%,
              rgba(0,0,0,${Number(shadowOp) * 0.8}) 2.45%,
              rgba(0,0,0,${Number(shadowOp) * 1.5}) 2.5%
            )`
          }}
        />
      )}

      {/* Główne oświetlenie frontu */}
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

      {/* Profil 2: Ostre listwowanie (Lamele) */}
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

      {/* Profil 3: Wąski rowek obwiedniowy (F-13) */}
      {profile === 'grooved' && (
        <div className="absolute inset-[4%] pointer-events-none">
          <div 
            className="absolute inset-0 rounded-[2px]"
            style={{
              borderTop: `1.5px solid rgba(0,0,0,${shadowOp})`,
              borderLeft: `1.5px solid rgba(0,0,0,${shadowOp})`,
              borderBottom: `1.5px solid rgba(255,255,255,${highlightOp})`,
              borderRight: `1.5px solid rgba(255,255,255,${highlightOp})`,
            }}
          />
          <div 
            className={`absolute inset-[1.5px] rounded-[1.5px] ${getVariantStyle()}`}
            style={{
              borderTop: `1px solid rgba(255,255,255,${highlightOp})`,
              borderLeft: `1px solid rgba(255,255,255,${highlightOp})`,
              borderBottom: `1px solid rgba(0,0,0,${shadowOp})`,
              borderRight: `1px solid rgba(0,0,0,${shadowOp})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
          </div>
        </div>
      )}

      {/* Profil 4: Zintegrowany uchwyt asymetryczny (F-2) */}
      {profile === 'integrated-handle' && (
        <svg 
          className="absolute top-0 left-0 w-[85%] h-[7%] pointer-events-none" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="innerShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`rgba(0,0,0,${Number(shadowOp) * 0.5})`} />
              <stop offset="100%" stopColor={`rgba(0,0,0,${Number(shadowOp) * 0.05})`} />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 90,100 0,100" fill="url(#innerShadow)" />
          <line x1="0" y1="100" x2="90" y2="100" stroke={`rgba(255,255,255,${highlightOp})`} strokeWidth="3" vectorEffect="non-scaling-stroke" />
          <line x1="100" y1="0" x2="90" y2="100" stroke={`rgba(0,0,0,${Number(shadowOp) * 0.3})`} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      )}

      {/* Profil 6: Zintegrowany uchwyt na całej szerokości (F-1) */}
      {profile === 'integrated-handle-full' && (
        <div className="absolute top-0 left-0 right-0 h-[7%] pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: `rgba(0,0,0,${Number(shadowOp) * 0.3})`,
              boxShadow: `inset 0px 6px 8px rgba(0,0,0,${Number(shadowOp) * 0.8})`,
              borderBottom: `2.5px solid rgba(255,255,255,${highlightOp})`,
            }}
          />
        </div>
      )}

      {/* Profil 7: Symetryczny uchwyt odsunięty od krawędzi (F-3) */}
      {profile === 'integrated-handle-centered' && (
        <svg 
          className="absolute top-0 left-[15%] w-[70%] h-[7%] pointer-events-none" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="innerShadowSym" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`rgba(0,0,0,${Number(shadowOp) * 0.5})`} />
              <stop offset="100%" stopColor={`rgba(0,0,0,${Number(shadowOp) * 0.05})`} />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 90,100 10,100" fill="url(#innerShadowSym)" />
          <line x1="10" y1="100" x2="90" y2="100" stroke={`rgba(255,255,255,${highlightOp})`} strokeWidth="3" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="0" x2="10" y2="100" stroke={`rgba(0,0,0,${Number(shadowOp) * 0.3})`} strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <line x1="100" y1="0" x2="90" y2="100" stroke={`rgba(0,0,0,${Number(shadowOp) * 0.3})`} strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      )}

      {/* Profil 8: Ukryty uchwyt krawędziowy całkowicie gładki od przodu (F-4) */}
      {profile === 'integrated-handle-hidden' && (
        /* Brak dodatkowych cieni – front jest w pełni gładki i jednolity od przodu */
        null
      )}
    </div>
  );
};