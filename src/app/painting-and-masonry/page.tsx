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
          className="container mx-auto p-8 pt-40 sm:pt-48 2xl:pt-36 border-b text-xl md:text-2xl text-slate-800 px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <section className="mb-10" itemScope itemType="https://schema.org/LocalBusiness">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6" itemProp="name">
              Expert Interior Painting and Masonry Services in NYC
            </h1>

            <p className="text-xl sm:text-2xl mb-4 text-orange-600">
              Flawless Finishes and Structural Wall Restoration for NYC Homes and Offices
            </p>

            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center mb-8">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Call <a href={contactPhoneHref} className="underline">{contactPhone}</a> for premium interior painting and masonry services in NYC.
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
                src="/services-img-3.jpeg"
                width={1400}
                height={900}
                alt="Professional interior painting and plaster repair service in NYC"
                className="w-full lg:w-1/2 rounded-lg h-[320px] md:h-[360px] object-cover"
                itemProp="image"
              />
              <p className="w-full lg:w-1/2 text-justify mb-6" itemProp="description">
                Professional painting and masonry in NYC by <Link href="/" className="text-orange-500">Infinity Construction</Link> NYC includes expert plaster repair, moisture-resistant treatments, and premium interior painting. Ideal for homeowners and renovators, our service ensures perfectly smooth, durable walls and vibrant finishes that enhance property value and interior aesthetic across all five boroughs.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Transform Your Interiors with Master-Level Masonry and Paint
            </h2>
            <p className="text-justify mb-6" itemProp="description">
              In New York City&apos;s historic apartments and modern lofts, walls often suffer from age, settling, and humidity. At Infinity Construction NYC, we do not just apply a coat of paint; we restore the skin of your home.
            </p>

            <p className="text-justify mb-6" itemProp="description">
              Our specialized interior masonry and painting services focus on deep-layer surface preparation. From repairing cracked 19th-century plaster in Brooklyn Heights to applying high-end Venetian finishes in Manhattan, we ensure your walls are structurally sound and aesthetically perfect.
            </p>
          </section>

          <section className="mb-10" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Our Comprehensive Interior Restoration Process</h2>
            <p className="text-justify mb-6" itemProp="description">
              Google SGE favors detailed process explanations that show experience. Here is how we achieve a gallery-quality finish:
            </p>

            <div className="space-y-6">
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">1. Advanced Surface Inspection and Repair</h3>
                <p className="mb-2" itemProp="description">
                  We identify the root cause of wall damage, whether it is seasonal settling or hidden moisture. Our masonry team fixes:
                </p>
                <ul className="mb-2 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">Deep Plaster Cracks:</strong> Re-keying old plaster to the lath to prevent recurring cracks.
                  </li>
                  <li>
                    <strong className="font-medium">Dents and Uneven Surfaces:</strong> Skim coating walls to create a level-5 smooth finish.
                  </li>
                  <li>
                    <strong className="font-medium">Historic Ornamental Restoration:</strong> Preserving crown moldings and decorative plaster details.
                  </li>
                </ul>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">2. Moisture-Resistance and Substrate Prep</h3>
                <p className="mb-2" itemProp="description">
                  In NYC, bathrooms and kitchens are prone to mold. We apply specialized masonry treatments to create a moisture barrier, followed by high-quality sanding and priming to ensure the paint bonds permanently.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">3. Premium Paint Application</h3>
                <p className="mb-2" itemProp="description">
                  We use only top-tier, low-VOC paints that provide rich color density and durability.
                </p>
                <ul className="mb-2 list-disc pl-6 space-y-2">
                  <li>
                    <strong className="font-medium">Precision Cutting and Rolling:</strong> Clean lines at the ceiling and baseboards.
                  </li>
                  <li>
                    <strong className="font-medium">Custom Color Matching:</strong> We can match any existing decor or designer palette.
                  </li>
                  <li>
                    <strong className="font-medium">Decorative Textures:</strong> Including Venetian plaster, suede finishes, and modern sand textures.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">The Importance of Professional Surface Preparation</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">DIY / Basic Painting</th>
                    <th className="p-3 border">Infinity Construction Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Preparation</td>
                    <td className="p-3 border">Painting over cracks and dust.</td>
                    <td className="p-3 border">Full sanding, cleaning, and priming.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Wall Repair</td>
                    <td className="p-3 border">Spackle patches.</td>
                    <td className="p-3 border">Structural plaster repair and skim coating.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Durability</td>
                    <td className="p-3 border">Peeling or flaking in 2 years.</td>
                    <td className="p-3 border">Long-lasting, scrubbable, vibrant finish.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Cleanliness</td>
                    <td className="p-3 border">Dust and paint splatters.</td>
                    <td className="p-3 border">HEPA-filtered sanding and full floor protection.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" itemProp="review" itemScope itemType="https://schema.org/Review">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">FAQ: Interior Painting and Masonry</h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>Why do cracks keep appearing in my NYC apartment walls?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  NYC buildings constantly shift due to subway vibrations and temperature changes. Simply filling a crack with caulk will not work. Our masonry team uses fiberglass mesh and high-strength joint compounds to bridge the gap, providing a flexible repair that moves with the building.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>What is skim coating and do I need it?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Skim coating is the process of applying a thin layer of plaster over the entire wall to hide imperfections. If your walls have orange peel texture, old wallpaper damage, or many layers of lumpy paint, skim coating is the most effective way to achieve a modern, smooth look.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>How long does a typical room take to paint and restore?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  A standard room with minor repairs usually takes 2 to 3 days. This allows for proper drying time between masonry patches, primer, and the final two coats of paint.
                </p>
              </details>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Why Choose Infinity Construction NYC?</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="font-medium">Meticulous Craftsmanship:</strong> We treat every home like a work of art, with a focus on razor-sharp lines and smooth-as-glass walls.
              </li>
              <li>
                <strong className="font-medium">Clean Work Environment:</strong> We use dust-containment systems and heavy-duty drop cloths to protect furniture and flooring.
              </li>
              <li>
                <strong className="font-medium">E-E-A-T Certified:</strong> With decades of experience in NYC building types, we handle lath-and-plaster, drywall, and concrete substrates correctly.
              </li>
              <li>
                <strong className="font-medium">Timely and Professional:</strong> We respect your schedule and provide clear daily updates on our progress.
              </li>
            </ul>

            <p className="text-justify mt-4" itemProp="description">
              Ready for a flawless interior transformation? Do not settle for a mediocre paint job. Give your walls the professional masonry foundation they deserve. Contact Infinity Construction NYC for a detailed interior consultation.
            </p>
          </section>

          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Start Your Project with a Free Consultation
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Premium interior painting and masonry solutions for NYC homes and offices, delivered with perfection in every layer.
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
                Infinity Construction NYC - Perfection in Every Layer.
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
