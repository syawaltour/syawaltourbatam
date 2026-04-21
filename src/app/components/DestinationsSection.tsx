'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh' | 'ms';

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
  },
  ms: {
    eyebrow: 'Destinasi Pelancongan',
    title: 'Terokai Batam Bersama Kami',
    subtitle: 'Dari tokong agam yang megah sehingga ke pantai yang indah — kami bawa anda ke semua destinasi terbaik di Batam.',
    explore: 'Terokai',
    free: 'Percuma',
    paid: 'Berbayar'
  }
};

interface Destination {
  nameId: string;
  nameEn: string;
  nameZh: string;
  nameMs: string;
  descId: string;
  descEn: string;
  descZh: string;
  descMs: string;
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
  nameMs: 'Maha Vihara Duta Maitreya',
  descId: 'Vihara Buddha terbesar di Asia Tenggara. Dibangun tahun 1991, memiliki 5 aula doa dan restoran vegetarian. Populer di kalangan wisatawan China, Singapura & Korea.',
  descEn: 'The largest Buddhist temple in Southeast Asia. Built in 1991, featuring 5 prayer halls and a vegetarian restaurant. Popular with Chinese, Singaporean & Korean tourists.',
  descZh: '东南亚最大的佛教寺庙，建于1991年，设有5个祈祷大厅和素食餐厅，深受中国、新加坡和韩国游客喜爱。',
  descMs: 'Kuil Buddha terbesar di Asia Tenggara. Dibina pada tahun 1991, mempunyai 5 dewan sembahyang dan restoran vegetarian. Popular di kalangan pelancong dari China, Singapura & Korea.',
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhth1aMUPdUk4w89NiFPkiQH97l1kTowjonRKTGCFmlu7_pHbJddgPWU7s66TT977wUjyPPWpQzjSSP7wSf7dsdJhDfXZIMFDpO-DFazgh8yTrx2nbKkoRl8aji1fSzJ_sY-xTu/s1600/01+Maha+Vihara+Duta+Maitreya+Monastery+%2528%25E5%25A4%25A9%25E6%2581%25A9%25E5%25BC%25A5%25E5%258B%2592%25E4%25BD%259B%25E9%2599%25A2%2529+%2540+Batam+Island+%255BIndonesia%255D+%2528Large%2529.JPG",
  imageAlt: 'Grand Buddhist temple with ornate golden roof architecture surrounded by tropical greenery dim atmospheric',
  tag: 'Vihara',
  tagType: 'free',
  waKeyword: 'wisata ke Maha Vihara Duta Maitreya'
},
{
  nameId: 'Jembatan Barelang',
  nameEn: 'Barelang Bridge',
  nameZh: '巴勒朗大桥',
  nameMs: 'Jambatan Barelang',
  descId: 'Ikon Batam — 6 jembatan megah yang menghubungkan Pulau Batam, Rempang, dan Galang. Pemandangan laut yang menakjubkan sepanjang perjalanan.',
  descEn: 'Batam\'s icon — 6 magnificent bridges connecting Batam, Rempang, and Galang islands. Stunning sea views throughout the journey.',
  descZh: '巴淡岛的标志性建筑——6座宏伟大桥连接巴淡岛、伦邦岛和加朗岛，沿途海景令人叹为观止。',
  descMs: 'Ikon Batam — 6 jambatan megah yang menghubungkan Pulau Batam, Rempang, dan Galang. Pemandangan laut yang menakjubkan sepanjang perjalanan.',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NMR2cg30r-ILgKw7lWpXdgmbOxklrzPr3nYWZEPH1xpNWdLXsSqXwabAhq56LxZguFC986I_WZbzi3dUS8BKRRYZcsSEEy_z-7kCf8wP&s=10",
  imageAlt: 'Long suspension bridge over turquoise tropical sea water golden hour atmospheric dark shadows',
  tag: 'Landmark',
  tagType: 'free',
  waKeyword: 'wisata ke Jembatan Barelang'
},
{
  nameId: 'Treasure Bay Batam',
  nameEn: 'Treasure Bay Batam',
  nameZh: '宝湾巴淡岛',
  nameMs: 'Treasure Bay Batam',
  descId: 'Taman air dan resort premium dengan wahana seru, kolam renang raksasa, dan patung ikonik. Destinasi keluarga terfavorit di Batam.',
  descEn: 'Premium water park and resort with exciting rides, giant pool, and iconic statues. Batam\'s most popular family destination.',
  descZh: '高端水上乐园和度假村，设有刺激的游乐设施、巨型泳池和标志性雕塑，是巴淡岛最受欢迎的家庭 destinations.',
  descMs: 'Taman air dan resort premium dengan wahana seru, kolam renang raksasa, dan patung ikonik. Destinasi keluarga terfavorit di Batam.',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nP0zMNCbik9o3JGPpVlkYicerwkitG-1Sg&s=10",
  imageAlt: 'Tropical water park with slides and pools surrounded by palm trees bright sunny day',
  tag: 'Water Park',
  tagType: 'paid',
  waKeyword: 'wisata ke Treasure Bay Batam'
},
{
  nameId: 'Puncak Beliung',
  nameEn: 'Puncak Beliung',
  nameZh: '巴淡普纳卡贝隆',
  nameMs: 'Puncak Beliung',
  descId: 'Tempat wisata alam dengan pemandangan kota Batam dan selat Singapura yang indah. Cocok untuk camping, foto-foto, dan menikmati udara pegunungan.',
  descEn: 'Nature tourism spot with beautiful views of Batam city and the Singapore strait. Perfect for camping, photography, and enjoying mountain air.',
  descZh: '自然旅游景点，可欣赏巴淡市和新加坡海峡的美丽景色，非常适合露营、摄影和享受山间空气。',
  descMs: 'Tempat pelancongan semula jadi dengan pemandangan bandar Batam dan selat Singapura yang indah. Sesuai untuk berkhemah, fotografi, dan menikmati udara gunung.',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_xgdc7X0XZ-4SECauwx17I1mjwxaehQpmA&s",
  imageAlt: 'Scenic mountain viewpoint overlooking city skyline and ocean with atmospheric sunset',
  tag: 'Wisata Alam',
  tagType: 'free',
  waKeyword: 'wisata ke Puncak Beliung Batam'
},
{
  nameId: 'Kelenteng Tua Pek Kong',
  nameEn: 'Tua Pek Kong Temple',
  nameZh: '大伯公庙',
  nameMs: 'Kuil Tua Pek Kong',
  descId: 'Klenteng bersejarah dengan arsitektur Tionghoa yang indah. Lampion merah menghiasi seluruh kompleks, menjadi spot foto yang menakjubkan.',
  descEn: 'Historic Chinese temple with beautiful architecture. Red lanterns adorn the entire complex, making it an amazing photo spot.',
  descZh: '历史悠久的中式庙宇，建筑精美，红灯笼点缀整个建筑群，是绝佳的拍照胜地。',
  descMs: 'Kuil Cina bersejarah dengan seni bina yang indah. Lampion merah menghiasi seluruh kompleks, menjadikannya tempat foto yang menakjubkan.',
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
  nameMs: 'Taman Rusa Sekupang',
  descId: 'Taman mini dengan berbagai satwa liar di lahan 12,2 hektar. Tiket masuk sangat terjangkau — cocok untuk wisata keluarga bersama anak.',
  descEn: 'Mini zoo with various wildlife on 12.2 hectares of land. Very affordable entrance fee — perfect for family trips with children.',
  descZh: '占地12.2公顷的小型动物园，栖息着各种野生动物，门票非常实惠，非常适合携带孩子的家庭游览。',
  descMs: 'Zoo mini dengan pelbagai hidupan liar di tanah seluas 12.2 hektar. Yuran masuk yang sangat berpatutan — sesuai untuk percutian keluarga dengan kanak-kanak.',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuVSbKm_vD7fe9gwD8rdzK4UQ9hVxhlGm7A&s=10",
  imageAlt: 'Lush tropical nature park with deer grazing green grass trees atmospheric natural light',
  tag: 'Taman',
  tagType: 'paid',
  waKeyword: 'wisata ke Taman Rusa Sekupang'
},
{
  nameId: 'Masjid Sultan Mahmud Riayat Syah',
  nameEn: 'Sultan Mahmud Riayat Syah Mosque',
  nameZh: '苏丹·马哈茂德·利亚特·沙阿清真寺',
  nameMs: 'Masjid Sultan Mahmud Riayat Syah',
  descId: 'Masjid bersejarah dengan arsitektur Islam yang megah di pusat kota Batam. Landmark religius yang menakjubkan dan wisata sejarah.',
  descEn: 'Historic mosque with magnificent Islamic architecture in the heart of Batam city. A stunning religious landmark and historical tourism site.',
  descZh: '位于巴淡市中心的宏伟历史清真寺，拥有壮观的伊斯兰建筑，是令人惊叹的宗教地标和历史旅游景点。',
  descMs: 'Masjid bersejarah dengan seni bina Islam yang megah di pusat bandar Batam. Landmark agama yang menakjubkan dan pelancongan sejarah.',
  image: "https://masjidsultan.org/wp-content/uploads/2020/02/Mesjid-Sultan-768x512-1.jpg",
  imageAlt: 'Grand mosque with Islamic architecture domes and minarets under blue sky',
  tag: 'Masjid',
  tagType: 'free',
  waKeyword: 'wisata ke Masjid Sultan Mahmud Riayat Syah'
},
{
  nameId: 'Welcome to Batam',
  nameEn: 'Welcome to Batam',
  nameZh: '欢迎来到巴淡岛',
  nameMs: 'Selamat Datang ke Batam',
  descId: 'Ikonik landmark patung welcome di gerbang masuk Batam. Spot foto favorit wisatawan sebagai bukti kunjungan ke pulau Batam.',
  descEn: 'Iconic welcome statue landmark at Batam entrance gate. A favorite photo spot for tourists as proof of their visit to Batam island.',
  descZh: '巴淡岛入口处的标志性欢迎雕塑，是游客最喜爱的拍照打卡点，作为访问巴淡岛的纪念。',
  descMs: 'Landmark patung selamat datang yang ikonik di pintu masuk Batam. Tempat foto kegemaran pelancong sebagai bukti kunjungan mereka ke pulau Batam.',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1j-udFLGd2Mck-GaoSbr4xZxg2MMVWjcDpw&s",
  imageAlt: 'Iconic welcome monument landmark with city background',
  tag: 'Landmark',
  tagType: 'free',
  waKeyword: 'wisata ke Welcome to Batam'
},
{
  nameId: 'Padang Golf',
  nameEn:  'Golf Course',
  nameZh: '苏卡贾迪高尔夫球场',
  nameMs: 'Padang Golf',
  descId: 'Lapangan golf 18-hole dengan pemandangan laut yang indah. Fasilitas lengkap dengan clubhouse, restoran, dan pro shop. Cocok untuk pemula hingga profesional.',
  descEn: '18-hole golf course with beautiful sea views. Complete facilities including clubhouse, restaurant, and pro shop. Suitable for beginners to professionals.',
  descZh: '18洞高尔夫球场，拥有海景美景。设施齐全，包括会所、餐厅和专业用品店，适合从初学者到专业人士。',
  descMs: 'Lapangan golf 18-lubang dengan pemandangan laut yang indah. Kemudahan lengkap termasuk clubhouse, restoran dan pro shop. Sesuai untuk pemula hingga profesional.',
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDc5j4rlV7d4PtMOkE2TNSP5IxNtqeVB0q4w&s",
  imageAlt: 'Green golf course with manicured grass overlooking blue sea and skyline',
  tag: 'Golf',
  tagType: 'paid',
  waKeyword: 'wisata ke Padang Golf'
}];


// BENTO GRID AUDIT:
// Array has 9 cards: [Vihara, Barelang, TreasureBay, PuncakBeliung, Kelenteng, TamanRusa, MasjidSultan, WelcomeToBatam, Golf]
// Desktop grid-cols-3:
// Row 1: [col-1: Vihara] [col-2: Barelang] [col-3: TreasureBay]
// Row 2: [col-1: PuncakBeliung] [col-2: Kelenteng] [col-3: TamanRusa]
// Row 3: [col-1: MasjidSultan] [col-2: WelcomeToBatam] [col-3: Golf]
// Placed 9/9 cards ✓

export default function DestinationsSection({ lang }: DestinationsSectionProps) {
  const labels = sectionLabels[lang];

  const getName = (d: Destination) => lang === 'id' ? d.nameId : lang === 'en' ? d.nameEn : lang === 'zh' ? d.nameZh : d.nameMs;
  const getDesc = (d: Destination) => lang === 'id' ? d.descId : lang === 'en' ? d.descEn : lang === 'zh' ? d.descZh : d.descMs;

  const buildWAMsg = (keyword: string) => {
    const msgs: Record<Lang, string> = {
      id: `Halo Syawal Tour, saya ingin paket ${keyword}. Mohon informasi lebih lanjut.`,
      en: `Hello Syawal Tour, I am interested in a tour to ${keyword.replace('wisata ke ', '')}. Please provide more information.`,
      zh: `您好 Syawal Tour，我想了解${keyword.replace('wisata ke ', '')}的旅游套餐。请提供更多信息。`,
      ms: `Hai Syawal Tour, saya berminat untuk lawatan ke ${keyword.replace('wisata ke ', '')}. Sila berikan maklumat lanjut.`
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
        {/* BENTO GRID: 9 cards, grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Row 1: col-1: Vihara | col-2: Barelang | col-3: TreasureBay */}
          {/* Row 2: col-1: PuncakBeliung | col-2: Kelenteng | col-3: TamanRusa */}
          {/* Row 3: col-1: MasjidSultan | col-2: WelcomeToBatam | col-3: Golf */}
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