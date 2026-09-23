import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <span className="inline-block rounded-full border border-line bg-shell px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className="mt-5 text-base leading-relaxed text-fg-muted">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
