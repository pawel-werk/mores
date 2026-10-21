export interface GalleryItem {
  id: string;
  src?: string; // Do późniejszego wykorzystania z prawdziwymi zdjęciami
  variant?: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile?: 'flat' | 'frame' | 'slatted';
  category: 'fronty' | 'lakierowanie' | 'nietypowe';
  title: string;
  description: string;
}

// UZUPEŁNIJ: Gdy otrzymasz prawdziwe zdjęcia, podaj ścieżkę w 'src' (np. src: '/gallery/foto1.jpg').
// Do tego czasu system wygeneruje realistyczne materiały na podstawie 'variant' i 'profile'.
export const galleryData: GalleryItem[] = [
  {
    id: 'img-1',
    category: 'fronty',
    title: 'Rezydencja Konstancin',
    description: 'Fornir dąb naturalny / Płaskie',
    variant: 'tundra',
    profile: 'flat'
  },
  {
    id: 'img-2',
    category: 'lakierowanie',
    title: 'Butik Warszawa',
    description: 'Lakier głęboki mat / Listwowanie',
    variant: 'bazalt',
    profile: 'slatted'
  },
  {
    id: 'img-3',
    category: 'fronty',
    title: 'Apartament Złota',
    description: 'Biel satynowa / Shaker',
    variant: 'lumina',
    profile: 'frame'
  },
  {
    id: 'img-4',
    category: 'nietypowe',
    title: 'Recepcja Hotelu',
    description: 'Ciepły kamień / Płaskie',
    variant: 'lithos',
    profile: 'flat'
  },
  {
    id: 'img-5',
    category: 'lakierowanie',
    title: 'Showroom Meblowy',
    description: 'Pomarańczowy akcent / Listwy',
    variant: 'magma',
    profile: 'slatted'
  },
  {
    id: 'img-6',
    category: 'nietypowe',
    title: 'Zabudowa biurowa',
    description: 'Ciemny orzech / Frez ramowy',
    variant: 'bazalt',
    profile: 'frame'
  }
];