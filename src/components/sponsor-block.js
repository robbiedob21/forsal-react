import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import Block from "./block";

export default function SponsorBlock({ href, src, className }) {
	return (
		<Block
			className={twMerge(
				"aspect-square p-0 max-sm:min-w-16 grid justify-center content-center xs:col-span-3 sm:col-span-1",
				className
			)}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.15 },
			}}
			whileTap={{ scale: 0.8 }}
		>
			<Link to={href} className="w-full h-full">
				<img src={src} alt="" className="object-cover aspect-square" />
			</Link>
		</Block>
	);
}
