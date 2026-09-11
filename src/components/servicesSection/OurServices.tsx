"use client";

import React, { useState } from "react";
import Image from "next/image";
import { specialityData } from "@/data/ourServicesData";
import { motion } from "framer-motion";
import Link from "next/link";

// Define type for expanded state
type ExpandedState = Record<number, boolean>;

const OurServices = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const toggleReadMore = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="bg-gray-100 dark:bg-slate-950 py-8 sm:py-12"
      style={{ fontFamily: "var(--font-forum)" }}
      aria-labelledby="our-services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto px-6">
        <h2
          id="our-services-heading"
          className="mt-2 text-3xl md:text-4xl text-black dark:text-white font-forum text-center mb-4"
          itemProp="name"
        >
          Our Services
        </h2>
        <h3 className="text-center font-medium text-xl md:text-2xl text-primary mb-3">
          NYC Brownstone, Facade & Masonry Restoration Services
        </h3>
        <p className="text-center text-lg leading-7 text-gray-700 dark:text-gray-300 mb-10 max-w-4xl mx-auto">
          From historic brownstones to modern masonry buildings, Infinity
          Construction NYC provides exterior restoration and construction
          services throughout New York City.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {specialityData.map((data, index) => {
            const isExpanded = expanded[data.id] ?? false;
            const shortText =
              data.description.length > 120
                ? data.description.slice(0, 120) + "..."
                : data.description;

            return (
              <Link
                href={data.path}
                key={data.id}
                aria-label={`Learn more about ${data.heading} service`}
              >
                <motion.div
                  className="flex flex-col sm:flex-row bg-white dark:bg-gray-900 shadow-md rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "backInOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  itemScope
                  itemType="https://schema.org/Service"
                  itemProp="itemListElement"
                >
                  <meta itemProp="position" content={String(index + 1)} />

                  {/* Image */}
                  <div
                    className={`w-full lg:w-1/3 ${
                      data.id % 2 === 0 ? "sm:order-last" : ""
                    }`}
                  >
                    <div className="w-full h-full aspect-video relative">
                      <Image
                        src={data.imageUrl}
                        alt={`${data.heading} service`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        itemProp="image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-2/3 p-6 sm:p-10 flex flex-col justify-center">
                    <h3
                      className="mt-2 text-xl md:text-2xl font-forum font-medium text-tertiary dark:text-white"
                      itemProp="name"
                    >
                      {data.heading}
                    </h3>

                    {/* Mobile */}
                    <p className="mt-2 text-md leading-7 text-gray-700 dark:text-gray-300 block sm:hidden">
                      {isExpanded ? data.description : shortText}
                    </p>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleReadMore(data.id);
                      }}
                      className="text-sm text-[#364f4f] font-medium mt-1 block sm:hidden"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>

                    {/* Desktop */}
                    <p
                      className="mt-2 text-lg leading-7 text-gray-700 dark:text-gray-300 hidden sm:block"
                      itemProp="description"
                    >
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
