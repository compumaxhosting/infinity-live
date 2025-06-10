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
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
          Brick Pointing and Waterproofing
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <Image
            width={300}
            height={200}
            src="/brick-pointing/brick-img-1.JPG"
            alt="Brick Pointing"
            className="w-full lg:w-1/2 rounded-lg shadow-lg h-60 object-cover"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl mb-4">Brick Pointing</h1>
            <p className="text-lg text-justify">
              Brick pointing is the process of filling mortar joints to seal and
              complete newly constructed brickwork. It is also a crucial
              maintenance and repair technique for aging structures. If your
              building requires repairs or maintenance, repointing or
              tuckpointing may be the ideal solution to restore both its
              strength and appearance.
            </p>
          </div>
        </div>
        <h1 className="text-4xl my-4">Our Brick Pointing Services</h1>
        <ul>
          <li className="text-justify">
            • Repointing: We carefully remove old, damaged mortar and replace it
            with fresh mortar to restore the strength, stability, and durability
            of your brickwork.
          </li>
          <li className="text-justify">
            • Tuckpointing: For a polished and aesthetically appealing look, we
            match the mortar color to the brick and add fine white or
            contrasting lines to create a clean, decorative finish.
          </li>
          <li className="text-justify">
            • Mortar Matching: Our team uses custom mortar blends to ensure
            seamless repairs that perfectly match the existing brickwork,
            maintaining the architectural integrity of your structure.
          </li>
          <li className="text-justify">
            • Crack and Gap Repairs: We fill gaps and cracks in brick and mortar
            to prevent water infiltration and protect your building from further
            damage.
          </li>
        </ul>
        <p className="text-justify">
          Whether your focus is structural restoration or aesthetic enhancement,
          our team is dedicated to delivering exceptional results with precision
          and care.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl my-4">
              Protect Your Brickwork with Waterproofing Services
            </h1>
            <p className="text-justify">
              Water damage is one of the most common threats to masonry. At
              Infinity Construction NYC, we offer waterproofing solutions that
              protect your brickwork from moisture-related issues like mold,
              efflorescence, and structural degradation.
            </p>
          </div>
          <Image
            width={800}
            height={600}
            src="/waterproofing/waterproofing-img-2.JPG"
            alt="Waterproofing Services"
            className="w-full lg:w-1/2 rounded-lg shadow-lg h-60 object-cover"
          />
        </div>
        <h1 className="text-4xl my-4">Our Waterproofing Services Include:</h1>
        <ul>
          <li className="text-justify">
            • Masonry Sealing: We apply breathable sealants to create a
            protective barrier against water infiltration while allowing vapor
            to escape, preserving the integrity of your brickwork.
          </li>
          <li className="text-justify">
            • Leak Detection and Repair: Our experts identify and fix vulnerable
            areas prone to water infiltration, such as cracks and gaps in brick
            or mortar.
          </li>
          <li className="text-justify">
            • Moisture Management: We install drainage solutions to redirect
            water away from brick surfaces, reducing the risk of damage.
          </li>
          <li className="text-justify">
            • Weatherproof Coatings: To protect your masonry from harsh weather
            conditions, we apply coatings designed to withstand freeze-thaw
            cycles and prevent weather-related wear.
          </li>
        </ul>
        <h1 className="text-4xl my-4">Why Choose Infinity Construction NYC?</h1>
        <ul className="mb-6">
          <li className="text-justify">
            • Expert Craftsmanship: Our skilled team brings years of experience
            in brick pointing and waterproofing, ensuring top-quality results.
          </li>
          <li className="text-justify">
            • Customized Solutions: We tailor our services to meet your
            building’s unique needs, whether for structural repairs or aesthetic
            enhancements.
          </li>
          <li className="text-justify">
            • Commitment to Quality: Using premium materials and
            industry-leading techniques, we ensure durable and long-lasting
            solutions.
          </li>
          <li className="text-justify">
            • Reliable and Professional Service: From start to finish, we
            prioritize clear communication, timely completion, and superior
            workmanship.
          </li>
        </ul>
        <p className="text-justify">
          Protect and restore your brickwork with Infinity Construction NYC.
          Contact us today to learn more about our brick pointing and
          waterproofing services, and schedule a consultation with our experts.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
