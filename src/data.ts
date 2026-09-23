// ── Edit this file to make the portfolio yours ──────────────────────────────

export const profile = {
  name: 'Sathvik',
  fullName: 'Sathvik Anand',
  role: 'Computer Science Student',
  school: 'University of Washington',
  gradYear: '2027',
  location: 'Seattle, WA',
  email: 'sathvik@example.com',
  tagline: 'I build software that feels effortless.',
  intro:
    'Junior studying computer science with a focus on systems and human-centered design. I like working at the seam where rigorous engineering meets product taste — distributed systems by day, pixel-pushing by night.',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/sathvik',
    linkedin: 'https://linkedin.com/in/sathvik',
    twitter: 'https://x.com/sathvik',
  },
}

export const stats = [
  { value: '12+', label: 'Projects shipped' },
  { value: '3', label: 'Internships & research roles' },
  { value: '2x', label: 'Hackathon winner' },
  { value: '4k+', label: 'GitHub contributions' },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  year: string
  href: string
  accent: string
  /** bento sizing on desktop */
  size: 'large' | 'tall' | 'standard'
}

export const projects: Project[] = [
  {
    title: 'Driftline',
    description:
      'A real-time collaborative whiteboard with CRDT-based sync. Handles 200+ concurrent cursors with sub-50ms latency over WebSockets.',
    tags: ['TypeScript', 'CRDTs', 'WebSockets', 'Canvas'],
    year: '2026',
    href: 'https://github.com/sathvik/driftline',
    accent: 'from-cyan-500/20 to-sky-500/5',
    size: 'large',
  },
  {
    title: 'Pagefault',
    description:
      'A teaching operating system kernel written in Rust — virtual memory, a round-robin scheduler, and a tiny ext2-like filesystem.',
    tags: ['Rust', 'OS', 'x86-64'],
    year: '2026',
    href: 'https://github.com/sathvik/pagefault',
    accent: 'from-teal-500/20 to-emerald-500/5',
    size: 'tall',
  },
  {
    title: 'Course Compass',
    description:
      'Degree-planning web app used by 1,800+ students. Constraint solver suggests conflict-free schedules from live registrar data.',
    tags: ['React', 'FastAPI', 'PostgreSQL'],
    year: '2025',
    href: 'https://github.com/sathvik/course-compass',
    accent: 'from-sky-500/20 to-blue-500/5',
    size: 'standard',
  },
  {
    title: 'Tinygrad Notes',
    description:
      'An autograd engine and MLP library in ~500 lines of NumPy, with annotated notebooks explaining backprop from scratch.',
    tags: ['Python', 'ML', 'NumPy'],
    year: '2025',
    href: 'https://github.com/sathvik/tinygrad-notes',
    accent: 'from-blue-500/20 to-cyan-500/5',
    size: 'standard',
  },
  {
    title: 'Lockbox CLI',
    description:
      'An end-to-end encrypted secrets manager for dev teams. Age-based encryption, git-friendly storage, zero server required.',
    tags: ['Go', 'Cryptography', 'CLI'],
    year: '2024',
    href: 'https://github.com/sathvik/lockbox',
    accent: 'from-indigo-500/20 to-sky-500/5',
    size: 'standard',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'Python', 'Rust', 'Go', 'Java', 'C', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend & Systems',
    skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'gRPC', 'Linux'],
  },
  {
    title: 'Tools & Practice',
    skills: ['Git', 'GitHub Actions', 'AWS', 'Figma', 'TDD', 'Agile'],
  },
]

export type TimelineItem = {
  range: string
  title: string
  org: string
  description: string
  kind: 'work' | 'education'
}

export const timeline: TimelineItem[] = [
  {
    range: 'Jun 2026 — Sep 2026',
    title: 'Software Engineering Intern',
    org: 'Stripe',
    description:
      'Payments infrastructure team. Built an idempotency-key auditing pipeline processing 40M events/day and cut false-positive alerts by 60%.',
    kind: 'work',
  },
  {
    range: 'Jan 2026 — Present',
    title: 'Undergraduate Researcher',
    org: 'Systems Lab, UW CSE',
    description:
      'Researching speculative page prefetching for memory-tiered servers under Prof. Chen. Benchmarking against TPP on CXL-emulated hardware.',
    kind: 'work',
  },
  {
    range: 'Jun 2025 — Sep 2025',
    title: 'Software Engineering Intern',
    org: 'Redfin',
    description:
      'Shipped a map-clustering rewrite in the listings search experience, improving render time on dense metros by 3.2x.',
    kind: 'work',
  },
  {
    range: 'Sep 2024 — Present',
    title: 'Teaching Assistant — Data Structures',
    org: 'UW Computer Science',
    description:
      'Lead weekly sections of 40 students, hold office hours, and co-wrote an autograder used across 600+ enrollments per quarter.',
    kind: 'work',
  },
  {
    range: '2023 — 2027',
    title: 'B.S. Computer Science',
    org: 'University of Washington',
    description:
      'GPA 3.9. Coursework: Operating Systems, Distributed Systems, Machine Learning, Databases, Computer Networks, Algorithms.',
    kind: 'education',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
