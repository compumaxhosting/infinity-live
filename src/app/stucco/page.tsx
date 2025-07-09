import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export const metadata = {
  title:
    "Stucco & Waterproofing Services NYC | Exterior, Parapet & Retaining Walls",
  description:
    "Professional stucco restoration and waterproofing services for exterior walls, parapets, and retaining walls in NYC. Protect your property with our certified solutions.",
  keywords: [
    "stucco restoration NYC",
    "waterproofing services New York",
    "exterior wall repair",
    "parapet waterproofing",
    "retaining wall protection",
    "building envelope solutions",
    "stucco repair contractors",
    "waterproofing specialists NYC",
  ],
};

const StuccoWaterproofingPage = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="json-ld-stucco"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Stucco and Waterproofing Services",
            description:
              "Professional stucco restoration and waterproofing services for exterior walls, parapets, and retaining walls in NYC by Infinity Construction NYC.",
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
              "Exterior Stucco Waterproofing, Parapet Repair, Retaining Wall Sealing",
          }),
        }}
      />

      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />
        <main
          className="container mx-auto pt-40 sm:pt-48 2xl:pt-36 border-b text-lg md:text-2xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          {/* Main Title */}
          <h1
            className="text-center text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8"
            itemProp="name"
          >
            Stucco/ Waterproofing of Exterior, Parapet, and Retaining Walls
          </h1>

          {/* Introduction Paragraph */}
          <section itemScope itemType="https://schema.org/LocalBusiness">
            <p
              className="text-xl md:text-2xl text-slate-800 leading-7 pb-4"
              itemProp="description"
            >
              Stucco restoration and waterproofing of exterior walls, parapets,
              and retaining walls are essential repairs to maintain the surface
              stability and structural integrity of any building. Cracks or
              missing joints can lead to water seepage, causing severe water
              damage and compromising the building&apos;s safety. With decades
              of experience protecting New York&apos;s diverse architecture,{" "}
              <span itemProp="name">Infinity Construction NYC </span>
              delivers expert waterproofing solutions for residential and
              commercial properties. Our certified technicians employ advanced
              techniques and premium materials to ensure your structure remains
              protected against water damage.
            </p>
            <div className="flex justify-center lg:justify-start mb-2">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white py-2 px-6 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
            </div>
            {/* Section with Image and Content */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
              {/* Left Section - Content */}
              <div className="w-full lg:w-8/12 p-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl my-4">
                  Inspection and Assessment
                </h2>
                <p
                  className="text-xl md:text-2xl text-slate-800 leading-7 text-justify mb-4"
                  itemProp="description"
                >
                  Our process begins with a thorough inspection of the existing
                  structure. We carefully examine for:
                </p>
                <ul className="text-xl md:text-2xl text-slate-800 space-y-4 mb-8">
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Cracks and spalls in the stucco.
                  </li>
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Water damage within the stucco layers.
                  </li>
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Missing or deteriorating waterproofing paint or membrane.
                  </li>
                </ul>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl my-4">
                  Stucco Restoration Process
                </h2>
                <ul className="text-xl md:text-2xl text-slate-800 space-y-4">
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Damage Removal: We completely remove the damaged layer to
                    expose the foundational surface, ensuring all compromised
                    material is cleared to prevent future issues.
                  </li>
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Reinforcement Application: We apply wire mesh, steel
                    strips, or thin rebars to reinforce the structure, providing
                    added stability and preventing future cracks.
                  </li>
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Application of Mortar Layers: Multiple layers of
                    waterproof mortar mixtures are applied to rebuild the
                    surface, ensuring the material is compatible with the
                    existing structure.
                  </li>
                  <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                    • Finishing Touches: The restored stucco is carefully
                    smoothed and shaped to match the original design. We pay
                    close attention to decorative details and ensure a seamless
                    appearance.
                  </li>
                </ul>
              </div>

              {/* Right Section - Image */}
              <div className="w-full lg:w-4/12 p-4">
                <Image
                  src="/stucco/stucco-img-2.JPG"
                  width={600}
                  height={600}
                  alt="Professional stucco restoration and waterproofing services in New York City"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                  itemProp="image"
                />
              </div>
            </div>
          </section>

          {/* Waterproofing Process */}
          <section
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl my-8">
              Waterproofing Process
            </h2>
            <p
              className="text-justify text-xl lg:text-2xl mb-8 leading-7"
              itemProp="description"
            >
              For new or existing stucco on exterior walls, parapets, and
              retaining walls, our waterproofing process involves:
            </p>
            <ul className="text-xl md:text-2xl text-slate-800 space-y-4 mb-8">
              <li
                className="text-justify leading-7"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • Surface Preparation: We ensure the surface is clean, smooth,
                and dry before applying any waterproofing materials. This may
                include power washing, sanding, or chemical treatments to remove
                debris and contaminants.
              </li>
              <li
                className="text-justify leading-7"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • Primer Application: A high-quality primer is applied to
                enhance adhesion and create a strong base for the waterproof
                coating.
              </li>
              <li
                className="text-justify leading-7"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • Waterproof Coating Application: We use premium products such
                as MasterProtect HB 200 Exterior Paint, known for its
                exceptional weathering resistance, bright color retention, and
                fade resistance. This coating is applied in multiple layers to
                ensure a uniform and durable barrier against water infiltration.
              </li>
              <li
                className="text-justify leading-7"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • Sealing and Detailing: We meticulously seal all joints,
                corners, and potential weak points to prevent water penetration.
                Special attention is given to areas prone to pooling or
                excessive exposure to moisture.
              </li>
              <li
                className="text-justify leading-7"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                • Final Inspection: Once the waterproofing process is complete,
                we perform a detailed inspection to ensure the application is
                flawless and meets our high standards.
              </li>
            </ul>
          </section>

          {/* Specialized Waterproofing Services */}
          <section>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl my-8">
              Specialized Waterproofing Services
            </h2>
            <ul className="text-xl md:text-2xl text-slate-800 space-y-4 mb-8">
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Spray-Applied Membrane Systems: Advanced systems for seamless
                waterproofing.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Façade Waterproofing: Protection against water penetration and
                weather elements.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Foundation Waterproofing Systems: Ensures long-term stability
                of the foundation.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Retaining Wall Protection: Safeguards against soil and water
                pressure.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Basement Waterproofing: Prevents water damage in below-grade
                structures.
              </li>
            </ul>
          </section>

          {/* Commitment to Quality */}
          <section className=" leading-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl my-8">
              Commitment to Quality
            </h2>
            <p
              className="text-justify text-xl leading-7 md:text-2xl mb-8"
              itemProp="description"
            >
              At <Link href="/">Infinity Construction NYC</Link>, we pride
              ourselves on working closely with our clients throughout the
              restoration process. Our commitment to excellence ensures that
              your stucco and waterproofing needs are addressed with precision
              and care. By choosing us, you&apos;re ensuring the longevity and
              stability of your building&apos;s exterior, parapets, and
              retaining walls. If you&apos;re in need of stucco restoration or
              waterproofing services, contact Infinity Construction NYC today to
              learn more about how we can help protect your property for years
              to come.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="leading-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl my-8">
              Why Choose Infinity Construction NYC for Your Brick and CMU Block
              Layering?
            </h2>
            <ul className="text-xl md:text-2xl text-slate-800 space-y-4 mb-8 leading-7">
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Unmatched Expertise: With years of experience in the
                construction industry, we have perfected the art of brick and
                CMU block layering. Our team is highly skilled and dedicated to
                delivering top-quality results.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Commitment to Quality: We use only the highest quality
                materials, ensuring that your brick and CMU block structures are
                not only aesthetically pleasing but also long-lasting. Every
                detail, from mortar application to alignment, is handled with
                precision.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Tailored for Your Needs: We understand that every project is
                unique, which is why we offer customized solutions to fit your
                specific requirements, budget, and design vision. Our
                collaborative approach ensures we deliver exactly what you need.
              </li>
              <li className="text-justify leading-7 text-xl md:text-2xl text-slate-800" itemProp="description">
                • Reliable and Timely Service: At Infinity Construction NYC, we
                pride ourselves on completing projects on time and within
                budget, without compromising on quality or craftsmanship.
              </li>
            </ul>
            <ProjectsSection />
          </section>
        </main>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default StuccoWaterproofingPage;
