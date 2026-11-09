import { FaAws } from 'react-icons/fa6';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SbgIcon } from '@/components/SbgIcon';
import { Button } from '@/components/ui/button';

/** Seção que apresenta a liga como o AWS Student Builder Group da PUCRS. */
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
            <span className="eyebrow text-baby">AWS Student Builder Group · PUCRS</span>
            <h2 className="display mt-5 text-4xl leading-[1.02] text-white sm:text-5xl md:text-[3.4rem]">
              Somos o{' '}
              <span className="bg-[linear-gradient(100deg,#7cd0ff_0%,#aed8f2_60%,#58d6ae_100%)] bg-clip-text text-transparent">
                AWS Student Builder Group
              </span>{' '}
              da PUCRS.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              A Liga de Computação em Nuvem é o grupo oficial do programa AWS
              Student Builder Group na PUCRS: encontros mão na massa,
              trilhas de certificação e conexão direta com o ecossistema AWS,
              com o suporte da própria Amazon Web Services.
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
                  href="https://bit.ly/3U5ayCy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Entre no AWS Builder Center
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
            <img
              src="/brand/sbg-pucrs-logo.webp"
              alt="Logo do AWS Student Builder Group da PUCRS"
              width={640}
              height={720}
              loading="lazy"
              className="h-[78%] w-auto drop-shadow-[0_18px_40px_rgba(46,139,212,0.35)]"
            />
            <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-ink px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/80">
              <FaAws className="size-5 text-white" aria-hidden="true" />
              SBG PUCRS
            </span>
            {/* ícones SBG orbitando */}
            <SbgIcon
              name="bracket-smile"
              className="absolute left-4 top-6 size-8 text-baby/70"
            />
            <SbgIcon
              name="bolt"
              className="absolute right-5 top-8 size-6 text-mint/70"
            />
            <SbgIcon
              name="trophy"
              className="absolute bottom-10 right-5 size-7 text-amber/70"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
