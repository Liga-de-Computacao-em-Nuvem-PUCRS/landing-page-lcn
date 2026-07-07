import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { SkyBackground } from '@/components/SkyBackground';
import { CountUp } from '@/components/CountUp';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

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
        className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center"
      >
        {/* chip de status da turma */}
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-emerald-700">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-mint" />
            </span>
            Turma 2026/2 · inscrições abertas
          </span>
        </motion.div>

        {/* marca oficial */}
        <motion.img
          variants={item}
          src="/Icones/lcn2.svg"
          alt=""
          aria-hidden="true"
          className="mx-auto mt-8 h-28 w-auto drop-shadow-[0_16px_30px_rgba(46,139,212,0.22)] md:h-32"
        />

        {/* wordmark tipográfico */}
        <motion.h1
          variants={item}
          className="display mx-auto mt-6 max-w-3xl text-4xl leading-[0.95] sm:text-5xl md:text-6xl"
        >
          Liga de Computação em <span className="accent-word">Nuvem</span>
        </motion.h1>
        <motion.p variants={item} className="eyebrow mt-4">
          Escola Politécnica · PUCRS
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl"
        >
          Aprenda cloud na prática, conquiste sua certificação AWS e construa
          soluções reais com a comunidade.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
          className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-azure/15 pt-8"
        >
          <div className="flex flex-col items-center">
            <dt className="display text-3xl md:text-4xl">
              <CountUp to={100} suffix="%" />
            </dt>
            <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              hands-on
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <dt className="display accent-word text-3xl md:text-4xl">AWS</dt>
            <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              certificado
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="display text-lg leading-tight text-ink md:text-xl">
              Cases reais
            </dt>
            <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              de clientes
            </dd>
          </div>
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
