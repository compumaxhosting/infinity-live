import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import React from "react";

const BrownstoneFacadeRestorationPage = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-6 sm:pt-24 lg:pt-28 pb-12 text-base sm:text-lg leading-relaxed px-12">
        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-tertiary mb-4 py-5">
          Brownstone Facade Restoration Services in NYC
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8">
          Serving Brooklyn, Manhattan, Queens & The Bronx
        </h2>

        {/* Intro Section */}
        <section className="space-y-4">
          <p>
            At <strong>Infinity Construction NYC</strong>, we specialize in{" "}
            <strong>brownstone facade restoration</strong> across{" "}
            <a
              href="https://www.wikidata.org/wiki/Q18419"
              className="text-inherit no-underline"
            >
              Brooklyn
            </a>
            ,{" "}
            <a
              href="https://www.wikidata.org/wiki/Q11299"
              className="text-inherit no-underline"
            >
              Manhattan
            </a>
            ,{" "}
            <a
              href="https://www.wikidata.org/wiki/Q18424"
              className="text-inherit no-underline"
            >
              Queens
            </a>
            , and{" "}
            <a
              href="https://www.wikidata.org/wiki/Q18426"
              className="text-inherit no-underline"
            >
              The Bronx
            </a>
            . Our licensed team revitalizes worn facades—repairing cracks,
            replacing damaged stone, and applying breathable coatings—while
            preserving the historic character New Yorkers love.
          </p>
          <p>
            Exposure to NYC’s freeze‑thaw cycles, pollution, and moisture can
            erode sandstone surfaces, weaken mortar joints, and cause spalling.
            We use <em>Landmark Preservation Commission</em>-approved
            techniques, color‑matched mortars, and period‑correct finishes to
            restore your facade’s strength, appearance, and value.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="my-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Bullet Points */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Choose Our NYC Facade Specialists?
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Licensed & Insured Brownstone Restoration Contractors</li>
              <li>15+ Years Restoring Historic NYC Facades</li>
              <li>LPC‑Compliant Cleaning & Repair Methods</li>
              <li>Precision Crack Repair & Stone Replacement</li>
              <li>Breathable Waterproofing & Protective Coatings</li>
              <li>OSHA‑Certified Site Safety & Scaffolding</li>
              <li>Detailed Color Matching & Pigmented Mortars</li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-96 h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/historical-landmark/historical-img-1.JPG"
              alt="NYC Brownstone Facade Restoration"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Services List */}
        <section className="my-10 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Our Brownstone Facade Restoration Services:
          </h3>
          <div className="space-y-4">
            <div>
              <strong>Facade Cleaning & Paint Removal</strong>
              <p>
                We gently remove grime, atmospheric staining, and failing paint
                using low‑pressure steam and chemical poultices approved for
                historic masonry.
              </p>
            </div>
            <div>
              <strong>Crack Stitching & Spall Repair</strong>
              <p>
                Structural cracks and stone spalls are stabilized and rebuilt
                using stainless pins, mesh, and custom pigmented stone mixes.
              </p>
            </div>
            <div>
              <strong>Stone Dutchman & Patch Repairs</strong>
              <p>
                Severely deteriorated sections are replaced with carved Dutchman
                stone or hand‑tooled patch repairs that blend seamlessly with
                existing masonry.
              </p>
            </div>
            <div>
              <strong>Repointing & Joint Renewal</strong>
              <p>
                We rake out loose mortar and repoint with lime‑based,
                color‑matched mortar to protect against water infiltration while
                maintaining vapor permeability.
              </p>
            </div>
            <div>
              <strong>Protective Coatings & Waterproofing</strong>
              <p>
                After repairs, we apply breathable water‑repellent coatings that
                shield the facade from moisture without trapping vapor.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="my-10">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Related Services:
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Brownstone Stoop Repair NYC</li>
            <li>Brick Pointing & Masonry Repair</li>
            <li>Parapet Wall Restoration</li>
            <li>Facade Waterproofing & Sealing</li>
          </ul>
        </section>

        {/* Call To Action */}
        <section className="my-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Call Infinity Construction NYC Today!
          </h4>
          <p>
            Ready to restore your brownstone facade? Choose the specialists
            trusted by homeowners across Brooklyn, Manhattan, Queens, and The
            Bronx.
          </p>
          <p className="mt-2 font-semibold">
            Schedule your free facade inspection and estimate today!
          </p>
          <p className="mt-2">
            <a href="tel:+13479395779" className="text-blue-600 underline">
              (347) 939‑5779
            </a>
          </p>
        </section>
      </main>

      <Footer />
      <PhoneCall />
    </div>
  );
};

export default BrownstoneFacadeRestorationPage;
