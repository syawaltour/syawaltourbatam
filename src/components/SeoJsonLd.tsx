'use client';

import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface SeoJsonLdProps {
  faqs?: FAQItem[];
}

export default function SeoJsonLd({ faqs }: SeoJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Syawal Tour and Travel',
    description: 'Rental mobil & tour terpercaya di Batam. Armada premium, harga terjangkau, terima SGD, MYR.',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6281269065423',
      contactType: 'customer service',
      availableLanguage: ['Indonesian', 'English', 'Chinese'],
      areaServed: 'ID',
    },
    sameAs: [
      'https://wa.me/6281269065423',
    ],
  };

  const placesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Syawal Tour and Travel - Batam',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Batam',
      addressRegion: 'Kepulauan Riau',
      addressCountry: 'ID',
    },
    telephone: '+6281269065423',
    url: baseUrl,
  };

  const defaultFaqs: FAQItem[] = faqs || [
    {
      question: 'Berapa harga rental mobil di Syawal Tour Batam?',
      answer: 'Harga rental mobil di Syawal Tour mulai dari Rp 350.000 per hari untuk mobil jenis city car, Rp 500.000 untuk MPV, dan Rp 700.000 untuk premium SUV. Harga sudah termasuk mobil dan pengemudi berpengalaman.',
    },
    {
      question: 'Apakah menerima pembayaran SGD dan MYR?',
      answer: 'Ya, Syawal Tour menerima pembayaran dalam SGD dan MYR dengan kurs kompetitif. Ini sangat memudahkan wisatawan dari Singapura dan Malaysia yang berkunjung ke Batam.',
    },
    {
      question: 'Destinasi wisata apa saja yang populer di Batam?',
      answer: 'Destinasi populer di Batam meliputi Maha Vihara Duta Maitreya (vihara Buddha terbesar di Asia Tenggara), Jembatan Barelang (ikon Batam dengan 6 jembatan megah), Treasure Bay (water park premium), Puncak Beliung (pemandangan kota), dan Kelenteng Tua Pek Kong.',
    },
    {
      question: 'Bagaimana cara booking tour atau rental mobil?',
      answer: 'Booking sangat mudah! Cukup hubungi kami via WhatsApp di +6281269065423, tim kami siap melayani 24 jam. Anda bisa langsung berdiskusi tentang kebutuhan tour, pemilihan mobil, dan harga.',
    },
    {
      question: 'Apakah tersedia paket tour lengkap di Batam?',
      answer: 'Ya, kami menyediakan paket tour lengkap Batam yang mencakup transportasi, tiket masuk destinasi wisata, dan tour guide. Paket dapat disesuaikan dengan preferensi dan budget Anda.',
    },
    {
      question: 'Berapa lama waktu yang dibutuhkan untuk city tour Batam?',
      answer: 'City tour Batam biasanya memakan waktu 8-10 jam untuk mengunjungi 5-7 destinasi populer. Kami juga menyediakan paket half-day tour (4-5 jam) untuk kunjungan singkat.',
    },
    {
      question: 'Apakah melayani antar jemput bandara?',
      answer: 'Ya, kami melayani antar jemput Bandara Hang Nadim Batam dengan armada nyaman dan pengemudi profesional. Tim kami akan menunggu di arrival hall dengan nama Anda.',
    },
    {
      question: 'Kapan jam operasional Syawal Tour?',
      answer: 'Syawal Tour beroperasi 24 jam setiap hari. Anda bisa menghubungi kami kapan saja untuk booking atau pertanyaan seputar tour dan rental mobil di Batam.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: defaultFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
