"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add your form submission logic here
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
			setFormState({ name: "", email: "", message: "" });
		}, 3000);
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "mr.kanifkumbhar@gmail.com",
			href: "mailto:mr.kanifkumbhar@gmail.com",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+91 8329934420",
			href: "tel:+918329934420",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Panjim, Goa, India",
			href: "#",
		},
	];

	return (
		<section
			id="contact"
			className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-green-950/10"
			ref={ref}
		>
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-5xl sm:text-7xl font-bold mb-4 text-center font-[family-name:var(--font-space-grotesk)]"
				>
					Get In <span className="text-gradient">Touch</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.2 }}
					className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
				>
					Let&apos;s discuss your next project or collaboration opportunity
				</motion.p>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3 }}
						className="space-y-8"
					>
						<div className="glass rounded-3xl p-8">
							<h3 className="text-2xl font-bold mb-6 text-gradient">
								Contact Information
							</h3>
							<div className="space-y-6">
								{contactInfo.map((item, index) => (
									<motion.a
										key={item.label}
										href={item.href}
										initial={{ opacity: 0, x: -20 }}
										animate={isInView ? { opacity: 1, x: 0 } : {}}
										transition={{ delay: 0.4 + index * 0.1 }}
										whileHover={{ x: 10 }}
										className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-500/10 transition-colors group"
									>
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
											<item.icon className="w-6 h-6 text-white" />
										</div>
										<div>
											<p className="text-sm text-muted-foreground">
												{item.label}
											</p>
											<p className="text-lg font-semibold text-foreground">
												{item.value}
											</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ delay: 0.7 }}
							className="glass rounded-3xl p-8"
						>
							<h3 className="text-2xl font-bold mb-6 text-gradient">
								Available For
							</h3>
							<ul className="space-y-3">
								{[
									"Full-time Opportunities",
									"Internships",
									"Freelance Projects",
									"Research Collaborations",
									"Speaking Engagements",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-3 text-foreground/80"
									>
										<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.5 }}
					>
						<div className="glass rounded-3xl p-8">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-semibold mb-2 text-foreground/80"
									>
										Your Name
									</label>
									<input
										type="text"
										id="name"
										value={formState.name}
										onChange={(e) =>
											setFormState({ ...formState, name: e.target.value })
										}
										required
										className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:border-green-500 focus:outline-none transition-colors text-foreground"
										placeholder="John Doe"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-semibold mb-2 text-foreground/80"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										value={formState.email}
										onChange={(e) =>
											setFormState({ ...formState, email: e.target.value })
										}
										required
										className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:border-green-500 focus:outline-none transition-colors text-foreground"
										placeholder="john@example.com"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-semibold mb-2 text-foreground/80"
									>
										Message
									</label>
									<textarea
										id="message"
										value={formState.message}
										onChange={(e) =>
											setFormState({ ...formState, message: e.target.value })
										}
										required
										rows={6}
										className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none text-foreground"
										placeholder="Tell me about your project..."
									/>
								</div>

								<motion.button
									type="submit"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									disabled={submitted}
									className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-shadow flex items-center justify-center gap-2 disabled:opacity-50"
								>
									{submitted ? (
										<>
											<CheckCircle className="w-5 h-5" />
											Message Sent!
										</>
									) : (
										<>
											<Send className="w-5 h-5" />
											Send Message
										</>
									)}
								</motion.button>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}