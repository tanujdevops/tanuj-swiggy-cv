import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="z-0 border-t border-gray-1 bg-bg-1 py-[6vw] md:py-[4vw]">
      <SectionOpacity classes="z-2">
        <SectionTitle title="ABOUT." classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />
        <div className="relative self-start px-[6vw] pb-[5vw] pt-[3vw] md:px-[3vw]">
          <div className="flex space-x-[5vw] md:flex-col md:items-center md:space-x-0 md:space-y-[3vw]">
            <div className="flex grow-[4] basis-0 flex-col gap-[1.6vw] text-[2.3vw] md:text-balance md:text-center md:text-[3.8vw] md:leading-[1.3]">
              <p>I build systems that ship fast, scale reliably, and actually get used.</p>
              <p>
                With 4+ years of experience across AI SaaS, DevOps, and automation, I’ve helped founders go from idea →
                MVP → real users.
              </p>
              <p>
                Currently building AI voice agents that replace repetitive human workflows with scalable AI systems.
              </p>
            </div>

            <div className="relative h-[20vw] w-[30vw] grow-[3] basis-0 bg-bg-2 md:h-[40vw] md:w-full md:max-w-[90%] md:basis-[initial]  md:text-center">
              <img
                src="/images/hands_v2.jpg"
                alt="Technology work in progress"
                className="absolute inset-0 inline-block h-full w-full rounded-[0.125vw] transition hover:brightness-110 md:rounded-[0.25vw] md:object-cover"
              />
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
