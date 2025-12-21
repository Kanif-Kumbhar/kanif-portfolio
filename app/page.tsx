// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Awards from "@/components/sections/Awards";
import QuickHeal from "@/components/sections/QuickHeal";
import Contact from "@/components/sections/Contact";
import ParticleBackground from "@/components/3d/ParticleBackground";

export default function Home() {
	return (
		<>
			<ParticleBackground />
			<main className="relative">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Publications />
				<Awards />
				<QuickHeal />
				<Contact />
			</main>
		</>
	);
}
