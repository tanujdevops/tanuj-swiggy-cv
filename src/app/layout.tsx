'use client';

import Lenis from 'lenis';

import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

import '@/shared/styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();
    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
