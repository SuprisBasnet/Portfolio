import { ArrowDownRight } from 'lucide-react';

const MARQUEE = ['Machine Learning', 'C++', 'Python', 'Java', 'Git', 'React'];
const headline = ['ENGINEERING THE', 'BRIDGE BETWEEN', 'PROBLEM AND PRODUCT.'];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden">
      <div className="relative max-w-[1480px] mx-auto px-6 md:px-10 w-full">
        <div className="flex items-center justify-end mb-12 md:mb-16 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="meta-badge text-[#A7A095] hidden md:inline">HKUST / COMPUTER ENGINEERING</span>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
<h1
  className="font-display font-normal leading-[0.9] tracking-[-0.05em] text-[#1D1A17] md:col-span-8 break-normal text-balance"
  style={{ fontSize: 'clamp(2.55rem, 5.8vw, 5.5rem)' }}
>
  {headline.map((line, row) => (
    <span key={line} className="block overflow-hidden whitespace-normal break-normal">
      {line.split(' ').map((word, wordIndex) => (
        <span
          key={`${row}-${wordIndex}`}
          className="inline-block mr-[0.25em]"
        >
          {word.split('').map((c, i) => (
            <span
              key={`${row}-${wordIndex}-${i}`}
              className={`char-reveal inline-block ${
                row === 2 ? 'text-[#C95F3D]' : ''
              }`}
              style={{
                animationDelay: `${0.28 + row * 0.2 + (wordIndex * 0.08) + i * 0.025}s`,
              }}
            >
              {c}
            </span>
          ))}
        </span>
      ))}
    </span>
  ))}
</h1>

          <div className="relative mx-auto w-full max-w-[250px] md:col-span-4 md:mx-0 md:ml-auto md:max-w-[290px]">
            <div className="aspect-[4/5] overflow-hidden border border-[#1d1a17]/[0.11] bg-[#ebe6de]" aria-label="Portrait of Supris Basnet">
              <img
                src="/supris-profile.jpg"
                alt="Supris Basnet"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-18 grid md:grid-cols-12 gap-8 items-end animate-fade-in" style={{ animationDelay: '1.05s', opacity: 0 }}>
          <div className="md:col-span-5">
            <p className="text-[#4E4943] text-base md:text-lg leading-[1.45] max-w-md">
              Year 3 Computer Engineering student at HKUST, building across software, AI and systems, with a focus on useful projects and learning by building.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="meta-badge mb-2 text-[#A7A095]">FOCUS</p>
            <p className="font-mono text-sm text-[#2A2622]">Software / AI</p>
            <p className="meta-badge mt-3 mb-2 text-[#A7A095]">BASED</p>
            <p className="font-mono text-sm text-[#2A2622]">Hong Kong</p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <a
              data-cursor
              href="#work"
              className="group inline-flex items-center justify-between px-5 py-4 border border-[#1d1a17]/[0.13] bg-[#1D1A17] text-[#F5F1EB] text-sm font-medium hover:bg-[#C95F3D] transition-all duration-500"
            >
              View recent builds
              <ArrowDownRight size={17} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              data-cursor
              href="#contact"
              className="group inline-flex items-center justify-between px-5 py-4 border border-[#1d1a17]/[0.12] text-[#2A2622] text-sm font-medium hover:border-[#C95F3D] hover:text-[#C95F3D] transition-all duration-500"
            >
              Available for internships / co-ops
              <span className="transition-transform duration-300 group-hover:translate-x-1">↘</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-16 md:mt-24 border-y border-[#1d1a17]/[0.07] py-5 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap font-mono text-[11px] tracking-[0.08em] text-[#8B847B]">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="hover:text-[#C95F3D] transition-colors">{item}</span>
              <span className="w-1 h-1 rounded-full bg-[#C95F3D]/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
