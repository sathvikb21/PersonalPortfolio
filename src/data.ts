// ── Edit this file to make the portfolio yours ──────────────────────────────

export const profile = {
  name: 'Sathvikb21',
  fullName: 'Sathvik Bhavaraju',
  role: 'Computer Science Student',
  school: 'University of Cincinnati',
  gradYear: '2029',
  location: 'Cincinnati, OH',
  email: 'sathvik21@gmail.com',
  tagline: 'I build software that feels effortless.',
  intro:
    'Junior studying computer science with a focus on systems and human-centered design. I like working at the seam where rigorous engineering meets product taste — distributed systems by day, pixel-pushing by night.',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/sathvikb21',
    linkedin: 'https://linkedin.com/in/sathvik-bhavaraju',
    twitter: 'https://x.com/sathvik',
  },
}

export const stats = [
  { value: '3+', label: 'Projects shipped' },
  { value: '3', label: 'Internships & research roles' },
  { value: '700+', label: 'GitHub contributions' },
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
    title: 'CEAS Tribunal',
    description: 
      'A full-stack platform for managing CEAS Tribunal events, documents, submissions, and role-based workflows across 18 student committees.',
    tags: ['TypeScript', 'React', 'Python', 'Django REST API'],
    year: '2024-Present',
    href: 'https://github.com/CEAS-Tribunal/Phoenix',
    accent: 'from-cyan-500/20 to-sky-500/5',
    size: 'large',
  },
  {
    title: 'Personal Portfolio',
    description:
    'A polished developer portfolio showcasing full-stack projects, technical experience, and practical impact across software engineering, cloud, and product-focused work.',
    tags: ['Typescript', 'React', 'Tailwind CSS', 'Vite'],
    year: '2026',
    href: 'https://github.com/sathvikb21/PersonalPortfolio',
    accent: 'from-teal-500/20 to-emerald-500/5',
    size: 'tall',
  },
  {
    title: 'Captalize',
    description:
    'An interactive financial-literacy learning platform that helps teens and young adults build money-management skills through guided content and progress tracking.',
    tags: ['Typescript', 'React', 'Python', 'Django REST API'],
    year: '2025',
    href: 'https://github.com/capitalizelearning/CapitalizeWebsite',
    accent: 'from-sky-500/20 to-blue-500/5',
    size: 'large',
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
  description: string[]
  kind: 'work' | 'education'
}

export const timeline: TimelineItem[] = [
  {
    range: 'May 2026 — Aug 2026',
    title: 'Software Engineering Intern',
    org: 'Kentucky Farm Bureau',
    description: [
      '• Developed a mobile photo upload application (React/Java Spring) that reduced total upload time by 80% compared to the previous application, now deployed statewide across all claims adjusters',
      '• Built a reusable React template with pre-configured architecture for company-wide use, adopted by 2 new projects to date and reducing setup time for future development',
      '• Designed and built a Power Apps/React tool that digitized a manual claims approval form, adding an analytics dashboard with charts to visualize submission data and streamline the approval workflow for the claims department',
    ],
    kind: 'work',
  },
  {
    range: 'Dec 2024 — May 2026',
    title: 'Software Engineering Intern',
    org: 'Castellan Group',
      description: [
      '• Refactored a legacy Django app into a Django REST API, improving system modularity and scalability by 40% and enabling new backend services',
      '• Designed backend integrations and clean REST endpoints/data models to support a new React front end, improving reliability and performance',
      '• Configured a GitHub Actions CI/CD pipeline and integrated Azure cloud services (databases, storage, app services), cutting release time by 30% and boosting scalability and observability'
    ],
    kind: 'work',
  },
  {
    range: 'Mar 2024 — Aug 2024',
    title: 'Software Engineering Intern',
    org: 'Stored Value Solutions',
    description: [
      '• Developed and optimized the Web Balance Inquiry (WBI) platform (React + Java Spring), improving performance and satisfaction for 20+ client companies',
      '• Enhanced the E-Gift Card (EGC) platform (Java Spring Tiles), improving backend functionality, data flow, and UI to boost online transactions',
      '• Resolved 80+ production service requests and deployed a project-wide testing pipeline with an external partner, cutting pre-release defects by 15%',
    ],
    kind: 'work',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
