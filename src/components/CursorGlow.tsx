import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [isMobile, setIsMobile] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 220, damping: 18 })
  const ringY = useSpring(y, { stiffness: 220, damping: 18 })

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    const move = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('resize', onResize)
    }
  }, [x, y])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_24px_rgba(59,130,246,0.8)]"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/40"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
