"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
	{
		category: "Frontend & App Development",
		skills: [
			"JavaScript",
			"TypeScript",
			"React.js",
			"Next.js",
			"React Native",
			"Expo",
			"TailwindCSS",
			"Framer Motion",
		],
		color: "from-blue-400 to-cyan-500",
	},
	{
		category: "Backend & Databases",
		skills: [
			"Django",
			"Express.js",
			"Node.js",
			"PostgreSQL",
			"MongoDB",
			"Prisma ORM",
			"Firebase",
			"REST APIs",
		],
		color: "from-green-400 to-emerald-500",
	},
	{
		category: "AI/ML & Data Science",
		skills: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"NumPy",
			"Pandas",
			"OpenCV",
			"Machine Learning",
			"Deep Learning",
		],
		color: "from-purple-400 to-pink-500",
	},
	{
		category: "Tools & Platforms",
		skills: [
			"Git",
			"GitHub",
			"Linux",
			"Docker",
			"VS Code",
			"Postman",
			"Vercel",
			"Firebase",
		],
		color: "from-orange-400 to-red-500",
	},
];

export default function Skills() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="skills"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-green-950/10"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-5xl sm:text-7xl font-bold mb-4 text-center font-[family-name:var(--font-space-grotesk)]"
				>
					Technical <span className="text-gradient">Skills</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
					className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
				>
					Expertise in modern technologies and frameworks for building scalable,
					production-ready applications
				</motion.p>

				<div className="grid md:grid-cols-2 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.category}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
							className="relative group"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
							/>
							<div className="relative p-8 glass rounded-3xl border border-border hover:border-green-500/50 transition-all">
								<h3 className="text-2xl font-bold mb-6 text-gradient">
									{category.category}
								</h3>
								<div className="flex flex-wrap gap-3">
									{category.skills.map((skill, index) => (
										<motion.div
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={isInView ? { opacity: 1, scale: 1 } : {}}
											transition={{
												duration: 0.3,
												delay: categoryIndex * 0.1 + index * 0.05,
											}}
											whileHover={{ scale: 1.1, y: -5 }}
											className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-full text-sm font-medium text-foreground/90 hover:border-green-500 hover:bg-green-500/20 transition-all cursor-default"
										>
											{skill}
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}