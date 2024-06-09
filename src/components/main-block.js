import React from "react";
import { twMerge } from "tailwind-merge";
import { FiArrowUpRight } from "react-icons/fi";
import Block from "./block";
import { Link } from "react-router-dom";

function MainBlock({ className, href, src, linkTitle }) {
  return (
    <Block
      className={twMerge(
        "group relative col-span-12 row-span-2 p-0 md:col-span-9 lg:col-span-6",
        className,
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.8 }}
    >
      <Link to={href} aria-label={"Go to " + linkTitle + " page"}>
        <img
          draggable="false"
          src={src}
          alt=""
          className="h-full w-full object-cover brightness-75 transition group-focus-within:brightness-50 group-hover:brightness-50"
        />
      </Link>
      <Link
        to={href}
        className="absolute bottom-0 right-0 z-10 flex items-center gap-2 p-4 text-2xl"
      >
        <p className="font-semibold uppercase drop-shadow-lg">{linkTitle}</p>
        <FiArrowUpRight />
      </Link>
    </Block>
  );
}

export default MainBlock;
