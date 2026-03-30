import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        foreground: '#ffffff',
        muted: '#666666',
        'muted-foreground': '#999999',
        accent: '#00d9ff',
        'accent-dark': '#0099cc',
        border: '#333333',
        'card-bg': '#252525',
      },
      spacing: {
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
      },
      borderRadius: {
        '0': '0',
        'sm': '0.375rem',
        'base': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
      },
    },
  },
  plugins: [],
}

export default config
