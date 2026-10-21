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
    
    const subject = encodeURIComponent('Zapytanie ze strony internetowej');
    const body = encodeURIComponent(`Imię/Firma: ${name}\nTelefon: ${phone}\n\n${msg}`);
    
    window.location.href = `mailto:${companyData.email}?subject=${subject}&body=${body}`;
  };

  return (
    // Zmieniono tło na bg-oak
    <section id="kontakt" className="py-12 md:py-16 bg-oak relative overflow-hidden" aria-labelledby="contact-title">
      
      {/* Tekstury dostosowane do jasnego tła */}
      <div className="absolute inset-0 bg-rings text-ink opacity-[0.03] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-10 pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
          
          {/* Lewa kolumna */}
          <div className="flex flex-col h-full text-ink pt-4">
            <Reveal>
              {/* Zmieniono text-paper na text-ink */}
              <h2 id="contact-title" className="font-serif text-4xl md:text-5xl text-ink mb-16 leading-tight">
                Skontaktuj się z nami
              </h2>
            </Reveal>
            
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-0">
                <Reveal delay={100}>
                  {/* Zmieniono ramki na border-ink/10 i teksty na text-ink */}
                  <div className="py-8 border-t border-ink/10">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-3">Telefon</span>
                    <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="font-serif text-3xl md:text-4xl text-ink hover:text-brand transition-colors inline-block">
                      {companyData.phone}
                    </a>
                  </div>
                </Reveal>
                
                <Reveal delay={200}>
                  <div className="py-8 border-t border-ink/10">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-3">E-mail</span>
                    <a href={`mailto:${companyData.email}`} className="font-serif text-3xl md:text-4xl text-ink hover:text-brand transition-colors inline-block break-all">
                      {companyData.email}
                    </a>
                  </div>
                </Reveal>
                
                <Reveal delay={300}>
                  <div className="py-8 border-t border-b border-ink/10 grid grid-cols-2 gap-8">
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-3">Adres produkcji</span>
                      <span className="font-light text-lg text-ink block leading-relaxed">
                        {companyData.addressLine1}<br/>{companyData.addressLine2}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-3">Godziny otwarcia</span>
                      <span className="font-light text-lg text-ink block">
                        {companyData.workingHours}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
              
              <Reveal delay={400} className="mt-12 h-64 md:h-[22rem] w-full relative">
                {/* Tło mapy zmienione na bg-oak */}
                <div className="absolute inset-0 bg-oak flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-widest text-ink/30 font-bold">Ładowanie mapy...</span>
                </div>
                {/* Styl mapy dostosowany do jasnego tła (multiply zamiast luminosity) */}
                <iframe 
                  title="Mapa dojazdu"
                  className="absolute inset-0 w-full h-full z-10 filter grayscale opacity-80 mix-blend-multiply hover:opacity-80 transition-opacity duration-1000"
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=%C5%81%C4%85kowa%206,%2055-095%20Mirk%C3%B3w&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </Reveal>
            </div>
          </div>

          {/* Prawa kolumna - Formularz (bez zmian tła, by wyraźnie odcinał się od dębu) */}
          <Reveal delay={500} className="h-full">
            <div className="flex flex-col h-full bg-paper p-8 md:p-12 lg:p-16 shadow-2xl">
              <div className="mb-12 hairline-b pb-8">
                <h3 className="font-serif text-3xl text-ink mb-4">
                  Zapytaj o wycenę
                </h3>
                <p className="text-ink/70 font-light leading-relaxed">
                  Podaj wymiary, wykończenie oraz szacowaną ilość sztuk.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="space-y-8 flex-1">
                  
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-[10px] text-ink/50 uppercase tracking-widest font-bold mb-2 cursor-pointer">
                      Imię i nazwisko / Firma *
                    </label>
                    <input 
                      required 
                      id="name" 
                      name="name" 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-ink/20 px-0 py-2 text-ink focus:ring-0 focus:outline-none focus:border-brand transition-colors font-light" 
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-[10px] text-ink/50 uppercase tracking-widest font-bold mb-2 cursor-pointer">
                      Telefon kontaktowy *
                    </label>
                    <input 
                      required 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      className="w-full bg-transparent border-0 border-b border-ink/20 px-0 py-2 text-ink focus:ring-0 focus:outline-none focus:border-brand transition-colors font-light" 
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[10px] text-ink/50 uppercase tracking-widest font-bold mb-2 cursor-pointer">
                      Szczegóły zlecenia *
                    </label>
                    <textarea 
                      required 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="w-full bg-transparent border-0 border-b border-ink/20 px-0 py-2 text-ink focus:ring-0 focus:outline-none focus:border-brand transition-colors font-light resize-none"
                    ></textarea>
                  </div>
                  
                </div>
                
                <div className="mt-10 mb-12 flex items-start gap-4">
                  <input 
                    required 
                    id="rodo" 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-brand bg-transparent border-ink/20 rounded-sm focus:ring-brand focus:ring-offset-paper cursor-pointer outline-none" 
                  />
                  <label htmlFor="rodo" className="text-xs text-ink/60 font-light leading-relaxed cursor-pointer">
                    Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. *
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-ink text-paper text-[15px] font-medium py-4 hover:bg-graphite transition-colors mt-auto rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-paper"
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