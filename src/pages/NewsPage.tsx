import { useMemo, useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { NewsCard } from '@/components/noticias/NewsCard';
import { NEWS } from '@/data/news';
import type { NewsProvider } from '@/types/news.types';
import { cn } from '@/lib/utils';

type Filter = NewsProvider | 'all';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'aws', label: 'AWS' },
  { key: 'azure', label: 'Azure' },
  { key: 'gcp', label: 'Google Cloud' },
  { key: 'geral', label: 'Geral' },
];

export default function NewsPage() {
  const [filter, setFilter] = useState<Filter>('all');

  const items = useMemo(() => {
    const list =
      filter === 'all' ? NEWS : NEWS.filter((n) => n.provider === filter);
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [filter]);

  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Radar cloud"
        title={
          <>
            Notícias do <span className="accent-word">mundo cloud</span>
          </>
        }
        description="Anúncios, lançamentos e leituras selecionadas das três grandes nuvens. Cada card leva direto ao artigo original."
      >
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                filter === f.key
                  ? 'border-azure bg-primary text-white'
                  : 'border-border bg-white/60 text-muted-foreground backdrop-blur hover:border-azure/40 hover:text-ink'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        {items.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            Nenhuma notícia para esse filtro no momento.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.url} delay={Math.min(i * 0.05, 0.3)}>
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        )}

        <p className="mx-auto mt-12 w-fit rounded-full border border-dashed border-border bg-muted/50 px-4 py-2 text-center text-xs text-muted-foreground">
          Curadoria da liga · os links levam às fontes oficiais
        </p>
      </div>
    </div>
  );
}
