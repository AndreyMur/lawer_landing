import { ReactNode } from 'react';
import { MaskLines, Reveal } from './Reveal';

type Props = {
  kicker: string;
  lines: ReactNode[];
  lead?: ReactNode;
  align?: 'left' | 'split';
};

export default function SectionHead({ kicker, lines, lead, align = 'left' }: Props) {
  return (
    <div
      className={
        align === 'split'
          ? 'grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-end mb-14 md:mb-20'
          : 'mb-14 md:mb-20 max-w-3xl'
      }
    >
      <div>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
            <span className="text-brass/60 mr-2">§</span>
            {kicker}
          </p>
        </Reveal>
        <MaskLines
          className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.12] text-paper"
          lines={lines}
        />
      </div>
      {lead && (
        <Reveal delay={150} className={align === 'split' ? '' : 'mt-6'}>
          <p className="text-fog leading-relaxed text-base md:text-lg max-w-xl">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
