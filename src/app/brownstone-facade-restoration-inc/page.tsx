import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrownstoneFacadeRestorationPage = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-6 sm:pt-44 pb-12 text-base sm:text-lg leading-relaxed px-4 md:px-12 lg:px-48">
        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-tertiary mb-4 py-5">
          Brownstone Facade Restoration Experts in NYC
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8">
          Trusted in Brooklyn, Manhattan, Queens & The Bronx
        </h2>
        <h3 className="text-lg sm:text-xl text-center mb-8">
          Infinity Construction NYC – Preserving NYC&apos;s Architectural
          Heritage
        </h3>

        {/* Intro Section */}
        <section className="space-y-4">
          <p>
            At{" "}
            <Link href="/" rel="noopener noreferrer" target="_blank">
              Infinity Construction NYC
            </Link>
            , we specialize in brownstone facade restoration in NYC, offering
            high-quality solutions for homeowners across&nbsp; 
             <Link
              href="https://www.wikidata.org/wiki/Q11299"
              rel="noopener noreferrer"
              target="_blank"
            >
               Manhattan
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
            ,{" "}
            <Link
              href="https://www.wikidata.org/wiki/Q60"
              rel="noopener noreferrer"
              target="_blank"
            >
              New York City
            </Link>
            . As a licensed brownstone contractor in NYC, we bring decades of
            expertise in restoring and preserving the timeless beauty of New
            York&apos;s iconic brownstone architecture.
          </p>
          <p>
            Whether you need brownstone repair in Brooklyn, facade renovation in
            the Bronx, or tuckpointing in Manhattan, our team of skilled masons
            and facade experts is here to help. We handle everything from
            brownstone wall repair and stucco patching to chimney repair and
            steps restoration.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="my-10 flex flex-col lg:flex-row items-center gap-8">
          {/* Bullet Points */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Full-Service Brownstone Renovation & Facade Repair
            </h3>
            <p>Our services include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Brownstone facade cleaning and waterproofing</li>
              <li>Historic brownstone restoration in Brooklyn</li>
              <li>Brownstone lintel and molding repair</li>
              <li>Facade structural and water damage repair</li>
              <li>NYC DOB-compliant facade restoration</li>
              <li>Exterior brownstone repair and patching</li>
            </ul>
            <p className="mt-4">
              As a top-rated brownstone contractor in NYC, we understand local
              codes, historic preservation rules, and facade permit
              requirements. Whether it&apos;s emergency facade repair, landmark
              brownstone restoration, or regular facade maintenance, our work is
              compliant, durable, and detail-oriented.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-96 h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/historical-landmark/historical-img-1.JPG"
              alt="NYC Brownstone Facade Restoration"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Services List */}
        <section className="my-10 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Why Choose Infinity Construction NYC?
          </h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Trusted brownstone restoration company in NYC</li>
            <li>
              Local experts for Queens facade repairs and Manhattan brownstone
              renovations
            </li>
            <li>Affordable pricing and transparent estimates</li>
            <li>Skilled in NYC brownstone architecture services</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="my-10">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">FAQs:</h4>
          <div className="space-y-4">
            <div>
              <strong>How much does brownstone restoration cost in NYC?</strong>
              <p>
                It varies based on damage, materials, and permit needs—contact
                us for a custom quote.
              </p>
            </div>
            <div>
              <strong>Do brownstones need regular maintenance?</strong>
              <p>
                Yes. Preventative facade preservation protects your home from
                major repairs.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="my-10 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            Call Infinity Construction NYC Today!
          </h4>
          <p>
            For the best brownstone contractor in Brooklyn or expert facade
            repair in NYC, trust Infinity Construction NYC—your local
            specialists in full-service brownstone restoration.
          </p>
          <p className="mt-2 font-semibold">
            Schedule your free facade inspection and estimate today!
          </p>
          <p className="mt-2">
            <a href="tel:+13479395779" >
              (347) 939‑5779
            </a>
          </p>
        </section>
      </main>

      <Footer />
      <PhoneCall />
    </div>
  );
};

export default BrownstoneFacadeRestorationPage;
