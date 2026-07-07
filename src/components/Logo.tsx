import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  /** compact = só a marca; full = marca + wordmark */
  variant?: 'compact' | 'full';
  /** inverte para uso sobre fundo escuro */
  inverted?: boolean;
}

export function Logo({ className, variant = 'full', inverted }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/Icones/lcn2.svg"
        alt=""
        aria-hidden="true"
        className="h-9 w-auto shrink-0"
      />
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
