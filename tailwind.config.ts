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
        "text-offer-color": "var(--text-offer-color)",
        "text-sub-header-color-active": "var(--text-sub-header-color-active)",
        "bg-category-cell": "var(--bg-category-cell)",
        "bg-category-cell-active": "var(--bg-category-cell-active)",
        "shadow-category-cell-active": "var(--shadow-category-cell-active)",
        "bg-product-cell": "var(--bg-product-cell)",
        "shadow-product-cell": "var(--shadow-product-cell)",
      },
      boxShadow: {
        "category": "0px 20px 35px 0px #00000026",
        "product": "0px 40px 90px 0px #00000026",
      }
    },
  },
  plugins: [],
}
export default config
