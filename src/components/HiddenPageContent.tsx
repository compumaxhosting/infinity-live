"use client";
import Link from "next/link";
import React from "react";

const HiddenPageContent = () => {
  return (
    <>
      <section
        className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-24 sm:pt-12 lg:pt-4 pb-6 sm:pb-20"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Infinity Construction NYC",
            description:
              "Brooklyn-based construction and restoration company serving all five boroughs of New York City",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brooklyn",
              addressRegion: "NY",
              addressCountry: "US",
            },
            areaServed: {
              "@type": "State",
              name: "New York",
            },
            keywords:
              "New York construction, Brooklyn contractors, NYC restoration",
          })}
        </script>

        <div className="max-w-7xl w-full">
          <p
            className="mt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-center md:text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            If you own a brownstone in{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q11299"
              rel="noopener noreferrer"
              target="_blank"
            >
              Manhattan
            </Link>
            , proper restoration and repair are key to keeping its charm and
            value.{" "}
            <Link
              href="/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Infinity Construction NYC
            </Link>{" "}
            specializes in Manhattan brownstone restoration and brownstone
            repair Manhattan, providing expert care from brownstone facade
            restoration NYC to historic brownstone restoration Manhattan. Our
            team handles everything from brownstone masonry repair Manhattan and
            brick pointing Manhattan to brownstone waterproofing Manhattan that
            protects your home from weather damage. Infinity Construction NYC
            also offers historical landmark brownstone restoration Manhattan,
            including brownstone limestone restoration Manhattan, to preserve
            your building’s unique character. For exterior care, we provide
            stucco waterproofing Manhattan as well as waterproofing for
            exterior, parapet, and retaining walls to keep moisture out. Our
            services include brick laying Manhattan and CMU block laying
            Manhattan for strong, lasting walls. When it’s time for roof work,
            we offer roof restoration Manhattan and roof weatherproofing
            Manhattan to keep you safe and dry. We restore fire escapes, metal
            railings, and fences with a keen eye for detail, plus expert
            concrete, stone, and brick paving. Finally, our masonry painting
            Manhattan and masonry restoration Manhattan services complete the
            look while protecting your investment. For reliable, professional
            brownstone repair and restoration in Manhattan, Infinity
            Construction NYC is the team to trust. Ready to keep your brownstone
            looking great for years to come.
          </p>
          {/* Section Subheading */}
        </div>
      </section>
    </>
  );
};

export default HiddenPageContent;
