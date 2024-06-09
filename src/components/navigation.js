import React from "react";
import LinkBlock from "./link-block";
import Block from "./block";

export default function Navigation({ currentPage }) {
  return (
    <>
      <Block className="col-span-12 grid grid-cols-12 gap-2 bg-transparent">
        <LinkBlock text="Home" href="/" />
        {currentPage !== "mission" && (
          <LinkBlock text="Our Mission" href="/mission" />
        )}
        {currentPage !== "story" && (
          <LinkBlock text="Our Story" href="/story" />
        )}
        {currentPage !== "event" && <LinkBlock text="Events" href="/events" />}
      </Block>
    </>
  );
}
