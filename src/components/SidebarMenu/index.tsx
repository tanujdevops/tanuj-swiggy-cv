import { FC, MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import CustomLink from './Link';

import { LINKEDIN_URL, NAV_ITEMS } from '@/data';

import { menuSlide } from '@/shared/utils/animations';

interface Props {
  close: () => void;
}

const Index: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const smoothScroll = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }
    close();
  };
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[4000] h-screen w-[38vw] bg-gray-1 pb-[6vw] pl-[6vw] pr-[5vw] pt-[7vw] text-text-1 md:w-[78vw] md:px-[8vw] md:pt-[14vw]"
      >
        <div className="mb-[2.2vw] w-full border-b border-white/20 pb-[0.4vw] uppercase text-white ">
          <h3 className="text-[0.9vw] leading-[1.1] md:text-[2vw]">Navigation</h3>
        </div>
        <div className="flex h-full min-h-0 flex-col justify-between gap-[2vw]">
          <nav
            aria-label="Page sections"
            className="flex min-h-0 flex-col justify-end space-y-[0.1vw] overflow-y-auto pr-[0.4vw]"
            onMouseLeave={() => setSelectedIndicator(null)}
          >
            {NAV_ITEMS.map((item, index) => (
              <CustomLink
                handleClick={(event) => smoothScroll(event, item.href)}
                key={item.title}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </nav>

          <Link
            target="_blank"
            rel="noreferrer"
            href={LINKEDIN_URL}
            className="flex w-full items-center justify-center gap-[0.6vw] rounded-sm bg-[#FC8019] px-[0.6vw] py-[0.6vw] transition hover:bg-[#FC8019]/80 active:bg-[#FC8019]/90"
          >
            <svg className="h-[1.2vw] w-[1.2vw]" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45H7.1V9H3.54v11.45z"
              ></path>
            </svg>
            <p className="text-[1vw] font-medium tracking-wide">LinkedIn profile</p>
          </Link>
        </div>
      </motion.div>
      <div
        aria-label="button"
        onClick={close}
        className="fixed bottom-0 left-0 right-0 top-0 z-[750] bg-bg-1/60 transition"
      ></div>
    </>
  );
};
export default Index;
