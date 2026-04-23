'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="services" className="relative border-t border-gray-1 bg-bg-1 py-[6vw] md:py-[4vw]">
      <SectionTitle title="WHY I'M A FIT FOR SWIGGY." classes="text-right px-[6vw] md:px-[3vw] pt-[3vw]" />
      <p className="px-[6vw] pt-[2vw] text-[2.2vw] font-medium text-text-1 md:px-[3vw] md:text-center md:text-[4vw]">
        You need someone who can:
      </p>
      <ul className="grid grid-cols-2 gap-[1.2vw] px-[6vw] py-[3vw] md:grid-cols-1 md:gap-[2vw] md:px-[3vw]">
        {CARDS.map((card, index) => (
          <motion.li
            key={card.title}
            className="interactive-card border-t border-gray-1/70 py-[2vw] text-[3vw] font-light leading-[1.15] md:py-[3vw] md:text-center md:text-[6vw]"
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {card.title}
          </motion.li>
        ))}
      </ul>
      <p className="px-[6vw] pt-[1vw] text-[3.2vw] font-extrabold text-primary md:px-[3vw] md:text-center md:text-[6vw]">
        That&apos;s exactly what I do.
      </p>
    </section>
  );
};
export default Index;
