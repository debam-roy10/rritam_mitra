import Head from "next/head";

import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Rritam Mitra</title>
        <meta name="description" content="Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Gallery />

      <About />

      <Contact />

      
    </div>
  );
}
