import { Github, Linkedin, Instagram, type LucideIcon } from 'lucide-react';
import { SiMeetup } from 'react-icons/si';
import { Logo } from '@/components/Logo';
import { SOCIAL_LINKS } from '@/data/social';

const LUCIDE: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/60 bg-sky-tint">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Comunidade estudantil de computação em nuvem da PUCRS, vinculada à
            Escola Politécnica. A liga participa do programa AWS Student Builder
            Group.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end sm:text-right">
          <span className="eyebrow mb-1">Comunidade</span>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Acompanhe os encontros, participe dos eventos e conecte-se com a
            comunidade cloud da PUCRS.
          </p>
          <div className="mt-1 flex gap-2.5">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon === 'meetup' ? SiMeetup : LUCIDE[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Liga de Computação em Nuvem — PUCRS.
          </p>
          <p className="font-mono tracking-tight">
            Escola Politécnica · AWS Student Builder Group
          </p>
        </div>
      </div>
    </footer>
  );
}
