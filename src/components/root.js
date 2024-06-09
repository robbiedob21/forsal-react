import { Outlet, ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion";

export default function Root() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-950 px-4 py-12 text-zinc-50">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <Outlet />
        </motion.div>
      </main>
      <ScrollRestoration />
    </>
  );
}
