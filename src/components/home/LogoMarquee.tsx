import { BRANDS, type BrandKey } from '@/lib/brandLogos';

const ITEMS: BrandKey[] = [
  'aws',
  'azure',
  'gcp',
  'docker',
  'terraform',
  'credly',
  'meetup',
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {ITEMS.map((key) => {
        const { Icon, label, color } = BRANDS[key];
        return (
          <span
            key={key}
            className="group inline-flex items-center gap-2.5 text-muted-foreground transition-colors"
          >
            <Icon className="size-7 shrink-0 transition-colors group-hover:[color:var(--brand)]" />
            <span
              className="text-sm font-medium tracking-tight transition-colors group-hover:text-ink"
              style={{ ['--brand' as string]: color }}
            >
              {label}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="border-y border-border/60 bg-background/60 py-6">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow mb-4 text-center">
          Nuvens & ferramentas que estudamos
        </p>
        <div
          className="marquee-mask group flex overflow-hidden"
          style={{ ['--marquee-duration' as string]: '34s' }}
        >
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}
