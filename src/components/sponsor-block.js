import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import Block from "./block";

export default function SponsorBlock({ href, src, className }) {
  return (
    <Block
      className={twMerge(
        "grid aspect-square content-center justify-center p-0 max-sm:min-w-16 xs:col-span-3 sm:col-span-1",
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
        className="h-full w-full"
        aria-label={"Visit our supporter at " + href}
      >
        <img src={src} alt="" className="aspect-square object-cover" />
      </Link>
    </Block>
  );
}
