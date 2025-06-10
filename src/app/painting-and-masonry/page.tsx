import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
/* import Image from "next/image"; */
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 pb-6 md:pb-16 border-b text-lg lg:text-xl max-w-7xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
          Painting and Masonry
        </h1>
        <p className="text-lg text-justify">
          At Infinity Construction NYC, we offer Masonry and Painting services
          designed to provide smooth, durable, and flawless finishes for your
          walls and ceilings. Whether it’s for new construction, renovations, or
          repairing damaged plaster, we deliver high-quality results tailored to
          your needs. Our professional painting services ensure a polished and
          vibrant finish that transforms your interiors.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8 text-justify">
          <div className="w-full lg:w-8/12 p-4 space-y-6">
            <h1 className="text-4xl my-4">Our Painting and Masonry Services</h1>
            <ul>
              <li className="text-justify">
                • Wall and Ceiling Repairs: Fixing cracks, dents, and uneven
                surfaces to create a seamless and uniform finish. We use
                advanced techniques and high-quality materials for long-lasting
                results.
              </li>
              <li className="text-justify">
                • Custom Textures: Offering a variety of finishes, from smooth
                to textured, to match your design preferences. This includes
                modern designs, Venetian plaster, and other decorative textures.
              </li>
              <li className="text-justify">
                • Restoration Work: Preserving and repairing historic
                plasterwork, including intricate ornamental details, to restore
                its original charm and elegance.
              </li>
              <li className="text-justify">
                • Pre-Paint Preparations: Ensuring all surfaces are perfectly
                prepared for paint application. This includes sanding, priming,
                and applying joint compound to achieve a flawless base.
              </li>
              <li className="text-justify">
                • Moisture Resistance Solutions: Applying treatments to protect
                plaster surfaces against dampness, mold, and mildew,
                particularly in high-humidity areas like bathrooms and kitchens.
              </li>
              <li className="text-justify">
                • High-Quality Painting: Using premium paints and precise
                techniques, we deliver vibrant and even finishes that enhance
                the aesthetic appeal of your interiors. Custom color matching is
                available to suit your design vision.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 p-4 space-y-6">
            {
              <Image
                src="/services-img-3.jpeg"
                width={300}
                height={300}
                alt="Historical Landmark Restoration"
                className="w-full rounded-lg shadow-md h-96 object-cover"
              />
            }
          </div>
        </div>
        <h1 className="text-4xl my-4">
          Why Choose Infinity Construction NYC for Painting and Masonry?
        </h1>
        <ul>
          <li className="text-justify">
            • Experienced Professionals: Our skilled team brings years of
            expertise to every project, ensuring meticulous attention to detail
            and exceptional craftsmanship.
          </li>
          <li className="text-justify">
            • Comprehensive Solutions: From minor repairs to complete room
            makeovers, we handle all aspects of painting and masonry with
            precision and care.
          </li>
          <li className="text-justify">
            • Premium Materials: We use only the best materials and products to
            ensure durability, beauty, and long-lasting results.
          </li>
          <li className="text-justify">
            • Customer-Centered Approach: We work closely with you to understand
            your vision and ensure your satisfaction throughout the project.
          </li>
          <li className="text-justify">
            • Timely and Reliable Service: We complete projects on schedule and
            within budget without compromising quality.
          </li>
          <p className="text-justify">
            Painting and Masonry not only enhance the appearance of your space
            but also improve its durability, insulation, and value. Contact
            Infinity Construction NYC today to schedule a consultation and
            discover how we can transform your interiors with our expert
            services.
          </p>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default page;
