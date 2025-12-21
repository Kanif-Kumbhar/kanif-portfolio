"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { Award, Trophy, Star } from "lucide-react";

const awards = [
	{
		title: "K! Hacks 2025 Finalist",
		organization: "College of Engineering, Guindy (Anna University, Chennai)",
		description:
			"Selected among top teams for building a Small Business Credit Score System",
		date: "2025",
		icon: Trophy,
		color: "from-yellow-400 to-orange-500",
	},
	{
		title: "Google Cloud Agentic AI Day 2025",
		organization: "Google Cloud",
		description:
			"Recognized for initiative and contribution with innovative AI solution",
		date: "2025",
		icon: Star,
		color: "from-blue-400 to-purple-500",
	},
	{
		title: "GirlScript Summer of Code 2025",
		organization: "GirlScript Foundation",
		description: "Selected as contributor for open-source projects",
		date: "2025",
		icon: Award,
		color: "from-pink-400 to-rose-500",
	},
];

const certifications = [
	"Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
	"NPTEL Data Analysis with Python",
	"AICTE Internship - 6 Weeks on AI/ML",
	"IBM SkillsBuild - Artificial Intelligence Fundamentals",
];

export default function Awards() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="awards"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-5xl sm:text-7xl font-bold mb-4 text-center font-[family-name:var(--font-space-grotesk)]"
				>
					Awards & <span className="text-gradient">Recognition</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
					className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
				>
					Recognized for innovation, leadership, and contribution to technology
					communities
				</motion.p>

				{/* Major Awards */}
				<div className="grid md:grid-cols-3 gap-8 mb-20">
					{awards.map((award, index) => (
						<motion.div
							key={award.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: index * 0.2 }}
							whileHover={{ y: -10 }}
							className="relative group"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${award.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
							/>
							<div className="relative p-8 glass rounded-3xl border border-border hover:border-green-500/50 transition-all h-full">
								<div
									className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center`}
								>
									<award.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-2xl font-bold mb-2 text-gradient">
									{award.title}
								</h3>
								<p className="text-sm text-green-400 mb-4">
									{award.organization}
								</p>
								<p className="text-muted-foreground mb-4">
									{award.description}
								</p>
								<p className="text-sm font-semibold text-foreground/60">
									{award.date}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Certifications */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6 }}
					className="glass rounded-3xl p-8"
				>
					<h3 className="text-3xl font-bold mb-8 text-center">
						Professional <span className="text-gradient">Certifications</span>
					</h3>
					<div className="grid sm:grid-cols-2 gap-4">
						{certifications.map((cert, index) => (
							<motion.div
								key={cert}
								initial={{ opacity: 0, x: -20 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.8 + index * 0.1 }}
								className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-green-500/10 transition-colors"
							>
								<div className="w-2 h-2 bg-green-500 rounded-full" />
								<p className="text-foreground/80">{cert}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}