import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, Check, Github, Linkedin, Mail, Send } from 'lucide-react';
import { Reveal } from './Reveal';

import { PORTFOLIO } from '@/data/portfolio';

const EMAIL = PORTFOLIO.email;
const GITHUB = PORTFOLIO.github;
const LINKEDIN = PORTFOLIO.linkedin;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hongKongTime, setHongKongTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setHongKongTime(
        new Intl.DateTimeFormat('en-HK', {
          timeZone: 'Asia/Hong_Kong',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(form.get('name') || 'someone')}`);
    const body = encodeURIComponent(
      `Name: ${form.get('name') || ''}\nEmail: ${form.get('email') || ''}\n\n${form.get('message') || ''}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const area = document.createElement('textarea');
        area.value = EMAIL;
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        area.remove();
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-[#1d1a17]/[0.08] py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="flex items-center justify-between border-b border-[#1d1a17]/[0.10] pb-5">
          <h2 className="font-display text-4xl tracking-[-0.04em] text-[#1D1A17] md:text-5xl">Contact</h2>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.15em] text-[#91897F] md:block">Hong Kong</span>
        </div>

        <div className="grid gap-16 pt-12 md:pt-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,.7fr)] lg:gap-20">
          <div>
            <Reveal as="h3" className="max-w-4xl font-display text-[clamp(3rem,6.3vw,6.6rem)] leading-[0.87] tracking-[-0.055em] text-[#1D1A17]">
              Have something in mind?<br /><span className="text-[#C95F3D]">Tell me about it.</span>
            </Reveal>

            <Reveal delay={80} as="p" className="mt-7 max-w-xl text-base leading-[1.55] text-[#6C665F]">
              For internships, co-op roles, collaborations or a project that needs building, send a note below.
            </Reveal>

            <Reveal delay={140}>
              <form onSubmit={handleSubmit} className="mt-12 max-w-[820px]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="group border-b border-[#1d1a17]/[0.15] pb-3">
                    <span className="meta-badge mb-2 block text-[#91897F]">Name</span>
                    <input required name="name" type="text" placeholder="Your name" className="w-full bg-transparent text-[15px] text-[#1D1A17] outline-none placeholder:text-[#AAA29A]" />
                  </label>
                  <label className="group border-b border-[#1d1a17]/[0.15] pb-3">
                    <span className="meta-badge mb-2 block text-[#91897F]">Email</span>
                    <input required name="email" type="email" placeholder="you@example.com" className="w-full bg-transparent text-[15px] text-[#1D1A17] outline-none placeholder:text-[#AAA29A]" />
                  </label>
                </div>

                <label className="group mt-7 block border-b border-[#1d1a17]/[0.15] pb-3">
                  <span className="meta-badge mb-2 block text-[#91897F]">Message</span>
                  <textarea required name="message" rows={4} placeholder="What are you working on?" className="w-full resize-none bg-transparent text-[15px] leading-[1.5] text-[#1D1A17] outline-none placeholder:text-[#AAA29A]" />
                </label>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <button
                    data-cursor
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#1D1A17] px-6 py-3.5 text-sm font-medium text-[#F5F1EB] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#C95F3D]"
                  >
                    {sent ? 'Opening email…' : 'Send message'}
                    <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                  <span className="font-mono text-[11px] text-[#7E776F]">Or email directly:</span>
                  <a data-cursor href={`mailto:${EMAIL}`} className="font-mono text-[11px] text-[#C95F3D] underline decoration-[#C95F3D]/40 underline-offset-4 transition-colors hover:text-[#1D1A17]">{EMAIL}</a>
                  <button
                    data-cursor
                    type="button"
                    onClick={copyEmail}
                    className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] transition-all duration-300 ${copied ? 'text-[#4C7A58]' : 'text-[#9B938A] hover:text-[#1D1A17]'}`}
                    aria-label="Copy email address"
                  >
                    {copied ? <><Check size={12} /> Copied</> : 'Copy'}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          <aside className="self-start border-t border-[#1d1a17]/[0.10]">
            <p className="mb-2 pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#91897F]">Elsewhere</p>

            <a data-cursor href={GITHUB} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-[#1d1a17]/[0.10] py-6">
              <span className="flex items-center gap-3"><Github size={16} className="text-[#938B82] transition-colors group-hover:text-[#C95F3D]" /><span className="text-sm text-[#2A2622]">GitHub</span></span>
              <ArrowUpRight size={17} className="text-[#9B938A] transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#C95F3D]" />
            </a>

            <a data-cursor href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-[#1d1a17]/[0.10] py-6">
              <span className="flex items-center gap-3"><Linkedin size={16} className="text-[#938B82] transition-colors group-hover:text-[#C95F3D]" /><span className="text-sm text-[#2A2622]">LinkedIn</span></span>
              <ArrowUpRight size={17} className="text-[#9B938A] transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#C95F3D]" />
            </a>

            <a data-cursor href={`mailto:${EMAIL}`} className="group flex items-center justify-between border-b border-[#1d1a17]/[0.10] py-6">
              <span className="flex items-center gap-3"><Mail size={16} className="text-[#938B82] transition-colors group-hover:text-[#C95F3D]" /><span className="text-sm text-[#2A2622]">Email</span></span>
              <ArrowUpRight size={17} className="text-[#9B938A] transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#C95F3D]" />
            </a>
          </aside>
        </div>

        <div className="mt-24 flex flex-col gap-3 border-t border-[#1d1a17]/[0.08] pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[#A19A91] sm:flex-row sm:items-center sm:justify-between">
          <span>© SUPRIS BASNET</span>
          <span>{hongKongTime || '--:--'} · HONG KONG</span>
        </div>
      </div>
    </section>
  );
}
