import { Tab } from "@headlessui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

/*
color pallete
-- bg-
-- text-main #faf3ea
*/

const tabs = [
  {
    key: 'all',
    display: 'All'
  },
  {
    key: 'landscape',
    display: 'Landscape'
  },
  {
    key: 'contemporary',
    display: 'Contemporary'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/p-bg-edit.jpg')] bg-right bg-cover">
      <Head>
        <title>Rritam Mitra</title>
        <meta name="description" content="Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center h-[90px] px-6">
        {/* <div>hm</div> */}
        <div>logo</div>
        <Link
          href="#"
          className="rounded-3xl bg-[#faf3ea] text-stone-700 px-3 py-2 hover:bg-opacity-90 font-semibold"
        >
          Get in touch
        </Link>
      </header>

      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map(tab => (
                <Tab key={tab.key} className="p-2">
                {({ selected }) => (
                  <span
                    className={selected ? "text-[#faf3ea]" : "text-stone-400"}
                  >
                    {tab.display}
                  </span>
                )}
              </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full bg-stone-900 bg-opacity-80 max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel className="">All Photos</Tab.Panel>
              <Tab.Panel>landscape</Tab.Panel>
              <Tab.Panel>contemporary</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        <p>© 2024 - rritammitra59@gmail.com</p>
      </footer>
    </div>
  );
}
