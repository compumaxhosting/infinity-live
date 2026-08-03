import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ServiceLinks from "@/components/ServiceLinks";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-28 sm:pt-28 2xl:pt-36"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-5xl text-black mb-8">
          Best Masonry Contractors New York{" "}
        </h1>
        <section className="mb-10">
          <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center">
            <p className="text-xl sm:text-2xl mb-4 text-orange-600 font-bold">
              Call{" "}
              <a href="tel:3479395779" className="underline font-extrabold">
                347 939 5779
              </a>{" "}
              for Best Masonry Contractors New York.
            </p>

            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </section>
        <p className="text-lg">
          Welcome to Infinity Construction NYC, your premier choice for masonry
          contractors in Brooklyn, Manhattan, and Queens, New York. With our
          unwavering commitment to quality craftsmanship and attention to
          detail, we specialize in delivering top-notch masonry solutions that
          enhance the beauty and durability of your property.
        </p>
        <p>
          Our team of skilled masons brings experience and knowledge to every
          project, ensuring exceptional results for residential and
          commercial clients.
        </p>
        <ServiceLinks />
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
