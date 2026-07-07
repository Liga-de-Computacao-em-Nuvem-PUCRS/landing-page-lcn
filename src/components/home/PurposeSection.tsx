import { Reveal } from '@/components/Reveal';

const PURPOSE = [
  {
    label: 'Nossa Missão',
    text: 'Democratizar o acesso ao conhecimento prático em computação em nuvem entre os estudantes, formando profissionais aptos a projetar, implantar e operar soluções em cloud.',
  },
  {
    label: 'Nossa Visão',
    text: 'Ser a principal comunidade estudantil de cloud computing do RS, referência em capacitação e em parceria com o ecossistema AWS.',
  },
  {
    label: 'Nossos Valores',
    text: 'Aprendizado mão na massa, colaboração, inclusão, ética e excelência técnica, o que guia cada encontro e cada projeto.',
  },
];

export function PurposeSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Reveal>
        <span className="eyebrow">Por que existimos</span>
        <h2 className="display mt-5 max-w-4xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl">
          Transformamos curiosidade em{' '}
          <span className="accent-word">arquitetura de nuvem</span>.
        </h2>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* Espaço reservado para foto do laboratório */}
        <Reveal>
          <figure className="relative h-full min-h-[22rem] overflow-hidden rounded-3xl border border-border bg-sky-tint">
            <img
              src="https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-02%20at%2010.21.24.jpeg"
              alt="Laboratório da Liga de Computação em Nuvem"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* sobreado azul para alinhar com o design */}
            <div
              className="absolute inset-0 bg-[linear-gradient(150deg,rgba(46,139,212,0.28)_0%,rgba(10,37,64,0.55)_100%)] mix-blend-multiply"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,transparent_45%,rgba(10,37,64,0.35)_100%)]"
              aria-hidden="true"
            />
          </figure>
        </Reveal>

        {/* Itens de propósito empilhados */}
        <div className="flex flex-col divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background">
          {PURPOSE.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div className="flex flex-col p-8 transition-colors hover:bg-sky-tint">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-azure-deep">
                    {p.label}
                  </span>
                  <span className="font-mono text-xs text-baby">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/90">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
