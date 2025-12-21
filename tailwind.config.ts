import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				display: ["var(--font-space-grotesk)"],
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				glow: "glow 2s ease-in-out infinite alternate",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-20px)" },
				},
				glow: {
					"0%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" },
					"100%": { boxShadow: "0 0 40px rgba(34, 197, 94, 0.8)" },
				},
			},
		},
	},
	plugins: [],
};

export default config;