import { skillGroups } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="My toolkit"
          description="Technologies I reach for, roughly in order of how often they appear in my commit history."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-[2rem] border border-line bg-shell p-1.5">
                <div className="card-core h-full rounded-[calc(2rem-0.375rem)] bg-card p-8">
                  <h3 className="text-[10px] font-medium tracking-[0.2em] text-accent uppercase">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line bg-chip px-4 py-1.5 text-sm text-fg-muted transition-colors duration-500 ease-spring hover:border-fg/30 hover:text-fg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
