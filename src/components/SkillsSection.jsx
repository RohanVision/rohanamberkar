import { useState } from "react";
import { cn } from "@/lib/utils";
import { categories, skillData } from "../lib/constants";

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const filteredSkills = skillData.filter((skill) => {
		return activeCategory === "all" || skill.category === activeCategory;
	});

	return (
		<section id="skills" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2
					className="text-3xl md:text-4xl font-bold
                 text-center mb-12"
				>
					<span className="text-primary">Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-4">
					{categories.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category)}
							className={cn(
								"input-gradient-shadow px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
								activeCategory === category
									? "bg-primary text-primary-foreground"
									: "bg-secondary/70 text-foreground hover:bg-secondary"
							)}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 bg-secondary border input-gradient-shadow p-4 rounded-xl">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="w-20 h-20 group relative p-2 bg-background rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
						>
							<img
								className="w-8 h-8 object-contain"
								src={skill.image}
								alt={skill.name}
							/>
							{/* Tooltip */}
							<div className="absolute bottom-full mb-2 px-2 py-1 text-xs bg-foreground text-background rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
								{skill.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
