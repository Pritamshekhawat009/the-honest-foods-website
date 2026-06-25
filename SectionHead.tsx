import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  light = false,
  className = '',
  children,
}: SectionHeadProps) {
  return (
    <Reveal className={`max-w-[680px] mb-14 ${className}`}>
      <div
        className={`eyebrow ${
          light ? 'text-orange-light before:bg-orange-light' : 'text-orange before:bg-orange'
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-3.5 text-[clamp(30px,4vw,46px)] leading-[1.12] ${
          light ? 'text-white' : 'text-green-deep'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[16.5px] ${
            light ? 'text-cream/75' : 'text-charcoal-soft'
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </Reveal>
  );
}
