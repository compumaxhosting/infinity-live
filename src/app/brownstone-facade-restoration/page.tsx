import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";
import Link from "next/link";
import PhoneCall from "@/components/PhoneCall";
import { Phone, Mail, Globe } from "lucide-react";
import ServiceLinks from "@/components/ServiceLinks";
import Image from "next/image";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const BrickCMULayeringPage = () => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Service">
        <HeaderSpecial />

        <main
          className="container mx-auto p-4 pt-28 sm:pt-48 2xl:pt-36 border-b text-xl md:text-2xl text-slate-800 lg:text-xl px-4 md:px-12 lg:px-48"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          {/* H1 */}
           <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Brownstone Facade Restoration in Brooklyn, Manhattan, Queens, and The Bronx
          </h1>
          {/* TOP CTA */}
          <section className="mb-10">
            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600 font-bold">
                Call{" "}
                <a href={contactPhoneHref} className="underline font-extrabold">
                  {contactPhone}
                </a>{" "}
                for immediate masonry consultation in NYC.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </section>
       <section className="py-2">
  <div className="max-w-7xl mx-auto px-6">
    {/* Top Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
      {/* Left Content */}
      <div className="space-y-5 text-lg md:text-xl text-slate-800">
        
        <p className="text-justify">
          Brownstone facade restoration protects historic buildings from
          structural deterioration, water damage, and weathering while
          preserving their original architectural character. Infinity
          Construction NYC provides expert brownstone restoration services
          across Brooklyn, Manhattan, Queens, and the Bronx using proven
          masonry restoration techniques and historically compatible materials.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full flex justify-center">
  <div className="w-72 md:w-80 lg:w-96">
    <Image
      src="/historical-landmark/historical-img-1.webp"
      alt="Brownstone Facade Restoration"
      width={800}
      height={700}
      className="w-full h-auto object-contain rounded-3xl"
    />
  </div>
</div>
    </div>

    {/* Full Width Content */}
    <div className="mt-10 space-y-6 text-lg md:text-xl text-justify text-slate-800">
      <div>
          <h2 className="text-2xl font-semibold mb-3">
            Professional Brownstone Restoration Services
          </h2>

          <p className="mb-3">
            Proper restoration extends the lifespan of brownstone buildings and
            helps maintain their historic value through expert craftsmanship and
            preservation-focused repair techniques.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Brownstone facade restoration Brooklyn</li>
            <li>Brownstone facade repair Manhattan</li>
            <li>Brownstone restoration Queens</li>
            <li>Brownstone facade renovation Bronx</li>
            <li>Historic brownstone restoration NYC</li>
            <li>Brownstone masonry contractor Brooklyn</li>
            <li>Brownstone facade replacement Manhattan</li>
            <li>Brownstone exterior restoration Queens</li>
            <li>Brownstone stone repair Bronx</li>
            <li>Landmark facade restoration NYC</li>
          </ul>
        </div>
      <p>
        Infinity Construction NYC restores deteriorated sandstone, repairs
        cracked facades, replaces damaged lintels, restores decorative
        cornices, repoints failing mortar joints, resurfaces weathered
        brownstone, waterproofs exterior walls, and rebuilds historic stoops.
        Every project begins with a detailed facade assessment to identify
        moisture intrusion, structural movement, masonry deterioration, and
        aging materials before recommending the most effective restoration
        solution.
      </p>

      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Why Choose Infinity Construction NYC?
        </h2>

        <p>
          Experienced craftsmanship and preservation-focused methods deliver
          durable, code-compliant brownstone restoration that preserves both the
          beauty and structural integrity of historic properties throughout New
          York City.
        </p>
      </div>

      <p>
        The company specializes in brownstone facade contractors Brooklyn,
        brownstone waterproofing Manhattan, brownstone lintel repair Queens,
        brownstone cornice restoration Bronx, brownstone masonry repair
        Brooklyn, brownstone stoop restoration Manhattan, brownstone facade
        resurfacing Queens, brownstone crack repair Bronx, brownstone facade
        preservation NYC, brownstone sandstone restoration Brooklyn,
        brownstone facade maintenance Manhattan, brownstone building
        restoration Queens, brownstone pointing contractor Bronx, and
        professional brownstone restoration NYC.
      </p>

      <p>
        Using premium restoration materials, traditional masonry techniques,
        and modern waterproofing systems, Infinity Construction NYC helps
        property owners preserve the beauty, safety, and value of New York
        City&apos;s iconic brownstone buildings. Whether your property requires
        localized repairs or complete facade restoration, our team delivers
        reliable workmanship designed to withstand New York&apos;s demanding climate
        while maintaining the building&apos;s historic appearance.
      </p>
    </div>
  </div>
</section>

         



          {/* WHY CHOOSE */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl mb-4 text-orange-600">
              Why Choose Infinity Construction NYC?
            </h2>

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
<ServiceLinks />
          {/* BOTTOM CTA */}
          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600 font-bold">
                Start Your Project with a Free Consultation
              </p>

              <p className="mb-6 text-base sm:text-lg text-gray-700">
                Whether you are building a new foundation or restoring a
                historical facade, trust the masonry experts at Infinity
                Construction NYC.
              </p>

              <div className="flex flex-col items-center gap-3 mb-6 text-base sm:text-lg">
                <a
                  href={contactPhoneHref}
                  className="flex items-center gap-2 hover:text-primary transition font-bold"
                >
                  <Phone size={20} />
                  <span className="font-extrabold">{contactPhone}</span>
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
                className="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300 mb-4"
              >
                Request a Quote
              </Link>

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
