import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Workflow,
} from 'lucide-react'
import type { Achievement, Certificate, CodingStat, NavItem, Project, SkillGroup, SocialLink } from '../types'

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const heroTechIcons = [
  { name: 'React', icon: Layers3 },
  { name: 'Node.js', icon: Workflow },
  { name: 'MongoDB', icon: Database },
  { name: 'AI', icon: BrainCircuit },
  { name: 'GitHub', icon: GitBranch },
  { name: 'C++', icon: Code2 },
  { name: 'Firebase', icon: Sparkles },
  { name: 'Express', icon: MonitorSmartphone },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', items: ['C', 'C++', 'Java', 'JavaScript'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'Bootstrap', 'React'] },
  { title: 'Backend', items: ['Node.js', 'Express'] },
  { title: 'Database', items: ['MongoDB', 'Firebase'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'] },
]

export const projects: Project[] = [
  {
    title: 'Smart EV Charging Station Locator',
    description:
      'An Android application that locates nearby EV charging stations, supports slot booking, and generates real-time charging tokens.',
    tech: ['Flutter', 'Firebase', 'OpenStreetMap API'],
    features: ['Nearby station discovery', 'Live slot booking', 'Token generation'],
    challenges: ['Map integration', 'Real-time sync', 'Low-latency booking'],
    learnings: ['Mobile UX systems', 'State orchestration', 'GPS reliability'],
    liveUrl: '#',
    githubUrl: '#',
    imageLabel: 'EV charging locator experience',
  },
  {
    title: 'Eventra',
    description:
      'A polished event management platform for registrations, scheduling, authentication, and participant administration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Multi-step event setup', 'User auth', 'Participant tracking'],
    challenges: ['Complex scheduling flows', 'Role-based access', 'Scalable data modeling'],
    learnings: ['Full stack architecture', 'Fine-grained permissions', 'Design systems'],
    liveUrl: '#',
    githubUrl: '#',
    imageLabel: 'Event management dashboard preview',
  },
  {
    title: 'Developer Portfolio',
    description:
      'A premium portfolio experience designed to showcase strong frontend engineering, motion design, and product thinking.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    features: ['Immersive motion', 'Glassmorphism UI', 'Responsive storytelling'],
    challenges: ['Performance-first animation', 'Polished interactions', 'Accessibility'],
    learnings: ['Motion choreography', 'Component architecture', 'Visual systems'],
    liveUrl: '#',
    githubUrl: '#',
    imageLabel: 'Portfolio interface preview',
  },
]

export const achievements: Achievement[] = [
  {
    title: 'GeeksforGeeks Campus Mantri',
    year: '2025',
    description: 'Represented the campus community and helped students grow through technical learning initiatives.',
  },
  {
    title: 'Innovation Hackathon Rank 17',
    year: '2024',
    description: 'Placed in the top tier among innovative problem-solving teams during a fast-paced hackathon.',
  },
  {
    title: 'Full Tuition Fee Waiver through JEE Merit',
    year: '2024',
    description: 'Secured academic support through a merit-based scholarship program.',
  },
]

export const certificates: Certificate[] = [
  { title: 'JavaScript Essentials', subtitle: 'Core language fluency', href: '#' },
  { title: 'DSA Bootcamp', subtitle: 'Problem solving depth', href: '#' },
  { title: 'AI for Beginners', subtitle: 'Intro to intelligent systems', href: '#' },
  { title: 'CSS Basics', subtitle: 'Visual polish foundations', href: '#' },
]

export const codingStats: CodingStat[] = [
  { label: 'Repositories', value: '12+', detail: 'GitHub' },
  { label: 'Contributions', value: '350+', detail: 'Recent activity' },
  { label: 'Problems Solved', value: '180+', detail: 'LeetCode' },
  { label: 'Contest Rating', value: '1,470', detail: 'Competitive programming' },
  { label: 'Problems', value: '120+', detail: 'GeeksforGeeks' },
  { label: 'Campus Mantri', value: 'Active', detail: 'Community leadership' },
  { label: 'Certificates', value: '8+', detail: 'HackerRank' },
  { label: 'Badges', value: '6', detail: 'Skill milestones' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'GitHub' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LinkedIn' },
  { label: 'Email', href: 'mailto:anujmalviya@example.com', icon: 'Email' },
  { label: 'Resume', href: '/Anuj_Malviya_Resume.pdf', icon: 'Resume' },
]
