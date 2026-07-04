import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../../constants/content'
import { Card } from '../ui/card'
import { SectionHeading } from '../SectionHeading'

export function SkillsSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="skills" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Engineering toolkit" description="I build with a modern stack and stay curious across design systems, product thinking, and backend architecture." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={prefersReduced ? undefined : { y: -8, rotateX: 4, rotateY: -4, scale: 1.01 }}
            >
              <Card className="h-full p-7">
                <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-cyan-400" />
                <h3 className="text-xl font-semibold text-slate-50">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">{item}</span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
