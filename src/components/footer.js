import React from "react";
import { SiInstagram } from "react-icons/si";

import SmallBlock from "./small-block";

import iAmHope from "../resources/images/i-am-hope.webp";
import gumbootFriday from "../resources/images/gumboot-friday.webp";
import logo from "../resources/images/logo.webp";
import Navigation from "./navigation";

export default function Footer({ currentPage }) {
  return (
    <>
      <SmallBlock src={logo} href="#" className="bg-black lg:col-span-3" />
      <SmallBlock
        src={iAmHope}
        href="https://www.iamhope.org.nz/"
        className="bg-white lg:col-span-3"
      />
      <SmallBlock
        src={gumbootFriday}
        href="https://www.gumbootfriday.org.nz/"
        className="bg-white lg:col-span-3"
      />
      <SmallBlock
        href="https://www.instagram.com/runningforsal/"
        className="col-span-6 bg-gradient-to-br from-purple-800 to-orange-400 text-6xl lg:col-span-3"
      >
        <SiInstagram />
      </SmallBlock>
      <Navigation currentPage={currentPage} />
    </>
  );
}
