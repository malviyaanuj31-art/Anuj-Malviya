import { motion, useReducedMotion } from 'framer-motion'
import { achievements } from '../../constants/content'
import { SectionHeading } from '../SectionHeading'

export function AchievementsSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="achievements" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Achievements" title="Milestones" description="A snapshot of the recognition and growth that has shaped my journey so far." />
        <div className="mt-12 space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={prefersReduced ? false : { opacity: 0, x: -20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(59,130,246,0.7)]" />
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{achievement.year}</p>
                <h3 className="text-xl font-semibold text-slate-50">{achievement.title}</h3>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
