'use client';

import React, { useState } from 'react';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface GoogleReviewRequestProps {
  lang: Lang;
}

const reviewContent: Record<Lang, {
  title: string;
  subtitle: string;
  ctaButton: string;
  thankYou: string;
  instructions: string;
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
}> = {
  id: {
    title: 'Review Syawal Tour di Google',
    subtitle: 'Bantu kami lebih dikenal dengan ulasan Anda. Terima kasih atas kepercayaan Anda!',
    ctaButton: 'Berikan Review Google',
    thankYou: 'Terima kasih sudah memberikan review! 🙏',
    instructions: 'Cara memberikan review:',
    benefits: [
      {
        icon: '🎯',
        title: 'Membantu orang lain',
        description: 'Ulasan Anda membantu wisatawan lain menemukan layanan terpercaya',
      },
      {
        icon: '📈',
        title: 'Meningkatkan kualitas',
        description: 'Feedback Anda membantu kami terus meningkatkan pelayanan',
      },
      {
        icon: '🎁',
        title: 'Diskon khusus',
        description: 'Dapatkan diskon 5% untuk pemesanan berikutnya (sertakan screenshot review)',
      },
    ],
  },
  en: {
    title: 'Review Syawal Tour on Google',
    subtitle: 'Help us get discovered with your review. Thank you for your trust!',
    ctaButton: 'Leave a Google Review',
    thankYou: 'Thank you for leaving a review! 🙏',
    instructions: 'How to leave a review:',
    benefits: [
      {
        icon: '🎯',
        title: 'Help others discover',
        description: 'Your review helps other travelers find trusted services',
      },
      {
        icon: '📈',
        title: 'Improve quality',
        description: 'Your feedback helps us continuously improve our service',
      },
      {
        icon: '🎁',
        title: 'Special discount',
        description: 'Get 5% discount on next booking (include review screenshot)',
      },
    ],
  },
  zh: {
    title: '在 Google 上评价 Syawal Tour',
    subtitle: '通过您的评价帮助我们被更多人发现。感谢您的信任！',
    ctaButton: '留下 Google 评价',
    thankYou: '感谢您的评价！🙏',
    instructions: '如何留下评价：',
    benefits: [
      {
        icon: '🎯',
        title: '帮助他人发现',
        description: '您的评价帮助其他游客找到值得信赖的服务',
      },
      {
        icon: '📈',
        title: '提高质量',
        description: '您的反馈帮助我们持续改进服务',
      },
      {
        icon: '🎁',
        title: '特别折扣',
        description: '下次预订享 5% 折扣（附评价截图）',
      },
    ],
  },
  ms: {
    title: 'Ulas Syawal Tour di Google',
    subtitle: 'Bantu kami ditemui dengan ulasan anda. Terima kasih atas kepercayaan anda!',
    ctaButton: 'Tinggalkan Ulasan Google',
    thankYou: 'Terima kasih kerana meninggalkan ulasan! 🙏',
    instructions: 'Cara meninggalkan ulasan:',
    benefits: [
      {
        icon: '🎯',
        title: 'Bantu orang lain',
        description: 'Ulasan anda membantu pelancong lain menemui perkhidmatan dipercayai',
      },
      {
        icon: '📈',
        title: 'Tingkatkan kualiti',
        description: 'Feedback anda membantu kami terus meningkatkan perkhidmatan',
      },
      {
        icon: '🎁',
        title: 'Diskaun istimewa',
        description: 'Dapat diskaun 5% untuk tempahan seterusnya (sertakan screenshot ulasan)',
      },
    ],
  },
};

// Google Business Profile URL untuk Syawal Tour
const GOOGLE_BUSINESS_URL = 'https://www.google.com/search?kgmid=/g/11z5890c6b&hl=en-ID&q=Syawal+Tour&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=0ede12b39a299a92&utm_source=sh/x/loc/osrp/m5/1#lrd=0x31d98fc6320b451b:0x1a68745d6b431c99,3';

export default function GoogleReviewRequest({ lang }: GoogleReviewRequestProps) {
  const [submitted, setSubmitted] = useState(false);
  const content = reviewContent[lang];

  const handleLeaveReview = () => {
    window.open(GOOGLE_BUSINESS_URL, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#0D1B3E] to-[#0A2F6C]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.52 8.999c-.04-.308-.128-.605-.257-.883l-.03-.06a3.7 3.7 0 00-.476-.733l-.044-.05c-.184-.19-.388-.36-.608-.506l-.058-.036a3.87 3.87 0 00-.775-.377l-.063-.022a3.69 3.69 0 00-.846-.14l-.057-.002H4.02c-.29 0-.574.045-.846.135l-.063.022a3.87 3.87 0 00-.775.377l-.058.036a3.73 3.73 0 00-.608.506l-.044.05a3.7 3.7 0 00-.476.733l-.03.06a3.76 3.76 0 00-.257.883l-.011.064c-.024.173-.036.35-.036.53v4.808c0 .18.012.357.036.53l.011.064c.04.308.128.605.257.883l.03.06c.13.24.289.462.476.733l.044.05c.184.19.388.36.608.506l.058.036c.24.14.5.266.775.377l.063.022c.272.09.556.135.846.135h15.96c.29 0 .574-.045.846-.135l.063-.022a3.87 3.87 0 00.775-.377l.058-.036a3.73 3.73 0 00.608-.506l.044-.05a3.7 3.7 0 00.476-.733l.03-.06a3.76 3.76 0 00.257-.883l.011-.064c.024-.173.036-.35.036-.53V9.593c0-.18-.012-.357-.036-.53l-.011-.064zM8.81 15.33l-3.45-2.145 3.45-2.145v4.29zm6.38-4.29l3.45 2.145-3.45 2.145v-4.29z" />
            </svg>
            <span className="text-2xl font-bold text-accent">Google Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-[#8FA3CC] text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {content.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#8FA3CC]">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {!submitted ? (
          <div className="text-center">
            <button
              onClick={handleLeaveReview}
              className="inline-flex items-center gap-3 bg-accent text-foreground px-10 py-5 rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.52 8.999c-.04-.308-.128-.605-.257-.883l-.03-.06a3.7 3.7 0 00-.476-.733l-.044-.05c-.184-.19-.388-.36-.608-.506l-.058-.036a3.87 3.87 0 00-.775-.377l-.063-.022a3.69 3.69 0 00-.846-.14l-.057-.002H4.02c-.29 0-.574.045-.846.135l-.063.022a3.87 3.87 0 00-.775.377l-.058.036a3.73 3.73 0 00-.608.506l-.044.05a3.7 3.7 0 00-.476.733l-.03.06a3.76 3.76 0 00-.257.883l-.011.064c-.024.173-.036.35-.036.53v4.808c0 .18.012.357.036.53l.011.064c.04.308.128.605.257.883l.03.06c.13.24.289.462.476.733l.044.05c.184.19.388.36.608.506l.058.036c.24.14.5.266.775.377l.063.022c.272.09.556.135.846.135h15.96c.29 0 .574-.045.846-.135l.063-.022a3.87 3.87 0 00.775-.377l.058-.036a3.73 3.73 0 00.608-.506l.044-.05a3.7 3.7 0 00.476-.733l.03-.06a3.76 3.76 0 00.257-.883l.011-.064c.024-.173.036-.35.036-.53V9.593c0-.18-.012-.357-.036-.53l-.011-.064z" />
              </svg>
              {content.ctaButton}
            </button>

            {/* Instructions */}
            <div className="mt-8 max-w-lg mx-auto text-left">
              <h4 className="text-white font-semibold mb-3 text-center">{content.instructions}</h4>
              <ol className="space-y-2 text-sm text-[#8FA3CC]">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Klik tombol di atas (akan membuka Google Maps)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Login ke akun Google Anda</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Pilih bintang rating (1-5) ⭐⭐⭐⭐⭐</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>Tulis ulasan pengalaman Anda</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">5.</span>
                  <span>Klik "Post" untuk membagikan</span>
                </li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">{content.thankYou}</h3>
            <p className="text-[#8FA3CC]">
              Jangan lupa screenshot review Anda untuk diskon 5% di pemesanan berikutnya!
            </p>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          <div className="flex items-center gap-2 text-[#8FA3CC]">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Google Verified Business</span>
          </div>
          <div className="flex items-center gap-2 text-[#8FA3CC]">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">1000+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2 text-[#8FA3CC]">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">4.8★ Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
