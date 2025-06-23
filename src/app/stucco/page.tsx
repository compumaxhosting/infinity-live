import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import Link from "next/link";
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
    <div itemScope itemType="https://schema.org/Service">
      <HeaderSpecial />
      <main
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b text-lg lg:text-xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        {/* Main Title */}
        <h1
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8"
          itemProp="name"
        >
          Stucco/ Waterproofing of Exterior, Parapet, and Retaining Walls
        </h1>

        {/* Introduction Paragraph */}
        <section itemScope itemType="https://schema.org/LocalBusiness">
          <p
            className="text-justify text-lg lg:text-xl mb-8"
            itemProp="description"
          >
            Stucco restoration and waterproofing of exterior walls, parapets,
            and retaining walls are essential repairs to maintain the surface
            stability and structural integrity of any building. Cracks or
            missing joints can lead to water seepage, causing severe water
            damage and compromising the building&apos;s safety. With decades of
            experience protecting New York&apos;s diverse architecture,{" "}
            <span itemProp="name">Infinity Construction NYC </span>
            delivers expert waterproofing solutions for residential and
            commercial properties. Our certified technicians employ advanced
            techniques and premium materials to ensure your structure remains
            protected against water damage.
          </p>

          {/* Section with Image and Content */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
            {/* Left Section - Content */}
            <div className="w-full lg:w-8/12 p-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4">
                Inspection and Assessment
              </h2>
              <p
                className="text-justify text-lg lg:text-xl mb-4"
                itemProp="description"
              >
                Our process begins with a thorough inspection of the existing
                structure. We carefully examine for:
              </p>
              <ul className="text-lg lg:text-xl space-y-4 mb-8">
                <li className="text-justify" itemProp="description">
                  • Cracks and spalls in the stucco.
                </li>
                <li className="text-justify" itemProp="description">
                  • Water damage within the stucco layers.
                </li>
                <li className="text-justify" itemProp="description">
                  • Missing or deteriorating waterproofing paint or membrane.
                </li>
              </ul>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4">
                Stucco Restoration Process
              </h2>
              <ul className="text-lg lg:text-xl space-y-4">
                <li className="text-justify" itemProp="description">
                  • Damage Removal: We completely remove the damaged layer to
                  expose the foundational surface, ensuring all compromised
                  material is cleared to prevent future issues.
                </li>
                <li className="text-justify" itemProp="description">
                  • Reinforcement Application: We apply wire mesh, steel strips,
                  or thin rebars to reinforce the structure, providing added
                  stability and preventing future cracks.
                </li>
                <li className="text-justify" itemProp="description">
                  • Application of Mortar Layers: Multiple layers of waterproof
                  mortar mixtures are applied to rebuild the surface, ensuring
                  the material is compatible with the existing structure.
                </li>
                <li className="text-justify" itemProp="description">
                  • Finishing Touches: The restored stucco is carefully smoothed
                  and shaped to match the original design. We pay close
                  attention to decorative details and ensure a seamless
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
            Waterproofing Process
          </h2>
          <p
            className="text-justify text-lg lg:text-xl mb-8"
            itemProp="description"
          >
            For new or existing stucco on exterior walls, parapets, and
            retaining walls, our waterproofing process involves:
          </p>
          <ul className="text-lg lg:text-xl space-y-4 mb-8">
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • Surface Preparation: We ensure the surface is clean, smooth, and
              dry before applying any waterproofing materials. This may include
              power washing, sanding, or chemical treatments to remove debris
              and contaminants.
            </li>
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • Primer Application: A high-quality primer is applied to enhance
              adhesion and create a strong base for the waterproof coating.
            </li>
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • Waterproof Coating Application: We use premium products such as
              MasterProtect HB 200 Exterior Paint, known for its exceptional
              weathering resistance, bright color retention, and fade
              resistance. This coating is applied in multiple layers to ensure a
              uniform and durable barrier against water infiltration.
            </li>
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • Sealing and Detailing: We meticulously seal all joints, corners,
              and potential weak points to prevent water penetration. Special
              attention is given to areas prone to pooling or excessive exposure
              to moisture.
            </li>
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • Final Inspection: Once the waterproofing process is complete, we
              perform a detailed inspection to ensure the application is
              flawless and meets our high standards.
            </li>
          </ul>
        </section>

        {/* Specialized Waterproofing Services */}
        <section>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
            Specialized Waterproofing Services
          </h2>
          <ul className="text-lg lg:text-xl space-y-4 mb-8">
            <li className="text-justify" itemProp="description">
              • Spray-Applied Membrane Systems: Advanced systems for seamless
              waterproofing.
            </li>
            <li className="text-justify" itemProp="description">
              • Façade Waterproofing: Protection against water penetration and
              weather elements.
            </li>
            <li className="text-justify" itemProp="description">
              • Foundation Waterproofing Systems: Ensures long-term stability of
              the foundation.
            </li>
            <li className="text-justify" itemProp="description">
              • Retaining Wall Protection: Safeguards against soil and water
              pressure.
            </li>
            <li className="text-justify" itemProp="description">
              • Basement Waterproofing: Prevents water damage in below-grade
              structures.
            </li>
          </ul>
        </section>

        {/* Commitment to Quality */}
        <section>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
            Commitment to Quality
          </h2>
          <p
            className="text-justify text-lg lg:text-xl mb-8"
            itemProp="description"
          >
            At <Link href="/">Infinity Construction NYC</Link>, we pride
            ourselves on working closely with our clients throughout the
            restoration process. Our commitment to excellence ensures that your
            stucco and waterproofing needs are addressed with precision and
            care. By choosing us, you&apos;re ensuring the longevity and
            stability of your building&apos;s exterior, parapets, and retaining
            walls. If you&apos;re in need of stucco restoration or waterproofing
            services, contact Infinity Construction NYC today to learn more
            about how we can help protect your property for years to come.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
            Why Choose Infinity Construction NYC for Your Brick and CMU Block
            Layering?
          </h2>
          <ul className="text-lg lg:text-xl space-y-4 mb-8">
            <li className="text-justify" itemProp="description">
              • Unmatched Expertise: With years of experience in the
              construction industry, we have perfected the art of brick and CMU
              block layering. Our team is highly skilled and dedicated to
              delivering top-quality results.
            </li>
            <li className="text-justify" itemProp="description">
              • Commitment to Quality: We use only the highest quality
              materials, ensuring that your brick and CMU block structures are
              not only aesthetically pleasing but also long-lasting. Every
              detail, from mortar application to alignment, is handled with
              precision.
            </li>
            <li className="text-justify" itemProp="description">
              • Tailored for Your Needs: We understand that every project is
              unique, which is why we offer customized solutions to fit your
              specific requirements, budget, and design vision. Our
              collaborative approach ensures we deliver exactly what you need.
            </li>
            <li className="text-justify" itemProp="description">
              • Reliable and Timely Service: At Infinity Construction NYC, we
              pride ourselves on completing projects on time and within budget,
              without compromising on quality or craftsmanship.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StuccoWaterproofingPage;
