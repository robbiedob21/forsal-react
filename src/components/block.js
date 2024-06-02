import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function Block({ className, ...rest }) {
	return (
		<motion.div
			variants={{
				initial: {
					scale: 0.5,
					y: 50,
					opacity: 0,
				},
				animate: {
					scale: 1,
					y: 0,
					opacity: 1,
				},
			}}
			transition={{
				ease: "easeInOut",
				duration: 0.7,
			}}
			className={twMerge(
				"col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-4 overflow-hidden",
				className
			)}
			{...rest}
		/>
	);
};