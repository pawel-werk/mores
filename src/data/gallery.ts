// Przykład modyfikacji typu w src/data/gallery.ts
export type GalleryItem = {
  id: string;
  category: 'fronty' | 'lakierowanie' | 'nietypowe';
  title: string;
  description: string;
  src?: string; // Jeśli używasz lokalnych zdjęć
  image?: string; // DODANE: zewnętrzny link do obrazka
  variant?: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile?: 'flat' | 'frame' | 'slatted';
};

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    category: 'fronty',
    title: 'Szałwia i Drewno',
    description: 'Kuchnia / Ryflowania',
    image: 'https://i.postimg.cc/6pJTtTbK/DSC-5246.jpg'
  },
  {
    id: '2',
    category: 'fronty',
    title: 'Ciemna Elegancja',
    description: 'Kuchnia / Lamele',
    image: 'https://i.postimg.cc/433YFqFj/DSC-5394.jpg'
  },
  {
    id: '3',
    category: 'lakierowanie',
    title: 'Grafitowy Minimalizm',
    description: 'Zabudowa / Gładki mat',
    image: 'https://i.postimg.cc/FzvmwJsq/DSC-5540.jpg'
  },
  {
    id: '4',
    category: 'fronty',
    title: 'Jasna Klasyka',
    description: 'Kuchnia / Shaker',
    image: 'https://i.postimg.cc/MH6Ny0GB/DSC-6492.jpg'
  },
  // ... reszta Twoich danych bez zmian ...
];