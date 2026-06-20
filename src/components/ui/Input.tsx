import { clsx } from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
}

export function Input({ label, hint, className, ...props }: InputProps) {
  return (
    <label className="block">
      {label ? (
        <span className="mb-1.5 block font-display text-sm font-semibold text-quantum-ink md:text-base">
          {label}
        </span>
      ) : null}
      <input
        className={clsx(
          'input-friendly w-full px-4 py-3 font-mono text-sm',
          className
        )}
        {...props}
      />
      {hint ? (
        <span className="mt-2 block font-mono text-[11px] text-quantum-ink/40">
          {hint}
        </span>
      ) : null}
    </label>
  )
}
