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
    subtitle: 'Dokumentasi perjalanan dan armada kami. Kenyamanan pelanggan adalah prioritas kami.',
  },
  en: {
    title: 'Syawal Tour Gallery',
    subtitle: 'Documentation of our journeys and fleet. Customer comfort is our priority.',
  },
  zh: {
    title: 'Syawal Tour 画廊',
    subtitle: '我们的旅程和车队文档。客户舒适是我们的首要任务。',
  },
  ms: {
    title: 'Galeri Syawal Tour',
    subtitle: 'Dokumentasi perjalanan dan armada kami. Keselesaan pelanggan adalah keutamaan kami.',
  },
};

const galleryItems: GalleryItem[] = [
  { src: '/assets/galery/1.jpeg', alt: 'Maha Vihara Duta Maitreya - Vihara Buddha terbesar di Asia Tenggara' },
  { src: '/assets/galery/2.jpeg', alt: 'Jembatan Barelang - Ikon Batam dengan pemandangan laut yang menakjubkan' },
  { src: '/assets/galery/3.jpeg', alt: 'Puncak Beliung - Pemandangan kota Batam dan selat Singapura' },
  { src: '/assets/galery/4.jpeg', alt: 'Pantai Nongsa - Pantai pasir putih dengan pemandangan laut Singapura' },
  { src: '/assets/galery/5.jpeg', alt: 'Pantai Melur - Destinasi wisata bahari favorit di Batam' },
  { src: '/assets/galery/6.jpeg', alt: 'Marina Bay - Pelabuhan modern dengan pemandangan kapal pesiar' },
  { src: '/assets/galery/7.jpeg', alt: 'Ocarina Park - Taman hiburan keluarga di Batam Centre' },
  { src: '/assets/galery/8.jpeg', alt: 'Batam View Beach Resort - Resort bintang 5 dengan pemandangan laut' },
  { src: '/assets/galery/9.jpeg', alt: 'Welcome to Batam - Patung ikonik di gerbang kota Batam' },
  { src: '/assets/galery/10.jpeg', alt: 'Wisata Alam Barelang - Keindahan alam kepulauan Riau' },
  { src: '/assets/galery/11.jpeg', alt: 'Golden City - Pusat perbelanjaan dan hiburan di Batam' },
  { src: '/assets/galery/12.jpeg', alt: 'Harbour Bay - Pelabuhan ferry internasional Batam' },
  { src: '/assets/galery/13.jpeg', alt: 'Nagoya City - Pusat kota Batam dengan kehidupan malam yang vibrant' },
  { src: '/assets/galery/14.jpeg', alt: 'Batam Centre - Pusat pemerintahan dan bisnis Kepulauan Riau' },
  { src: '/assets/galery/15.jpeg', alt: 'Sekupang - Pelabuhan ferry tujuan Singapura' },
  { src: '/assets/galery/16.jpeg', alt: 'Batu Ampar - Kawasan wisata kuliner laut Batam' },
  { src: '/assets/galery/17.jpeg', alt: 'Waterfront City - Resor wisata terpadu di Batam' },
  { src: '/assets/galery/18.jpeg', alt: 'Tropical Theme Park - Taman tema dengan wahana seru' },
  { src: '/assets/galery/19.jpeg', alt: 'Coasta Beach Resort - Pantai privat dengan fasilitas mewah' },
];

export default function GallerySection({ lang }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const content = galleryContent[lang];

  return (
    <section id="gallery" className="py-20 bg-[#0D1B3E]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-[#8FA3CC] text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer reveal"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <AppImage
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm line-clamp-2">
                    {item.alt.split(' - ')[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <AppImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain bg-[#0D1B3E]"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
