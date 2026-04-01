import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import PhoneCall from "@/components/PhoneCall";
import { Phone, Mail, Globe } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const BrickPointingWaterproofingPage = () => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />
        <main
          className="container mx-auto p-4 pt-40 sm:pt-48 2xl:pt-36 border-b text-xl md:text-2xl text-slate-800 lg:text-xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <section className="mb-10">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6"
            itemProp="name"
          >
            Expert Brick Pointing and Waterproofing in NYC
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-orange-600">
            Restoring Structural Integrity and Curb Appeal Across the Five
            Boroughs
          </p>
          </section>

          <section className="mb-10" itemScope itemType="https://schema.org/LocalBusiness">
            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Call <a href={contactPhoneHref} className="underline">{contactPhone}</a> for immediate help with brick pointing and waterproofing in NYC.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </section>

          <section className="mb-10" itemScope itemType="https://schema.org/LocalBusiness">
            <div className="flex flex-col lg:flex-row items-start gap-10 mb-8">
              <Image
                width={1400}
                height={900}
                src="/brick-pointing/brick-img-1.JPG"
                alt="Expert masons laying and repointing brick joints on an NYC brownstone facade"
                className="w-full lg:w-1/2 rounded-lg h-[320px] md:h-[360px] object-cover"
                itemProp="image"
              />
              <p className="w-full lg:w-1/2 text-justify mb-6" itemProp="description">
                Brick pointing and waterproofing in NYC by <Link href="/" className="text-orange-500">Infinity Construction NYC</Link> involves removing decayed mortar and applying breathable sealants. Ideal for owners of aging masonry, this service prevents water infiltration and structural spalling, significantly extending the life of your building while maintaining its historical aesthetic.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Why Your NYC Brickwork Needs Professional Care</h2>
            <p className="text-justify mb-6" itemProp="description">
              In New York City, the combination of acidic rain, extreme humidity, and freezing winters causes mortar joints to crack and wash out over time. When mortar fails, water enters the wall, leading to efflorescence (white salt stains), interior mold, and even structural shifting.
            </p>
            <p className="text-justify mb-6" itemProp="description">
              At Infinity Construction NYC, we specialize in precision brick pointing (repointing) and advanced waterproofing. Our mission is to seal your building&apos;s envelope, ensuring it remains weather-tight and visually stunning for decades.
            </p>

            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Our Professional Masonry Restoration Services</h2>
            <p className="text-justify mb-6" itemProp="description">
              Google SGE favors content that clearly distinguishes between technical terms. Here is how we address your masonry needs:
            </p>

            <div itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog" className="space-y-6">
              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">1. Precision Repointing</h3>
                <p className="mb-2" itemProp="description">
                  This is the process of raking out old, crumbled mortar and replacing it with high-quality, flexible mortar. We ensure the new mix matches the strength and color of your original bricks to prevent stress cracking.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">2. Aesthetic Tuckpointing</h3>
                <p className="mb-2" itemProp="description">
                  For a high-end look, we use tuckpointing. We match the mortar color exactly to the brick and apply a fine, contrasting tuck line. This creates the illusion of perfectly level, narrow joints and is ideal for historic Manhattan and Brooklyn townhouses.
                </p>
              </div>

              <div itemProp="itemListElement" itemScope itemType="https://schema.org/Offer">
                <h3 className="text-xl sm:text-2xl mb-2">3. Specialized Masonry Waterproofing</h3>
                <p className="mb-2" itemProp="description">
                  Restoring the mortar is only half the battle. We apply breathable silane/siloxane sealants that act like a protective jacket for your building.
                </p>
                <ul className="mb-6 list-disc pl-6">
                  <li>
                    <strong className="font-medium">Water Repellent:</strong> Liquid water beads off the surface.
                  </li>
                  <li>
                    <strong className="font-medium">Vapor Permeable:</strong> Internal moisture can still escape, preventing brick rot.
                  </li>
                  <li>
                    <strong className="font-medium">Freeze-Thaw Protection:</strong> Reduces expansion damage caused by NYC winters.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">The Difference Between Repointing and Waterproofing</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Feature</th>
                    <th className="p-3 border">Brick Repointing</th>
                    <th className="p-3 border">Masonry Waterproofing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Primary Goal</td>
                    <td className="p-3 border">Structural repair of joints.</td>
                    <td className="p-3 border">Moisture barrier for the brick face.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">Warning Signs</td>
                    <td className="p-3 border">Crumbled mortar, gaps, loose bricks.</td>
                    <td className="p-3 border">Damp interior walls, white salt stains.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">NYC Frequency</td>
                    <td className="p-3 border">Every 15-25 years.</td>
                    <td className="p-3 border">Every 5-10 years for best protection.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" itemProp="review" itemScope itemType="https://schema.org/Review">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>How do I know if my building needs repointing?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  If you can scrape the mortar away with a screwdriver, or if you see deep gaps (recesses) between the bricks, it is time to repoint. Waiting too long allows water to settle behind the brick, which can lead to expensive Local Law 11 violations.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>What is efflorescence and can waterproofing fix it?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  Efflorescence is the white, powdery salt left behind when water evaporates from your bricks. While waterproofing stops new water from entering, the existing salt must be professionally cleaned before the sealant is applied.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-300 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl sm:text-2xl font-medium">
                  <span>Is all mortar the same?</span>
                  <span className="ml-4 text-orange-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-justify" itemProp="reviewBody">
                  No. Using a mortar that is too hard (like pure Portland cement) on older NYC bricks can cause the bricks to crack. We custom-blend mortar to be slightly softer than the brick, ensuring a safe and durable bond.
                </p>
              </details>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">Why Choose Infinity Construction NYC?</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="font-medium">LPC and DOB Expertise:</strong> We understand the regulations for Landmark buildings and standard NYC building codes.
              </li>
              <li>
                <strong className="font-medium">Custom Mortar Matching:</strong> We ensure your repairs are invisible by matching the color and texture of your existing masonry.
              </li>
              <li>
                <strong className="font-medium">Advanced Leak Detection:</strong> Our team identifies the path of least resistance where water is entering your home.
              </li>
              <li>
                <strong className="font-medium">Service Area:</strong> Proudly serving residential and commercial clients in Brooklyn, Manhattan, Queens, The Bronx, and Staten Island.
              </li>
            </ul>

            <p className="text-justify mb-6" itemProp="description">
              Restore your property today. Do not let a small crack turn into a major leak. Contact Infinity Construction NYC for a professional masonry assessment.
            </p>
          </section>

          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Start Your Project with a Free Consultation
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Whether you are building a new foundation or restoring a
                historical facade, trust the masonry experts at Infinity Construction NYC.
              </p>

              <div className="flex flex-col items-center gap-3 mb-6 text-base sm:text-lg">
                <a
                  href={contactPhoneHref}
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

export default BrickPointingWaterproofingPage;
