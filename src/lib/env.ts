// SECURITY: Circle Kit Key removed from client bundle — proxied server-side
export const CIRCLE_KIT_KEY = ''
export const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID || ''
export const PRIVY_CLIENT_ID = import.meta.env.VITE_PRIVY_CLIENT_ID || ''
export const ARC_USDC_ADDRESS = import.meta.env.VITE_ARC_USDC_ADDRESS || ''
export const ARC_EURC_ADDRESS = import.meta.env.VITE_ARC_EURC_ADDRESS || ''
export const SEPOLIA_USDC_ADDRESS = import.meta.env.VITE_SEPOLIA_USDC_ADDRESS || ''

export const envStatus = {
  circleKit: false, // Key removed — circle API proxied server-side
  privy: Boolean(PRIVY_APP_ID)
}

export const socialLoginReady = Boolean(PRIVY_APP_ID)
