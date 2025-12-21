"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Award } from "lucide-react";

const publications = [
	{
		type: "Conference Paper",
		title:
			"Comparative Analysis of CNNs and Vision Transformers for Brain Tumor Diagnosis using MRI",
		venue: "ICERECT-2025, P.E.S. College of Engineering, Mandya, Karnataka",
		status: "Accepted for inclusion in IEEE Xplore Digital Library",
		icon: Award,
		color: "from-blue-400 to-indigo-500",
	},
	{
		type: "Book Chapter",
		title:
			"Generative AI and Solar Energy: Shaping the Future of Sustainable Power",
		venue: "Solar Energy Optimization Using Generative Artificial Intelligence",
		publisher: "Scrivener Publishing - Wiley",
		icon: BookOpen,
		color: "from-green-400 to-emerald-500",
	},
	{
		type: "Book Chapter",
		title: "Environmental Impact of PFAS",
		venue:
			"PFAS in the Modern World: Environmental Challenges, Health Impacts, and Pathways to Safer Alternatives",
		publisher: "Nova Science Publishers",
		status: "Copyright Pending",
		icon: FileText,
		color: "from-purple-400 to-pink-500",
	},
	{
		type: "Book Chapter",
		title: "Renewable Energy and FMEC Integration",
		venue:
			"FMEC: Fog, Mobile Edge, and Cloud Computing in Environmental Sustainability",
		status: "Copyright Pending",
		icon: FileText,
		color: "from-orange-400 to-red-500",
	},
];

export default function Publications() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="publications"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-5xl sm:text-7xl font-bold mb-4 text-center font-[family-name:var(--font-space-grotesk)]"
				>
					Research & <span className="text-gradient">Publications</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
					className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
				>
					Contributing to academic research in AI, environmental sustainability,
					and healthcare
				</motion.p>

				<div className="grid md:grid-cols-2 gap-8">
					{publications.map((pub, index) => (
						<motion.div
							key={pub.title}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.2 + index * 0.1 }}
							whileHover={{ y: -10 }}
							className="relative group"
						>
							<div
								className={`absolute inset-0 bg-gradient-to-br ${pub.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
							/>
							<div className="relative p-8 glass rounded-3xl border border-border hover:border-green-500/50 transition-all h-full">
								<div
									className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${pub.color} flex items-center justify-center`}
								>
									<pub.icon className="w-7 h-7 text-white" />
								</div>

								<div className="mb-4">
									<span className="text-sm font-semibold text-green-400 uppercase tracking-wide">
										{pub.type}
									</span>
								</div>

								<h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-colors">
									{pub.title}
								</h3>

								<div className="space-y-2 text-sm text-muted-foreground">
									<p className="flex items-start gap-2">
										<span className="text-green-400">•</span>
										<span>{pub.venue}</span>
									</p>
									{pub.publisher && (
										<p className="flex items-start gap-2">
											<span className="text-green-400">•</span>
											<span>{pub.publisher}</span>
										</p>
									)}
									{pub.status && (
										<p className="flex items-start gap-2">
											<span className="text-yellow-400">⏳</span>
											<span className="text-yellow-400">{pub.status}</span>
										</p>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}