import { GiBrain, GiRubberBoot } from "react-icons/gi";
import { PiButterfly, PiMegaphone, PiHandHeart } from "react-icons/pi";

import Block from "../components/block";
import ImageBlock from "../components/image-block";
import Footer from "../components/footer";

import corey from "../resources/images/corey-smiling.webp";

export default function Mission() {
  return (
    <>
      <Block className="col-span-12 space-y-4 md:col-span-8">
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <div>
          <p className="text-pretty text-lg font-semibold drop-shadow-sm">
            "My mission is to try to get people talking — to get people actively
            working on their mental health before it gets too much for them,
            like it did for my sister."
          </p>
          <p className="text-right italic text-zinc-400 drop-shadow-sm">
            Corey Choat
          </p>
        </div>
      </Block>
      <ImageBlock src={corey} alt="Corey Choat" />
      <Block className="col-span-12 grid divide-y divide-zinc-700 p-0 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="space-y-4 px-4 py-6">
          <hgroup className="flex items-center gap-2 text-2xl font-medium">
            <PiMegaphone />
            <h2 className="text-2xl font-medium">Awareness</h2>
          </hgroup>
          <p className="text-zinc-400">
            We fight to break the stigma around mental health and encourage open
            communication.
          </p>
        </div>
        <div className="space-y-4 px-4 py-6">
          <hgroup className="flex items-center gap-2 text-2xl font-medium">
            <PiHandHeart />
            <h2 className="text-2xl font-medium">Support</h2>
          </hgroup>
          <p className="text-zinc-400">
            We raise funds for charities that provide critical support and
            resources to young Kiwis struggling with their mental well-being.
          </p>
        </div>
        <div className="space-y-4 px-4 py-6">
          <hgroup className="flex items-center gap-2 text-2xl font-medium">
            <PiButterfly />
            <h2 className="text-2xl font-medium">Hope</h2>
          </hgroup>
          <p className="text-zinc-400">
            We share stories of resilience and hope, reminding everyone that
            they are not alone.
          </p>
        </div>
      </Block>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <Block className="order-1 col-span-12 space-y-2 border-slate-700 bg-gradient-radial from-slate-900 to-slate-800 md:col-span-6">
          <hgroup className="flex items-center gap-2 text-2xl font-semibold text-stone-50">
            <GiBrain />
            <h3>Normalising Mental Health</h3>
          </hgroup>
          <p className="text-pretty text-slate-400">
            <span className="font-medium leading-relaxed">
              I AM HOPE has one goal
            </span>{" "}
            - positive societal attitudinal change. We know our youth struggle
            with distressing self-talk and overthinking, leaving them feeling
            isolated and alone. When we show them these thoughts are universal,
            we can give our kids a better life.
          </p>
        </Block>
        <Block className="order-2 col-span-12 grid content-center md:col-span-6">
          <p className="text-pretty text-lg font-semibold leading-relaxed drop-shadow-sm">
            "I hope that speaking up and telling you a small part of my story
            helps others to feel as though they can tell their story"
          </p>
          <p className="text-right italic text-zinc-400 drop-shadow-sm">
            Corey Choat
          </p>
        </Block>
        <Block className="order-4 col-span-12 grid content-center md:order-3 md:col-span-6">
          <p className="text-pretty text-lg font-semibold leading-relaxed drop-shadow-sm">
            "I do not want other people to be in that much pain that they feel{" "}
            <span class="line-through">suicide</span> is their only option and I
            do not want other to feel the pain as they grieve their lost ones."
          </p>
          <p className="text-right italic text-zinc-400 drop-shadow-sm">
            Corey Choat
          </p>
        </Block>
        <Block className="order-3 col-span-12 space-y-2 border-stone-700 bg-gradient-radial from-stone-900 to-stone-800 md:col-span-6">
          <hgroup className="flex items-center gap-2 text-2xl font-semibold text-stone-50">
            <GiRubberBoot />
            <h3>Free kids counselling</h3>
          </hgroup>
          <p className="text-pretty leading-relaxed text-stone-400">
            An overworked, underfunded, and under resourced public mental health
            service has led to excruciatingly long wait times for young people
            needing immediate help.{" "}
            <span className="font-medium">
              Gumboot Friday's free counselling
            </span>{" "}
            platform provides a bridge to rangatahi in need by breaking down the
            barriers of cost and wait times.
          </p>
        </Block>
      </div>
      <Footer currentPage="mission" />
    </>
  );
}
