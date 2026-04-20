'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh';

interface ServicesSectionProps {
  lang: Lang;
}

const sectionLabels: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
}> = {
  id: {
    eyebrow: 'Layanan Kami',
    title: 'Apa yang Kami Tawarkan',
    subtitle: 'Solusi transportasi lengkap untuk wisatawan dan warga Batam.',
    ctaLabel: 'Pesan via WhatsApp',
  },
  en: {
    eyebrow: 'Our Services',
    title: 'What We Offer',
    subtitle: 'Complete transportation solutions for tourists and Batam residents.',
    ctaLabel: 'Book via WhatsApp',
  },
  zh: {
    eyebrow: '我们的服务',
    title: '我们提供什么',
    subtitle: '为游客和巴淡岛居民提供完整的交通解决方案。',
    ctaLabel: 'WhatsApp预订',
  },
};

interface ServiceItem {
  icon: string;
  titleId: string;
  titleEn: string;
  titleZh: string;
  descId: string;
  descEn: string;
  descZh: string;
  waMsg: string;
  color: string;
}

const services: ServiceItem[] = [
  {
    icon: 'PaperAirplaneIcon',
    titleId: 'Antar Jemput Bandara',
    titleEn: 'Airport Transfer',
    titleZh: '机场接送',
    descId: 'Layanan antar jemput profesional ke/dari Bandara Internasional Hang Nadim Batam. Tepat waktu, nyaman, dan terpercaya.',
    descEn: 'Professional pick-up and drop-off to/from Hang Nadim International Airport. Punctual, comfortable, and reliable.',
    descZh: '专业接送服务，往返汉纳丁国际机场。准时、舒适、可靠。',
    waMsg: 'Halo Syawal Tour, saya butuh layanan antar jemput bandara. Mohon informasi lebih lanjut.',
    color: 'from-blue-600/20 to-blue-800/10',
  },
  {
    icon: 'MapIcon',
    titleId: 'Wisata Harian',
    titleEn: 'Daily Tour',
    titleZh: '一日游',
    descId: 'Jelajahi destinasi wisata terbaik Batam — Vihara, Jembatan Barelang, Pantai, dan lebih banyak lagi bersama pemandu berpengalaman.',
    descEn: 'Explore Batam\'s best tourist destinations — Vihara, Barelang Bridge, Beaches, and more with experienced guides.',
    descZh: '探索巴淡岛最佳旅游目的地——寺庙、巴勒朗大桥、海滩等，由经验丰富的导游陪同。',
    waMsg: 'Halo Syawal Tour, saya tertarik dengan paket wisata harian di Batam. Mohon informasi.',
    color: 'from-green-600/20 to-green-800/10',
  },
  {
    icon: 'KeyIcon',
    titleId: 'Sewa Harian',
    titleEn: 'Daily Rental',
    titleZh: '日租服务',
    descId: 'Sewa kendaraan harian dengan atau tanpa sopir. Fleksibel, terjangkau, dan tersedia 24 jam untuk kebutuhan Anda.',
    descEn: 'Daily vehicle rental with or without driver. Flexible, affordable, and available 24 hours for your needs.',
    descZh: '提供带司机或不带司机的日租车服务。灵活、实惠，24小时随时可用。',
    waMsg: 'Halo Syawal Tour, saya ingin informasi sewa kendaraan harian. Terima kasih.',
    color: 'from-accent/20 to-yellow-800/10',
  },
  {
    icon: 'ArrowRightCircleIcon',
    titleId: 'Drop Antar Kota',
    titleEn: 'Intercity Drop',
    titleZh: '城际接送',
    descId: 'Layanan antar kota dari/ke Batam ke berbagai destinasi di Kepulauan Riau dan sekitarnya. Aman dan nyaman.',
    descEn: 'Intercity transfer from/to Batam to various destinations in Riau Islands and surroundings. Safe and comfortable.',
    descZh: '从/到巴淡岛前往廖内群岛及周边各城市的城际接送服务。安全舒适。',
    waMsg: 'Halo Syawal Tour, saya butuh layanan drop antar kota. Mohon informasi lebih lanjut.',
    color: 'from-purple-600/20 to-purple-800/10',
  },
];

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const labels = sectionLabels[lang];

  const getTitle = (s: ServiceItem) => lang === 'id' ? s.titleId : lang === 'en' ? s.titleEn : s.titleZh;
  const getDesc = (s: ServiceItem) => lang === 'id' ? s.descId : lang === 'en' ? s.descEn : s.descZh;

  const buildWAMsg = (msg: string) => {
    const translated: Record<Lang, string> = {
      id: msg,
      en: msg.replace('Halo', 'Hello').replace('saya butuh', 'I need').replace('saya tertarik dengan', 'I am interested in').replace('saya ingin informasi', 'I want information about').replace('Mohon informasi lebih lanjut.', 'Please provide more information.').replace('Terima kasih.', 'Thank you.').replace('Mohon informasi.', 'Please provide information.'),
      zh: `您好 Syawal Tour，${msg.replace('Halo Syawal Tour, ', '').replace('Mohon informasi lebih lanjut.', '请提供更多信息。').replace('Terima kasih.', '谢谢。').replace('Mohon informasi.', '请提供信息。')}`,
    };
    return encodeURIComponent(translated[lang]);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #0A2F6C 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-3 block">{labels.eyebrow}</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {labels.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {labels.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} card-hover glass rounded-2xl p-6 flex flex-col gap-4 bg-gradient-to-br ${service.color} gold-border-glow group`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl glass-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={service.icon as any} size={28} className="text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  {getTitle(service)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getDesc(service)}
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6281269065423?text=${buildWAMsg(service.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full text-center py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={14} />
                {labels.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}