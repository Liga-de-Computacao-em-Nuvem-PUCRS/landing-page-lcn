import { useMemo, useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CertCard } from '@/components/certificacoes/CertCard';
import {
  CertFilters,
  type ProviderFilter,
  type LevelFilter,
} from '@/components/certificacoes/CertFilters';
import {
  CERTIFICATIONS,
  PROVIDER_META,
  LEVEL_ORDER,
} from '@/data/certifications';
import { BRANDS, type BrandKey } from '@/lib/brandLogos';
import type { CloudProvider } from '@/types/cert.types';

const PROVIDER_BRAND: Record<CloudProvider, BrandKey> = {
  aws: 'aws',
  azure: 'azure',
  gcp: 'gcp',
};

const PROVIDER_ORDER: CloudProvider[] = ['aws', 'azure', 'gcp'];

export default function CertificacoesPage() {
  const [provider, setProvider] = useState<ProviderFilter>('all');
  const [level, setLevel] = useState<LevelFilter>('all');

  const filtered = useMemo(
    () =>
      CERTIFICATIONS.filter(
        (c) =>
          (provider === 'all' || c.provider === provider) &&
          (level === 'all' || c.level === level)
      ),
    [provider, level]
  );

  const grouped = useMemo(
    () =>
      PROVIDER_ORDER.map((p) => ({
        provider: p,
        certs: filtered
          .filter((c) => c.provider === p)
          .sort(
            (a, b) =>
              LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level)
          ),
      })).filter((g) => g.certs.length > 0),
    [filtered]
  );

  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Trilhas de credenciamento"
        title={<>Certificações cloud</>}
        description="O catálogo ativo de certificações da AWS, Microsoft Azure e Google Cloud — com o que cada uma valida, seus principais conteúdos e o que é preciso para conquistá-la."
      />

      <CertFilters
        provider={provider}
        level={level}
        onProvider={setProvider}
        onLevel={setLevel}
        total={filtered.length}
      />

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        {grouped.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            Nenhuma certificação encontrada para esse filtro.
          </p>
        )}

        <div className="flex flex-col gap-16">
          {grouped.map((group) => {
            const meta = PROVIDER_META[group.provider];
            const brand = BRANDS[PROVIDER_BRAND[group.provider]];
            const BrandIcon = brand.Icon;
            return (
              <section key={group.provider}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span
                      className="flex size-11 items-center justify-center rounded-2xl text-white shadow-sm"
                      style={{ background: meta.color }}
                    >
                      <BrandIcon className="size-6" />
                    </span>
                    <div>
                      <h2 className="display text-2xl leading-none">
                        {meta.label}
                      </h2>
                      <span className="font-mono text-xs text-muted-foreground">
                        {group.certs.length} certificações
                      </span>
                    </div>
                    <div className="horizon ml-2 flex-1" />
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                  {group.certs.map((cert, i) => (
                    <Reveal key={cert.id} delay={Math.min(i * 0.04, 0.24)}>
                      <CertCard cert={cert} />
                    </Reveal>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <p className="mt-14 rounded-2xl border border-dashed border-border bg-muted/50 p-5 text-xs leading-relaxed text-muted-foreground">
          Dados de exame (número de questões, duração, nota de corte e preço)
          são referências públicas e podem variar por região, idioma e
          atualizações dos provedores. Confirme sempre na página oficial de cada
          certificação antes de agendar.
        </p>
      </div>
    </div>
  );
}
