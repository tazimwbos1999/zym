'use client';

import { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return <>{children}</>;
}
