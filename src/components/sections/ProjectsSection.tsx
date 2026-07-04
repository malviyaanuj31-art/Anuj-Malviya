import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../constants/content'
import { Card } from '../ui/card'
import { SectionHeading } from '../SectionHeading'

export function ProjectsSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Featured work" description="Selected products that blend product strategy, engineering craft, and thoughtful interaction design." />
        <div className="mt-12 grid gap-8 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={prefersReduced ? false : { opacity: 0, y: 40 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={prefersReduced ? undefined : { y: -10, scale: 1.01 }}
              className="h-full"
            >
              <Card className="flex h-full flex-col p-7">
                <div className="flex min-h-40 items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 via-[#121212] to-slate-900 text-center text-sm uppercase tracking-[0.25em] text-slate-400">
                  {project.imageLabel}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sky-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 space-y-3 text-sm text-slate-400">
                  <div>
                    <p className="font-medium uppercase tracking-[0.25em] text-slate-300">Features</p>
                    <ul className="mt-2 space-y-1">
                      {project.features.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium uppercase tracking-[0.25em] text-slate-300">Challenges</p>
                    <ul className="mt-2 space-y-1">
                      {project.challenges.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium uppercase tracking-[0.25em] text-slate-300">What I Learned</p>
                    <ul className="mt-2 space-y-1">
                      {project.learnings.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <a href={project.liveUrl} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-100 transition hover:bg-white/[0.12]">
                    Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href={project.githubUrl} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-100 transition hover:bg-white/[0.12]">
                    GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
