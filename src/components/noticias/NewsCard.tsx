import { ArrowUpRight, Newspaper } from 'lucide-react';
import { BRANDS } from '@/lib/brandLogos';
import type { NewsItem, NewsProvider } from '@/types/news.types';

const PROVIDER_UI: Record<
  NewsProvider,
  { label: string; color: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  aws: { label: 'AWS', color: BRANDS.aws.color, Icon: BRANDS.aws.Icon },
  azure: { label: 'Azure', color: BRANDS.azure.color, Icon: BRANDS.azure.Icon },
  gcp: { label: 'Google Cloud', color: BRANDS.gcp.color, Icon: BRANDS.gcp.Icon },
  geral: { label: 'Cloud', color: '#2e8bd4', Icon: Newspaper },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function NewsCard({ item }: { item: NewsItem }) {
  const ui = PROVIDER_UI[item.provider];
  const Icon = ui.Icon;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-3xl border border-border/70 bg-background p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-azure/40 hover:shadow-[0_30px_60px_-32px_rgba(46,139,212,0.5)]"
    >
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ background: ui.color }}
        >
          <Icon className="size-3.5" />
          {ui.label}
        </span>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure" />
      </div>

      <h3 className="display mt-5 text-xl leading-snug">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {item.summary}
      </p>

      <div className="mt-6 flex items-center gap-2 border-t border-border/70 pt-4 font-mono text-xs text-muted-foreground">
        <span className="text-azure-deep">{item.source}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </div>
    </a>
  );
}
