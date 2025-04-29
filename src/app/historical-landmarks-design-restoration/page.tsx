import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="bg-accent dark:bg-slate-950 border-b p-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8 pt-4 sm:pt-28 2xl:pt-36 pb-14">
          {/* Card 1 */}
          <Link href="/historical-landmark">
            <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-900 shadow-md rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image Section */}
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0 border-8 border-tertiary bg-tertiary">
                <Image
                  src="/img-3.jpeg"
                  alt="Historical Landmarks Design Restoration"
                  width={400}
                  height={650}
                  className="w-full h-full aspect-video object-cover rounded-t-2xl sm:rounded-l-2xl"
                  priority
                />
              </div>
              {/* Text Section */}
              <div className="w-full lg:w-2/3 p-6 pt-2 sm:pt-10 sm:p-10 flex flex-col justify-center">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-tertiary dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  Historical Landmarks Design Restoration
                </h3>
                <p className="mt-2 xl:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300">
                  For over a decade, Infinity Construction NYC has been the
                  trusted partner for historical landmark restoration projects
                  in Brooklyn, Manhattan, and Queens, NY. We understand the
                  unique challenges of preserving these architectural treasures.
                  Our team of skilled artisans and restoration specialists
                  possesses the expertise and experience to meticulously restore
                  your landmark&apos;s grandeur, ensuring its legacy endures for
                  generations to come.
                </p>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link href="/brownstone-restoration">
            <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-900 shadow-md rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image Section */}
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0 border-8 border-tertiary bg-tertiary">
                <Image
                  src="/img-3.jpeg"
                  alt="Brownstone Restoration"
                  width={400}
                  height={650}
                  className="w-full h-full aspect-video object-cover rounded-t-2xl sm:rounded-l-2xl"
                  priority
                />
              </div>
              {/* Text Section */}
              <div className="w-full lg:w-2/3 p-6 pt-2 sm:pt-10 sm:p-10 flex flex-col justify-center">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-tertiary dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  Brownstone Restoration
                </h3>
                <p className="mt-2 xl:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300">
                  Brownstone restoration details can be added here. You can
                  replace this paragraph with actual content about Brownstone
                  Restoration.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
