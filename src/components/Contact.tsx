import { useState, type FormEvent } from 'react'
import { profile } from '../data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ArrowUpRight, GitHub, LinkedIn, Mail } from './icons'

const inputClasses =
  'w-full rounded-2xl border border-line bg-chip px-5 py-3.5 text-sm text-fg placeholder:text-fg-faint outline-none transition-all duration-500 ease-spring focus:border-accent/60'

export function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // No backend needed — opens the visitor's mail client pre-filled
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'a visitor'}`)
    const body = encodeURIComponent(message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Recruiting for an internship, hacking on something cool, or just want to talk systems? My inbox is open."
        />

        <Reveal delay={150}>
          <div className="mt-16 rounded-[2.5rem] border border-line bg-shell p-2">
            <div className="card-core grid grid-cols-1 gap-10 rounded-[calc(2.5rem-0.5rem)] bg-card p-8 sm:p-12 md:grid-cols-5">
              <div className="md:col-span-2">
                <h3 className="font-display text-xl font-semibold text-fg">Reach me directly</h3>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-sm text-fg-muted transition-colors duration-500 ease-spring hover:text-fg"
                  >
                    <Mail className="h-4 w-4" /> {profile.email}
                  </a>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-fg-muted transition-colors duration-500 ease-spring hover:text-fg"
                  >
                    <GitHub className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-fg-muted transition-colors duration-500 ease-spring hover:text-fg"
                  >
                    <LinkedIn className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:col-span-3">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className={inputClasses}
                />
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-btn py-2 pr-2 pl-6 font-medium text-btn-fg transition-transform duration-700 ease-spring hover:scale-[1.01] active:scale-[0.98] sm:w-auto"
                >
                  Send message
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-btn-fg/15 transition-transform duration-700 ease-spring group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
