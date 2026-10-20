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
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">Skontaktuj się z nami</h2>
        </Reveal>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dane kontaktowe i mapa */}
          <Reveal delay={100}>
            <div className="bg-paper p-8 rounded-xl border border-line h-full flex flex-col">
              <h3 className="text-xl font-bold mb-6">Dane firmy mores</h3>
              <div className="space-y-4 mb-8 text-lg">
                <p>
                  <span className="block text-sm text-muted mb-1">Telefon:</span>
                  <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="font-semibold text-brand hover:underline">{companyData.phone}</a>
                </p>
                <p>
                  <span className="block text-sm text-muted mb-1">E-mail:</span>
                  <a href={`mailto:${companyData.email}`} className="font-semibold text-brand hover:underline">{companyData.email}</a>
                </p>
                <p>
                  <span className="block text-sm text-muted mb-1">Adres produkcji:</span>
                  {companyData.addressLine1}<br/>{companyData.addressLine2}
                </p>
                <p>
                  <span className="block text-sm text-muted mb-1">Godziny otwarcia:</span>
                  {companyData.workingHours}
                </p>
              </div>
              <div className="mt-auto h-64 rounded-lg overflow-hidden border border-line">
                <iframe 
                  title="Mapa dojazdu"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  src="https://maps.google.com/maps?q=Mirk%C3%B3w%20k.%20Wroc%C5%82awia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </Reveal>

          {/* Formularz */}
          <Reveal delay={200}>
            <div className="bg-paper p-8 rounded-xl border border-line">
              <h3 className="text-xl font-bold mb-4">Zapytaj o wycenę</h3>
              <p className="text-sm text-muted mb-6">Aby przyspieszyć wycenę, podaj wymiary, materiał/wykończenie oraz szacowaną ilość sztuk.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Imię i nazwisko / Firma *</label>
                  <input required id="name" name="name" type="text" className="w-full px-4 py-2 border border-line rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefon *</label>
                  <input required id="phone" name="phone" type="tel" className="w-full px-4 py-2 border border-line rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Wiadomość / Parametry zlecenia *</label>
                  <textarea required id="message" name="message" rows={5} className="w-full px-4 py-2 border border-line rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none resize-y"></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input required id="rodo" type="checkbox" className="mt-1" />
                  <label htmlFor="rodo" className="text-xs text-muted">Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. *</label>
                </div>
                <button type="submit" className="w-full bg-brand text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors">
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