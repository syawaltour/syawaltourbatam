'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh';

interface DestinationsSectionProps {
  lang: Lang;
}

const sectionLabels: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  explore: string;
  free: string;
  paid: string;
}> = {
  id: {
    eyebrow: 'Destinasi Wisata',
    title: 'Jelajahi Batam Bersama Kami',
    subtitle: 'Dari vihara megah hingga pantai indah — kami antar Anda ke semua destinasi terbaik di Batam.',
    explore: 'Jelajahi',
    free: 'Gratis',
    paid: 'Berbayar'
  },
  en: {
    eyebrow: 'Tourist Destinations',
    title: 'Explore Batam With Us',
    subtitle: 'From grand temples to beautiful beaches — we take you to all the best destinations in Batam.',
    explore: 'Explore',
    free: 'Free',
    paid: 'Paid'
  },
  zh: {
    eyebrow: '旅游景点',
    title: '与我们一起探索巴淡岛',
    subtitle: '从宏伟的寺庙到美丽的海滩——我们带您前往巴淡岛所有最佳目的地。',
    explore: '探索',
    free: '免费',
    paid: '收费'
  }
};

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

const destinations: Destination[] = [
{
  nameId: 'Maha Vihara Duta Maitreya',
  nameEn: 'Maha Vihara Duta Maitreya',
  nameZh: '弥勒大使大乘寺',
  descId: 'Vihara Buddha terbesar di Asia Tenggara. Dibangun tahun 1991, memiliki 5 aula doa dan restoran vegetarian. Populer di kalangan wisatawan China, Singapura & Korea.',
  descEn: 'The largest Buddhist temple in Southeast Asia. Built in 1991, featuring 5 prayer halls and a vegetarian restaurant. Popular with Chinese, Singaporean & Korean tourists.',
  descZh: '东南亚最大的佛教寺庙，建于1991年，设有5个祈祷大厅和素食餐厅，深受中国、新加坡和韩国游客喜爱。',
  image: "https://images.unsplash.com/photo-1669256336414-bd2d70b40f85",
  imageAlt: 'Grand Buddhist temple with ornate golden roof architecture surrounded by tropical greenery dim atmospheric',
  tag: 'Vihara',
  tagType: 'free',
  waKeyword: 'wisata ke Maha Vihara Duta Maitreya'
},
{
  nameId: 'Jembatan Barelang',
  nameEn: 'Barelang Bridge',
  nameZh: '巴勒朗大桥',
  descId: 'Ikon Batam — 6 jembatan megah yang menghubungkan Pulau Batam, Rempang, dan Galang. Pemandangan laut yang menakjubkan sepanjang perjalanan.',
  descEn: 'Batam\'s icon — 6 magnificent bridges connecting Batam, Rempang, and Galang islands. Stunning sea views throughout the journey.',
  descZh: '巴淡岛的标志性建筑——6座宏伟大桥连接巴淡岛、伦邦岛和加朗岛，沿途海景令人叹为观止。',
  image: "https://images.unsplash.com/photo-1533691270771-6e9b0aeee7f9",
  imageAlt: 'Long suspension bridge over turquoise tropical sea water golden hour atmospheric dark shadows',
  tag: 'Landmark',
  tagType: 'free',
  waKeyword: 'wisata ke Jembatan Barelang'
},
{
  nameId: 'Treasure Bay Batam',
  nameEn: 'Treasure Bay Batam',
  nameZh: '宝湾巴淡岛',
  descId: 'Taman air dan resort premium dengan wahana seru, kolam renang raksasa, dan patung ikonik. Destinasi keluarga terfavorit di Batam.',
  descEn: 'Premium water park and resort with exciting rides, giant pool, and iconic statues. Batam\'s most popular family destination.',
  descZh: '高端水上乐园和度假村，设有刺激的游乐设施、巨型泳池和标志性雕塑，是巴淡岛最受欢迎的家庭目的地。',
  image: "https://images.unsplash.com/photo-1727994963040-b8d9df5f6a0e",
  imageAlt: 'Tropical water park with slides and pools surrounded by palm trees bright sunny day',
  tag: 'Water Park',
  tagType: 'paid',
  waKeyword: 'wisata ke Treasure Bay Batam'
},
{
  nameId: 'Pantai Nongsa',
  nameEn: 'Nongsa Beach',
  nameZh: '弄沙海滩',
  descId: 'Pantai indah di ujung timur Batam dengan pemandangan Singapura yang memukau. Cocok untuk sunset, snorkeling, dan bersantai.',
  descEn: 'Beautiful beach at the eastern tip of Batam with stunning views of Singapore. Perfect for sunsets, snorkeling, and relaxation.',
  descZh: '巴淡岛东端的美丽海滩，可欣赏新加坡壮观美景，非常适合观看日落、浮潜和休闲放松。',
  image: "https://images.unsplash.com/photo-1728042743614-ba1922d94000",
  imageAlt: 'Pristine tropical beach with clear turquoise water palm trees and white sand dim atmospheric sunset',
  tag: 'Pantai',
  tagType: 'free',
  waKeyword: 'wisata ke Pantai Nongsa'
},
{
  nameId: 'Kelenteng Tua Pek Kong',
  nameEn: 'Tua Pek Kong Temple',
  nameZh: '大伯公庙',
  descId: 'Klenteng bersejarah dengan arsitektur Tionghoa yang indah. Lampion merah menghiasi seluruh kompleks, menjadi spot foto yang menakjubkan.',
  descEn: 'Historic Chinese temple with beautiful architecture. Red lanterns adorn the entire complex, making it an amazing photo spot.',
  descZh: '历史悠久的中式庙宇，建筑精美，红灯笼点缀整个建筑群，是绝佳的拍照胜地。',
  image: "https://images.unsplash.com/photo-1581507958967-e2986dfce881",
  imageAlt: 'Traditional Chinese temple with red lanterns ornate roof decorations dim atmospheric low-key lighting',
  tag: 'Kelenteng',
  tagType: 'free',
  waKeyword: 'wisata ke Kelenteng Tua Pek Kong'
},
{
  nameId: 'Taman Rusa Sekupang',
  nameEn: 'Sekupang Deer Park',
  nameZh: '实功港鹿苑',
  descId: 'Taman mini dengan berbagai satwa liar di lahan 12,2 hektar. Tiket masuk sangat terjangkau — cocok untuk wisata keluarga bersama anak.',
  descEn: 'Mini zoo with various wildlife on 12.2 hectares of land. Very affordable entrance fee — perfect for family trips with children.',
  descZh: '占地12.2公顷的小型动物园，栖息着各种野生动物，门票非常实惠，非常适合携带孩子的家庭游览。',
  image: "https://images.unsplash.com/photo-1720157178460-d32dc0801684",
  imageAlt: 'Lush tropical nature park with deer grazing green grass trees atmospheric natural light',
  tag: 'Taman',
  tagType: 'paid',
  waKeyword: 'wisata ke Taman Rusa Sekupang'
}];


// BENTO GRID AUDIT:
// Array has 6 cards: [Vihara, Barelang, TreasureBay, Nongsa, Kelenteng, TamanRusa]
// Desktop grid-cols-3:
// Row 1: [col-1: Vihara] [col-2: Barelang] [col-3: TreasureBay]
// Row 2: [col-1: Nongsa] [col-2: Kelenteng] [col-3: TamanRusa]
// Placed 6/6 cards ✓

export default function DestinationsSection({ lang }: DestinationsSectionProps) {
  const labels = sectionLabels[lang];

  const getName = (d: Destination) => lang === 'id' ? d.nameId : lang === 'en' ? d.nameEn : d.nameZh;
  const getDesc = (d: Destination) => lang === 'id' ? d.descId : lang === 'en' ? d.descEn : d.descZh;

  const buildWAMsg = (keyword: string) => {
    const msgs: Record<Lang, string> = {
      id: `Halo Syawal Tour, saya ingin paket ${keyword}. Mohon informasi lebih lanjut.`,
      en: `Hello Syawal Tour, I am interested in a tour to ${keyword.replace('wisata ke ', '')}. Please provide more information.`,
      zh: `您好 Syawal Tour，我想了解${keyword.replace('wisata ke ', '')}的旅游套餐。请提供更多信息。`
    };
    return encodeURIComponent(msgs[lang]);
  };

  return (
    <section id="destinations" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
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

        {/* Destinations Grid */}
        {/* BENTO GRID: 6 cards, grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* col-1: Vihara | col-2: Barelang | col-3: TreasureBay */}
          {/* col-1: Nongsa | col-2: Kelenteng | col-3: TamanRusa */}
          {destinations.map((dest, i) =>
          <div
            key={i}
            className={`reveal reveal-delay-${i % 3 + 1} card-hover glass rounded-2xl overflow-hidden group`}>
            
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={dest.image}
                alt={dest.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              
                {/* Scrim for white text — dark gradient from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/80 via-[#0D1B3E]/30 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full glass text-foreground">
                    {dest.tag}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                dest.tagType === 'free' ? 'bg-green-500/20 text-green-300 border border-green-400/30' : 'bg-accent/20 text-accent border border-accent/30'}`
                }>
                    {dest.tagType === 'free' ? labels.free : labels.paid}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-base font-bold text-foreground leading-tight">
                  {getName(dest)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {getDesc(dest)}
                </p>
                <a
                href={`https://wa.me/6281269065423?text=${buildWAMsg(dest.waKeyword)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full text-center py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mt-1">
                
                  <Icon name="MapPinIcon" size={14} />
                  {labels.explore}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}