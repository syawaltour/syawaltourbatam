'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface GallerySectionProps {
  lang: Lang;
}

interface GalleryItem {
  src: string;
  alt: string;
}

const galleryContent: Record<Lang, {
  title: string;
  subtitle: string;
}> = {
  id: {
    title: 'Galeri Syawal Tour',
    subtitle: 'Dokumentasi perjalanan dan armada kami.',
  },
  en: {
    title: 'Syawal Tour Gallery',
    subtitle: 'Documentation of our journeys and fleet.',
  },
  zh: {
    title: 'Syawal Tour 画廊',
    subtitle: '我们的旅程和车队文档。',
  },
  ms: {
    title: 'Galeri Syawal Tour',
    subtitle: 'Dokumentasi perjalanan dan armada kami.',
  },
};

const galleryItems: GalleryItem[] = [
  { src: '/assets/galery/1.jpeg', alt: 'Maha Vihara Duta Maitreya' },
  { src: '/assets/galery/2.jpeg', alt: 'Jembatan Barelang' },
  { src: '/assets/galery/3.jpeg', alt: 'Puncak Beliung' },
  { src: '/assets/galery/4.jpeg', alt: 'Pantai Nongsa' },
  { src: '/assets/galery/5.jpeg', alt: 'Pantai Melur' },
  { src: '/assets/galery/6.jpeg', alt: 'Marina Bay' },
  { src: '/assets/galery/7.jpeg', alt: 'Ocarina Park' },
  { src: '/assets/galery/8.jpeg', alt: 'Batam View Beach Resort' },
  { src: '/assets/galery/9.jpeg', alt: 'Welcome to Batam' },
  { src: '/assets/galery/10.jpeg', alt: 'Wisata Alam Barelang' },
  { src: '/assets/galery/11.jpeg', alt: 'Golden City' },
  { src: '/assets/galery/12.jpeg', alt: 'Harbour Bay' },
  { src: '/assets/galery/13.jpeg', alt: 'Nagoya City' },
  { src: '/assets/galery/14.jpeg', alt: 'Batam Centre' },
  { src: '/assets/galery/15.jpeg', alt: 'Sekupang' },
  { src: '/assets/galery/16.jpeg', alt: 'Batu Ampar' },
  { src: '/assets/galery/17.jpeg', alt: 'Waterfront City' },
  { src: '/assets/galery/18.jpeg', alt: 'Tropical Theme Park' },
  { src: '/assets/galery/19.jpeg', alt: 'Coasta Beach Resort' },
];

export default function GallerySection({ lang }: GallerySectionProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const content = galleryContent[lang];

  const selectedImage = selectedImageIndex !== null ? galleryItems[selectedImageIndex] : null;

  const goToPrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryItems.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <section id="gallery" className="py-12 bg-[#0D1B3E]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 reveal">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            {content.title}
          </h2>
          <p className="text-[#8FA3CC] text-xs md:text-sm max-w-xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Horizontal Scroll Thumbnails */}
        <div className="reveal">
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden snap-start border-2 border-transparent hover:border-accent transition-all active:scale-95"
              >
                <AppImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
          <p className="text-[#8FA3CC] text-xs text-center mt-2">
            ← Geser untuk lihat semua, tap untuk perbesar →
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImageIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute -top-10 md:-top-12 right-0 text-white hover:text-accent transition z-10"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Prev Button */}
              {selectedImageIndex !== null && selectedImageIndex > 0 && (
                <button
                  onClick={goToPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 text-white hover:text-accent transition"
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {selectedImageIndex !== null && selectedImageIndex < galleryItems.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 text-white hover:text-accent transition"
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image */}
              <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden">
                <AppImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain bg-[#0D1B3E]"
                  sizes="100vw"
                />
              </div>

              {/* Caption */}
              <div className="mt-3 md:mt-4 text-center">
                <p className="text-white font-semibold text-sm md:text-lg">{selectedImage.alt}</p>
                {selectedImageIndex !== null && (
                  <p className="text-[#8FA3CC] text-xs mt-1">
                    {selectedImageIndex + 1} / {galleryItems.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
