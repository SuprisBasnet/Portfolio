import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';

interface Milestone {
  title: string;
  org: string;
  period: string;
  detail: string;
  label: string;
  tone: 'sage' | 'sand' | 'peach' | 'blue' | 'stone';
}

const TIMELINE: Milestone[] = [
  {
    title: 'Computer Engineering',
    org: 'HKUST',
    period: '2025 — present',
    detail:
      'Year 3 in Computer Engineering. Alongside coursework, I am part of the HKUST Robotics Team and doing independent study in cybersecurity and AI security.',
    label: 'CURRENT',
    tone: 'sage',
  },
  {
    title: 'International volunteering',
    org: 'AIESEC Vietnam',
    period: 'Dec 2025 — Feb 2026',
    detail:
      'A six-week volunteering experience where I worked closely with the host, organised summer camps and taught English to underprivileged children.',
    label: 'EXPERIENCE',
    tone: 'blue',
  },
  {
    title: 'Computer Science pathway',
    org: 'Associate Degree',
    period: '2023 — 2025',
    detail:
      'Computer Science pathway at HKU SPACE Community College. Best semester: 4.00 / 4.00. Final CGPA: 3.73 / 4.00.',
    label: 'EDUCATION',
    tone: 'sand',
  },
  {
    title: 'A Levels',
    org: 'GCE A Level',
    period: 'Sept 2020 — Dec 2022',
    detail:
      'Led both science and quiz teams at school, helping the teams compete and win medals while building confidence in teamwork and problem solving.',
    label: 'EDUCATION',
    tone: 'peach',
  },
];

const toneStyles: Record<Milestone['tone'], { border: string; dot: string; glow: string }> = {
  sage: { border: '#A6B7A1', dot: '#82997B', glow: 'rgba(166,183,161,.16)' },
  sand: { border: '#D6BC92', dot: '#B69769', glow: 'rgba(214,188,146,.14)' },
  peach: { border: '#D79A7C', dot: '#C47E5C', glow: 'rgba(215,154,124,.14)' },
  blue: { border: '#9DA8B9', dot: '#78879D', glow: 'rgba(157,168,185,.14)' },
  stone: { border: '#AAA39A', dot: '#898177', glow: 'rgba(170,163,154,.12)' },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function Path() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const scrollable = Math.max(node.offsetHeight - window.innerHeight, 1);
      const next = clamp(-rect.top / scrollable, 0, 1);
      setProgress((current) => (Math.abs(current - next) < 0.001 ? current : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const completion = clamp(progress * 1.06, 0, 1);
  const activeIndex = Math.min(TIMELINE.length - 1, Math.floor(progress * TIMELINE.length));

  return (
    <section
      ref={sectionRef}
      id="path"
      className="relative z-20 border-t border-[#1d1a17]/[0.08] bg-[#F3EEE7]"
      style={{ minHeight: `${Math.max(TIMELINE.length * 92, 360)}vh` }}
    >
      <div className="sticky top-0 z-20 min-h-screen overflow-visible">
        <div className="mx-auto grid min-h-screen max-w-[1480px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[minmax(330px,.72fr)_minmax(700px,1.28fr)] lg:gap-14">
          <div className="flex h-full flex-col justify-center lg:pr-10">
            <p className="meta-badge mb-5 text-[#8B847B]">MY PATH</p>
            <h2 className="font-display text-[clamp(3rem,5.2vw,5.25rem)] leading-[0.89] tracking-[-0.055em] text-[#1D1A17]">
              How I got<br />here.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.55] text-[#6C665F] md:text-base">
              A few places and experiences that shaped the way I learn, build and work with other people.
            </p>

            <div className="mt-9 max-w-[330px]">
              <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.13em] text-[#91897F]">
                <span>{TIMELINE[activeIndex].label}</span>
                <span>{String(Math.round(completion * 100)).padStart(2, '0')}%</span>
              </div>
              <div className="h-px w-full bg-[#1D1A17]/[0.12]">
                <div
                  className="h-px origin-left bg-[#C95F3D]"
                  style={{ transform: `scaleX(${completion})` }}
                />
              </div>
            </div>

            <div className="mt-8 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[#9C948B] lg:flex">
              <ArrowDownRight size={14} /> Keep scrolling
            </div>
          </div>

          <div className="relative w-full max-w-[920px] lg:justify-self-end">
            <div className="absolute left-[14px] top-1 bottom-1 w-px bg-[#1D1A17]/[0.10]" />
            <div
              className="absolute left-[14px] top-1 w-px origin-top bg-[#C95F3D]"
              style={{ height: 'calc(100% - 8px)', transform: `scaleY(${completion})` }}
            />

            <div className="relative z-10 flex flex-col gap-3 md:gap-4">
              {TIMELINE.map((milestone, index) => {
                const tone = toneStyles[milestone.tone];
                const start = index / TIMELINE.length;
                const reveal = clamp((progress - start) / 0.17, 0, 1);
                const opacity = index === 0 ? clamp(0.35 + reveal * 0.65, 0.35, 1) : clamp(0.12 + reveal * 0.88, 0.12, 1);
                const translateY = (1 - reveal) * 22;
                const blur = (1 - reveal) * 1.6;
                const scale = 0.985 + reveal * 0.015;

                return (
                  <article
                    key={`${milestone.org}-${milestone.period}`}
                    className="relative ml-0 pl-9"
                    style={{
                      opacity,
                      transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                      filter: `blur(${blur}px)`,
                    }}
                  >
                    <span
                      className="absolute left-[8px] top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-[#F3EEE7]"
                      style={{ backgroundColor: tone.dot, boxShadow: `0 0 0 5px ${tone.glow}` }}
                    />

                    <div
                      className="border bg-[#FFFCF7]/95 px-5 py-4 shadow-[0_20px_55px_-46px_rgba(55,45,34,.48)] md:px-7 md:py-5"
                      style={{ borderColor: tone.border, boxShadow: `0 20px 55px -46px rgba(55,45,34,.38), 0 0 0 1px ${tone.glow}` }}
                    >
                      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_150px] md:items-start md:gap-8">
                        <div>
                          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.13em] text-[#8D857C]">
                            <span>{milestone.label}</span>
                            <span className="h-1 w-1 rounded-full" style={{ backgroundColor: tone.dot }} />
                            <span>{milestone.period}</span>
                          </div>
                          <h3 className="font-display text-[clamp(1.65rem,2.45vw,2.35rem)] leading-[0.96] tracking-[-0.045em] text-[#1D1A17]">
                            {milestone.org}
                          </h3>
                          <p className="mt-2 max-w-2xl text-[13px] leading-[1.45] text-[#645D56] md:text-[14px]">
                            {milestone.detail}
                          </p>
                        </div>

                        <div className="border-l border-[#1d1a17]/[0.08] pl-4 md:text-right">
                          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#91897F]">{milestone.title}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
