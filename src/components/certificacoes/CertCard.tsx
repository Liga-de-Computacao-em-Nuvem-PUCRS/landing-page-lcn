import {
  FileQuestion,
  Clock,
  Target,
  BadgeDollarSign,
  ListChecks,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import type { Certification } from '@/types/cert.types';
import { PROVIDER_META } from '@/data/certifications';
import { CertBadge } from '@/components/certificacoes/CertBadge';
import { LevelBadge } from '@/components/certificacoes/LevelBadge';

function ExamFact({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value?: string;
}) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 size-3.5 shrink-0 text-azure/70" />
      <div className="flex flex-col gap-0.5">
        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </dt>
        <dd className="font-mono text-xs leading-tight text-ink">{value}</dd>
      </div>
    </div>
  );
}

export function CertCard({ cert }: { cert: Certification }) {
  const meta = PROVIDER_META[cert.provider];

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-azure/40 hover:shadow-[0_30px_60px_-34px_rgba(46,139,212,0.55)]"
      style={{ ['--brand' as string]: meta.color }}
    >
      {/* faixa de acento do provedor */}
      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: meta.color }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6 pt-7">
        <div className="flex items-start gap-4">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-sky-tint/70">
            <CertBadge cert={cert} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span
                className="inline-block size-2 rounded-full"
                style={{ background: meta.color }}
              />
              <span className="text-xs font-semibold text-ink">
                {meta.short}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {cert.code}
              </span>
            </div>
            <h3 className="display mt-1.5 text-lg leading-tight">
              {cert.name}
            </h3>
            <div className="mt-2">
              <LevelBadge level={cert.level} />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {cert.description}
        </p>

        <div className="mt-4">
          <span className="text-[10px] uppercase tracking-wider text-azure-deep">
            Principais conteúdos
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {cert.topics.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-accent px-2 py-1 text-xs text-ink/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-3.5 border-t border-border/70 pt-5 sm:grid-cols-3">
          <ExamFact icon={FileQuestion} label="Questões" value={cert.exam.questions} />
          <ExamFact icon={Clock} label="Duração" value={cert.exam.duration} />
          <ExamFact icon={Target} label="Nota de corte" value={cert.exam.passingScore} />
          <ExamFact icon={BadgeDollarSign} label="Preço" value={cert.exam.price} />
          <ExamFact icon={ListChecks} label="Formato" value={cert.exam.format} />
        </dl>

        <a
          href={cert.url ?? '#'}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:border-azure/50 hover:bg-accent hover:text-azure-deep"
          style={{ borderColor: `${meta.color}33` }}
        >
          Página oficial da certificação
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
