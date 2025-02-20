'use client';

import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-6">
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