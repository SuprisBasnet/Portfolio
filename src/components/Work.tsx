import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { PROJECT_REPOS } from '@/data/portfolio';

interface Project {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  repo: string;
  visual: 'flight' | 'health';
}

const PROJECTS: Project[] = [
  {
    id: 'flight',
    title: 'Flight Delay Prediction',
    blurb: 'A machine-learning project built around flight data, turning messy inputs into a prediction pipeline that can be inspected, tested and improved.',
    tags: ['Python', 'Machine Learning', 'Pandas'],
    year: '2026',
    repo: PROJECT_REPOS.flight,
    visual: 'flight',
  },
  {
    id: 'health-focus',
    title: 'Health Focus',
    blurb: 'An Android application designed around focused routines, simple interactions and a lightweight mobile experience.',
    tags: ['Android', 'Mobile', 'App'],
    year: '2026',
    repo: PROJECT_REPOS.healthFocus,
    visual: 'health',
  },
];

function ProjectVisual({ project }: { project: Project }) {
  const src = project.visual === 'flight' ? '/projects/aeroimpact.png' : '/projects/health-focus.jpg';
  const alt = project.visual === 'flight' ? 'AeroImpact disruption simulator screenshot' : 'Health Focus Android application screenshot';

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#eee9e2]" aria-hidden>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full ${project.visual === 'flight' ? 'object-contain' : 'object-contain'} transition-transform duration-700 group-hover:scale-[1.012]`}
      />
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40 border-t border-[#1d1a17]/[0.08]">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-18">
          <h2 className="font-display text-[clamp(3.4rem,6.2vw,6rem)] leading-[0.86] tracking-[-0.055em] text-[#1D1A17]">
            Recent<br />builds.
          </h2>
          <p className="text-[#6C665F] leading-[1.5] max-w-lg lg:pb-1">
            A few fun engineering prototypes across simulation systems, machine learning pipelines, and mobile applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <a
                data-cursor
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden border border-[#1d1a17]/[0.10] bg-[#FFFCF8]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#242321]">
                  <ProjectVisual project={p} />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-5">
                    <span className="meta-badge px-2.5 py-1 bg-[#F5F1EB]/90 backdrop-blur-sm text-[#5F5A54]">{p.year}</span>
                    <span className="meta-badge px-2.5 py-1 bg-[#F5F1EB]/90 backdrop-blur-sm text-[#5F5A54]">GitHub ↗</span>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-display text-3xl md:text-4xl leading-none tracking-[-0.045em] text-[#1D1A17] transition-colors duration-500 group-hover:text-[#C95F3D]">
                        {p.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm md:text-[15px] leading-[1.5] text-[#6C665F]">
                        {p.blurb}
                      </p>
                    </div>
                    <ArrowUpRight size={19} className="mt-1 shrink-0 text-[#A7A095] transition-all duration-500 group-hover:text-[#C95F3D] group-hover:rotate-45" />
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#1d1a17]/[0.07] flex flex-wrap gap-x-5 gap-y-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] tracking-[0.06em] text-[#8B847B]">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
