"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import { Shield, Users, BookOpen } from "lucide-react";

export default function QuickHeal() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="quickheal"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-green-950/10"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center gap-4 mb-4">
						<Shield className="w-12 h-12 text-green-400" />
						<h2 className="text-5xl sm:text-7xl font-bold font-[family-name:var(--font-space-grotesk)]">
							<span className="text-gradient">Cyber Warrior</span>
						</h2>
					</div>
					<p className="text-2xl text-green-400 font-semibold mb-4">
						Cyber Shiksha for Cyber Suraksha Initiative
					</p>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Quick Heal Foundation | Empowering communities with cybersecurity
						awareness
					</p>
				</motion.div>

				{/* Achievement Highlight */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ delay: 0.2 }}
					className="glass rounded-3xl p-8 mb-16 border-2 border-green-500/30"
				>
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-3xl font-bold mb-6">
								Guest Lecture &{" "}
								<span className="text-gradient">Recognition</span>
							</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
									<p className="text-lg text-foreground/80">
										Delivered guest lecture on{" "}
										<span className="text-green-400 font-semibold">
											Cyber Security
										</span>{" "}
										at Late Adv. Dadasaheb Chavan Memorial Institute Of
										Pharmacy, Masur
									</p>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
									<p className="text-lg text-foreground/80">
										Received{" "}
										<span className="text-green-400 font-semibold">
											Letter of Appreciation
										</span>{" "}
										and{" "}
										<span className="text-green-400 font-semibold">
											Memento
										</span>{" "}
										for exceptional contribution
									</p>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
									<p className="text-lg text-foreground/80">
										Conducted multiple awareness sessions in schools, colleges,
										and community groups
									</p>
								</div>
							</div>
						</div>

						{/* Memento & Certificate Images */}
						<div className="grid grid-cols-2 gap-4">
							<motion.div
								whileHover={{ scale: 1.05, rotate: 2 }}
								className="relative h-64 glass rounded-2xl overflow-hidden border-2 border-green-500/30"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20 flex items-center justify-center">
									<p className="text-center text-muted-foreground p-4">
										Memento from
										<br />
										Institute of Pharmacy
									</p>
								</div>
								{/* Replace with actual image */}
								{/* <Image
                  src="/quickheal/memento.jpg"
                  alt="Memento"
                  fill
                  className="object-cover"
                /> */}
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.05, rotate: -2 }}
								className="relative h-64 glass rounded-2xl overflow-hidden border-2 border-green-500/30"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20 flex items-center justify-center">
									<p className="text-center text-muted-foreground p-4">
										Letter of
										<br />
										Appreciation
									</p>
								</div>
								{/* Replace with actual image */}
								{/* <Image
                  src="/quickheal/appreciation-letter.jpg"
                  alt="Letter of Appreciation"
                  fill
                  className="object-cover"
                /> */}
							</motion.div>
						</div>
					</div>
				</motion.div>

				{/* Lecture Gallery */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.4 }}
				>
					<h3 className="text-3xl font-bold mb-8 text-center">
						Community <span className="text-gradient">Engagement</span>
					</h3>

					<div className="grid md:grid-cols-3 gap-6">
						{[1, 2, 3].map((index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={isInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: 0.6 + index * 0.1 }}
								whileHover={{ y: -10 }}
								className="relative group"
							>
								<div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
								<div className="relative aspect-video glass rounded-2xl overflow-hidden border border-border hover:border-green-500/50 transition-all">
									<div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-emerald-900/20 flex flex-col items-center justify-center p-6">
										<BookOpen className="w-12 h-12 text-green-400 mb-4" />
										<p className="text-center text-foreground/80">
											Cybersecurity Session {index}
											<br />
											<span className="text-sm text-green-400">
												Quick Heal Foundation
											</span>
										</p>
									</div>
									{/* Replace with actual images */}
									{/* <Image
                    src={`/quickheal/lecture${index}.jpg`}
                    alt={`Cyber Security Lecture ${index}`}
                    fill
                    className="object-cover"
                  /> */}
								</div>
								<p className="mt-4 text-center text-sm text-muted-foreground">
									Educating students on digital safety and cyber threats
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Impact Stats */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8 }}
					className="mt-16 grid grid-cols-3 gap-8"
				>
					{[
						{ icon: Users, value: "500+", label: "Students Reached" },
						{ icon: BookOpen, value: "10+", label: "Sessions Conducted" },
						{ icon: Shield, value: "100%", label: "Community Impact" },
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ delay: 1 + index * 0.1 }}
							className="text-center p-6 glass rounded-2xl"
						>
							<stat.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
							<div className="text-4xl font-bold text-gradient mb-2">
								{stat.value}
							</div>
							<div className="text-sm text-muted-foreground">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}