import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const ReadMoreLessList = ({
	responsibilities,
	maxVisible = 4,
	isExpanded,
	onToggle,
}) => {
	const [height, setHeight] = useState("auto");
	const [shouldAnimate, setShouldAnimate] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const fullHeight = containerRef.current.scrollHeight;
		const collapsedHeight = getCollapsedHeight();

		if (isExpanded) {
			setHeight(fullHeight);
		} else {
			setHeight(collapsedHeight);
		}

		// Enable animation after first render
		const timeout = setTimeout(() => setShouldAnimate(true), 20);
		return () => clearTimeout(timeout);
	}, [isExpanded, responsibilities]);

	const getCollapsedHeight = () => {
		const liHeight = 34; // Adjust based on your spacing
		return maxVisible * liHeight;
	};

	return (
		<div className="mt-4">
			<div
				ref={containerRef}
				style={{ maxHeight: `${height}px` }}
				className={` overflow-hidden  text-left transition-all duration-700 ease-in-out
          ${shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0"}
        `}
			>
				<ul className="list-disc pl-5 space-y-2">
					{responsibilities.map((item, index) => (
						<li
							key={index}
							className={`leading-7 text-sm ${
								!isExpanded && index >= maxVisible
									? "opacity-0 h-0 overflow-hidden"
									: "opacity-100 h-auto"
							} transition-all duration-300`}
						>
							{item}
						</li>
					))}
				</ul>
			</div>

			{responsibilities.length > maxVisible && (
				<button
					onClick={onToggle}
					className="mt-2 text-primary cursor-pointer font-semibold hover:underline flex items-center gap-1"
				>
					{isExpanded ? (
						<>
							Read Less <ChevronUp className="w-4 h-4" />
						</>
					) : (
						<>
							Read More <ChevronDown className="w-4 h-4" />
						</>
					)}
				</button>
			)}
		</div>
	);
};
