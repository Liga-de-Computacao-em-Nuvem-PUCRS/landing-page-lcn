import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CycleTimeline } from '@/components/calendario/CycleTimeline';
import { CYCLES, CLF_DOMAINS } from '@/data/calendar';

export default function CalendarioPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        eyebrow="Programa-piloto 2026/2"
        title={<>Calendário em 4 ciclos</>}
        description="Encontros toda quinta-feira, de 06/08 a 03/12 — 18 no total. A estrutura é progressiva: das ferramentas à certificação e, então, a cases reais de clientes externos."
      >
        <div className="flex flex-wrap gap-2">
          {[
            'Quintas-feiras',
            '18 encontros',
            'Formato híbrido',
            'PUCRS · Escola Politécnica',
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-azure/25 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-azure-deep backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto w-full max-w-4xl px-5 pb-24">
        <div className="flex flex-col gap-12">
          {CYCLES.map((cycle) => (
            <div key={cycle.key} className="flex flex-col gap-5">
              <CycleTimeline cycle={cycle} />

              {/* Domínios do CLF-C02 — logo abaixo do Ciclo 2, fora do card */}
              {cycle.key === 'c2' && (
                <Reveal>
                  <section className="overflow-hidden rounded-3xl border border-border/70 bg-background">
                    <div className="border-b border-border/70 bg-sky-tint/60 px-7 py-5">
                      <span className="eyebrow">Exame CLF-C02</span>
                      <h2 className="display mt-2 text-2xl">
                        Domínios do Cloud Practitioner
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Peso de cada domínio no exame — a base do Ciclo 2.
                      </p>
                    </div>
                    <div className="grid gap-3 p-7 sm:grid-cols-2">
                      {CLF_DOMAINS.map((d, i) => (
                        <div
                          key={d.domain}
                          className="flex items-center gap-4 rounded-2xl border border-border/70 p-4"
                        >
                          <span className="font-mono text-xs text-azure/60">
                            D{i + 1}
                          </span>
                          <span className="flex-1 text-sm text-ink/90">
                            {d.domain}
                          </span>
                          <span className="rounded-lg bg-accent px-2.5 py-1 font-mono text-sm font-semibold text-azure-deep">
                            {d.weight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </Reveal>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 w-fit rounded-full border border-dashed border-border bg-muted/50 px-4 py-2 text-center text-xs text-muted-foreground">
          Datas conferidas contra o Calendário Oficial PUCRS 2026 (Graduação
          Presencial)
        </p>
      </div>
    </div>
  );
}
