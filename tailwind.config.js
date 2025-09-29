/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Custom colors for the legal theme
        legal: {
          blue: '#1e40af',
          dark: '#1f2937',
          gold: '#d97706'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      backgroundImage: {
        'gradient-legal': 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        'gradient-light': 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
      },
      boxShadow: {
        'legal': '0 10px 25px -5px rgba(30, 64, 175, 0.1)',
        'legal-lg': '0 20px 40px -10px rgba(30, 64, 175, 0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}