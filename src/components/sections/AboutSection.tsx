import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../SectionHeading'

const timeline = ['Started Computer Science', 'Learned C++', 'Data Structures', 'Frontend Development', 'React', 'Backend', 'Full Stack Development', 'Artificial Intelligence']

export function AboutSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading eyebrow="About" title="About Me" description="I am a second-year Computer Science Engineering student who enjoys building scalable applications, solving algorithmic problems, learning modern technologies, and exploring AI." />
          <p className="mt-8 text-lg leading-8 text-slate-400">
            My work sits at the intersection of thoughtful product design, crisp engineering, and smooth user experiences. I build with curiosity, precision, and a strong focus on maintainability.
          </p>
        </div>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Journey</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-50">Timeline</h3>
            </div>
            <div className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-300">2024 → Present</div>
          </div>
          <div className="mt-8 space-y-4">
            {timeline.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full border border-sky-400 bg-sky-400/80" />
                  {index < timeline.length - 1 ? <div className="mt-2 h-8 w-px bg-white/10" /> : null}
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-slate-300">{item}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
