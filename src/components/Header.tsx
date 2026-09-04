import { useEffect, useState } from 'react';
import { NAV, CONTACTS } from '../data';
import { Burger, Phone, Scales } from './Icons';

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3.5">
      <span className="grid place-items-center w-10 h-10 border border-brass/50 text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
        <Scales className="w-5.5 h-5.5" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[15px] tracking-[0.28em] text-paper">
          ПРЕЦЕДЕНТ
        </span>
        <span className="block mt-1.5 font-mono text-[9px] uppercase tracking-[0.32em] text-fog">
          юридическое бюро
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-brass/15' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-[74px] flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70 hover:text-paper transition-colors duration-300"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={CONTACTS.phoneHref}
              className="flex items-center gap-2.5 font-mono text-xs text-brass hover:text-brass2 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {CONTACTS.phone}
            </a>
            <a href="#contact" className="btn-brass px-5! py-3!">
              Консультация
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-paper p-2 -mr-2 hover:text-brass transition-colors"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          >
            <Burger open={open} className="w-6 h-6" />
          </button>
        </div>

        {/* прогресс чтения */}
        <div
          className="absolute bottom-0 left-0 h-px bg-brass transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </header>

      {/* мобильное меню */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-ink/98 backdrop-blur-xl transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8 gap-2">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 py-3 border-b border-white/8 transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(24px)',
                transitionDelay: open ? `${i * 70 + 120}ms` : '0ms',
              }}
            >
              <span className="font-mono text-xs text-brass">0{i + 1}</span>
              <span className="font-display text-3xl text-paper group-hover:text-brass transition-colors">
                {n.label}
              </span>
            </a>
          ))}
          <div className="mt-10 flex flex-col gap-3">
            <a href={CONTACTS.phoneHref} className="font-mono text-sm text-brass">
              {CONTACTS.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-brass self-start mt-2"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
