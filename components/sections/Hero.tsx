"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Download } from "lucide-react";

const GithubIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
	</svg>
);

const LinkedinIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
	</svg>
);

export default function Hero() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
		>
			{/* Animated gradient orbs */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{ duration: 8, repeat: Infinity }}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{ duration: 8, repeat: Infinity, delay: 1 }}
				/>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
			>
				{/* Profile Image with Enhanced Glow */}
				<motion.div
					variants={item}
					className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8"
				>
					<motion.div
						className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 blur-2xl"
						animate={{
							scale: [1, 1.3, 1],
							rotate: [0, 180, 360],
							opacity: [0.5, 0.8, 0.5],
						}}
						transition={{ duration: 5, repeat: Infinity }}
					/>
					<Image
						src="/profile.jpg"
						alt="Kanif Kumbhar"
						width={192}
						height={192}
						className="relative rounded-full border-4 border-green-500/50 object-cover shadow-2xl"
						priority
					/>
				</motion.div>

				{/* Name and Title */}
				<motion.div variants={item} className="mb-4">
					<h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
						<span className="text-gradient glow-text">Kanif</span>
						<br />
						<span>Kumbhar</span>
					</h1>
				</motion.div>

				<motion.div variants={item} className="mb-6">
					<p className="text-2xl sm:text-3xl text-green-400 font-semibold mb-2">
						Master of Computer Applications
					</p>
					<p className="text-xl text-muted-foreground">
						Government College of Engineering, Karad
					</p>
				</motion.div>

				<motion.p
					variants={item}
					className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
				>
					Full-Stack Developer | AI/ML Enthusiast | Cyber Security Advocate
					<br />
					<span className="text-green-400">
						Building innovative solutions that make a difference
					</span>
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					variants={item}
					className="flex gap-4 justify-center flex-wrap mb-8"
				>
					<motion.a
						href="#projects"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold overflow-hidden shadow-lg shadow-green-500/50"
					>
						<span className="relative z-10">View Projects</span>
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500"
							initial={{ x: "100%" }}
							whileHover={{ x: 0 }}
							transition={{ duration: 0.3 }}
						/>
					</motion.a>

					<motion.a
						href="/Kanif_Kumbhar_Resume.pdf"
						download
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 glass rounded-full font-semibold hover:bg-green-500/10 transition-colors flex items-center gap-2"
					>
						<Download className="w-5 h-5" />
						Download CV
					</motion.a>

					<motion.a
						href="#contact"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-8 py-4 border-2 border-green-500 rounded-full font-semibold hover:bg-green-500/10 transition-colors"
					>
						Get In Touch
					</motion.a>
				</motion.div>

				{/* Social Links with Custom Icons */}
				<motion.div variants={item} className="flex gap-4 justify-center">
					<motion.a
						href="https://github.com/Kanif-Kumbhar"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.2, rotate: 5 }}
						whileTap={{ scale: 0.9 }}
						className="p-4 glass rounded-full hover:bg-green-500/20 transition-colors"
						aria-label="GitHub"
					>
						<GithubIcon />
					</motion.a>

					<motion.a
						href="https://www.linkedin.com/in/kanifkumbhar2345"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.2, rotate: 5 }}
						whileTap={{ scale: 0.9 }}
						className="p-4 glass rounded-full hover:bg-green-500/20 transition-colors"
						aria-label="LinkedIn"
					>
						<LinkedinIcon />
					</motion.a>

					<motion.a
						href="mailto:mr.kanifkumbhar@gmail.com"
						whileHover={{ scale: 1.2, rotate: 5 }}
						whileTap={{ scale: 0.9 }}
						className="p-4 glass rounded-full hover:bg-green-500/20 transition-colors"
						aria-label="Email"
					>
						<Mail className="w-6 h-6 text-green-400" />
					</motion.a>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					variants={item}
					className="absolute bottom-10 left-1/2 -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 15, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="w-8 h-12 border-2 border-green-500 rounded-full flex items-start justify-center p-2"
					>
						<motion.div className="w-2 h-3 bg-green-500 rounded-full" />
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
