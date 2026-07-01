import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** compact = só a marca; full = marca + wordmark */
  variant?: 'compact' | 'full';
  /** inverte para uso sobre fundo escuro */
  inverted?: boolean;
}

/** Marca de nuvem — placeholder até a logo oficial existir. */
function CloudMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="11" fill="var(--azure)" />
      <path
        d="M13 27a5 5 0 0 1-.5-9.98 6.8 6.8 0 0 1 13.2-1.63A4.7 4.7 0 0 1 26.5 27H13Z"
        fill="var(--sky-tint)"
      />
      <path
        d="M16 31l2-3.4M20.5 31l2-3.4M25 31l2-3.4"
        stroke="var(--baby)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, variant = 'full', inverted }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <CloudMark className="size-9 shrink-0" />
      {variant === 'full' && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[15px] font-semibold tracking-tight',
              inverted ? 'text-white' : 'text-ink'
            )}
          >
            Liga de Computação
          </span>
          <span
            className={cn(
              'font-display text-[15px] font-semibold tracking-tight',
              inverted ? 'text-white/90' : 'text-ink'
            )}
          >
            em Nuvem{' '}
            <span className="font-mono text-[10px] font-medium tracking-widest text-azure align-middle">
              PUCRS
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
