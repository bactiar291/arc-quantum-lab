import { ArrowRight, Rocket, Send, ShieldCheck, Shuffle } from 'lucide-react'

import { QuantumLogo } from './QuantumLogo'
import { Button } from './ui/Button'

interface IntroGateProps {
  onEnter: () => void
}

const features = [
  { label: 'Swap', value: 'USDC <-> EURC', icon: Shuffle, color: 'text-quantum-blue', bg: 'bg-quantum-blue/10' },
  { label: 'Send', value: 'Stable transfer', icon: Send, color: 'text-quantum-orange', bg: 'bg-quantum-orange/10' },
  { label: 'Deploy', value: 'Random ERC20', icon: Rocket, color: 'text-quantum-green', bg: 'bg-quantum-green/10' },
  { label: 'Sign', value: 'Wallet verify', icon: ShieldCheck, color: 'text-quantum-purple', bg: 'bg-quantum-purple/10' }
]

export function IntroGate({ onEnter }: IntroGateProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-quantum-paper text-quantum-ink">
      <div className="grid-noise" />
      <main className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1320px] items-center gap-10 px-4 py-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-8">
          <QuantumLogo size="lg" className="h-36 w-36" />
          <div>
            <p className="w-fit rounded-full bg-quantum-blue/10 px-4 py-2 font-mono text-xs font-medium text-quantum-blue">
              Arc Testnet stablecoin console
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.9] tracking-tight text-quantum-ink md:text-7xl">
              ARC QUANTUM LAB
            </h1>
            <p className="mt-6 max-w-2xl rounded-2xl bg-white p-5 text-sm leading-relaxed text-quantum-ink/70 shadow-soft md:text-base">
              Swap, send, deploy random tokens, and faucet access. One EVM wallet and one
              clear signer path for every action.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={onEnter} variant="cyan" className="min-w-48">
              Enter Lab
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div className="rounded-full bg-quantum-yellow/20 px-4 py-2.5 font-mono text-xs font-medium text-quantum-ink/70">
              Circle AppKit live
            </div>
          </div>
        </section>

        <section className="intro-scan p-5 md:p-6 shadow-brutal">
          <div className="mb-4 border-b border-quantum-ink/10 pb-3 font-display text-2xl text-quantum-ink/80">
            Live Modules
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.label}
                  className="soft-card p-4"
                  style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
                >
                  <div className={`mb-3 inline-flex rounded-xl p-2 ${feature.bg}`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="font-display text-2xl leading-none">{feature.label}</div>
                  <div className="mt-2 font-mono text-[11px] text-quantum-ink/40">
                    {feature.value}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
