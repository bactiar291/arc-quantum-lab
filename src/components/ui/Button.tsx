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
        'brutal-button inline-flex min-h-10 items-center justify-center gap-2 px-3 py-2 font-display text-base uppercase leading-none disabled:cursor-not-allowed disabled:opacity-50 md:text-lg',
        variant === 'primary' && 'bg-quantum-yellow text-[#07070c]',
        variant === 'cyan' && 'bg-quantum-cyan text-[#07070c]',
        variant === 'green' && 'bg-quantum-green text-[#07070c]',
        variant === 'orange' && 'bg-quantum-orange text-[#07070c]',
        variant === 'purple' && 'bg-quantum-purple text-white',
        variant === 'red' && 'bg-quantum-red text-[#07070c]',
        variant === 'ghost' && 'bg-quantum-panel text-quantum-ink',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
