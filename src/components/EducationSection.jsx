import { education } from "../lib/constants";

export const EducationSection = () => {
	return (
		<section id="education" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-8xl">
				{/* Section Title */}
				<div className="text-center mb-16">
					<h2
						className="text-3xl md:text-4xl font-bold
                 text-center mb-12"
					>
						<span className="text-primary">Education</span>
					</h2>
				</div>
			</div>

			{/* Experience Timeline */}
			<div className="relative">
				{/* Education Entries */}
				{education.map((edu) => (
					<div
						key={edu.id}
						className={`flex flex-col sm:flex-row items-center mb-16`}
					>
						{/* Content Section */}
						<div
							className={`w-full p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
						>
							{/* Flex container for image and text */}
							<div className="flex items-center justify-between">
								{/* Degree, School Name, Dates */}
								<div className="relative">
									<div className="flex flex-wrap items-center justify-between">
										<img
											className="w-12 h-12 mr-4 rounded-full object-fitr"
											src={edu.img}
											alt={edu.school}
										/>
										<h3 className="text-xl sm:text-xl font-semibold text-white">
											{edu.degree}
										</h3>
										<h4 className="mx-2 text-xl sm:text-xl font-semibold text-gray-300">
											| {edu.school}
										</h4>
									</div>

									{/* Date at the bottom */}
									<div className="flex items-center mt-2 text-sm text-gray-400 font-bold text-left">
										<p>{edu.date}</p>
										<p className="px-2">
											| Grade: {edu.grade}
										</p>
									</div>
								</div>
							</div>
							<p className="mt-4 text-gray-400 text-left">
								{edu.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
