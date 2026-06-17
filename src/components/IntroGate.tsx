import { ArrowRight, Rocket, Send, ShieldCheck, Shuffle } from 'lucide-react'

import { QuantumLogo } from './QuantumLogo'
import { Button } from './ui/Button'

interface IntroGateProps {
  onEnter: () => void
}

const features = [
  { label: 'Swap', value: 'USDC <-> EURC', icon: Shuffle, color: 'text-quantum-cyan' },
  { label: 'Send', value: 'Stable transfer', icon: Send, color: 'text-quantum-orange' },
  { label: 'Deploy', value: 'Random ERC20', icon: Rocket, color: 'text-quantum-green' },
  { label: 'Sign', value: 'Wallet verify', icon: ShieldCheck, color: 'text-quantum-purple' }
]

export function IntroGate({ onEnter }: IntroGateProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-quantum-paper text-quantum-ink">
      <div className="cyber-band" />
      <div className="grid-noise" />
      <main className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1320px] items-center gap-8 px-4 py-8 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="space-y-6">
          <QuantumLogo size="lg" className="h-36 w-36" />
          <div>
            <p className="w-fit border-4 border-quantum-black bg-quantum-green px-3 py-2 font-mono text-xs uppercase text-[#07070c] shadow-[5px_5px_0_#6e56ff]">
              Arc Testnet stablecoin console
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-6xl leading-[0.86] text-quantum-ink [text-shadow:4px_4px_0_#FF8C00,8px_8px_0_#7C3AED] md:text-8xl">
              ARC QUANTUM LAB
            </h1>
            <p className="mt-8 max-w-2xl border-4 border-quantum-black bg-quantum-panel p-5 font-mono text-sm uppercase leading-6 text-quantum-ink shadow-[7px_7px_0_#6e56ff]">
              Swap, send, deploy random tokens, and faucet access. One EVM wallet and one
              clear signer path for every action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={onEnter} variant="cyan" className="min-w-48">
              Enter Lab
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div className="border-4 border-quantum-black bg-quantum-yellow px-4 py-3 font-mono text-xs uppercase text-[#07070c] shadow-[5px_5px_0_#6e56ff]">
              Circle AppKit live
            </div>
          </div>
        </section>

        <section className="intro-scan brutal-3d border-4 border-quantum-black p-4 md:p-5">
          <div className="mb-4 border-b-4 border-quantum-black pb-3 font-display text-4xl">
            LIVE MODULES
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.label}
                  className="border-4 border-quantum-black bg-quantum-panel p-4 shadow-[5px_5px_0_#6e56ff]"
                >
                  <Icon className={`mb-3 h-7 w-7 ${feature.color}`} />
                  <div className="font-display text-4xl leading-none">{feature.label}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase text-quantum-ink/60">
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
