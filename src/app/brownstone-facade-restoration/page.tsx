import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import PhoneCall from "@/components/PhoneCall";
import { Phone, Mail, Globe } from "lucide-react";
import FaqNew from "@/components/FaqNew";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const BrickCMULayeringPage = () => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />

        <main
          className="container mx-auto p-4 pt-40 sm:pt-48 2xl:pt-36 border-b text-xl md:text-2xl text-slate-800 lg:text-xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          {/* ✅ H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Expert Brick and CMU Block Laying in NYC
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-orange-600">
            High-Strength Masonry for Residential and Commercial Projects
          </p>

          <section className="mb-10">
            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Call <a href={contactPhoneHref} className="underline">{contactPhone}</a> for immediate masonry consultation in NYC.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </section>

          <section className="mb-10">
            <p className="text-justify mb-6">
              Professional brick and CMU block laying in NYC by{" "}
              <Link href="/" className="text-orange-500">
                Infinity Construction NYC
              </Link>{" "}
              provides essential structural support for new builds and
              renovations. Designed for developers and homeowners, our service
              ensures durable foundations and beautiful facades, delivering
              unmatched stability and long-term property value through expert
              masonry.
            </p>

            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              The Foundation of Quality: Brick & CMU Block Masonry
            </p>
            <p className="text-justify mb-6">
              In the demanding environment of New York City construction, the
              strength of your building depends on the precision of its masonry.
              At Infinity Construction NYC, we specialize in professional
              brickwork and Concrete Masonry Unit (CMU) block installation. From
              the iconic red-brick aesthetic of Brooklyn townhouses to the
              heavy-duty structural cores of Manhattan commercial buildings, our
              team delivers high-performance masonry that balances architectural
              beauty with rock-solid integrity.
            </p>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Content Section (2/3) */}
              <div className="w-full lg:w-2/3">
                <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
                  Our Core Masonry Services
                </h2>

                <h3 className="text-xl sm:text-2xl mb-2">
                  Decorative & Structural Brick Laying
                </h3>
                <p className="mb-2">
                  Brick is more than just a facade; it is a shield against the
                  elements. Our skilled masons specialize in:
                </p>

                <ul className="mb-6 list-disc pl-6">
                  <li>
                    <span className="font-medium">
                      Custom Patterns & Bonds:
                    </span>{" "}
                    Creating timeless aesthetics through running, Flemish, or
                    English bonds.
                  </li>
                  <li>
                    <span className="font-medium">Architectural Details:</span>{" "}
                    Expertly crafted brick arches, lintels, and decorative
                    cornices.
                  </li>
                  <li>
                    <span className="font-medium">Facade Strengthening:</span>{" "}
                    Ensuring every brick is perfectly aligned with high-quality
                    mortar.
                  </li>
                </ul>

                <h3 className="text-xl sm:text-2xl mb-2 text-orange-600">
                  CMU Block Installation for Maximum Strength
                </h3>
                <p className="mb-2">
                  When your project requires load-bearing reliability, Concrete
                  Masonry Units (CMU) are the industry standard. We provide:
                </p>

                <ul className="mb-6 list-disc pl-6">
                  <li>
                    <span className="font-medium">
                      Foundation & Partition Walls:
                    </span>{" "}
                    Creating the bones of your building with high-density
                    blocks.
                  </li>
                  <li>
                    <span className="font-medium">Retaining Walls:</span>{" "}
                    Engineered to manage soil pressure and drainage.
                  </li>
                  <li>
                    <span className="font-medium">Structural Integration:</span>{" "}
                    Seamless integration with plumbing and reinforcements.
                  </li>
                </ul>

                <h3 className="text-xl sm:text-2xl mb-2 text-orange-600">
                  Seamless Material Integration
                </h3>
                <p className="mb-6">
                  We combine CMU structural cores with brick veneers using
                  professional ties and moisture barriers to prevent long-term
                  structural issues.
                </p>
              </div>

              {/* Image Section (1/3) */}
              <div className="w-full lg:w-1/3">
                <div className="space-y-8">
                  {/* Before */}
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-semibold mb-3">
                      Before
                    </p>
                    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src="/stucco/stucco-img-2.webp"
                        alt="Before masonry work condition"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-semibold mb-3">
                      After
                    </p>
                    <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src="/stucco/after-image.webp"
                        alt="After masonry restoration completed"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Technical Comparison: Brick vs. CMU Blocks
            </p>

            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">Brick Masonry</th>
                    <th className="p-3 border">CMU Block Masonry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Primary Use</td>
                    <td className="p-3 border">
                      Facades, stoops, and decorative walls
                    </td>
                    <td className="p-3 border">
                      Foundations, load-bearing walls and cores.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Main Benefit</td>
                    <td className="p-3 border">
                      High curb appeal & weather resistance
                    </td>
                    <td className="p-3 border">
                      Superior strength & fire rating
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">NYC Context</td>
                    <td className="p-3 border">
                      Ideal for historic district compliance.
                    </td>
                    <td className="p-3 border">
                      Best for rapid, high-strength construction.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <FaqNew />

          {/* Why Choose */}
          <section className="mb-10">
            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Why Choose Infinity Construction NYC?
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Proven Local Expertise: We understand the unique logistics of
                working in NYC, from sidewalk permits to neighboring property
                protection.
              </li>
              <li>
                Precision and Alignment: Our masons use advanced leveling tools
                and traditional craftsmanship to ensure every course is
                &quot;plumb and true.&quot;
              </li>
              <li>
                High-Quality Materials: We source premium bricks and high-PSI
                blocks to ensure your structure lasts for generations.
              </li>
              <li>
                Transparent Project Management: We provide clear timelines and
                budget updates, ensuring no surprises from groundbreaking to
                cleanup.
              </li>
            </ul>
          </section>

          {/* Bottom CTA */}
          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Start Your Project with a Free Consultation
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Whether you are building a new foundation or restoring a
                historical facade, trust the masonry experts at Infinity
                Construction NYC.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col items-center gap-3 mb-6 text-base sm:text-lg">
                <a
                  href="tel:13471234567"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Phone size={20} />
                  <span className="font-semibold">347 939 5779</span>
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
                  className="flex items-center gap-2 hover:text-primary transition" target="_blank"
                >
                  <Globe size={20} />
                  <span>www.infinityconstructionnyc.com</span>
                </Link>
              </div>

              <p className="mt-6 font-semibold text-gray-800">
                Quality Masonry. Built to Last.
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

export default BrickCMULayeringPage;
