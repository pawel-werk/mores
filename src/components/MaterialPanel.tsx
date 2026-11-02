import React from 'react';

export type MaterialVariant = 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
// DODANO: 'vertical-stiles-raised' dla F-11 z pełnymi pionowymi ramiakami i V-fugą
export type ProfileType = 'flat' | 'frame' | 'slatted' | 'grooved' | 'integrated-handle' | 'half-round' | 'integrated-handle-full' | 'integrated-handle-centered' | 'integrated-handle-hidden' | 'raised-panel' | 'micro-frame' | 'shaker' | 'complex-raised-panel' | 'double-stepped-panel' | 'vertical-stiles-raised';

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

      {/* Profil 1: Klasyczna, szeroka rama (Shaker płaski) */}
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

      {/* Profil 8: Ukryty uchwyt krawędziowy (F-4) */}
      {profile === 'integrated-handle-hidden' && (
        null
      )}

      {/* Profil 9: Ramowy z wypukłą płyciną (F-6) */}
      {profile === 'raised-panel' && (
        <div className="absolute inset-[17%] pointer-events-none">
          <div className="absolute inset-0" style={{
              borderStyle: 'solid',
              borderWidth: '5px',
              borderTopColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
              borderLeftColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
              borderBottomColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
              borderRightColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
            }}>
            <div className="absolute inset-0 bg-black/5 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.15)]">
              <div className={`absolute inset-[2px] ${getVariantStyle()}`} style={{
                  borderStyle: 'solid',
                  borderWidth: '6px',
                  borderTopColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                  borderLeftColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                  borderBottomColor: `rgba(0,0,0,${Number(shadowOp) * 0.6})`,
                  borderRightColor: `rgba(0,0,0,${Number(shadowOp) * 0.6})`,
                }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profil 10: Mikroramka na skraju frontu z twardym skosem 45 stopni (F-7) */}
      {profile === 'micro-frame' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 rounded-[1px]" style={{
            borderStyle: 'solid',
            borderWidth: '2.5px',
            borderTopColor: `rgba(255,255,255,${Number(highlightOp) * 0.6})`,
            borderLeftColor: `rgba(255,255,255,${Number(highlightOp) * 0.6})`,
            borderBottomColor: `rgba(0,0,0,${Number(shadowOp) * 0.4})`,
            borderRightColor: `rgba(0,0,0,${Number(shadowOp) * 0.4})`,
          }}>
            <div className="absolute inset-0" style={{
              borderStyle: 'solid',
              borderWidth: '4px',
              borderTopColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
              borderLeftColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
              borderBottomColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
              borderRightColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
            }}>
               <div className="absolute inset-0 bg-black/[0.02] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      )}

      {/* Profil 11: Ramowy Shaker z obniżeniem pod kątem 45 stopni (F-8) */}
      {profile === 'shaker' && (
        <div className="absolute inset-[18%] pointer-events-none">
          <div className="absolute inset-0" style={{
              borderStyle: 'solid',
              borderWidth: '7px',
              borderTopColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
              borderLeftColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
              borderBottomColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
              borderRightColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
            }}>
            <div className="absolute inset-0 bg-black/[0.03] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      )}

      {/* Profil 12: Rozbudowany front klasyczny (F-9) */}
      {profile === 'complex-raised-panel' && (
        <>
          <div className="absolute inset-[2%] pointer-events-none rounded-[1px]" style={{
            borderStyle: 'solid',
            borderWidth: '1.5px',
            borderTopColor: `rgba(255,255,255,${Number(highlightOp) * 0.7})`,
            borderLeftColor: `rgba(255,255,255,${Number(highlightOp) * 0.7})`,
            borderBottomColor: `rgba(0,0,0,${Number(shadowOp) * 0.5})`,
            borderRightColor: `rgba(0,0,0,${Number(shadowOp) * 0.5})`,
          }} />
          
          <div className="absolute inset-[18%] pointer-events-none">
            <div className="absolute inset-0" style={{
              borderStyle: 'solid',
              borderWidth: '8px',
              borderTopColor: `rgba(0,0,0,${Number(shadowOp) * 0.8})`,
              borderLeftColor: `rgba(0,0,0,${Number(shadowOp) * 0.8})`,
              borderBottomColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
              borderRightColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
            }}>
              <div className="absolute inset-0 bg-black/[0.06] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)]">
                <div className="absolute inset-[12px]">
                  <div className="absolute inset-0" style={{
                    borderStyle: 'solid',
                    borderWidth: '2.5px',
                    borderTopColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
                    borderLeftColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
                    borderBottomColor: `rgba(0,0,0,${Number(shadowOp) * 0.5})`,
                    borderRightColor: `rgba(0,0,0,${Number(shadowOp) * 0.5})`,
                  }}>
                    <div className="absolute inset-[6px]">
                      <div className={`absolute inset-0 ${getVariantStyle()}`} style={{
                        borderStyle: 'solid',
                        borderWidth: '16px',
                        borderTopColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                        borderLeftColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                        borderBottomColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
                        borderRightColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
                      }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Profil 13: Podwójnie stopniowany w dół (F-10) */}
      {profile === 'double-stepped-panel' && (
        <div className="absolute inset-[18%] pointer-events-none">
          <div className="absolute inset-0" style={{
            borderStyle: 'solid',
            borderWidth: '6px',
            borderTopColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
            borderLeftColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
            borderBottomColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
            borderRightColor: `rgba(255,255,255,${Number(highlightOp) * 0.8})`,
          }}>
            <div className="absolute inset-0 bg-black/[0.04]">
              <div className="absolute inset-[6px]">
                <div className="absolute inset-0" style={{
                  borderStyle: 'solid',
                  borderWidth: '6px',
                  borderTopColor: `rgba(0,0,0,${Number(shadowOp) * 0.8})`,
                  borderLeftColor: `rgba(0,0,0,${Number(shadowOp) * 0.8})`,
                  borderBottomColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                  borderRightColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                }}>
                  <div className="absolute inset-0 bg-black/[0.06] shadow-[inset_1px_1px_4px_rgba(0,0,0,0.2)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profil 14: Pionowe ramiaki z wypukłą płyciną (F-11) */}
      {profile === 'vertical-stiles-raised' && (
        <>
          {/* Pionowa lewa fuga - poprowadzona od góry do samego dołu */}
          <div className="absolute top-0 bottom-0 left-[18%] w-[2px] pointer-events-none" style={{
            borderLeft: `1px solid rgba(0,0,0,${Number(shadowOp) * 0.7})`,
            borderRight: `1px solid rgba(255,255,255,${Number(highlightOp) * 0.9})`,
            backgroundColor: `rgba(0,0,0,${Number(shadowOp) * 0.2})`
          }} />
          
          {/* Pionowa prawa fuga - poprowadzona od góry do samego dołu */}
          <div className="absolute top-0 bottom-0 right-[18%] w-[2px] pointer-events-none" style={{
            borderLeft: `1px solid rgba(0,0,0,${Number(shadowOp) * 0.7})`,
            borderRight: `1px solid rgba(255,255,255,${Number(highlightOp) * 0.9})`,
            backgroundColor: `rgba(0,0,0,${Number(shadowOp) * 0.2})`
          }} />
          
          {/* Pozioma górna fuga - zamknięta między pionowymi fugami */}
          <div className="absolute top-[18%] left-[18%] right-[18%] h-[2px] pointer-events-none" style={{
            borderTop: `1px solid rgba(0,0,0,${Number(shadowOp) * 0.7})`,
            borderBottom: `1px solid rgba(255,255,255,${Number(highlightOp) * 0.9})`,
            backgroundColor: `rgba(0,0,0,${Number(shadowOp) * 0.2})`
          }} />
          
          {/* Pozioma dolna fuga - zamknięta między pionowymi fugami */}
          <div className="absolute bottom-[18%] left-[18%] right-[18%] h-[2px] pointer-events-none" style={{
            borderTop: `1px solid rgba(0,0,0,${Number(shadowOp) * 0.7})`,
            borderBottom: `1px solid rgba(255,255,255,${Number(highlightOp) * 0.9})`,
            backgroundColor: `rgba(0,0,0,${Number(shadowOp) * 0.2})`
          }} />

          {/* Wewnętrzny panel */}
          <div className="absolute inset-[18%] pointer-events-none">
            {/* Płaski margines wewnętrzny tuż po fugach */}
            <div className="absolute inset-[14px]">
              {/* Główny, szeroki wypukły panel z kątami 45 stopni w górę */}
              <div className={`absolute inset-0 ${getVariantStyle()}`} style={{
                borderStyle: 'solid',
                borderWidth: '12px',
                borderTopColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                borderLeftColor: `rgba(255,255,255,${Number(highlightOp) * 0.9})`,
                borderBottomColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
                borderRightColor: `rgba(0,0,0,${Number(shadowOp) * 0.7})`,
                // Delikatny rzut cienia podkreślający wypukłość
                boxShadow: `2px 2px 8px rgba(0,0,0,${Number(shadowOp) * 0.15})`
              }}>
                {/* Płaski, centralny element */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};