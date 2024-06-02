import React from "react";
import { twMerge } from "tailwind-merge";
import { FiArrowUpRight } from "react-icons/fi";
import Block from "./block";
import { Link } from "react-router-dom";

function MainBlock({ className, href, src, linkTitle }) {
	return (
		<Block
			className={twMerge(
				"col-span-12 row-span-2 md:col-span-9 lg:col-span-6 p-0 relative group",
				className
			)}
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.15 },
			}}
			whileTap={{ scale: 0.8 }}
		>
			<Link to={href}>
				<img
					draggable="false"
					src={src}
					alt=""
					className="h-full w-full object-cover brightness-75 group-focus-within:brightness-50 group-hover:brightness-50 transition"
				/>
			</Link>
			<Link
				to={href}
				className="flex gap-2 items-center absolute z-10 p-4 bottom-0 right-0 text-2xl"
			>
				<p className="font-semibold drop-shadow-lg uppercase">
					{linkTitle}
				</p>
				<FiArrowUpRight />
			</Link>
		</Block>
	);
}

export default MainBlock;
