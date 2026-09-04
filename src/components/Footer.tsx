import { CONTACTS, NAV, PRACTICES } from '../data';
import { Scales, ArrowUpRight } from './Icons';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink pt-16 pb-8 overflow-hidden">
      <span
        className="absolute -bottom-24 -right-6 font-display text-[16rem] leading-none text-brass/[0.05] select-none pointer-events-none"
        aria-hidden="true"
      >
        §
      </span>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3.5 group w-fit">
              <span className="grid place-items-center w-10 h-10 border border-brass/50 text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
                <Scales className="w-5.5 h-5.5" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-[15px] tracking-[0.28em] text-paper">ПРЕЦЕДЕНТ</span>
                <span className="block mt-1.5 font-mono text-[9px] uppercase tracking-[0.32em] text-fog">
                  юридическое бюро
                </span>
              </span>
            </a>
            <p className="mt-6 text-sm text-fog leading-relaxed max-w-xs">
              Споры, в которых ставки выше, чем «просто деньги»: активы, репутация,
              свобода руководителей. Работаем по всей России с 2009 года.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-brass/80">
              Москва · Санкт-Петербург · Екатеринбург
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Навигация</p>
            <ul className="mt-5 space-y-3">
              {[...NAV, { label: 'Консультация', href: '#contact' }].map((n) => (
                <li key={n.href + n.label}>
                  <a
                    href={n.href}
                    className="group inline-flex items-center gap-2 text-sm text-paper/80 hover:text-brass2 transition-colors duration-300"
                  >
                    {n.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Практики</p>
            <ul className="mt-5 space-y-3">
              {PRACTICES.slice(0, 5).map((p) => (
                <li key={p.title}>
                  <a
                    href="#practices"
                    className="text-sm text-paper/80 hover:text-brass2 transition-colors duration-300"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fog">Контакты</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={CONTACTS.phoneHref} className="font-mono text-brass hover:text-brass2 transition-colors duration-300">
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a href={CONTACTS.emailHref} className="text-paper/80 hover:text-brass2 transition-colors duration-300">
                  {CONTACTS.email}
                </a>
              </li>
              <li className="text-fog leading-relaxed max-w-[240px]">{CONTACTS.address}</li>
              <li className="font-mono text-[11px] text-fog">{CONTACTS.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-fog/70">
            © 2009–2026 Юридическое бюро «Прецедент». Все права защищены.
          </p>
          <p className="font-mono text-[11px] text-fog/50">
            Информация на сайте не является публичной офертой
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brass hover:text-brass2 transition-colors duration-300"
          >
            Наверх
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
