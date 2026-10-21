import React from 'react';

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

const accentProps = {
  stroke: "var(--color-brand)",
};

// ... (pozostałe ikony na górze pliku pozostają bez zmian) ...

// Czyste ścieżki i dodane strokeLinejoin="round", aby rogi się nie nakładały

export const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} strokeLinejoin="round" {...props}>
    <polygon points="12 4 3 8 12 12 21 8" />
    <polyline points="3 13 12 17 21 13" />
    <polyline points="3 18 12 22 21 18" {...accentProps} />
  </svg>
);

export const CutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M3 4h10v16H3z" />
    <path d="M18 2v20" strokeDasharray="3 3" {...accentProps} />
    <path d="M13 12h5" />
  </svg>
);

export const PaintIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} strokeLinejoin="round" {...props}>
    <path d="M11 9V4h4v5" />
    <path d="M6 9h10v4H6z" />
    <path d="M8 13l-1.5 5h3L11 13" />
    <path d="M12 13v2" />
    <path d="M19 8l2-2M20 11h3M19 14l2 2" {...accentProps} />
  </svg>
);

export const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} strokeLinejoin="round" {...props}>
    <circle cx="6" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />
    <path d="M2 17h2M8 17h8M20 17h2" />
    <path d="M2 17v-4h13" />
    <path d="M15 17V9h3l3 3v5" />
    <path d="M15 13h5" />
    <path d="M4 10h9M4 7h9" {...accentProps} />
  </svg>
);

// ... (reszta pliku pod spodem) ...