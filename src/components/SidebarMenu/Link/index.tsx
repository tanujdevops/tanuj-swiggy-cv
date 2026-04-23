import { motion } from 'framer-motion';
import { slide, scale } from '@/shared/utils/animations';

import { FC, MouseEvent } from 'react';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
  handleClick: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const Index: FC<Props> = ({ data, isActive, setSelectedIndicator, handleClick }) => {
  const { title, href, index } = data;

  return (
    <motion.a
      href={`#${href}`}
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      <motion.div
        className="absolute left-0 inline-block h-[0.6vw] w-[0.6vw] rounded-full bg-white"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <div
        tabIndex={0}
        className="cursor-pointer text-[2.1vw] font-semibold leading-[1.28] tracking-wide transition-[cubic-bezier(.16,1,.3,1)] duration-200 hover:translate-x-[1.2vw] md:text-[5vw] md:leading-[1.22]"
      >
        {title}
      </div>
    </motion.a>
  );
};
export default Index;
