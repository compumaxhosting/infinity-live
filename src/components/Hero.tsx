"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex justify-center items-center bg-white dark:bg-slate-950 p-6 pt-0 pb-6 sm:pb-20 dark:border-b font-forum"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-5xl sm:text-7xl 2xl:text-8xl text-black dark:text-white py-10 sm:py-12 md:py-14 md:pb-6">
          Infinity Construction NYC
        </h1>

        <h3 className="text-xl md:text-xl text-[#042c46] dark:text-[#90caf9] sm:mb-2">
          PRECISION. PUNCTUALITY. PROFESSIONALISM.
        </h3>

        <div className="text-xl md:text-xl leading-7 text-slate-800 dark:text-slate-300 space-y-6 sm:px-20 pt-6 text-left ">
          <p>
            Infinity Construction NYC is a leading provider of quality
            restoration services in the tri-state area. With a focus on
            precision, punctuality, and professionalism, we specialize in
            painting and masonry. Our goal is to deliver exceptional results to
            our clients while maintaining cost-effectiveness.
          </p>

          <p>
            Best painting and masonry Contractor in Brooklyn, Manhattan, Queens,
            and The Bronx, NY.
          </p>

          <p>
            Serving a wide range of clients, including property owners,
            real-estate firms, architects, and engineers, we are committed to
            enhancing the beauty and durability of interior spaces. With a
            highly experienced team of workers, we take pride in our attention
            to detail and the quality of our work.
          </p>

          <p>
            Trusted Contractor for painting and masonry Near Me in Brooklyn,
            Queens, The Bronx, and Manhattan, New York City. Operating in key
            locations such as Park Slope, Brooklyn Heights, Downtown Brooklyn,
            Cobble Hill, Dumbo, Red Hook, Crown Heights, Chelsea, Riverside,
            Harlem, The Bronx, and Queens, we are proud to be one of the leading
            interior renovation specialists in NYC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
