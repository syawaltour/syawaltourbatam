'use client';

import React from 'react';

interface Destination {
  nameId: string;
  nameEn: string;
  nameZh: string;
  descId: string;
  descEn: string;
  descZh: string;
  image: string;
  imageAlt: string;
  tag: string;
  tagType: 'free' | 'paid';
  waKeyword: string;
}

interface DestinationSchemaProps {
  destinations: Destination[];
}

export default function DestinationSchema({ destinations }: DestinationSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const batamRegion = {
    '@type': 'GeoShape',
    polygon: '1.1305,104.0557 1.2000,104.2000 1.0000,104.2000 1.0000,103.9000 1.2000,103.9000 1.1305,104.0557',
  };

  const destinationSchemas = destinations.map((dest) => ({
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: dest.nameEn,
    description: dest.descEn,
    image: [dest.image],
    url: `${baseUrl}/destinasi/${dest.waKeyword.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Batam',
      addressRegion: 'Kepulauan Riau',
      addressCountry: 'ID',
    },
    geo: batamRegion,
    isAccessibleForFree: dest.tagType === 'free',
    touristType: ['Cultural', 'Nature', 'Family', 'Golf'],
    offers: dest.tagType === 'paid' ? {
      '@type': 'Offer',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    } : undefined,
  }));

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Popular Tourist Destinations in Batam',
    description: 'List of top tourist attractions and destinations in Batam, Indonesia',
    numberOfItems: destinations.length,
    itemListElement: destinations.map((dest, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: dest.nameEn,
        description: dest.descEn,
        image: dest.image,
        url: `${baseUrl}/destinasi/${dest.waKeyword.toLowerCase().replace(/\s+/g, '-')}`,
      },
    })),
  };

  return (
    <>
      {destinationSchemas.map((schema, index) => (
        <script
          key={`destination-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
