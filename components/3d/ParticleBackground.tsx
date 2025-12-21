"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const particlesCount = 5000;
const generatePositions = () => {
	const positions = new Float32Array(particlesCount * 3);
	for (let i = 0; i < particlesCount; i++) {
		positions[i * 3] = (Math.random() - 0.5) * 10;
		positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
		positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
	}
	return positions;
};

const particlePositions = generatePositions();

function Particles() {
	const ref = useRef<THREE.Points>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x -= delta / 10;
			ref.current.rotation.y -= delta / 15;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={particlePositions}
				stride={3}
				frustumCulled={false}
			>
				<PointMaterial
					transparent
					color="#22c55e"
					size={0.015}
					sizeAttenuation={true}
					depthWrite={false}
					opacity={0.6}
				/>
			</Points>
		</group>
	);
}

export default function ParticleBackground() {
	return (
		<div className="fixed inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 1] }} className="!fixed !inset-0">
				<Particles />
			</Canvas>
		</div>
	);
}