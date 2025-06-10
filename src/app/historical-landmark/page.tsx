import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
          Historical Landmark Brownstone/Limestone Restoration
        </h1>
        <p className="text-justify text-lg mb-8">
          New York City is home to many historical architectural structures
          crafted from limestone and brownstone. These buildings are not just
          iconic; they are a testament to the city’s rich history and unique
          charm. At Infinity Construction NYC, we specialize in restoring the
          beauty and integrity of these Historical Landmark buildings. Over
          time, exposure to the elements can lead to weathering and damage,
          putting these beloved structures at risk. Our expert team is dedicated
          to restoring your brownstone or limestone property to its original
          splendor using proven techniques that ensure both structural integrity
          and aesthetic appeal.
        </p>

        {/* Flex Container for Content and Image */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 p-4 space-y-6">
            <h2 className="text-4xl font-semibold">Our Restoration Services</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li className="text-justify">
                <strong>Comprehensive Inspection:</strong> We begin by thoroughly inspecting the structural integrity of the building. For full façade or stoop restoration, we carefully examine the stones for major spalls, scaling, cracks, and other signs of deterioration. Our inspection also includes an assessment of mortar joints and the overall stability of the structure.
              </li>
              <li className="text-justify">
                <strong>Precise Repair Process:</strong> Damaged outer layers are meticulously removed to expose the foundation layer. We then apply multiple molds of mortar and stone mixtures, custom-matched to the original materials, to restore the structure’s original design and ensure its long-term durability. Our process also involves patching and resurfacing to seamlessly blend repairs with the existing architecture.
              </li>
              <li className="text-justify">
                <strong>Cleaning and Surface Preparation:</strong> To achieve a uniform appearance, we clean the entire surface using specialized, non-abrasive techniques that remove dirt, grime, and biological growth without causing further damage to the stonework.
              </li>
              <li className="text-justify">
                <strong>Waterproofing and Weatherproofing:</strong> After restoration, we apply protective treatments to safeguard the structure against water infiltration, freeze-thaw cycles, and other environmental factors that could lead to future damage.
              </li>
              <li className="text-justify">
                <strong>Attention to Detail:</strong> Our restoration process is tailored to preserve the historical integrity of your property, ensuring every detail is authentic and true to its original design. We work with skilled artisans who have extensive experience in historical restoration to recreate intricate carvings, moldings, and decorative elements as needed.
              </li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 p-4">
            <Image
              src="/historical-landmark/historical-img-1.JPG"
              width={600}
              height={600}
              alt="Historical Landmark Restoration"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Quality Commitment Section */}
        <h2 className="text-4xl my-8">Commitment to Quality</h2>
        <p className="text-justify text-lg mb-8">
          At Infinity Construction NYC, we pride ourselves on working closely with our clients throughout the restoration process. Our commitment to excellence ensures that your façade or stoop is restored to its former glory while maintaining its historical significance.
        </p>
        <p className="text-justify text-lg mb-8">
          If your brownstone or limestone property needs restoration, don’t wait. Contact Infinity Construction NYC today to learn how our expert team can help preserve your building for generations to come.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="text-4xl my-8">Why Choose Infinity Construction NYC for Your Brick and CMU Block Layering?</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg mb-6">
          <li className="text-justify">
            <strong>Unmatched Expertise:</strong> With years of experience in the construction industry, we have perfected the art of brick and CMU block layering. Our team is highly skilled and dedicated to delivering top-quality results.
          </li>
          <li className="text-justify">
            <strong>Commitment to Quality:</strong> We use only the highest quality materials, ensuring that your brick and CMU block structures are not only aesthetically pleasing but also long-lasting. Every detail, from mortar application to alignment, is handled with precision.
          </li>
          <li className="text-justify">
            <strong>Tailored for Your Needs:</strong> We understand that every project is unique, which is why we offer customized solutions to fit your specific requirements, budget, and design vision. Our collaborative approach ensures we deliver exactly what you need.
          </li>
          <li className="text-justify">
            <strong>Reliable and Timely Service:</strong> At Infinity Construction NYC, we pride ourselves on completing projects on time and within budget, without compromising on quality or craftsmanship.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default page;
