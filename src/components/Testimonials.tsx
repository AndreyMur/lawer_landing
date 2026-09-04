import { useEffect, useState } from 'react';
import { IMG, TESTIMONIALS } from '../data';
import { usePrefersReducedMotion } from '../hooks';
import { Chevron } from './Icons';
import { Reveal } from './Reveal';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const t = TESTIMONIALS[idx];

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => setIdx((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => window.clearInterval(id);
  }, [reduced, paused]);

  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* фон: кабинет бюро с эффектом Ken Burns */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src={IMG.office} alt="" className="kenburns w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/78 to-ink" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
            <span className="text-brass/60 mr-2">§</span>05 — Слово клиентов
          </p>
          <span className="block mt-8 font-display text-7xl md:text-8xl leading-none text-brass/70 select-none">
            «
          </span>
        </Reveal>

        <blockquote key={idx} className="quote-swap -mt-6 md:-mt-8">
          <p className="font-display text-[clamp(1.3rem,3vw,2.1rem)] leading-[1.4] text-paper">
            {t.quote}
          </p>
          <footer className="mt-8">
            <p className="font-mono text-sm text-brass2">{t.author}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fog">{t.role}</p>
          </footer>
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="grid place-items-center w-11 h-11 border border-white/15 text-paper hover:border-brass hover:text-brass transition-colors duration-300 cursor-pointer"
            aria-label="Предыдущий отзыв"
          >
            <Chevron className="w-4 h-4 rotate-180" />
          </button>

          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Отзыв ${i + 1}`}
                className={`h-[3px] transition-all duration-400 cursor-pointer ${
                  i === idx ? 'w-9 bg-brass' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
            className="grid place-items-center w-11 h-11 border border-white/15 text-paper hover:border-brass hover:text-brass transition-colors duration-300 cursor-pointer"
            aria-label="Следующий отзыв"
          >
            <Chevron className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-8 font-mono text-[11px] tracking-[0.22em] text-fog/70 tabular-nums">
          {String(idx + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
        </p>
      </div>
    </section>
  );
}
