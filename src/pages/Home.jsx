import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ExperiencesSection } from "../components/ExperiencesSection";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";

export const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme Toggle */}
			<ThemeToggle />
			{/* Background Effects */}
			<StarBackground />
			{/* NavBar */}
			<Navbar />
			{/* Main Content */}
			<main>
				<HeroSection />
				<SkillsSection />
				<ExperiencesSection />
				<ProjectSection />
				<EducationSection />
				<ContactSection />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
};
