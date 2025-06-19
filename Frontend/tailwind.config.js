export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      keyframes: {
        'fly-diagonal': {
          '0%': { transform: 'translateX(0) translateY(0) rotate(45deg)' },
          '100%': { transform: 'translateX(calc(100vw + 2rem)) translateY(-100px) rotate(45deg)' }
        },
        'fly-diagonal-reverse': {
          '0%': { transform: 'translateX(0) translateY(0) rotate(-45deg)' },
          '100%': { transform: 'translateX(calc(-100vw - 2rem)) translateY(-100px) rotate(-45deg)' }
        }
      },
      animation: {
        'fly-diagonal': 'fly-diagonal 5s ease-in-out infinite',
        'fly-diagonal-reverse': 'fly-diagonal-reverse 6s ease-in-out infinite'
      }
    }
  }
}