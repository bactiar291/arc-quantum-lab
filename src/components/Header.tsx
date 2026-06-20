import { LogOut, PlugZap, ShieldCheck, Terminal } from 'lucide-react'

import { useArcAppKit } from '../hooks/useArcAppKit'
import { socialLoginReady } from '../lib/env'
import { QuantumLogo } from './QuantumLogo'
import { Button } from './ui/Button'
import { CopyAddress } from './ui/CopyAddress'

function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function Header() {
  const {
    account,
    chainId,
    connect,
    isConnecting,
    isSignedIn,
    lastError,
    privyAuthenticated,
    privyEnabled,
    signIn,
    signOut,
    walletLabel
  } = useArcAppKit()
  const action = account && !isSignedIn ? signIn : connect
  const label = account
    ? isSignedIn
      ? shortAddress(account)
      : 'Verify'
    : isConnecting
      ? 'Connecting'
      : privyEnabled
        ? 'Login'
        : 'Connect'

  return (
    <header className="sticky top-0 z-30 border-b border-quantum-ink/5 bg-quantum-paper/80 px-3 py-2.5 backdrop-blur-md md:px-4">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <QuantumLogo size="sm" className="h-10 w-10" />
          <div>
            <h1 className="font-display text-xl leading-none tracking-tight md:text-2xl">
              ARC QUANTUM LAB
            </h1>
            <div className="hidden items-center gap-2 font-mono text-[10px] text-quantum-ink/35 md:flex">
              <Terminal className="h-3.5 w-3.5" />
              Privy / Circle AppKit / Arc public RPC
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="rounded-full bg-quantum-yellow/15 px-3 py-1.5 font-mono text-[10px] text-quantum-ink/60">
            Chain <b className="text-quantum-blue">{chainId || 'OFF'}</b>
          </div>
          <div className="rounded-full bg-white px-3 py-1.5 font-mono text-[10px] text-quantum-ink/60 shadow-soft">
            Auth{' '}
            <b className={privyAuthenticated ? 'text-quantum-green' : 'text-quantum-red'}>
              {privyAuthenticated ? walletLabel || 'PRIVY' : 'OFF'}
            </b>
          </div>
          {lastError ? (
            <div className="max-w-[220px] truncate rounded-full bg-quantum-red/10 px-3 py-1.5 font-mono text-[10px] text-quantum-red">
              {lastError}
            </div>
          ) : null}
          {!socialLoginReady ? (
            <div
              className="max-w-[240px] rounded-full bg-quantum-orange/10 px-3 py-1.5 font-mono text-[10px] text-quantum-orange"
              title="Set VITE_PRIVY_APP_ID di .env lalu restart untuk mengaktifkan login Google/email."
            >
              Google Login Off · Set Privy App ID
            </div>
          ) : null}
          {account && isSignedIn ? (
            <div className="inline-flex min-h-10 min-w-32 items-center justify-center gap-2 rounded-xl bg-quantum-green/10 px-3 py-2 font-display text-sm text-quantum-green shadow-soft md:text-base">
              <ShieldCheck className="h-4 w-4" />
              <span>{label}</span>
              <CopyAddress
                address={account}
                iconOnly
                className="h-6 w-6 border-quantum-ink/10 shadow-none"
              />
            </div>
          ) : (
            <Button onClick={action} disabled={isConnecting} className="min-w-32">
              <PlugZap className="h-4 w-4" />
              {label}
            </Button>
          )}
          {account || privyAuthenticated ? (
            <Button
              variant="red"
              onClick={signOut}
              disabled={isConnecting}
              className="min-w-0 px-3"
            >
              <LogOut className="h-4 w-4" />
              Disconnect
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}
