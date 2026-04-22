'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoJsonLd from '@/components/SeoJsonLd';
import GoogleReviewRequest from '@/app/components/GoogleReviewRequest';
import SocialShareSection from '@/app/components/SocialShareSection';

type Lang = 'id' | 'en' | 'zh' | 'ms';

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('id');

  return (
    <>
      <SeoJsonLd />
      <Header lang={lang} setLang={setLang} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#0D1B3E] to-[#0A2F6C]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tentang <span className="text-accent">Syawal Tour</span>
            </h1>
            <p className="text-xl text-[#8FA3CC] max-w-3xl mx-auto">
              Partner perjalanan terpercaya Anda di Batam dan sekitarnya
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Syawal Tour and Travel
                </h2>
                <p className="text-[#8FA3CC] mb-4">
                  <strong>Syawal Tour</strong> adalah perusahaan travel dan rental mobil yang berbasis di Batam, Kepulauan Riau. Sejak 2020, kami telah melayani ribuan pelanggan lokal maupun internasional dengan dedikasi tinggi.
                </p>
                <p className="text-[#8FA3CC] mb-4">
                  Nama <strong>Syawal Tour</strong> telah dikenal sebagai penyedia layanan transportasi yang aman, nyaman, dan terpercaya. Kami memahami kebutuhan perjalanan Anda, mulai dari wisata religi ke Maha Vihara Duta Maitreya, tour Jembatan Barelang, hingga ke Treasure Bay Batam.
                </p>
                <p className="text-[#8FA3CC]">
                  Dengan <strong>Syawal Tour</strong>, setiap perjalanan Anda menjadi pengalaman berharga. Armada kami yang lengkap dan terawat, ditambah sopir berpengalaman, menjamin kenyamanan Anda sepanjang perjalanan.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0D1B3E] to-[#0A2F6C] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Mengapa Syawal Tour?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <span className="text-[#8FA3CC]"><strong>Syawal Tour</strong> menerima SGD & MYR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <span className="text-[#8FA3CC]">Layanan 24 jam setiap hari</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <span className="text-[#8FA3CC]">Armada lengkap & terawat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <span className="text-[#8FA3CC]">Sopir profesional & berpengalaman</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <span className="text-[#8FA3CC]">Harga kompetitif & transparan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✓</span>
                    <span className="text-[#8FA3CC]">Booking mudah via WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-[#0D1B3E]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Layanan Syawal Tour
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-accent mb-4">Rental Mobil</h3>
                <p className="text-[#8FA3CC]">
                  <strong>Syawal Tour</strong> menyediakan berbagai pilihan mobil untuk disewa, mulai dari MPV, SUV, hingga bus besar. Cocok untuk perjalanan bisnis atau wisata.
                </p>
              </div>
              <div className="bg-background/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-accent mb-4">Tour Package</h3>
                <p className="text-[#8FA3CC]">
                  Paket wisata ke destinasi populer di Batam dengan <strong>Syawal Tour</strong>. Maha Vihara, Jembatan Barelang, Treasure Bay, dan lainnya.
                </p>
              </div>
              <div className="bg-background/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-accent mb-4">Antar Jemput</h3>
                <p className="text-[#8FA3CC]">
                  Layanan antar jemput bandara, hotel, atau lokasi lain di Batam. <strong>Syawal Tour</strong> siap melayani Anda 24 jam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">4+</div>
                <div className="text-[#8FA3CC]">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                <div className="text-[#8FA3CC]">Pelanggan Puas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-[#8FA3CC]">Armada Tersedia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-[#8FA3CC]">Layanan Aktif</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#0D1B3E]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Hubungi Syawal Tour Sekarang
            </h2>
            <p className="text-[#8FA3CC] mb-8">
              Siap melayani perjalanan Anda kapan saja. Booking mudah via WhatsApp.
            </p>
            <a
              href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-2xl font-bold hover:bg-accent/90 transition"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </section>

        {/* Google Review Request */}
        <GoogleReviewRequest lang="id" />

        {/* Social Share */}
        <SocialShareSection lang="id" />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Apa itu Syawal Tour?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Syawal Tour adalah perusahaan travel dan rental mobil terpercaya di Batam yang menyediakan layanan rental mobil, tour package, dan antar jemput bandara.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Bagaimana cara booking Syawal Tour?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Booking Syawal Tour sangat mudah, cukup hubungi via WhatsApp di +6281269065423 atau kunjungi website syawaltour.com',
                  },
                },
              ],
            }),
          }}
        />
      </main>

      <Footer lang={lang} />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat via WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
