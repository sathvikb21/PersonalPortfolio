import { projects, type Project } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ArrowUpRight } from './icons'

const sizeClasses: Record<Project['size'], string> = {
  large: 'md:col-span-8',
  tall: 'md:col-span-4 md:row-span-2',
  standard: 'md:col-span-4',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 100} className={sizeClasses[project.size]}>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="group block h-full rounded-[2rem] border border-line bg-shell p-1.5 transition-transform duration-700 ease-spring hover:scale-[1.01] active:scale-[0.99]"
      >
        <div
          className={`card-core relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(2rem-0.375rem)] bg-gradient-to-br ${project.accent} bg-card p-8`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] font-medium tracking-[0.2em] text-fg-faint uppercase">
              {project.year}
            </span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-shell text-fg transition-transform duration-700 ease-spring group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
              {project.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-chip px-3 py-1 text-[11px] text-fg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A mix of systems experiments, course-adjacent rabbit holes, and tools people actually use."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
