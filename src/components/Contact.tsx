import { SITE_DATA } from '../data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { PhoneIcon, MailIcon } from './Icons';

export default function Contact() {
  const groupedTeam = SITE_DATA.team.reduce((acc, person) => {
    if (!acc[person.role]) acc[person.role] = [];
    acc[person.role].push(person);
    return acc;
  }, {} as Record<string, typeof SITE_DATA.team>);

  return (
    <section id="contact" className="py-24 md:py-32 bg-mist">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <SectionHeader label="Kontakt" title="Porozmawiajmy o współpracy" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          
          {/* Lewa strona: Karta firmy + Mapa */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal>
              <div className="bg-sage-soft rounded-3xl p-8 md:p-10 flex flex-col shadow-sm shadow-black/5">
                <h3 className="text-2xl font-bold text-ink mb-6">{SITE_DATA.company.name}</h3>
                <p className="text-sage-deep font-medium text-lg mb-10">{SITE_DATA.company.address}</p>
                
                <div className="space-y-6 mb-10">
                  <a href={`tel:${SITE_DATA.company.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-xl font-bold text-ink hover:text-sage-deep transition-colors">
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage-deep shrink-0"><PhoneIcon /></span>
                    {SITE_DATA.company.phone}
                  </a>
                  <a href={`mailto:${SITE_DATA.company.email}`} className="flex items-center gap-4 text-xl font-bold text-ink hover:text-sage-deep transition-colors">
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sage-deep shrink-0"><MailIcon /></span>
                    {SITE_DATA.company.email}
                  </a>
                </div>

                <div className="pt-8 border-t border-sage/20 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-sage-deep">
                  <span>NIP: {SITE_DATA.company.nip}</span>
                  <span>KRS: {SITE_DATA.company.krs}</span>
                </div>
              </div>
            </Reveal>

            {/* Mapa dociągająca do dołu */}
            <Reveal delay={150} className="flex-1 flex flex-col">
              <div className="w-full flex-1 min-h-[320px] rounded-3xl overflow-hidden border border-line shadow-sm shadow-black/5 bg-white">
                <iframe 
                  src="https://maps.google.com/maps?q=ul.+%C5%81%C4%85kowa+6%2C+55-095+Mirk%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja ITAL-GROUP"
                />
              </div>
            </Reveal>
          </div>

          {/* Prawa strona: Karty zespołu */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {Object.entries(groupedTeam).map(([role, members], groupIdx) => (
              <Reveal key={role} delay={groupIdx * 100}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-line shadow-sm shadow-black/5">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-mist text-ink rounded-full text-xs font-bold uppercase tracking-wide">
                      {role}
                    </span>
                  </div>
                  <div className="flex flex-col gap-8">
                    {members.map((person, idx) => (
                      <div key={idx} className="flex flex-col gap-3">
                        <h4 className="text-lg font-bold text-ink">{person.name}</h4>
                        <div className="flex flex-col gap-2">
                          {person.phone.length > 0 && (
                            <a href={`tel:${person.phone[0].replace(/\s+/g, '')}`} className="flex items-center gap-2 text-grey font-medium hover:text-sage-deep transition-colors">
                              <PhoneIcon className="w-4 h-4 shrink-0" /> {person.phone[0]}
                            </a>
                          )}
                          <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-grey font-medium hover:text-sage-deep transition-colors truncate">
                            <MailIcon className="w-4 h-4 shrink-0" /> {person.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}