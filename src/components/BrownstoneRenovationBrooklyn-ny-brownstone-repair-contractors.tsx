import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrownstoneRenovationBrooklynNyBrownstoneRepairContractors = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20">
        <div className="max-w-7xl w-full">
          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl 2xl:text-6xl text-black dark:text-white font-forum text-center py-10 sm:py-12 md:py-14 md:pb-6"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Why Choose Infinity Construction NYC?
          </h1>

          {/* Description Section */}
          {/* <p
            className="pt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            As experts in{" "}
            <Link href="/historical-landmarks-design-restoration">
              <span>Brownstone Renovation</span>
            </Link>{" "}
            , we provide a full suite of restoration services that preserve the
            historical appeal of your property while strengthening its
            structure. Our skilled team brings unmatched craftsmanship and
            attention to detail to every project, whether it’s restoring facades
            or revitalizing structural elements.
          </p> */}
          <p
            className="pt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            As experts in painting and masonry , we provide a full
            suite of restoration services that preserve the historical appeal of
            your property while strengthening its structure. Our skilled team
            brings unmatched craftsmanship and attention to detail to every
            project, whether it’s restoring facades or revitalizing
            structural elements.
          </p>

          {/* <p
            className="mt-2 text-xl md:text-4xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-center"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Our Services
          </p>

          <p
            className="mt-2 text-xl md:text-2xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Infinity Construction NYC offers an extensive range of specialized
            services:
          </p>
          <ul className="pt-4 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20">
            <div
              className="font-normal text-2xl"
              style={{
                fontFamily: "var(--font-forum)",
                listStyleType: "disc", // Ensures the bullets are visible
                paddingLeft: "20px", // Adds some left padding to make room for the bullets
              }}
            >
              <li>
                <span className="font-bold">
                  Historical Landmarks Design Restoration :{" "}
                </span>
                Preserving authenticity and charm in historical New York sites.
              </li>
              <li>
                <span className="font-bold">
                  Brownstone Restoration & Facade Repair :
                </span>
                Reviving brownstones with facade and structural repairs to
                original grandeur.
              </li>
              <li>
                <span className="font-bold">Roofing Solutions : </span>
                Reliable roofing tailored for New York’s climate.
              </li>
              <li>
                <Link href="/brick-pointing">
                  <span className="font-bold">
                    Brick Pointing & Masonry
                  </span>
                </Link>
                &nbsp;: Strengthening and beautifying brick structures.
              </li>
              <li>
                <Link href="/fire-escape-restoration">
                  <span className="font-bold">
                    Fire Escape Restoration & Waterproofing
                  </span>
                </Link>
                : Ensuring safety and protection from moisture damage.
              </li>
              <li>
                Cornice Restoration: Preserving the architectural charm of
                historic New York properties.
              </li>
            </div>
          </ul>
          <h1
            className="text-3xl sm:text-4xl 2xl:text-6xl text-black dark:text-white font-forum py-10 sm:py-12 md:py-14 md:pb-6 sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Brownstone Repair Services
          </h1>
          <p
            className="mt-2 text-xl md:text-2xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Our{" "}
            <Link href="">
              <span className="underline">Brownstone Repair</span>
            </Link>{" "}
            services cover every need, from minor repairs to complete
            renovations. With Infinity Construction NYC, you’re investing in
            quality work that respects the history and future of your property.
          </p>
          <p
            className="mt-6 text-xl md:text-2xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Ready to start your restoration journey? Contact Infinity
            Construction NYC – the top choice for brownstone renovation and
            restoration in NYC – and bring your vision to life with unmatched
            quality and professionalism.
          </p> */}
        </div>
      </section>
      <section className="dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-16 flex justify-center border-b">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="h-72 aspect-square relative">
            <Link
              href="https://en.wikipedia.org/wiki/The_Bronx"
              target="_blank"
            >
              <Image
                src="/map-1.jpg" // replace with your image path
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="border-2 border-secondary hover:transform hover:scale-105 transition-transform duration-500 overflow-hidden rounded-full"
              />
            </Link>
          </div>
          <div className="h-72 aspect-square relative">
            <Link href="https://en.wikipedia.org/wiki/Queens" target="_blank">
              <Image
                src="/map-2.jpg" // replace with your image path
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="border-2 border-secondary hover:transform hover:scale-105 transition-transform duration-500 overflow-hidden rounded-full"
              />
            </Link>
          </div>
          <div className="h-72 aspect-square relative">
            <Link href="https://en.wikipedia.org/wiki/Brooklyn" target="_blank">
              <Image
                src="/map-3.jpg" // replace with your image path
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="border-2 border-secondary hover:transform hover:scale-105 transition-transform duration-500 overflow-hidden rounded-full"
              />
            </Link>
          </div>
          <div className="h-72 aspect-square relative">
            <Link
              href="https://en.wikipedia.org/wiki/Manhattan"
              target="_blank"
            >
              <Image
                src="/map-4.jpg" // replace with your image path
                alt="Image 4"
                layout="fill"
                objectFit="cover"
                className="border-2 border-secondary hover:transform hover:scale-105 transition-transform duration-500 overflow-hidden rounded-full"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrownstoneRenovationBrooklynNyBrownstoneRepairContractors;
