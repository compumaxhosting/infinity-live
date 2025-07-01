import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import Script from "next/script"; // ✅ Added for structured data

export const metadata = {
  title:
    "Professional Roof Restoration & Weatherproofing Services in NYC | Infinity Construction",
  description:
    "Expert roof repair, restoration and weatherproofing solutions for NYC properties. Certified technicians using premium materials to protect against harsh weather conditions.",
  keywords: [
    "roof restoration NYC",
    "weatherproofing services",
    "roof repair New York",
    "commercial roofing contractors",
    "residential roof restoration",
    "waterproof roofing solutions",
    "roof inspection NYC",
    "licensed roofers",
  ],
};

const RoofRestorationPage = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="json-ld-roof-restoration"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Roof Restoration and Weatherproofing",
            description:
              "Certified roof restoration and waterproofing services for residential and commercial buildings across NYC by Infinity Construction NYC.",
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
            serviceType: "Roof Restoration, Roof Repair, Weatherproofing",
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
            Roof Restoration and Weatherproofing
          </h1>

          <section itemScope itemType="https://schema.org/LocalBusiness">
            <p className="text-lg" itemProp="description">
              Expert Roof Restoration & Weatherproofing Services in NYC <br />
              At{" "}
              <Link href="/" itemProp="url">
                Infinity Construction NYC
              </Link>
              , we specialize in comprehensive roof restoration and
              weatherproofing solutions designed to protect your property
              against New York&apos;s challenging weather conditions. Our
              certified technicians combine advanced materials and proven
              techniques to deliver durable, long-lasting results for
              residential and commercial properties.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
              <div className="w-full lg:w-8/12 p-4 space-y-6">
                <h2 className="text-4xl my-4">
                  Our Roof Restoration & Weatherproofing Process
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
                    • <strong>Thorough Inspection and Assessment:</strong>{" "}
                    <span itemProp="description">
                      Our process begins with a detailed inspection of your
                      roof&apos;s condition, bearing capacity, and existing
                      waterproofing systems. We identify issues such as leaks,
                      structural weaknesses, and areas prone to water
                      infiltration.
                    </span>
                  </li>
                  <li
                    className="text-justify"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    •{" "}
                    <strong>
                      Professional Cleaning and Surface Preparation:
                    </strong>{" "}
                    <span itemProp="description">
                      We remove debris, damaged shingles, and deteriorating
                      wood. The roof base is meticulously cleaned and prepared
                      to ensure optimal adhesion and performance of the new
                      materials.
                    </span>
                  </li>
                  <li
                    className="text-justify"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    • <strong>Structural Repairs and Reinforcement:</strong>{" "}
                    <span itemProp="description">
                      Using weather-treated plywood and structural beams, we
                      repair or replace damaged sections of the roof. This step
                      ensures the stability and longevity of the structure.
                    </span>
                  </li>
                  <li
                    className="text-justify"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    •{" "}
                    <strong>
                      Application of Premium Weatherproofing Materials:
                    </strong>{" "}
                    <span itemProp="description">
                      We install high-quality roofing materials, such as durable
                      shingles, membranes, and coatings. All materials are
                      expertly sealed to create a fully weatherproof system
                      capable of withstanding New York&apos;s harsh conditions.
                    </span>
                  </li>
                  <li
                    className="text-justify"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    •{" "}
                    <strong>
                      Quality Control Inspection and Documentation:
                    </strong>{" "}
                    <span itemProp="description">
                      Before finalizing the project, we conduct a comprehensive
                      quality control inspection to ensure all work meets our
                      high standards. Detailed documentation is provided for
                      your records and peace of mind.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 p-4 space-y-6">
                <Image
                  src="/roofing/roofing-img-2.JPG"
                  width={300}
                  height={300}
                  alt="Professional roof restoration and weatherproofing by Infinity Construction NYC"
                  className="w-full rounded-lg shadow-md h-60 object-cover"
                  itemProp="image"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl my-4">
              Why Choose Infinity Construction NYC?
            </h2>
            <ul
              itemProp="review"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div
                itemProp="itemReviewed"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content="Infinity Construction NYC" />
                <li className="text-justify" itemProp="reviewBody">
                  • <strong>Licensed, Bonded, and Insured:</strong> We are fully
                  certified by the NYC Department of Buildings, giving you
                  confidence in our professionalism and compliance with local
                  regulations.
                </li>
                <li className="text-justify" itemProp="reviewBody">
                  • <strong>Experienced and Certified Technicians:</strong> Our
                  team is trained to handle even the most complex roof
                  restoration projects, ensuring exceptional workmanship and
                  results.
                </li>
                <li className="text-justify" itemProp="reviewBody">
                  • <strong>Commitment to Quality:</strong> We use only the best
                  materials and techniques, ensuring your roof remains durable,
                  functional, and aesthetically pleasing for years to come.
                </li>
                <li className="text-justify" itemProp="reviewBody">
                  • <strong>Customer-Focused Approach:</strong> At Infinity
                  Construction NYC, we prioritize clear communication and client
                  satisfaction. From the initial consultation to project
                  completion, we keep you informed every step of the way.
                </li>
              </div>
            </ul>
            <ProjectsSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RoofRestorationPage;
