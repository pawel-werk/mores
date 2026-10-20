import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';
import { Logo, LogoFallback } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { name: 'Oferta', href: '#oferta' },
    { name: 'Produkcja', href: '#produkcja' },
    { name: 'Realizacje', href: '#realizacje' },
    { name: 'Katalog', href: '#/katalog' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <Logo className="h-6 md:h-8" />
          <LogoFallback />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-ink font-medium hover:text-brand transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#kontakt" className="bg-brand text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-dark transition-colors">
            Zapytaj o wycenę
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label="Otwórz menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-paper flex flex-col pt-16 px-6">
          <button
            className="absolute top-4 right-4 p-2 text-ink"
            onClick={() => setIsOpen(false)}
            aria-label="Zamknij menu"
          >
            <XIcon className="w-8 h-8" />
          </button>
          <div className="flex flex-col gap-6 text-xl mt-8">
            <a href="#/" onClick={() => setIsOpen(false)} className="font-bold text-ink">Strona główna</a>
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="font-medium text-muted hover:text-brand"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#kontakt" 
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-brand text-center text-white px-5 py-3 rounded-lg font-medium"
            >
              Zapytaj o wycenę
            </a>
          </div>
        </div>
      )}
    </header>
  );
};