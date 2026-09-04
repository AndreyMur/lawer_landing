import { STATS } from '../data';
import { useCountUp, useInView } from '../hooks';

function StatCell({
  value,
  suffix,
  label,
  note,
  start,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  note: string;
  start: boolean;
  delay: number;
}) {
  const n = useCountUp(value, start, 1700 + delay);
  return (
    <div className="px-6 md:px-10 py-10 md:py-12 text-ink">
      <p className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none tabular-nums">
        {n.toLocaleString('ru-RU')}
        <span className="text-[0.55em]">{suffix}</span>
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] font-medium">{label}</p>
      <p className="mt-1.5 text-[12px] text-ink/60">{note}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        ref={ref}
        className="relative -mx-6 md:-mx-10 rotate-[-1.6deg] scale-[1.04] bg-brass border-y-2 border-ink/20 shadow-[0_40px_120px_-40px_rgba(201,164,92,0.35)]"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-ink/12 lg:divide-x lg:divide-ink/12 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-ink/12 sm:[&>*:nth-child(-n+2)]:border-b sm:[&>*:nth-child(-n+2)]:border-ink/12">
          {STATS.map((s, i) => (
            <StatCell key={s.label} {...s} start={inView} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
