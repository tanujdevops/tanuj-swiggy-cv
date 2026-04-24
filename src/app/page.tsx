'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import Credentials from '@/widgets/Credentials';
import Approach from '@/widgets/Approach';
import CallToAction from '@/widgets/CallToAction';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Credentials />
      <Approach />
      <CallToAction />
    </>
  );
}
