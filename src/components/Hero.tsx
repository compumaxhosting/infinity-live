"use client";

import React, { useState } from "react";
const HeroSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20 dark:border-b">
      <div className="max-w-7xl w-full">
        {/* Top Heading */}
        <p className="text-4xl sm:text-5xl md:text-6xl text-black dark:text-white font-forum text-center py-10 sm:py-12 md:py-14 md:pb-6">
          Infinity Construction NYC
        </p>

        <p className="text-xl md:text-2xl text-[#0a6dad] dark:text-[#4dd0e1] mb-6 text-center">
          Brownstone & Facade Restoration Specialists in New York City
        </p>

        <h2 className="text-lg text-primary dark:text-[#90caf9] sm:mb-2 text-center">
          Licensed & Insured.
        </h2>

        {/* SEO Heading */}
        <h1 className="text-2xl md:text-3xl text-[#042c46] dark:text-[#90caf9] text-center font-bold mt-6">
          Infinity Construction NYC: Brownstone Restoration & Renovation Experts
        </h1>

        <p
          className="pt-2 text-lg leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Infinity Construction NYC is a New York City restoration and exterior
          construction company specializing in brownstone, limestone, facade and
          masonry restoration. Since 2001, we have provided restoration and
          repair services for residential and commercial properties throughout
          Brooklyn, Manhattan, Queens and The Bronx. Our work includes
          brownstone and limestone restoration, stoop restoration, facade
          repair, brick pointing and repointing, masonry repair, waterproofing,
          roofing and exterior restoration.
        </p>

        {/* Expandable Content */}
        {showMore && (
          <div className="content-section">
            <p
              className="mt-2 text-lg leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              We focus on repairing deteriorated building exteriors while
              maintaining the architectural character of NYC properties. For
              historic and landmarked buildings, restoration requirements can
              vary by property and scope of work. We work with property owners
              to understand the condition of the building, determine the
              appropriate restoration approach and coordinate the required work.
              Serving New York City property owners since 2001.
            </p>
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
