import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'dark' }) => {
  // Używamy dostarczonych linków, ale w docelowym środowisku 
  // warto je podmienić na lokalne pliki np. "/logo.png" i "/logo-light.png" w folderze public
  const logoSrc = variant === 'light' 
    ? "https://i.postimg.cc/90mnc7hj/logo-light.png" 
    : "https://i.postimg.cc/3wG61hBS/logov2.png";

  return (
    <img 
      src={logoSrc} 
      alt="mores logo" 
      className={`object-contain ${className}`}
      loading="eager"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
  );
};

export const LogoFallback: React.FC<{ variant?: 'dark' | 'light' }> = ({ variant = 'dark' }) => (
  <span className={`hidden font-serif font-bold text-2xl tracking-tight ${variant === 'light' ? 'text-white' : 'text-ink'}`}>
    mores
  </span>
);