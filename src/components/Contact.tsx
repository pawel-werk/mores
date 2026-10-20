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
    <section id="kontakt" className="py-20 md:py-32 bg-stone" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-ink mb-16 text-center">Skontaktuj się z nami</h2>
        </Reveal>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Dane kontaktowe i mapa */}
          <Reveal delay={100}>
            <div className="bg-paper p-8 lg:p-10 rounded-xl border border-line h-full flex flex-col">
              <div className="mb-8 lg:min-h-[72px]">
                <h3 className="text-2xl font-bold text-ink mb-2">Dane firmy mores</h3>
              </div>
              
              <div className="space-y-5 mb-10 text-lg">
                <p>
                  <span className="block text-sm text-muted mb-1">Telefon:</span>
                  <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="font-semibold text-brand hover:text-brand-dark transition-colors">{companyData.phone}</a>
                </p>
                <p>
                  <span className="block text-sm text-muted mb-1">E-mail:</span>
                  <a href={`mailto:${companyData.email}`} className="font-semibold text-brand hover:text-brand-dark transition-colors">{companyData.email}</a>
                </p>
                <p>
                  <span className="block text-sm text-muted mb-1">Adres produkcji:</span>
                  <span className="text-ink">{companyData.addressLine1}<br/>{companyData.addressLine2}</span>
                </p>
                <p>
                  <span className="block text-sm text-muted mb-1">Godziny otwarcia:</span>
                  <span className="text-ink">{companyData.workingHours}</span>
                </p>
              </div>
              
              <div className="mt-auto h-[260px] rounded-lg overflow-hidden border border-line bg-stone relative">
                <iframe 
                  title="Mapa dojazdu - Mores Mirków"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.4691459640957!2d17.150652!3d51.156515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe36f6d62a931%3A0x6b2b6c7a72d1f9a1!2zxYlxYWtvd2EgNiwgNTUtMDk1IE1pcmvDs3c!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                />
              </div>
            </div>
          </Reveal>

          {/* Formularz */}
          <Reveal delay={200}>
            <div className="bg-paper p-8 lg:p-10 rounded-xl border border-line h-full flex flex-col">
              <div className="mb-8 lg:min-h-[72px]">
                <h3 className="text-2xl font-bold text-ink mb-2">Zapytaj o wycenę</h3>
                <p className="text-sm text-muted leading-relaxed">Aby przyspieszyć wycenę, podaj wymiary, materiał/wykończenie oraz szacowaną ilość sztuk.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col flex-1 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Imię i nazwisko / Firma *</label>
                  <input required id="name" name="name" type="text" className="w-full px-4 py-3 bg-stone border border-line rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">Telefon *</label>
                  <input required id="phone" name="phone" type="tel" className="w-full px-4 py-3 bg-stone border border-line rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Wiadomość / Parametry zlecenia *</label>
                  <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 bg-stone border border-line rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none resize-y transition-colors"></textarea>
                </div>
                
                <div className="flex items-start gap-3 pt-2">
                  <input required id="rodo" type="checkbox" className="mt-1 w-4 h-4 text-brand bg-stone border-line rounded focus:ring-brand cursor-pointer" />
                  <label htmlFor="rodo" className="text-xs text-muted leading-relaxed cursor-pointer">
                    Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. *
                  </label>
                </div>
                
                <div className="mt-auto pt-6">
                  <button type="submit" className="w-full bg-brand text-white font-bold py-3.5 rounded-lg hover:bg-brand-dark transition-colors shadow-sm">
                    Wyślij wiadomość
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};