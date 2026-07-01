import type { BoardMember } from '@/types/board.types';
import { cn } from '@/lib/utils';

/**
 * Linha alternada foto + texto (estilo bekirsch.com/aboutme).
 * `index` par → foto à esquerda; ímpar → foto à direita.
 */
export function BoardCard({
  member,
  index,
}: {
  member: BoardMember;
  index: number;
}) {
  const flip = index % 2 === 1;

  return (
    <article className="group grid items-center gap-6 rounded-3xl border border-border/70 bg-background p-5 transition-all duration-300 hover:border-azure/40 hover:shadow-[0_30px_60px_-34px_rgba(46,139,212,0.5)] md:grid-cols-2 md:gap-10 md:p-6">
      {/* Foto / placeholder */}
      <div
        className={cn(
          'relative aspect-[5/4] overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#eff7fd_0%,#cfe6f7_55%,#aed8f2_100%)]',
          flip && 'md:order-2'
        )}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="display flex size-24 items-center justify-center rounded-full border border-white/70 bg-white/60 text-3xl text-azure-deep shadow-sm backdrop-blur">
              {member.initials}
            </span>
          </div>
        )}
        {/* halo decorativo */}
        <div
          className="absolute -bottom-8 -right-8 size-28 rounded-full bg-white/50 blur-2xl"
          aria-hidden="true"
        />
      </div>

      {/* Texto */}
      <div className={cn('flex flex-col', flip && 'md:order-1')}>
        <span className="w-fit rounded-full bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-azure-deep">
          {member.role}
        </span>
        <h3 className="display mt-4 text-3xl md:text-4xl">{member.name}</h3>
        {member.course && (
          <p className="mt-1 text-sm text-azure-deep">{member.course}</p>
        )}
        <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
