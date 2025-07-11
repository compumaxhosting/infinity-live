import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="container mx-auto p-4 pt-40 2xl:pt-36 border-b px-6 md:px-12 lg:px-48">
        <h1 className="text-center text-2xl md:text-5xl text-black mb-8">
          Top-Rated Brownstone Restoration Experts in NYC – Quality
          Craftsmanship You Can Trust
        </h1>
        <h2 className="text-center text-xl md:text-4xl text-black mb-8">
          Your Premier Choice for Brownstone Restoration in
          <Link
            href="https://www.wikidata.org/wiki/Q11299"
            rel="noopener noreferrer"
            target="_blank"
          >
            &nbsp; Manhattan
          </Link>
          ,{" "}
          <Link
            href="https://www.wikidata.org/wiki/Q18419"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brooklyn
          </Link>
          ,{" "}
          <Link
            href="https://www.wikidata.org/wiki/Q18424"
            rel="noopener noreferrer"
            target="_blank"
          >
            Queens
          </Link>
          ,{" "}
          <Link
            href="https://www.wikidata.org/wiki/Q18426"
            rel="noopener noreferrer"
            target="_blank"
          >
            The Bronx
          </Link>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-center my-12">
          {/* ✅ Text Content */}
          <div className="space-y-6 text-xl md:text-2xl">
            <p>
              When it comes to brownstone restoration, residents across New York
              City rely on one trusted name—
              <Link href="/" itemProp="url">
                <span itemProp="legalName">Infinity Construction NYC</span>
              </Link>
              . As a premier provider of full-service restoration, we offer
              end-to-end solutions tailored to meet the unique demands of
              brownstone architecture. From brownstone restoration Brooklyn NY
              to brownstone façade restoration Bronx, our work reflects timeless
              beauty, integrity, and lasting durability.
            </p>
            <p>
              We understand the historical significance of brownstones and the
              pride homeowners take in maintaining their architectural charm.
              That’s why every service we provide—from brownstone masonry repair
              Manhattan to brownstone stoop repair Brooklyn—is delivered with
              exceptional attention to detail, craftsmanship, and client
              satisfaction.
            </p>
          </div>

          {/* ✅ Image beside paragraph */}
          <div className="relative w-full h-72 sm:h-96 md:h-[420px]">
            <Image
              src="/paving/brownstone.jpg" // 🖼️ Replace with actual image in public folder
              alt="Brownstone Restoration NYC"
              fill
              className="object-cover rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Why Brownstone Restoration Matters in NYC
        </h2>
        <p className="text-xl md:text-2xl">
          Brownstones are more than just buildings—they&apos;re architectural
          icons. Found in historic neighborhoods throughout the city, from
          Brooklyn Heights to Harlem, these structures symbolize a rich legacy.
          Over time, however, natural elements and urban wear can erode their
          condition. That’s where Infinity Construction NYC comes in. We
          specialize in preserving and renewing these city treasures.
        </p>
        <p className="text-xl md:text-2xl">
          Our team of Manhattan brownstone contractors, licensed brownstone
          contractor Bronx, and brownstone licensed mason Queens are deeply
          experienced in restoring facades, stoops, trims, cornices, and more.
          With a focus on quality and compliance, we ensure all restoration
          aligns with historical preservation guidelines and modern structural
          standards.
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Comprehensive Brownstone Repair Contractors Brooklyn and NYC Can Trust
        </h2>
        <p className="text-xl md:text-2xl">
          Infinity Construction NYC provides a full suite of services that
          protect and enhance the appearance of your brownstone. Whether you
          need basic repairs or a complete overhaul, we have the skills and
          expertise to deliver flawless results. <br />
          <strong>Brownstone Façade Restoration :</strong>
          <br />
          A crumbling façade isn’t just an eyesore—it’s a hazard. Our brownstone
          facade restoration Manhattan and façade restoration Bronx services
          restore your home’s curb appeal and ensure long-term stability. We
          match original materials to preserve authenticity. <br />
          <strong>Stoop and Step Repair :</strong> <br />
          Stoops and entry steps often bear the brunt of foot traffic and
          weather. Our brownstone stoop repair Brooklyn and brownstone stoop
          restoration Manhattan services replace cracked, damaged, or missing
          stones with seamless precision. <br />
          <strong>Masonry and Structural Repair :</strong>
          <br />
          We provide structural support, wall reinforcement, and brownstone
          masonry repair Manhattan that keeps your home solid from the inside
          out. We handle lintel replacements, cornice work, and re-pointing with
          care. <br />
          <strong>Waterproofing and Sealing :</strong>
          <br />
          Moisture is the enemy of any masonry building. Our brownstone
          waterproofing Bronx NY services involve professional sealing
          techniques to prevent leaks, stains, and foundational issues. <br />
          <strong>Painting and Plastering :</strong>
          <br />
          Breathe new life into your home’s interior and exterior. Our skilled
          team applies high-quality finishes that are long-lasting and
          era-appropriate, including brownstone exterior paint Bronx. <br />
          <strong>Window Trim and Cornice Repair :</strong>
          <br />
          Delicate decorative features like trims and cornices require expert
          touch. We specialize in brownstone window trim repair Brooklyn and
          brownstone cornice repair Brooklyn, using artisan methods that uphold
          your building’s historical value. <br />
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Top-Rated Brownstone Renovation Contractors in Queens and the Bronx
        </h2>
        <p className="text-xl md:text-2xl">
          Infinity Construction NYC is proud to be the preferred brownstone
          renovation contractors Bronx and brownstone renovation experts Queens
          rely on. Our portfolio includes everything from landmark brownstone
          restorations to modern upgrades that maintain character.
        </p>
        <p className="text-xl md:text-2xl">
          We also guide our clients through the process of obtaining brownstone
          renovation permits NYC—an essential but often complex step in the
          journey.
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Affordable Brownstone Repair Brooklyn Without Compromising Quality
        </h2>
        <p className="text-xl md:text-2xl">
          Affordability doesn’t mean cutting corners. We’re committed to
          delivering affordable brownstone repair Brooklyn solutions that meet
          your budget and exceed your expectations. Through careful planning and
          clear communication, we keep your restoration on time and within cost.
        </p>
        <p className="text-xl md:text-2xl">
          Whether you need brick and brownstone repair Brooklyn or a complete
          structural rebuild, we make sure every dollar delivers value.
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Meet Your Local Brownstone Experts in Brooklyn and NYC
        </h2>
        <p className="text-xl md:text-2xl">
          What makes us the local brownstone experts in Brooklyn? It’s our deep
          knowledge of NYC architecture, commitment to preservation, and
          unparalleled craftsmanship. Our team knows the city, the regulations,
          and the common pain points homeowners face.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li className="text-xl md:text-2xl">Free on-site estimates</li>
          <li className="text-xl md:text-2xl">
            Clear timelines and project plans
          </li>
          <li className="text-xl md:text-2xl">Transparent, itemized pricing</li>
          <li className="text-xl md:text-2xl">
            Expert consultation and material guidance
          </li>
          <li className="text-xl md:text-2xl">Dedicated project management</li>
        </ul>
        <h2>Common Brownstone Restoration Services We Provide</h2>
        <p className="text-xl md:text-2xl">
          Here&apos;s a quick look at the most in-demand restoration work our
          clients request:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li className="text-xl md:text-2xl">
            Brownstone patch repair Manhattan
          </li>
          <li className="text-xl md:text-2xl">
            Brownstone façade restoration Bronx
          </li>
          <li className="text-xl md:text-2xl">
            Brownstone steps repair Queens
          </li>
          <li className="text-xl md:text-2xl">
            Brownstone window trim repair Brooklyn
          </li>
          <li className="text-xl md:text-2xl">
            Brownstone cornice repair Brooklyn
          </li>
          <li className="text-xl md:text-2xl">
            Brownstone exterior paint Bronx
          </li>
          <li className="text-xl md:text-2xl">
            Brownstone waterproofing Bronx NY
          </li>
        </ul>
        <p className="text-xl md:text-2xl">
          Each service comes with a detailed scope of work and high-quality
          craftsmanship.
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          The NYC Brownstone Repair Company Brooklyn Homeowners Trust
        </h2>
        <p className="text-xl md:text-2xl">
          Our reputation is built on results. As a full-service NYC brownstone
          repair company Brooklyn homeowners trust, we deliver excellence on
          every level. From residential brownstones to multi-family buildings,
          we treat every project with the care and respect it deserves.
          <br />
        </p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <p className="text-xl md:text-3xl">Our Clients Include:</p>
          <li className="text-xl md:text-2xl">
            Homeowners restoring family properties
          </li>
          <li className="text-xl md:text-2xl">
            Landlords preserving income properties
          </li>
          <li className="text-xl md:text-2xl">
            Developers enhancing resale value
          </li>
          <li className="text-xl md:text-2xl">
            Historic district property owners complying with regulations
          </li>
        </ul>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Benefits of Choosing Infinity Construction NYC
        </h2>

        <p className="text-xl md:text-2xl">
          We believe your restoration experience should be as solid as the
          brownstone itself. When you choose us, you get:
        </p>
        <p className="text-xl md:text-2xl">
          • Licensed & Insured Professionals: Your project is in safe hands.
        </p>
        <p className="text-xl md:text-2xl">
          • Historic Compliance: We follow NYC Landmarks Preservation Commission
          (LPC) standards.
        </p>
        <p className="text-xl md:text-2xl">
          • On-Time Delivery: We stick to deadlines with efficient project
          management.
        </p>
        <p className="text-xl md:text-2xl">
          • Budget-Conscious Options: No surprise costs or hidden fees.
        </p>
        <p className="text-xl md:text-2xl">
          • Quality Materials: We source durable and historically accurate
          materials.
        </p>
        <p className="text-xl md:text-2xl">
          • Clean Worksites: We respect your home and leave it better than we
          found it.
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Brownstone Restoration Success Stories Across NYC
        </h2>
        <p className="text-xl md:text-2xl">
          From Park Slope to Harlem, Astoria to the South Bronx, we’ve restored
          hundreds of brownstones with stunning results. Our clients rave about
          our professionalism, attention to detail, and customer-first approach.
        </p>
        <p className="text-xl md:text-2xl">
          “Infinity Construction transformed my crumbling stoop into a beautiful
          entranceway. They were professional, fast, and the results were
          amazing.” – Brooklyn Client
        </p>
        <p className="text-xl md:text-2xl">
          “Our brownstone needed urgent façade work. The team handled it quickly
          and respectfully, keeping our building’s look intact. Highly
          recommended!” – Manhattan Client
        </p>
        <h2 className="text-left text-xl md:text-5xl text-black my-8">
          Ready to Restore Your Brownstone? Contact Us Today!
        </h2>
        <p className="text-xl md:text-2xl">
          Don’t let age, weather, or damage steal the charm of your historic
          home. Call Infinity Construction NYC—the trusted name in brownstone
          restoration in Queens NY, Brooklyn, Manhattan, and The Bronx.
        </p>
        <p className="text-xl md:text-2xl">
          Get in touch today for a free consultation and see why we’re the best
          brownstone restoration Queens, brownstone renovation contractors
          Bronx, and brownstone experts NYC homeowners rely on.
        </p>
        <p className="text-xl md:text-2xl">
          Infinity Construction NYC – Building Legacies, One Brownstone at a
          Time.
        </p>
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
