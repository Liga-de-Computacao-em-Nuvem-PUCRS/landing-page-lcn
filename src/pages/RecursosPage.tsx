import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { ResourceCard } from '@/components/recursos/ResourceCard';
import { RESOURCES, type ResourceItem } from '@/data/resources';

const GROUPS: { title: string; category: ResourceItem['category']; note: string }[] = [
  {
    title: 'Ferramentas do AWS Student Builder Group',
    category: 'Plataforma do AWS Group',
    note: 'O ecossistema apresentado no Ciclo 1 — onde você estuda, ganha badges e acompanha os eventos.',
  },
  {
    title: 'Ferramentas técnicas',
    category: 'Ferramenta técnica',
    note: 'As tecnologias trabalhadas nos hands-on, do Console ao provisionamento com IaC.',
  },
];

export default function RecursosPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="O que usamos"
        title={<>Recursos & plataformas</>}
        description="As plataformas do ecossistema AWS Student Builder Group e as ferramentas que auxiliam os encontros da liga. Importante para o aprendizado e desenvolvimento de projetos."
      />

      {GROUPS.map((group) => {
        const items = RESOURCES.filter((r) => r.category === group.category);
        return (
          <section
            key={group.category}
            className="mx-auto w-full max-w-6xl px-5 pb-16 last:pb-24"
          >
            <Reveal>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {group.title}
                  </h2>
                  <div className="horizon flex-1" />
                </div>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  {group.note}
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((resource, i) => (
                <Reveal key={resource.name} delay={i * 0.05}>
                  <ResourceCard resource={resource} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
