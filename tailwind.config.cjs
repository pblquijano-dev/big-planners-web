/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Material Design 3 Custom Tokens - Coastal Nomad
        m3: {
          primary: '#45636c',
          primaryDark: '#214048',
          'primary-container': '#8cabb5',
          'on-primary-container': '#214048',
          secondary: '#42636d',
          'on-secondary': '#ffffff',
          'secondary-container': '#c5e8f4',
          'on-secondary-container': '#486973',
          tertiary: '#9b442d',
          'on-tertiary': '#ffffff',
          'tertiary-container': '#f4896d',
          'on-tertiary-container': '#6d230e',
          surface: '#fff8f5',
          'surface-dim': '#efd5c5',
          'surface-container': '#ffeadd',
          'surface-container-low': '#fff1e9',
          'surface-container-high': '#fee3d2',
          'surface-container-highest': '#f8decd',
          'on-surface': '#26190f',
          'on-surface-variant': '#41484a',
          outline: '#72787a',
          'outline-variant': '#c1c7ca',
          background: '#fff8f5',
          'on-background': '#26190f',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        m3: '24px',
      },
      boxShadow: {
        // M3 Elevation shadows (subtle)
        'm3-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'm3-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'm3-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'm3-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'm3-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
