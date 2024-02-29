import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import { motion } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary xl:hidden">
      {/* menu open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li onClick={() => setOpenMenu(false)}>
            <Link href="#home">Home</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="#about">About</Link>
          </li>
          <li onClick={() => setOpenMenu(false)}>
            <Link href="#contact">Contact</Link>
          </li>

          <ul className="pt-10 text-2xl flex gap-x-6">
            <li>
              <a
                href="https://www.facebook.com/rritam.mitra?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <FiFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rritamsphotographyofficial?igsh=OW94bmJmdGZzZWN0"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </ul>
      </motion.div>
    </nav>
  );
}
