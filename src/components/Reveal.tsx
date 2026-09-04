import { ReactNode } from 'react';
import { useInView } from '../hooks';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

/** Появление блока снизу при входе в вьюпорт */
export function Reveal({ children, delay = 0, className = '', y = 36 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : `translateY(${y}px)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type MaskLinesProps = {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  lineClassName?: string;
};

/** Построчное раскрытие заголовка из-под «маски» */
export function MaskLines({ lines, className = '', delay = 0, lineClassName = '' }: MaskLinesProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${lineClassName}`}>
          <span
            className="block transition-transform duration-[950ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform"
            style={{
              transform: inView ? 'none' : 'translateY(112%)',
              transitionDelay: `${delay + i * 130}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}
