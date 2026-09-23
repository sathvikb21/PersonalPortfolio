import { navLinks, profile } from '../data'
import { GitHub, LinkedIn, Mail } from './icons'

export function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-line pt-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-fg-faint">
          © {new Date().getFullYear()} {profile.fullName}. Built from scratch with React.
        </p>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg-muted transition-colors duration-500 ease-spring hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {[
            { href: profile.socials.github, label: 'GitHub', Icon: GitHub },
            { href: profile.socials.linkedin, label: 'LinkedIn', Icon: LinkedIn },
            { href: `mailto:${profile.email}`, label: 'Email', Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-shell text-fg-muted transition-all duration-500 ease-spring hover:border-fg/30 hover:text-fg"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
