'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { ACHIEVEMENTS, EDUCATION, EXPERIENCE_ITEMS, PROJECTS, TECH_STACK } from '@/data';

interface Props {}

const cardTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

const BulletList: FC<{ points: string[] }> = ({ points }) => (
  <ul className="space-y-[0.8vw] text-[1.12vw] leading-[1.55] text-text-1 md:space-y-[1.8vw] md:text-[2.8vw]">
    {points.map((point) => (
      <li key={point} className="flex gap-[0.8vw] md:gap-[1.6vw]">
        <span className="mt-[0.65vw] h-[0.45vw] w-[0.45vw] shrink-0 rounded-full bg-primary md:mt-[1.6vw] md:h-[1vw] md:w-[1vw]" />
        <span>{point}</span>
      </li>
    ))}
  </ul>
);

const Index: FC<Props> = () => {
  return (
    <section id="experience" className="border-t border-gray-1 bg-bg-2 py-[6vw] md:py-[4vw]">
      <SectionOpacity>
        <SectionTitle title="EXPERIENCE." classes="px-[6vw] pt-[3vw] md:px-[3vw]" />
        <div className="grid grid-cols-2 gap-[1.2vw] px-[6vw] pt-[3vw] md:grid-cols-1 md:gap-[2.4vw] md:px-[3vw]">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.company}`}
              className="interactive-card rounded-[0.45vw] border border-stroke bg-bg-1/55 p-[1.6vw] md:rounded-[1vw] md:p-[3.2vw]"
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ ...cardTransition, delay: index * 0.05 }}
            >
              <p className="text-[1vw] font-semibold uppercase tracking-[0.2em] text-primary md:text-[2.2vw]">
                {item.company}
              </p>
              <h4 className="mt-[0.6vw] text-[2vw] font-semibold leading-[1.18] md:text-[4.6vw]">{item.title}</h4>
              <div className="mt-[1.4vw]">
                <BulletList points={item.points} />
              </div>
            </motion.article>
          ))}
        </div>

        <div id="projects" className="px-[6vw] pt-[7vw] md:px-[3vw]">
          <h3 className="text-[5vw] font-extrabold leading-[100%] md:text-center md:text-[8vw]">PROJECTS.</h3>
          <div className="mt-[3vw] grid grid-cols-3 gap-[1.2vw] md:grid-cols-1 md:gap-[2.4vw]">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                className="interactive-card rounded-[0.45vw] border border-stroke bg-bg-1/55 p-[1.4vw] md:rounded-[1vw] md:p-[3.2vw]"
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ ...cardTransition, delay: index * 0.05 }}
              >
                <h4 className="text-[1.65vw] font-semibold leading-[1.25] md:text-[4vw]">{project.title}</h4>
                <div className="mt-[1.2vw]">
                  <BulletList points={project.points} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div id="stack" className="grid grid-cols-[1fr_1.2fr] gap-[3vw] px-[6vw] pt-[7vw] md:grid-cols-1 md:px-[3vw]">
          <div>
            <h3 className="text-[5vw] font-extrabold leading-[100%] md:text-center md:text-[8vw]">TECH STACK.</h3>
            <div className="mt-[3vw] space-y-[1.2vw] md:space-y-[2.4vw]">
              {TECH_STACK.map((group, index) => (
                <motion.div
                  key={group.title}
                  className="interactive-card rounded-[0.45vw] border border-stroke bg-bg-1/55 p-[1.4vw] md:rounded-[1vw] md:p-[3.2vw]"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ ...cardTransition, delay: index * 0.04 }}
                >
                  <h4 className="text-[1.45vw] font-semibold text-primary md:text-[3.4vw]">{group.title}</h4>
                  <p className="mt-[0.7vw] text-[1.25vw] leading-[1.55] text-text-1 md:text-[3vw]">
                    {group.items.join(' | ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="education" className="space-y-[4vw] md:space-y-[6vw]">
            <div id="achievements">
              <h3 className="text-[5vw] font-extrabold leading-[100%] md:text-center md:text-[8vw]">ACHIEVEMENTS.</h3>
              <motion.div
                className="interactive-card mt-[3vw] rounded-[0.45vw] border border-stroke bg-bg-1/55 p-[1.6vw] md:rounded-[1vw] md:p-[3.2vw]"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={cardTransition}
              >
                <BulletList points={ACHIEVEMENTS} />
              </motion.div>
            </div>

            <div>
              <h3 className="text-[5vw] font-extrabold leading-[100%] md:text-center md:text-[8vw]">EDUCATION.</h3>
              <motion.article
                className="interactive-card mt-[3vw] rounded-[0.45vw] border border-stroke bg-bg-1/55 p-[1.6vw] md:rounded-[1vw] md:p-[3.2vw]"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={cardTransition}
              >
                <h4 className="text-[2vw] font-semibold leading-[1.2] md:text-[4.6vw]">{EDUCATION.degree}</h4>
                <p className="mt-[1vw] text-[1.25vw] text-text-1 md:text-[3vw]">{EDUCATION.school}</p>
                <p className="mt-[0.6vw] text-[1.25vw] font-semibold text-primary md:text-[3vw]">{EDUCATION.result}</p>
              </motion.article>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
