import AboutBg from "../public/img/about/aboutbg.png";
import Image from "next/image";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import { transition1 } from "./transitions";

export function About () {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className=""
        id="about"
      >
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
            <div className="flex-1 lg:max-h-max order-2 lg:order-none overflow-hidden">
              <Image src={AboutBg} alt="" className="w-[689px]" placeholder="blur"/>
            </div>

            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={transition1}
              className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">About me</h1>
              <p className="mb-12 max-w-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <b> Itaque, suscipit aliquid asperiores </b>cumque enim sint
                dignissimos excepturi exercitationem.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>

              <Link href="#portfolio" className="btn">
                View my work
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
