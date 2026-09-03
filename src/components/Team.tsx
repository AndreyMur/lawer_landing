import { TEAM } from '../data';
import SectionHead from './SectionHead';
import { Reveal } from './Reveal';

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-ink2 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHead
          align="split"
          kicker="04 — Команда"
          lines={[<>Партнёры, которые</>, <>сами ходят в суд.</>]}
          lead={
            <>
              Дело ведёт партнёр, а не стажёр: 12 партнёров и 30 юристов, у каждого —
              своя категория споров и личная ответственность за результат.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <figure className="group border border-white/10 bg-panel overflow-hidden transition-colors duration-500 hover:border-brass/40">
                <div className="relative aspect-[3/3.8] overflow-hidden">
                  <img
                    src={m.img}
                    alt={`Портрет: ${m.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.24em] text-paper/80 bg-ink/60 backdrop-blur-sm px-2.5 py-1.5">
                    0{i + 1} / ПАРТНЁР
                  </span>
                </div>
                <figcaption className="p-6 md:p-7">
                  <h3 className="font-display text-2xl text-paper group-hover:text-brass2 transition-colors duration-300">
                    {m.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
                    {m.role}
                  </p>
                  <div className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] grid-rows-[0fr] group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-4 text-sm text-fog leading-relaxed">{m.bio}</p>
                      <p className="pt-3 font-mono text-[11px] text-paper/70 border-t border-white/10 mt-4">
                        <span className="block pt-3">{m.meta}</span>
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
