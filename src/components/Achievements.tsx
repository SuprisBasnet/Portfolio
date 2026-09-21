import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { ACHIEVEMENT_DOCUMENTS } from '@/data/portfolio';

interface Achievement {
  id: string;
  title: string;
  detail: string;
  date: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'principal-2025',
    title: "Principal's Honour List",
    detail: 'HKU SPACE Community College · academic recognition.',
    date: '2025',
  },
  {
    id: 'zubin-2025',
    title: 'Zubin Foundation Young Persons Scholarship',
    detail: 'Scholarship recognition for academic performance and potential.',
    date: '2025',
  },
  {
    id: 'outstanding-2024-25',
    title: 'Outstanding Performance Scholarship',
    detail: 'Government of Hong Kong scholarship recognition.',
    date: '2024/25',
  },
  {
    id: 'principal-2024',
    title: "Principal's Honour List",
    detail: 'HKU SPACE Community College · academic recognition.',
    date: '2024',
  },
  {
    id: 'associate-degree',
    title: 'Associate Degree — Computer Science',
    detail: 'Best semester: 4.00 / 4.00 · Final CGPA: 3.73 / 4.00.',
    date: '2023 — 2025',
  },
];

export function Achievements() {
  return (
    <section id="certs" className="relative border-t border-[#1d1a17]/[0.08] py-28 md:py-40">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid gap-10 border-b border-[#1d1a17]/[0.09] pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="meta-badge mb-5 text-[#8B847B]">ACHIEVEMENTS</p>
            <h2 className="font-display text-[clamp(2.8rem,5.1vw,5.2rem)] leading-[0.88] tracking-[-0.055em] text-[#1D1A17]">
              Milestones<br />that mattered.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-md text-[15px] leading-[1.55] text-[#6C665F] md:text-base">
              The scholarships, academic recognition and study results that marked the work I put in before and during my move into Computer Engineering at HKUST.
            </p>
          </div>
        </div>

        <div className="mt-2 border-b border-[#1d1a17]/[0.08]">
          {ACHIEVEMENTS.map((item, i) => {
            const href = ACHIEVEMENT_DOCUMENTS[item.id];

            const content = (
              <>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#91897F]">{item.date}</span>
                <div>
                  <h3 className="font-display text-[1.65rem] leading-[1] tracking-[-0.035em] text-[#1D1A17] transition-colors duration-300 group-hover:text-[#C95F3D] md:text-[2.05rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.5] text-[#6C665F]">{item.detail}</p>
                </div>
                <ArrowUpRight size={18} className="text-[#A7A095] transition-all duration-500 group-hover:rotate-45 group-hover:text-[#C95F3D]" />
              </>
            );

            return (
              <Reveal key={item.id} delay={i * 75}>
                {href ? (
                  <a
                    data-cursor
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[92px_minmax(0,1fr)_24px] items-center gap-5 border-t border-[#1d1a17]/[0.08] py-6 md:grid-cols-[150px_minmax(0,1fr)_30px] md:gap-8 md:py-7"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="group grid grid-cols-[92px_minmax(0,1fr)_24px] items-center gap-5 border-t border-[#1d1a17]/[0.08] py-6 md:grid-cols-[150px_minmax(0,1fr)_30px] md:gap-8 md:py-7">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
