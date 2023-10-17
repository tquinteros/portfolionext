import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color1': '#FF1493',   // Rosa Neón
        'custom-color2': '#800080',   // Morado
        'custom-color3': '#40E0D0',   // Turquesa Brillante
        'custom-color4': '#008B8B',  // Verde Azulado
        'custom-color5': '#98FB98',  // Verde Menta Suave
        'custom-color6': '#8A2BE2',  // Violeta Oscuro
        'custom-color7': '#7FFFD4',  // Aqua
        'custom-color8': '#FFB6C1',  // Rosa Pastel
        'custom-color9': '#FF69B4',  // Rosa Medio
        'custom-color10': '#FF007F',  // Rosa Intenso
        'custom-color11': '#C71585',  // Rosa Oscuro
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

export default config
