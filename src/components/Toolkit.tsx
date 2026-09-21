import { Reveal } from './Reveal';

const STACK: { category: string; note: string; items: string[] }[] = [
  { category: 'Programming', note: 'Core languages', items: ['Python', 'Java', 'C++'] },
  { category: 'Tools', note: 'Build & workflow', items: ['Git', 'Docker', 'GitHub', 'Android Studio', 'Visual Studio'] },
  { category: 'Web', note: 'Interface basics', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { category: 'Data & AI', note: 'Working with data', items: ['Machine Learning', 'Pandas'] },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="relative border-t border-[#1d1a17]/[0.08] py-28 md:py-40">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="grid gap-8 border-b border-[#1d1a17]/[0.09] pb-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(3.3rem,5.6vw,5.8rem)] leading-[0.86] tracking-[-0.055em] text-[#1D1A17]">
              Tools<br />I use.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-7 lg:pb-1">
            <p className="max-w-md text-[15px] leading-[1.55] text-[#6C665F] md:text-base">
              The languages, tools and technologies I reach for most often while building coursework, prototypes and applications.
            </p>
          </div>
        </div>

        <div className="mt-2 border-b border-[#1d1a17]/[0.09]">
          {STACK.map((group, index) => (
            <Reveal key={group.category} delay={index * 70}>
              <div className="group grid gap-6 border-t border-[#1d1a17]/[0.09] py-8 md:grid-cols-[170px_minmax(0,1fr)] md:gap-10 md:py-10 lg:grid-cols-[220px_minmax(0,1fr)_140px] lg:items-start lg:gap-12">
                <div>
                  <h3 className="font-display text-[1.75rem] leading-none tracking-[-0.035em] text-[#1D1A17] transition-transform duration-500 group-hover:translate-x-1">
                    {group.category}
                  </h3>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#9A928A]">{group.note}</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                  {group.items.map((item, itemIndex) => (
                    <span key={item} className="relative text-[15px] text-[#4E4943] transition-colors duration-300 group-hover:text-[#2A2622]">
                      {item}
                      {itemIndex < group.items.length - 1 && (
                        <span className="ml-7 inline-block h-1 w-1 -translate-y-[2px] rounded-full bg-[#C95F3D]/40" aria-hidden />
                      )}
                    </span>
                  ))}
                </div>

                <span className="hidden justify-self-end font-mono text-[10px] uppercase tracking-[0.14em] text-[#A8A096] lg:block">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
