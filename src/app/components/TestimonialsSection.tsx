'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh';

interface TestimonialsSectionProps {
  lang: Lang;
}

const sectionLabels: Record<Lang, {eyebrow: string;title: string;subtitle: string;}> = {
  id: {
    eyebrow: 'Testimoni Pelanggan',
    title: 'Kata Mereka Tentang Kami',
    subtitle: 'Ribuan pelanggan puas telah mempercayakan perjalanan mereka kepada Syawal Tour.'
  },
  en: {
    eyebrow: 'Customer Testimonials',
    title: 'What They Say About Us',
    subtitle: 'Thousands of satisfied customers have trusted their journeys to Syawal Tour.'
  },
  zh: {
    eyebrow: '客户评价',
    title: '他们怎么说',
    subtitle: '数千名满意的客户已将他们的旅程托付给 Syawal Tour。'
  }
};

interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  avatarAlt: string;
  textId: string;
  textEn: string;
  textZh: string;
  vehicle: string;
  stars: number;
  flag: string;
}

const testimonials: Testimonial[] = [
{
  name: 'Tan Wei Liang',
  location: 'Singapore',
  flag: '🇸🇬',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_157ffb0eb-1763293906277.png",
  avatarAlt: 'Professional Asian male portrait smiling casual business attire',
  textId: 'Sangat memuaskan! Driver tepat waktu, mobil bersih dan nyaman. Antar jemput dari Bandara Hang Nadim berjalan lancar. Highly recommended untuk wisatawan dari Singapura!',
  textEn: 'Very satisfying! Driver was punctual, car was clean and comfortable. Airport transfer from Hang Nadim went smoothly. Highly recommended for tourists from Singapore!',
  textZh: '非常满意！司机准时，车辆干净舒适。从汉纳丁机场接送非常顺利。强烈推荐给来自新加坡的游客！',
  vehicle: 'Alphard VVIP',
  stars: 5
},
{
  name: 'Nurul Aini binti Hassan',
  location: 'Kuala Lumpur, Malaysia',
  flag: '🇲🇾',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1efd5d9c9-1772243470613.png",
  avatarAlt: 'Smiling Malay woman with hijab professional portrait warm natural light',
  textId: 'Paket wisata harian ke Vihara dan Jembatan Barelang sangat berkesan. Guide ramah, harga sesuai. Kami bayar dengan MYR, tidak ada masalah sama sekali!',
  textEn: 'Daily tour package to the Vihara and Barelang Bridge was very memorable. Friendly guide, fair price. We paid in MYR, no issues at all!',
  textZh: '前往寺庙和巴勒朗大桥的一日游套餐非常难忘。导游友好，价格合理。我们用马来西亚林吉特支付，完全没有问题！',
  vehicle: 'Innova Reborn',
  stars: 5
},
{
  name: 'Li Jianming',
  location: 'Guangzhou, China',
  flag: '🇨🇳',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1f09ffa-1763296911571.png",
  avatarAlt: 'Chinese male professional smiling friendly portrait natural background',
  textId: 'Kami rombongan 15 orang dari China, sewa Bus Medium untuk wisata keliling Batam. Sopir sabar dan tahu rute. Bisa bayar SGD, sangat mudah!',
  textEn: 'We were a group of 15 from China, rented a Medium Bus for a tour around Batam. Patient driver who knows the routes. Can pay in SGD, very convenient!',
  textZh: '我们是15人的中国旅游团，租了中型巴士游览巴淡岛。司机耐心且熟悉路线。可以用新加坡元支付，非常方便！',
  vehicle: 'Bus Medium',
  stars: 5
},
{
  name: 'Budi Santoso',
  location: 'Batam, Indonesia',
  flag: '🇮🇩',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fce099d4-1763299045980.png",
  avatarAlt: 'Indonesian male smiling relaxed casual portrait warm tone',
  textId: 'Sudah beberapa kali pakai Syawal Tour untuk keperluan kantor. Armada selalu bersih, tepat waktu, dan harga kompetitif. Driver juga profesional!',
  textEn: 'I have used Syawal Tour several times for office needs. Fleet is always clean, punctual, and prices are competitive. Drivers are also professional!',
  textZh: '我多次使用 Syawal Tour 满足公司需求。车辆始终干净准时，价格有竞争力，司机也非常专业！',
  vehicle: 'Fortuner VIP',
  stars: 5
}];


export default function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const labels = sectionLabels[lang];
  const [activeIdx, setActiveIdx] = useState(0);

  const getText = (t: Testimonial) => lang === 'id' ? t.textId : lang === 'en' ? t.textEn : t.textZh;

  const prev = () => setActiveIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIdx((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIdx];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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

        {/* Testimonial Slider */}
        <div className="reveal glass rounded-3xl p-8 sm:p-12 gold-border-glow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Photo */}
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/50">
                <AppImage
                  src={active.avatar}
                  alt={active.avatarAlt}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 33vw" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/60 to-transparent" />
                <div className="absolute bottom-3 right-3 text-xs font-sans font-medium uppercase tracking-widest text-white/80">
                  {active.flag} {active.location}
                </div>
              </div>
            </div>

            {/* Right: Quote */}
            <div className="md:col-span-8 flex flex-col gap-6">
              <div className="text-accent opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: active.stars }).map((_, i) =>
                <Icon key={i} name="StarIcon" size={18} variant="solid" className="text-accent" />
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-foreground">
                {getText(active)}
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div>
                  <div className="font-bold text-foreground">{active.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">
                    {active.flag} {active.location}
                  </div>
                  <div className="text-xs text-accent mt-1 font-medium">
                    <Icon name="TruckIcon" size={12} className="inline mr-1" />
                    {active.vehicle}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 glass-light rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Previous">
                    
                    <Icon name="ChevronLeftIcon" size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 glass-light rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Next">
                    
                    <Icon name="ChevronRightIcon" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) =>
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`rounded-full transition-all duration-300 ${
              i === activeIdx ?
              'w-6 h-2 bg-accent' : 'w-2 h-2 bg-border hover:bg-muted-foreground'}`
              }
              aria-label={`Go to testimonial ${i + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

}