import { ArrowUpRight } from 'lucide-react';
import { BRANDS } from '@/lib/brandLogos';
import type { ResourceItem } from '@/data/resources';

export function ResourceCard({ resource }: { resource: ResourceItem }) {
  const { Icon, color } = BRANDS[resource.brand];

  return (
    <a
      href={resource.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-azure/40 hover:shadow-[0_30px_60px_-32px_rgba(46,139,212,0.5)]"
      style={{ ['--brand' as string]: color }}
    >
      {/* glow de marca no hover */}
      <div
        className="absolute -right-12 -top-12 size-36 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-25"
        style={{ background: color }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between">
        <span
          className="flex size-16 items-center justify-center rounded-2xl border border-border/70 bg-white transition-transform duration-300 group-hover:scale-105"
          style={{ color }}
        >
          <Icon className="size-9" />
        </span>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azure" />
      </div>

      <h3 className="display relative mt-6 text-2xl">{resource.name}</h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>
      <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-mono text-xs text-azure-deep">
        {resource.hrefLabel}
      </span>
    </a>
  );
}
