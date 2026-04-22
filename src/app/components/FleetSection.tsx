'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import avanzaImg from '@/assets/images/toyota-avanza.jpg';
import innovaImg from '@/assets/images/toyota-innova.jpg';
import teriosImg from '@/assets/images/daihatsu-terios.jpg';
import hiaceImg from '@/assets/images/toyota-hiace.jpg';
import hiacePremioImg from '@/assets/images/hiace-premio.jpg';
import fortunerImg from '@/assets/images/toyota-fortuner.jpg';
import alphardImg from '@/assets/images/toyota-alphard.jpg';
import coasterImg from '@/assets/images/coaster.png';
import busMediumImg from '@/assets/images/bus-medium.png';
import bigBusImg from '@/assets/images/big-bus.png';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface FleetSectionProps {
  lang: Lang;
}

const sectionLabels: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  perDay: string;
  bookNow: string;
  capacity: string;
  type: string;
  currencies: string;
}> = {
  id: {
    eyebrow: 'Armada Syawal Tour',
    title: 'Armada Syawal Tour Batam',
    subtitle: 'Dari city car hingga bus besar — semua tersedia di Syawal Tour untuk perjalanan Anda.',
    perDay: '/hari',
    bookNow: 'Pesan Sekarang',
    capacity: 'Kapasitas',
    type: 'Tipe',
    currencies: 'Harga'
  },
  en: {
    eyebrow: 'Syawal Tour Fleet',
    title: 'Syawal Tour Fleet',
    subtitle: 'From city cars to large buses — all available at Syawal Tour for your journey.',
    perDay: '/day',
    bookNow: 'Book Now',
    capacity: 'Capacity',
    type: 'Type',
    currencies: 'Price'
  },
  zh: {
    eyebrow: 'Syawal Tour 车队',
    title: 'Syawal Tour 车队',
    subtitle: '从城市轿车到大型巴士——Syawal Tour 所有车辆均可用于您的旅途。',
    perDay: '/天',
    bookNow: '立即预订',
    capacity: '座位',
    type: '类型',
    currencies: '价格'
  },
  ms: {
    eyebrow: 'Armada Kami',
    title: 'Pilihan Kenderaan Premium',
    subtitle: 'Dari kereta bandar hingga bas besar — semua tersedia untuk perjalanan anda di Batam.',
    perDay: '/hari',
    bookNow: 'Tempah Sekarang',
    capacity: 'Kapasiti',
    type: 'Jenis',
    currencies: 'Harga'
  }
};

interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  myr: string;
  sgd: string;
  badge?: string;
  image: string | any;
  imageAlt: string;
}

const vehicles: Vehicle[] = [
{
  id: 'avanza',
  name: 'New Avanza',
  type: 'MPV',
  capacity: '7 Pax',
  myr: 'MYR 155',
  sgd: 'SGD 50',
  badge: 'Popular',
  image: avanzaImg,
  imageAlt: 'Toyota Avanza white MPV side view on clean background'
},
{
  id: 'innova',
  name: 'Innova Reborn',
  type: 'MPV Premium',
  capacity: '7 Pax',
  myr: 'MYR 250',
  sgd: 'SGD 75',
  badge: 'Popular',
  image: innovaImg,
  imageAlt: 'Toyota Innova silver premium MPV exterior front three-quarter view'
},
{
  id: 'terios',
  name: 'Terios',
  type: 'SUV',
  capacity: '7 Pax',
  myr: 'MYR 180',
  sgd: 'SGD 65',
  badge: 'Adventure',
  image: teriosImg,
  imageAlt: 'Daihatsu Terios compact SUV on road adventure'
},
{
  id: 'hiace',
  name: 'Van Hiace',
  type: 'Minibus',
  capacity: '12 Pax',
  myr: 'MYR 330',
  sgd: 'SGD 105',
  badge: 'Popular',
  image: hiaceImg,
  imageAlt: 'Toyota Hiace white van minibus exterior side view'
},
{
  id: 'hiace-premio',
  name: 'Hiace Premio VVIP',
  type: 'Minibus VIP',
  capacity: '10 Pax',
  myr: 'MYR 700',
  sgd: 'SGD 220',
  badge: 'VVIP',
  image: hiacePremioImg,
  imageAlt: 'Luxury Hiace Premio VVIP interior with premium leather seats and ambient lighting'
},
{
  id: 'fortuner',
  name: 'Fortuner VIP',
  type: 'SUV Premium',
  capacity: '7 Pax',
  myr: 'MYR 410',
  sgd: 'SGD 140',
  badge: 'VIP',
  image: fortunerImg,
  imageAlt: 'Toyota Fortuner black luxury SUV dramatic front view night'
},
{
  id: 'alphard',
  name: 'Alphard VVIP',
  type: 'MPV Luxury',
  capacity: '7 Pax',
  myr: 'MYR 1.000',
  sgd: 'SGD 310',
  badge: 'VVIP',
  image: alphardImg,
  imageAlt: 'Toyota Alphard black VVIP luxury MPV exterior sleek dark night'
},
{
  id: 'coaster',
  name: 'Coaster',
  type: 'Mini Bus',
  capacity: '25 Pax',
  myr: 'MYR 350',
  sgd: 'SGD 115',
  badge: 'Group',
  image: coasterImg,
  imageAlt: 'Toyota Coaster white mini bus tourism exterior'
},
{
  id: 'bus-medium',
  name: 'Bus Medium',
  type: 'Bus',
  capacity: '35 Pax',
  myr: 'MYR 425',
  sgd: 'SGD 140',
  badge: 'Group',
  image: busMediumImg,
  imageAlt: 'Modern medium tour bus white exterior on highway road'
},
{
  id: 'big-bus',
  name: 'Big Bus',
  type: 'Bus Besar',
  capacity: '50 Pax',
  myr: 'MYR 590',
  sgd: 'SGD 190',
  badge: 'Group',
  image: bigBusImg,
  imageAlt: 'Large luxury tourism bus exterior on scenic road trip'
}];


// BENTO GRID AUDIT:
// Array has 10 cards: [Avanza, Innova, Terios, Hiace, HiacePremio, Fortuner, Alphard, Coaster, BusMedium, BigBus]
// Desktop (grid-cols-5):
// Row 1: [col-1: Avanza] [col-2: Innova] [col-3: Terios] [col-4: Hiace] [col-5: HiacePremio]
// Row 2: [col-1: Fortuner] [col-2: Alphard] [col-3: Coaster] [col-4: BusMedium] [col-5: BigBus]
// Placed 10/10 cards ✓

const badgeColors: Record<string, string> = {
  Popular: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
  VVIP: 'bg-accent/20 text-accent border-accent/30',
  VIP: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  Adventure: 'bg-green-500/20 text-green-300 border-green-400/30',
  Group: 'bg-orange-500/20 text-orange-300 border-orange-400/30'
};

export default function FleetSection({ lang }: FleetSectionProps) {
  const labels = sectionLabels[lang];
  const [currency, setCurrency] = useState<'sgd' | 'myr'>('sgd');

  const getPrice = (v: Vehicle) => {
    if (currency === 'myr') return v.myr;
    return v.sgd;
  };

  const buildWAMessage = (vehicleName: string) => {
    const msgs: Record<Lang, string> = {
      id: `Halo Syawal Tour, saya mau pesan ${vehicleName} untuk [tanggal]. Terima kasih.`,
      en: `Hello Syawal Tour, I would like to book ${vehicleName} for [date]. Thank you.`,
      zh: `您好 Syawal Tour，我想预订 ${vehicleName}，出行日期：[日期]。谢谢。`,
      ms: `Hai Syawal Tour, saya ingin menempah ${vehicleName} untuk [tarikh]. Terima kasih.`
    };
    return encodeURIComponent(msgs[lang]);
  };

  return (
    <section id="fleet" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }} />
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

        {/* Currency Toggle */}
        <div className="flex justify-center mb-10 reveal">
          <div className="glass rounded-2xl p-1.5 flex gap-1">
            {(['sgd','myr'] as const).map((cur) =>
            <button
              key={cur}
              onClick={() => setCurrency(cur)}
              className={`px-5 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              currency === cur ?
              'btn-gold shadow-[0_4px_16px_rgba(245,166,35,0.3)]' :
              'text-muted-foreground hover:text-foreground'}`
              }>

                {cur.toUpperCase()}
              </button>
            )}
          </div>
        </div>

        {/* Fleet Grid */}
        {/* BENTO GRID: 10 cards, grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* col-1: Avanza */}
          {/* col-2: Innova */}
          {/* col-3: Terios */}
          {/* col-4: Hiace */}
          {/* col-5: HiacePremio */}
          {/* col-1: Fortuner */}
          {/* col-2: Alphard */}
          {/* col-3: Coaster */}
          {/* col-4: BusMedium */}
          {/* col-5: BigBus */}
          {vehicles.map((v, i) =>
          <div
            key={v.id}
            className="reveal card-hover glass rounded-2xl overflow-hidden flex flex-col gold-border-glow"
            style={{ transitionDelay: `${i % 5 * 80}ms` }}>
            
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <AppImage
                src={v.image}
                alt={v.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                unoptimized={true} />
              
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2248]/80 via-transparent to-transparent" />
                {v.badge &&
              <span className={`absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badgeColors[v.badge]}`}>
                    {v.badge}
                  </span>
              }
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col flex-1 gap-2">
                <div>
                  <h3 className="text-sm font-bold text-foreground leading-tight">{v.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-muted-foreground">{v.type}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Icon name="UsersIcon" size={10} />
                      {v.capacity}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-auto">
                  <div className="text-base font-extrabold text-gradient-gold leading-tight">
                    {getPrice(v)}
                  </div>
                  <div className="text-[10px] text-muted-foreground">{labels.perDay}</div>
                </div>

                {/* Book Button */}
                <a
                href={`https://wa.me/6281269065423?text=${buildWAMessage(v.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 mt-1">
                
                  <Icon name="ChatBubbleLeftRightIcon" size={12} />
                  {labels.bookNow}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}