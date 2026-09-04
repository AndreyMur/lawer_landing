import { useState } from 'react';
import { PRACTICES } from '../data';
import { ArrowUpRight, Plus } from './Icons';
import SectionHead from './SectionHead';
import { Reveal } from './Reveal';

export default function Practices() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="practices" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          align="split"
          kicker="01 — Практики"
          lines={[<>Семь направлений.</>, <>Одна планка качества.</>]}
          lead={
            <>
              Мы не берём «всё подряд». Каждая практика в бюро — это профильный партнёр,
              собственная судебная статистика и годы работы в одной категории споров.
            </>
          }
        />

        <div className="border-t border-white/10">
          {PRACTICES.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={p.title} delay={Math.min(i * 60, 240)}>
                <div className="border-b border-white/10 group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 py-6 md:py-8 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-mono text-sm transition-colors duration-300 ${
                        isOpen ? 'text-brass' : 'text-brass/50 group-hover:text-brass'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-xl md:text-3xl lg:text-4xl transition-all duration-400 ${
                        isOpen ? 'text-brass2 translate-x-0' : 'text-paper group-hover:translate-x-2.5 group-hover:text-brass2'
                      }`}
                    >
                      {p.title}
                    </span>
                    <span
                      className={`grid place-items-center w-10 h-10 md:w-12 md:h-12 border transition-all duration-500 ${
                        isOpen
                          ? 'border-brass bg-brass text-ink rotate-45'
                          : 'border-white/15 text-brass group-hover:border-brass/60'
                      }`}
                    >
                      <Plus className="w-4.5 h-4.5" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 md:pb-10 grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-14 md:pl-[52px]">
                        <p className="text-fog leading-relaxed max-w-xl">{p.desc}</p>
                        <ul className="space-y-2.5">
                          {p.services.map((s) => (
                            <li
                              key={s}
                              className="flex items-baseline gap-3 font-mono text-[12px] md:text-[13px] text-paper/85"
                            >
                              <span className="text-brass shrink-0">§</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <p className="text-fog">
              Не нашли свой случай?{' '}
              <span className="text-paper">Опишите ситуацию — подберём профильного юриста за 24 часа.</span>
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-brass hover:text-brass2 transition-colors duration-300"
            >
              Задать вопрос
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
