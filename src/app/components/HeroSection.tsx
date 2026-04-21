'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface HeroSectionProps {
  lang: Lang;
}

const heroContent: Record<Lang, {
  eyebrow: string;
  title1: string;
  title2: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  badge: string;
  stat1Val: string;stat1Label: string;
  stat2Val: string;stat2Label: string;
  stat3Val: string;stat3Label: string;
}> = {
  id: {
    eyebrow: 'Batam • Kepulauan Riau',
    title1: 'SYAWAL',
    title2: 'TOUR & TRAVEL',
    subtitle: 'Rental Mobil & Tour Terpercaya di Batam. Armada premium, sopir profesional, siap 24 jam.',
    cta1: 'Pesan via WhatsApp',
    cta2: 'Lihat Armada',
    badge: 'Tersedia 24 Jam',
    stat1Val: '10+', stat1Label: 'Armada Tersedia',
    stat2Val: '24/7', stat2Label: 'Layanan Aktif',
    stat3Val: 'MYR·SGD', stat3Label: 'Mata Uang Diterima'
  },
  en: {
    eyebrow: 'Batam • Riau Islands',
    title1: 'SYAWAL',
    title2: 'TOUR & TRAVEL',
    subtitle: 'Trusted Car Rental & Tour in Batam. Premium fleet, professional drivers, available 24 hours.',
    cta1: 'Book via WhatsApp',
    cta2: 'View Fleet',
    badge: 'Available 24 Hours',
    stat1Val: '10+', stat1Label: 'Vehicles Available',
    stat2Val: '24/7', stat2Label: 'Active Service',
    stat3Val: 'MYR·SGD', stat3Label: 'Currencies Accepted'
  },
  zh: {
    eyebrow: '巴淡岛 • 廖内群岛',
    title1: 'SYAWAL',
    title2: '旅游出行',
    subtitle: '巴淡岛值得信赖的租车与旅游服务。豪华车队，专业司机，24小时待命。',
    cta1: 'WhatsApp预订',
    cta2: '查看车队',
    badge: '24小时服务',
    stat1Val: '10+', stat1Label: '可用车辆',
    stat2Val: '24/7', stat2Label: '全天服务',
    stat3Val: 'MYR·SGD', stat3Label: '接受货币'
  },
  ms: {
    eyebrow: 'Batam • Kepulauan Riau',
    title1: 'SYAWAL',
    title2: 'TOUR & TRAVEL',
    subtitle: 'Sewa Kereta & Tour Dipercayai di Batam. Armada premium, pemandu profesional, sedia 24 jam.',
    cta1: 'Tempah melalui WhatsApp',
    cta2: 'Lihat Armada',
    badge: 'Tersedia 24 Jam',
    stat1Val: '10+', stat1Label: 'Armada Tersedia',
    stat2Val: '24/7', stat2Label: 'Perkhidmatan Aktif',
    stat3Val: 'MYR·SGD', stat3Label: 'Mata Wang Diterima'
  }
};

const heroSlides = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_17af47b20-1775950564772.png",
  alt: 'Luxury dark car on highway at night with glowing headlights and city lights in background'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1db20d68a-1768219291696.png",
  alt: 'Premium white car exterior in dramatic studio lighting, sleek automotive photography'
},
{
  src: "https://images.unsplash.com/photo-1581655957165-cc02a8583004",
  alt: 'Highway at night with long exposure light trails, deep blue and gold tones'
}];


export default function HeroSection({ lang }: HeroSectionProps) {
  const c = heroContent[lang];
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(60px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 1.2s cubic-bezier(0.2, 1, 0.3, 1), transform 1.2s cubic-bezier(0.2, 1, 0.3, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, i) =>
        <div key={i} className="hero-slide absolute inset-0">
            <AppImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw" />
          
          </div>
        )}
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D1B3E]/85 via-[#0A2F6C]/60 to-[#0D1B3E]/90" />
        {/* Gold accent glow bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 z-10 bg-gradient-to-t from-[#0D1B3E] to-transparent" />
        {/* Decorative radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-10 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.3) 0%, transparent 70%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="reveal visible flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-accent" />
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">{c.eyebrow}</span>
          <span className="w-8 h-[1px] bg-accent" />
        </div>

        {/* Badge */}
        <div className="reveal visible reveal-delay-1 inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-gold" />
          <span className="text-xs font-semibold text-foreground tracking-wide">{c.badge}</span>
        </div>

        {/* Massive Title */}
        <h1
          ref={titleRef}
          className="font-extrabold leading-none tracking-tighter mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)' }}>
          
          <span className="block text-foreground">{c.title1}</span>
          <span className="block shimmer-text">{c.title2}</span>
        </h1>

        {/* Subtitle */}
        <p className="reveal visible reveal-delay-2 max-w-2xl text-base sm:text-lg text-[#8FA3CC] leading-relaxed mb-10">
          {c.subtitle}
        </p>

        {/* CTAs */}
        <div className="reveal visible reveal-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold min-w-[200px]">
            
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            {c.cta1}
          </a>
          <a
            href="#fleet"
            className="btn-outline-gold flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold min-w-[200px]">
            
            <Icon name="TruckIcon" size={20} />
            {c.cta2}
          </a>
        </div>

        {/* Stats */}
        <div className="reveal visible reveal-delay-4 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl">
          {[
          { val: c.stat1Val, label: c.stat1Label },
          { val: c.stat2Val, label: c.stat2Label },
          { val: c.stat3Val, label: c.stat3Label }].
          map((stat, i) =>
          <div key={i} className="glass rounded-2xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-gradient-gold mb-1 leading-tight">{stat.val}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider leading-tight">{stat.label}</div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/60 to-transparent float-anim" />
        <Icon name="ChevronDownIcon" size={16} className="text-accent opacity-60" />
      </div>
    </section>);

}