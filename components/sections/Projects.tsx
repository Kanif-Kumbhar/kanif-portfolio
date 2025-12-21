"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
	{
		title: "Arogyam - AI Diet Planner",
		description:
			"AI-powered personalized diet planning mobile app based on Ayurvedic principles with Vedic food classification (Satvik, Rajsik, Tamsik). Features Gemini API integration for dynamic meal plans and barcode scanning with NutriScore.",
		tech: ["React Native", "Firebase", "Convex", "Expo", "Gemini API"],
		achievements: [
			"92% positive feedback in user testing",
			"35% boost in user engagement",
			"40% improvement in food awareness",
		],
		github: "#",
		demo: "#",
		color: "from-green-400 to-emerald-500",
	},
	{
		title: "VisionAI - Eye Disease Detection",
		description:
			"Deep learning model using MobileNetV3-Large to classify OCT retina scans into 4 categories (CNV, DME, DRUSEN, NORMAL). Achieved 97% accuracy with Flask REST API for real-time predictions.",
		tech: ["Python", "TensorFlow", "MobileNetV3", "OpenCV", "Flask", "Pandas"],
		achievements: [
			"97% classification accuracy",
			"F1-score: 0.95 (macro average)",
			"Real-time inference via REST API",
		],
		github: "#",
		demo: "#",
		color: "from-blue-400 to-cyan-500",
	},
	{
		title: "HariHar - Wildlife Monitoring",
		description:
			"AI-based acoustic detection system for preventing illegal logging and poaching. Edge-AI deployment on ESP32 with CNN model achieving 84.49% accuracy for 9 acoustic anomaly classes.",
		tech: [
			"React Native",
			"Firebase",
			"ESP32",
			"TensorFlow Lite",
			"IoT",
			"Machine Learning",
		],
		achievements: [
			"84.49% classification accuracy",
			"Sub-50ms inference time",
			"Real-time forest threat detection",
		],
		github: "#",
		demo: "#",
		color: "from-purple-400 to-pink-500",
	},
	{
		title: "Brickyard Management System",
		description:
			"Standalone C# desktop application to streamline inventory operations at brickyard. Implemented OOP principles with modular architecture, reducing manual tracking errors by 65%.",
		tech: ["C#", ".NET Framework", "ADO.NET", "MySQL", "Windows Forms"],
		achievements: [
			"65% reduction in tracking errors",
			"40% faster stock updates",
			"Intuitive CRUD operations",
		],
		github: "#",
		demo: "#",
		color: "from-orange-400 to-red-500",
	},
];

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="projects"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-5xl sm:text-7xl font-bold mb-4 text-center font-[family-name:var(--font-space-grotesk)]"
				>
					Featured <span className="text-gradient">Projects</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
					className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
				>
					Building innovative solutions that solve real-world problems
				</motion.p>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							whileHover={{ y: -10 }}
							className="relative group"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
							/>
							<div className="relative p-8 glass rounded-3xl border border-border hover:border-green-500/50 transition-all h-full flex flex-col">
								{/* Header */}
								<div className="mb-6">
									<h3 className="text-2xl font-bold mb-4 text-gradient group-hover:scale-105 transition-transform">
										{project.title}
									</h3>
									<p className="text-foreground/70 leading-relaxed">
										{project.description}
									</p>
								</div>

								{/* Tech Stack */}
								<div className="mb-6">
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400 font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								{/* Achievements */}
								<div className="mb-6 flex-grow">
									<h4 className="text-sm font-semibold text-green-400 mb-3">
										Key Achievements:
									</h4>
									<ul className="space-y-2">
										{project.achievements.map((achievement) => (
											<li
												key={achievement}
												className="flex items-start gap-2 text-sm text-foreground/70"
											>
												<span className="text-green-400 mt-1">✓</span>
												<span>{achievement}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Links */}
								<div className="flex gap-4 mt-auto">
									<motion.a
										href={project.github}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/50 transition-shadow"
									>
										<Github className="w-4 h-4" />
										Code
									</motion.a>
									<motion.a
										href={project.demo}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex-1 px-4 py-3 border-2 border-green-500 rounded-xl font-semibold text-center flex items-center justify-center gap-2 hover:bg-green-500/10 transition-colors"
									>
										<ExternalLink className="w-4 h-4" />
										Demo
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}