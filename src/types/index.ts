export interface NavItem {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  features: string[]
  challenges: string[]
  learnings: string[]
  liveUrl?: string
  githubUrl?: string
  imageLabel: string
}

export interface Achievement {
  title: string
  year: string
  description: string
}

export interface Certificate {
  title: string
  subtitle: string
  href?: string
}

export interface CodingStat {
  label: string
  value: string
  detail: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
