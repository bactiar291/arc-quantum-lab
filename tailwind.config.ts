import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        quantum: {
          black: '#2D2A3E',
          paper: '#FFF8E7',
          panel: '#FFFFFF',
          ink: '#2D2A3E',
          yellow: '#F4D35E',
          cyan: '#5CCBA0',
          red: '#EF7B7B',
          green: '#5CCBA0',
          purple: '#9B7FE6',
          orange: '#F4A261',
          blue: '#5B8DEF',
          pink: '#E88DAA'
        }
      },
      boxShadow: {
        brutal: '0 4px 16px rgba(91, 141, 239, 0.12)',
        brutalCyan: '0 4px 16px rgba(92, 203, 160, 0.12)',
        brutalRed: '0 4px 16px rgba(244, 162, 97, 0.12)',
        brutal3d: '0 4px 20px rgba(45, 42, 62, 0.1)',
        soft: '0 2px 12px rgba(45, 42, 62, 0.08)',
        softMd: '0 4px 20px rgba(45, 42, 62, 0.12)',
        softLg: '0 8px 32px rgba(45, 42, 62, 0.15)'
      },
      borderRadius: {
        'friendly': '16px',
        'friendly-lg': '20px',
        'friendly-xl': '24px',
        'wobbly': '24px 20px 22px 18px',
        'wobbly-alt': '18px 22px 20px 24px'
      },
      fontFamily: {
        display: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Courier New', 'monospace']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        float: {
          '0%': { transform: 'rotate(-1deg) translateY(0)' },
          '100%': { transform: 'rotate(1deg) translateY(-8px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' }
        }
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite alternate',
        wiggle: 'wiggle 2s ease-in-out infinite',
        reveal: 'reveal 400ms ease-out both',
        popIn: 'popIn 350ms cubic-bezier(0.34, 1.56, 0.64, 1) both'
      }
    }
  },
  plugins: []
} satisfies Config
