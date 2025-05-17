import { ArrowUp, HeartIcon } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
			<div className="container mx-auto max-w-8xl flex flex-wrap justify-between items-center">
				<p className="flex items-center text-sm text-muted-foreground font-semibold">
					Built with{" "}
					<span className="text-primary px-2">React.js</span>
					<span>
						<HeartIcon size={16} />
					</span>
				</p>
				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} Rohan Amberkar
				</p>
				<a
					href="#about"
					className="p-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white transition-colors"
				>
					<ArrowUp size={20} />
				</a>
			</div>
		</footer>
	);
};
