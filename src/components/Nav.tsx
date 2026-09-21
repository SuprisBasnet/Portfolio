import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Path', href: '#path' },
  { label: 'Work', href: '#work' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Achievements', href: '#certs' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = LINKS.map(({ href }) => document.querySelector(href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.id) setActive(`#${visible.id}`);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-[#1d1a17]/[0.07] bg-[#F5F1EB]/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-6 md:px-10">
          <a data-cursor href="#top" className="group">
            <span className="font-display text-[1.45rem] tracking-[-0.045em] text-[#1D1A17] transition-colors duration-300 group-hover:text-[#C95F3D]">Supris Basnet</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex xl:gap-8">
            {LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    data-cursor
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`link-underline font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                      isActive ? 'text-[#1D1A17]' : 'text-[#777067] hover:text-[#1D1A17]'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            data-cursor
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className={`h-px w-5 bg-[#1D1A17] transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-5 bg-[#1D1A17] transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#F5F1EB]/98 backdrop-blur-xl lg:hidden">
          <ul className="flex h-full flex-col items-center justify-center gap-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl tracking-[-0.04em] text-[#1D1A17] transition-colors hover:text-[#C95F3D]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
