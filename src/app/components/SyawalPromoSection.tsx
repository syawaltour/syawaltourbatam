'use client';

import React, { useState } from 'react';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface SyawalPromoSectionProps {
  lang: Lang;
}

const syawalContent: Record<Lang, {
  title: string;
  subtitle: string;
  badge: string;
  ctaButton: string;
  packages: {
    name: string;
    duration: string;
    price: string;
    highlights: string[];
  }[];
}> = {
  id: {
    title: 'Paket Wisata Syawal Batam 2026',
    subtitle: 'Liburan keluarga yang tak terlupakan bersama Syawal Tour. Armada lengkap, sopir berpengalaman, harga terjangkau.',
    badge: '🌙 PROMO SYAWAL - Diskon 10%',
    ctaButton: 'Pesan Sekarang',
    packages: [
      {
        name: 'Paket Silver',
        duration: '2 Hari 1 Malam',
        price: 'Rp 1.200.000/org',
        highlights: [
          'Mobil Avanza/Innova + Sopir',
          'Hotel 2 Malam (***)',
          'Maha Vihara + Barelang',
          'Tiket masuk wisata',
        ],
      },
      {
        name: 'Paket Gold',
        duration: '3 Hari 2 Malam',
        price: 'Rp 1.800.000/org',
        highlights: [
          'Mobil Innova/Hiace + Sopir',
          'Hotel 2 Malam (****)',
          'Maha Vihara + Barelang + Nongsa',
          'Makan 6x',
          'Tiket masuk wisata',
        ],
      },
      {
        name: 'Paket Platinum',
        duration: '3 Hari 2 Malam',
        price: 'Rp 2.500.000/org',
        highlights: [
          'Mobil Alphard/Fortuner + Sopir',
          'Hotel 2 Malam (*****)',
          'All destinations + Shopping',
          'Makan 6x (Restoran seafood)',
          'Tiket masuk wisata + VIP',
        ],
      },
    ],
  },
  en: {
    title: 'Syawal Batam Tour Package 2026',
    subtitle: 'Unforgettable family vacation with Syawal Tour. Complete fleet, experienced drivers, affordable prices.',
    badge: '🌙 SYAWAL PROMO - 10% OFF',
    ctaButton: 'Book Now',
    packages: [
      {
        name: 'Silver Package',
        duration: '2 Days 1 Night',
        price: 'Rp 1.200.000/person',
        highlights: [
          'Avanza/Innova Car + Driver',
          '2 Nights Hotel (***)',
          'Maha Vihara + Barelang',
          'Entrance tickets',
        ],
      },
      {
        name: 'Gold Package',
        duration: '3 Days 2 Nights',
        price: 'Rp 1.800.000/person',
        highlights: [
          'Innova/Hiace Car + Driver',
          '2 Nights Hotel (****)',
          'Maha Vihara + Barelang + Nongsa',
          '6 Meals included',
          'Entrance tickets',
        ],
      },
      {
        name: 'Platinum Package',
        duration: '3 Days 2 Nights',
        price: 'Rp 2.500.000/person',
        highlights: [
          'Alphard/Fortuner Car + Driver',
          '2 Nights Hotel (*****)',
          'All destinations + Shopping',
          '6 Meals (Seafood restaurant)',
          'Entrance tickets + VIP',
        ],
      },
    ],
  },
  zh: {
    title: '2026年 Syawal 巴淡岛旅游套餐',
    subtitle: '与 Syawal Tour 一起度过难忘的家庭假期。车队齐全，司机经验丰富，价格实惠。',
    badge: '🌙 Syawal 促销 - 10% 折扣',
    ctaButton: '立即预订',
    packages: [
      {
        name: '银套餐',
        duration: '2天1夜',
        price: 'Rp 1.200.000/人',
        highlights: [
          'Avanza/Innova 汽车 + 司机',
          '2晚酒店 (***)',
          'Maha Vihara + Barelang',
          '入场门票',
        ],
      },
      {
        name: '金套餐',
        duration: '3天2夜',
        price: 'Rp 1.800.000/人',
        highlights: [
          'Innova/Hiace 汽车 + 司机',
          '2晚酒店 (****)',
          'Maha Vihara + Barelang + Nongsa',
          '6餐包括在内',
          '入场门票',
        ],
      },
      {
        name: '铂金套餐',
        duration: '3天2夜',
        price: 'Rp 2.500.000/人',
        highlights: [
          'Alphard/Fortuner 汽车 + 司机',
          '2晚酒店 (*****)',
          '所有目的地 + 购物',
          '6餐（海鲜餐厅）',
          '门票 + VIP',
        ],
      },
    ],
  },
  ms: {
    title: 'Pakej Pelancongan Syawal Batam 2026',
    subtitle: 'Percutian keluarga yang tidak dapat dilupakan dengan Syawal Tour. Armada lengkap, pemandu berpengalaman, harga berpatutan.',
    badge: '🌙 PROMOSI SYAWAL - Diskaun 10%',
    ctaButton: 'Tempah Sekarang',
    packages: [
      {
        name: 'Pakej Silver',
        duration: '2 Hari 1 Malam',
        price: 'Rp 1.200.000/orang',
        highlights: [
          'Kereta Avanza/Innova + Pemandu',
          '2 Malam Hotel (***)',
          'Maha Vihara + Barelang',
          'Tiket masuk',
        ],
      },
      {
        name: 'Pakej Gold',
        duration: '3 Hari 2 Malam',
        price: 'Rp 1.800.000/orang',
        highlights: [
          'Kereta Innova/Hiace + Pemandu',
          '2 Malam Hotel (****)',
          'Maha Vihara + Barelang + Nongsa',
          '6 Makanan termasuk',
          'Tiket masuk',
        ],
      },
      {
        name: 'Pakej Platinum',
        duration: '3 Hari 2 Malam',
        price: 'Rp 2.500.000/orang',
        highlights: [
          'Kereta Alphard/Fortuner + Pemandu',
          '2 Malam Hotel (*****)',
          'Semua destinasi + Membeli-belah',
          '6 Makanan (Restoran seafood)',
          'Tiket masuk + VIP',
        ],
      },
    ],
  },
};

export default function SyawalPromoSection({ lang }: SyawalPromoSectionProps) {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const content = syawalContent[lang];

  const bookNow = () => {
    const pkg = content.packages[selectedPackage];
    const message = `Halo Syawal Tour, saya ingin pesan ${pkg.name} (${pkg.duration}). Mohon informasi lebih lanjut.`;
    window.open(`https://wa.me/6281269065423?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0D1B3E] via-[#1a365d] to-[#0D1B3E] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent px-6 py-3 rounded-full text-sm font-bold border border-accent/30">
            <span className="text-lg">🌙</span>
            {content.badge}
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-[#8FA3CC] max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Package Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {content.packages.map((pkg, index) => (
            <button
              key={index}
              onClick={() => setSelectedPackage(index)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all ${
                selectedPackage === index
                  ? 'bg-accent text-foreground shadow-lg scale-105'
                  : 'bg-white/5 text-[#8FA3CC] hover:bg-white/10'
              }`}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Package Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {content.packages[selectedPackage].name}
                </h3>
                <p className="text-[#8FA3CC] mb-4">
                  {content.packages[selectedPackage].duration}
                </p>
                <div className="text-4xl font-bold text-accent mb-4">
                  {content.packages[selectedPackage].price}
                </div>
                <p className="text-sm text-[#8FA3CC]">
                  *Price per person, minimum 4 pax
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                <ul className="space-y-3">
                  {content.packages[selectedPackage].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#8FA3CC]">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={bookNow}
                className="flex-1 bg-accent text-foreground px-8 py-4 rounded-2xl font-bold hover:bg-accent/90 transition flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {content.ctaButton}
              </button>
              <a
                href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20tanya%20paket%20Syawal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat First
              </a>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-accent/10 rounded-2xl border border-accent/20">
              <p className="text-sm text-[#8FA3CC] text-center">
                💡 <strong>Tip:</strong> Book early to secure your slot! Syawal season is peak period.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-accent mb-1">4+</div>
            <div className="text-sm text-[#8FA3CC]">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">1000+</div>
            <div className="text-sm text-[#8FA3CC]">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-[#8FA3CC]">Service Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-1">SGD/MYR</div>
            <div className="text-sm text-[#8FA3CC]">Accepted</div>
          </div>
        </div>
      </div>
    </section>
  );
}
