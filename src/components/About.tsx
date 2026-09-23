import { profile, stats } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="Engineer in training, builder by habit" />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Intro card — double-bezel */}
          <Reveal className="md:col-span-7">
            <div className="h-full rounded-[2rem] border border-line bg-shell p-2">
              <div className="card-core flex h-full flex-col justify-between rounded-[calc(2rem-0.5rem)] bg-card p-8 sm:p-10">
                <p className="text-lg leading-relaxed text-fg">{profile.intro}</p>
                <p className="mt-8 text-sm leading-relaxed text-fg-muted">
                Outside of class, you’ll usually find me refereeing soccer games, on the pickleball or 
                tennis courts pretending I’m way more consistent than I am, or playing video games and 
                blaming the keyboard when things go south
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 md:col-span-5">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="h-full rounded-[2rem] border border-line bg-shell p-1.5">
                  <div className="card-core flex h-full flex-col justify-center rounded-[calc(2rem-0.375rem)] bg-card px-6 py-8 text-center">
                    <span className="font-display text-4xl font-semibold text-fg">
                      {stat.value}
                    </span>
                    <span className="mt-2 text-xs tracking-wide text-fg-faint">{stat.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
