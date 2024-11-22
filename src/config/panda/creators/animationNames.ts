export const animationNames = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' }
  },
  slideIn: {
    '0%': {
      transform: 'translateX(180px)',
      opacity: '0'
    },
    '100%': {
      transform: 'translateX(0)'
    },
    '40%, 100%': {
      opacity: '1'
    }
  },
  zoomIn: {
    '0%': {
      transform: 'scale(0.8)',
      opacity: '0'
    },
    '100%': {
      opacity: '1',
      transform: 'scale(1)'
    }
  },
  poyoyon: {
    '0%': {
      transform: 'translateX(140px)',
      opacity: '0'
    },
    '50%': {
      transform: 'translateX(0)'
    },
    '65%': {
      transform: 'translateX(30px)'
    },
    '100%': {
      transform: 'translateX(0)'
    },
    '20%, 100%': {
      opacity: '1'
    }
  },
  poyoyon2: {
    '0%': {
      transform: 'scale(1.0, 1.0) translate(0, 0)',
      opacity: '1'
    },
    '15%': {
      transform: 'scale(0.98, 0.9) translate(0, 5px)'
    },
    '30%': {
      transform: 'scale(1.02, 1.0) translate(0, 8px)'
    },
    '50%': {
      transform: 'scale(0.98, 1.05) translate(0, -8px)'
    },
    '70%': {
      transform: 'scale(1.0, 0.9) translate(0, 5px)'
    },
    '100%': {
      transform: 'scale(1.0, 1.0) translate(0, 0)',
      opacity: '1'
    }
  },
  poyoyon3: {
    '0%, 40%': {
      transform: 'skew(0deg, 0deg)'
    },
    '5%': {
      transform: 'skew(5deg, 5deg)'
    },
    '10%': {
      transform: 'skew(-4deg, -4deg)'
    },
    '15%': {
      transform: 'skew(3deg, 3deg)'
    },
    '20%': {
      transform: 'skew(-2deg, -2deg)'
    },
    '25%': {
      transform: 'skew(1deg, 1deg)'
    },
    '30%': {
      transform: 'skew(-0.6deg, -0.6deg)'
    },
    '35%': {
      transform: 'skew(0.3deg, 0.3deg)'
    }
  },
  slideSkew: {
    '0%': {
      transform: 'translate(180px, 30px)',
      opacity: '0'
    },
    '100%': {
      transform: 'translate(0, 0)'
    },
    '20%, 100%': {
      opacity: '1'
    }
  },
  popup: {
    '0%': {
      transform: 'translateY(40px) scale(0.8)',
      opacity: '0'
    },
    '100%': {
      transform: 'translateY(0) scale(1.0)'
    },
    '80%, 100%': {
      opacity: '1'
    }
  },
  poyopoyo: {
    '0%, 40%, 60%, 80%': {
      transform: 'scale(1.0)'
    },
    '50%, 70%': {
      transform: 'scale(0.95)'
    }
  },
  fadeUp: {
    '0%': {
      transform: 'translateY(30px)',
      opacity: '0'
    },
    '80%': {
      opacity: '1'
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: '1'
    }
  }
}
