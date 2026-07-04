import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="text-5xl font-semibold tracking-[0.35em] text-slate-50 sm:text-6xl">
          {['A', 'N', 'U', 'S', 'H'].map((letter, index) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  )
}
