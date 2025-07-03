import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";
import Script from "next/script"; // ✅ For JSON-LD
import PhoneCall from "@/components/PhoneCall";

export const metadata = {
  title: "Fire Escape & Metal Restoration NYC | Infinity Construction",
  description:
    "Professional fire escape, metal railing & fence restoration services in NYC. Certified safety compliance, rust removal, and structural reinforcement.",
  keywords: [
    "fire escape restoration NYC",
    "metal railing repair",
    "fence restoration services",
    "rust removal NYC",
    "structural reinforcement",
    "building safety compliance",
    "metal coating specialists",
    "emergency fire escape repairs",
  ],
};

const FireEscapeRestorationPage = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data */}
      <Script
        id="json-ld-fire-escape"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fire Escape and Metal Restoration",
            description:
              "Certified fire escape and metal restoration services including railing and fence repair, rust removal, and safety compliance across NYC.",
            provider: {
              "@type": "LocalBusiness",
              name: "Infinity Construction NYC",
              image: "https://www.infinityconstructionnyc.com/logo-new.png",
              url: "https://www.infinityconstructionnyc.com",
              telephone: "+1-347-939-5779",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1809 Albany Ave",
                addressLocality: "Brooklyn",
                addressRegion: "NY",
                postalCode: "11210",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/infinityconstructionnyc",
                "https://www.instagram.com/infinity_construction_nyc",
                "https://www.linkedin.com/in/imrul-hassan-403724268",
              ],
            },
            areaServed: {
              "@type": "Place",
              name: "New York City",
            },
            serviceType:
              "Fire Escape Restoration, Metal Railing Repair, Fence Coating",
          }),
        }}
      />

      {/* ✅ Original Page Content Starts Here */}
      <HeaderSpecial />
      <main
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b text-lg lg:text-xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8"
          itemProp="name"
        >
          Fire Escape/Metal Railing & Fence Restoration
        </h1>

        <section itemScope itemType="https://schema.org/LocalBusiness">
          <p className="text-justify text-lg" itemProp="description">
            Fire escapes are a critical safety feature, and maintaining them in
            excellent condition is essential for ensuring the safety and
            compliance of your property. At{" "}
            <Link href="/" itemProp="url">
              Infinity Construction NYC
            </Link>
            , we provide comprehensive fire escape restoration services designed
            to address structural issues, enhance durability, and extend the
            lifespan of your fire escape system.
          </p>
          <div className="flex justify-center lg:justify-start my-4">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
            <div className="w-full lg:w-8/12 p-4 space-y-6">
              <h2 className="text-4xl my-4">
                Our Fire Escape Restoration Services
              </h2>
              <ul
                itemProp="hasOfferCatalog"
                itemScope
                itemType="https://schema.org/OfferCatalog"
              >
                <li
                  className="text-justify"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  •{" "}
                  <strong className="font-medium">
                    Rust and Corrosion Removal:
                  </strong>{" "}
                  <span itemProp="description">
                    We clean and treat rusted areas to prevent further damage
                    and restore the metal&apos;s integrity. This includes
                    applying rust inhibitors and protective primers to prevent
                    future corrosion.
                  </span>
                </li>
                <li
                  className="text-justify"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  •{" "}
                  <strong className="font-medium">
                    Component Replacement:
                  </strong>{" "}
                  <span itemProp="description">
                    Damaged or worn-out stairs, platforms, railings, and
                    brackets are expertly replaced to ensure safety and
                    functionality. We source durable, high-quality components to
                    ensure long-lasting performance.
                  </span>
                </li>
                <li
                  className="text-justify"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  • <strong className="font-medium">Reinforcements:</strong>{" "}
                  <span itemProp="description">
                    Weak or unstable sections are reinforced to guarantee the
                    structural integrity of the entire fire escape system. We
                    use advanced techniques and materials, such as steel plates
                    or braces, to strengthen critical areas.
                  </span>
                </li>
                <li
                  className="text-justify"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  •{" "}
                  <strong className="font-medium">
                    Repainting and Coating:
                  </strong>{" "}
                  <span itemProp="description">
                    High-quality, weather-resistant paints and coatings are
                    applied to protect against corrosion and maintain a
                    polished, professional appearance. We offer a variety of
                    color options to complement your building&apos;s aesthetic.
                  </span>
                </li>
                <li
                  className="text-justify"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  •{" "}
                  <strong className="font-medium">
                    Inspection and Safety Checks:
                  </strong>{" "}
                  <span itemProp="description">
                    We conduct thorough inspections to ensure your fire escape
                    meets all safety standards and compliance codes. Our
                    detailed evaluations identify any hidden vulnerabilities
                    that need to be addressed.
                  </span>
                </li>
                <li
                  className="text-justify"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  • <strong className="font-medium">Welding Repairs:</strong>{" "}
                  <span itemProp="description">
                    For fire escapes with cracks or broken joints, we perform
                    precise welding repairs to restore structural soundness and
                    extend the life of the system.
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-4/12 p-4 space-y-6">
              <Image
                src="/fire-escape/fire-escape-img-1.JPG"
                width={600}
                height={600}
                alt="Professional fire escape restoration in New York City"
                className="w-full rounded-lg shadow-md h-96 object-cover"
                itemProp="image"
                priority
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl my-4">Additional Services</h2>
          <ul
            itemProp="hasOfferCatalog"
            itemScope
            itemType="https://schema.org/OfferCatalog"
          >
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • <strong className="font-medium">Load Testing:</strong>{" "}
              <span itemProp="description">
                We offer load testing to verify the fire escape&apos;s capacity
                to safely support weight during emergencies.
              </span>
            </li>
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • <strong className="font-medium">Galvanization:</strong>{" "}
              <span itemProp="description">
                For added durability and protection against rust, we provide
                galvanization services, ensuring your fire escape withstands
                harsh weather conditions.
              </span>
            </li>
            <li
              className="text-justify"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Offer"
            >
              • <strong className="font-medium">Emergency Repairs:</strong>{" "}
              <span itemProp="description">
                We offer prompt emergency repair services to address urgent
                safety concerns and bring your fire escape back to operational
                standards.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-4xl my-4">Why Regular Maintenance Matters</h2>
          <p className="text-justify" itemProp="description">
            Regular maintenance and timely repairs are essential for preventing
            costly replacements and avoiding potential safety hazards. By
            addressing minor issues early, you can extend the life of your fire
            escape and keep your property compliant with local safety
            regulations. Routine maintenance also improves the appearance and
            functionality of your fire escape, adding value to your property.
          </p>
        </section>

        <section
          itemProp="review"
          itemScope
          itemType="https://schema.org/Review"
        >
          <h2 className="text-4xl my-4">
            Why Choose Infinity Construction NYC for Fire Escape Restoration?
          </h2>
          <ul className="mb-6">
            <div
              itemProp="itemReviewed"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <meta itemProp="name" content="Infinity Construction NYC" />
              <li className="text-justify" itemProp="reviewBody">
                •{" "}
                <strong className="font-medium">
                  Expertise You Can Trust:
                </strong>{" "}
                With years of experience, our skilled technicians deliver
                high-quality restoration services tailored to your specific
                needs.
              </li>
              <li className="text-justify" itemProp="reviewBody">
                • <strong className="font-medium">Commitment to Safety:</strong>{" "}
                We prioritize safety and compliance, ensuring your fire escape
                meets all legal requirements and industry standards.
              </li>
              <li className="text-justify" itemProp="reviewBody">
                • <strong className="font-medium">Durable Solutions:</strong>{" "}
                Using premium materials and advanced techniques, we ensure
                long-lasting results that protect your investment.
              </li>
              <li className="text-justify" itemProp="reviewBody">
                •{" "}
                <strong className="font-medium">
                  Customer-Focused Service:
                </strong>{" "}
                From the initial inspection to project completion, we provide
                clear communication and reliable service every step of the way.
              </li>
              <li className="text-justify" itemProp="reviewBody">
                •{" "}
                <strong className="font-medium">Comprehensive Approach:</strong>{" "}
                We address every aspect of fire escape restoration, from
                structural repairs to aesthetic enhancements, ensuring a
                complete and professional result.
              </li>
            </div>
          </ul>

          <p className="text-justify" itemProp="description">
            Protect and restore your fire escape with Infinity Construction NYC.
            Contact us today to learn more about our fire escape restoration
            services, and schedule a consultation with our experts.
          </p>
          <ProjectsSection />
        </section>
      </main>
      <Footer />

      <PhoneCall />
    </>
  );
};

export default FireEscapeRestorationPage;
