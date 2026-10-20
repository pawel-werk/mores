import React from 'react';

// Centralna konfiguracja stylu ikon dla całej strony: 
// Cienki, elegancki obrys (1.5px) nadający technicznego, architektonicznego charakteru.
const defaultProps = {
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  strokeLinecap: "square" as const, // Ostrzejsze zakończenia linii pasujące do branży B2B
  strokeLinejoin: "miter" as const,
};

// -- Ikony nawigacyjne i ogólne --
export const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M6 18L18 6M6 6l12 12" /></svg>
);

export const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M19 9l-7 7-7-7" /></svg>
);

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
);

export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M4 16v1h16v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M10 6H6v12h12v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
);

// -- Ikony Oferty i Produkcji --
export const FrontIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><rect x="4" y="3" width="16" height="18" /><path d="M8 7h8M8 11h8M8 15h5" /></svg>
);

export const PaintIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
);

export const CutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><rect x="3" y="3" width="18" height="18" /><path d="M3 12h18M12 3v18" /></svg>
);

export const CustomIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M4 20h16v-4H8V4H4v16z" /><path d="M12 20v-4M16 20v-4M8 12h4M8 8h4" /></svg>
);

export const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 12 12 17 22 12" /><polyline points="2 17 12 22 22 17" /></svg>
);

export const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
);

// -- Ikony Procesu Zamówienia --
export const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M14 2H6v20h12V8l-4-6z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
);

export const CalculatorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><rect x="4" y="2" width="16" height="20" /><path d="M8 6h8M16 14v4M8 14v4M12 14v4M8 10h.01M12 10h.01M16 10h.01" /></svg>
);

export const MachineIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M12 2v10M8 6h8M5 12h14v10H5zM9 16v2M15 16v2" /></svg>
);

// -- Ikony Odbiorców (Klienci B2B) --
export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
);

export const FactoryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M2 20h20V8l-7 5V8l-7 5V4H2v16z" /></svg>
);

export const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M3 9l9-7 9 7v11h-18z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);

export const ArchitectIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...defaultProps} {...props}><path d="M12 3v18M19 21l-7-16-7 16M8 15h8" /></svg>
);