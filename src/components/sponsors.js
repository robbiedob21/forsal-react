import React from "react";

import Block from "./block";
import SponsorBlock from "./sponsor-block";

import cmf from "../resources/images/cmfrunning.webp";
import d3tape from "../resources/images/d3_tape_logo.webp";
import fuelme from "../resources/images/fuelme.webp";
import nougly from "../resources/images/nougly.webp";
import purpose from "../resources/images/purpose.webp";
import skins from "../resources/images/skins.webp";
import sox from "../resources/images/socks.webp";

export default function Sponsors() {
  return (
    <Block className="col-span-12 flex flex-col gap-4">
      <Block className="border-none bg-transparent p-0">
        <p className="text-center text-xl font-medium">Our Supporters</p>
      </Block>
      <div className="grid grid-cols-12 gap-2 sm:grid-cols-7">
        <SponsorBlock
          href="https://cmfrunning.nz/"
          src={cmf}
          className="bg-white"
        />
        <SponsorBlock
          href="https://www.d3tape.com/"
          src={d3tape}
          className="bg-black"
        />
        <SponsorBlock
          href="https://fuelme.co.nz/"
          src={fuelme}
          className="bg-[#16afd7]"
        />
        <SponsorBlock
          href="https://nougly.nz/"
          src={nougly}
          className="bg-white"
        />
        <SponsorBlock
          href="https://purposeperformancewear.com/"
          src={purpose}
          className="bg-white"
        />
        <SponsorBlock href="https://www.skins.co.nz/" src={skins} />
        <SponsorBlock
          href="https://soxfootwear.nz/"
          src={sox}
          className="bg-black"
        />
      </div>
    </Block>
  );
}
