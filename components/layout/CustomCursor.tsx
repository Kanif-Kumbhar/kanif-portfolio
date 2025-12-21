"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
	const [isHovering, setIsHovering] = useState(false);
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = { damping: 25, stiffness: 700 };
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX - 16);
			cursorY.set(e.clientY - 16);
		};

		const handleMouseEnter = () => setIsHovering(true);
		const handleMouseLeave = () => setIsHovering(false);

		window.addEventListener("mousemove", moveCursor);

		// Add hover effect to interactive elements
		const interactiveElements = document.querySelectorAll(
			'a, button, [role="button"], input, textarea'
		);

		interactiveElements.forEach((el) => {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		});

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			interactiveElements.forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			});
		};
	}, [cursorX, cursorY]);

	return (
		<>
			{/* Main cursor dot */}
			<motion.div
				className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
				style={{
					x: cursorXSpring,
					y: cursorYSpring,
				}}
			>
				<motion.div
					animate={{
						scale: isHovering ? 1.5 : 1,
					}}
					className="relative h-8 w-8"
				>
					{/* Inner dot */}
					<motion.div
						className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400"
						animate={{
							scale: isHovering ? 0.5 : 1,
						}}
					/>
					{/* Outer ring */}
					<motion.div
						className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-400"
						animate={{
							scale: isHovering ? 1.5 : 1,
						}}
					/>
				</motion.div>
			</motion.div>

			{/* Trailing effect */}
			<motion.div
				className="pointer-events-none fixed left-0 top-0 z-[9998] h-6 w-6 rounded-full bg-green-400/30 blur-md"
				style={{
					x: cursorXSpring,
					y: cursorYSpring,
				}}
			/>
		</>
	);
}