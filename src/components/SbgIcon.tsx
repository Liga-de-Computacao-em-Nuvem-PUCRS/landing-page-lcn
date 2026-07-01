import { cn } from '@/lib/utils';

/**
 * Ícones da identidade do AWS Student Builder Group (extraídos de SVG.zip).
 * Os arquivos originais têm cores inconsistentes, então recolorimos via CSS
 * `mask` — a forma vem do SVG e a cor da paleta do céu (currentColor).
 */
export type SbgIconName =
  | 'bolt'
  | 'clock'
  | 'bracket-smile'
  | 'bracket-smile-double'
  | 'drop'
  | 'key'
  | 'ladder'
  | 'speaker'
  | 'teams'
  | 'trophy'
  | 'wrench';

interface SbgIconProps {
  name: SbgIconName;
  className?: string;
  /** rótulo acessível; se ausente, o ícone é decorativo (aria-hidden) */
  title?: string;
}

export function SbgIcon({ name, className, title }: SbgIconProps) {
  const url = `/svg/${name}-blue.svg`;
  return (
    <span
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={cn('inline-block bg-current', className)}
      style={{
        WebkitMaskImage: `url("${url}")`,
        maskImage: `url("${url}")`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}
