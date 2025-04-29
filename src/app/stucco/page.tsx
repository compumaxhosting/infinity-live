import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b text-lg lg:text-xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        {/* Main Title */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
          Stucco/Waterproofing of Exterior, Parapet, and Retaining Walls
        </h1>

        {/* Introduction Paragraph */}
        <p className="text-lg lg:text-xl mb-8">
          Stucco restoration and waterproofing of exterior walls, parapets, and
          retaining walls are essential repairs to maintain the surface
          stability and structural integrity of any building. Cracks or missing
          joints can lead to water seepage, causing severe water damage and
          compromising the building’s safety. With decades of experience
          protecting New York&apos;s diverse architecture, Infinity Construction
          NYC delivers expert waterproofing solutions for residential and
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
            <p className="text-lg lg:text-xl mb-4">
              Our process begins with a thorough inspection of the existing
              structure. We carefully examine for:
            </p>
            <ul className="text-lg lg:text-xl space-y-4 mb-8">
              <li>• Cracks and spalls in the stucco.</li>
              <li>• Water damage within the stucco layers.</li>
              <li>
                • Missing or deteriorating waterproofing paint or membrane.
              </li>
            </ul>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4">
              Stucco Restoration Process
            </h2>
            <ul className="text-lg lg:text-xl space-y-4">
              <li>
                • Damage Removal: We completely remove the damaged layer to
                expose the foundational surface, ensuring all compromised
                material is cleared to prevent future issues.
              </li>
              <li>
                • Reinforcement Application: We apply wire mesh, steel strips,
                or thin rebars to reinforce the structure, providing added
                stability and preventing future cracks.
              </li>
              <li>
                • Application of Mortar Layers: Multiple layers of waterproof
                mortar mixtures are applied to rebuild the surface, ensuring the
                material is compatible with the existing structure.
              </li>
              <li>
                • Finishing Touches: The restored stucco is carefully smoothed
                and shaped to match the original design. We pay close attention
                to decorative details and ensure a seamless appearance.
              </li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-4/12 p-4">
            <Image
              src="/stucco/stucco-img-2.jpg"
              width={600}
              height={600}
              alt="Historical Landmark Restoration"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Waterproofing Process */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
          Waterproofing Process
        </h2>
        <p className="text-lg lg:text-xl mb-8">
          For new or existing stucco on exterior walls, parapets, and retaining
          walls, our waterproofing process involves:
        </p>
        <ul className="text-lg lg:text-xl space-y-4 mb-8">
          <li>
            • Surface Preparation: We ensure the surface is clean, smooth, and
            dry before applying any waterproofing materials. This may include
            power washing, sanding, or chemical treatments to remove debris and
            contaminants.
          </li>
          <li>
            • Primer Application: A high-quality primer is applied to enhance
            adhesion and create a strong base for the waterproof coating.
          </li>
          <li>
            • Waterproof Coating Application: We use premium products such as
            MasterProtect HB 200 Exterior Paint, known for its exceptional
            weathering resistance, bright color retention, and fade resistance.
            This coating is applied in multiple layers to ensure a uniform and
            durable barrier against water infiltration.
          </li>
          <li>
            • Sealing and Detailing: We meticulously seal all joints, corners,
            and potential weak points to prevent water penetration. Special
            attention is given to areas prone to pooling or excessive exposure
            to moisture.
          </li>
          <li>
            • Final Inspection: Once the waterproofing process is complete, we
            perform a detailed inspection to ensure the application is flawless
            and meets our high standards.
          </li>
        </ul>

        {/* Specialized Waterproofing Services */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
          Specialized Waterproofing Services
        </h2>
        <ul className="text-lg lg:text-xl space-y-4 mb-8">
          <li>
            • Spray-Applied Membrane Systems: Advanced systems for seamless
            waterproofing.
          </li>
          <li>
            • Façade Waterproofing: Protection against water penetration and
            weather elements.
          </li>
          <li>
            • Foundation Waterproofing Systems: Ensures long-term stability of
            the foundation.
          </li>
          <li>
            • Retaining Wall Protection: Safeguards against soil and water
            pressure.
          </li>
          <li>
            • Basement Waterproofing: Prevents water damage in below-grade
            structures.
          </li>
        </ul>

        {/* Commitment to Quality */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
          Commitment to Quality
        </h2>
        <p className="text-lg lg:text-xl mb-8">
          At Infinity Construction NYC, we pride ourselves on working closely
          with our clients throughout the restoration process. Our commitment to
          excellence ensures that your stucco and waterproofing needs are
          addressed with precision and care. By choosing us, you’re ensuring the
          longevity and stability of your building’s exterior, parapets, and
          retaining walls. If you’re in need of stucco restoration or
          waterproofing services, contact Infinity Construction NYC today to
          learn more about how we can help protect your property for years to
          come.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-8">
          Why Choose Infinity Construction NYC for Your Brick and CMU Block
          Layering?
        </h2>
        <ul className="text-lg lg:text-xl space-y-4 mb-8">
          <li>
            • Unmatched Expertise: With years of experience in the construction
            industry, we have perfected the art of brick and CMU block layering.
            Our team is highly skilled and dedicated to delivering top-quality
            results.
          </li>
          <li>
            • Commitment to Quality: We use only the highest quality materials,
            ensuring that your brick and CMU block structures are not only
            aesthetically pleasing but also long-lasting. Every detail, from
            mortar application to alignment, is handled with precision.
          </li>
          <li>
            • Tailored for Your Needs: We understand that every project is
            unique, which is why we offer customized solutions to fit your
            specific requirements, budget, and design vision. Our collaborative
            approach ensures we deliver exactly what you need.
          </li>
          <li>
            • Reliable and Timely Service: At Infinity Construction NYC, we
            pride ourselves on completing projects on time and within budget,
            without compromising on quality or craftsmanship.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default page;
