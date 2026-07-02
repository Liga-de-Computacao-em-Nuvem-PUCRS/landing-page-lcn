import { FaAws } from 'react-icons/fa6';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SbgIcon } from '@/components/SbgIcon';
import { Button } from '@/components/ui/button';

/** Seção dedicada ao vínculo com o programa AWS Student Builder Group. */
export function AwsProgramSection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* atmosfera / glow */}
      <div
        className="pointer-events-none absolute -left-24 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,139,212,0.35)_0%,transparent_68%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-96 rounded-full bg-[radial-gradient(circle,rgba(88,214,174,0.22)_0%,transparent_70%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <Reveal>
          <div>
            <span className="eyebrow text-baby">Programa parceiro</span>
            <h2 className="display mt-5 text-4xl leading-[1.02] text-white sm:text-5xl md:text-[3.4rem]">
              A liga faz parte do programa{' '}
              <span className="bg-[linear-gradient(100deg,#7cd0ff_0%,#aed8f2_60%,#58d6ae_100%)] bg-clip-text text-transparent">
                AWS Student Builder Group
              </span>
              .
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              A liga possui certificados e especialistas em cloud computing, com o suporte do programa AWS Student Builder Group.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a
                  href="https://www.meetup.com/aws-sbg-pucrs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conheça o grupo no Meetup
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href="https://skillbuilder.aws/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AWS Skill Builder
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
            <FaAws className="size-32 text-white md:size-40" aria-label="Amazon Web Services" />
            {/* ícones SBG orbitando */}
            <SbgIcon
              name="bracket-smile"
              className="absolute left-6 top-8 size-9 text-baby/70"
            />
            <SbgIcon
              name="bolt"
              className="absolute right-8 top-12 size-7 text-mint/70"
            />
            <SbgIcon
              name="trophy"
              className="absolute bottom-8 right-10 size-8 text-amber/70"
            />
            <SbgIcon
              name="ladder"
              className="absolute bottom-10 left-8 size-8 text-baby/60"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
