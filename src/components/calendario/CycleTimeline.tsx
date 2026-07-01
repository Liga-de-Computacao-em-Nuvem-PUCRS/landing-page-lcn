import { Reveal } from '@/components/Reveal';
import type { Cycle } from '@/types/calendar.types';
import { cn } from '@/lib/utils';

const ACCENT: Record<Cycle['accent'], { hex: string; soft: string; text: string }> = {
  azure: { hex: '#2e8bd4', soft: '#e4f2fc', text: 'text-azure-deep' },
  mint: { hex: '#1f9e78', soft: '#e7faf3', text: 'text-[#1f9e78]' },
  amber: { hex: '#c0820f', soft: '#fdf3e0', text: 'text-[#b07d10]' },
  magenta: { hex: '#c72f8f', soft: '#fbeaf4', text: 'text-[#c72f8f]' },
};

/** Cor da tag de tipo do encontro (por categoria). */
function kindStyle(kind: string): { background: string; color: string } {
  const k = kind.toLowerCase();
  if (k.includes('hands-on')) return { background: '#e7faf3', color: '#1f9e78' };
  if (k.includes('prática')) return { background: '#fdf3e0', color: '#b07d10' };
  if (k.includes('projeto')) return { background: '#eef0f4', color: '#3f5a76' };
  if (k.includes('extensão')) return { background: '#fbeaf4', color: '#c72f8f' };
  if (k.includes('comunidade')) return { background: '#f0eafc', color: '#7b3fd6' };
  if (k.includes('ensino')) return { background: '#e4f2fc', color: '#1c6aac' };
  return { background: '#eef0f4', color: '#3f5a76' };
}

export function CycleTimeline({ cycle }: { cycle: Cycle }) {
  const a = ACCENT[cycle.accent];

  return (
    <Reveal>
      <section className="overflow-hidden rounded-3xl border border-border/70 bg-background shadow-[0_1px_2px_rgba(11,42,69,0.04),0_20px_40px_-32px_rgba(11,42,69,0.25)]">
        {/* Cabeçalho do ciclo com faixa em gradiente */}
        <div
          className="relative flex flex-col gap-4 p-7 md:flex-row md:items-center md:gap-6"
          style={{
            background: `linear-gradient(120deg, ${a.soft} 0%, #ffffff 70%)`,
          }}
        >
          <span
            className="absolute inset-y-0 left-0 w-1.5"
            style={{ background: a.hex }}
            aria-hidden="true"
          />
          <div
            className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
            style={{ background: a.hex }}
          >
            <span className="display text-4xl">{cycle.index}</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className={cn('font-mono text-xs uppercase tracking-widest', a.text)}>
                Ciclo {cycle.index}
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="font-mono text-xs text-muted-foreground">
                {cycle.period}
              </span>
            </div>
            <h3 className="display mt-1 text-3xl">
              {cycle.highlight
                ? (() => {
                    const [before, after] = cycle.title.split(cycle.highlight);
                    return (
                      <>
                        {before}
                        <span className="accent-word">{cycle.highlight}</span>
                        {after}
                      </>
                    );
                  })()
                : cycle.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {cycle.focus}
            </p>
          </div>
          <span
            className="w-fit shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium"
            style={{ borderColor: `${a.hex}44`, color: a.hex, background: '#fff' }}
          >
            {cycle.format}
          </span>
        </div>

        {/* Encontros */}
        <ol className="relative px-7 py-6 pl-12 md:pl-16">
          <span
            className="absolute bottom-8 left-[3.15rem] top-8 w-0.5 rounded-full md:left-[4.4rem]"
            style={{
              background: `linear-gradient(to bottom, ${a.hex}, ${a.hex}22)`,
            }}
            aria-hidden="true"
          />
          {cycle.meetings.map((m) => (
            <li key={m.n} className="relative flex items-start gap-4 py-3.5 first:pt-0 last:pb-0">
              <span
                className="absolute -left-[1.55rem] top-4 flex size-4 items-center justify-center rounded-full ring-4 ring-background md:-left-[2.85rem]"
                style={{ background: a.hex }}
                aria-hidden="true"
              />
              <span
                className="mt-0.5 shrink-0 rounded-lg px-2.5 py-1 font-mono text-sm font-semibold"
                style={{ background: a.soft, color: a.hex }}
              >
                {m.date}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.98rem] leading-snug text-ink">{m.topic}</p>
                <span className="mt-1.5 inline-flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {m.kind.split('/').map((part) => {
                    const t = part.trim();
                    const s = kindStyle(t);
                    return (
                      <span
                        key={t}
                        className="rounded px-1.5 py-0.5 font-semibold"
                        style={{ background: s.background, color: s.color }}
                      >
                        {t}
                      </span>
                    );
                  })}
                  <span className="text-muted-foreground/70">
                    Encontro {m.n}
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Reveal>
  );
}
