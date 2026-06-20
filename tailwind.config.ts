import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        quantum: {
          black: '#ECECF1', // NOTE: despite the name, this is actually a light/ink color (not black)
          paper: '#07070C',
          panel: '#12101F',
          ink: '#ECECF1',
          yellow: '#FFB020',
          cyan: '#19E3C2',
          red: '#FF7A1A',
          green: '#19E3C2',
          purple: '#6E56FF',
          orange: '#FF8C00'
        }
      },
      boxShadow: {
        brutal: '6px 6px 0 #6E56FF',
        brutalCyan: '6px 6px 0 #19E3C2',
        brutalRed: '6px 6px 0 #FF8C00',
        brutal3d: '3px 3px 0 #19E3C2, 6px 6px 0 #6E56FF, 9px 9px 0 rgba(0,0,0,0.6)'
      },
      fontFamily: {
        display: ['DM Sans', 'Arial Black', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'Courier New', 'monospace']
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(110%)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseBorder: {
          '0%, 100%': { boxShadow: '5px 5px 0 #FFD84A' },
          '50%': { boxShadow: '5px 5px 0 #38DFF4' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 2px)' }
        },
        float3d: {
          '0%, 100%': { transform: 'translateY(0) rotateX(58deg) rotateZ(42deg)' },
          '50%': { transform: 'translateY(-10px) rotateX(58deg) rotateZ(50deg)' }
        },
        logo3d: {
          '0%, 100%': { transform: 'rotateX(-18deg) rotateY(28deg) rotateZ(-4deg)' },
          '50%': { transform: 'rotateX(-10deg) rotateY(42deg) rotateZ(4deg)' }
        }
      },
      animation: {
        scan: 'scan 1.4s linear infinite',
        reveal: 'reveal 360ms ease-out both',
        pulseBorder: 'pulseBorder 1.8s ease-in-out infinite',
        glitch: 'glitch 420ms steps(2, end) infinite',
        float3d: 'float3d 4s ease-in-out infinite',
        logo3d: 'logo3d 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config
