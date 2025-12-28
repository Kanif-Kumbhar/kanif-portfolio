"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import {
	Trophy,
	Star,
	Award,
	Sparkles,
	Medal,
	Crown,
	Zap,
	Target,
	Flame,
} from "lucide-react";

const awards = [
	{
		title: "K! Hacks 2025",
		subtitle: "National Finalist",
		organization: "College of Engineering Guindy",
		location: "Anna University, Chennai",
		achievement:
			"Small Business Credit Score System - Recognized among India's top innovative projects",
		date: "January 2025",
		icon: Trophy,
		color: "#FFD700",
		ringColor: "#FFA500",
		emoji: "🏆",
	},
	{
		title: "Google Cloud",
		subtitle: "Agentic AI Day 2025",
		organization: "Google Cloud India",
		location: "Innovation Recognition",
		achievement:
			"Acknowledged for exceptional contribution in AI-driven solutions and innovation mindset",
		date: "2025",
		icon: Zap,
		color: "#4285F4",
		ringColor: "#34A853",
		emoji: "⚡",
	},
	{
		title: "GirlScript SoC",
		subtitle: "Open Source Contributor",
		organization: "GirlScript Foundation",
		location: "National Program 2025",
		achievement:
			"Selected contributor for impactful open-source contributions to community projects",
		date: "2025",
		icon: Target,
		color: "#FF6B9D",
		ringColor: "#FF1493",
		emoji: "🎯",
	},
];

const certifications = [
	{
		name: "Oracle Cloud Infrastructure AI Foundations",
		issuer: "Oracle",
		year: "2025",
		icon: Crown,
		color: "#F80000",
		badge: "Certified",
	},
	{
		name: "Data Analysis with Python",
		issuer: "NPTEL - IIT",
		year: "2024",
		icon: Medal,
		color: "#3b82f6",
		badge: "Elite",
	},
	{
		name: "Artificial Intelligence & Machine Learning",
		issuer: "AICTE Internship",
		year: "2024",
		icon: Flame,
		color: "#22c55e",
		badge: "6 Weeks",
	},
	{
		name: "AI Fundamentals Specialization",
		issuer: "IBM SkillsBuild",
		year: "2024",
		icon: Star,
		color: "#a855f7",
		badge: "Verified",
	},
];

function AwardCard({
	award,
	index,
}: {
	award: (typeof awards)[0];
	index: number;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);
	const Icon = award.icon;

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
	};

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="relative group"
		>
			{/* Subtle cursor spotlight - REDUCED OPACITY */}
			{isHovered && (
				<motion.div
					className="absolute inset-0 rounded-3xl pointer-events-none"
					style={{
						background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, ${award.color}15, transparent 60%)`,
					}}
				/>
			)}

			{/* Main Card */}
			<motion.div
				className="relative p-8 rounded-3xl border backdrop-blur-xl overflow-hidden h-full"
				style={{
					background:
						"linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
					borderColor: `${award.color}30`,
				}}
				whileHover={{ scale: 1.02, y: -10 }}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				{/* Animated corner decorations */}
				<motion.div
					className="absolute top-4 right-4 w-2 h-2 rounded-full"
					style={{ background: award.color }}
					animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
					transition={{ duration: 2, repeat: Infinity }}
				/>
				<motion.div
					className="absolute bottom-4 left-4 w-2 h-2 rounded-full"
					style={{ background: award.ringColor }}
					animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
				/>

				{/* Trophy icon with rotating rings */}
				<div className="relative w-28 h-28 mx-auto mb-6">
					{/* Outer rotating ring - REDUCED OPACITY */}
					<motion.div
						className="absolute inset-0 rounded-full border-2 border-dashed"
						style={{ borderColor: `${award.ringColor}30` }}
						animate={{ rotate: 360 }}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					/>

					{/* Middle ring - REDUCED OPACITY */}
					<motion.div
						className="absolute inset-2 rounded-full border-2"
						style={{
							borderColor: `${award.color}40`,
							boxShadow: `0 0 15px ${award.color}20`,
						}}
						animate={{ rotate: -360 }}
						transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
					/>

					{/* Inner glow - REDUCED OPACITY */}
					<motion.div
						className="absolute inset-4 rounded-full"
						style={{
							background: `radial-gradient(circle, ${award.color}30, transparent 70%)`,
						}}
						animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
						transition={{ duration: 2, repeat: Infinity }}
					/>

					{/* Icon in center */}
					<motion.div
						className="absolute inset-0 flex items-center justify-center"
						whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
						transition={{ duration: 0.5 }}
					>
						<div
							className="w-16 h-16 rounded-full flex items-center justify-center"
							style={{ background: award.color }}
						>
							<Icon className="w-8 h-8 text-white" />
						</div>
					</motion.div>
				</div>

				{/* Award badge */}
				<motion.div
					className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border backdrop-blur-sm"
					style={{
						borderColor: award.color,
						background: `${award.color}15`,
					}}
					whileHover={{ scale: 1.05 }}
				>
					<motion.div
						animate={{ rotate: [0, 360] }}
						transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
					>
						<Sparkles className="w-4 h-4" style={{ color: award.color }} />
					</motion.div>
					<span
						className="text-xs font-bold uppercase tracking-wider"
						style={{ color: award.color }}
					>
						{award.subtitle}
					</span>
				</motion.div>

				{/* Content */}
				<h3
					className="text-2xl sm:text-3xl font-bold mb-2"
					style={{ color: award.color }}
				>
					{award.title}
				</h3>

				<div className="space-y-1 mb-4">
					<p className="text-base sm:text-lg font-semibold text-foreground/90">
						{award.organization}
					</p>
					<p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
						<div
							className="w-1 h-1 rounded-full"
							style={{ background: award.color }}
						/>
						{award.location}
					</p>
				</div>

				<p className="text-sm text-foreground/70 leading-relaxed mb-6">
					{award.achievement}
				</p>

				{/* Date with icon */}
				<motion.div
					className="flex items-center gap-3 p-3 rounded-xl border"
					style={{
						borderColor: `${award.color}30`,
						background: `${award.color}08`,
					}}
					whileHover={{ x: 5 }}
				>
					<div
						className="w-10 h-10 rounded-lg flex items-center justify-center"
						style={{ background: award.color }}
					>
						<Award className="w-5 h-5 text-white" />
					</div>
					<div>
						<div className="text-xs text-muted-foreground uppercase tracking-wider">
							Achieved
						</div>
						<div className="font-bold" style={{ color: award.color }}>
							{award.date}
						</div>
					</div>
				</motion.div>

				{/* Subtle shine sweep - REDUCED OPACITY */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
					initial={{ x: "-100%" }}
					whileHover={{ x: "100%" }}
					transition={{ duration: 1 }}
					style={{
						background: `linear-gradient(90deg, transparent, ${award.color}08, transparent)`,
					}}
				/>
			</motion.div>
		</motion.div>
	);
}

export default function Awards() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<section
			id="awards"
			className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
			ref={ref}
		>
			{/* Premium background with animated gradients */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-amber-950/5 to-background" />

				{/* Animated beams - REDUCED OPACITY */}
				{[0, 1, 2, 3].map((i) => (
					<motion.div
						key={i}
						className="absolute w-px h-full"
						style={{
							left: `${25 * (i + 1)}%`,
							background: `linear-gradient(to bottom, transparent, ${
								i % 2 === 0 ? "#FFD700" : "#4285F4"
							}15, transparent)`,
						}}
						animate={{
							opacity: [0.05, 0.2, 0.05],
							scaleY: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 4 + i,
							repeat: Infinity,
							delay: i * 0.7,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Elegant Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-center mb-20"
				>
					{/* Decorative top line with icon */}
					<motion.div
						className="flex items-center justify-center gap-4 mb-8"
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{ duration: 1, delay: 0.2 }}
					>
						<div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500/50" />
						<motion.div
							className="relative"
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						>
							<div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
								<Trophy className="w-6 h-6 text-white" />
							</div>
							<motion.div
								className="absolute inset-0 rounded-full border-2 border-amber-400"
								animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
								transition={{ duration: 2, repeat: Infinity }}
							/>
						</motion.div>
						<div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500/50" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ delay: 0.3 }}
					>
						<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
							<span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
								Hall of Excellence
							</span>
						</h2>
						<p className="text-base sm:text-xl text-muted-foreground italic">
							Celebrating Innovation, Leadership & Impactful Contributions
						</p>
					</motion.div>
				</motion.div>

				{/* Awards Gallery */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
					{awards.map((award, index) => (
						<AwardCard key={index} award={award} index={index} />
					))}
				</div>

				{/* Certifications Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}
				>
					{/* Elegant divider */}
					<div className="flex items-center gap-4 mb-12">
						<div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/30 to-green-500/30" />
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
						>
							<Sparkles className="w-6 h-6 text-green-400" />
						</motion.div>
						<div className="h-px flex-1 bg-gradient-to-l from-transparent via-green-500/30 to-green-500/30" />
					</div>

					<h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
						Professional <span className="text-gradient">Credentials</span>
					</h3>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{certifications.map((cert, idx) => {
							const Icon = cert.icon;
							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: idx * 0.1,
										type: "spring",
										stiffness: 200,
									}}
									whileHover={{ y: -10, scale: 1.03 }}
									className="relative group h-full"
								>
									{/* Subtle glow - REDUCED OPACITY */}
									<motion.div
										className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"
										style={{ background: cert.color }}
									/>

									{/* Card - Added h-full and flex flex-col */}
									<div
										className="relative p-6 rounded-2xl border backdrop-blur-xl overflow-hidden h-full flex flex-col"
										style={{
											background: `linear-gradient(135deg, ${cert.color}08, transparent)`,
											borderColor: `${cert.color}40`,
										}}
									>
										{/* Badge */}
										<div
											className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold"
											style={{
												background: `${cert.color}20`,
												color: cert.color,
											}}
										>
											{cert.badge}
										</div>

										{/* Icon with pulse effect */}
										<motion.div
											className="relative w-16 h-16 mb-4 rounded-xl flex items-center justify-center"
											style={{ background: `${cert.color}15` }}
											whileHover={{ rotate: [0, -10, 10, 0] }}
											transition={{ duration: 0.5 }}
										>
											<Icon className="w-8 h-8" style={{ color: cert.color }} />

											{/* Subtle pulse ring */}
											<motion.div
												className="absolute inset-0 rounded-xl border-2"
												style={{ borderColor: `${cert.color}40` }}
												animate={{
													scale: [1, 1.15, 1],
													opacity: [0.5, 0, 0.5],
												}}
												transition={{ duration: 2, repeat: Infinity }}
											/>
										</motion.div>

										{/* Content - flex-grow to push footer down */}
										<div className="flex-grow">
											<h4 className="font-bold text-sm mb-2 leading-tight">
												{cert.name}
											</h4>
										</div>

										{/* Footer - stays at bottom */}
										<div className="flex items-center justify-between text-xs mt-auto">
											<p className="text-muted-foreground">{cert.issuer}</p>
											<motion.span
												className="font-bold px-2 py-1 rounded"
												style={{
													color: cert.color,
													background: `${cert.color}15`,
												}}
												whileHover={{ scale: 1.1 }}
											>
												{cert.year}
											</motion.span>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}