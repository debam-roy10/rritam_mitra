import HomeBg from "../public/img/home/homebg.jpg";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";

import { transition1 } from "./transitions";

export function Hero() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className=""
        id="home"
      >
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={transition1}
              className="w-full pt-36 pb-14 lg:pt-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">
                Photographer <br /> & film maker
              </h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                Calcutta, India
              </p>
              <Link href="#contact" className="btn mb-[30px]">
                Get in touch
              </Link>
            </motion.div>

            <div className="flex justify-end lg:max-h-max">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:-right-40 overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                >
                  <Image src={HomeBg} alt="" className="w-[761px]" placeholder="blur" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
