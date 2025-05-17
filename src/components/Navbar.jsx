import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../lib/constants";
import site_logo from "../assets/site_logo.png";
import HeroImage from "../assets/profile.png";

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={cn(
				"fixed w-full z-40 transistion-all duration-300",
				isScrolled ? "bg-background backdrop-blur-md shadow-xs" : ""
			)}
		>
			<div className="container flex items-center justify-between">
				<a
					className="w-12 text-xl font-bold text-primary flex items-center"
					href="#about"
				>
					{/* <img
						className="w-12 object-contain"
						src={site_logo}
						alt="Rohan Amberkar"
					/> */}

					<img
						className="w-12 object-contain hidden dark:block bg-primary"
						src={site_logo}
						alt="Rohan Amberkar"
					/>
					{/* Dark mode logo */}
					<img
						className="w-12 object-contain hidden dark:hidden"
						src={HeroImage}
						alt="Rohan Amberkar - Dark"
					/>
				</a>

				{/* Desktop Nav */}
				<div className="hidden md:flex space-x-8 px-4 font-semibold">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
				</div>

				{/* Mobile Nav */}
				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden p-2 text-foreground z-50 cursor-pointer"
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				>
					{isMenuOpen ? <X size={30} /> : <Menu size={30} />}
				</button>
				<div
					className={cn(
						"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}
				>
					<div className="flex flex-col space-y-8">
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.href}
								className="text-foreground/80 hover:text-primary transition-colors duration-300"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
