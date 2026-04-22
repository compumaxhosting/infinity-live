import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Phone, Mail, Globe } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const StuccoWaterproofingPage = () => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />
        <main
          className="container mx-auto p-4 pt-28 border-b text-xl md:text-2xl text-slate-800 lg:text-xl px-4 md:px-12 lg:px-48"
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
              Stucco Restoration and Waterproofing Services in NYC
            </h1>

            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Expert Protection for Exterior Walls, Parapets, and Retaining
              Walls
            </p>

            <div className="max-w-5xl rounded-lg border border-gray-200 mx-auto p-6 text-center mb-8">
              <p className="text-lg sm:text-xl md:whitespace-nowrap mb-4 text-orange-600">
                Call{" "}
                <a href={contactPhoneHref} className="underline">
                  {contactPhone}
                </a>{" "}
                for expert stucco restoration and waterproofing in NYC.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Image
                  src="/stucco/stucco-img-2.webp"
                  width={600}
                  height={600}
                  alt="Professional stucco restoration and waterproofing services in New York City"
                  className="w-full h-[320px] md:h-[360px] object-cover rounded-lg shadow-md"
                  itemProp="image"
                />
                <Image
                  src="/stucco/stucco-img-3.webp"
                  width={600}
                  height={600}
                  alt="Additional stucco waterproofing example in NYC"
                  className="w-full h-[320px] md:h-[360px] object-cover rounded-lg shadow-md"
                  itemProp="image"
                />
              </div>

              <div className="max-w-5xl mx-auto">
                <p className="text-center" itemProp="description">
                  Stucco restoration and waterproofing in NYC by{" "}
                  <Link href="/" className="text-orange-500">
                    Infinity Construction NYC
                  </Link>{" "}
                  protects residential and commercial buildings from structural
                  decay. This service includes crack repair, reinforcement, and
                  premium coatings. It is essential for owners facing water
                  seepage, providing a long-lasting, weather-resistant barrier
                  against New York&apos;s harsh elements.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Comprehensive Waterproofing for New York City&apos;s Architecture
            </h2>
            <p className="text-justify mb-6" itemProp="description">
              In New York City, extreme weather from humid summers to freezing
              winters takes a toll on building exteriors. At Infinity
              Construction NYC, we specialize in the restoration and
              waterproofing of stucco surfaces, parapets, and retaining walls.
              Our goal is to stop water infiltration before it leads to costly
              structural damage or Local Law 11 (FISP) violations.
            </p>
            <p className="text-justify mb-6" itemProp="description">
              We serve property owners across Brooklyn, Manhattan, Queens, and
              The Bronx, providing certified technical expertise and premium
              materials to ensure your building remains dry, safe, and visually
              stunning.
            </p>
          </section>

          <section
            className="mb-10"
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Our Professional Restoration Process
            </h2>
            <p className="text-justify mb-6" itemProp="description">
              Google SGE favors clear, step-by-step explanations. Here is how we
              ensure the longevity of your structure:
            </p>

            <div className="space-y-6">
              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  Detailed Inspection and Assessment
                </h3>
                <p className="mb-2" itemProp="description">
                  We begin with a forensic evaluation of the facade. Our
                  technicians look for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sub-surface water pockets and hollow stucco.</li>
                  <li>Deteriorating joints in parapet walls.</li>
                  <li>Failed waterproofing membranes or flashing issues.</li>
                </ul>
              </div>

              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  Damage Removal and Surface Prep
                </h3>
                <p className="mb-2" itemProp="description">
                  We do not patch over problems. We remove compromised material
                  down to sound substrate to prevent hidden stone rot from
                  continuing beneath the new repair.
                </p>
              </div>

              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  Structural Reinforcement
                </h3>
                <p className="mb-2" itemProp="description">
                  To prevent future cracks, we integrate reinforcement layers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">
                      Wire Mesh and Steel Strips:
                    </strong>{" "}
                    Providing a skeleton for new mortar.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Mechanical Anchoring:
                    </strong>{" "}
                    Ensuring new stucco bonds permanently to the building
                    foundation.
                  </li>
                </ul>
              </div>

              <div
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <h3 className="text-xl sm:text-2xl mb-2">
                  Advanced Waterproof Coating
                </h3>
                <p className="mb-2" itemProp="description">
                  We apply high-performance products, such as MasterProtect HB
                  200. These coatings are:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">Vapor-Permeable:</strong>{" "}
                    They allow the building to breathe while blocking liquid
                    water.
                  </li>
                  <li>
                    <strong className="font-medium">UV-Resistant:</strong> They
                    maintain color and flexibility despite direct sunlight.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Specialized Waterproofing Solutions
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Service Type</th>
                    <th className="p-3 border">Best For</th>
                    <th className="p-3 border">Key Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Facade Waterproofing</td>
                    <td className="p-3 border">
                      Townhouses and Commercial Hubs
                    </td>
                    <td className="p-3 border">
                      Blocks driving rain and prevents efflorescence (salt
                      stains).
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Parapet Wall Repair</td>
                    <td className="p-3 border">Rooftop Safety Walls</td>
                    <td className="p-3 border">
                      Seals the most vulnerable point for water entry in NYC
                      buildings.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Retaining Wall Shielding</td>
                    <td className="p-3 border">
                      Gardens and Below-Grade Walls
                    </td>
                    <td className="p-3 border">
                      Prevents soil moisture from pushing through masonry.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Membrane Systems</td>
                    <td className="p-3 border">Foundations and Basements</td>
                    <td className="p-3 border">
                      Creates an impenetrable rubberized barrier against
                      groundwater.
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
              Common Questions About NYC Waterproofing (FAQ)
            </h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>
                    Why is water leaking through my stucco if I do not see
                    cracks?
                  </span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Stucco is naturally porous. Over time, original waterproofing
                  paint can wear thin, allowing moisture to seep through the
                  material itself. Professional elastomeric coatings are
                  required to reseal the surface.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>How do I know if my parapet wall needs repair?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Look for bulging masonry, cracked mortar joints, or water
                  stains on the ceiling below the roofline. In NYC, parapets are
                  vulnerable to wind and temperature swings.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>
                    What is the lifespan of a professional waterproofing
                    treatment?
                  </span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  With premium coatings like MasterProtect, you can expect
                  around 10 to 15 years of protection. We recommend professional
                  inspection every 3 years to catch minor sealant failures
                  early.
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
                  Expert Masonry Knowledge:
                </strong>{" "}
                Beyond stucco, we are masters of brickwork and CMU block
                layering, ensuring every structural repair is handled with
                precision.
              </li>
              <li>
                <strong className="font-medium">Tailored Solutions:</strong>{" "}
                Every NYC borough has different architectural needs. We
                customize mortar mixes and coatings to suit your neighborhood
                style.
              </li>
              <li>
                <strong className="font-medium">Commitment to Quality:</strong>{" "}
                We only use commercial-grade materials that meet or exceed NYC
                building codes.
              </li>
              <li>
                <strong className="font-medium">Reliable Timelines:</strong> We
                respect your schedule, completing projects on time and within
                budget.
              </li>
            </ul>

            <p className="text-justify mt-4" itemProp="description">
              Get your expert consultation today. Protect your investment from
              the next NYC storm. Contact Infinity Construction NYC for a
              professional assessment of your stucco, parapets, or retaining
              walls.
            </p>
          </section>

          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Contact Us Today
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Expert protection for exterior walls, parapets, and retaining
                walls across NYC.
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
            </div>
          </section>
        </main>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default StuccoWaterproofingPage;
