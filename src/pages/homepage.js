import { SiInstagram, SiStrava } from "react-icons/si";

import SmallBlock from "../components/small-block";
import MainBlock from "../components/main-block";
import TitleBlock from "../components/title-block";

import coreyAndMike from "../resources/images/corey-with-mike.webp";
import sally from "../resources/images/sally.webp";
import iAmHope from "../resources/images/i-am-hope.webp";
import gumbootFriday from "../resources/images/gumboot-friday.webp";
import logo from "../resources/images/logo.webp";
import merch from "../resources/images/t-shirt.webp";
import event from "../resources/images/corey-event.webp";
import Sponsors from "../components/sponsors";

export default function HomePage() {
	return (
		<>
			<MainBlock
				src={coreyAndMike}
				href="/mission"
				className=""
				linkTitle="Our Mission"
			/>
			<SmallBlock src={logo} href="#" className="bg-black" />
			<SmallBlock
				src={iAmHope}
				href="https://www.iamhope.org.nz/"
				className="bg-white"
			/>
			<SmallBlock>
				<div className="text-center">
					<p className="text-4xl font-bold">$115k</p>
					<p className="text-zinc-400 text-xl">Raised</p>
				</div>
			</SmallBlock>
			<MainBlock
				src={sally}
				href="/story"
				className="row-span-3"
				linkTitle="Our Story"
			/>
			<TitleBlock />
			<MainBlock
				src={merch}
				href="https://purposeperformancewear.com/collections/i-am-hope"
				className="lg:row-span-3 md:col-span-6 lg:col-span-4"
				linkTitle="Merch"
			/>
			<MainBlock
				src={event}
				href="/events"
				className="md:col-span-6"
				linkTitle="Events"
			/>
			<SmallBlock
				src={gumbootFriday}
				href="https://www.gumbootfriday.org.nz/"
				className="bg-white"
			/>
			<SmallBlock
				href="https://www.strava.com/clubs/1209335"
				className="text-6xl bg-orange-500 sm:col-span-6 md:col-span-3 lg:col-span-2"
			>
				<SiStrava />
			</SmallBlock>
			<SmallBlock
				href="https://www.instagram.com/runningforsal/"
				className="text-6xl bg-gradient-to-br from-purple-800 to-orange-400 sm:col-span-6 md:col-span-3 lg:col-span-2"
			>
				<SiInstagram />
			</SmallBlock>
			<Sponsors />
		</>
	);
}
