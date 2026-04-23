import { FC } from 'react';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { CONTACT_LINES, LINKEDIN_URL, WHATSAPP_URL } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  const handleLinkedInOpen = () => {
    window.open(LINKEDIN_URL, '_blank', 'noreferrer');
  };

  const handleWhatsAppOpen = () => {
    window.open(WHATSAPP_URL, '_blank', 'noreferrer');
  };

  return (
    <section id="contact">
      <SectionOpacity classes="flex h-screen flex-col justify-center">
        <div className="mx-auto flex w-full max-w-[60vw] flex-1 flex-col items-center justify-center text-center md:max-w-[90%]">
          <h3 className="text-[4vw] font-medium md:text-[8vw]">LET&apos;S BUILD</h3>
          <p className="mt-[0.6vw] text-[1.7vw] font-normal text-text-1 md:text-[3.2vw] md:leading-[1.3]">
            {CONTACT_LINES[0]}
          </p>
          <p className="mt-[1.2vw] text-[3vw] font-extrabold text-primary md:text-[6vw]">{CONTACT_LINES[1]}</p>
          <Button
            onClick={handleLinkedInOpen}
            title="VIEW LINKEDIN"
            classes="px-[1.8vw] py-[vw] w-[28vw] md:w-[52vw] min-h-[6vw] md:min-h-[10vw] text-[1.25vw] md:text-[2.8vw] bg-bg-1 hover:bg-bg-1/80"
            btnClasses="mt-[2vw]"
          />
          <Button
            onClick={handleWhatsAppOpen}
            title="WHATSAPP"
            classes="px-[1.8vw] py-[vw] w-[28vw] md:w-[52vw] min-h-[6vw] md:min-h-[10vw] text-[1.25vw] md:text-[2.8vw] bg-bg-1 hover:bg-bg-1/80"
            btnClasses="mt-[1vw]"
          />
        </div>

        <footer className="flex justify-between border-t border-t-[#FC8019] px-[5vw] py-[1.8vw] text-[1.3vw] md:px-[2vw] md:py-[2.4vw] md:text-[2.4vw]">
          <div>(c) 2026. Tanuj Sharma</div>
          <ul className="flex space-x-[3vw]">
            <li>AI SaaS</li>
            <li>DevOps</li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:opacity-75">
                WhatsApp
              </a>
            </li>
          </ul>
        </footer>
      </SectionOpacity>
    </section>
  );
};
export default Index;
