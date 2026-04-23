'use client';

import { useEffect, useRef } from 'react';

import { NAV_ITEMS } from '@/data';

const Navigation = () => {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const menu = menuRef.current;

      if (!menu?.open) return;
      if (event.target instanceof Node && menu.contains(event.target)) return;

      menu.open = false;
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <details ref={menuRef} className="group fixed right-[2vw] top-[2vw] z-[5000] md:right-[3vw] md:top-[3vw]">
      <summary className="menu-trigger flex min-h-[4vw] cursor-pointer list-none items-center gap-[0.8vw] rounded-full border border-white bg-[#FC8019] px-[1.4vw] text-[1vw] font-semibold uppercase tracking-[0.12em] text-white md:min-h-[9vw] md:px-[3vw] md:text-[2.4vw] [&::-webkit-details-marker]:hidden">
        <span>Menu</span>
        <span className="relative block h-[1.2vw] w-[2.2vw] md:h-[3vw] md:w-[5vw]">
          <span className="absolute left-0 top-[35%] block h-[0.16vw] w-full bg-white transition group-open:translate-y-[0.32vw] group-open:rotate-45 md:h-[0.35vw] md:group-open:translate-y-[0.75vw]" />
          <span className="absolute left-0 top-[65%] block h-[0.16vw] w-full bg-white transition group-open:-translate-y-[0.32vw] group-open:-rotate-45 md:h-[0.35vw] md:group-open:-translate-y-[0.75vw]" />
        </span>
      </summary>

      <nav
        aria-label="Page sections"
        className="menu-panel absolute right-0 mt-[0.8vw] w-[26vw] rounded-[0.5vw] border border-white bg-[#FC8019] p-[1.2vw] md:mt-[2vw] md:w-[70vw] md:rounded-[1.2vw] md:p-[3vw]"
      >
        <ul className="flex flex-col gap-[0.35vw] md:gap-[1.4vw]">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                onClick={() => {
                  if (menuRef.current) menuRef.current.open = false;
                }}
                className="nav-link block text-[1.35vw] font-semibold uppercase tracking-[0.08em] text-white transition hover:opacity-75 md:text-[4vw]"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
};

export default Navigation;
