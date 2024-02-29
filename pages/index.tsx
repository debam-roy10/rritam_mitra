import Head from "next/head";

import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Rritam Mitra</title>
        <meta name="description" content="Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero/>
      

      <Gallery />

      <footer className="relative h-[90px] flex justify-center items-center z-20">
        <p>© 2024 - rritammitra59@gmail.com</p>
      </footer>
    </div>
  );
}
