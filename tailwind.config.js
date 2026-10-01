export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: 'var(--bg)', sf: 'var(--sf)', tx: 'var(--tx)', mu: 'var(--mu)', bd: 'var(--bd)', ac: 'var(--ac)' },
      fontFamily: { sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'] },
      keyframes: { marquee: { to: { transform: 'translateX(-50%)' } }, float: { '50%': { transform: 'translateY(-10px)' } } },
      animation: { marquee: 'marquee 30s linear infinite', float: 'float 6s ease-in-out infinite' }
    }
  }
}
