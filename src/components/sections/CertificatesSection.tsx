import { motion, useReducedMotion } from 'framer-motion'
import { certificates } from '../../constants/content'
import { Card } from '../ui/card'
import { SectionHeading } from '../SectionHeading'

export function CertificatesSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="certificates" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certificates" title="Learning milestones" description="A curated set of certifications that reflect my growing foundation in web technologies and computer science." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={prefersReduced ? undefined : { y: -8, scale: 1.01 }}
            >
              <Card className="h-full p-6">
                <div className="mb-6 h-2 w-20 rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-cyan-400" />
                <h3 className="text-lg font-semibold text-slate-50">{certificate.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{certificate.subtitle}</p>
                <a href={certificate.href} className="mt-6 inline-flex text-sm font-medium text-sky-300 transition hover:text-sky-200">
                  View verification →
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
