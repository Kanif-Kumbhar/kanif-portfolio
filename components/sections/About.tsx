"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Shield, Award } from "lucide-react";

export default function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const stats = [
		{ label: "Projects Completed", value: "10+", icon: Code2 },
		{ label: "Technologies", value: "15+", icon: Brain },
		{ label: "CGPA (MCA)", value: "8.70", icon: Award },
		{ label: "CGPA (B.Sc)", value: "9.53", icon: Award },
	];

	const highlights = [
		{
			icon: Brain,
			title: "AI/ML Enthusiast",
			description:
				"Building intelligent solutions with TensorFlow, PyTorch, and cutting-edge deep learning techniques.",
			color: "from-purple-400 to-pink-500",
		},
		{
			icon: Code2,
			title: "Full-Stack Developer",
			description:
				"Proficient in Next.js, React, Node.js, PostgreSQL, and modern web technologies.",
			color: "from-blue-400 to-cyan-500",
		},
		{
			icon: Shield,
			title: "Cyber Security Advocate",
			description:
				"Quick Heal Foundation Cyber Warrior, educating communities on digital safety.",
			color: "from-green-400 to-emerald-500",
		},
	];

	return (
		<section
			id="about"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-5xl sm:text-7xl font-bold mb-16 text-center font-[family-name:var(--font-space-grotesk)]"
				>
					About <span className="text-gradient">Me</span>
				</motion.h2>

				{/* Introduction */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
					className="glass rounded-3xl p-8 sm:p-12 mb-16"
				>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6 text-lg text-foreground/80">
							<p>
								I&apos;m a{" "}
								<span className="text-green-400 font-semibold">
									Master&apos;s student in Computer Applications
								</span>{" "}
								at Government College of Engineering, Karad, with a stellar
								academic record (CGPA: 8.70/10). My undergraduate degree in
								Computer Science from Smt. Kasturbai Walchand College, Sangli,
								was completed with an outstanding{" "}
								<span className="text-green-400 font-semibold">9.53 CGPA</span>.
							</p>
							<p>
								I specialize in building{" "}
								<span className="text-green-400 font-semibold">
									production-ready applications
								</span>{" "}
								using modern technologies like Next.js, React Native, Django,
								and PostgreSQL. My expertise spans full-stack development, AI/ML
								model deployment, and IoT-based solutions.
							</p>
							<p>
								Currently, I&apos;m working on innovative projects including an
								AI-powered diet planner (Arogyam), wildlife monitoring system
								(HariHar), and eye disease detection using deep learning. I&apos;m
								passionate about solving real-world problems through technology.
							</p>
						</div>

						{/* Stats Grid */}
						<div className="grid grid-cols-2 gap-6">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.5 }}
									animate={isInView ? { opacity: 1, scale: 1 } : {}}
									transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
									className="text-center p-6 glass rounded-2xl hover:border-green-500/50 transition-all group"
								>
									<stat.icon className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
									<div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Expertise Highlights */}
				<div className="grid md:grid-cols-3 gap-8">
					{highlights.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.6 + index * 0.2 }}
							whileHover={{ y: -10 }}
							className="relative group"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
							/>
							<div className="relative p-8 glass rounded-3xl border border-border hover:border-green-500/50 transition-all h-full">
								<div
									className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
								>
									<item.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold mb-4 text-gradient">
									{item.title}
								</h3>
								<p className="text-foreground/70">{item.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}