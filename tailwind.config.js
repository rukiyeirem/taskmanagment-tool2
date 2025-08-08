import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFEDD5',    // Açık turuncu tonları
          DEFAULT: '#F97316',  // Orta turuncu (ana renk)
          dark: '#C2410C',     // Koyu turuncu
        },
        secondary: {
          light: '#F3F4F6',    // Açık gri - beyaz tonları
          DEFAULT: '#FFFFFF',  // Saf beyaz
          dark: '#374151',     // Koyu gri
        }
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans], // Güzel ve modern bir font
      }
    }
  },
  plugins: [],
}