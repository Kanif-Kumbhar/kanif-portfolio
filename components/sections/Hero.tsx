// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";

// Custom icon components
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

// Typing animation component
function AnimatedTitle() {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "KANIF KUMBHAR";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText.length]);

    return (
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            <span className="text-gradient glow-text">{displayedText}</span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400"
            >
                |
            </motion.span>
        </h1>
    );
}

// Animated subtitle with word-by-word reveal
function AnimatedSubtitle() {
    const words = [
        "Full-Stack Developer",
        "AI/ML Enthusiast",
        "Cyber Security Advocate",
    ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="h-12 sm:h-14 mb-4 overflow-hidden">
            <motion.div
                key={currentWordIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400"
            >
                {words[currentWordIndex]}
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
        >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: 1,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                {/* Profile Image with Multiple Layers */}
                <motion.div
                    variants={item}
                    className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8"
                >
                    {/* Rotating ring 1 */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-green-400/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Rotating ring 2 */}
                    <motion.div
                        className="absolute inset-2 rounded-full border-2 border-emerald-400/20"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Pulsing glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 blur-2xl opacity-50"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Profile image with proper circular crop */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-full h-full"
                    >
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-green-500/50 shadow-2xl shadow-green-500/50">
                            <Image
                                src="/profile.jpg"
                                alt="Kanif Kumbhar"
                                width={192}
                                height={192}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Orbiting dots */}
                    {[0, 120, 240].map((angle, index) => (
                        <motion.div
                            key={angle}
                            className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                            style={{
                                top: "50%",
                                left: "50%",
                            }}
                            animate={{
                                x: [
                                    Math.cos((angle * Math.PI) / 180) * 100,
                                    Math.cos(((angle + 360) * Math.PI) / 180) * 100,
                                ],
                                y: [
                                    Math.sin((angle * Math.PI) / 180) * 100,
                                    Math.sin(((angle + 360) * Math.PI) / 180) * 100,
                                ],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                                delay: index * 0.3,
                            }}
                        />
                    ))}
                </motion.div>

                {/* Animated Name */}
                <motion.div variants={item}>
                    <AnimatedTitle />
                </motion.div>

                {/* Degree Info with slide-in animation */}
                <motion.div variants={item} className="mb-4 overflow-hidden">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p className="text-lg sm:text-xl text-green-400 font-semibold mb-1">
                            Master of Computer Applications
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Government College of Engineering, Karad
                        </p>
                    </motion.div>
                </motion.div>

                {/* Animated rotating subtitle */}
                <motion.div variants={item}>
                    <AnimatedSubtitle />
                </motion.div>

                {/* Tagline with reveal effect */}
                <motion.div variants={item} className="mb-8 overflow-hidden">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto"
                    >
                        <span className="text-green-400 font-semibold">
                            Building innovative solutions
                        </span>{" "}
                        that make a difference
                    </motion.p>
                </motion.div>

                {/* CTA Buttons with stagger effect */}
                <motion.div
                    variants={item}
                    className="flex gap-3 justify-center flex-wrap mb-8"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 60px rgba(34, 197, 94, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-sm overflow-hidden shadow-lg shadow-green-500/50"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.a>

                    <motion.a
                        href="/Kanif_Kumbhar_Resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 glass rounded-full font-semibold text-sm hover:bg-green-500/20 transition-all flex items-center gap-2 border border-green-500/30 hover:border-green-500"
                    >
                        <Download className="w-4 h-4" />
                        Download CV
                    </motion.a>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-green-500 rounded-full font-semibold text-sm hover:bg-green-500/10 transition-colors"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Social Links with hover effects */}
                <motion.div variants={item} className="flex gap-4 justify-center mb-16">
                    {[
                        {
                            icon: GithubIcon,
                            href: "https://github.com/Kanif-Kumbhar",
                            label: "GitHub",
                        },
                        {
                            icon: LinkedinIcon,
                            href: "https://www.linkedin.com/in/kanifkumbhar2345",
                            label: "LinkedIn",
                        },
                        {
                            icon: Mail,
                            href: "mailto:mr.kanifkumbhar@gmail.com",
                            label: "Email",
                        },
                    ].map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2 + index * 0.1 }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 360,
                                backgroundColor: "rgba(34, 197, 94, 0.2)",
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 glass rounded-full transition-all duration-300"
                            aria-label={social.label}
                        >
                            {social.label === "Email" ? (
                                <social.icon className="w-5 h-5 text-green-400" />
                            ) : (
                                <social.icon />
                            )}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onClick={() =>
                            document
                                .getElementById("about")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        <span className="text-xs text-muted-foreground">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex items-start justify-center p-1.5">
                            <motion.div className="w-1.5 h-2 bg-green-500 rounded-full" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}