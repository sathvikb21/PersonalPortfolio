import { profile } from '../data'
import { Reveal } from './Reveal'
import { ArrowDown, ArrowUpRight, MapPin } from './icons'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-shell px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-fg-muted uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 dark:bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            Open to Fall 2027 internships
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-5xl leading-[1.04] font-semibold tracking-tight text-fg sm:text-7xl lg:text-8xl">
            {profile.tagline.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent dark:from-teal-300 dark:via-cyan-300 dark:to-sky-300">
              {profile.tagline.split(' ').slice(2).join(' ')}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {profile.fullName} — {profile.role} at {profile.school}, class of {profile.gradYear}.{' '}
            <span className="inline-flex items-center gap-1.5 text-fg">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-btn py-2 pr-2 pl-6 font-medium text-btn-fg transition-transform duration-700 ease-spring hover:scale-[1.02] active:scale-[0.98]"
            >
              View my work
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-btn-fg/15 transition-transform duration-700 ease-spring group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              className="group flex items-center gap-3 rounded-full border border-line bg-shell py-2 pr-2 pl-6 font-medium text-fg backdrop-blur-sm transition-all duration-700 ease-spring hover:border-fg/30 active:scale-[0.98]"
            >
              Résumé
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fg/10 transition-transform duration-700 ease-spring group-hover:translate-y-[2px]">
                <ArrowDown className="h-4 w-4" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={500} className="absolute bottom-8">
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-fg-faint transition-colors duration-500 ease-spring hover:text-fg">
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </Reveal>
    </section>
  )
}
