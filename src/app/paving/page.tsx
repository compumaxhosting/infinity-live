import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";
import React from "react";
import Script from "next/script"; // ✅ For structured data
import PhoneCall from "@/components/PhoneCall";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data for Concrete, Stone & Brick Paving */}
      <Script
        id="json-ld-paving-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Concrete, Stone, and Brick Paving",
            description:
              "Professional paving services in NYC, including stamped and colored concrete, natural stone patios, and brick walkways by Infinity Construction NYC.",
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
              "Stamped Concrete, Stone Paving, Brick Walkways, Patio Installation",
          }),
        }}
      />

      {/* ✅ Original Layout Starts Here (Unchanged) */}
      <div>
        <HeaderSpecial />
        <main
          className="container mx-auto p-4 pt-40 sm:pt-48 2xl:pt-36 border-b text-lg lg:text-xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <header>
            <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
              Concrete, Stone, and Brick Paving
            </h1>
          </header>

          <section>
            <p className="text-justify text-lg">
              Concrete paving offers durability, versatility, and a clean,
              modern look. Ideal for driveways, sidewalks, and patios, concrete
              is a cost-effective option that can be customized to fit your
              style and functional needs.
            </p>
            <div className="flex justify-center lg:justify-start my-4">
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
            <article className="w-full p-4 space-y-6">
              <h2 className="text-4xl my-4">Our Concrete Paving Services</h2>
              <ul>
                <li className="text-justify">
                  • <strong className="font-medium">Stamped Concrete:</strong>{" "}
                  Mimic the appearance of stone, brick, or tile with textured
                  and patterned finishes that add character to your space. We
                  offer a wide range of patterns and textures to suit both
                  traditional and contemporary designs.
                </li>
                <li className="text-justify">
                  • <strong className="font-medium">Colored Concrete:</strong>{" "}
                  Choose from a variety of colors to complement your property’s
                  design and enhance curb appeal. We provide custom color
                  matching to ensure seamless integration with your existing
                  landscape.
                </li>
                <li className="text-justify">
                  •{" "}
                  <strong className="font-medium">
                    Concrete Repair and Resurfacing:
                  </strong>{" "}
                  Restore damaged or worn concrete surfaces to like-new
                  condition with expert techniques and high-quality materials.
                  This includes crack filling, leveling, and applying protective
                  coatings to extend durability.
                </li>
                <li className="text-justify">
                  •{" "}
                  <strong className="font-medium">Decorative Finishes:</strong>{" "}
                  Enhance your space with options like exposed aggregate,
                  brushed finishes, or polished concrete for a refined look.
                  These finishes can be customized to create a unique aesthetic
                  that stands out.
                </li>
                <li className="text-justify">
                  •{" "}
                  <strong className="font-medium">
                    Custom Concrete Features:
                  </strong>{" "}
                  We also design and install custom features such as concrete
                  benches, planters, and retaining walls to complement your
                  outdoor space.
                </li>
              </ul>
            </article>

            <figure className="w-full lg:w-4/12 p-4 space-y-6">
              <Image
                src="/paving/paving-img-2.JPG"
                width={600}
                height={600}
                alt="Stamped concrete paving in an outdoor setting"
                className="w-full rounded-lg shadow-md h-96 object-cover"
              />
            </figure>
          </section>

          <section className="mb-8">
            <p className="text-justify">
              Natural stone paving provides timeless beauty and elegance to any
              outdoor area. Known for its durability and natural appeal, stone
              is perfect for creating luxurious patios, pathways, and pool
              decks.
            </p>

            <h2 className="text-4xl my-4">Our Natural Stone Paving Services</h2>
            <ul>
              <li className="text-justify">
                • <strong className="font-medium">Custom Layouts:</strong>{" "}
                Design unique patterns and arrangements to create stunning and
                personalized outdoor spaces. From intricate mosaics to simple
                geometric layouts, we cater to all styles.
              </li>
              <li className="text-justify">
                •{" "}
                <strong className="font-medium">
                  Wide Material Selection:
                </strong>{" "}
                Choose from premium options such as granite, limestone,
                bluestone, slate, and more to match your aesthetic preferences.
                We also source eco-friendly stone materials for sustainable
                projects.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Stone Restoration:</strong>{" "}
                Clean, reseal, and repair existing stonework to preserve its
                beauty and extend its lifespan. This includes replacing chipped
                or damaged stones and re-grouting as needed.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Edging and Accents:</strong>{" "}
                Add finishing touches with stone borders or inlays for a
                sophisticated and polished look. Custom edging options are
                available to define and highlight pathways and garden features.
              </li>
              <li className="text-justify">
                •{" "}
                <strong className="font-medium">
                  Pool Decks and Outdoor Kitchens:
                </strong>{" "}
                Design and install stone surfaces for poolside areas and outdoor
                kitchen spaces, combining functionality with luxury.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <p className="text-justify">
              Brick paving combines classic charm with durability, making it a
              popular choice for walkways, patios, and driveways. Its timeless
              appeal and range of color options create an inviting, warm
              aesthetic that complements any property.
            </p>

            <h2 className="text-4xl my-4">Our Brick Paving Services</h2>
            <ul>
              <li className="text-justify">
                • <strong className="font-medium">Custom Patterns:</strong>{" "}
                Create stunning designs such as herringbone, basket weave, or
                running bond to elevate your outdoor spaces. We also offer
                bespoke patterns for unique design concepts.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Brick Restoration:</strong>{" "}
                Repair and replace damaged or loose bricks for a seamless and
                uniform finish. Our team ensures precise alignment and color
                matching for flawless results.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Permeable Pavers:</strong>{" "}
                Install eco-friendly bricks to promote water drainage and reduce
                runoff, making them an environmentally conscious choice. These
                systems are ideal for driveways and areas prone to heavy
                rainfall.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Color Matching:</strong>{" "}
                Maintain uniformity and visual appeal by expertly matching new
                bricks to your existing structure. We work with a wide palette
                of brick colors to achieve a perfect match.
              </li>
              <li className="text-justify">
                •{" "}
                <strong className="font-medium">
                  Walkways and Garden Paths:
                </strong>{" "}
                Design and construct custom brick pathways that enhance the
                charm and functionality of your outdoor spaces.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-4xl my-4">
              Why Choose Infinity Construction NYC for Paving Services?
            </h2>
            <ul className="mb-6">
              <li className="text-justify">
                • <strong className="font-medium">Expert Craftsmanship:</strong>{" "}
                Our team of skilled professionals delivers precise, high-quality
                paving solutions tailored to your needs.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Premium Materials:</strong> We
                use only the finest materials to ensure your paving projects are
                durable, functional, and visually appealing.
              </li>
              <li className="text-justify">
                • <strong className="font-medium">Versatile Solutions:</strong>{" "}
                Whether you prefer the modern look of concrete, the elegance of
                natural stone, or the charm of brick, we provide customized
                options for every style.
              </li>
              <li className="text-justify">
                •{" "}
                <strong className="font-medium">Comprehensive Services:</strong>{" "}
                From initial design to installation and maintenance, we offer
                end-to-end paving solutions to ensure your project’s success.
              </li>
              <li className="text-justify">
                •{" "}
                <strong className="font-medium">
                  Customer-Focused Service:
                </strong>{" "}
                From the initial inspection to project completion, we provide
                clear communication and reliable service every step of the way.
              </li>
            </ul>
            <ProjectsSection />
          </section>
        </main>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
