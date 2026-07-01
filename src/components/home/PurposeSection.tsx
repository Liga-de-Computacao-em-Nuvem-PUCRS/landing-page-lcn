import { Reveal } from '@/components/Reveal';

const PURPOSE = [
  {
    label: 'Missão',
    text: 'Democratizar o acesso ao conhecimento prático em computação em nuvem entre os estudantes da PUCRS, formando profissionais aptos a projetar, implantar e operar soluções em cloud.',
  },
  {
    label: 'Visão',
    text: 'Ser a principal comunidade estudantil de cloud computing do RS, referência em capacitação hands-on e em parceria com o ecossistema AWS.',
  },
  {
    label: 'Valores',
    text: 'Aprendizado mão na massa, colaboração, inclusão, ética e excelência técnica — o que guia cada encontro e cada projeto.',
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

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
        {PURPOSE.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.1} className="bg-background">
            <div className="flex h-full flex-col p-8 transition-colors hover:bg-sky-tint">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-azure-deep">
                  {p.label}
                </span>
                <span className="font-mono text-xs text-baby">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/90">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
