import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const destinations = [
    'maha-vihara-duta-maitreya',
    'jembatan-barelang',
    'treasure-bay-batam',
    'puncak-beliung',
    'kelenteng-tua-pek-kong',
    'taman-rusa-sekupang',
    'masjid-sultan-mahmud-riayat-syah',
    'welcome-to-batam',
  ];

  const services = [
    'rental-mobil-batam',
    'tour-package-batam',
    'antar-jemput-bandara',
  ];

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#hero`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#fleet`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#destinations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Destination pages (anchor links)
  const destinationPages: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${baseUrl}/destinasi/${dest}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/layanan/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...destinationPages, ...servicePages];
}