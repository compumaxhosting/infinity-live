import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import React from "react";

const BrownstoneStoopRenovationPage = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-6 sm:pt-24 lg:pt-28 pb-12 text-base sm:text-lg leading-relaxed px-12">
        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-tertiary mb-4 py-5">
          Brownstone Stoop Renovation Services in NYC
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8">
          Serving Brooklyn, Manhattan, Queens & The Bronx
        </h2>

        {/* Intro Section */}
        <section className="space-y-4">
          <p>
            At <strong>Infinity Construction NYC</strong>, we deliver expert{" "}
            <strong>brownstone stoop renovation</strong> services across{" "}
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
            . Whether your historic stoop needs resurfacing, step rebuilding, or
            handrail restoration, our licensed team combines traditional
            craftsmanship with durable, code‑compliant materials to preserve
            your brownstone’s iconic charm.
          </p>
          <p>
            NYC’s weather and everyday foot traffic can cause cracking,
            spalling, and stone erosion. We use{" "}
            <em>Landmark Preservation Commission</em>‑approved techniques and
            color‑matched mortars to restore strength, safety, and
            beauty—ensuring your stoop welcomes guests for generations to come.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="my-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Bullet Points */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
               Why Choose Our NYC Stoop Experts?
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Licensed & Insured Brownstone Contractors</li>
              <li>15+ Years Restoring NYC Brownstone Stoops</li>
              <li>LPC-Compliant Materials & Methods</li>
              <li>Precision Step Rebuilding & Tread Replacement</li>
              <li>Custom Rail & Baluster Restoration</li>
              <li>OSHA‑Certified Scaffolding & Site Safety</li>
              <li>Transparent Pricing & Free On‑Site Inspections</li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-96 h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/project-img-4.jpg"
              alt="NYC Brownstone Stoop Renovation"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Services List */}
        <section className="my-10 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
             Our Brownstone Stoop Renovation Services:
          </h3>
          <div className="space-y-4">
            <div>
              <strong> Stoop Resurfacing & Patching</strong>
              <p>
                We remove damaged layers and apply color‑matched mortar coatings
                that replicate the original brownstone texture and tone.
              </p>
            </div>
            <div>
              <strong> Step Rebuilding & Leveling</strong>
              <p>
                Cracked or sagging steps? We rebuild treads and risers with
                high‑performance stone mixes to restore safety and appearance.
              </p>
            </div>
            <div>
              <strong> Handrail & Baluster Restoration</strong>
              <p>
                From wrought‑iron rail repairs to new code‑compliant
                installations, we secure and refurbish railings for stability
                and style.
              </p>
            </div>
            <div>
              <strong> Waterproofing & Weatherproofing</strong>
              <p>
                Protect your stoop from NYC’s freeze‑thaw cycles with breathable
                sealants and flashing systems that prevent moisture
                infiltration.
              </p>
            </div>
            <div>
              <strong> Crack Injection & Joint Repointing</strong>
              <p>
                Using hydraulic lime and pigmented mortars, we fill cracks and
                repoint joints to stop water penetration and future decay.
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
            <li>Brownstone Facade Restoration NYC</li>
            <li>Brick Pointing & Masonry Repair</li>
            <li>Parapet Wall Repair</li>
            <li>Sidewalk Replacement (DOT Violations)</li>
          </ul>
        </section>

        {/* Call To Action */}
        <section className="my-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
             Call Infinity Construction NYC Today!
          </h4>
          <p>
            Looking for a <strong>brownstone stoop contractor near you</strong>{" "}
            in NYC? Trust Infinity Construction NYC for reliable and affordable
            stoop repair and masonry restoration in Brooklyn, Manhattan, Queens,
            and The Bronx.
          </p>
          <p className="mt-2 font-semibold">
             Schedule your free site inspection and estimate today!
          </p>
          <p className="mt-2">
            {" "}
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

export default BrownstoneStoopRenovationPage;
