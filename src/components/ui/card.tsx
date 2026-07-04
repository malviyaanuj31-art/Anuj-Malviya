import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={clsx(
        'rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_40px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}
