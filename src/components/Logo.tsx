import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <img 
    src="https://i.postimg.cc/LshZpZjG/logo.png" 
    alt="mores" 
    className={className} 
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling?.classList.remove('hidden');
    }}
  />
);

export const LogoFallback = () => <span className="hidden font-bold text-ink text-xl">mores</span>;