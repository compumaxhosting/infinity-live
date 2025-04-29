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
          Brick and CMU Block Layering
        </h1>
        <p className="text-lg">
          At Infinity Construction NYC, we understand that the foundation of
          every great structure starts with the right materials and
          craftsmanship. Specializing in brick and Concrete Masonry Unit (CMU)
          block layering, we provide high-quality masonry services that ensure
          the structural integrity and aesthetic appeal of your property.
          Whether you are working on a residential or commercial project, we
          bring the expertise and precision needed to make your vision a
          reality.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          <div className="w-full lg:w-8/12 p-4 space-y-6">
            <h1 className="text-4xl my-4">
              Our Brick and CMU Block Layering Services
            </h1>
            <ul>
              <li>
                • Brick Layering for Unique Designs: From classic brick facades
                to custom designs, we specialize in brick layering that not only
                strengthens your building but enhances its curb appeal. Our
                skilled team ensures that every brick is laid with care,
                offering durability and timeless beauty. We also provide
                customized patterns, arches, and other architectural details to
                match your vision.
              </li>
              <li>
                • CMU Block Layering for Strong Foundations: When it comes to
                structural strength, CMU blocks are our go-to solution. We
                provide expert CMU block installations that create stable
                foundations and walls for a variety of projects, including
                retaining walls, load-bearing structures, and partition walls.
                Our techniques ensure precision and long-lasting durability.
              </li>
              <li>
                • Seamless Integration: At Infinity Construction NYC, we work
                with both brick and CMU blocks, ensuring they integrate
                seamlessly into your building&apos;s design. Whether it’s for
                new construction or renovation projects, we maintain consistency
                in aesthetics and functionality.
              </li>
              <li>
                • Customized Solutions: No two projects are the same. We take a
                personalized approach, tailoring our brick and CMU block
                layering to meet your specific needs. From intricate designs to
                large-scale structural work, we deliver results that exceed
                expectations.
              </li>
            </ul>
          </div>
          {/* Right Section - Image */}
          <div className="w-full lg:w-4/12 p-4 space-y-6">
            {<Image
              src="/stucco/stucco-img-2.JPG"
              width={600}
              height={600}
              alt="Historical Landmark Restoration"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />}
          </div>
        </div>
        <h1 className="text-4xl my-4">
          Why Choose Infinity Construction NYC for Your Brick and CMU Block
          Layering?
        </h1>
        <ul className="mb-6">
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
            mortar application to alignment, is handled with precision..
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
