import React from "react";
import { twMerge } from "tailwind-merge";
import Block from "./block";

function ImageBlock({ className, src }) {
  return (
    <Block
      className={twMerge(
        "group relative col-span-12 p-0 md:col-span-4",
        className,
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.15 },
      }}
      whileTap={{ scale: 0.8 }}
    >
      <img
        draggable="false"
        src={src}
        alt=""
        className="h-full w-full object-cover"
      />
    </Block>
  );
}

export default ImageBlock;
