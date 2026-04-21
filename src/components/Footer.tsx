'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface FooterProps {
  lang: Lang;
}

const footerContent: Record<Lang, {
  tagline: string;
  address: string;
  hours: string;
  hoursVal: string;
  currencies: string;
  privacy: string;
  terms: string;
}> = {
  id: {
    tagline: 'Perjalanan nyaman, harga terjangkau.',
    address: 'Simpang Kara, Ruko Kara Junction, Jl. Ahmad Yani Blok A No 2-3, Taman Baloi, Batam Kota, Kepulauan Riau 29432',
    hours: 'Jam Operasional',
    hoursVal: '24 Jam / 7 Hari',
    currencies: 'Terima: IDR • MYR • SGD',
    privacy: 'Privasi',
    terms: 'Ketentuan',
  },
  en: {
    tagline: 'Comfortable journeys, affordable prices.',
    address: 'Simpang Kara, Ruko Kara Junction, Jl. Ahmad Yani Blok A No 2-3, Taman Baloi, Batam Kota, Riau Islands 29432',
    hours: 'Operating Hours',
    hoursVal: '24 Hours / 7 Days',
    currencies: 'Accepted: IDR • MYR • SGD',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  zh: {
    tagline: '舒适旅途，实惠价格。',
    address: 'Simpang Kara, Ruko Kara Junction, Jl. Ahmad Yani Blok A No 2-3, Taman Baloi, 巴淡岛, 廖内群岛 29432',
    hours: '营业时间',
    hoursVal: '24小时 / 7天',
    currencies: '接受货币: IDR • MYR • SGD',
    privacy: '隐私',
    terms: '条款',
  },
  ms: {
    tagline: 'Perjalanan selesa, harga berpatutan.',
    address: 'Simpang Kara, Ruko Kara Junction, Jl. Ahmad Yani Blok A No 2-3, Taman Baloi, Batam Kota, Kepulauan Riau 29432',
    hours: 'Jam Operasi',
    hoursVal: '24 Jam / 7 Hari',
    currencies: 'Diterima: IDR • MYR • SGD',
    privacy: 'Privasi',
    terms: 'Terma',
  },
};

export default function Footer({ lang }: FooterProps) {
  const c = footerContent[lang];
  const year = 2026;

  return (
    <footer className="border-t border-border/50 pt-16 pb-8 bg-[#070F24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          {/* Left: Brand */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <AppLogo size={40} />
              <div>
                <span className="block font-extrabold text-base tracking-tight text-foreground leading-tight">SYAWAL TOUR</span>
                <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-accent leading-tight">& TRAVEL</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic leading-relaxed">{c.tagline}</p>
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Icon name="MapPinIcon" size={14} className="text-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">{c.address}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="ClockIcon" size={14} className="text-accent shrink-0" />
              <span>{c.hours}: <strong className="text-foreground">{c.hoursVal}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="CurrencyDollarIcon" size={14} className="text-accent shrink-0" />
              <span>{c.currencies}</span>
            </div>
          </div>

          {/* Right: Links + Social */}
          <div className="flex flex-col gap-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { href: '#hero', label: lang === 'id' ? 'Beranda' : lang === 'en' ? 'Home' : lang === 'zh' ? '首页' : 'Utama' },
                { href: '#fleet', label: lang === 'id' ? 'Armada' : lang === 'en' ? 'Fleet' : lang === 'zh' ? '车队' : 'Armada' },
                { href: '#services', label: lang === 'id' ? 'Layanan' : lang === 'en' ? 'Services' : lang === 'zh' ? '服务' : 'Perkhidmatan' },
                { href: '#destinations', label: lang === 'id' ? 'Destinasi' : lang === 'en' ? 'Destinations' : lang === 'zh' ? '景点' : 'Destinasi' },
                { href: '#contact', label: lang === 'id' ? 'Kontak' : lang === 'en' ? 'Contact' : lang === 'zh' ? '联系' : 'Hubungi' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281269065423"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
              </a>
              <a
                href="tel:+6281269065423"
                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-foreground hover:text-accent hover:border-accent/40 transition-all duration-200"
                aria-label="Phone"
              >
                <Icon name="PhoneIcon" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Syawal Tour and Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">{c.privacy}</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">{c.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}