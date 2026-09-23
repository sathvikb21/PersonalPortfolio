import { timeline } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Briefcase, GraduationCap } from './icons'

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been"
          description="Internships, research, teaching — and the degree holding it all together."
        />

        <ol className="relative mt-16 space-y-6 before:absolute before:top-6 before:bottom-6 before:left-[27px] before:w-px before:bg-line sm:before:left-[31px]">
          {timeline.map((item, i) => (
            <Reveal key={`${item.org}-${item.range}`} as="li" delay={i * 60} className="relative">
              <div className="flex gap-5 sm:gap-6">
                <span className="card-core relative z-10 mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-card text-fg sm:h-16 sm:w-16">
                  {item.kind === 'education' ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Briefcase className="h-5 w-5" />
                  )}
                </span>
                <div className="flex-1 rounded-[2rem] border border-line bg-shell p-1.5">
                  <div className="card-core rounded-[calc(2rem-0.375rem)] bg-card p-6 sm:p-7">
                    <span className="text-[10px] font-medium tracking-[0.2em] text-fg-faint uppercase">
                      {item.range}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-fg">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-accent">{item.org}</p>
                    {item.description.map((description) => (
                      <p key={description} className="mt-3 text-sm leading-relaxed text-fg-muted">
                        {description}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
