import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-6 sm:pt-24 pb-12 text-base sm:text-lg leading-relaxed px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-tertiary mb-4 py-5">
          Brownstone Repair & Restoration Services in NYC
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8">
          Serving Brooklyn, Manhattan, Queens & The Bronx
        </h2>

        <section className="space-y-4">
          <p>
            At Infinity Construction NYC, we provide professional brownstone
            repair and restoration services throughout{" "}
            <a
              href="https://www.wikidata.org/wiki/Q18419"
              className="text-inherit no-underline"
            >
              Brooklyn
            </a>
            ,{" "}
            <a
              href="/https://www.wikidata.org/wiki/Q11299"
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
            . Whether your historic brownstone needs facade restoration, lintel
            replacement, brownstone patching, or stoop repair, our skilled team
            delivers high-quality craftsmanship using durable materials and
            code-compliant practices.
          </p>
          <p>
            We specialize in revitalizing New York’s iconic brownstones by
            combining traditional masonry techniques with modern innovations.
            From sandstone surface erosion to moisture infiltration and
            structural cracking, we offer customized solutions that preserve
            both aesthetic appeal and structural integrity.
          </p>
        </section>

        <section className="my-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Text content */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              ✅ Why Choose Our NYC Brownstone Experts?
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Licensed & Insured Brownstone Contractors</li>
              <li>Over 15 Years of Experience in NYC Boroughs</li>
              <li>Use of High-Performance Mortars & Waterproof Coatings</li>
              <li>Detailed Brownstone Pointing & Cornice Refurbishment</li>
              <li>Landmark Preservation Commission (LPC) Compliant</li>
              <li>OSHA-Certified Workmanship & Scaffolding Safety</li>
              <li>Transparent Pricing & Free Site Inspections</li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-96 h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/project-img-4.jpg"
              alt="NYC Brownstone Experts"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="my-10 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
            🧱 Our Specialized Brownstone Services Include:
          </h3>
          <div className="space-y-4">
            <div>
              <strong>🧱 Brownstone Facade Restoration NYC</strong>
              <p>
                We clean, patch, and restore brownstone facades using
                historic-friendly mortar and pigmented resurfacing techniques
                that match the original design.
              </p>
            </div>
            <div>
              <strong>
                🪜 Brownstone Stoop Repair – Brooklyn, Manhattan & Beyond
              </strong>
              <p>
                We repair damaged stoops, replace worn treads, and anchor
                railings securely using durable materials that resist cracking
                and weathering.
              </p>
            </div>
            <div>
              <strong>
                🏚 Structural Brownstone Repair – Queens & The Bronx
              </strong>
              <p>
                We address spalling, lintel deterioration, and substrate erosion
                using proper reinforcement systems and mortar repointing
                techniques to restore structural safety.
              </p>
            </div>
            <div>
              <strong>💧 Brownstone Waterproofing NYC</strong>
              <p>
                Protect your home from NYC’s unpredictable weather with advanced
                waterproof coatings, flashing systems, and foundation sealing.
              </p>
            </div>
            <div>
              <strong>🧱 Brownstone Patching & Repointing</strong>
              <p>
                Using hydraulic lime mortar, pigmented cement, and precision
                tooling, we fill cracks, replace missing joints, and restore
                your masonry’s visual appeal and strength.
              </p>
            </div>
            <div>
              <strong>🏛 Trusted for Historic Brownstone Restoration</strong>
              <p>
                Infinity Construction NYC complies with all Landmark
                Preservation Commission (LPC) regulations to maintain the
                historical value of your property. Whether you&apos;re in Park
                Slope, Harlem, Astoria, or Fordham, we serve all NYC
                neighborhoods with unmatched attention to detail.
              </p>
            </div>
          </div>
        </section>

        <section className="my-10">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Related Services:
          </h4>
          <ul className="list-disc ml-6 space-y-1">
            <li>Brick Pointing NYC</li>
            <li>Roof Restoration & Weatherproofing</li>
            <li>
              <a
                href="https://www.infinityconstructionnyc.com"
                className="text-inherit no-underline"
              >
                Parapet Wall Repair
              </a>
            </li>
            <li>Fire Escape Restoration</li>
          </ul>
        </section>

        <section className="my-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            📞 Call Infinity Construction NYC Today!
          </h4>
          <p>
            Looking for a brownstone contractor near you in NYC? Trust Infinity
            Construction NYC for reliable and affordable brownstone repair and
            masonry restoration in Brooklyn, Manhattan, Queens, and The Bronx.
          </p>
          <p className="mt-2 font-semibold">
            ✅ Schedule your free site inspection and estimate today!
          </p>
          <p className="mt-2">
            🌐 Visit{" "}
            <a
              href="https://www.infinityconstructionnyc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              www.infinityconstructionnyc.com
            </a>
          </p>
        </section>
      </main>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
