import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Phone, Mail, Globe } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const HistoricalLandmarkRestorationPage = () => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />
        <main
          className="container mx-auto p-4 pt-40 sm:pt-48 2xl:pt-36 border-b text-xl md:text-2xl text-slate-800 lg:text-xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <section className="mb-10" itemScope itemType="https://schema.org/LocalBusiness">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6" itemProp="name">
              NYC Historical Landmark Restoration: Brownstone and Limestone Experts
            </h1>

            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Preserving the Architectural Heritage of Brooklyn, Manhattan, Queens, and The Bronx with LPC-Compliant Masonry.
            </p>

            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center mb-8">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Call <a href={contactPhoneHref} className="underline">{contactPhone}</a> for expert historical landmark restoration in NYC.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Expert Facade Restoration for NYC Landmarked Buildings
            </h2>

            <div className="flex flex-col lg:flex-row items-start gap-10 mb-8">
              <Image
                src="/historical-landmark/historical-img-1.JPG"
                width={1400}
                height={900}
                alt="LPC-compliant brownstone and limestone restoration in NYC"
                className="w-full lg:w-1/2 rounded-lg h-[320px] md:h-[360px] object-cover"
                itemProp="image"
              />
              <p className="w-full lg:w-1/2 text-justify mb-6" itemProp="description">
                New York City&apos;s architectural history is defined by its iconic limestone and brownstone structures. At <Link href="/" className="text-orange-500">Infinity Construction NYC</Link> , we provide specialized restoration services that balance structural integrity with historical preservation. Whether it is a 19th-century townhouse in Brooklyn Heights or a limestone estate in the Upper East Side, our team ensures every project meets the strict standards of the Landmarks Preservation Commission (LPC).
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Our Restoration Process</h2>
            <h3 className="text-xl sm:text-2xl mb-4">A Scientific Approach to Historical Preservation</h3>
            <p className="text-justify mb-6" itemProp="description">
              To ensure your building qualifies for SGE snapshots, we outline our technical process clearly:
            </p>

            <div className="space-y-6" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 1: LPC-Compliant Structural Inspection</h3>
                <p className="mb-2" itemProp="description">
                  We perform a deep-layer assessment to identify spalling, scaling, and cracks. This includes evaluating the mortar joints to prevent water infiltration and structural shifts.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 2: Custom Material Matching</h3>
                <p className="mb-2" itemProp="description">
                  We create bespoke mortar and stone mixtures, color-matched to your building&apos;s original 19th-century facade. This ensures a seamless blend that is historically accurate and physically compatible with the original stone.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 3: Specialized Non-Abrasive Cleaning</h3>
                <p className="mb-2" itemProp="description">
                  Using low-pressure steam and eco-friendly chemical solutions, we remove carbon crust, pollutants, and biological growth without damaging the delicate face of the historical masonry.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 4: Precision Patching and Resurfacing</h3>
                <p className="mb-2" itemProp="description">
                  Damaged layers are removed to the sound stone base. We then apply multiple layers of specialized mortar to recreate the original profiles, moldings, and cornices.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 5: Advanced Weatherproofing</h3>
                <p className="mb-2" itemProp="description">
                  We apply breathable, vapor-permeable sealants that protect against NYC&apos;s harsh freeze-thaw cycles while allowing the building to breathe, preventing future stone rot.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Why Landmark Restoration is Vital for Property Owners</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Benefit</th>
                    <th className="p-3 border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Code Compliance</td>
                    <td className="p-3 border">Avoid costly LPC violations and Department of Buildings (DOB) stop-work orders.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Increased ROI</td>
                    <td className="p-3 border">Professionally restored facades significantly increase market value in historic districts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Local Law 11 (FISP)</td>
                    <td className="p-3 border">Regular restoration helps buildings over 6 stories pass mandatory facade inspections.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" itemProp="review" itemScope itemType="https://schema.org/Review">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Common Questions About NYC Landmark Restoration</h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>Do I need an LPC permit for brownstone facade repair?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Yes. Any work that alters the exterior of a landmarked building or a building within a historic district requires a permit from the Landmarks Preservation Commission (LPC). We assist owners in obtaining the necessary Certificate of Appropriateness.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>What causes brownstone to crumble or spall?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  NYC&apos;s moisture and freeze-thaw cycles cause water to enter the stone&apos;s layers. When the water freezes, it expands and forces the outer layers to flake off. Professional resurfacing is required to stop this decay.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>How do I choose the right contractor for a landmarked building?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Ensure the contractor has experience with NYC-specific materials, understands the Administrative Code, and uses custom-mixed mortars rather than off-the-shelf cement, which can damage historical stone.
                </p>
              </details>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Beyond Restoration: Masonry and Construction Services</h2>
            <h3 className="text-xl sm:text-2xl mb-2">Expert Brickwork and CMU Block Layering</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <span itemProp="description"><strong className="font-medium">Precision Brickwork:</strong> Perfect alignment and mortar application for extensions and new builds.</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <span itemProp="description"><strong className="font-medium">CMU Block Layering:</strong> Durable, high-strength foundation and wall construction tailored to your design vision.</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <span itemProp="description"><strong className="font-medium">Tailored Solutions:</strong> We work within your budget and timeline without compromising on craftsmanship.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Serving All NYC Boroughs</h2>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Brooklyn</li>
              <li>Manhattan</li>
              <li>The Bronx and Queens</li>
            </ul>
          </section>

          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">Contact Us Today</p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Preserve the past and protect your property with trusted NYC landmark restoration specialists.
              </p>

              <div className="flex flex-col items-center gap-3 mb-6 text-base sm:text-lg">
                <a href={contactPhoneHref} className="flex items-center gap-2 hover:text-primary transition">
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
                Get a Free Restoration Estimate
              </Link>

              <p className="mt-2 font-semibold text-gray-800">
                Infinity Construction NYC - Preserving the Past, Building the Future.
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

export default HistoricalLandmarkRestorationPage;
