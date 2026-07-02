import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, Cloud } from 'lucide-react';
import { SkyBackground } from '@/components/SkyBackground';
import { CountUp } from '@/components/CountUp';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const STATS: {
  n?: number;
  suffix?: string;
  text?: string;
  l?: string;
}[] = [
  { n: 100, suffix: '%', l: 'aprendizado hands-on' },
  { text: 'AWS', l: 'saia certificado' },
  { text: 'Cases reais de clientes' },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const mv = reduce ? undefined : 'hidden';
  const av = reduce ? undefined : 'show';

  return (
    <section className="relative isolate flex min-h-[94vh] items-center overflow-hidden">
      <SkyBackground />

      <motion.div
        variants={container}
        initial={mv}
        animate={av}
        className="relative mx-auto w-full max-w-5xl px-5 py-24 text-center"
      >
        {/* Espaço reservado para a logo (ainda não implementada) */}
        <motion.div variants={item} className="flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* halo de destaque */}
            <span
              className="absolute size-64 rounded-full bg-[radial-gradient(circle,rgba(174,216,242,0.65)_0%,transparent_68%)] blur-xl md:size-72"
              aria-hidden="true"
            />
            {/* anéis pulsantes */}
            {!reduce && (
              <>
                <motion.span
                  className="absolute rounded-full border border-azure/30"
                  initial={{ width: '9rem', height: '9rem', opacity: 0.5 }}
                  animate={{ width: '15rem', height: '15rem', opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                  aria-hidden="true"
                />
                <motion.span
                  className="absolute rounded-full border border-azure/30"
                  initial={{ width: '9rem', height: '9rem', opacity: 0.5 }}
                  animate={{ width: '15rem', height: '15rem', opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
                  aria-hidden="true"
                />
              </>
            )}
            <div
              className="relative flex size-36 items-center justify-center rounded-full border-2 border-dashed border-azure/45 bg-white/75 shadow-[0_30px_70px_-24px_rgba(46,139,212,0.7)] backdrop-blur md:size-44"
              aria-label="Espaço reservado para a logo da Liga"
            >
              <div className="flex flex-col items-center">
                <Cloud className="size-14 text-azure md:size-16" strokeWidth={1.5} />
                <span className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-azure-deep/70">
                  logo em breve
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-azure/25 bg-white/70 px-4 py-1.5 text-xs font-medium text-azure-deep shadow-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-mint" />
            </span>
            Escola Politécnica · AWS Student Builder Group
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="display mx-auto mt-6 max-w-5xl text-[3.1rem] leading-[0.9] sm:text-7xl md:text-[6.6rem]"
        >
          Liga de Computação
          <br />
          em <span className="accent-word">Nuvem</span>{' '}
          <span className="accent-word">PUCRS</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="display mx-auto mt-7 max-w-3xl text-2xl font-medium leading-tight text-ink/80 md:text-[2rem]"
        >
          Aprendendo cloud na prática, conquistando sua certificação e construindo
          soluções reais.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link to="/calendario">
              Ver o programa 2026/2
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href="https://www.meetup.com/aws-sbg-pucrs/"
              target="_blank"
              rel="noreferrer"
            >
              Entrar pelo Meetup
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </motion.div>

        <motion.dl
          variants={item}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-azure/15 pt-8"
        >
          {STATS.map((s, i) => {
            const isPhrase = s.text !== undefined && !s.l;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center"
              >
                {isPhrase ? (
                  <dt className="display accent-word text-xl leading-tight md:text-2xl">
                    {s.text}
                  </dt>
                ) : (
                  <>
                    <dt className="display text-4xl md:text-6xl">
                      {s.text !== undefined ? (
                        <span className="accent-word">{s.text}</span>
                      ) : (
                        <CountUp to={s.n!} suffix={s.suffix} />
                      )}
                    </dt>
                    <dd className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      {s.l}
                    </dd>
                  </>
                )}
              </div>
            );
          })}
        </motion.dl>
      </motion.div>

      {!reduce && (
        <motion.div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-azure/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <ChevronDown className="size-6" />
        </motion.div>
      )}
    </section>
  );
}
