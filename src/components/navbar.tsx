import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/gestao', label: 'Gestão' },
  { to: '/recursos', label: 'Recursos' },
  { to: '/calendario', label: 'Calendário' },
  { to: '/certificacoes', label: 'Certificações' },
  { to: '/noticias', label: 'Notícias' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="rounded-lg" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === '/' }}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-ink data-[status=active]:text-ink"
                activeProps={{
                  className:
                    "before:absolute before:inset-x-3 before:-bottom-[21px] before:h-0.5 before:rounded-full before:bg-primary before:content-['']",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a
              href="https://www.meetup.com/aws-sbg-pucrs/"
              target="_blank"
              rel="noreferrer"
            >
              Fique por dentro!
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-accent md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        )}
        style={{ transition: 'max-height 0.3s ease' }}
      >
        <ul className="flex flex-col gap-1 px-5 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === '/' }}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-ink data-[status=active]:bg-accent data-[status=active]:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Button asChild className="w-full">
              <a
                href="https://www.meetup.com/aws-sbg-pucrs/"
                target="_blank"
                rel="noreferrer"
              >
                Participar
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
