import type { ReactNode } from 'react';
import { SkyBackground } from '@/components/SkyBackground';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}

/** Cabeçalho compartilhado das páginas internas, sob um céu sutil. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <SkyBackground constellation={false} className="opacity-90" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-20 md:pt-24">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
