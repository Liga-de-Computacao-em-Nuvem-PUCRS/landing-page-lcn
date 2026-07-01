import { Layers } from 'lucide-react';
import type { CloudProvider, CertLevel } from '@/types/cert.types';
import { LEVEL_ORDER } from '@/data/certifications';
import { BRANDS } from '@/lib/brandLogos';
import { cn } from '@/lib/utils';

export type ProviderFilter = CloudProvider | 'all';
export type LevelFilter = CertLevel | 'all';

interface CertFiltersProps {
  provider: ProviderFilter;
  level: LevelFilter;
  onProvider: (p: ProviderFilter) => void;
  onLevel: (l: LevelFilter) => void;
  total: number;
}

const LEVEL_LABEL: Record<CertLevel, string> = {
  Foundational: 'Fundamental',
  Associate: 'Associate',
  Professional: 'Professional',
  Specialty: 'Specialty',
};

const PROVIDER_BRAND: Record<CloudProvider, keyof typeof BRANDS> = {
  aws: 'aws',
  azure: 'azure',
  gcp: 'gcp',
};

const PROVIDER_SHORT: Record<CloudProvider, string> = {
  aws: 'AWS',
  azure: 'Azure',
  gcp: 'GCP',
};

export function CertFilters({
  provider,
  level,
  onProvider,
  onLevel,
  total,
}: CertFiltersProps) {
  const providers: ProviderFilter[] = ['all', 'aws', 'azure', 'gcp'];
  const levels: LevelFilter[] = ['all', ...LEVEL_ORDER];

  return (
    <div className="sticky top-16 z-30 border-y border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Provedores — segmented control com logos */}
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 p-1">
          {providers.map((p) => {
            const active = provider === p;
            const brand = p !== 'all' ? BRANDS[PROVIDER_BRAND[p]] : null;
            const Icon = brand?.Icon ?? Layers;
            return (
              <button
                key={p}
                type="button"
                onClick={() => onProvider(p)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all',
                  active
                    ? 'bg-background text-ink shadow-sm'
                    : 'text-muted-foreground hover:text-ink'
                )}
              >
                <Icon
                  className="size-4"
                  style={active && brand ? { color: brand.color } : undefined}
                />
                {p === 'all' ? 'Todas' : PROVIDER_SHORT[p]}
              </button>
            );
          })}
        </div>

        {/* Níveis */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 hidden font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:inline">
            {total} certificações
          </span>
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => onLevel(l)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                level === l
                  ? 'border-azure bg-accent text-azure-deep'
                  : 'border-border text-muted-foreground hover:border-azure/40 hover:text-ink'
              )}
            >
              {l === 'all' ? 'Todos os níveis' : LEVEL_LABEL[l]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
