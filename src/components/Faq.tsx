import { useState } from 'react';
import { FAQ } from '../data';
import { Plus } from './Icons';
import { MaskLines, Reveal } from './Reveal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
              <span className="text-brass/60 mr-2">§</span>06 — Вопросы
            </p>
          </Reveal>
          <MaskLines
            className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.12] text-paper"
            lines={[<>Спрашивают до того,</>, <>как нанять.</>]}
          />
          <Reveal delay={150}>
            <p className="mt-6 text-fog leading-relaxed max-w-md">
              Отвечаем так же, как отвечаем клиентам на первой встрече: прямо, без
              юридического тумана и обещаний, которые нельзя выполнить.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-8 inline-block border border-brass/25 bg-brass/5 px-5 py-4 font-mono text-[11px] leading-relaxed text-paper/80">
              Остался вопрос? Задайте его в форме —{' '}
              <a href="#contact" className="text-brass hover:text-brass2 transition-colors">
                ответим в течение дня
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="border-t border-white/10">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={Math.min(i * 60, 240)}>
                <div className="border-b border-white/10 group">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                        isOpen ? 'text-brass2' : 'text-paper group-hover:text-brass2'
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 text-brass transition-transform duration-500 ${
                        isOpen ? 'rotate-45' : 'group-hover:rotate-90'
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pr-10 text-fog leading-relaxed max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
