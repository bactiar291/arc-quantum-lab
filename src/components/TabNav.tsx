import { Boxes, Rocket, Send, Shuffle } from 'lucide-react'

import { useAppStore, type AppTab } from '../store/useAppStore'
import { Button } from './ui/Button'

const tabs: Array<{ id: AppTab; label: string; icon: typeof Shuffle; color: string }> = [
  { id: 'swap', label: 'Swap', icon: Shuffle, color: 'text-quantum-blue' },
  { id: 'liquidity', label: 'Liquidity', icon: Boxes, color: 'text-quantum-purple' },
  { id: 'send', label: 'Send', icon: Send, color: 'text-quantum-orange' },
  { id: 'deploy', label: 'Deploy', icon: Rocket, color: 'text-quantum-green' }
]

export function TabNav() {
  const activeTab = useAppStore((state) => state.activeTab)
  const setActiveTab = useAppStore((state) => state.setActiveTab)

  return (
    <nav className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const active = activeTab === tab.id
        return (
          <Button
            key={tab.id}
            variant={active ? 'primary' : 'ghost'}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full ${active ? '' : ''}`}
          >
            <Icon className={`h-5 w-5 ${active ? '' : tab.color}`} />
            {tab.label}
          </Button>
        )
      })}
    </nav>
  )
}
