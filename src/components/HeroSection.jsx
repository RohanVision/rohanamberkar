import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/resume/RohanAmberkar.pdf";
import HeroImage from "../assets/profile.png";

export const HeroSection = () => {
	return (
		<section
			id="about"
			className="relative min-h-screen flex items-center justify-center px-4"
		>
			<div className="container mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-5 gap-8 items-center z-10">
				{/* Left: Image */}
				<div className="col-span-2 flex justify-center md:justify-center">
					<img
						src={HeroImage}
						alt="Rohan Amberkar"
						className="home__image w-64 h-64 object-cover rounded-full border-4 border-primary shadow-xl"
					/>
				</div>

				{/* Right: Content */}
				<div className="col-span-3 space-y-6 text-center md:text-left">
					<div className="flex flex-wrap justify-center md:justify-start items-center text-4xl md:text-5xl font-bold leading-tight">
						<span>
							<TypeAnimation
								sequence={[
									"Hello,",
									1500,
									"नमस्ते,",
									1500,
									"Bonjour,",
									1500,
									"Hola,",
									1500,
									"Hallo,",
									1500,
									"Ciao,",
									1500,
								]}
								wrapper="span"
								speed={40}
								repeat={Infinity}
								className="inline-block"
							/>
						</span>
						<span className="text-gradient">I'm</span>
						<span className="text-primary ml-2">Rohan</span>
					</div>

					<div>
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 my-4">
							I am a Front-End Developer from Toronto with a track
							record of 6+ years in developing websites across
							diverse categories, including blogs, e-commerce,
							dashboards, and static sites. I love solving complex
							problems with cutting-edge web technologies,
							implementing challenging UI interactions and
							components; and collaborating with talented teams.
						</p>
						<p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
							I am always eager to learn new skills and explore
							new challenges. Currently, I'm keen on delving into
							backend technologies, CI/CD, and database
							development as I am inclined to become a fullstack
							developer in the future.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex space-x-4 justify-center items-center md:justify-start">
						<a
							href="https://www.linkedin.com/in/rohanamberkar/"
							target="_blank"
							className="hover:text-primary"
						>
							<Linkedin size={30} />
						</a>
						<a
							href="https://github.com/RohanVision"
							target="_blank"
							className="hover:text-primary"
						>
							<Github size={30} />
						</a>
						<a
							className="cosmic-button hover:bg-purple-500"
							href="#projects"
						>
							View My Work
						</a>
						<a
							href={CV}
							className="flex items-center gap-3 px-8 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
						>
							Resume <Download size={14} />
						</a>
					</div>
				</div>
			</div>

			{/* Scroll Down Icon */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span className="text-md text-muted-foreground mb-2 font-semibold">
					Scroll Down
				</span>
				<a href="#skills">
					<ArrowDown className="h-5 w-5 text-primary cursor-pointer" />
				</a>
			</div>
		</section>
	);
};
