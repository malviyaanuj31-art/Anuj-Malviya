import { motion, useReducedMotion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { socialLinks } from '../../constants/content'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { SectionHeading } from '../SectionHeading'

export function EducationContactSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={prefersReduced ? false : { opacity: 0, y: 24 }} whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <SectionHeading eyebrow="Education" title="Current path" description="Building a strong academic and practical foundation in computer science while shipping hands-on projects." />
          <Card className="mt-8 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Sagar Institute of Science, Technology & Research</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-50">Bachelor of Technology</h3>
            <p className="mt-2 text-lg text-slate-300">Computer Science Engineering</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">2024 – 2028</span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">CGPA: 8.7+</span>
            </div>
          </Card>
        </motion.div>

        <motion.div initial={prefersReduced ? false : { opacity: 0, y: 24 }} whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.08 }}>
          <Card className="overflow-hidden p-8">
            <div className="rounded-[24px] border border-cyan-400/20 bg-[#0d0d0d] p-6 font-mono text-sm text-slate-300">
              <p className="text-sky-400">$ help</p>
              <p className="mt-4">about</p>
              <p>skills</p>
              <p>projects</p>
              <p>github</p>
              <p>linkedin</p>
              <p>email</p>
              <p>resume</p>
              <p>clear</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-100 transition hover:bg-white/[0.12]">
                  {link.label === 'Email' ? <Mail className="mr-2 h-4 w-4" /> : <Send className="mr-2 h-4 w-4" />}
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">Start a conversation</Button>
              <Button variant="secondary" size="lg">View resume</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
