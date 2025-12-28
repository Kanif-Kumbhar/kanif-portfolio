"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { Code2, Database, Brain, Wrench } from "lucide-react";

const skillCategories = [
    {
        category: "Frontend & App",
        icon: Code2,
        skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Expo", "TailwindCSS", "Framer Motion"],
        color: "#3b82f6",
    },
    {
        category: "Backend & DB",
        icon: Database,
        skills: ["Django", "Express.js", "Node.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Firebase", "REST APIs"],
        color: "#22c55e",
    },
    {
        category: "AI/ML & Data",
        icon: Brain,
        skills: ["Python", "TensorFlow", "PyTorch", "NumPy", "Pandas", "OpenCV", "Machine Learning", "Deep Learning"],
        color: "#a855f7",
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "Postman", "Vercel", "CI/CD"],
        color: "#f97316",
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
            ref={ref}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Technologies I work with to build exceptional digital experiences
                    </p>
                </motion.div>

                {/* Skills Bento Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {skillCategories.map((category, idx) => (
                        <SkillCard
                            key={category.category}
                            category={category}
                            idx={idx}
                            isInView={isInView}
                        />
                    ))}
                </div>

                {/* Quick Stats - Updated for Fresher */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-12"
                >
                    {[
                        { label: "Technologies", value: "30+" },
                        { label: "Projects Built", value: "10+" },
                        { label: "Internships", value: "3+" },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="text-3xl sm:text-4xl font-bold text-gradient mb-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.8 + idx * 0.1, type: "spring" }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// Separate component for each skill card with spotlight effect
function SkillCard({ category, idx, isInView }: { category: typeof skillCategories[0]; idx: number; isInView: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const Icon = category.icon;

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
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative group"
        >
            {/* Card */}
            <div className="relative p-6 sm:p-8 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/5 group-hover:border-white/10 transition-all overflow-hidden">
                {/* Cursor-following spotlight effect */}
                {isHovering && (
                    <motion.div
                        className="absolute pointer-events-none rounded-full"
                        style={{
                            width: "300px",
                            height: "300px",
                            left: mousePosition.x,
                            top: mousePosition.y,
                            x: "-50%",
                            y: "-50%",
                            background: `radial-gradient(circle, ${category.color}40 0%, ${category.color}20 20%, transparent 70%)`,
                            filter: "blur(20px)",
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}

                {/* Header */}
                <div className="relative flex items-center gap-3 mb-6">
                    <motion.div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </motion.div>
                    <h3 className="text-xl font-bold" style={{ color: category.color }}>
                        {category.category}
                    </h3>
                </div>

                {/* Skills - Flowing Pills */}
                <div className="relative flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                delay: idx * 0.1 + skillIdx * 0.03,
                                type: "spring",
                                stiffness: 200,
                            }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm cursor-default transition-all"
                            style={{
                                backgroundColor: `${category.color}15`,
                                border: `1px solid ${category.color}30`,
                                color: category.color,
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: category.color }}
                    initial={{ scaleX: 0 }}
                    animate={isHovering ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
}