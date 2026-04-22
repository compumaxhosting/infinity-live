import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import PhoneCall from "@/components/PhoneCall";
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const Page = () => {
  return (
    <>
      <div>
        <HeaderSpecial />
        <main
          className="container mx-auto p-4 pt-28 sm:pt-48 2xl:pt-36 border-b text-xl md:text-2xl text-slate-800 lg:text-xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <section
            className="mb-10"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6"
              itemProp="name"
            >
              Custom Paving Solutions in NYC: Concrete, Stone and Brick
              Specialists
            </h1>

            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Transforming Driveways, Patios, and Walkways Across the Five
              Boroughs
            </p>

            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center mb-8">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Call{" "}
                <a href={contactPhoneHref} className="underline">
                  {contactPhone}
                </a>{" "}
                for premium paving services in NYC.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-10 mb-8">
              <Image
                src="/paving/paving-img-2.webp"
                width={1400}
                height={900}
                alt="Expert paving crew installing decorative concrete and brick in Brooklyn, NYC"
                className="w-full lg:w-1/2 rounded-lg h-[320px] md:h-[360px] object-cover"
                itemProp="image"
              />

              <p
                className="w-full lg:w-1/2 text-justify mb-6"
                itemProp="description"
              >
                Professional paving in NYC by{" "}
                <Link href="/" className="text-orange-500">
                  Infinity Construction NYC
                </Link>{" "}
                includes the expert installation and restoration of concrete,
                natural stone, and brick surfaces. Ideal for homeowners seeking
                durable driveways or luxury patios, our service ensures
                weather-resistant, high-aesthetic outdoor spaces that boost
                property value and structural longevity.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Elevate Your Outdoor Space with Expert NYC Paving
            </h2>
            <p className="text-justify mb-6" itemProp="description">
              In New York City, your outdoor surfaces must handle everything
              from heavy foot traffic to extreme freeze-thaw cycles. At Infinity
              Construction NYC, we combine old-world craftsmanship with modern
              materials to create stunning, durable surfaces.
            </p>
            <p className="text-justify mb-6" itemProp="description">
              Whether you are looking for modern concrete versatility, timeless
              natural stone, or classic brick charm, our team delivers
              precision-engineered paving tailored to the unique landscape of
              your NYC property.
            </p>
          </section>

          <section
            className="mb-10"
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Our Comprehensive Paving Process
            </h2>

            <div className="space-y-6">
              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  1. Concrete Paving: Durability Meets Modern Design
                </h3>
                <p className="mb-2" itemProp="description">
                  Concrete is one of the most versatile paving materials for NYC
                  driveways and sidewalks. We specialize in high-strength mixes
                  that resist cracking and settling.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">
                      Stamped and Decorative Concrete:
                    </strong>{" "}
                    Textured mats mimic slate, stone, or wood at a lower cost.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Colored and Polished Finishes:
                    </strong>{" "}
                    Custom pigments and finishes complement your facade.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Professional Resurfacing:
                    </strong>{" "}
                    We restore worn slabs using crack repair and scaling
                    correction.
                  </li>
                </ul>
              </div>

              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  2. Natural Stone Paving: Timeless NYC Elegance
                </h3>
                <p className="mb-2" itemProp="description">
                  For high-end patios, pool decks, and garden paths, natural
                  stone offers premium beauty and durability.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">
                      Premium Material Selection:
                    </strong>{" "}
                    Bluestone, Granite, Limestone, and Slate suited for
                    Northeast climate.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Custom Geometric Layouts:
                    </strong>{" "}
                    From Ashlar patterns to intricate mosaics with tight joints.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Stone Restoration and Sealing:
                    </strong>{" "}
                    Deep cleaning and sealing to preserve vibrant color.
                  </li>
                </ul>
              </div>

              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  3. Brick Paving: Classic Charm and Permeability
                </h3>
                <p className="mb-2" itemProp="description">
                  Brick remains a favorite for historic neighborhoods across
                  Brooklyn and Manhattan thanks to timeless visual appeal.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">Classic Patterns:</strong>{" "}
                    Herringbone and Basketweave for high-traffic walkways and
                    driveways.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Eco-Friendly Permeable Pavers:
                    </strong>{" "}
                    Breathable systems improve drainage and reduce runoff.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Expert Repair and Color Matching:
                    </strong>{" "}
                    Seamless repairs with matching bricks for invisible
                    restoration.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Comparing Paving Materials for Your Project
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Material</th>
                    <th className="p-3 border">Best For</th>
                    <th className="p-3 border">Key Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Concrete</td>
                    <td className="p-3 border">Driveways and Sidewalks</td>
                    <td className="p-3 border">
                      Cost-effective and low maintenance.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Natural Stone</td>
                    <td className="p-3 border">Patios and Luxury Walkways</td>
                    <td className="p-3 border">
                      Highest property value increase and unique beauty.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Brick</td>
                    <td className="p-3 border">Historic Districts and Paths</td>
                    <td className="p-3 border">
                      Classic NYC aesthetic and easy individual piece repair.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section
            className="mb-10"
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Common Paving Questions (FAQ)
            </h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>
                    How long does a new concrete driveway take to install in
                    NYC?
                  </span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Installation typically takes 3 to 5 days, including excavation
                  and pouring. We recommend waiting at least 7 days before
                  driving on newly poured concrete.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>Which stone is best for NYC winters?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Bluestone and Granite are excellent for New York winters
                  because they are dense, slip-resistant, and handle freeze-thaw
                  cycles without cracking.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>Can you pave over an existing surface?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  In some cases, concrete can be resurfaced if the base remains
                  stable. For brick and stone installations, full excavation
                  with compacted base is often best for long-term stability.
                </p>
              </details>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Why Choose Infinity Construction NYC?
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="font-medium">
                  End-to-End Project Management:
                </strong>{" "}
                From design and permits to final seal coat, we handle every
                detail.
              </li>
              <li>
                <strong className="font-medium">NYC Climate Expertise:</strong>{" "}
                We select materials that handle local expansion and contraction
                cycles.
              </li>
              <li>
                <strong className="font-medium">
                  Detail-Oriented Craftsmanship:
                </strong>{" "}
                Perfect alignments, proper drainage slopes, and clean finishes.
              </li>
            </ul>

            <p className="text-justify mt-4" itemProp="description">
              Ready to upgrade your curb appeal? Contact Infinity Construction
              NYC today for a professional paving consultation.
            </p>
          </section>

          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Contact Us Today
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Precision paving and lasting performance for NYC driveways,
                patios, and walkways.
              </p>

              <div className="flex flex-col items-center gap-3 mb-6 text-base sm:text-lg">
                <a
                  href={contactPhoneHref}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Phone size={20} />
                  <span className="font-semibold">{contactPhone}</span>
                </a>

                <a
                  href="mailto:infinityconstructionnyc@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Mail size={20} />
                  <span>infinityconstructionnyc@gmail.com</span>
                </a>

                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-primary transition"
                  target="_blank"
                >
                  <Globe size={20} />
                  <span>www.infinityconstructionnyc.com</span>
                </Link>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 mb-4"
              >
                Request a Quote
              </Link>

              <p className="mt-2 font-semibold text-gray-800">
                Infinity Construction NYC - Precision Paving, Lasting Results.
              </p>
            </div>
          </section>
        </main>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
