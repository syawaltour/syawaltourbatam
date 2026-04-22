import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import { ThemeProvider } from '@/context/ThemeContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://syawaltour.com'),
  title: {
    default: 'Syawal Tour and Travel — Rental Mobil & Tour Batam',
    template: '%s | Syawal Tour'
  },
  description: 'Rental mobil & tour terpercaya di Batam. Armada premium, harga terjangkau, terima SGD, MYR. Pesan via WhatsApp, layanan 24 jam. Melayani tour Maha Vihara Duta Maitreya, Jembatan Barelang, Treasure Bay, dan destinasi populer lainnya.',
  keywords: ['syawal tour', 'syawal tour batam', 'syawaltour', 'tour batam', 'travel batam', 'batam travel', 'rental mobil batam', 'sewa mobil batam', 'wisata batam', 'maha vihara duta maitreya', 'jembatan barelang', 'treasure bay batam', 'rent car batam', 'batam car rental'],
  authors: [{ name: 'Syawal Tour and Travel' }],
  creator: 'Syawal Tour and Travel',
  publisher: 'Syawal Tour and Travel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
      'zh-CN': '/zh',
      'ms-MY': '/ms',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US', 'zh_CN', 'ms_MY'],
    title: 'Syawal Tour and Travel — Rental Mobil & Tour Batam',
    description: 'Rental mobil & tour terpercaya di Batam. Armada premium, harga terjangkau, terima SGD, MYR. Pesan via WhatsApp, layanan 24 jam.',
    siteName: 'Syawal Tour and Travel',
    images: [
      {
        url: '/syawal-logo.png',
        width: 1200,
        height: 630,
        alt: 'Syawal Tour and Travel Batam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syawal Tour and Travel — Rental Mobil & Tour Batam',
    description: 'Rental mobil & tour terpercaya di Batam. Armada premium, harga terjangkau, terima SGD, MYR. Pesan via WhatsApp, layanan 24 jam.',
    images: ['/syawal-logo.png'],
    creator: '@syawaltour',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    shortcut: ['/favicon-16x16.png'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Syawal Tour and Travel',
    alternateName: 'Syawal Tour',
    url: baseUrl,
    logo: `${baseUrl}/syawal-logo.png`,
    image: `${baseUrl}/syawal-logo.png`,
    description: 'Rental mobil & tour terpercaya di Batam. Armada premium, harga terjangkau, terima SGD, MYR.',
    telephone: '+6281269065423',
    email: 'info@syawaltour.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Batam',
      addressRegion: 'Kepulauan Riau',
      addressCountry: 'ID',
    },
    sameAs: [
      'https://wa.me/6281269065423',
      'https://www.instagram.com/syawaltour',
    ],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Syawal Tour and Travel',
    alternateName: 'Syawal Tour',
    description: 'Rental mobil & tour terpercaya di Batam. Armada premium, harga terjangkau, terima SGD, MYR.',
    url: baseUrl,
    logo: `${baseUrl}/syawal-logo.png`,
    image: `${baseUrl}/syawal-logo.png`,
    telephone: '+6281269065423',
    email: 'info@syawaltour.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Batam',
      addressRegion: 'Kepulauan Riau',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '1.1305',
      longitude: '104.0557',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '1.1305',
        longitude: '104.0557',
      },
      geoRadius: '50000',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
    sameAs: [
      'https://wa.me/6281269065423',
      'https://www.instagram.com/syawaltour',
    ],
  };

  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={plusJakartaSans.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fsyawaltour2237back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}