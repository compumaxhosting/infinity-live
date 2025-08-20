"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectsData from "@/data/projectsData";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Use icons for navigation
import Link from "next/link";

const Project = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-14 pb-0 md:pb-14 border-b">
      <div className="text-center mb-10">
        <h1
          className="text-3xl sm:text-5xl  text-gray-900 dark:text-white"
          style={{ fontFamily: "var(--font-forum)" }}
        >
          Other Works
        </h1>
      </div>

      <div className="embla overflow-hidden relative" ref={emblaRef}>
        <div className="embla__container flex">
          {projectsData.map((projects) => (
            <div
              key={projects.id}
              className="flex-none w-full sm:w-1/2 md:w-1/3 px-4 mb-6"
            >
              {/* Card */}
              <div className="relative z-20 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={projects.image}
                  alt={projects.title}
                  width={650}
                  height={400}
                  className="object-cover w-full h-48 lg:h-56"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3
                    className="text-2xl text-stone-950 dark:text-white"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    {projects.title}
                  </h3>
                  <p className="text-gray-700 my-2 mb-4 text-center md:text-justify">
                    {projects.description.slice(0, 180)}...{" "}
                    {/* Truncate the description */}
                  </p>
                  <Link
                    href={projects.path}
                    onPointerDown={(e) => e.stopPropagation()}
                    className="text-white bg-stone-950 hover:bg-stone-950/80 p-2 px-6 rounded-lg transition-all duration-300"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2">
          {/* Left Navigation Button */}
          <button
            onClick={scrollPrev}
            aria-label="Scroll left"
            className="text-white p-2 rounded-full transition-all duration-300 bg-stone-950 hover:bg-stone-950/40 backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollNext}
            aria-label="Scroll right"
            className="text-white p-2 rounded-full transition-all duration-300 bg-stone-950 hover:bg-stone-950/40 backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
