import React from "react";
import { twMerge } from "tailwind-merge";

import Block from "./block";
import { Link } from "react-router-dom";

function SmallBlock({ className, href, src, children }) {
	return (
		<Block
			className={twMerge(
				"col-span-6 sm:col-span-3 lg:col-span-2 p-0 min-h-32 sm:min-h-56 lg:min-h-32 h-full",
				className
			)}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.15 },
			}}
			whileTap={{ scale: 0.8 }}
		>
			<Link to={href} className="grid items-center justify-center w-full h-full">
				{children ? (
					children
				) : (
					<img
						draggable="false"
						src={src}
						alt=""
						className="object-contain p-1 pointer-events-none"
					/>
				)}
			</Link>
		</Block>
	);
};

export default SmallBlock;