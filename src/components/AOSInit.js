'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      disable: 'mobile', // Disable on mobile to prevent layout shifts
      mirror: false,
      disableMutationObserver: false,
    });
  }, []);

  return null;
}
