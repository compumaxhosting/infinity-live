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
          Roof Restoration and Weatherproofing
        </h1>
        <p className="text-lg">
          Expert Roof Restoration & Weatherproofing Services in NYC <br></br>
          At Infinity Construction NYC, we specialize in comprehensive roof
          restoration and weatherproofing solutions designed to protect your
          property against New York’s challenging weather conditions. Our
          certified technicians combine advanced materials and proven techniques
          to deliver durable, long-lasting results for residential and
          commercial properties.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          <div className="w-full lg:w-8/12 p-4 space-y-6">
            <h1 className="text-4xl my-4">
              Our Roof Restoration & Weatherproofing Process
            </h1>
            <ul>
              <li>
                • Thorough Inspection and Assessment: Our process begins with a
                detailed inspection of your roof’s condition, bearing capacity,
                and existing waterproofing systems. We identify issues such as
                leaks, structural weaknesses, and areas prone to water
                infiltration.
              </li>
              <li>
                • Professional Cleaning and Surface Preparation: We remove
                debris, damaged shingles, and deteriorating wood. The roof base
                is meticulously cleaned and prepared to ensure optimal adhesion
                and performance of the new materials.
              </li>
              <li>
                • Structural Repairs and Reinforcement: Using weather-treated
                plywood and structural beams, we repair or replace damaged
                sections of the roof. This step ensures the stability and
                longevity of the structure.
              </li>
              <li>
                • Application of Premium Weatherproofing Materials: We install
                high-quality roofing materials, such as durable shingles,
                membranes, and coatings. All materials are expertly sealed to
                create a fully weatherproof system capable of withstanding New
                York’s harsh conditions.
              </li>
              <li>
                • Quality Control Inspection and Documentation: Before
                finalizing the project, we conduct a comprehensive quality
                control inspection to ensure all work meets our high standards.
                Detailed documentation is provided for your records and peace of
                mind.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 p-4 space-y-6">
            <Image
              src="/roofing/roofing-img-2.JPG"
              width={300}
              height={300}
              alt="Historical Landmark Restoration"
              className="w-full rounded-lg shadow-md h-60 object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl my-4">Why Choose Infinity Construction NYC?</h1>
        <ul>
          <li>
            • Licensed, Bonded, and Insured: We are fully certified by the NYC
            Department of Buildings, giving you confidence in our
            professionalism and compliance with local regulations.
          </li>
          <li>
            • Experienced and Certified Technicians: Our team is trained to
            handle even the most complex roof restoration projects, ensuring
            exceptional workmanship and results.
          </li>
          <li>
            • Commitment to Quality: We use only the best materials and
            techniques, ensuring your roof remains durable, functional, and
            aesthetically pleasing for years to come.
          </li>
          <li>
            • Customer-Focused Approach: At Infinity Construction NYC, we
            prioritize clear communication and client satisfaction. From the
            initial consultation to project completion, we keep you informed
            every step of the way.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default page;
