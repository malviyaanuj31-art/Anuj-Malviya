import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, align = 'left', children }: SectionHeadingProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-400">{description}</p> : null}
      {children}
    </motion.div>
  )
}
