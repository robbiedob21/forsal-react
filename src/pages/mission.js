import { GiBrain, GiRubberBoot } from "react-icons/gi";
import { PiButterfly, PiMegaphone, PiHandHeart } from "react-icons/pi";

import Block from "../components/block";
import ImageBlock from "../components/image-block";
import Footer from "../components/footer";

import corey from "../resources/images/corey-smiling.webp";

export default function Mission() {
	return (
		<>
			<Block className="col-span-12 md:col-span-8 space-y-4">
				<h1 className="text-4xl font-bold">Our Mission</h1>
				<div>
					<p className="text-lg font-semibold text-pretty drop-shadow-sm">
						"My mission is to try to get people talking — to get
						people actively working on their mental health before it
						gets too much for them, like it did for my sister."
					</p>
					<p className="italic text-right drop-shadow-sm text-zinc-400">
						Corey Choat
					</p>
				</div>
			</Block>
			<ImageBlock src={corey} alt="Corey Choat" />
			<Block className="grid sm:grid-cols-3 col-span-12 divide-y sm:divide-y-0 sm:divide-x divide-zinc-700 p-0">
				<div className="px-4 py-6 space-y-4">
					<hgroup className="flex gap-2 items-center text-2xl font-medium">
						<PiMegaphone />
						<h2 className="text-2xl font-medium">Awareness</h2>
					</hgroup>
					<p className="text-zinc-400">
						We fight to break the stigma around mental health and
						encourage open communication.
					</p>
				</div>
				<div className="px-4 py-6 space-y-4">
					<hgroup className="flex gap-2 items-center text-2xl font-medium">
						<PiHandHeart />
						<h2 className="text-2xl font-medium">Support</h2>
					</hgroup>
					<p className="text-zinc-400">
						We raise funds for charities that provide critical
						support and resources to young Kiwis struggling with
						their mental well-being.
					</p>
				</div>
				<div className="px-4 py-6 space-y-4">
					<hgroup className="flex gap-2 items-center text-2xl font-medium">
						<PiButterfly />
						<h2 className="text-2xl font-medium">Hope</h2>
					</hgroup>
					<p className="text-zinc-400">
						We share stories of resilience and hope, reminding
						everyone that they are not alone.
					</p>
				</div>
			</Block>
			<div className="grid grid-cols-12 col-span-12 gap-4">
				<Block className="col-span-12 md:col-span-6 space-y-2 bg-gradient-radial from-slate-900 to-slate-800 border-slate-700 order-1">
					<hgroup className="flex gap-2 items-center text-2xl font-semibold text-stone-50">
						<GiBrain />
						<h3>Normalising Mental Health</h3>
					</hgroup>
					<p className="text-slate-400 text-pretty">
						<span className="font-medium leading-relaxed">
							I AM HOPE has one goal
						</span>{" "}
						- positive societal attitudinal change. We know our
						youth struggle with distressing self-talk and
						overthinking, leaving them feeling isolated and alone.
						When we show them these thoughts are universal, we can
						give our kids a better life.
					</p>
				</Block>
				<Block className="col-span-12 md:col-span-6 grid content-center order-2">
					<p className="text-lg font-semibold text-pretty drop-shadow-sm leading-relaxed">
						"I hope that speaking up and telling you a small part of
						my story helps others to feel as though they can tell
						their story"
					</p>
					<p className="italic text-right drop-shadow-sm text-zinc-400">
						Corey Choat
					</p>
				</Block>
				<Block className="col-span-12 md:col-span-6 grid content-center order-4 md:order-3">
					<p className="text-lg font-semibold text-pretty drop-shadow-sm leading-relaxed">
						"I do not want other people to be in that much pain that
						they feel <span class="line-through">suicide</span> is
						their only option and I do not want other to feel the
						pain as they grieve their lost ones."
					</p>
					<p className="italic text-right drop-shadow-sm text-zinc-400">
						Corey Choat
					</p>
				</Block>
				<Block className="col-span-12 md:col-span-6 space-y-2 bg-gradient-radial from-stone-900 to-stone-800 border-stone-700 order-3">
					<hgroup className="flex gap-2 items-center text-2xl font-semibold text-stone-50">
						<GiRubberBoot />
						<h3>Free kids counselling</h3>
					</hgroup>
					<p className="text-stone-400 text-pretty leading-relaxed">
						An overworked, underfunded, and under resourced public
						mental health service has led to excruciatingly long
						wait times for young people needing immediate help.{" "}
						<span className="font-medium">
							Gumboot Friday's free counselling
						</span>{" "}
						platform provides a bridge to rangatahi in need by
						breaking down the barriers of cost and wait times.
					</p>
				</Block>
			</div>
			<Footer currentPage="mission" />
		</>
	);
}
