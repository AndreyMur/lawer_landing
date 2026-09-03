import { TICKER } from '../data';

export default function Ticker() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="marquee relative border-y border-brass/15 bg-ink2 py-4.5 overflow-hidden select-none">
      <div className="marquee-track flex items-center gap-10 w-max pr-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-brass/90 whitespace-nowrap">
              {t}
            </span>
            <span className="text-brass/40 font-display text-base leading-none">§</span>
          </span>
        ))}
      </div>
      {/* затемнение краёв */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink2 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink2 to-transparent pointer-events-none" />
    </div>
  );
}
