type IconProps = { className?: string };

export function Scales({ className = 'w-6 h-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 4.5v14" strokeLinecap="round" />
      <path d="M4.5 7h15" strokeLinecap="round" />
      <path d="M12 4.5c-.8-1-1.6-1.3-2.5-1.3M12 4.5c.8-1 1.6-1.3 2.5-1.3" strokeLinecap="round" />
      <path d="M4.5 7 1.8 12.6a2.9 2.9 0 0 0 5.4 0L4.5 7Z" strokeLinejoin="round" />
      <path d="M19.5 7l-2.7 5.6a2.9 2.9 0 0 0 5.4 0L19.5 7Z" strokeLinejoin="round" />
      <path d="M8.5 21h7M12 18.5V21" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRight({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M4 12h15M13 5.5 19.5 12 13 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRight({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}

export function Phone({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path
        d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L16 14l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Mail({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
      <path d="m4.5 7 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pin({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-10.3A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.7C18.5 15.4 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="10.6" r="2.3" />
    </svg>
  );
}

export function Clock({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className = 'w-5 h-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Chevron({ className = 'w-4 h-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="m9 5.5 6.5 6.5L9 18.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Burger({ className = 'w-6 h-6', open = false }: IconProps & { open?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path
        d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 9h16M4 15h10'}
        strokeLinecap="round"
        className="transition-all duration-300"
      />
    </svg>
  );
}

/** Крупные весы правосудия — рисуются штрихом при появлении в кадре */
export function BigScales({ drawn, className = '' }: { drawn: boolean; className?: string }) {
  const paths = [
    'M100 26 V152',
    'M100 26 m0 -8 a8 8 0 1 0 0.01 0',
    'M38 58 H162',
    'M38 58 L22 96 M38 58 L54 96',
    'M162 58 L146 96 M162 58 L178 96',
    'M14 96 A 24 24 0 0 0 62 96',
    'M138 96 A 24 24 0 0 0 186 96',
    'M100 152 L100 164',
    'M64 164 H136',
    'M52 174 H148',
  ];
  return (
    <svg viewBox="0 0 200 190" fill="none" className={className} aria-hidden="true">
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: drawn ? 0 : 1,
            transition: `stroke-dashoffset 1.3s cubic-bezier(0.65,0,0.35,1) ${i * 0.14 + 0.2}s`,
          }}
        />
      ))}
    </svg>
  );
}
