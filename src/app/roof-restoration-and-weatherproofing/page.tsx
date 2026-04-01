import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import PhoneCall from "@/components/PhoneCall";
import { Phone, Mail, Globe } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const RoofRestorationPage = () => {
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
              Expert Roof Restoration and Weatherproofing in NYC
            </h1>

            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              High-Performance Roofing Solutions for Homes and Businesses Across the Five Boroughs
            </p>

            <div className="max-w-5xl rounded-lg border border-gray-200 mx-auto p-6 text-center mb-8">
              <p className="text-lg sm:text-xl md:whitespace-nowrap mb-4 text-orange-600">
                Call <a href={contactPhoneHref} className="underline">{contactPhone}</a> for urgent roof leak detection and weatherproofing in NYC.
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
                src="/roofing/roofing-img-2.JPG"
                width={1400}
                height={900}
                alt="Professional roof restoration and weatherproofing service in NYC"
                className="w-full lg:w-1/2 rounded-lg h-[320px] md:h-[360px] object-cover"
                itemProp="image"
              />
              <p className="w-full lg:w-1/2 text-justify mb-6" itemProp="description">
                Roof restoration and weatherproofing in NYC by <Link href="/" className="text-orange-500">Infinity Construction NYC</Link>  includes leak detection, membrane repair, and protective coatings. Designed for residential and commercial owners, this service stops active leaks and extends roof life, providing a durable, weather-resistant shield against New York&apos;s intense seasonal elements.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Protect Your Property with Professional Roof Restoration</h2>
            <p className="text-justify mb-6" itemProp="description">
              A roof in New York City faces unique challenges, from heavy snow loads in the winter to scorching heat on Manhattan rooftops in the summer. At Infinity Construction NYC, we provide specialized restoration and weatherproofing services that go beyond simple patching.
            </p>
            <p className="text-justify mb-6" itemProp="description">
              We focus on the structural health of your roofing system, ensuring that every layer, from the substrate to the final waterproof coating, is engineered to keep your interior dry and your energy bills low.
            </p>
          </section>

          <section className="mb-10" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Our Comprehensive Restoration Process</h2>
            <p className="text-justify mb-6" itemProp="description">
              Google SGE favors content that explains the how behind a service. Here is our step-by-step approach to securing your roof:
            </p>

            <div className="space-y-6">
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 1: Advanced Leak Detection and Inspection</h3>
                <p className="mb-2" itemProp="description">
                  We perform thermal and physical inspections to find silent leaks that have not reached your ceiling yet. We check flashings, drains, and seams where most roof failures begin.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 2: Surface Preparation and Debris Removal</h3>
                <p className="mb-2" itemProp="description">
                  A restoration is only as good as the bond. We thoroughly clean the existing roof surface, removing loose gravel, dirt, and biological growth to ensure new weatherproofing layers adhere correctly.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 3: Reinforcement of Critical Points</h3>
                <p className="mb-2" itemProp="description">
                  We apply reinforced mesh and heavy-duty sealants to high-stress areas, including skylights, vents, chimneys, and parapet wall intersections.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 4: Application of Weatherproofing Membranes</h3>
                <p className="mb-2" itemProp="description">
                  Depending on roof type, we apply liquid-applied membranes or specialized coatings like silicone or acrylic to create a seamless rubberized skin over the full building envelope.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">Step 5: Final Quality Assurance</h3>
                <p className="mb-2" itemProp="description">
                  We conduct a final flood test or inspection to ensure the restored system is fully seamless and ready to withstand NYC storms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Roof Restoration Benefits for NYC Property Owners</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Benefit</th>
                    <th className="p-3 border">Why It Matters for You</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Cost Savings</td>
                    <td className="p-3 border">Restoration often costs far less than total roof tear-off and replacement.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Energy Efficiency</td>
                    <td className="p-3 border">Reflective cool-roof coatings reduce AC costs by reflecting solar heat.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Zero Disruptions</td>
                    <td className="p-3 border">Unlike full replacement, restoration is quieter and usually avoids tenant displacement.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Sustainability</td>
                    <td className="p-3 border">Restoration keeps existing roofing materials out of NYC landfills.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" itemProp="review" itemScope itemType="https://schema.org/Review">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Common Questions About NYC Roof Weatherproofing (FAQ)</h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>How do I know if my roof needs restoration or full replacement?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  If your roof is structurally sound but has surface leaks or wear, restoration is usually the best choice. If the deck is rotting or saturated with water, full replacement may be required. We provide clear assessments to help you choose the most cost-effective path.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>What is a cool roof coating?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Many NYC buildings benefit from highly reflective surfaces. We apply white silicone coatings that reflect significant sunlight, lowering rooftop and interior temperatures during summer.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>How long does a roof restoration last in New York?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  A professionally applied system can add 10 to 20 years to roof life. With scheduled re-coating, many properties can defer full replacement for much longer.
                </p>
              </details>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Serving All NYC Neighborhoods</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="font-medium">Brooklyn:</strong> Flat roof restoration in Park Slope, Williamsburg, and Bushwick.
              </li>
              <li>
                <strong className="font-medium">Manhattan:</strong> Commercial weatherproofing in Midtown, SoHo, and the Upper West Side.
              </li>
              <li>
                <strong className="font-medium">Queens and The Bronx:</strong> Shingle and flat roof repairs for residential homes and warehouses.
              </li>
            </ul>
          </section>

          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">Contact Us Today</p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Your shield against the elements starts with a professional roof assessment and weatherproofing plan.
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
                Request a Quote
              </Link>

              <p className="mt-2 font-semibold text-gray-800">
                Infinity Construction NYC - Your Shield Against the Elements.
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

export default RoofRestorationPage;
