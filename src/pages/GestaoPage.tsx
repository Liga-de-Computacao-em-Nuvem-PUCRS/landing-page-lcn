import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { BoardCard } from '@/components/gestao/BoardCard';
import { BOARD } from '@/data/board';

export default function GestaoPage() {
  let running = 0;

  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Quem conduz"
        title={
          <>
            A <span className="accent-word">gestão</span> da liga
          </>
        }
        description="Nosso time que conduz a liga, promovendo o aprendizado e a capacitação em cloud computing."
      />

      {BOARD.map((group) => (
        <section
          key={group.title}
          className="mx-auto w-full max-w-5xl px-5 pb-16 last:pb-24"
        >
          <Reveal>
            <div className="flex items-center gap-4">
              <h2 className="display text-2xl">{group.title}</h2>
              <div className="horizon flex-1" />
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            {group.members.map((member) => {
              const idx = running++;
              return (
                <Reveal key={member.role}>
                  <BoardCard member={member} index={idx} />
                </Reveal>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
