"use client";

import React, { useState } from "react";
import Link from "next/link";
const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20 dark:border-b">
      <div className="max-w-7xl w-full">
        {/* Top Heading */}
        <p className="text-4xl sm:text-5xl 2xl:text-8xl text-black dark:text-white font-forum text-center py-10 sm:py-12 md:py-14 md:pb-6">
          Infinity Construction NYC
        </p>

          {/* <h1 className="text-xl sm:text-3xl text-[#0a6dad] dark:text-[#4dd0e1] mb-6 text-center">
          Brownstone Restoration Specialist
        </h1> */}

        <h2 className="text-lg md:text-lg text-primary dark:text-[#90caf9] sm:mb-2 text-center">
          Licensed & Insured.
        </h2>

        {/* SEO Heading */}
        <h1 className="text-2xl md:text-3xl text-[#042c46] dark:text-[#90caf9] text-center font-bold mt-6">
          Infinity Construction NYC
        </h1>

        <h2 className="text-lg md:text-xl text-center mt-2 text-slate-700 dark:text-slate-300">
          Preserving New York’s Architectural Heritage in Brooklyn, Manhattan,
          Queens, and The Bronx
        </h2>

        {/* Always visible intro */}
        <p
          className="pt-6 text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Infinity Construction NYC is the premier 
          Contractor in NYC, specializing in the meticulous preservation of
          historic landmarks. Since 2015, our licensed and insured team has
          combined old-world craftsmanship with modern waterproofing technology
          to restore the iconic facades of New York City.
        </p>

        {/* Expandable Content */}
        {showMore && (
          <div className="content-section">
            {/* <p
              className="mt-6 text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Whether you own a historic brownstone in Park Slope or a
              commercial property in Manhattan, we deliver precision,
              punctuality, and professional excellence.
            </p> */}

            <h2 className="text-xl font-semibold mt-10 text-center">
              Full-Service Exterior Restoration & Masonry Services
            </h2>

            <p
              className="mt-4 text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              As Exterior Building Restoration Experts in NYC, we provide a
              comprehensive suite of services designed to stop water
              infiltration and restore structural integrity.
            </p>

            <ul className="mt-6 text-lg text-slate-800 dark:text-slate-300 mx-auto sm:px-20 list-disc space-y-3">
              {/* <li>
                <Link
                  href="/historical-landmark"
                  className="no-underline text-inherit"
                >
                  <strong>Historical Landmark Restoration:</strong>
                </Link>{" "}
                Expert care for Brownstone and Limestone facades, adhering to
                LPC and DOB guidelines.
              </li>
              <li>
                <Link
                  href="/brick-pointing"
                  className="no-underline text-inherit"
                >
                  <strong>Brick Pointing & Waterproofing NYC:</strong>
                </Link>{" "}
                Specialized repointing to prevent decay and protect your masonry
                for decades.
              </li>
              <li>
                <Link href="/stucco" className="no-underline text-inherit">
                  <strong>Stucco & Exterior Waterproofing:</strong>
                </Link>{" "}
                Comprehensive sealing for exterior walls, parapets, and
                retaining walls.
              </li>
              <li>
                <Link href="/roofing" className="no-underline text-inherit">
                  <strong>Roof Restoration & Weatherproofing NYC:</strong>
                </Link>{" "}
                From leak repair to full roof reconstruction under NYC Energy
                Codes.
              </li>
              <li>
                <Link
                  href="/fire-escape-restoration"
                  className="no-underline text-inherit"
                >
                  <strong>Fire Escape & Metal Restoration:</strong>
                </Link>{" "}
                Safety-focused restoration of fire escapes, railings, and
                fences.
              </li> */}
              <li>
                <Link href="/paving" className="no-underline text-inherit">
                  <strong>Paving & Masonry:</strong>
                </Link>{" "}
                Professional installation of concrete, stone, and brick for
                sidewalks and driveways (ADA compliant).
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-10 text-center">
              Why Choose Infinity Construction NYC
            </h2>

            <ul className="mt-4 text-lg text-slate-800 dark:text-slate-300 mx-auto sm:px-20 list-disc space-y-2">
              <li>Licensed & Insured Contractor</li>
              <li>Experience with LPC & DOB Compliance</li>
              <li>Strong knowledge of NYC building structures</li>
              <li>Reliable project timelines and quality workmanship</li>
              <li>Trusted by homeowners and property managers</li>
            </ul>

            {/* <h2 className="text-xl font-semibold mt-10 text-center">
              Service Areas
            </h2>

            <p
              className="mt-4 text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Brooklyn, Manhattan, Queens, and the Bronx
            </p>

            <p
              className="mt-6 text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC is a top-rated Brownstone Restoration
              Contractor in NYC serving Brooklyn, Manhattan, Queens, and the
              Bronx. They specialize in historical landmark restoration,
              masonry, and waterproofing. Their primary benefit is providing
              licensed, DOB-compliant exterior services that preserve property
              value while ensuring complete weatherproofing and structural
              safety.
            </p> */}
          </div>
        )}

        {/* Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-black transition-colors"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
