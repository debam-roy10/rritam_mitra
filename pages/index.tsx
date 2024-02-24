import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';
import classNames from "classnames";

/*
color pallete
-- bg-color #1c1917
-- text-main #faf3ea
*/

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "landscape",
    display: "Landscape",
  },
  {
    key: "contemporary",
    display: "Contemporary",
  },
];

export default function Home() {
  return (
    <div className="h-full bg-[url('/p-bg.jpg')] bg-right-bottom bg-cover overflow-auto">
      <Head>
        <title>Rritam Mitra</title>
        <meta name="description" content="Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        {/* <div>hm</div> */}
        <Link href="#">
          <Image
            src="/logo2.png"
            width={190}
            height={50}
            alt="Rritam Mitra"
            className="transition-opacity opacity-0 duration-[2s]"
            onLoadingComplete={(image)=>image.classList.remove("opacity-0")}
          />
        </Link>
        <Link
          href="#"
          className="rounded-3xl bg-[#faf3ea] text-stone-700 px-3 py-2 hover:bg-opacity-90 font-semibold"
        >
          Get in touch
        </Link>
      </header>

      <main className="pt-[100px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames("uppercase text-md", selected ? "text-[#faf3ea]" : "text-stone-400")}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry breakpointCols={2} className="flex gap-2" columnClassName="">
                  <img src="/p1.jpg" alt="p1" className="mb-2"/>
                  <img src="/p2.jpg" alt="p2" className="mb-2"/>
                  <img src="/p3.jpg" alt="p3" className="mb-2"/>
                  <img src="/p4.jpg" alt="p4" className="mb-2"/>
                  <img src="/p5.jpg" alt="p5" className="mb-2"/>
                  <img src="/p6.jpg" alt="p6" className="mb-2"/>
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>landscape</Tab.Panel>
              <Tab.Panel>contemporary</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center">
        <p>© 2024 - rritammitra59@gmail.com</p>
      </footer>
    </div>
  );
}
