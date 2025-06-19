"use client";

import React from "react";
import Image from "next/image";
import { specialityData } from "@/data/ourServicesData";
import { motion } from "framer-motion";
import Link from "next/link";

const OurServices = () => {
  return (
    <section
      className="bg-gray-100 dark:bg-slate-950 py-8 sm:py-16"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {specialityData.map((data, index) => (
            <Link href={data.path} key={index}>
              <motion.div
                className={`flex flex-col sm:flex-row ${
                  index % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-white dark:bg-gray-900"
                } shadow-md rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: "backInOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div
                  className={`w-full lg:w-1/3 mb-4 lg:mb-0 ${
                    data.id % 2 === 0 ? "sm:order-last" : ""
                  }`}
                >
                  <div className="w-full h-full aspect-video relative">
                    <Image
                      src={data.imageUrl}
                      alt={data.heading}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover rounded-t-2xl ${
                        data.id % 2 === 0
                          ? "sm:rounded-r-2xl"
                          : "sm:rounded-l-2xl"
                      }`}
                      priority={index < 3} // Only prioritize first few images
                    />
                  </div>
                </div>

                <div className="w-full lg:w-2/3 p-6 pt-2 sm:pt-10 sm:p-10 flex flex-col justify-center">
                  <h3
                    className="text-2xl md:text-3xl font-semibold text-tertiary dark:text-white"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    {data.heading}
                  </h3>
                  <p className="mt-2 text-lg xl:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300 text-justify">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
