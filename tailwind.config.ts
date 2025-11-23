import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        smarter: {
          primary: '#10b981',
          secondary: '#3b82f6',
          accent: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
}
export default config
