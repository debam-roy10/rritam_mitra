import { Tab } from "@headlessui/react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import classNames from "classnames";

import LightGalleryComponent from "lightgallery/react";
import { useRef } from "react";
import type { LightGallery } from "lightgallery/lightgallery";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import p1 from "../public/img/gallery/p1.jpg";
import p2 from "../public/img/gallery/p2.jpg";
import p3 from "../public/img/gallery/p3.jpg";
import p4 from "../public/img/gallery/p4.jpg";
import p5 from "../public/img/gallery/p5.jpg";
import p6 from "../public/img/gallery/p6.jpg";

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

const images = [p1, p2, p3, p4, p5, p6];

export function Gallery() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <>
      <main id="portfolio" className="relative pt-[100px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-md hover:text-[#0E1112] transition",
                        selected ? "text-[#0E1112]" : "text-[#696c6d]"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel className="overflow-auto">
                <Masonry
                  breakpointCols={{ default: 2, 768: 1 }}
                  className="flex gap-2"
                  columnClassName=""
                >
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt=""
                      className="mb-2 hover:opacity-70 cursor-pointer"
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
                </Masonry>
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>landscape</Tab.Panel>
              <Tab.Panel>contemporary</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </>
  );
}
