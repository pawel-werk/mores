import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';
import { Logo, LogoFallback } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'CNC', href: '#/cnc' }, // DODANO LINK
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#/')) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const currentHash = window.location.hash;
    const isHome = currentHash === '' || currentHash === '#/' || !currentHash.startsWith('#/');

    if (isHome) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.hash = '#/';
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-paper/80 backdrop-blur-md hairline-b' : 'bg-paper border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20 transition-all">
        
        <a 
          href="#/" 
          className="inline-block group outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
          aria-label="Strona główna"
        >
          <div className="flex items-center gap-2 transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] origin-left">
            <Logo className="h-5 md:h-6" variant="dark" />
            <LogoFallback variant="dark" />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[15px] font-normal text-ink/80 hover:text-ink transition-colors relative group py-1 cursor-pointer"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-brand opacity-0 translate-y-1.5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
            </a>
          ))}
          <a 
            href="#kontakt" 
            onClick={(e) => handleNavClick(e, '#kontakt')}
            className="ml-4 bg-ink text-paper px-6 py-2.5 text-[15px] font-medium hover:bg-brand transition-colors rounded-sm cursor-pointer"
          >
            Zapytaj o wycenę
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink hover:text-brand transition-colors"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label="Otwórz menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F7F4EF] w-full h-[100dvh] flex flex-col pt-24 px-6">
          <button
            className="absolute top-6 right-6 p-3 text-ink hover:text-brand transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Zamknij menu"
          >
            <XIcon className="w-8 h-8" aria-hidden="true" />
          </button>
          <div className="flex flex-col gap-6 mt-12 font-sans">
            <a href="#/" onClick={() => setIsOpen(false)} className="text-2xl text-ink font-light hover:text-brand transition-colors">Strona główna</a>
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl text-ink/70 font-light hover:text-brand transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#kontakt" 
              onClick={(e) => handleNavClick(e, '#kontakt')}
              className="mt-8 bg-ink text-center text-paper px-6 py-4 text-lg font-medium hover:bg-brand transition-colors rounded-sm cursor-pointer"
            >
              Zapytaj o wycenę
            </a>
          </div>
        </div>
      )}
    </header>
  );
};