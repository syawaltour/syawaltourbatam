'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type Lang = 'id' | 'en' | 'zh';

interface ContactSectionProps {
  lang: Lang;
}

const sectionContent: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submitBtn: string;
  directWA: string;
  callUs: string;
  addressLabel: string;
  hoursLabel: string;
  hoursVal: string;
  currencyLabel: string;
}> = {
  id: {
    eyebrow: 'Hubungi Kami',
    title: 'Pesan Sekarang',
    subtitle: 'Kirim pesan dan kami akan segera merespons via WhatsApp.',
    namePlaceholder: 'Nama Lengkap',
    emailPlaceholder: 'Alamat Email',
    phonePlaceholder: 'Nomor Telepon / WhatsApp',
    messagePlaceholder: 'Pesan Anda (kendaraan, tanggal, jumlah penumpang, dll.)',
    submitBtn: 'Kirim via WhatsApp',
    directWA: 'Chat Langsung',
    callUs: 'Telepon Kami',
    addressLabel: 'Alamat',
    hoursLabel: 'Jam Operasional',
    hoursVal: '24 Jam / 7 Hari',
    currencyLabel: 'Mata Uang Diterima',
  },
  en: {
    eyebrow: 'Contact Us',
    title: 'Book Now',
    subtitle: 'Send a message and we will respond promptly via WhatsApp.',
    namePlaceholder: 'Full Name',
    emailPlaceholder: 'Email Address',
    phonePlaceholder: 'Phone / WhatsApp Number',
    messagePlaceholder: 'Your message (vehicle, date, number of passengers, etc.)',
    submitBtn: 'Send via WhatsApp',
    directWA: 'Direct Chat',
    callUs: 'Call Us',
    addressLabel: 'Address',
    hoursLabel: 'Operating Hours',
    hoursVal: '24 Hours / 7 Days',
    currencyLabel: 'Accepted Currencies',
  },
  zh: {
    eyebrow: '联系我们',
    title: '立即预订',
    subtitle: '发送消息，我们将通过WhatsApp及时回复。',
    namePlaceholder: '全名',
    emailPlaceholder: '电子邮件地址',
    phonePlaceholder: '电话 / WhatsApp号码',
    messagePlaceholder: '您的留言（车辆、日期、乘客人数等）',
    submitBtn: '通过WhatsApp发送',
    directWA: '直接聊天',
    callUs: '致电我们',
    addressLabel: '地址',
    hoursLabel: '营业时间',
    hoursVal: '24小时 / 7天',
    currencyLabel: '接受货币',
  },
};

export default function ContactSection({ lang }: ContactSectionProps) {
  const c = sectionContent[lang];
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Syawal Tour!\n\nNama: ${form.name}\nEmail: ${form.email}\nTelepon: ${form.phone}\n\nPesan:\n${form.message}`;
    const url = `https://wa.me/6281269065423?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const inputClass = `w-full bg-transparent border border-border/50 rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-200`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-3 block">{c.eyebrow}</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {c.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="reveal flex flex-col gap-6">
            {/* Info Card */}
            <div className="glass rounded-2xl p-8 flex flex-col gap-6 gold-border-glow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-light flex items-center justify-center shrink-0">
                  <Icon name="MapPinIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{c.addressLabel}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Simpang Kara, Ruko Kara Junction, Jl. Ahmad Yani Blok A No 2-3,
                    Taman Baloi, Batam Kota, Kepulauan Riau 29432
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass-light flex items-center justify-center shrink-0">
                  <Icon name="ClockIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{c.hoursLabel}</div>
                  <p className="text-sm font-bold text-foreground">{c.hoursVal}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass-light flex items-center justify-center shrink-0">
                  <Icon name="CurrencyDollarIcon" size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{c.currencyLabel}</div>
                  <div className="flex gap-2 mt-1">
                    {['MYR', 'SGD'].map((cur) => (
                      <span key={cur} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                        {cur}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                {c.directWA}
              </a>
              <a
                href="tel:+6281269065423"
                className="btn-outline-gold flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold"
              >
                <Icon name="PhoneIcon" size={18} />
                {c.callUs}
              </a>
            </div>

            {/* Phone number display */}
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Icon name="PhoneIcon" size={22} className="text-green-400" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp / Telepon</div>
                <a href="tel:+6281269065423" className="text-lg font-bold text-foreground hover:text-accent transition-colors">
                  0812-6906-5423
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5 gold-border-glow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={c.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder={c.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input
                type="tel"
                placeholder={c.phonePlaceholder}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className={inputClass}
              />
              <textarea
                rows={5}
                placeholder={c.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="btn-gold w-full py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-3"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                {c.submitBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}