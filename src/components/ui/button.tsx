import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-white/10 font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]',
        variant === 'primary' && 'bg-sky-500 text-slate-950 shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:bg-sky-400',
        variant === 'secondary' && 'bg-white/5 text-slate-100 hover:bg-white/10',
        variant === 'ghost' && 'border-transparent bg-transparent text-slate-300 hover:bg-white/5 hover:text-white',
        size === 'sm' && 'px-3 py-2 text-sm',
        size === 'md' && 'px-4 py-2.5 text-sm',
        size === 'lg' && 'px-6 py-3 text-base',
        className,
      )}
      {...props}
    />
  )
}
