"use client";
import Link from "next/link";
import React from "react";

const AboutTemp = () => {
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
          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl 2xl:text-6xl text-black dark:text-white font-forum text-left mx-auto sm:px-20 py-10 sm:py-12 md:py-14 pb-0 md:pb-3"
            style={{ fontFamily: "var(--font-forum)" }}
            itemProp="name"
          >
            About Infinity Construction NYC: Building Trust Across New York City
          </h1>

          {/* Introduction Paragraph */}
          <p
            className="pt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
            itemProp="description"
          >
            At{" "}
            <Link href="/" itemProp="url">
              <span itemProp="legalName">Infinity Construction NYC</span>
            </Link>
            , we believe that every building tells a story — and we&apos;re here
            to ensure it stands strong for generations. Based in Brooklyn, New
            York, we are a team of passionate professionals committed to
            excellence in every project we take on.
          </p>

          {/* Description Paragraph */}
          <p
            className="mt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            As a trusted name in New York City&apos;s construction and
            restoration industry, our foundation is built on integrity,
            professionalism, and long-standing relationships with property
            owners, developers, and communities throughout the five boroughs.
          </p>
          <div className="flex justify-center sm:justify-start sm:px-20 mt-2">
            <button
              className="bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </button>
          </div>
          {/* Section Subheading */}
          <h2
            className="mt-10 text-2xl sm:text-3xl text-black dark:text-white font-forum text-left mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Rooted in New York, Trusted by New Yorkers
          </h2>

          <p
            className="mt-4 text-xl md:text-2xl text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Infinity Construction NYC proudly serves{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q11299"
              rel="noopener noreferrer"
              target="_blank"
            >
              Manhattan
            </Link>
            ,{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q18419"
              rel="noopener noreferrer"
              target="_blank"
            >
              Brooklyn
            </Link>
            ,{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q18424"
              rel="noopener noreferrer"
              target="_blank"
            >
              Queens
            </Link>
            ,{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q18426"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Bronx
            </Link>
            ,{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q60"
              rel="noopener noreferrer"
              target="_blank"
            >
              New York City
            </Link>
            . With deep knowledge of the city&apos;s building codes, local
            regulations, and architectural heritage, we understand what it takes
            to deliver quality work in a complex urban environment like New
            York. <br />
            Infinity Construction NYC is a trusted, locally-owned construction
            and restoration company based in Brooklyn, NY. We specialize in
            brownstone and limestone restoration, brick pointing, concrete work,
            stucco, waterproofing, and sidewalk repair across New York City,
            including Brooklyn, Queens, Manhattan, the Bronx. With years of
            hands-on experience, our skilled team is committed to preserving the
            beauty and structure of NYC’s historic buildings while delivering
            high-quality modern construction services. Whether it&apos;s
            restoring a Brooklyn brownstone façade or repairing sidewalks to
            remove DOT violations, we ensure long-lasting results and complete
            customer satisfaction.Choose Infinity Construction NYC for reliable,
            local, and professional service.
          </p>

          <p
            className="mt-4 text-xl md:text-2xl text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            From classic brownstones to modern high-rises, our team approaches
            every project with respect for the structure and the people who rely
            on it.
          </p>

          {/* What Sets Us Apart */}
          <h2
            className="mt-10 text-2xl sm:text-3xl text-black dark:text-white font-forum text-left mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            What Sets Us Apart
          </h2>

          <ul
            className="pt-4 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-8 mx-auto sm:px-20 list-disc list-inside"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            <li itemProp="makesOffer">
              Locally Owned and Operated in Brooklyn, NY
            </li>
            <li>Fully Licensed and Insured in New York State</li>
            <li>Years of Experience Working Across All Five Boroughs</li>
            <li>Hands-On Project Management from Start to Finish</li>
            <li>
              Reputation for Reliability, Clean Workmanship, and Clear
              Communication
            </li>
            <li>Client-Centered Approach Focused on Long-Term Trust</li>
          </ul>

          <p
            className="mt-6 text-xl md:text-2xl text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            We&apos;re not just another contractor — we&apos;re your neighbor,
            your advisor, and your partner in preserving and enhancing New York
            City&apos;s legacy.
          </p>

          {/* Our Commitment */}
          <h2
            className="mt-10 text-2xl sm:text-3xl text-black dark:text-white font-forum text-left mx-auto sm:px-20"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Our Commitment
          </h2>

          <ul
            className="pt-4 text-xl md:text-xl text-slate-800 dark:text-slate-300 leading-8 mx-auto sm:px-20 list-disc list-inside"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            <li>Meeting the highest standards of safety and quality</li>
            <li>
              Ensuring full transparency and honesty throughout the process
            </li>
            <li>Staying responsive to client needs and city requirements</li>
            <li>Delivering results that speak for themselves</li>
          </ul>

          {/* Closing Paragraph */}
          <p
            className="mt-6 text-xl md:text-2xl text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Headquartered in Brooklyn, we are proud to have earned the trust of
            clients across all boroughs of NYC. Whether you&apos;re a property
            owner, manager, or resident, we approach every project with care,
            attention, and respect for your investment and your community.{" "}
            <br />
            <br />
            Infinity Construction NYC delivers expert brownstone restoration and renovation,
            masonry, roofing, waterproofing, fire escape painting, and painting
            & plastering services across Brooklyn, Manhattan, Queens, and The
            Bronx. Proudly serving zip codes 11205, 11206, 11216, 11221, 11233,
            11238, 11215, 11217, 10026, 10027, 10030, 10031, 10035, 10037, and
            10039, our skilled team ensures every project meets NYC’s highest
            standards for quality and compliance. Choose Infinity Construction
            NYC for reliable, cost-effective restoration and renovation in your
            neighborhood!
          </p>

          {/* FAQ */}
          <div
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3
              className="mt-10 text-xl sm:text-2xl text-black dark:text-white font-forum text-left mx-auto sm:px-20"
              style={{ fontFamily: "var(--font-forum)" }}
              itemProp="name"
            >
              FAQ: Is Infinity Construction NYC a locally trusted company?
            </h3>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                className="mt-2 text-lg md:text-xl text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify"
                style={{ fontFamily: "var(--font-forum)" }}
                itemProp="text"
              >
                Yes! Infinity Construction NYC is a Brooklyn-based company with
                a long-standing reputation for quality work and professionalism
                throughout New York City.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTemp;
