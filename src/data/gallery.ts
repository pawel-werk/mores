export type GalleryItem = {
  id: string;
  category: 'fronty' | 'lakierowanie' | 'nietypowe';
  title: string;
  description: string;
  longDesc?: string;
  image?: string;
  src?: string;
  variant?: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile?: 'flat' | 'frame' | 'slatted';
};

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    category: 'fronty',
    title: 'Ponadczasowe drewno', // Zaktualizowana nazwa
    description: 'Kuchnia / Ryflowania',
    longDesc: 'Projekt nowoczesnej kuchni łączącej ryflowane fronty z ciepłym, naturalnym drewnem. Precyzyjne frezowania dodają głębi i tekstury, tworząc przytulne, a zarazem niezwykle eleganckie wnętrze, w którym rzemiosło gra główne skrzypce.',
    image: 'https://i.postimg.cc/6pJTtTbK/DSC-5246.jpg'
  },
  {
    id: '2',
    category: 'fronty',
    title: 'Ciemna Elegancja',
    description: 'Kuchnia / Lamele',
    longDesc: 'Ekskluzywna zabudowa kuchenna oparta na głębokiej czerni i strukturze drobnych lameli. Połączenie ciemnego, szczotkowanego drewna z monumentalną, kamienną wyspą podkreśla luksusowy i bezkompromisowy charakter otwartej przestrzeni.',
    image: 'https://i.postimg.cc/433YFqFj/DSC-5394.jpg'
  },
  {
    id: '3',
    category: 'lakierowanie',
    title: 'Biały minimalizm', // Zaktualizowana nazwa
    description: 'Zabudowa / Gładki mat',
    longDesc: 'Jasna, minimalistyczna kuchnia w klasycznej bieli. Gładkie, matowe powierzchnie idealnie wpisują się w nowoczesną architekturę, stanowiąc czyste i świeże tło dla reszty wyposażenia.',
    image: 'https://i.postimg.cc/FzvmwJsq/DSC-5540.jpg'
  },
  {
    id: '4',
    category: 'fronty',
    title: 'Jasna Klasyka',
    description: 'Kuchnia / Shaker',
    longDesc: 'Ponadczasowa, jasna kuchnia z frontami ramiakowymi inspirowanymi stylem shaker. Klasyczna elegancja przełamanej bieli połączona z mosiężnymi uchwytami i grubymi, kamiennymi blatami tworzy wyjątkowo jasną, prestiżową strefę dzienną.',
    image: 'https://i.postimg.cc/MH6Ny0GB/DSC-6492.jpg'
  }
];