/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'theme-background': 'var(--theme-background)',
        'theme-text': 'var(--theme-text)',
        'theme-colorNavBar': 'var(--theme-colorNavBar)',
        'theme-colorNavBarScroll': 'var(--theme-colorNavBarScroll)',
        'theme-colorButton': 'var(--theme-colorButton)',
        'theme-backgroundButton': 'var(--theme-backgroundButton)',
        'theme-box': 'var(--theme-box)',
        'theme-boxShadow': 'var(--theme-boxShadow)',
        'theme-tooltip': 'var(--theme-tooltip)',
        'theme-bg1': 'var(--theme-bg1)',
        'theme-orange208': 'var(--theme-orange208)',
        'theme-orange': 'var(--theme-orange)',
        'theme-table': 'var(--theme-table)',
        'theme-colorTransparent': 'var(--theme-colorTransparent)',
        'theme-bgNavBar': 'var(--theme-bgNavBar)'
      },
      boxShadow: {
        navBar: '0 0 4px 0 #071d28'
      }
    }
  },
  plugins: []
};
