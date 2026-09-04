import { CASES } from '../data';
import { ArrowUpRight } from './Icons';
import SectionHead from './SectionHead';
import { Reveal } from './Reveal';

export default function Cases() {
  return (
    <section id="cases" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          align="split"
          kicker="03 — Избранная практика"
          lines={[<>Дела говорят</>, <>громче обещаний.</>]}
          lead={
            <>
              Четыре процесса из архива бюро. Имена клиентов публикуем только с их
              письменного согласия — остальные детали расскажем на встрече.
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {CASES.map((c, i) => (
            <Reveal key={c.caseNo} delay={(i % 2) * 120}>
              <article className="group relative h-full flex flex-col border border-white/10 bg-panel p-7 md:p-9 transition-all duration-500 hover:border-brass/50 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]">
                {/* уголок-папка */}
                <span className="absolute top-0 right-0 w-7 h-7 overflow-hidden" aria-hidden="true">
                  <span className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-t-ink border-l-[28px] border-l-transparent transition-colors duration-500 group-hover:border-t-brass/30" />
                </span>

                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.08em]">
                  <span className="text-fog">{c.court}</span>
                  <span className="text-brass">{c.caseNo}</span>
                </div>

                <h3 className="mt-5 font-display text-xl md:text-2xl leading-snug text-paper group-hover:text-brass2 transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="mt-3.5 text-sm leading-relaxed text-fog flex-1">{c.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="chip group-hover:border-brass/30">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-white/10 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl md:text-3xl text-brass2">{c.amount}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                      {c.amountLabel}
                    </p>
                  </div>
                  <span className="grid place-items-center w-11 h-11 border border-white/15 text-brass transition-all duration-500 group-hover:bg-brass group-hover:text-ink group-hover:border-brass">
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-fog">
            Полные тексты решений и обезличенные кейсы —{' '}
            <a href="#contact" className="text-brass hover:text-brass2 transition-colors duration-300">
              по запросу на встрече
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
