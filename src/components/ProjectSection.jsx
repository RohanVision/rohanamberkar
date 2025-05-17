import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { projects } from "../lib/constants";
import { useState } from "react";

export const ProjectSection = () => {
	const [openModal, setOpenModal] = useState(null);
	const handleModal = (project) => {
		setOpenModal(project);
	};

	const handleClose = () => {
		setOpenModal(null);
	};

	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					<span className="text-primary">Portfolio</span>
				</h2>
				{/* Project Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{projects.map((project) => (
						<div
							key={project.id}
							onClick={() => handleModal(project)}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							<div className="p-6 flex flex-col text-left">
								<h3 className="text-xl font-semibold mb-4">
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4 line-clamp-3">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, key) => (
										<span
											key={key}
											className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground cosmic-button"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<a
						href="https://github.com/RohanVision"
						target="_blank"
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
					>
						Check My Githb <ArrowRight size={16} />
					</a>
				</div>
			</div>

			{/* Modal Container */}
			{openModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
					<div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
						<div className="flex justify-end p-4">
							<button
								onClick={handleClose}
								className="text-white text-3xl font-bold hover:text-purple-500 cursor-pointer"
							>
								<X size={24} />
							</button>
						</div>
						<div className="flex flex-col text-left">
							<div className="w-full flex justify-center bg-gray-900 px-4">
								<img
									src={openModal.image}
									alt={openModal.title}
									className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
								/>
							</div>
							<div className="lg:p-8 p-6">
								<h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
									{openModal.title}
								</h3>
								<p className="text-gray-400 mb-6 lg:text-base text-xs">
									{openModal.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{openModal.tags.map((tag, index) => (
										<span
											key={index}
											className="px-2 py-1 text-xs bg-secondary text-secondary-foreground cosmic-button"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="flex gap-4">
									<a
										href={openModal.github}
										target="_blank"
										rel="noopener noreferrer"
										className="w-1/2 flex justify-center items-center gap-2 bg-gray-800 hover:bg-primary text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
									>
										View Code
										<span>
											<Github size={20} />
										</span>
									</a>
									<a
										href={openModal.webapp}
										target="_blank"
										rel="noopener noreferrer"
										className="w-1/2 flex justify-center items-center gap-2 bg-primary text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
									>
										Live URL <ExternalLink size={20} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};
