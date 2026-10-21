import React from 'react';

// Centralna konfiguracja autorskiego, architektonicznego stylu ikon B2B.
const iconProps = {
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

// Akcentowy detal w kolorze marki
const accentProps = {
  stroke: "var(--color-brand)",
};

// -- Ikony Nawigacyjne i UI --
export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
    <path d="M3 12h10" {...accentProps} />
  </svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M5 5l14 14" />
    <path d="M19 5L5 19" {...accentProps} />
  </svg>
);

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M12 5v14" />
    <path d="M5 12h14" {...accentProps} />
  </svg>
);

export const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M5 12h14" {...accentProps} />
  </svg>
);

// Strzałka zrobiona jako jednokolorowa (usunęliśmy accentProps)
export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M15 5l7 7-7 7M3 12h19" />
  </svg>
);

export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M12 3v14M8 13l4 4 4-4" />
    <path d="M4 21h16" {...accentProps} />
  </svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M10 6H4v14h14v-6" />
    <path d="M13 4h7v7M11 13l9-9" {...accentProps} />
  </svg>
);

// -- Ikony Branżowe (Produkcja, Narzędzia, Materiały) --

export const FrontIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect x="4" y="2" width="16" height="20" />
    <rect x="7" y="5" width="10" height="14" {...accentProps} />
    <path d="M11 12h2" />
  </svg>
);

export const PaintIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M8 20l2-8h4l1 2v5h-4v-4H9" />
    <path d="M7 12V8h8l2-2h2v2l-2 2h-6" />
    <path d="M19 9l2-1M20 12h3M19 15l2 1" {...accentProps} />
  </svg>
);

export const CutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect x="3" y="4" width="18" height="16" />
    <path d="M15 2v20" strokeDasharray="3 3" {...accentProps} />
    <path d="M15 12h6" />
  </svg>
);

export const CustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M4 21V4h4v13h12v4H4z" />
    <path d="M13 3l5 15M13 3l-2 6" {...accentProps} />
  </svg>
);

export const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <polygon points="12 4 3 8 12 12 21 8" />
    <path d="M3 13l9 4 9-4" />
    <path d="M3 18l9 4 9-4" {...accentProps} />
  </svg>
);

export const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M15 12l4-3h3v8h-6zM15 17v-5H3v5" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M4 9h10M4 6h10" {...accentProps} />
  </svg>
);

export const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect x="5" y="3" width="14" height="18" />
    <path d="M9 8h6M9 12h6" {...accentProps} />
    <path d="M5 17h14" />
  </svg>
);

export const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect x="5" y="3" width="14" height="18" />
    <path d="M9 7h6" {...accentProps} />
    <path d="M9 12h1M14 12h1M9 16h1M14 16h1" />
  </svg>
);

export const MachineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M6 3h12v18H6z" />
    <path d="M12 3v18" {...accentProps} />
    <path d="M9 10h6" />
  </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <rect x="4" y="4" width="12" height="12" />
    <rect x="8" y="8" width="12" height="12" {...accentProps} />
  </svg>
);

export const FactoryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M3 21V8l6-4v4l6-4v4l6-4v13H3z" />
    <path d="M17 5v-3" {...accentProps} />
  </svg>
);

export const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M3 4v16h18V4H3zM3 12h18" />
    <path d="M7 8h4M13 16h4" {...accentProps} />
  </svg>
);

export const ArchitectIcon = CustomIcon;