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

        <div className="grid grid-cols-1 gap-8">
          {specialityData.map((data, index) => {
            return (
              <Link href={data.path} key={index} passHref>
                <motion.div
                  className={`flex flex-col sm:flex-row bg-white dark:bg-gray-900 shadow-md rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "backInOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div
                    className={`w-full lg:w-1/3 border-8 border-tertiary bg-tertiary ${
                      data.id % 2 === 0 ? "sm:order-last" : ""
                    }`}
                  >
                    <Image
                      src={data.imageUrl}
                      alt={data.heading}
                      width={400}
                      height={650}
                      className={`w-full h-full aspect-video object-cover rounded-t-2xl ${
                        data.id % 2 === 0
                          ? "sm:rounded-r-2xl"
                          : "sm:rounded-l-2xl"
                      }`}
                      priority
                    />
                  </div>

                  <div className="w-full lg:w-2/3 p-6 sm:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-semibold text-tertiary dark:text-white">
                      {data.heading}
                    </h3>
                    <p className="mt-2 xl:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300">
                      {data.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
