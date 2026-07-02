import { Reveal } from '@/components/Reveal';
import { SbgIcon, type SbgIconName } from '@/components/SbgIcon';

interface Pillar {
  title: string;
  text: string;
  icon: SbgIconName;
}

/** Eixos de atuação — fonte: 04-plano-de-atividades.md */
const PILLARS: Pillar[] = [
  {
    title: 'Ensino',
    text: 'Trilhas personalizadas de estudo e grupos de certificação.',
    icon: 'ladder',
  },
  {
    title: 'Prática hands-on',
    text: 'Workshops em conta AWS, laboratórios guiados e desafios de arquitetura.',
    icon: 'wrench',
  },
  {
    title: 'Eventos & Extensão',
    text: 'Palestras, meetups, hackathons e parcerias com empresas e comunidades.',
    icon: 'speaker',
  },
  {
    title: 'Pesquisa & Projetos',
    text: 'Projetos aplicados de cloud integrados à pesquisa da Escola Politécnica.',
    icon: 'bolt',
  },
  {
    title: 'Comunidade',
    text: 'Mentorias, divulgação e integração com o ecossistema AWS, TecnoPuc e PUCRS.',
    icon: 'teams',
  },
];

export function PillarsSection() {
  return (
    <section className="relative overflow-hidden bg-sky-tint">
      <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <span className="eyebrow">Eixos de atuação</span>
          <h2 className="display mt-5 text-4xl sm:text-5xl">
            Cinco frentes <span className="accent-word">focados em cloud:</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-azure/40 hover:shadow-[0_30px_60px_-32px_rgba(46,139,212,0.55)]">
                <div
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-baby/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-accent text-azure transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <SbgIcon name={p.icon} className="size-7" />
                </span>
                <h3 className="display relative mt-6 text-2xl">{p.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
