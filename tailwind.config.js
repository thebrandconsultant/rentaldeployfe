module.exports = {
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx'
    ],
    media: false, // or 'media' or 'class'
    theme: {
      extend: {
        padding: {
          '1/2': '50%',
          full: '100%',
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-1deg), scale(1.1)' },
            '50%': { transform: 'rotate(1deg)' }
          }
        },
        animation: {
          wiggle: 'wiggle 3s ease-in-out infinite',
         },
        textColor: {
          skin: {
              light: 'var(--text-color-light)',
              dark: 'var(--text-color-dark)',
              accent: 'var(--text-color-accent)',
              altaccent: 'var(--text-color-alt-accent)'
          }
      },
      backgroundColor: {
          skin: {
              light: 'var(--bg-color-light)',
              dark: 'var(--bg-color-dark)',
              accent: 'var(--bg-color-accent)',
              altaccent: 'var(--bg-color-alt-accent)'
          }
      },
      borderColor: {
        skin: {
            light: 'var(--bg-color-light)',
            dark: 'var(--bg-color-dark)',
            accent: 'var(--bg-color-accent)',
            altaccent: 'var(--bg-color-alt-accent)'
        }
    }
    },
    // variants: {
    //   extend: {
    //     opacity: ['disabled'],
    //     backgroundColor: ['disabled'],
    //     cursor: ['disabled']
    //   },
    // },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    // ...
  ],
  }