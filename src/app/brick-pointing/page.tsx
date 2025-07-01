import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import Script from "next/script"; // ✅ For structured data

export const metadata = {
  title:
    "Professional Brick Pointing & Waterproofing Services in NYC | Infinity Construction",
  description:
    "Expert brick repointing, tuckpointing and waterproofing solutions for NYC buildings. Protect and restore your masonry with our certified services.",
  keywords: [
    "brick pointing NYC",
    "tuckpointing services",
    "masonry waterproofing",
    "brick repointing contractors",
    "waterproofing solutions NYC",
    "mortar repair specialists",
    "brick restoration",
    "masonry preservation",
  ],
};

const BrickPointingWaterproofingPage = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="json-ld-brick-pointing"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Brick Pointing and Waterproofing",
            description:
              "Expert brick pointing, tuckpointing, and waterproofing services across New York City by Infinity Construction NYC.",
            provider: {
              "@type": "LocalBusiness",
              name: "Infinity Construction NYC",
              image: "https://www.infinityconstructionnyc.com/logo-new.png",
              url: "https://www.infinityconstructionnyc.com",
              telephone: "+1-347-939-5779",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1809 Albany Ave",
                addressLocality: "Brooklyn",
                addressRegion: "NY",
                postalCode: "11210",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/infinityconstructionnyc",
                "https://www.instagram.com/infinity_construction_nyc",
                "https://www.linkedin.com/in/imrul-hassan-403724268",
              ],
            },
            areaServed: {
              "@type": "Place",
              name: "New York City",
            },
            serviceType:
              "Brick Repointing, Tuckpointing, Masonry Waterproofing",
          }),
        }}
      />

      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />
        <main
          className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b text-lg lg:text-xl"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <h1
            className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8"
            itemProp="name"
          >
            Brick Pointing and Waterproofing
          </h1>

          <section itemScope itemType="https://schema.org/LocalBusiness">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <Image
                width={300}
                height={200}
                src="/brick-pointing/brick-img-1.JPG"
                alt="Professional brick pointing services in New York City"
                className="w-full lg:w-1/2 rounded-lg shadow-lg h-60 object-cover"
                itemProp="image"
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Brick Pointing</h2>
                <p className="text-lg text-justify" itemProp="description">
                  Brick pointing is the process of filling mortar joints to seal
                  and complete newly constructed brickwork. It is also a crucial
                  maintenance and repair technique for aging structures. If your
                  building requires repairs or maintenance, repointing or
                  tuckpointing may be the ideal solution to restore both its
                  strength and appearance.
                </p>
              </div>
            </div>

            <h2 className="text-4xl my-4">Our Brick Pointing Services</h2>
            <ul
              itemProp="hasOfferCatalog"
              itemScope
              itemType="https://schema.org/OfferCatalog"
            >
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • <strong className="font-medium">Repointing:</strong>{" "}
                <span itemProp="description">
                  We carefully remove old, damaged mortar and replace it with
                  fresh mortar to restore the strength, stability, and
                  durability of your brickwork.
                </span>
              </li>
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • <strong className="font-medium">Tuckpointing:</strong>{" "}
                <span itemProp="description">
                  For a polished and aesthetically appealing look, we match the
                  mortar color to the brick and add fine white or contrasting
                  lines to create a clean, decorative finish.
                </span>
              </li>
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • <strong className="font-medium">Mortar Matching:</strong>{" "}
                <span itemProp="description">
                  Our team uses custom mortar blends to ensure seamless repairs
                  that perfectly match the existing brickwork, maintaining the
                  architectural integrity of your structure.
                </span>
              </li>
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                •{" "}
                <strong className="font-medium">Crack and Gap Repairs:</strong>{" "}
                <span itemProp="description">
                  We fill gaps and cracks in brick and mortar to prevent water
                  infiltration and protect your building from further damage.
                </span>
              </li>
            </ul>

            <p className="text-justify" itemProp="description">
              Whether your focus is structural restoration or aesthetic
              enhancement, our team is dedicated to delivering exceptional
              results with precision and care.
            </p>
          </section>

          <section>
            <div className="flex flex-col lg:flex-row items-center gap-6 mt-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl my-4">
                  Protect Your Brickwork with Waterproofing Services
                </h2>
                <p className="text-justify" itemProp="description">
                  Water damage is one of the most common threats to
                  masonry.&nbsp;
                  <Link href="/" itemProp="url">
                    At Infinity Construction NYC
                  </Link>
                  , we offer waterproofing solutions that protect your brickwork
                  from moisture-related issues like mold, efflorescence, and
                  structural degradation.
                </p>
              </div>
              <Image
                width={800}
                height={600}
                src="/waterproofing/waterproofing-img-2.JPG"
                alt="Professional masonry waterproofing services in NYC"
                className="w-full lg:w-1/2 rounded-lg shadow-lg h-60 object-cover"
                itemProp="image"
              />
            </div>

            <h2 className="text-4xl my-4">
              Our Waterproofing Services Include:
            </h2>
            <ul
              itemProp="hasOfferCatalog"
              itemScope
              itemType="https://schema.org/OfferCatalog"
            >
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • <strong className="font-medium">Masonry Sealing:</strong>{" "}
                <span itemProp="description">
                  We apply breathable sealants to create a protective barrier
                  against water infiltration while allowing vapor to escape,
                  preserving the integrity of your brickwork.
                </span>
              </li>
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                •{" "}
                <strong className="font-medium">
                  Leak Detection and Repair:
                </strong>{" "}
                <span itemProp="description">
                  Our experts identify and fix vulnerable areas prone to water
                  infiltration, such as cracks and gaps in brick or mortar.
                </span>
              </li>
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • <strong className="font-medium">Moisture Management:</strong>{" "}
                <span itemProp="description">
                  We install drainage solutions to redirect water away from
                  brick surfaces, reducing the risk of damage.
                </span>
              </li>
              <li
                className="text-justify"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                •{" "}
                <strong className="font-medium">Weatherproof Coatings:</strong>{" "}
                <span itemProp="description">
                  To protect your masonry from harsh weather conditions, we
                  apply coatings designed to withstand freeze-thaw cycles and
                  prevent weather-related wear.
                </span>
              </li>
            </ul>
          </section>

          <section
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <h2 className="text-4xl my-4">
              Why Choose Infinity Construction NYC?
            </h2>
            <ul className="mb-6">
              <div
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="Infinity Construction NYC" />
                <li className="text-justify" itemProp="reviewBody">
                  •{" "}
                  <strong className="font-medium">Expert Craftsmanship:</strong>{" "}
                  Our skilled team brings years of experience in brick pointing
                  and waterproofing, ensuring top-quality results.
                </li>
                <li className="text-justify" itemProp="reviewBody">
                  •{" "}
                  <strong className="font-medium">Customized Solutions:</strong>{" "}
                  We tailor our services to meet your building&apos;s unique
                  needs, whether for structural repairs or aesthetic
                  enhancements.
                </li>
                <li className="text-justify" itemProp="reviewBody">
                  •{" "}
                  <strong className="font-medium">
                    Commitment to Quality:
                  </strong>{" "}
                  Using premium materials and industry-leading techniques, we
                  ensure durable and long-lasting solutions.
                </li>
                <li className="text-justify" itemProp="reviewBody">
                  •{" "}
                  <strong className="font-medium">
                    Reliable and Professional Service:
                  </strong>{" "}
                  From start to finish, we prioritize clear communication,
                  timely completion, and superior workmanship.
                </li>
              </div>
            </ul>

            <p className="text-justify" itemProp="description">
              Protect and restore your brickwork with Infinity Construction NYC.
              Contact us today to learn more about our brick pointing and
              waterproofing services, and schedule a consultation with our
              experts.
            </p>
          </section>
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrickPointingWaterproofingPage;
