"use client";

import Link from "next/link";
import React, { useState } from "react";

const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20 dark:border-b">
      <div className="max-w-7xl w-full">
        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl 2xl:text-8xl text-black dark:text-white font-forum text-center py-10 sm:py-12 md:py-14 md:pb-6"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Infinity Construction NYC
        </h1>

        {/* Subheading */}
        <h2
          className="text-xl sm:text-3xl text-[#0a6dad] dark:text-[#4dd0e1] mb-6 text-center"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          BROWNSTONE RESTORATION SPECIALIST
        </h2>
        <h3
          className="text-lg md:text-lg text-primary dark:text-[#90caf9] sm:mb-2 text-center"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          LICENSED & INSURED.
        </h3>
        {/* Tagline */}
        <h3
          className="text-xl md:text-xl text-[#042c46] dark:text-[#90caf9] sm:mb-2 text-center"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          PRECISION. PUNCTUALITY. PROFESSIONALISM.
        </h3>

        {/* Always visible content */}
        <div className="content-section">
          <p
            className="pt-6 text-xl md:text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Infinity Construction NYC is a leading provider of quality
            restoration services in the tri-state area. Expert Masonry,
            Brownstone Restoration & Exterior Renovations in New York City
            Trusted by homeowners and businesses across Brooklyn, Manhattan,
            Queens, and the Bronx. With a focus on precision, punctuality, and
            professionalism, we specialize in brownstone exterior restoration,
            masonry, roofing, waterproofing, fire escape painting, and painting
            & plastering. Our goal is to deliver exceptional results to our
            clients while maintaining cost-effectiveness.
          </p>

          <p
            className="mt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-center md:text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            <Link href="/brownstone-restoration">
              Best Brownstone Renovation & Restoration Contractor{" "}
            </Link>{" "}
            in <Link href="https://www.wikidata.org/wiki/Q18419">Brooklyn</Link>
            , <Link href="https://www.wikidata.org/wiki/Q11299">Manhattan</Link>
            , <Link href="https://www.wikidata.org/wiki/Q18424">Queens</Link>,
            and{" "}
            <Link href="https://www.wikidata.org/wiki/Q18426">The Bronx</Link>,
            NY.
          </p>
        </div>

        {/* Collapsible content */}
        {showMore && (
          <div className="additional-content">
            <p
              className="pt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Serving a wide range of clients, including property owners,
              real-estate firms, architects, and engineers, we are committed to
              preserving the historical beauty of brownstone buildings. With a
              highly experienced team of workers, we take pride in our attention
              to detail and the quality of our work.
            </p>

            <p
              className="pt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Trusted Contractor for Brownstone Restoration Near Me in Brooklyn,
              Queens, The Bronx, and Manhattan, New York City. Operating in key
              locations such as Park Slope, Brooklyn Heights, Downtown Brooklyn,
              Cobble Hill, Dumbo, Red Hook, Crown Heights, Chelsea, Riverside,
              Harlem, The Bronx, and Queens, we are proud to be one of the
              leading brownstone restoration specialists in NYC.
            </p>
            <p
              className="pt-6 text-xl md:text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC is a leading provider of quality
              restoration services in the tri-state area. With a focus on
              precision, punctuality, and professionalism, we specialize in
              painting and masonry. Our goal is to deliver exceptional results
              to our clients while maintaining cost-effectiveness.
            </p>

            <p
              className="mt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Best painting and masonry Contractor in{" "}
              <Link href="https://www.wikidata.org/wiki/Q18419">Brooklyn</Link>,{" "}
              <Link href="https://www.wikidata.org/wiki/Q11299">Manhattan</Link>
              , <Link href="https://www.wikidata.org/wiki/Q18424">Queens</Link>,
              and{" "}
              <Link href="https://www.wikidata.org/wiki/Q18426">The Bronx</Link>
              , NY.
            </p>

            <p
              className="pt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Serving a wide range of clients, including property owners,
              real-estate firms, architects, and engineers, we are committed to
              enhancing the beauty and durability of interior spaces. With a
              highly experienced team of workers, we take pride in our attention
              to detail and the quality of our work.
            </p>

            <p
              className="pt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Trusted Contractor for painting and masonry Near Me in Brooklyn,
              Queens, The Bronx, and Manhattan, New York City. Operating in key
              locations such as Park Slope, Brooklyn Heights, Downtown Brooklyn,
              Cobble Hill, Dumbo, Red Hook, Crown Heights, Chelsea, Riverside,
              Harlem, The Bronx, and Queens, we are proud to be one of the
              leading interior renovation specialists in NYC.
            </p>
            <p
              className="pt-6 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              {" "}
              We bring over a decade of expertise in restoring and preserving
              the historic architecture of NYC’s five boroughs. Specializing in
              brownstone and limestone facades, stucco finishes, and landmark
              exteriors, we combine traditional craftsmanship with modern
              techniques to revitalize the city’s iconic buildings. Whether
              repairing intricate details or ensuring compliance with
              preservation standards, we’re dedicated to maintaining the
              timeless beauty of New York’s architectural heritage.
            </p>
          </div>
        )}

        {/* Read More/Less button */}
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
