'use client';
import { useRef } from 'react';
import Image from 'next/image';

import useFloatingImages from '@/composables/useFloatingImages';

import { motion } from 'framer-motion';

import { main_1, main_2, main_3 } from './images/index';
import { LINKEDIN_URL } from '@/data';

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  return (
    <section id="main" className="relative bg-bg-1">
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-bg-1 md:h-[80vh]"
      >
        <div className="pointer-events-none absolute inset-0 z-[15] bg-bg-1" />
        <motion.div className="relative z-20 mx-auto mt-[-3vw] max-w-[78vw] px-[4vw] text-center md:max-w-[94vw]">
          <motion.p
            className="mb-[1vw] text-[1.25vw] font-semibold uppercase tracking-[0.24em] text-primary md:text-[2.6vw]"
            initial={{ y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Tanuj Sharma
          </motion.p>
          <motion.h1
            className="text-balance text-[5vw] font-extrabold leading-[1.03] text-white md:text-[8vw]"
            initial={{ y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Hello Swiggy! Here&apos;s why you should hire me.
          </motion.h1>
          <motion.p
            className="mx-auto mt-[2vw] max-w-[54vw] text-[1.7vw] font-medium leading-[1.45] text-white md:max-w-[88vw] md:text-[3.4vw]"
            initial={{ y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            I built and shipped this application within hours of learning about this opportunity.
          </motion.p>
          <motion.p
            className="mt-[1.5vw] text-[2.2vw] font-extrabold leading-[1.2] text-white md:text-[4.4vw]"
            initial={{ y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            I don&apos;t just apply. I execute.
          </motion.p>
          <motion.div
            className="mt-[2.5vw] flex flex-col items-center gap-[0.65vw] text-[1.15vw] font-medium text-white md:mt-[4vw] md:text-[2.6vw]"
            initial={{ y: 14 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.7 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
            }}
          >
            <p>AI SaaS Engineer &middot; DevOps Specialist &middot; Founder Engineer</p>
            <p>Kolhapur, India</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto border-b border-primary/70 pb-[0.2vw] text-primary transition hover:text-white"
            >
              LinkedIn Profile
            </a>
          </motion.div>
        </motion.div>
        <div ref={ref1} className={`absolute left-0 top-0 z-10 h-full w-full`}>
          <Image src={main_1} fill={true} alt="" className="" objectFit="cover" />
        </div>

        <div ref={ref2} className={`absolute left-0 top-0 h-full w-full `}>
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={ref3} className={`absolute left-0 top-0 h-full w-full `}>
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
