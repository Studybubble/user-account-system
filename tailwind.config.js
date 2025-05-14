
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#94a3b8',
        background: '#ffffff',
        foreground: '#1e293b',
        primary: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#1e293b'
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b'
        },
        accent: {
          DEFAULT: '#f1f5f9',
          foreground: '#1e293b'
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1e293b'
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1e293b'
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem'
      },
    }
  },
  plugins: [],
}
