import React from "react";
import { twMerge } from "tailwind-merge";

import Block from "./block";
import { Link } from "react-router-dom";

function SmallBlock({ className, href, src, children }) {
  return (
    <Block
      className={twMerge(
        "col-span-6 h-full min-h-32 p-0 sm:col-span-3 sm:min-h-56 lg:col-span-2 lg:min-h-32",
        className,
      )}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.8 }}
    >
      <Link
        to={href}
        className="grid h-full w-full items-center justify-center"
        aria-label={"Go to " + href}
      >
        {children ? (
          children
        ) : (
          <img
            draggable="false"
            src={src}
            alt=""
            className="pointer-events-none object-contain p-1"
          />
        )}
      </Link>
    </Block>
  );
}

export default SmallBlock;
