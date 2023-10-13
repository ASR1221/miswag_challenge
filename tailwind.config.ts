import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "text-header-color": "var(--text-header-color)",
        "text-sub-header-color": "var(--text-sub-header-color)",
        "text-sale-color": "var(--text-sale-color)",
        "text-sub-header-color-active": "var(--text-sub-header-color-active)",
        "bg-category-cell": "var(--bg-category-cell)",
        "bg-category-cell-active": "var(--bg-category-cell-active)",
      },
      boxShadow: {
        "category": "0px 20px 35px 0px #00000026",
        "product": "0px 40px 90px 0px #0000000F",
      }
    },
  },
  plugins: [],
}
export default config
