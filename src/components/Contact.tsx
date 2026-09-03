import { FormEvent, useState } from 'react';
import { CONTACTS, TOPICS } from '../data';
import { Check, Clock, Mail, Phone, Pin, ArrowRight } from './Icons';
import { MaskLines, Reveal } from './Reveal';

type Errors = Partial<Record<'name' | 'phone' | 'consent', string>>;

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = 'Укажите имя — минимум 2 символа';
    if (!/^[+()\-\d\s]{6,20}$/.test(phone.trim())) next.phone = 'Телефон в формате +7 (900) 000-00-00';
    if (!consent) next.consent = 'Нужно согласие на обработку данных';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const reset = () => {
    setSent(false);
    setName('');
    setPhone('');
    setTopic(TOPICS[0]);
    setMessage('');
    setConsent(false);
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-ink2 border-t border-white/5 overflow-hidden scroll-mt-20">
      <div
        className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full bg-brass/8 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20">
        {/* левая колонка */}
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
              <span className="text-brass/60 mr-2">§</span>Контакт
            </p>
          </Reveal>
          <MaskLines
            className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.12] text-paper"
            lines={[<>Расскажите о проблеме —</>, <>вернёмся со стратегией.</>]}
          />
          <Reveal delay={150}>
            <p className="mt-6 text-fog leading-relaxed max-w-lg">
              Первый разбор ситуации и оценка перспектив —{' '}
              <span className="text-paper font-medium">бесплатно, в течение 24 часов</span>.
              Партнёр изучит документы лично и перезвонит с конкретным планом.
            </p>
          </Reveal>

          <div className="mt-10 space-y-1">
            {[
              { icon: Phone, label: 'Телефон', value: CONTACTS.phone, href: CONTACTS.phoneHref },
              { icon: Mail, label: 'Почта для брифа', value: CONTACTS.email, href: CONTACTS.emailHref },
              { icon: Pin, label: 'Офис', value: CONTACTS.address },
              { icon: Clock, label: 'Часы работы', value: CONTACTS.hours },
            ].map((row, i) => (
              <Reveal key={row.label} delay={i * 80}>
                {row.href ? (
                  <a
                    href={row.href}
                    className="group flex items-center gap-5 py-4 border-b border-white/8 transition-transform duration-300 hover:translate-x-2"
                  >
                    <span className="grid place-items-center w-11 h-11 border border-brass/30 text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
                      <row.icon className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
                        {row.label}
                      </span>
                      <span className="block mt-1 text-paper group-hover:text-brass2 transition-colors duration-300">
                        {row.value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-5 py-4 border-b border-white/8">
                    <span className="grid place-items-center w-11 h-11 border border-brass/30 text-brass">
                      <row.icon className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-fog">
                        {row.label}
                      </span>
                      <span className="block mt-1 text-paper max-w-xs">{row.value}</span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 font-mono text-[11px] leading-relaxed text-fog/80 border-l-2 border-brass/50 pl-4 max-w-md">
              Обращение конфиденциально и защищено адвокатской тайной. Отправка формы не
              создаёт обязательств ни для вас, ни для бюро.
            </p>
          </Reveal>
        </div>

        {/* форма */}
        <Reveal delay={150}>
          <div className="relative border border-white/10 bg-panel p-7 md:p-10">
            <span className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-brass to-transparent" aria-hidden="true" />

            {sent ? (
              <div className="py-14 text-center">
                <span className="pop-in inline-grid place-items-center w-20 h-20 rounded-full border-2 border-brass text-brass mx-auto">
                  <Check className="w-9 h-9" />
                </span>
                <h3 className="mt-7 font-display text-2xl md:text-3xl text-paper">Заявка принята</h3>
                <p className="mt-4 text-fog leading-relaxed max-w-sm mx-auto">
                  Спасибо, {name.trim()}. Партнёр профильной практики свяжется с вами в
                  течение рабочего дня по номеру {phone.trim()}.
                </p>
                <button onClick={reset} className="btn-ghost mt-9 cursor-pointer">
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-brass">
                  Заявка на консультацию
                </p>
                <h3 className="mt-3 font-display text-2xl text-paper">Опишите ситуацию</h3>

                <div className="mt-7 grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      className={`field ${errors.name ? 'border-crimson!' : ''}`}
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-label="Ваше имя"
                    />
                    {errors.name && <p className="mt-2 font-mono text-[11px] text-[#d07a6f]">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      className={`field ${errors.phone ? 'border-crimson!' : ''}`}
                      placeholder="+7 (900) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      inputMode="tel"
                      aria-label="Телефон"
                    />
                    {errors.phone && <p className="mt-2 font-mono text-[11px] text-[#d07a6f]">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mt-5">
                  <select
                    className="field cursor-pointer"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    aria-label="Сфера вопроса"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t} className="bg-ink2">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <textarea
                    className="field min-h-[120px] resize-y"
                    placeholder="Коротко о споре: стороны, сумма, стадия (переговоры / претензия / суд)…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-label="Описание ситуации"
                  />
                </div>

                <label className="mt-5 flex items-start gap-3 cursor-pointer group">
                  <span
                    className={`mt-0.5 grid place-items-center w-5 h-5 border transition-all duration-300 shrink-0 ${
                      consent ? 'bg-brass border-brass text-ink' : errors.consent ? 'border-crimson' : 'border-white/25 group-hover:border-brass/60'
                    }`}
                  >
                    {consent && <Check className="w-3.5 h-3.5" />}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span className="font-mono text-[11px] leading-relaxed text-fog">
                    Согласен на обработку персональных данных. Данные используются только для
                    ответа на обращение.
                  </span>
                </label>
                {errors.consent && <p className="mt-2 font-mono text-[11px] text-[#d07a6f]">{errors.consent}</p>}

                <button type="submit" className="btn-brass w-full mt-7 group cursor-pointer">
                  Отправить заявку
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-fog/70">
                  Ответ — в течение 24 часов
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
