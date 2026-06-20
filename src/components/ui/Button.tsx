import { clsx } from 'clsx'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'ghost'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'friendly-button inline-flex min-h-10 items-center justify-center gap-2 px-4 py-2.5 font-display text-sm uppercase leading-none disabled:cursor-not-allowed disabled:opacity-40 md:text-base',
        variant === 'primary' && 'bg-quantum-yellow text-quantum-ink',
        variant === 'cyan' && 'bg-quantum-cyan text-white',
        variant === 'green' && 'bg-quantum-green text-white',
        variant === 'orange' && 'bg-quantum-orange text-white',
        variant === 'purple' && 'bg-quantum-purple text-white',
        variant === 'red' && 'bg-quantum-red text-white',
        variant === 'ghost' && 'bg-white/60 text-quantum-ink border-quantum-ink/10 hover:bg-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
