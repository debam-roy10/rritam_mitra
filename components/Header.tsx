import Link from "next/link";
import Image from "next/image";

import logo from "../public/img/header/logo.png";

import { Socials } from "./Socials";
import { MobileNav } from "./MobileNav";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [color, setColor] = useState("transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 110) {
        setColor("white");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[90px] lg:h-[88px] flex items-center ease-in duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* -------------logo------------------ */}
        <Link href="#home">
          <Image
            src={logo}
            width={200}
            height={60}
            alt="Rritam Mitra"
            className="transition-opacity opacity-0 duration-[2s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </Link>

        {/* ------------------navbar------------ */}
        <nav className="hidden xl:flex gap-x-12 font-regular">
          <Link
            href="#home"
            className="text-secondary hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            href="#portfolio"
            className="text-secondary hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="text-secondary hover:text-primary transition"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-secondary hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* ----------------socials---------------- */}
      <Socials />

      {/* -----------------mobile nav------------ */}
      <MobileNav />
    </header>
  );
}

export default Header