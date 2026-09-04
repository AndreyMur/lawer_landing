import { PROCESS } from '../data';
import { ArrowRight } from './Icons';
import { MaskLines, Reveal } from './Reveal';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-ink2 border-y border-white/5 scroll-mt-20 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-brass/6 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20">
        {/* sticky-колонка */}
        <div className="lg:sticky lg:top-28 self-start">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
              <span className="text-brass/60 mr-2">§</span>02 — Процесс
            </p>
          </Reveal>
          <MaskLines
            className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.12] text-paper"
            lines={[<>Пять шагов</>, <>до результата.</>]}
          />
          <Reveal delay={150}>
            <p className="mt-6 text-fog leading-relaxed max-w-md">
              Никакой магии и «решал». Понятный регламент, фиксированные этапы и отчёт
              после каждого заседания. Вы всегда знаете, что происходит с делом и сколько это стоит.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-9 inline-flex items-stretch border border-brass/30">
              <span className="grid place-items-center bg-brass text-ink font-display text-2xl px-5">
                24<span className="text-sm ml-1">ч</span>
              </span>
              <span className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/80 self-center">
                Средний срок первого
                <br />
                анализа ситуации
              </span>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <a href="#contact" className="btn-brass mt-10 group">
              Начать с анализа
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* шаги */}
        <div className="relative">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-brass/50 via-brass/20 to-transparent" aria-hidden="true" />
          <div className="space-y-12 md:space-y-14">
            {PROCESS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative pl-12 md:pl-16 group">
                  <span
                    className="absolute left-0 top-2.5 w-[15px] h-[15px] border border-brass bg-ink2 rotate-45 transition-all duration-500 group-hover:bg-brass group-hover:rotate-[135deg]"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <span className="font-display text-4xl md:text-5xl text-outline" style={{ WebkitTextStrokeColor: 'rgba(201,164,92,0.55)' }}>
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-paper group-hover:text-brass2 transition-colors duration-300">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-fog leading-relaxed max-w-xl">{s.desc}</p>
                  <p className="mt-3.5 inline-block chip text-brass! border-brass/30!">{s.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
