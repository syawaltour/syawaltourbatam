'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { useTheme } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface HeaderProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const navLabels: Record<Lang, { home: string; about: string; fleet: string; services: string; destinations: string; contact: string; book: string }> = {
  id: { home: 'Beranda', about: 'Tentang', fleet: 'Armada', services: 'Layanan', destinations: 'Destinasi', contact: 'Kontak', book: 'Pesan Sekarang' },
  en: { home: 'Home', about: 'About', fleet: 'Fleet', services: 'Services', destinations: 'Destinations', contact: 'Contact', book: 'Book Now' },
  zh: { home: '首页', about: '关于', fleet: '车队', services: '服务', destinations: '景点', contact: '联系', book: '立即预订' },
  ms: { home: 'Utama', about: 'Tentang', fleet: 'Armada', services: 'Perkhidmatan', destinations: 'Destinasi', contact: 'Hubungi', book: 'Tempah Sekarang' },
};

export default function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const labels = navLabels[lang];
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: isHomePage ? '#hero' : '/#hero', label: labels.home },
    { href: '/about', label: labels.about },
    { href: isHomePage ? '#fleet' : '/#fleet', label: labels.fleet },
    { href: isHomePage ? '#services' : '/#services', label: labels.services },
    { href: isHomePage ? '#destinations' : '/#destinations', label: labels.destinations },
    { href: isHomePage ? '#contact' : '/#contact', label: labels.contact },
  ];

  const langOptions: { code: Lang; label: string; flag: string }[] = [
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
  ];

  const currentLang = langOptions.find((l) => l.code === lang)!;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-[0_4px_32px_rgba(0,0,0,0.4)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href={isHomePage ? '#hero' : '/'}
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <AppLogo size={40} className="group-hover:scale-105 transition-transform duration-300" />
            <div className="hidden sm:block">
              <span className="block font-extrabold text-base tracking-tight text-foreground leading-tight">
                SYAWAL TOUR
              </span>
              <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-accent leading-tight">
                & TRAVEL
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-light text-foreground hover:text-accent transition-all duration-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-light text-sm font-medium text-foreground hover:border-accent/40 transition-all duration-200"
                aria-label="Switch language"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden sm:block text-xs">{currentLang.label}</span>
                <Icon name="ChevronDownIcon" size={14} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 glass rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-border/50">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => { setLang(opt.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                        lang === opt.code
                          ? 'text-accent bg-accent/10' : 'text-foreground hover:bg-white/5'
                      }`}
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp CTA - desktop */}
            <a
              href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 btn-gold px-4 py-2 rounded-xl text-sm font-bold"
            >
              <Icon name="PhoneIcon" size={16} />
              {labels.book}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg glass-light text-foreground"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <Icon name="XMarkIcon" size={22} />
              ) : (
                <Icon name="Bars3Icon" size={22} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: theme === 'dark' ? 'rgba(10, 47, 108, 0.97)' : 'rgba(240, 244, 255, 0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-foreground hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20ingin%20informasi%20lebih%20lanjut"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-gold px-8 py-3 rounded-xl text-base font-bold flex items-center gap-2 mt-4"
          >
            <Icon name="PhoneIcon" size={18} />
            {labels.book}
          </a>
        </div>
      </div>
    </>
  );
}