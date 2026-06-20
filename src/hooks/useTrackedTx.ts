import type { Hex } from 'viem'

import { createTx, useAppStore, type TxKind, type TxStatus } from '../store/useAppStore'

export function useTrackedTx() {
  const addTx = useAppStore((state) => state.addTx)
  const updateTx = useAppStore((state) => state.updateTx)
  const addPendingTx = useAppStore((state) => state.addPendingTx)
  const removePendingTx = useAppStore((state) => state.removePendingTx)

  return async function track<T>(
    kind: TxKind,
    summary: string,
    action: () => Promise<{ hash?: Hex; value?: T; status?: TxStatus; error?: string }>
  ) {
    const tx = createTx(kind, summary)
    addTx(tx)
    let trackedHash: Hex | undefined
    try {
      const result = await action()
      if (result.hash) {
        trackedHash = result.hash
        addPendingTx(result.hash)
      }
      updateTx(tx.id, {
        hash: result.hash,
        status: result.status ?? 'success',
        error: result.error
      })
      if (trackedHash) removePendingTx(trackedHash)
      return result
    } catch (error) {
      updateTx(tx.id, {
        status: 'error',
        error: error instanceof Error ? error.message : String(error)
      })
      if (trackedHash) removePendingTx(trackedHash)
      throw error
    }
  }
}
