import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, MoveDown } from 'lucide-react'
import { heroTechIcons } from '../../constants/content'
import { Button } from '../ui/button'

export function HeroSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">Computer Science Student</p>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-50 sm:text-7xl lg:text-8xl">
            ANUJ<br />MALVIYA
          </h1>
          <p className="mt-6 text-xl font-medium uppercase tracking-[0.35em] text-slate-400 sm:text-2xl">
          COMPUTER SCIENCE ENGINEERING STUDENT
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Computer Science Engineering student passionate about Full Stack Development, Data Structures & Algorithms, and Artificial Intelligence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="group">
              View Projects <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg" className="group">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
          <div className="mt-14 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            <MoveDown className="h-4 w-4 animate-bounce" /> Scroll to explore
          </div>
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
          animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-[480px] items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_0_120px_rgba(59,130,246,0.16)]">
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-12 rounded-full border border-sky-400/20" />
            <div className="relative h-60 w-60 rounded-full border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950" />
            <div className="absolute inset-x-12 top-10 h-24 rounded-full bg-gradient-to-r from-sky-500/40 to-fuchsia-500/40 blur-2xl" />
            <div className="absolute bottom-12 left-12 h-20 w-20 rounded-full border border-white/10 bg-slate-900/80" />
            <div className="absolute right-10 top-20 h-16 w-16 rounded-full border border-cyan-400/30 bg-cyan-400/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {heroTechIcons.map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                className="absolute rounded-full border border-white/10 bg-[#111111]/80 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 backdrop-blur"
                animate={prefersReduced ? undefined : { rotate: 360 }}
                transition={{ duration: 18 + index * 3, repeat: Infinity, ease: 'linear' }}
                style={{
                  left: `${50 + Math.cos((index / heroTechIcons.length) * Math.PI * 2) * 42}%`,
                  top: `${50 + Math.sin((index / heroTechIcons.length) * Math.PI * 2) * 42}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <Icon className="mr-2 inline h-3.5 w-3.5" />
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
