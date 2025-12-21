// lib/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useTheme as useNextTheme } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem={false}
			storageKey="kanif-portfolio-theme"
		>
			{children}
		</NextThemesProvider>
	);
}

export function useTheme() {
	const { theme, setTheme } = useNextTheme();

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return { theme, setTheme, toggleTheme };
}