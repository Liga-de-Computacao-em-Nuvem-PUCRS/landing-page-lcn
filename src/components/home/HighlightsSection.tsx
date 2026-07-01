import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const JOURNEY = [
  {
    step: '01',
    title: 'Ferramentas',
    text: 'Console AWS, Docker e Terraform. O terreno onde tudo é construído.',
    width: '38%',
    accent: 'var(--azure)',
  },
  {
    step: '02',
    title: 'Certificação',
    text: 'Preparação completa para o AWS Cloud Practitioner (CLF-C02).',
    width: '64%',
    accent: 'var(--mint)',
  },
  {
    step: '03',
    title: 'Cases reais',
    text: 'Squads resolvem o problema de clientes externos, do case ao Terraform.',
    width: '100%',
    accent: 'var(--amber)',
  },
];

const EXPLORE = [
  { to: '/gestao', label: 'Gestão', desc: 'Quem conduz a liga' },
  { to: '/recursos', label: 'Recursos', desc: 'Plataformas e ferramentas' },
  { to: '/calendario', label: 'Calendário', desc: '4 ciclos, 18 encontros' },
  { to: '/certificacoes', label: 'Certificações', desc: 'AWS · Azure · GCP' },
] as const;

export function HighlightsSection() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <span className="eyebrow">A trajetória</span>
        <h2 className="display mt-5 max-w-3xl text-4xl sm:text-5xl">
          Uma subida progressiva: da ferramenta ao{' '}
          <span className="accent-word">cliente</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {JOURNEY.map((j, i) => (
          <Reveal key={j.step} delay={i * 0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-white to-sky-tint p-8">
              <span className="font-mono text-sm font-semibold text-azure/70">
                {j.step}
              </span>
              <h3 className="display mt-3 text-3xl">{j.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {j.text}
              </p>
              <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-ink/5">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: j.accent }}
                  initial={reduce ? undefined : { width: 0 }}
                  whileInView={reduce ? undefined : { width: j.width }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
        {EXPLORE.map((e, i) => (
          <Reveal key={e.to} delay={i * 0.05}>
            <Link
              to={e.to}
              className="group flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-background p-6 transition-all hover:-translate-y-1 hover:border-azure/40 hover:shadow-[0_24px_48px_-30px_rgba(46,139,212,0.5)]"
            >
              <ArrowUpRight className="size-5 self-end text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure" />
              <div className="mt-8">
                <span className="display text-xl">{e.label}</span>
                <p className="mt-0.5 text-xs text-muted-foreground">{e.desc}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
