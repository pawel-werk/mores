export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'fronty' | 'lakierowanie' | 'nietypowe';
  title: string;
}

// ZDJĘCIA ZASTĘPCZE Z UNSPLASH. 
// UZUPEŁNIJ: Zmień src na swoje zdjęcia (np. /gallery/foto1.jpg)
export const galleryData: GalleryItem[] = Array.from({ length: 12 }).map((_, i) => {
  const categories: GalleryItem['category'][] = ['fronty', 'lakierowanie', 'nietypowe'];
  const category = categories[i % 3];
  
  return {
    id: `img-${i + 1}`,
    src: `https://images.unsplash.com/photo-1610222013897-400d7fb7973f?auto=format&fit=crop&w=800&q=80`, 
    alt: `Realizacja mores - ${category}`,
    category,
    title: `Projekt ${category} #${i + 1}`
  };
});