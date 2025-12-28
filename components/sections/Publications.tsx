"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BookOpen, FileText, Award, Sparkles, ArrowRight } from "lucide-react";

const publications = [
	{
		type: "Conference Paper",
		title:
			"Comparative Analysis of CNNs and Vision Transformers for Brain Tumor Diagnosis using MRI",
		venue: "ICERECT-2025, P.E.S. College of Engineering, Mandya",
		status: "IEEE Xplore Digital Library",
		icon: Award,
		color: "#3b82f6",
		year: "2025",
		category: "AI/Healthcare",
	},
	{
		type: "Book Chapter",
		title:
			"Generative AI and Solar Energy: Shaping the Future of Sustainable Power",
		venue: "Solar Energy Optimization Using Generative AI",
		publisher: "Scrivener Publishing - Wiley",
		icon: BookOpen,
		color: "#22c55e",
		year: "2024",
		category: "AI/Energy",
	},
	{
		type: "Book Chapter",
		title: "Environmental Impact of PFAS",
		venue: "PFAS in the Modern World: Environmental Challenges, Health Impacts",
		publisher: "Nova Science Publishers",
		status: "Copyright Pending",
		icon: FileText,
		color: "#a855f7",
		year: "2024",
		category: "Environment",
	},
	{
		type: "Book Chapter",
		title: "Renewable Energy and FMEC Integration",
		venue: "FMEC: Fog, Mobile Edge, and Cloud Computing in Sustainability",
		status: "Copyright Pending",
		icon: Sparkles,
		color: "#f97316",
		year: "2024",
		category: "Cloud/Energy",
	},
];

export default function Publications() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setCurrentIndex((prev) => (prev + 1) % publications.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const handleSelect = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	const currentPub = publications[currentIndex];
	const CurrentIcon = currentPub.icon;

	return (
		<section
			id="publications"
			className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
			ref={ref}
		>
			{/* Animated mesh background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-green-950/5 to-background" />
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full blur-3xl"
						style={{
							width: 400,
							height: 400,
							background: currentPub.color,
							opacity: 0.1,
							left: `${20 + i * 30}%`,
							top: `${30 + i * 20}%`,
						}}
						animate={{
							x: [0, 100, 0],
							y: [0, -50, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i }}
					/>
				))}
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="mb-16"
				>
					<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
						<div>
							<motion.div
								className="inline-block px-4 py-2 mb-4 rounded-full text-sm font-mono border"
								style={{
									borderColor: currentPub.color,
									color: currentPub.color,
									background: `${currentPub.color}10`,
								}}
							>
								{publications.length} Publications
							</motion.div>
							<h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)]">
								Research <br />
								<span className="text-gradient">Portfolio</span>
							</h2>
						</div>
						<p className="text-muted-foreground max-w-md">
							Exploring intersections of AI, sustainability, and healthcare
							through academic research
						</p>
					</div>
				</motion.div>

				{/* Main Content - Magazine Layout */}
				<div className="grid lg:grid-cols-12 gap-8 items-start">
					{/* Left: Featured Publication */}
					<div className="lg:col-span-8">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: direction * 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", stiffness: 100, damping: 20 }}
							className="relative"
						>
							{/* Large Card */}
							<div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer">
								{/* Background gradient */}
								<motion.div
									className="absolute inset-0"
									style={{
										background: `linear-gradient(135deg, ${currentPub.color}40, ${currentPub.color}10)`,
									}}
								/>

								{/* Animated pattern */}
								<motion.div
									className="absolute inset-0 opacity-10"
									style={{
										backgroundImage: `radial-gradient(circle at 2px 2px, ${currentPub.color} 1px, transparent 0)`,
										backgroundSize: "40px 40px",
									}}
									animate={{
										backgroundPosition: ["0px 0px", "40px 40px"],
									}}
									transition={{
										duration: 20,
										repeat: Infinity,
										ease: "linear",
									}}
								/>

								{/* Content */}
								<div className="relative h-full p-8 sm:p-12 flex flex-col justify-between">
									{/* Top */}
									<div>
										<div className="flex items-center gap-3 mb-6">
											<motion.div
												className="w-14 h-14 rounded-2xl flex items-center justify-center"
												style={{ background: currentPub.color }}
												whileHover={{ rotate: 360, scale: 1.1 }}
												transition={{ duration: 0.6 }}
											>
												<CurrentIcon className="w-7 h-7 text-white" />
											</motion.div>
											<div>
												<div className="text-xs font-mono text-muted-foreground uppercase">
													{currentPub.type}
												</div>
												<div
													className="text-sm font-semibold"
													style={{ color: currentPub.color }}
												>
													{currentPub.category}
												</div>
											</div>
										</div>

										<h3 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
											{currentPub.title}
										</h3>
									</div>

									{/* Bottom */}
									<div>
										<p className="text-foreground/70 mb-4">
											{currentPub.venue}
										</p>
										{currentPub.publisher && (
											<p
												className="text-sm font-semibold mb-4"
												style={{ color: currentPub.color }}
											>
												{currentPub.publisher}
											</p>
										)}

										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<motion.div
													className="w-2 h-2 rounded-full"
													style={{ background: currentPub.color }}
													animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
													transition={{ duration: 2, repeat: Infinity }}
												/>
												<span
													className="text-sm font-mono"
													style={{ color: currentPub.color }}
												>
													{currentPub.status || currentPub.year}
												</span>
											</div>

											<motion.button
												className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm"
												style={{
													background: currentPub.color,
													color: "white",
												}}
												whileHover={{ scale: 1.05, gap: "12px" }}
												whileTap={{ scale: 0.95 }}
											>
												Read More
												<ArrowRight className="w-4 h-4" />
											</motion.button>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Right: Sidebar Navigation */}
					<div className="lg:col-span-4 space-y-4">
						{publications.map((pub, idx) => {
							const Icon = pub.icon;
							const isActive = idx === currentIndex;

							return (
								<motion.button
									key={idx}
									onClick={() => handleSelect(idx)}
									className="w-full text-left relative group"
									initial={{ opacity: 0, x: 50 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ delay: idx * 0.1 }}
									whileHover={{ x: 5 }}
								>
									<div
										className={`p-4 rounded-2xl border transition-all ${
											isActive
												? "border-opacity-100 bg-opacity-20"
												: "border-white/10 bg-black/20 hover:border-white/20"
										}`}
										style={{
											borderColor: isActive ? pub.color : undefined,
											background: isActive ? `${pub.color}15` : undefined,
										}}
									>
										<div className="flex items-start gap-3">
											<div
												className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
												style={{ background: `${pub.color}30` }}
											>
												<Icon
													className="w-5 h-5"
													style={{ color: pub.color }}
												/>
											</div>
											<div className="flex-1 min-w-0">
												<div className="text-xs font-mono text-muted-foreground mb-1">
													{pub.year} • {pub.type}
												</div>
												<h4
													className={`text-sm font-bold line-clamp-2 ${
														isActive ? "" : "text-muted-foreground"
													}`}
												>
													{pub.title}
												</h4>
											</div>
										</div>

										{/* Active indicator */}
										{isActive && (
											<motion.div
												layoutId="activeBar"
												className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
												style={{ background: pub.color }}
											/>
										)}
									</div>
								</motion.button>
							);
						})}
					</div>
				</div>

				{/* Progress Indicators */}
				<div className="mt-12 flex justify-center gap-2">
					{publications.map((pub, idx) => (
						<div key={idx} className="relative">
							<button
								onClick={() => handleSelect(idx)}
								className="w-16 h-1 rounded-full bg-white/10 overflow-hidden"
							>
								{currentIndex === idx && (
									<motion.div
										className="h-full rounded-full"
										style={{ background: pub.color }}
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ duration: 5, ease: "linear" }}
									/>
								)}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}