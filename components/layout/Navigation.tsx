"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Publications", href: "#publications" },
	{ name: "Awards", href: "#awards" },
	{ name: "Quick Heal", href: "#quickheal" },
	{ name: "Contact", href: "#contact" },
];

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const { theme, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Handle mount state without triggering warning
	useEffect(() => {
		requestAnimationFrame(() => setMounted(true));
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = navItems.map((item) => item.href.slice(1));
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!mounted) return null;

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<motion.a
						href="#home"
						className="text-2xl font-bold text-gradient"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Kanif Kumbhar
					</motion.a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navItems.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className={`relative text-sm font-medium transition-colors ${
									activeSection === item.href.slice(1)
										? "text-green-400"
										: "text-foreground/80 hover:text-green-400"
								}`}
								whileHover={{ y: -2 }}
							>
								{item.name}
								{activeSection === item.href.slice(1) && (
									<motion.div
										layoutId="activeSection"
										className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
							</motion.a>
						))}

						{/* Theme Toggle */}
						<motion.button
							onClick={toggleTheme}
							whileHover={{ scale: 1.1, rotate: 180 }}
							whileTap={{ scale: 0.9 }}
							className="p-2 rounded-full glass"
							aria-label="Toggle theme"
						>
							<AnimatePresence mode="wait">
								{theme === "dark" ? (
									<motion.div
										key="sun"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<Sun className="w-5 h-5 text-yellow-400" />
									</motion.div>
								) : (
									<motion.div
										key="moon"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<Moon className="w-5 h-5 text-blue-400" />
									</motion.div>
								)}
							</AnimatePresence>
						</motion.button>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-4">
						<motion.button
							onClick={toggleTheme}
							whileTap={{ scale: 0.9 }}
							className="p-2"
							aria-label="Toggle theme"
						>
							{theme === "dark" ? (
								<Sun className="w-6 h-6 text-yellow-400" />
							) : (
								<Moon className="w-6 h-6 text-blue-400" />
							)}
						</motion.button>

						<motion.button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							whileTap={{ scale: 0.9 }}
							className="p-2"
							aria-label="Toggle menu"
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</motion.button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden mt-4 glass rounded-2xl overflow-hidden"
						>
							<div className="flex flex-col p-4 space-y-4">
								{navItems.map((item, index) => (
									<motion.a
										key={item.name}
										href={item.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 }}
										onClick={() => setMobileMenuOpen(false)}
										className={`text-lg font-medium ${
											activeSection === item.href.slice(1)
												? "text-green-400"
												: "text-foreground/80"
										}`}
									>
										{item.name}
									</motion.a>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}