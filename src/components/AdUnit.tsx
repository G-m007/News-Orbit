'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-6">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4313015349174016"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key="-fa-1g+5p-4n+og"
        data-ad-client="ca-pub-4313015349174016"
        data-ad-slot="9627021696"
      />
    </div>
  );
} 