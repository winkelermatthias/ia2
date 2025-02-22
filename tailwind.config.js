/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}"
      ],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              light: '#4f83cc',
              DEFAULT: '#1565c0',
              dark: '#0d47a1'
            },
            secondary: {
              light: '#ffb74d',
              DEFAULT: '#fb8c00',
              dark: '#ef6c00'
            },
            industrial: {
              bg: '#f4f7fa',
              surface: '#ffffff',
              border: '#d1d9e6',
              text: '#333333'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['Fira Code', 'monospace']
          },
          spacing: {
            '128': '32rem',
            '144': '36rem'
          },
          borderRadius: {
            '4xl': '2rem'
          },
          boxShadow: {
            'outline-blue': '0 0 0 3px rgba(21, 101, 192, 0.5)'
          }
        }
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
      ]
    };
