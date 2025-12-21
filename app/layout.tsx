import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "Kanif Kumbhar - Full Stack Developer & AI Enthusiast",
	description:
		"Portfolio of Kanif Kumbhar - MCA student at GCE Karad, specializing in Full Stack Development, AI/ML, and Cybersecurity",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
			>
				<ThemeProvider>
					<CustomCursor />
					<Navigation />
					<SmoothScroll>{children}</SmoothScroll>
				</ThemeProvider>
			</body>
		</html>
	);
}