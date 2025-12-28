// components/sections/About.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
	Code2,
	Brain,
	Shield,
	Award,
	Sparkles,
	Target,
	Zap,
} from "lucide-react";

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });
	const [activeIndex, setActiveIndex] = useState(0);

	const stats = [
		{
			label: "Projects",
			value: "10+",
			icon: Code2,
			gradient: "from-blue-400 to-blue-600",
		},
		{
			label: "Technologies",
			value: "15+",
			icon: Brain,
			gradient: "from-purple-400 to-purple-600",
		},
		{
			label: "MCA CGPA",
			value: "8.70",
			icon: Award,
			gradient: "from-green-400 to-green-600",
		},
		{
			label: "B.Sc CGPA",
			value: "9.53",
			icon: Sparkles,
			gradient: "from-orange-400 to-orange-600",
		},
	];

	const journey = [
		{
			year: "2024 - Present",
			title: "Master of Computer Applications",
			institution: "Government College of Engineering, Karad",
			achievement: "CGPA: 8.70/10",
			icon: Brain,
			color: "from-green-400 to-emerald-500",
		},
		{
			year: "2021 - 2024",
			title: "B.Sc. Computer Science",
			institution: "Smt. Kasturbai Walchand College, Sangli",
			achievement: "CGPA: 9.53/10 - Outstanding Performance",
			icon: Award,
			color: "from-blue-400 to-cyan-500",
		},
	];

	const expertise = [
		{
			icon: Brain,
			title: "AI/ML Engineering",
			shortDesc: "Intelligent Systems",
			description:
				"Architecting intelligent solutions with TensorFlow, PyTorch, and OpenCV. Expert in computer vision, deep learning model optimization, and deploying production-ready ML systems.",
			technologies: [
				"TensorFlow",
				"PyTorch",
				"OpenCV",
				"Deep Learning",
				"Model Optimization",
			],
			color: "#a855f7",
			position: "left",
		},
		{
			icon: Code2,
			title: "Full-Stack Development",
			shortDesc: "Scalable Applications",
			description:
				"Building scalable web and mobile applications with modern frameworks. Crafting seamless user experiences from responsive frontends to robust backend architectures.",
			technologies: [
				"Next.js",
				"React Native",
				"Node.js",
				"PostgreSQL",
				"TypeScript",
			],
			color: "#3b82f6",
			position: "center",
		},
		{
			icon: Shield,
			title: "Cybersecurity Advocacy",
			shortDesc: "Digital Safety",
			description:
				"Quick Heal Foundation Cyber Warrior spreading digital safety awareness. Educating communities about ethical technology practices and online security best practices.",
			technologies: [
				"Security Awareness",
				"Ethical Tech",
				"Digital Safety",
				"Community Education",
			],
			color: "#22c55e",
			position: "right",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section
			id="about"
			className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
			ref={ref}
		>
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/5 to-background" />

			{/* Subtle floating orbs */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
					animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
					transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
					animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
					transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
				/>
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="relative z-10 max-w-7xl mx-auto"
			>
				{/* Header */}
				<motion.div variants={itemVariants} className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
							className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center"
						>
							<Target className="w-5 h-5 text-white" />
						</motion.div>
						<h2 className="text-5xl sm:text-7xl font-bold font-[family-name:var(--font-space-grotesk)]">
							About <span className="text-gradient">Me</span>
						</h2>
						<motion.div
							animate={{ rotate: -360 }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
							className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center"
						>
							<Zap className="w-5 h-5 text-white" />
						</motion.div>
					</div>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
						Transforming ideas into{" "}
						<span className="text-green-400 font-semibold">
							innovative digital solutions
						</span>
					</p>
				</motion.div>

				{/* Compact Stats */}
				<motion.div
					variants={itemVariants}
					className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
				>
					{stats.map((stat) => (
						<motion.div
							key={stat.label}
							whileHover={{ y: -5, scale: 1.02 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
							className="relative group"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
							/>
							<div className="relative p-5 glass rounded-2xl border border-border/50 hover:border-green-500/50 transition-all">
								<div
									className={`w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
								>
									<stat.icon className="w-5 h-5 text-white" />
								</div>
								<div className="text-3xl font-bold text-gradient mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground">
									{stat.label}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Original Journey Timeline */}
				<motion.div variants={itemVariants} className="mb-20">
					<h3 className="text-4xl font-bold text-center mb-12 text-gradient">
						My Academic Journey
					</h3>
					<div className="relative max-w-5xl mx-auto">
						{/* Timeline Line */}
						<motion.div
							initial={{ scaleY: 0 }}
							animate={isInView ? { scaleY: 1 } : {}}
							transition={{ delay: 0.8, duration: 1 }}
							className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-teal-500 origin-top hidden md:block"
						/>

						<div className="space-y-12">
							{journey.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: 1 + index * 0.3, duration: 0.8 }}
									className={`flex items-center gap-8 ${
										index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
									}`}
								>
									{/* Content */}
									<div
										className={`flex-1 ${
											index % 2 === 0 ? "md:text-right" : "md:text-left"
										}`}
									>
										<motion.div
											whileHover={{ scale: 1.02, y: -5 }}
											className="relative p-8 glass rounded-3xl border border-border hover:border-green-500/50 transition-all group"
										>
											<div
												className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
											/>
											<div className="relative">
												<div className="text-sm text-green-400 font-semibold mb-2">
													{item.year}
												</div>
												<h4 className="text-2xl font-bold mb-2">
													{item.title}
												</h4>
												<p className="text-muted-foreground mb-3">
													{item.institution}
												</p>
												<div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400">
													<Award className="w-4 h-4" />
													{item.achievement}
												</div>
											</div>
										</motion.div>
									</div>

									{/* Timeline Dot */}
									<motion.div
										initial={{ scale: 0 }}
										animate={isInView ? { scale: 1 } : {}}
										transition={{ delay: 1.2 + index * 0.3, type: "spring" }}
										className="relative z-10 hidden md:block"
									>
										<div
											className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-4 border-background shadow-xl`}
										>
											<item.icon className="w-8 h-8 text-white" />
										</div>
									</motion.div>

									{/* Spacer */}
									<div className="flex-1 hidden md:block" />
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* CREATIVE EXPERTISE SECTION */}
				<motion.div variants={itemVariants} className="mb-16">
					<div className="text-center mb-12">
						<h3 className="text-5xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
							What I <span className="text-gradient">Bring</span>
						</h3>
						<p className="text-muted-foreground">
							Expertise across the tech spectrum
						</p>
					</div>

					{/* Interactive Tabs/Pills */}
					<div className="flex justify-center gap-3 mb-12 flex-wrap">
						{expertise.map((item, idx) => (
							<motion.button
								key={idx}
								onClick={() => setActiveIndex(idx)}
								className={`relative px-6 py-3 rounded-full font-semibold transition-all ${
									activeIndex === idx ? "text-white" : "text-muted-foreground"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{activeIndex === idx && (
									<motion.div
										layoutId="activeTab"
										className="absolute inset-0 rounded-full"
										style={{ backgroundColor: item.color }}
										transition={{ type: "spring", duration: 0.6 }}
									/>
								)}
								<span className="relative z-10 flex items-center gap-2">
									<item.icon className="w-5 h-5" />
									{item.shortDesc}
								</span>
							</motion.button>
						))}
					</div>

					{/* Animated Content Display - Asymmetric Layout */}
					<div className="relative min-h-[400px]">
						{expertise.map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: 100 }}
								animate={{
									opacity: activeIndex === idx ? 1 : 0,
									x: activeIndex === idx ? 0 : 100,
									display: activeIndex === idx ? "block" : "none",
								}}
								transition={{
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1] as const,
								}}
								className="absolute inset-0"
							>
								<div className="grid md:grid-cols-2 gap-8 items-center">
									{/* Left: Icon + Title */}
									<motion.div
										initial={{ scale: 0.8, rotateY: -20 }}
										animate={{ scale: 1, rotateY: 0 }}
										transition={{ delay: 0.2, duration: 0.6 }}
										className="relative"
									>
										{/* Geometric background */}
										<div
											className="relative p-12 rounded-[3rem]"
											style={{
												background: `linear-gradient(135deg, ${item.color}15, transparent)`,
											}}
										>
											{/* Large icon with parallax effect */}
											<motion.div
												animate={{
													y: [0, -10, 0],
													rotateZ: [-2, 2, -2],
												}}
												transition={{ duration: 4, repeat: Infinity }}
												className="relative"
											>
												<div
													className="w-32 h-32 rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl"
													style={{
														background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
													}}
												>
													<item.icon className="w-16 h-16 text-white" />
												</div>
											</motion.div>

											<h4
												className="text-4xl font-bold text-center"
												style={{ color: item.color }}
											>
												{item.title}
											</h4>
										</div>
									</motion.div>

									{/* Right: Details */}
									<motion.div
										initial={{ opacity: 0, x: 50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.4, duration: 0.6 }}
										className="space-y-6"
									>
										<p className="text-lg leading-relaxed text-foreground/80">
											{item.description}
										</p>

										{/* Technologies in a unique flowing layout */}
										<div className="space-y-3">
											<div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
												Tech Stack
											</div>
											<div className="flex flex-wrap gap-3">
												{item.technologies.map((tech, techIdx) => (
													<motion.div
														key={tech}
														initial={{ opacity: 0, scale: 0, rotate: -10 }}
														animate={{ opacity: 1, scale: 1, rotate: 0 }}
														transition={{
															delay: 0.5 + techIdx * 0.1,
															type: "spring",
														}}
														whileHover={{ scale: 1.1, rotate: 5 }}
														className="relative group cursor-default"
													>
														<div
															className="absolute inset-0 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"
															style={{ background: item.color }}
														/>
														<div
															className="relative px-4 py-2 rounded-xl font-medium border-2 backdrop-blur-sm"
															style={{
																borderColor: item.color,
																background: `${item.color}10`,
																color: item.color,
															}}
														>
															{tech}
														</div>
													</motion.div>
												))}
											</div>
										</div>

										{/* Progress/Experience indicator */}
										<motion.div
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ delay: 0.8, duration: 1 }}
											className="space-y-2"
										>
											<div className="flex justify-between text-sm">
												<span className="text-muted-foreground">
													Experience Level
												</span>
												<span
													className="font-semibold"
													style={{ color: item.color }}
												>
													Expert
												</span>
											</div>
											<div className="h-2 bg-white/5 rounded-full overflow-hidden">
												<motion.div
													initial={{ width: 0 }}
													animate={{ width: "90%" }}
													transition={{
														delay: 1,
														duration: 1.5,
														ease: "easeOut",
													}}
													className="h-full rounded-full"
													style={{
														background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)`,
													}}
												/>
											</div>
										</motion.div>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* FUTURISTIC HOLOGRAM CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 2.5, duration: 0.6 }}
					className="text-center mt-16"
				>
					<div className="relative max-w-3xl mx-auto">
						{/* Holographic scanlines */}
						<div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
							<motion.div
								className="absolute inset-0"
								style={{
									backgroundImage:
										"repeating-linear-gradient(0deg, rgba(34, 197, 94, 0.03) 0px, transparent 2px, transparent 4px, rgba(34, 197, 94, 0.03) 4px)",
								}}
								animate={{ y: [0, 20, 0] }}
								transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
							/>
						</div>

						<motion.div
							className="relative p-8 rounded-3xl border border-green-500/30 overflow-hidden group"
							style={{
								background:
									"linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(34, 197, 94, 0.05))",
								backdropFilter: "blur(10px)",
							}}
						>
							{/* Corner accents */}
							{["top-left", "top-right", "bottom-left", "bottom-right"].map(
								(corner) => (
									<motion.div
										key={corner}
										className={`absolute w-8 h-8 border-green-400 ${
											corner === "top-left"
												? "top-4 left-4 border-t-2 border-l-2"
												: corner === "top-right"
												? "top-4 right-4 border-t-2 border-r-2"
												: corner === "bottom-left"
												? "bottom-4 left-4 border-b-2 border-l-2"
												: "bottom-4 right-4 border-b-2 border-r-2"
										}`}
										animate={{
											opacity: [0.3, 1, 0.3],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay:
												corner === "top-left"
													? 0
													: corner === "top-right"
													? 0.5
													: corner === "bottom-left"
													? 1
													: 1.5,
										}}
									/>
								)
							)}

							<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
								<div className="flex-1 text-left">
									<motion.div
										className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-mono border border-green-500/50 text-green-400"
										animate={{ opacity: [0.5, 1, 0.5] }}
										transition={{ duration: 2, repeat: Infinity }}
									>
										&gt; READY_TO_CONNECT
									</motion.div>

									<h4 className="text-4xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
										Let&apos;s Build The{" "}
										<span className="text-gradient">Future</span>
									</h4>

									<p className="text-muted-foreground">
										Your vision + My expertise = Something amazing
									</p>
								</div>

								<motion.a
									href="#contact"
									className="relative group/btn"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{/* Glowing outline */}
									<motion.div
										className="absolute -inset-1 rounded-2xl opacity-0 group-hover/btn:opacity-100"
										style={{
											background:
												"linear-gradient(45deg, #22c55e, #10b981, #22c55e)",
											filter: "blur(8px)",
										}}
										animate={{
											backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
										}}
										transition={{ duration: 3, repeat: Infinity }}
									/>

									<div className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-lg flex items-center gap-3 overflow-hidden">
										{/* Animated grid background */}
										<motion.div
											className="absolute inset-0 opacity-20"
											style={{
												backgroundImage:
													"linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
												backgroundSize: "20px 20px",
											}}
											animate={{
												x: [0, 20],
												y: [0, 20],
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												ease: "linear",
											}}
										/>

										<span className="relative z-10">Initiate Contact</span>

										<motion.div
											className="relative z-10"
											animate={{
												x: [0, 5, 0],
												scale: [1, 1.2, 1],
											}}
											transition={{ duration: 1.5, repeat: Infinity }}
										>
											<svg
												className="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</motion.div>
									</div>
								</motion.a>
							</div>

							{/* Status indicators */}
							<div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground font-mono">
								<div className="flex items-center gap-2">
									<motion.div
										className="w-2 h-2 rounded-full bg-green-400"
										animate={{ opacity: [1, 0.3, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
									/>
									<span>AVAILABLE</span>
								</div>
								<div className="w-px h-4 bg-border" />
								<div className="flex items-center gap-2">
									<motion.div
										className="w-2 h-2 rounded-full bg-blue-400"
										animate={{ opacity: [1, 0.3, 1] }}
										transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
									/>
									<span>RESPONSE_TIME: &lt;24H</span>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
