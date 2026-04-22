'use client';

import React, { useState } from 'react';

type Lang = 'id' | 'en' | 'zh' | 'ms';

interface FaqSectionProps {
  lang: Lang;
}

const faqContent: Record<Lang, {
  title: string;
  subtitle: string;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}> = {
  id: {
    title: 'FAQ - Pertanyaan Umum',
    subtitle: 'Informasi yang sering ditanyakan tentang Syawal Tour',
    faqs: [
      {
        q: 'Apa itu Syawal Tour?',
        a: 'Syawal Tour adalah perusahaan travel dan rental mobil terpercaya di Batam sejak 2020. Kami menyediakan layanan rental mobil, tour package, dan antar jemput bandara dengan harga terjangkau dan pelayanan 24 jam. Melayani ribuan pelanggan lokal dan internasional dengan dedikasi tinggi.',
      },
      {
        q: 'Bagaimana cara booking di Syawal Tour?',
        a: 'Booking di Syawal Tour sangat mudah. Cukup hubungi kami via WhatsApp di +6281269065423, kami akan segera merespon dan membantu Anda memilih armada yang sesuai dengan kebutuhan. Bisa juga booking via website syawaltour.com.',
      },
      {
        q: 'Berapa harga rental mobil di Syawal Tour?',
        a: 'Harga rental mobil di Syawal Tour bervariasi tergantung jenis armada dan durasi sewa. Mulai dari Rp 350.000/hari untuk city car, Rp 500.000/hari untuk MPV seperti Avanza/Innova. Hubungi kami untuk penawaran terbaik dengan harga spesial untuk long term rental.',
      },
      {
        q: 'Apakah Syawal Tour menerima pembayaran SGD dan MYR?',
        a: 'Ya, Syawal Tour menerima pembayaran dalam berbagai mata uang termasuk SGD dan MYR dengan kurs kompetitif. Ini memudahkan wisatawan dari Singapura dan Malaysia. Kami juga terima transfer bank dan e-wallet.',
      },
      {
        q: 'Destinasi wisata apa saja yang ditawarkan Syawal Tour?',
        a: 'Syawal Tour menawarkan paket wisata ke berbagai destinasi populer di Batam seperti Maha Vihara Duta Maitreya (vihara Buddha terbesar di Asia Tenggara), Jembatan Barelang, Treasure Bay, Pantai Nongsa, Ocarina Park, dan berbagai tempat kuliner seafood halal.',
      },
      {
        q: 'Apakah sopir Syawal Tour berpengalaman?',
        a: 'Ya, semua sopir Syawal Tour adalah profesional berpengalaman dengan minimum 3 tahun pengalaman. Mereka mengenal baik rute di Batam, ramah, dan siap memberikan pelayanan terbaik untuk kenyamanan perjalanan Anda. Bisa juga menjadi tour guide.',
      },
      {
        q: 'Apakah ada paket tour untuk wisata religi ke Maha Vihara?',
        a: 'Ya, Syawal Tour memiliki paket khusus wisata religi ke Maha Vihara Duta Maitreya. Paket termasuk mobil, sopir, dan bisa di-request untuk wait di lokasi. Sangat cocok untuk rombongan dari Singapura dan Malaysia.',
      },
      {
        q: 'Apakah bisa sewa mobil lepas kunci (tanpa sopir)?',
        a: 'Ya, Syawal Tour menyediakan opsi sewa mobil lepas kunci dengan syarat melengkapi dokumen (KTP/SIM untuk lokal, Passport untuk turis). Deposit diperlukan sebagai jaminan. Namun untuk kenyamanan, kami sarankan sewa dengan sopir.',
      },
      {
        q: 'Apakah Syawal Tour melayani antar jemput dari Singapura?',
        a: 'Ya, kami melayani penjemputan dari Singapura via ferry terminal. Driver kami akan menunggu di Harbour Bay atau Sekupang Ferry Terminal sesuai jadwal kedatangan ferry Anda.',
      },
      {
        q: 'Bagaimana jika mobil mogok di tengah perjalanan?',
        a: 'Jika terjadi kendala, segera hubungi kami via WhatsApp 24 jam. Kami akan mengirim mobil pengganti atau mekanik untuk memperbaiki. Armada Syawal Tour selalu di-maintenance berkala untuk meminimalisir masalah.',
      },
    ],
  },
  en: {
    title: 'FAQ - Frequently Asked Questions',
    subtitle: 'Common questions about Syawal Tour',
    faqs: [
      {
        q: 'What is Syawal Tour?',
        a: 'Syawal Tour is a trusted travel and car rental company in Batam since 2020. We provide car rental, tour packages, and airport transfer services at affordable prices with 24-hour service. Serving thousands of local and international customers with high dedication.',
      },
      {
        q: 'How to book with Syawal Tour?',
        a: 'Booking with Syawal Tour is easy. Simply contact us via WhatsApp at +6281269065423, and we will respond immediately to help you choose the right vehicle. You can also book via our website syawaltour.com.',
      },
      {
        q: 'How much is car rental at Syawal Tour?',
        a: 'Car rental prices at Syawal Tour vary depending on vehicle type and duration. Starting from Rp 350.000/day for city cars, Rp 500.000/day for MPV like Avanza/Innova. Contact us for the best deal with special rates for long term rental.',
      },
      {
        q: 'Does Syawal Tour accept SGD and MYR?',
        a: 'Yes, Syawal Tour accepts payment in various currencies including SGD and MYR at competitive rates. This makes it convenient for tourists from Singapore and Malaysia. We also accept bank transfer and e-wallets.',
      },
      {
        q: 'What destinations does Syawal Tour offer?',
        a: 'Syawal Tour offers tour packages to popular destinations in Batam such as Maha Vihara Duta Maitreya (largest Buddhist temple in Southeast Asia), Barelang Bridge, Treasure Bay, Nongsa Beach, Ocarina Park, and various halal seafood restaurants.',
      },
      {
        q: 'Are Syawal Tour drivers experienced?',
        a: 'Yes, all Syawal Tour drivers are experienced professionals with minimum 3 years experience. They know Batam routes well, friendly, and ready to provide excellent service for your journey. Can also act as tour guides.',
      },
      {
        q: 'Is there a religious tour package to Maha Vihara?',
        a: 'Yes, Syawal Tour has special packages for religious tours to Maha Vihara Duta Maitreya. Package includes car, driver, and can request to wait at location. Perfect for groups from Singapore and Malaysia.',
      },
      {
        q: 'Can I rent a car without driver (self-drive)?',
        a: 'Yes, Syawal Tour provides self-drive car rental with document requirements (KTP/SIM for locals, Passport for tourists). Deposit required as security. However, for comfort, we recommend renting with a driver.',
      },
      {
        q: 'Does Syawal Tour serve pickup from Singapore?',
        a: 'Yes, we serve pickup from Singapore via ferry terminal. Our driver will wait at Harbour Bay or Sekupang Ferry Terminal according to your ferry arrival schedule.',
      },
      {
        q: 'What if the car breaks down during the trip?',
        a: 'If any issue occurs, immediately contact us via WhatsApp 24 hours. We will send a replacement car or mechanic to fix it. Syawal Tour fleet is regularly maintained to minimize problems.',
      },
    ],
  },
  zh: {
    title: '常见问题 - FAQ',
    subtitle: '关于 Syawal Tour 的常见问题',
    faqs: [
      {
        q: '什么是 Syawal Tour?',
        a: 'Syawal Tour 是民丹岛值得信赖的旅游和租车公司。我们提供租车服务、旅游套餐和机场接送服务，价格实惠，24小时服务。',
      },
      {
        q: '如何预订 Syawal Tour?',
        a: '预订 Syawal Tour 非常简单。只需通过 WhatsApp 联系我们 +6281269065423，我们将立即回复并帮助您选择合适的车辆。',
      },
      {
        q: 'Syawal Tour 的租车价格是多少?',
        a: 'Syawal Tour 的租车价格根据车辆类型和租赁期限而有所不同。我们提供有竞争力和透明的价格。联系我们获取最佳优惠。',
      },
      {
        q: 'Syawal Tour 接受新币和马币吗?',
        a: '是的，Syawal Tour 接受多种货币支付，包括新币和马币。这为来自新加坡和马来西亚的游客提供了便利。',
      },
      {
        q: 'Syawal Tour 提供哪些旅游目的地?',
        a: 'Syawal Tour 提供民丹岛热门景点的旅游套餐，如 Maha Vihara Duta Maitreya、巴莱桥、珍宝湾等。',
      },
      {
        q: 'Syawal Tour 的司机有经验吗?',
        a: '是的，所有 Syawal Tour 的司机都是有经验的专业人士，熟悉民丹岛的路线，随时为您的旅程提供优质服务。',
      },
    ],
  },
  ms: {
    title: 'Soalan Lazim - FAQ',
    subtitle: 'Soalan yang sering ditanya tentang Syawal Tour',
    faqs: [
      {
        q: 'Apa itu Syawal Tour?',
        a: 'Syawal Tour adalah syarikat travel dan sewa kereta yang dipercayai di Batam sejak 2020. Kami menyediakan perkhidmatan sewa kereta, pakej pelancongan, dan pemindahan lapangan terbang pada harga berpatutan dengan perkhidmatan 24 jam. Melayani ribuan pelanggan lokal dan antarabangsa dengan dedikasi tinggi.',
      },
      {
        q: 'Bagaimana untuk menempah dengan Syawal Tour?',
        a: 'Menempah dengan Syawal Tour sangat mudah. Hubungi kami melalui WhatsApp di +6281269065423, dan kami akan segera respond dan membantu anda memilih kenderaan yang sesuai. Boleh juga tempah melalui laman web syawaltour.com.',
      },
      {
        q: 'Berapa harga sewa kereta di Syawal Tour?',
        a: 'Harga sewa kereta di Syawal Tour berbeza-beza bergantung kepada jenis kenderaan dan tempoh sewa. Bermula dari Rp 350.000/hari untuk kereta bandar, Rp 500.000/hari untuk MPV seperti Avanza/Innova. Hubungi kami untuk tawaran terbaik dengan harga istimewa untuk sewa jangka panjang.',
      },
      {
        q: 'Adakah Syawal Tour menerima SGD dan MYR?',
        a: 'Ya, Syawal Tour menerima pembayaran dalam pelbagai mata wang termasuk SGD dan MYR dengan kadar kompetitif. Ini memudahkan pelancong dari Singapura dan Malaysia. Kami juga terima pemindahan bank dan e-wallet.',
      },
      {
        q: 'Destinasi pelancongan apa yang ditawarkan oleh Syawal Tour?',
        a: 'Syawal Tour menawarkan pakej pelancongan ke destinasi popular di Batam seperti Maha Vihara Duta Maitreya (kuil Buddha terbesar di Asia Tenggara), Jambatan Barelang, Treasure Bay, Pantai Nongsa, Ocarina Park, dan pelbagai restoran seafood halal.',
      },
      {
        q: 'Adakah pemandu Syawal Tour berpengalaman?',
        a: 'Ya, semua pemandu Syawal Tour adalah profesional berpengalaman dengan minimum 3 tahun pengalaman. Mereka mengetahui laluan di Batam dengan baik, mesra, dan sedia memberikan perkhidmatan terbaik untuk perjalanan anda. Boleh juga menjadi pemandu pelancongan.',
      },
      {
        q: 'Adakah terdapat pakej pelancongan agama ke Maha Vihara?',
        a: 'Ya, Syawal Tour mempunyai pakej khusus untuk pelancongan agama ke Maha Vihara Duta Maitreya. Pakej termasuk kereta, pemandu, dan boleh meminta untuk menunggu di lokasi. Sangat sesuai untuk kumpulan dari Singapura dan Malaysia.',
      },
      {
        q: 'Bolehkah saya sewa kereta tanpa pemandu (pandu sendiri)?',
        a: 'Ya, Syawal Tour menyediakan pilihan sewa kereta tanpa pemandu dengan syarat dokumen (KTP/SIM untuk lokal, Passport untuk pelancong). Deposit diperlukan sebagai jaminan. Walau bagaimanapun, untuk keselesaan, kami syorkan sewa dengan pemandu.',
      },
      {
        q: 'Adakah Syawal Tour melayani penjemputan dari Singapura?',
        a: 'Ya, kami melayani penjemputan dari Singapura melalui terminal ferry. Pemandu kami akan menunggu di Harbour Bay atau Sekupang Ferry Terminal mengikut jadual ketibaan ferry anda.',
      },
      {
        q: 'Bagaimana jika kereta rosak di tengah perjalanan?',
        a: 'Jika berlaku masalah, hubungi kami segera melalui WhatsApp 24 jam. Kami akan menghantar kereta pengganti atau mekanik untuk membaikinya. Armada Syawal Tour sentiasa diselenggara secara berkala untuk meminimumkan masalah.',
      },
    ],
  },
};

export default function FaqSection({ lang }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const content = faqContent[lang];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0D1B3E]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-[#8FA3CC] text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                <span className={`text-accent transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#8FA3CC] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-[#8FA3CC] mb-6">
            Masih punya pertanyaan? Hubungi Syawal Tour sekarang!
          </p>
          <a
            href="https://wa.me/6281269065423?text=Halo%20Syawal%20Tour%2C%20saya%20punya%20pertanyaan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-foreground px-8 py-4 rounded-2xl font-bold hover:bg-accent/90 transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Tanya Syawal Tour
          </a>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
