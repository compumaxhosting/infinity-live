import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <HeaderSpecial />
      <main
        className="container mx-auto p-8 pt-4 sm:pt-28 2xl:pt-36 border-b text-lg lg:text-xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <header>
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
            Painting and Masonry
          </h1>
        </header>

        <section className="mb-2">
          <p className="text-lg text-justify">
            At Infinity Construction NYC, we offer Masonry and Painting services
            designed to provide smooth, durable, and flawless finishes for your
            walls and ceilings. Whether it’s for new construction, renovations,
            or repairing damaged plaster, we deliver high-quality results
            tailored to your needs. Our professional painting services ensure a
            polished and vibrant finish that transforms your interiors.
          </p>
        </section>

        <section className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8 text-justify">
          <article className="w-full lg:w-8/12 p-4 space-y-6">
            <h2 className="text-4xl my-4">Our Painting and Masonry Services</h2>
            <ul>
              <li>
                •{" "}
                <strong className="font-medium">
                  Wall and Ceiling Repairs:
                </strong>{" "}
                Fixing cracks, dents, and uneven surfaces to create a seamless
                and uniform finish. We use advanced techniques and high-quality
                materials for long-lasting results.
              </li>
              <li>
                • <strong className="font-medium">Custom Textures:</strong>{" "}
                Offering a variety of finishes, from smooth to textured, to
                match your design preferences. This includes modern designs,
                Venetian plaster, and other decorative textures.
              </li>
              <li>
                • <strong className="font-medium">Restoration Work:</strong>{" "}
                Preserving and repairing historic plasterwork, including
                intricate ornamental details, to restore its original charm and
                elegance.
              </li>
              <li>
                •{" "}
                <strong className="font-medium">Pre-Paint Preparations:</strong>{" "}
                Ensuring all surfaces are perfectly prepared for paint
                application. This includes sanding, priming, and applying joint
                compound to achieve a flawless base.
              </li>
              <li>
                •{" "}
                <strong className="font-medium">
                  Moisture Resistance Solutions:
                </strong>{" "}
                Applying treatments to protect plaster surfaces against
                dampness, mold, and mildew, particularly in high-humidity areas
                like bathrooms and kitchens.
              </li>
              <li>
                •{" "}
                <strong className="font-medium">High-Quality Painting:</strong>{" "}
                Using premium paints and precise techniques, we deliver vibrant
                and even finishes that enhance the aesthetic appeal of your
                interiors. Custom color matching is available to suit your
                design vision.
              </li>
            </ul>
          </article>

          <figure className="w-full lg:w-4/12 p-4 space-y-6">
            <Image
              src="/services-img-3.jpeg"
              width={300}
              height={300}
              alt="Interior painting and plaster restoration project"
              className="w-full rounded-lg shadow-md h-96 object-cover"
            />
          </figure>
        </section>

        <section>
          <h2 className="text-4xl my-4">
            Why Choose Infinity Construction NYC for Painting and Masonry?
          </h2>
          <ul>
            <li className="text-justify">
              •{" "}
              <strong className="font-medium">
                Experienced Professionals:
              </strong>{" "}
              Our skilled team brings years of expertise to every project,
              ensuring meticulous attention to detail and exceptional
              craftsmanship.
            </li>
            <li className="text-justify">
              •{" "}
              <strong className="font-medium">Comprehensive Solutions:</strong>{" "}
              From minor repairs to complete room makeovers, we handle all
              aspects of painting and masonry with precision and care.
            </li>
            <li className="text-justify">
              • <strong className="font-medium">Premium Materials:</strong> We
              use only the best materials and products to ensure durability,
              beauty, and long-lasting results.
            </li>
            <li className="text-justify">
              •{" "}
              <strong className="font-medium">
                Customer-Centered Approach:
              </strong>{" "}
              We work closely with you to understand your vision and ensure your
              satisfaction throughout the project.
            </li>
            <li className="text-justify">
              •{" "}
              <strong className="font-medium">
                Timely and Reliable Service:
              </strong>{" "}
              We complete projects on schedule and within budget without
              compromising quality.
            </li>
          </ul>
          <p className="text-justify mt-4">
            Painting and Masonry not only enhance the appearance of your space
            but also improve its durability, insulation, and value. Contact
            Infinity Construction NYC today to schedule a consultation and
            discover how we can transform your interiors with our expert
            services.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
