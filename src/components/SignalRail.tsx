import { Activity, Gauge, RadioTower, ShieldCheck, Zap } from 'lucide-react'
import { useMemo, type CSSProperties } from 'react'

import { useAppStore } from '../store/useAppStore'
import { Panel } from './ui/Panel'

const lanes = [
  ['SWAP', 'quote engine', 'bg-quantum-blue'],
  ['SEND', 'token vector', 'bg-quantum-green'],
  ['FAUCET', 'fuel link', 'bg-quantum-yellow'],
  ['DEPLOY', 'bytecode forge', 'bg-quantum-orange']
] as const

export function SignalRail() {
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )
  const motionStyle = prefersReducedMotion ? { animation: 'none' } : undefined

  const txHistory = useAppStore((state) => state.txHistory)
  const deployedTokens = useAppStore((state) => state.deployedTokens)
  const latest = txHistory[0]
  const pending = txHistory.filter((tx) => tx.status === 'pending').length
  const success = txHistory.filter((tx) => tx.status === 'success').length
  const error = txHistory.filter((tx) => tx.status === 'error').length

  return (
    <Panel className="signal-rail animate-reveal p-0 text-quantum-ink" shadow="cyan">
      <div className="signal-rail-grid" />
      <div className="relative z-10 border-b border-quantum-ink/5 bg-white px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-display text-xl leading-none">
            <RadioTower className="h-5 w-5 text-quantum-orange" />
            Live Signal
          </div>
          <div className="rounded-full bg-quantum-yellow/15 px-3 py-1.5 font-mono text-[10px] text-quantum-orange">
            {latest?.status ?? 'ready'}
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-3 p-4">
        <div className="grid grid-cols-4 gap-2 font-mono text-[10px]">
          {[
            ['Run', pending, 'bg-quantum-yellow/15 text-quantum-orange'],
            ['Ok', success, 'bg-quantum-green/15 text-quantum-green'],
            ['Err', error, 'bg-quantum-red/15 text-quantum-red'],
            ['Ca', deployedTokens.length, 'bg-quantum-blue/15 text-quantum-blue']
          ].map(([label, value, tone]) => (
            <div
              key={label}
              className={`${tone} rounded-xl px-2 py-2.5 text-center`}
            >
              <div className="opacity-60">{label}</div>
              <div className="font-display text-xl leading-none">{value}</div>
            </div>
          ))}
        </div>

        <div className="signal-ring mx-auto w-24" aria-hidden="true" style={motionStyle}>
          <span />
          <i />
          <b />
        </div>

        <div className="space-y-2">
          {lanes.map(([label, desc, tone], index) => {
            const live = latest?.kind.toUpperCase() === label || latest?.summary.toUpperCase().includes(label)
            return (
              <div
                key={label}
                className={`signal-lane ${live ? 'signal-lane-live' : ''}`}
                style={prefersReducedMotion ? { animation: 'none' } : ({ '--lane-delay': `${index * 120}ms` } as CSSProperties)}
                >
                <span className={`${tone} h-7 w-7 rounded-lg`} />
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base leading-none">{label}</div>
                  <div className="truncate font-mono text-[10px] text-quantum-ink/40">{desc}</div>
                </div>
                <Activity className="h-4 w-4 text-quantum-blue" />
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-2 rounded-xl border border-quantum-ink/5 bg-white p-2.5 shadow-soft">
          <div className="font-mono text-[10px]">
            <div className="text-quantum-ink/40">Latest</div>
            <div className="truncate text-quantum-ink">{latest?.summary ?? 'waiting for first tx'}</div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-quantum-purple/10">
            {pending ? <Zap className="h-5 w-5 text-quantum-purple" /> : <ShieldCheck className="h-5 w-5 text-quantum-green" />}
          </div>
        </div>

        <div className="signal-meter rounded-xl border border-quantum-ink/5 bg-white p-2.5 shadow-soft" style={motionStyle}>
          <Gauge className="h-4 w-4 text-quantum-purple" />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </Panel>
  )
}
