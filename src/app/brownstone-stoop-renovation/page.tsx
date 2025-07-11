import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrownstoneStoopRenovationPage = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-36 sm:pt-32 md:pt-32 pb-12 text-base sm:text-lg leading-relaxed">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-tertiary md:mb-4 md:py-5">
          Brownstone Stoop Renovation Services in NYC
        </h1>
        {/* Why Choose Us */}
        <section className="my-10 flex flex-col xl:flex-row items-center gap-8 px-4 md:px-12 lg:px-48">
          {/* Bullet Points */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl text-center mb-8">
              By Infinity Construction NYC
            </h3>

            <p>
              Looking to restore or repair your brownstone stoop?{" "}
              <Link href="/" rel="noopener noreferrer" target="_blank">
                Infinity
              </Link>
              Construction NYC offers expert brownstone stoop renovation in NYC,
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
              . Our skilled team specializes in stoop repair, replacement, and
              custom restoration that preserve historic charm and meet modern
              safety standards.
            </p>
            <h3 className="text-2xl sm:text-3xl mb-4 pt-4">
              Trusted NYC Stoop Repair Contractors
            </h3>
            <p>
              At Infinity Construction NYC, we handle everything from brownstone
              step replacement to full stoop rebuilds in Brooklyn. Our
              experienced masons restore worn entryways, repair damaged steps,
              and perform detailed stoop stone replacement using high-quality
              materials. We&apos;re also experts in facade and porch
              restoration, waterproofing, and brownstone resurfacing.
            </p>
            <h4 className="text-xl mt-6 mb-4">Our services include:</h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Custom brownstone stoop restoration</li>
              <li>Licensed stoop repair NYC</li>
              <li>Front stoop brickwork</li>
              <li>Brownstone stair repair and resurfacing</li>
              <li>Code-compliant stoop renovations</li>
            </ul>
            <h3 className="text-2xl sm:text-3xl">
              Local Experts in Every Borough
            </h3>
            <p>We proudly serve all of NYC:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Brooklyn:Historic stoop rebuilds and step repair</li>
              <li>Manhattan:Elegant entry and front step restoration</li>
              <li>Queens:Affordable stoop renovation with expert masonry</li>
              <li>
                Bronx:Skilled stoop masonry contractors and repair services
              </li>
            </ul>
            <p>
              Searching for stoop repair near me NYC or brownstone stoop
              specialist NYC? Infinity Construction NYC is just a call away!
            </p>
          </div>

          {/* Image */}
          {/* Image Gallery */}
          <div className="flex-1 space-y-4">
            {/* Image 1 */}
            <div className="relative w-96 h-40 lg:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/paving/Brownstone Stoop Renovation Services in Brooklyn.JPEG"
                alt="NYC Brownstone Stoop Renovation"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-96 h-40 lg:h-96 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/paving/Brownstone Stoop Renovation Services in NYC.JPEG"
                alt="Brownstone Stoop Before Restoration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="my-10 px-4 md:px-12 lg:px-48">
          <h3 className="text-2xl sm:text-3xl mb-4">
            Why Choose Infinity Construction NYC?
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Fully licensed and insured</li>
            <li>Deep experience with historical stoop restoration</li>
            <li>Handle all permits and code compliance</li>
            <li>High-quality workmanship with local expertise</li>
          </ul>
          <p className="mt-4">
            As one of the top stoop renovation companies in NYC, our goal is to
            enhance curb appeal, safety, and value through precise
            craftsmanship. From cracked stoop repairs to full entryway
            restorations, our results speak for themselves.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="my-10 px-4 md:px-12 lg:px-48">
          <h3 className="text-2xl sm:text-3xl mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <strong>How much does stoop repair cost in NYC?</strong>
              <p>
                Costs vary. Use our brownstone repair cost estimator for a free
                quote.
              </p>
            </div>
            <div>
              <strong>Do I need a permit for stoop renovation?</strong>
              <p>
                Yes. We manage all necessary stoop renovation permits and city
                approvals.
              </p>
            </div>
            <div>
              <strong>When should I replace my stoop?</strong>
              <p>
                Signs include cracks, uneven steps, or structural leaning—time
                for stoop replacement.
              </p>
            </div>
            <div>
              <strong>
                What&apos;s the difference between a stoop and steps?
              </strong>
              <p>
                The stoop includes the platform and railings; steps are the
                stairs alone.
              </p>
            </div>
            <div>
              <strong>Any maintenance tips?</strong>
              <p>
                We offer expert brownstone stoop maintenance tips to keep your
                structure safe and beautiful year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="my-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm px-4 md:px-12 lg:px-48">
          <h4 className="text-xl sm:text-2xl mb-2">
            Call Infinity Construction NYC Today
          </h4>
          <p>
            Whether you need Brooklyn brownstone stoop contractors, Bronx
            masonry experts, or stoop renovation in Manhattan, Infinity
            Construction NYC is your trusted partner. We&apos;re committed to
            restoring NYC&apos;s historic architecture with care and
            craftsmanship.
          </p>
          <p className="mt-2">
            Contact us today to schedule a free site visit or consultation!
          </p>
          <p className="mt-2">
            <a href="tel:+13479395779">(347) 939‑5779</a>
          </p>
        </section>
        <ProjectsSection />
      </main>

      <Footer />
      <PhoneCall />
    </div>
  );
};

export default BrownstoneStoopRenovationPage;
