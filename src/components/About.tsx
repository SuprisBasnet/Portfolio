import { Reveal } from './Reveal';

const FACTS = [
  ['BASED IN', 'Hong Kong'],
  ['FOCUS', 'Software / AI'],
  ['EDUCATION', 'HKUST · Computer Engineering'],
  ['STATUS', 'Available for internships / co-ops'],
];

export function About() {
  return (
    <section id="about" className="relative border-t border-[#1d1a17]/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 border-b border-[#1d1a17]/[0.10] pb-5">
          <h2 className="font-display text-4xl tracking-[-0.04em] text-[#1D1A17] md:text-5xl">About</h2>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-[#91897F] md:block">Hong Kong · HKUST</span>
        </div>

        <div className="grid gap-12 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal as="p" className="max-w-[760px] font-display text-[clamp(2rem,3.3vw,3.1rem)] leading-[0.98] tracking-[-0.045em] text-[#1D1A17]">
              I&apos;m a Computer Engineering student at <span className="text-[#C95F3D]">HKUST</span>, interested in building software that is useful, clear and reliable.
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-1">
            <div className="border-t border-[#1d1a17]/[0.09]">
              {FACTS.map(([label, value], index) => (
                <Reveal key={label} delay={index * 70} className="grid grid-cols-[112px_1fr] gap-4 border-b border-[#1d1a17]/[0.09] py-5">
                  <span className="meta-badge text-[#8B847B]">{label}</span>
                  <span className={`text-sm md:text-[15px] ${label === 'STATUS' ? 'text-[#C95F3D]' : 'text-[#2A2622]'}`}>{value}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16 lg:pl-[8.33%]">
          <Reveal as="p" delay={120} className="max-w-xl text-base leading-[1.6] text-[#4E4943] md:text-[17px]">
            Most of what I&apos;m learning shows up in the projects I build: Python, Java, C++, React, Git and machine learning. I like figuring out how the pieces fit together and getting something working end to end.
          </Reveal>
          <Reveal as="p" delay={240} className="max-w-xl text-base leading-[1.6] text-[#6C665F] md:text-[17px]">
            Lately, I&apos;ve been spending more time on simulation, mobile apps and AI, while building my fundamentals in cybersecurity and systems. I usually learn fastest by making something and finding out where it breaks.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
