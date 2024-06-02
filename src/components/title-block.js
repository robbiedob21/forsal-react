import React from "react";
import { twMerge } from "tailwind-merge";

import Block from "./block";

function TitleBlock({ className }) {
	return (
		<Block
			whileHover={{
				scale: 1.02,
				transition: { duration: 0.15 },
			}}
			whileTap={{ scale: 0.8 }}
			className={twMerge(
				"col-span-12 row-span-2 md:col-span-9 md:row-span-1 lg:col-span-6 min-h-48 grid h-full items-center",
				className
			)}
		>
			<p className="font-semibold drop-shadow-lg text-2xl xs:text-4xl text-center xs:text-right">
				<span className="text-zinc-400">Alone, we can</span>
				<br></br>
				<span className="font-bold">Together, we WILL</span>
			</p>
		</Block>
	);
};

export default TitleBlock;