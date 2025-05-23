import Link from "next/link";
import React from "react";

const BrownstoneRenovationBrooklynNyBrownstoneRepairContractors = () => {
  return (
    <section className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20">
      <div className="max-w-7xl w-full">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl 2xl:text-6xl text-black dark:text-white font-forum text-left py-10 sm:py-12 md:py-14 md:pb-6  mx-auto sm:px-20 ">
          Brownstone Restoration in NYC
        </h1>
        <p className="pt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify">
          <strong>Trusted Experts in Preserving Historic Buildings</strong>
        </p>

        {/* Description Section */}
        <p className="pt-6 text-xl md:text-2xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-20 text-justify">
          <strong>
            Why Choose Infinity Construction NYC for Brownstone Restoration in
            New York City?
          </strong>
        </p>
        <p className="mt-4 text-xl md:text-2xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-justify">
          {" "}
          <Link href="/">
            At Infinity Construction NYC
          </Link>
          , we specialize in{" "}
          <Link href="/brownstone-restoration">
            brownstone restoration in Brooklyn
          </Link>
          , historic facade repair in Manhattan, and structural building repair
          across Queens and The Bronx. With decades of experience in restoring
          New York City&apos;s historic architecture, we are your trusted
          partner in preserving both beauty and structural integrity.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-justify">
          We combine old-world craftsmanship with modern restoration techniques
          to deliver durable and authentic results, making us one of the
          top-rated restoration contractors in NYC.
        </p>

        {/* Services Section Title */}
        <p className="mt-10 text-2xl md:text-4xl font-semibold text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-justify">
          Our Specialized Brownstone & Historic Restoration Services
        </p>

        {/* Services List */}
        <ul className="pt-4 text-xl text-slate-800 dark:text-slate-300 leading-8 mx-auto sm:px-20 pl-6 list-disc">
          <li className="text-justify">
            <strong>Historic Building & Landmark Restoration:</strong> Preserve
            the legacy of your property with our expert{" "}
            <Link href="/historical-landmark">
              landmark restoration services in NYC
            </Link>
            . From architectural detailing to structural upgrades, we help
            restore the elegance and charm of landmarked buildings across all
            five boroughs.
          </li>
          <li className="text-justify">
            <strong>Brownstone Facade Repair & Structural Restoration:</strong>{" "}
            Our core focus is{" "}
            <Link href="/brownstone-renovation-brooklyn-ny-brownstone-repair-contractors">
              brownstone renovation and facade repair in Brooklyn and Manhattan
            </Link>
            . Whether your brownstone needs minor repairs or complete facade
            restoration, we bring precision and care to every project.
          </li>
          <li className="text-justify">
            <strong>Roofing for Historic Properties:</strong> We provide{" "}
            <Link href="/roofing">roofing services for historic buildings</Link>
            , including flat roof installation, leak repairs, and
            weatherproofing solutions tailored to NYC’s older structures.
          </li>
          <li className="text-justify">
            <strong>Brick Pointing & Masonry Work</strong> Restore your
            building’s structure and appearance with precise{" "}
            <Link href="/brick-pointing">
              <span>brick pointing and masonry repair</span>
            </Link>
            . We use traditional tuckpointing techniques to maintain historical
            accuracy while strengthening the facade.
          </li>
          <li className="text-justify">
            <strong>Fire Escape Repair & Waterproofing:</strong> Ensure safety
            and compliance with professional{" "}
            <Link href="/fire-escape-restoration">
              <span>fire escape restoration services</span>
            </Link>
            . Our team handles inspections, rust removal, waterproofing, and
            code-compliant upgrades across NYC.
          </li>
          <li className="text-justify">
            <strong> Cornice Repair & Restoration:</strong> Bring back the
            architectural charm of your property with expert cornice repair. We
            restore wood and metal cornices with a focus on preserving original
            design elements.
          </li>
        </ul>

        {/* Additional Info Section */}
        <h2 className="text-3xl sm:text-4xl 2xl:text-5xl text-black dark:text-white font-forum py-10 sm:py-12 md:py-14 md:pb-6 sm:px-20 text-justify">
          Did You Know?
        </h2>
        <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-300 leading-7 mx-auto sm:px-20 text-justify">
          Over 70% of New York City’s brownstones that are over 50 years old
          suffer from structural or facade damage due to weather exposure and
          neglect. Our restoration services are designed to reverse this damage
          using high-quality materials and time-tested techniques.
        </p>

        {/* Final Call to Action */}
        <p className="mt-6 text-lg md:text-xl text-justify text-slate-700 dark:text-slate-400 sm:px-20">
          Proudly serving:{" "}
          <Link href="https://www.wikidata.org/wiki/Q18419">Brooklyn</Link>,{" "}
          <Link href="https://www.wikidata.org/wiki/Q11299">Manhattan</Link>,{" "}
          <Link href="https://www.wikidata.org/wiki/Q18424">Queens</Link>,{" "}
          <Link href="https://www.wikidata.org/wiki/Q18426">The Bronx</Link>,{" "}
          <Link href="https://www.wikidata.org/wiki/Q60">New York City.</Link>
        </p>
      </div>
    </section>
  );
};

export default BrownstoneRenovationBrooklynNyBrownstoneRepairContractors;
