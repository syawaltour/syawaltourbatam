'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoJsonLd from '@/components/SeoJsonLd';
import GoogleReviewRequest from '@/app/components/GoogleReviewRequest';
import SocialShareSection from '@/app/components/SocialShareSection';

type Lang = 'id' | 'en' | 'zh' | 'ms';

const pageContent: Record<Lang, {
  title: string;
  titleHighlight: string;
  subtitle: string;
  aboutTitle: string;
  aboutDesc: string;
  whyTitle: string;
  whyItems: string[];
  servicesTitle: string;
  service1: { title: string; desc: string };
  service2: { title: string; desc: string };
  service3: { title: string; desc: string };
  stats: { years: string; customers: string; fleet: string; service: string };
  contactTitle: string;
  contactDesc: string;
  contactBtn: string;
}> = {
  id: {
    title: 'Tentang',
    titleHighlight: 'Syawal Tour',
    subtitle: 'Partner perjalanan terpercaya di Batam sejak 2020',
    aboutTitle: 'Syawal Tour & Travel',
    aboutDesc: 'Perusahaan travel dan rental mobil berbasis di Batam, Kepulauan Riau. Melayani ribuan pelanggan lokal dan internasional dengan armada lengkap dan sopir berpengalaman.',
    whyTitle: 'Mengapa Memilih Kami?',
    whyItems: [
      'Terima SGD & MYR',
      'Layanan 24 jam',
      'Armada lengkap & terawat',
      'Sopir profesional',
      'Harga kompetitif',
      'Booking mudah via WhatsApp'
    ],
    servicesTitle: 'Layanan Kami',
    service1: { title: 'Rental Mobil', desc: 'MPV, SUV, hingga bus besar untuk bisnis atau wisata' },
    service2: { title: 'Tour Package', desc: 'Wisata ke destinasi populer di Batam' },
    service3: { title: 'Antar Jemput', desc: 'Bandara, hotel, atau lokasi lain 24 jam' },
    stats: { years: '4+ Tahun', customers: '1000+ Pelanggan', fleet: '10+ Armada', service: '24/7' },
    contactTitle: 'Hubungi Kami',
    contactDesc: 'Siap melayani perjalanan Anda kapan saja',
    contactBtn: 'Chat WhatsApp'
  },
  en: {
    title: 'About',
    titleHighlight: 'Syawal Tour',
    subtitle: 'Trusted travel partner in Batam since 2020',
    aboutTitle: 'Syawal Tour & Travel',
    aboutDesc: 'Travel and car rental company based in Batam, Riau Islands. Serving thousands of local and international customers with complete fleet and experienced drivers.',
    whyTitle: 'Why Choose Us?',
    whyItems: [
      'Accept SGD & MYR',
      '24-hour service',
      'Complete & maintained fleet',
      'Professional drivers',
      'Competitive pricing',
      'Easy WhatsApp booking'
    ],
    servicesTitle: 'Our Services',
    service1: { title: 'Car Rental', desc: 'MPV, SUV, to large buses for business or travel' },
    service2: { title: 'Tour Package', desc: 'Tours to popular destinations in Batam' },
    service3: { title: 'Pick-up Service', desc: 'Airport, hotel, or other locations 24 hours' },
    stats: { years: '4+ Years', customers: '1000+ Customers', fleet: '10+ Vehicles', service: '24/7' },
    contactTitle: 'Contact Us',
    contactDesc: 'Ready to serve your journey anytime',
    contactBtn: 'Chat WhatsApp'
  },
  zh: {
    title: '关于',
    titleHighlight: 'Syawal Tour',
    subtitle: '自2020年以来巴淡岛值得信赖的旅行伙伴',
    aboutTitle: 'Syawal Tour & Travel',
    aboutDesc: '位于廖内群岛巴淡岛的旅游和租车公司。拥有完整的车辆队伍和经验丰富的司机，为数千名本地和国际客户提供服务。',
    whyTitle: '为什么选择我们？',
    whyItems: [
      '接受新币和马币',
      '24小时服务',
      '车队齐全且保养良好',
      '专业司机',
      '有竞争力的价格',
      'WhatsApp轻松预订'
    ],
    servicesTitle: '我们的服务',
    service1: { title: '租车', desc: 'MPV、SUV到大型巴士，适合商务或旅行' },
    service2: { title: '旅游套餐', desc: '巴淡岛热门景点旅游' },
    service3: { title: '接送服务', desc: '机场、酒店或其他地点24小时服务' },
    stats: { years: '4+ 年', customers: '1000+ 客户', fleet: '10+ 车辆', service: '24/7' },
    contactTitle: '联系我们',
    contactDesc: '随时为您服务',
    contactBtn: 'WhatsApp聊天'
  },
  ms: {
    title: 'Tentang',
    titleHighlight: 'Syawal Tour',
    subtitle: 'Partner pelancongan dipercayai di Batam sejak 2020',
    aboutTitle: 'Syawal Tour & Travel',
    aboutDesc: 'Syarikat pelancongan dan sewa kereta berbasis di Batam, Kepulauan Riau. Melayani ribuan pelanggan lokal dan antarabangsa dengan armada lengkap dan pemandu berpengalaman.',
    whyTitle: 'Kenapa Pilih Kami?',
    whyItems: [
      'Terima SGD & MYR',
      'Perkhidmatan 24 jam',
      'Armada lengkap & terjaga',
      'Pemandu profesional',
      'Harga kompetitif',
      'Booking mudah via WhatsApp'
    ],
    servicesTitle: 'Perkhidmatan Kami',
    service1: { title: 'Sewa Kereta', desc: 'MPV, SUV, hingga bas besar untuk bisnis atau wisata' },
    service2: { title: 'Pakej Pelancongan', desc: 'Wisata ke destinasi populer di Batam' },
    service3: { title: 'Perkhidmatan Antar Jemput', desc: 'Lapangan terbang, hotel, atau lokasi lain 24 jam' },
    stats: { years: '4+ Tahun', customers: '1000+ Pelanggan', fleet: '10+ Armada', service: '24/7' },
    contactTitle: 'Hubungi Kami',
    contactDesc: 'Sedia melayani perjalanan Anda bila-bila masa',
    contactBtn: 'Chat WhatsApp'
  }
};

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('id');
  const content = pageContent[lang];

  return (
    <>
      <SeoJsonLd />
      <Header lang={lang} setLang={setLang} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0D1B3E] to-[#0A2F6C]">
          <div className="max-w-7xl mx-auto px-4 text-center reveal">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">
              {lang === 'id' ? 'Batam • Kepulauan Riau' : lang === 'en' ? 'Batam • Riau Islands' : lang === 'zh' ? '巴淡岛 • 廖内群岛' : 'Batam • Kepulauan Riau'}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              {content.title} <span className="text-gradient-gold">{content.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#8FA3CC] max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="glass p-8 rounded-2xl reveal">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {content.aboutTitle}
                </h2>
                <p className="text-[#8FA3CC] leading-relaxed">
                  {content.aboutDesc}
                </p>
              </div>
              <div className="glass p-8 rounded-2xl reveal">
                <h3 className="text-xl font-bold text-accent mb-6">{content.whyTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.whyItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span className="text-sm text-[#8FA3CC]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-[#0D1B3E]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {content.servicesTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-xl text-center reveal">
                <h3 className="text-lg font-bold text-accent mb-3">{content.service1.title}</h3>
                <p className="text-sm text-[#8FA3CC]">{content.service1.desc}</p>
              </div>
              <div className="glass p-6 rounded-xl text-center reveal">
                <h3 className="text-lg font-bold text-accent mb-3">{content.service2.title}</h3>
                <p className="text-sm text-[#8FA3CC]">{content.service2.desc}</p>
              </div>
              <div className="glass p-6 rounded-xl text-center reveal">
                <h3 className="text-lg font-bold text-accent mb-3">{content.service3.title}</h3>
                <p className="text-sm text-[#8FA3CC]">{content.service3.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="glass p-4 rounded-xl reveal">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{content.stats.years}</div>
                <div className="text-xs text-[#8FA3CC]">{lang === 'en' ? 'Experience' : lang === 'zh' ? '经验' : 'Pengalaman'}</div>
              </div>
              <div className="glass p-4 rounded-xl reveal">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{content.stats.customers}</div>
                <div className="text-xs text-[#8FA3CC]">{lang === 'en' ? 'Happy Customers' : lang === 'zh' ? '满意客户' : 'Pelanggan Puas'}</div>
              </div>
              <div className="glass p-4 rounded-xl reveal">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{content.stats.fleet}</div>
                <div className="text-xs text-[#8FA3CC]">{lang === 'en' ? 'Vehicles' : lang === 'zh' ? '车辆' : 'Armada'}</div>
              </div>
              <div className="glass p-4 rounded-xl reveal">
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold mb-1">{content.stats.service}</div>
                <div className="text-xs text-[#8FA3CC]">{lang === 'en' ? 'Active' : lang === 'zh' ? '活跃' : 'Aktif'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#0D1B3E]">
          <div className="max-w-3xl mx-auto px-4 text-center reveal">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {content.contactTitle}
            </h2>
            <p className="text-[#8FA3CC] mb-6">
              {content.contactDesc}
            </p>
            <a
              href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {content.contactBtn}
            </a>
          </div>
        </section>

        {/* Google Review Request */}
        <GoogleReviewRequest lang={lang} />

        {/* Social Share */}
        <SocialShareSection lang={lang} />

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
                  name: lang === 'id' ? 'Apa itu Syawal Tour?' : lang === 'en' ? 'What is Syawal Tour?' : lang === 'zh' ? '什么是Syawal Tour?' : 'Apakah Syawal Tour?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: lang === 'id' ? 'Syawal Tour adalah perusahaan travel dan rental mobil terpercaya di Batam.' : lang === 'en' ? 'Syawal Tour is a trusted travel and car rental company in Batam.' : lang === 'zh' ? 'Syawal Tour是巴淡岛值得信赖的旅游和租车公司。' : 'Syawal Tour adalah syarikat pelancongan dan sewa kereta yang dipercayai di Batam.',
                  },
                },
                {
                  '@type': 'Question',
                  name: lang === 'id' ? 'Bagaimana cara booking?' : lang === 'en' ? 'How to book?' : lang === 'zh' ? '如何预订？' : 'Bagaimana cara tempah?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: lang === 'id' ? 'Hubungi via WhatsApp di +6281269065423' : lang === 'en' ? 'Contact via WhatsApp at +6281269065423' : lang === 'zh' ? '通过WhatsApp联系+6281269065423' : 'Hubungi melalui WhatsApp di +6281269065423',
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
