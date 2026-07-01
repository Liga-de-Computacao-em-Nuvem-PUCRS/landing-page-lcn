import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SbgIcon, type SbgIconName } from '@/components/SbgIcon';
import { cn } from '@/lib/utils';

interface FloatItem {
  name: SbgIconName;
  top: string;
  left: string;
  size: string;
  color: string;
  delay: number;
  drift: number;
}

/** Constelação de ícones do AWS SBG à deriva, como nuvens no céu. */
const ITEMS: FloatItem[] = [
  { name: 'bracket-smile', top: '18%', left: '8%', size: '2.6rem', color: 'text-baby', delay: 0, drift: 14 },
  { name: 'bolt', top: '26%', left: '86%', size: '1.9rem', color: 'text-mint', delay: 0.6, drift: 10 },
  { name: 'drop', top: '64%', left: '13%', size: '1.7rem', color: 'text-azure/50', delay: 1.1, drift: 12 },
  { name: 'bracket-smile-double', top: '70%', left: '82%', size: '2.9rem', color: 'text-baby', delay: 0.3, drift: 16 },
  { name: 'trophy', top: '12%', left: '52%', size: '1.6rem', color: 'text-amber/60', delay: 0.9, drift: 9 },
  { name: 'ladder', top: '54%', left: '62%', size: '1.8rem', color: 'text-azure/40', delay: 1.4, drift: 11 },
];

interface SkyBackgroundProps {
  className?: string;
  /** mostra a constelação de ícones (padrão true) */
  constellation?: boolean;
  /** ativa parallax das nuvens ligado ao scroll (padrão true) */
  parallax?: boolean;
}

export function SkyBackground({
  className,
  constellation = true,
  parallax = true,
}: SkyBackgroundProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const cloudsY = useTransform(scrollY, [0, 600], [0, parallax && !reduce ? 120 : 0]);
  const haloY = useTransform(scrollY, [0, 600], [0, parallax && !reduce ? -60 : 0]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      {/* Gradiente do céu: branco no topo → azul bebê embaixo, com leve deslocamento animado */}
      <div
        className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f4faff_35%,#e3f1fc_68%,#d3e8f8_100%)]"
        style={
          reduce
            ? undefined
            : {
                backgroundSize: '180% 180%',
                animation: 'sky-shift 18s ease-in-out infinite',
              }
        }
      />

      {/* Halo suave de sol difuso */}
      <motion.div
        style={{ y: haloY }}
        className="absolute left-1/2 top-[-14%] size-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(174,216,242,0.55)_0%,rgba(174,216,242,0)_68%)] blur-2xl"
      />

      {/* Camada de nuvens (blobs) com parallax */}
      <motion.div
        style={{ y: cloudsY }}
        className="absolute bottom-[-8%] left-[-6%] h-64 w-[36rem] rounded-full bg-white/70 blur-3xl"
      />
      <motion.div
        style={{ y: cloudsY }}
        className="absolute bottom-[6%] right-[-4%] h-52 w-[30rem] rounded-full bg-white/60 blur-3xl"
      />

      {constellation &&
        ITEMS.map((it, i) => (
          <motion.span
            key={i}
            className={cn('absolute opacity-70', it.color)}
            style={{ top: it.top, left: it.left }}
            initial={reduce ? undefined : { y: 0 }}
            animate={
              reduce ? undefined : { y: [0, -it.drift, 0], rotate: [0, 3, 0] }
            }
            transition={
              reduce
                ? undefined
                : {
                    duration: 7 + i,
                    delay: it.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          >
            <span className="block" style={{ width: it.size, height: it.size }}>
              <SbgIcon name={it.name} className="size-full" />
            </span>
          </motion.span>
        ))}

      {/* Fade para o conteúdo abaixo */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
