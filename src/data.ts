// All site content lives here. Add a project by appending to `projects`;
// no layout code needs to change.

export interface Profile {
  name: string
  role: string
  pitch: string
  location: string
  education: string
  bio: string[]
  coursework: string[]
  highlights: string[]
}

export interface SiteLinks {
  github: string
  linkedin: string
  email: string
  resume: string
}

export interface KeyNumber {
  value: string
  label: string
}

export interface ProjectLink {
  label: string
  href: string
  kind: 'demo' | 'github' | 'pr'
}

export interface Screenshot {
  src: string
  alt: string
  width: number
  height: number
}

export interface Project {
  id: string
  featured?: boolean
  title: string
  subtitle: string
  dates: string
  summary: string
  screenshot?: Screenshot
  hardParts: string[]
  results?: string[]
  keyNumbers?: KeyNumber[]
  stack: string[]
  links: ProjectLink[]
}

export interface Experience {
  role: string
  org: string
  dates: string
  summary: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile: Profile = {
  name: 'Josiah Lucas',
  role: 'Backend & Applied AI Engineer',
  pitch: 'Backend engineer building reliable APIs and grounded, well-tested AI agents.',
  location: 'Hayward, CA (Bay Area) · open to relocation',
  education: 'B.S. Computer Science, San Francisco State University (August 2026)',
  bio: [
    'CS grad focused on backend engineering and applied AI. I built and deployed AlphaTracker, a full-stack trading journal with an AI assistant, and I’m a merged contributor to Alibaba’s open-code-review (30k+ stars).',
    'I worked 35+ hours a week while finishing a full-time CS degree, and completed the CodePath Technical Interview Prep fellowship.',
  ],
  coursework: ['Deep Learning', 'Systems Programming', 'Data Structures & Algorithms'],
  highlights: [
    'Merged contributor to Alibaba open-code-review (30k+ stars)',
    'CodePath Technical Interview Prep fellowship',
    'Worked 35+ hrs/week while completing a full-time CS degree',
  ],
}

export const links: SiteLinks = {
  github: 'https://github.com/jlucas10',
  linkedin: 'https://linkedin.com/in/josiahjlucas',
  email: 'josiahlucascs@gmail.com',
  resume: '/resume.pdf',
}

export const projects: Project[] = [
  {
    id: 'alphatracker',
    featured: true,
    title: 'AlphaTracker',
    subtitle: 'Trading Journal + AI Assistant for Prop-Firm Traders',
    dates: 'May–Oct 2026',
    summary:
      'A full-stack journal that tracks futures trades and prop-firm account rules, plus an AI assistant that answers questions about your trading history.',
    screenshot: {
      src: '/alphatracker-dashboard.jpg',
      alt: 'AlphaTracker dashboard showing a 50k Topstep evaluation account with a $51,612.50 balance, a $49,612.50 trailing drawdown floor, profit-target and drawdown-room progress bars, a 46% win rate over 24 trades, average win and loss, an equity curve, and a monthly P&L calendar.',
      width: 1600,
      height: 782,
    },
    hardParts: [
      'Spring Boot REST API that computes all P&L, commissions, and drawdown on the server from one source of truth for 12 CME futures contracts.',
      'Trailing drawdown engine that replays closed-trade history to compute the high-water mark and live floor (end-of-day and per-trade modes).',
      'Moved file storage from local disk to AWS S3 behind a pluggable interface with zero changes to calling code; JWT auth with per-request ownership checks.',
      'AI assistant: Python FastAPI agent using Gemini function calling over read-only, user-scoped tools on the Spring API.',
      'Grounding guard that checks every number in the model’s answer against tool outputs and retries ungrounded answers.',
    ],
    results: [
      '65+ JUnit 5/Mockito tests against real PostgreSQL; they caught a double-counting bug and a password-hash leak.',
      'Grounding guard cut the correction rate from 12% to 2.7%.',
      '50-question eval harness across 9 categories including prompt injection: 148/150 passed, 18/18 on a blind held-out set, 100% tool-selection accuracy.',
      'Sliding-window rate limiting verified by a concurrency test.',
    ],
    keyNumbers: [
      { value: '65+', label: 'JUnit 5 / Mockito tests on real PostgreSQL' },
      { value: '12% → 2.7%', label: 'correction rate with grounding guard' },
      { value: '148/150', label: 'eval runs passed (18/18 blind held-out)' },
      { value: '100%', label: 'tool-selection accuracy' },
      { value: '12', label: 'CME futures contracts' },
    ],
    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL (Supabase)',
      'TypeScript',
      'React',
      'AWS S3',
      'Docker',
      'Python',
      'FastAPI',
      'Gemini API',
      'Railway',
      'Vercel',
    ],
    links: [
      { label: 'Live demo', href: 'https://alpha-tracker-journal.vercel.app/login', kind: 'demo' },
      { label: 'GitHub', href: 'https://github.com/jlucas10/AlphaTrackerv2', kind: 'github' },
    ],
  },
  {
    id: 'evidence-review-agent',
    title: 'Multi-Modal Evidence Review AI Agent',
    subtitle: 'HackerRank Orchestrate Hackathon',
    dates: 'May–Jun 2026',
    summary:
      'An async Python pipeline on Gemini 2.5 Flash that analyzes image and text evidence for insurance fraud review.',
    hardParts: [
      'Every model response is validated against Pydantic schemas to produce type-safe JSON.',
      'Guardrails catch hallucinated and out-of-scope output before the final decision.',
    ],
    stack: ['Python', 'Gemini 2.5 Flash', 'Pydantic'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/jlucas10/hackerrank-orchestrate-june26',
        kind: 'github',
      },
    ],
  },
  {
    id: 'open-code-review',
    title: 'Open Source: Alibaba open-code-review',
    subtitle: '30k+ ★ · merged PR',
    dates: 'Sep 2026',
    summary:
      'Restyled the coverage and token-usage report in a Go-templated tool used across the project’s review pipeline, keeping its data bindings working in light and dark themes; merged after code review.',
    hardParts: [],
    stack: ['Go', 'HTML/CSS'],
    links: [
      { label: 'Pull request', href: 'https://github.com/alibaba/open-code-review/pull/1346', kind: 'pr' },
    ],
  },
]

export const experience: Experience[] = [
  {
    role: 'Guest Experience Host',
    org: 'Corica Park',
    dates: 'May 2025 – Present',
    summary:
      'First point of contact for guests; booked tee times, kept groups on schedule, and helped run tournaments while working 35+ hrs/week during a full-time CS degree.',
  },
]

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['Java', 'TypeScript', 'Go', 'Python', 'C++'] },
  {
    label: 'Backend & Web',
    items: ['Spring Boot', 'FastAPI', 'Spring Data JPA', 'REST APIs', 'JWT', 'React', 'Node.js'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (S3, IAM)', 'Docker', 'GitHub Actions', 'Railway', 'Vercel'],
  },
  { label: 'Databases', items: ['PostgreSQL (Supabase)'] },
  { label: 'Testing', items: ['JUnit 5', 'Mockito', 'Spring Boot test slices'] },
  {
    label: 'AI/LLM',
    items: [
      'Gemini API',
      'Function calling',
      'Pydantic structured output',
      'Multimodal pipelines',
      'Eval harnesses',
    ],
  },
]

export const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
