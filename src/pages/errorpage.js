import React from "react";
import { Link } from "react-router-dom";

function errorpage() {
  return (
    <>
      <div className="grid min-h-screen content-center items-center justify-center justify-items-center gap-8 bg-gradient-to-br from-zinc-900 to-zinc-950 px-4 py-12 text-zinc-50">
        <h1 className="text-4xl font-semibold">
          Oops! Something has gone wrong!
        </h1>
        <Link
          to="/"
          className="rounded border border-zinc-700 bg-zinc-800 p-4 text-center focus-within:bg-zinc-600 hover:bg-zinc-600 active:bg-zinc-400"
        >
          Return Home?
        </Link>
      </div>
    </>
  );
}

export default errorpage;
