import { HistoricalLandmarkCards } from "@/components/extras/HistoricalLandmarkCards";
import HistoricalLandmarkNav from "@/components/extras/HistoricalLandmarkNav";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="bg-accent dark:bg-slate-950 border-b p-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8 pt-44 sm:pt-44 2xl:pt-36 pb-14">
          <section>
            <HistoricalLandmarkNav />
            <div className="max-w-3xl rounded-lg border border-gray-200 mx-auto p-6 text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600 font-bold">
                Call{" "}
                <a href="tel:3479395779" className="underline font-extrabold">
                  347 939 5779
                </a>{" "}
                for Brownstone Facade Restoration Experts in NYC.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </section>
          <HistoricalLandmarkCards />
        </div>
      <HistoricalLandmarkNav />
      </div>

      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
