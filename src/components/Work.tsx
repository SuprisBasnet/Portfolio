
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
  visual: 'flight' | 'health' | 'rideshield';
}

const PROJECTS: Project[] = [
  {
    id: 'flight',
    title: 'Flight Delay Prediction',
    blurb:
      'A machine-learning project built around flight data, turning messy inputs into a prediction pipeline that can be inspected, tested and improved.',
    tags: ['Python', 'Machine Learning', 'Pandas'],
    year: '2026',
    repo: PROJECT_REPOS.flight,
    visual: 'flight',
  },
  {
    id: 'health-focus',
    title: 'Health Focus',
    blurb:
      'An Android application designed around focused routines, simple interactions and a lightweight mobile experience.',
    tags: ['Java', 'Android Studio', 'Mobile'],
    year: '2026',
    repo: PROJECT_REPOS.healthFocus,
    visual: 'health',
  },
  {
    id: 'rideshield',
    title: 'RideShield',
    blurb:
      'Built during the Hong Kong AI Summit BUILD ACROSS Hackathon, RideShield explores parametric income protection for delivery riders through simulated weather disruptions, zone-risk scoring, eligibility and fraud checks, and an automated payout workflow.',
    tags: [
      'Python',
      'FastAPI',
      'SQLite',
      'JavaScript',
      'Risk simulation',
    ],
    year: '2026',
    repo: PROJECT_REPOS.rideShield,
    visual: 'rideshield',
  },
];

function RideShieldPreview() {
  const stages = ['WEATHER', 'RISK', 'TRIGGER', 'FRAUD', 'PAYOUT'];

  return (
    <div
      className="flex h-full w-full flex-col justify-between bg-[#10191C] p-4 text-[#E9F0EC] sm:p-5 md:p-7"
      aria-label="Illustrative RideShield prototype dashboard preview"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-[#83B6A7]">
            RideShield / Fleet protection
          </p>
          <h4 className="mt-2 font-display text-2xl leading-none tracking-[-0.04em] sm:text-3xl">
            Disruption monitor
          </h4>
        </div>
        <span className="shrink-0 border border-white/15 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#F2C78A]">
          Demo data
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          ['12,482', 'Riders'],
          ['10', 'Zones'],
          ['09', 'Pipeline stages'],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border border-white/10 bg-white/[0.035] p-2 sm:p-3"
          >
            <p className="font-display text-lg leading-none sm:text-2xl">
              {value}
            </p>
            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.1em] text-[#A9B8B2] sm:text-[9px]">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between gap-2 font-mono text-[8px] uppercase tracking-[0.13em] text-[#A9B8B2]">
          <span>Event → decision → payout</span>
          <span>Prototype flow</span>
        </div>

        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {stages.map((stage, index) => (
            <div
              key={stage}
              className="min-w-0 border-t-2 border-[#6BAF9D] bg-white/[0.045] px-1.5 py-2 sm:px-2.5"
            >
              <p className="font-mono text-[7px] text-[#6BAF9D] sm:text-[8px]">
                0{index + 1}
              </p>
              <p className="mt-1 break-words font-mono text-[7px] tracking-[0.02em] text-[#E9F0EC] sm:text-[9px]">
                {stage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'rideshield') {
    return <RideShieldPreview />;
  }

  const src =
    project.visual === 'flight'
      ? '/projects/aeroimpact.png'
      : '/projects/health-focus.jpg';

  const alt =
    project.visual === 'flight'
      ? 'AeroImpact disruption simulator screenshot'
      : 'Health Focus Android application screenshot';

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#eee9e2]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.012]"
      />
    </div>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="relative aspect-[16/11] overflow-hidden bg-[#242321]">
        <ProjectVisual project={project} />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 p-4 md:p-5">
          <span className="meta-badge bg-[#F5F1EB]/90 px-2.5 py-1 text-[#5F5A54] backdrop-blur-sm">
            {project.year}
          </span>
          <span className="meta-badge bg-[#F5F1EB]/90 px-2.5 py-1 text-[#5F5A54] backdrop-blur-sm">
            {project.repo ? 'GitHub ↗' : 'Repository pending'}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="font-display text-3xl leading-none tracking-[-0.045em] text-[#1D1A17] transition-colors duration-500 group-hover:text-[#C95F3D] md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-[1.5] text-[#6C665F] md:text-[15px]">
              {project.blurb}
            </p>
          </div>

          {project.repo ? (
            <ArrowUpRight
              size={19}
              className="mt-1 shrink-0 text-[#A7A095] transition-all duration-500 group-hover:rotate-45 group-hover:text-[#C95F3D]"
            />
          ) : (
            <span className="mt-1 shrink-0 font-mono text-[9px] uppercase tracking-[0.1em] text-[#A7A095]">
              Link soon
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#1d1a17]/[0.07] pt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-[0.06em] text-[#8B847B]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="relative border-t border-[#1d1a17]/[0.08] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-8 lg:mb-18 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[clamp(3.4rem,6.2vw,6rem)] leading-[0.86] tracking-[-0.055em] text-[#1D1A17]">
            Recent
            <br />
            builds.
          </h2>

          <p className="max-w-lg leading-[1.5] text-[#6C665F] lg:pb-1">
            A few fun engineering prototypes across simulation systems,
            machine learning pipelines, mobile applications and applied AI.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              {project.repo ? (
                <a
                  data-cursor
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden border border-[#1d1a17]/[0.10] bg-[#FFFCF8]"
                >
                  <ProjectCardContent project={project} />
                </a>
              ) : (
                <div className="group block overflow-hidden border border-[#1d1a17]/[0.10] bg-[#FFFCF8]">
                  <ProjectCardContent project={project} />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
