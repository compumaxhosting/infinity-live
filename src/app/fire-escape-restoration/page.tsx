import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import PhoneCall from "@/components/PhoneCall";
import { Phone, Mail, Globe } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const FireEscapeRestorationPage = () => {
  return (
    <>
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
            Certified Fire Escape Restoration and Metal Repair in NYC
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-orange-600">
            Ensuring Structural Safety and Building Code Compliance Across the
            Five Boroughs
          </p>

          <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center mb-8">
            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Call{" "}
              <a href={contactPhoneHref} className="underline">
                {contactPhone}
              </a>{" "}
              for immediate help with fire escape restoration and metal repair
              in NYC.
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
              src="/fire-escape/fire-escape-img-1.webp"
              width={1400}
              height={900}
              alt="Certified fire escape restoration and metal repair service in NYC"
              className="w-full lg:w-1/2 rounded-lg h-[320px] md:h-[360px] object-cover"
              itemProp="image"
              priority
            />
            <p
              className="w-full lg:w-1/2 text-justify mb-6"
              itemProp="description"
            >
              Professional fire escape restoration in NYC by{" "}
              <Link href="/" className="text-orange-500">
                Infinity Construction NYC
              </Link>{" "}
              includes rust removal, structural welding, and weather-resistant
              coating. This service is for building owners needing to meet FDNY
              safety codes, providing essential emergency egress reliability,
              preventing legal violations, and extending the lifespan of metal
              structures.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
            Is Your NYC Fire Escape Safe and Compliant?
          </h2>
          <p className="text-justify mb-6" itemProp="description">
            In New York City, a fire escape is more than just metal. It is a
            life-saving exit. Over time, NYC&apos;s salty air and humidity cause
            oxidation, leading to structural rust-jacking that can weaken bolts
            and platforms.
          </p>
          <p className="text-justify mb-6" itemProp="description">
            At Infinity Construction NYC, we specialize in the full-scale
            restoration of fire escapes, metal railings, and fences. We help
            property owners navigate the strict requirements of the NYC
            Department of Buildings (DOB) and the FDNY, ensuring your emergency
            exits are both beautiful and battle-ready.
          </p>

          <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
            Our Comprehensive Restoration and Repair Process
          </h2>
          <p className="text-justify mb-6" itemProp="description">
            To satisfy Google SGE&apos;s preference for detailed how-to
            information, here is our expert process for metal restoration:
          </p>

          <div
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
            className="space-y-6"
          >
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="text-xl sm:text-2xl mb-2">
                1. Structural Integrity Inspection
              </h3>
              <p className="mb-2" itemProp="description">
                We identify silent killers like internal rust in support
                brackets, loose lead anchors, and thinning metal steps. We
                ensure every connection point to the building&apos;s facade is
                rock-solid.
              </p>
            </div>

            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="text-xl sm:text-2xl mb-2">
                2. Mechanical Scraping and Rust Removal
              </h3>
              <p className="mb-2" itemProp="description">
                We do not just paint over rust. We use wire brushing, sanding,
                or needle scaling to strip the metal down to a clean surface.
                This is critical for the new primer to bond correctly.
              </p>
            </div>

            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="text-xl sm:text-2xl mb-2">
                3. Precision Welding and Component Replacement
              </h3>
              <p className="mb-2" itemProp="description">
                If a stair or platform is too far gone, we do not patch it. We
                replace it. Our certified welders repair cracked joints and
                reinforce weak brackets using high-grade structural steel.
              </p>
            </div>

            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="text-xl sm:text-2xl mb-2">
                4. Rust-Inhibitive Priming and Triple-Coat Painting
              </h3>
              <p className="mb-2" itemProp="description">
                We apply a heavy-duty rust-inhibitor primer followed by
                specialized exterior metal enamel. This creates a multi-layer
                shield against the freeze-thaw cycles and salt that destroy NYC
                metalwork.
              </p>
            </div>

            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="text-xl sm:text-2xl mb-2">
                5. Safety Load Testing and Scraping Affidavit
              </h3>
              <p className="mb-2" itemProp="description">
                If required, we perform load testing to verify the system can
                support its rated weight. We help you maintain the documentation
                needed to prove your building is in compliance during city
                inspections.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
            Why Regular Maintenance is a Legal Necessity
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Benefit</th>
                  <th className="p-3 border">Impact on NYC Property Owners</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Avoid Violations</td>
                  <td className="p-3 border">
                    Prevents failure-to-maintain violations from the DOB and
                    FDNY.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border">Liability Reduction</td>
                  <td className="p-3 border">
                    Ensures the safety of tenants, reducing the risk of legal
                    action during emergencies.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border">Cost Avoidance</td>
                  <td className="p-3 border">
                    Scraping and painting every 5 years is significantly cheaper
                    than full metal replacement.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border">Aesthetic Value</td>
                  <td className="p-3 border">
                    A freshly painted fire escape improves curb appeal for
                    Brooklyn and Manhattan townhouses.
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
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="group rounded-lg border border-gray-300 bg-white p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                <span>How often should a fire escape be painted in NYC?</span>
                <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-justify" itemProp="reviewBody">
                According to NYC code, fire escapes must be kept painted and
                free from rust. In the NYC climate, we recommend a professional
                scrape and paint every 5 to 7 years to prevent deep structural
                corrosion.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-300 bg-white p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                <span>What is scraping and painting vs. full restoration?</span>
                <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-justify" itemProp="reviewBody">
                Scraping and painting is preventative maintenance. Full
                restoration is required when there is structural damage, such as
                holes in the steps, loose railings, or brackets pulled away from
                the brickwork.
              </p>
            </details>

            <details className="group rounded-lg border border-gray-300 bg-white p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                <span>Can I be fined for a rusty fire escape?</span>
                <span className="ml-4 text-orange-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-justify" itemProp="reviewBody">
                Yes. NYC inspectors can issue violations for peeling paint or
                significant rust. These violations can lead to heavy fines and
                may delay property sale or refinancing.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
            Beyond Fire Escapes: Metal Railing and Fence Services
          </h2>
          <ul
            className="mb-6 list-disc pl-6"
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span itemProp="description">
                <strong className="font-medium">Wrought Iron Fences:</strong>{" "}
                Restoration of decorative perimeter fencing.
              </span>
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span itemProp="description">
                <strong className="font-medium">Stoop Railings:</strong>{" "}
                Securing and painting handrails for Brooklyn and Manhattan
                brownstones.
              </span>
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span itemProp="description">
                <strong className="font-medium">Roof Railings:</strong> Ensuring
                safety compliance for rooftop terraces and bulkheads.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
            Why Choose Infinity Construction NYC?
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="font-medium">Safety First:</strong> We
              prioritize structural soundness above all else.
            </li>
            <li>
              <strong className="font-medium">Premium Materials:</strong> We use
              industrial-strength coatings designed specifically for NYC&apos;s
              harsh environment.
            </li>
            <li>
              <strong className="font-medium">Local Knowledge:</strong> We are
              experts in the specific fire escape designs found in historic
              districts like Park Slope, Harlem, and Astoria.
            </li>
            <li>
              <strong className="font-medium">Reliable Timelines:</strong> We
              work efficiently to minimize disruption to tenants while ensuring
              a flawless finish.
            </li>
          </ul>

          <p className="text-justify mb-6" itemProp="description">
            Protect your tenants and your property. Do not wait for a city
            inspection to find out your fire escape is unsafe. Contact Infinity
            Construction NYC today for a professional safety evaluation.
          </p>
        </section>

        <section className="mt-12 mb-10 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Start Your Project with a Free Consultation
            </p>

            <p className="mb-6 text-base sm:text-lg text-gray-700">
              Whether you are restoring a fire escape or repairing metal
              railings, trust the experts at Infinity Construction NYC.
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
              Safety Without Compromise.
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <PhoneCall />
    </>
  );
};

export default FireEscapeRestorationPage;
