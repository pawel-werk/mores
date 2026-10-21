import React from 'react';
import { Reveal } from './Reveal';
import { companyData } from '../data/content';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name') as string;
    const phone = fd.get('phone') as string;
    const msg = fd.get('message') as string;
    
    const body = `Imię/Firma: ${name}%0ATelefon: ${phone}%0A%0A${msg}`;
    window.location.href = `mailto:${companyData.email}?subject=Zapytanie ze strony internetowej&body=${body}`;
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-stone border-t border-line" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 id="contact-title" className="font-serif text-4xl md:text-5xl text-ink mb-6">
              Skontaktuj się z nami
            </h2>
            <p className="text-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub odwiedź nas w Mirkowie k. Wrocławia.
            </p>
          </div>
        </Reveal>
        
        {/* Kontener główny wyrównujący kolumny do tej samej wysokości */}
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16 items-stretch">
          
          {/* Lewa kolumna - Dane kontaktowe */}
          <Reveal delay={100}>
            <div className="flex flex-col h-full bg-paper border border-line p-8 md:p-12 lg:p-16">
              <h3 className="font-serif text-3xl text-ink mb-10 pb-6 border-b border-line">
                Dane firmy
              </h3>
              
              <div className="space-y-8 text-lg font-light flex-1">
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-ink/40 mb-2">Telefon</span>
                  <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="font-sans text-xl text-ink hover:text-brand transition-colors inline-block">
                    {companyData.phone}
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-ink/40 mb-2">E-mail</span>
                  <a href={`mailto:${companyData.email}`} className="font-sans text-xl text-ink hover:text-brand transition-colors inline-block break-all">
                    {companyData.email}
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-ink/40 mb-2">Adres produkcji</span>
                  <span className="font-sans text-xl text-ink block leading-snug">
                    ul. Łąkowa 6<br/>55-095 Mirków k. Wrocławia
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-ink/40 mb-2">Godziny otwarcia</span>
                  <span className="font-sans text-lg text-ink">
                    {companyData.workingHours}
                  </span>
                </div>
              </div>
              
              {/* Mapa Google - zintegrowana w dolnej części i zabezpieczona przez zapadnięciem */}
              <div className="mt-12 h-64 md:h-72 w-full relative border border-line">
                {/* Fallback podczas ładowania */}
                <div className="absolute inset-0 flex items-center justify-center bg-stone">
                  <span className="text-xs uppercase tracking-widest text-ink/30 font-bold">Ładowanie mapy...</span>
                </div>
                <iframe 
                  title="Mapa dojazdu - Mores Mirków"
                  className="absolute inset-0 w-full h-full z-10 filter grayscale-[20%] contrast-125 opacity-90 transition-opacity duration-1000"
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=%C5%81%C4%85kowa%206,%2055-095%20Mirk%C3%B3w&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </Reveal>

          {/* Prawa kolumna - Formularz */}
          <Reveal delay={200}>
            <div className="flex flex-col h-full bg-paper border border-line p-8 md:p-12 lg:p-16">
              <div className="mb-10 pb-6 border-b border-line">
                <h3 className="font-serif text-3xl text-ink mb-3">
                  Zapytaj o wycenę
                </h3>
                <p className="text-muted font-light leading-relaxed">
                  Podaj wymiary, wykończenie oraz szacowaną ilość sztuk.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="space-y-6 flex-1">
                  
                  {/* Statyczne, eleganckie pola formularza bez animacji */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs text-ink/60 uppercase tracking-widest font-bold mb-2 cursor-pointer">
                      Imię i nazwisko / Firma *
                    </label>
                    <input 
                      required 
                      id="name" 
                      name="name" 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-line px-0 py-2 text-ink focus:ring-0 focus:outline-none focus:border-brand transition-colors font-light" 
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs text-ink/60 uppercase tracking-widest font-bold mb-2 cursor-pointer">
                      Telefon kontaktowy *
                    </label>
                    <input 
                      required 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      className="w-full bg-transparent border-0 border-b border-line px-0 py-2 text-ink focus:ring-0 focus:outline-none focus:border-brand transition-colors font-light" 
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs text-ink/60 uppercase tracking-widest font-bold mb-2 cursor-pointer">
                      Szczegóły zlecenia *
                    </label>
                    <textarea 
                      required 
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="w-full bg-transparent border-0 border-b border-line px-0 py-2 text-ink focus:ring-0 focus:outline-none focus:border-brand transition-colors font-light resize-none"
                    ></textarea>
                  </div>
                  
                </div>
                
                <div className="mt-8 mb-10 flex items-start gap-3">
                  <input 
                    required 
                    id="rodo" 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-brand bg-transparent border-line rounded-sm focus:ring-brand focus:ring-offset-paper cursor-pointer outline-none focus:outline-none" 
                  />
                  <label htmlFor="rodo" className="text-xs text-muted font-light leading-relaxed cursor-pointer selection:bg-brand selection:text-white">
                    Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. *
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-ink text-paper text-sm uppercase tracking-widest font-bold py-5 hover:bg-brand transition-colors mt-auto outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-paper"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
};