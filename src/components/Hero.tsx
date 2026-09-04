import { useInView } from '../hooks';
import { ArrowRight, BigScales, Chevron } from './Icons';
import { MaskLines } from './Reveal';

function DocCard() {
  return (
    <div className="paper-doc corner-fold relative p-7 md:p-9 rotate-[-2.5deg] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:rotate-0 hover:scale-[1.015]">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.22em] text-[#7a7360] uppercase">
          Арбитражный суд
          <br />
          города Москвы
        </p>
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase border border-[#7a7360]/40 text-[#7a7360] px-2 py-1 rotate-[4deg]">
          копия
        </span>
      </div>

      <h3 className="font-display text-xl md:text-2xl mt-5">Дело № А40-18234/2024</h3>
      <div className="h-px bg-[#20261f]/20 my-5" />

      <dl className="space-y-3 font-mono text-[12px] md:text-[13px]">
        {[
          ['Истец', 'ООО «СтройАльянс»'],
          ['Ответчик', 'АО «ГлавПодряд»'],
          ['Предмет', 'взыскание задолженности'],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <dt className="text-[#7a7360]">{k}</dt>
            <dd className="text-right font-medium">{v}</dd>
          </div>
        ))}
        <div className="flex justify-between gap-4 border-t border-dashed border-[#20261f]/25 pt-3">
          <dt className="text-[#7a7360]">Цена иска</dt>
          <dd className="font-bold text-[15px]">420 000 000 ₽</dd>
        </div>
      </dl>

      <div className="mt-7 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7a7360]">
            Резолютивная часть
          </p>
          <p className="font-display text-[15px] mt-1.5">Иск удовлетворён полностью</p>
          <p className="font-mono text-[11px] text-[#7a7360] mt-2">12.11.2025 · вступило в силу</p>
        </div>
        {/* росчерк подписи */}
        <svg viewBox="0 0 90 34" className="w-20 h-8 text-[#20261f]/70" fill="none" aria-hidden="true">
          <path
            d="M4 24c10-16 18-20 20-14s-8 18-2 16 14-18 20-16-2 16 6 12 14-12 20-8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* штамп */}
      <div
        className="stamp-anim absolute -right-3 md:-right-6 top-16 md:top-20 border-[3px] border-crimson text-crimson px-4 md:px-5 py-2.5 text-center select-none pointer-events-none"
        style={{ outline: '1.5px solid #B3453C', outlineOffset: '3px', opacity: 0.92 }}
      >
        <p className="font-mono font-bold text-base md:text-lg tracking-[0.24em] uppercase leading-none">
          Выиграно
        </p>
        <p className="font-mono text-[8px] tracking-[0.18em] uppercase mt-1.5">
          решение вступило в силу
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32 pb-24">
      {/* слои фона */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-48 -left-48 w-[640px] h-[640px] rounded-full bg-brass/10 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-64 -right-40 w-[700px] h-[700px] rounded-full bg-[#1e3a31]/50 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1.02fr_0.98fr] gap-16 lg:gap-10 items-center">
        {/* левая колонка */}
        <div>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-brass">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-brass inline-block" />
            Юридическое бюро · Москва · с 2009 года
          </p>

          <MaskLines
            className="mt-7 font-display text-[clamp(2.5rem,6.2vw,4.9rem)] leading-[1.06] text-paper"
            delay={150}
            lines={[
              <>Споры выигрываются</>,
              <>
                ещё{' '}
                <span className="text-outline" style={{ WebkitTextStrokeWidth: '1.6px' }}>
                  до суда
                </span>
                .
              </>,
            ]}
          />

          <p className="mt-8 max-w-xl text-fog text-base md:text-lg leading-relaxed">
            Бюро «Прецедент» защищает бизнес в арбитражных, банкротных и налоговых спорах.
            Мы просчитываем стратегию до первого заседания — поэтому{' '}
            <span className="text-paper font-medium">92% дел</span> завершаются в пользу клиента.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-brass group">
              Получить консультацию
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#cases" className="btn-ghost">
              Избранная практика
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <span className="h-px w-12 bg-brass/40 shrink-0" />
            <p className="font-mono text-[11px] tracking-[0.08em] text-fog/80">
              Нам доверяют: ГК «Меридиан» · «СтройАльянс» · Банк «Восток» · «Атлас Девелопмент»
            </p>
          </div>
        </div>

        {/* правая колонка: стопка дел */}
        <div ref={ref} className="relative max-w-md lg:max-w-none mx-auto w-full lg:px-10 py-8">
          {/* большие весы на фоне */}
          <BigScales
            drawn={inView}
            className="absolute -top-10 -right-6 md:-right-14 w-[300px] md:w-[420px] text-brass/25 pointer-events-none"
          />

          {/* задние «папки» */}
          <div
            className="absolute inset-x-6 top-2 bottom-6 bg-panel2 border border-white/8 rotate-[5deg] transition-transform duration-700 hover:rotate-[7deg]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-6 top-1 bottom-4 bg-panel border border-brass/20 rotate-[-7deg] transition-transform duration-700"
            aria-hidden="true"
          />

          <DocCard />

          {/* плавающие чипы */}
          <div className="floaty absolute -left-2 md:-left-8 bottom-10 bg-panel border border-brass/25 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Взыскано</p>
            <p className="font-display text-xl text-brass2 mt-1">420 000 000 ₽</p>
            <p className="font-mono text-[10px] text-fog mt-0.5">за 7 месяцев · одна инстанция</p>
          </div>
          <div className="floaty-slow absolute right-0 md:-right-2 -bottom-2 bg-panel border border-white/12 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
            <p className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.06em] text-paper">
              <span className="text-brass text-lg leading-none">§</span>
              16 лет без проигранных
              <br />
              <span className="pl-6">«безнадёжных» дел</span>
            </p>
          </div>
        </div>
      </div>

      {/* подсказка скролла */}
      <a
        href="#practices"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-fog hover:text-brass transition-colors duration-300"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">листайте</span>
        <span className="block w-px h-10 bg-brass/60 overflow-hidden relative">
          <span className="scroll-line absolute inset-0 bg-brass" />
        </span>
        <Chevron className="w-3.5 h-3.5 rotate-90" />
      </a>
    </section>
  );
}
