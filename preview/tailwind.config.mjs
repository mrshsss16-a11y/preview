/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        din: ['"DIN Next LT Arabic"', '"Tajawal"', 'sans-serif'], 
      },
      colors: {
        aura: {
          accent: '#58A8B4', // أزرق مخضر
          primary: '#438FB3', // أزرق متوسط
          glass: 'rgba(179, 183, 193, 0.15)', // رمادي مزرق شفاف
          glassBorder: 'rgba(255, 255, 255, 0.4)',
          bg: '#F8F9FA', // خلفية عاجية
          text: '#1A1D24',
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(179,183,193,0.1) 100%)',
      },
      boxShadow: {
        'liquid-glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.liquid-glass-filter': {
          'backdrop-filter': 'blur(16px) saturate(120%) url(#liquid-glass-refraction)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(120%)',
        },
        '.text-glow': {
          'text-shadow': '0 0 20px rgba(88, 168, 180, 0.5), 0 0 40px rgba(67, 143, 179, 0.3)',
        }
      })
    }
  ],
}