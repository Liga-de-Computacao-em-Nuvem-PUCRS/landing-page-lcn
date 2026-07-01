import type { CertLevel } from '@/types/cert.types';
import { cn } from '@/lib/utils';

const STYLES: Record<CertLevel, string> = {
  Foundational: 'bg-[#eaf6ff] text-[#1c6aac] border-[#bfe0f7]',
  Associate: 'bg-[#e7faf3] text-[#1f9e78] border-[#bdead9]',
  Professional: 'bg-[#f3ecfb] text-[#7b3fd6] border-[#ddccf3]',
  Specialty: 'bg-[#fdf0e6] text-[#c06a1b] border-[#f5d9bf]',
};

const LABEL: Record<CertLevel, string> = {
  Foundational: 'Fundamental',
  Associate: 'Associate',
  Professional: 'Professional',
  Specialty: 'Specialty',
};

export function LevelBadge({
  level,
  className,
}: {
  level: CertLevel;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        STYLES[level],
        className
      )}
    >
      {LABEL[level]}
    </span>
  );
}
