import { useBlockNumber } from 'wagmi'

import { useArcAppKit } from '../hooks/useArcAppKit'
import { ARC_CHAIN_ID } from '../lib/arc'

export function StatusBar() {
  const { data: blockNumber } = useBlockNumber({
    chainId: ARC_CHAIN_ID,
    watch: true
  })
  const { account } = useArcAppKit()

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 border-t border-quantum-ink/5 bg-white/90 px-4 py-2.5 backdrop-blur-md md:px-6">
      <div className="mx-auto flex max-w-[1520px] flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2 font-mono text-[11px] text-quantum-ink/50">
          <span className={`status-dot ${account ? 'status-dot-green' : 'status-dot-red'}`} />
          Wallet:{' '}
          <b className="text-quantum-ink/70">
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'OFF'}
          </b>
        </span>
        <span className="font-mono text-[11px] text-quantum-ink/50">
          Execution:{' '}
          <b className="text-quantum-blue">Wallet Gas</b>
        </span>
        <span className="font-mono text-[11px] text-quantum-ink/50">
          Block:{' '}
          <b className="text-quantum-purple">
            {blockNumber ? blockNumber.toString() : 'Syncing'}
          </b>
        </span>
      </div>
    </footer>
  )
}
