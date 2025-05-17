import { useState } from "react";
import { experiences } from "../lib/constants";
import { ReadMoreLessList } from "../lib/readmore";

export const ExperiencesSection = () => {
	const [expandedIndex, setExpandedIndex] = useState(0);
	const toggleIndex = (index) => {
		setExpandedIndex((prev) => (prev === index ? null : index));
	};
	return (
		<section id="experiences" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-8xl">
				{/* Section Title */}
				<div className="text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold
                 text-center mb-12"
					>
						<span className="text-primary">Experience</span>
					</h2>
				</div>

				{/* Experience Timeline */}
				<div className="relative">
					{/* Vertical line */}
					<div className="absolute sm:left-1/8 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1  bg-primary h-full"></div>

					{/* Experience Entries */}
					{experiences.map((experience) => (
						<div
							key={experience.id}
							className={`flex flex-col sm:flex-row items-center `}
						>
							{/* Timeline Circle */}
							<div className="absolute sm:left-1/8 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
								<img
									src={experience.img}
									alt={experience.company}
									className="w-full h-full object-cover rounded-full"
								/>
							</div>

							{/* Content Section */}
							<div
								className={`w-full p-4 sm:px-10 shadow-2xl backdrop-blur-md sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300`}
							>
								{/* Flex container for image and text */}
								<div className="flex items-center space-x-6">
									{/* Role, Company Name, and Date */}
									<div className="flex flex-col justify-between text-left">
										<div>
											<h3 className="text-xl sm:text-2xl font-semibold text-primary">
												{experience.role}
											</h3>
											<h4 className="text-md sm:text-sm text-gray-500">
												{experience.company}
											</h4>
										</div>
										{/* Date at the bottom */}
										<p className="text-sm text-gray-500 mt-2">
											{experience.date}
										</p>
									</div>
								</div>
								<ReadMoreLessList
									responsibilities={
										experience.responsibilities
									}
									isExpanded={expandedIndex === experience.id}
									onToggle={() => toggleIndex(experience.id)}
									maxVisible={2}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
