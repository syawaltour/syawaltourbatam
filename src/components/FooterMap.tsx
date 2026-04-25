'use client';

export default function FooterMap() {
  return (
    <div className="w-full h-32 rounded-lg overflow-hidden border border-border/30">
      <iframe
        src="https://maps.google.com/maps?q=Syawal+Tour+Travel+Batam&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
