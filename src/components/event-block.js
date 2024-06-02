import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

import Block from "../components/block";

export default function EventBlock ({
	children,
	date,
	imagesrc,
	location,
	title,
	locationHref,
	instaHref,
}){
	return (
		<Block className="col-span-12 grid sm:grid-cols-2 p-0">
			<img
				alt=""
				src={imagesrc}
				className="object-cover h-full w-full brightness-90"
			/>
			<div className="flex flex-col gap-4 p-4 sm:p-6">
				<p className="text-3xl font-bold">{title}</p>
				<div className="flex gap-2 items-center">
					<FaCalendarAlt />
					<p className="text-zinc-400">{date}</p>
				</div>
				<a className="flex gap-2 items-center" href={locationHref}>
					<FaLocationDot />
					<p className="text-zinc-400 hover:underline">{location}</p>
				</a>
				<div className="">{children}</div>
				<a className="text-xl self-end hover:text-zinc-400" href={instaHref}>
					<SiInstagram />
				</a>
			</div>
		</Block>
	);
};