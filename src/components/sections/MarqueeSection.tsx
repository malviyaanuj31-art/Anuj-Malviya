import { motion } from 'framer-motion'

const items = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'REST API', 'C++', 'Java', 'DSA', 'AI']

export function MarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
      <motion.div
        className="flex w-max gap-4 whitespace-nowrap text-sm uppercase tracking-[0.35em] text-slate-400"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="rounded-full border border-white/10 bg-[#111111] px-4 py-2">
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
