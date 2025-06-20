"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import CarouselContent from "./CarouselContent";
import { slides } from "@/data/bannerSlidesData";

// Define proper type for slides
interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CarouselSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setTotalSlides(emblaApi.scrollSnapList().length);
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Featured projects gallery"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {(slides as Slide[]).map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] w-full h-[440px] sm:h-screen overflow-hidden"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <motion.div
                className="relative flex-[0_0_100%] w-full h-screen overflow-hidden"
                initial={{ scale: 1.6 }}
                animate={{ scale: selectedIndex === index ? 1.03 : 1.6 }}
                transition={{ duration: 2.5, ease: "backInOut" }}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.title} - Infinity Construction NYC`}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <div className="absolute bg-black/40 sm:bg-black/30 z-10 h-full w-full"></div>
              </motion.div>
              <CarouselContent  />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-5 left-5 text-white text-sm sm:text-2xl backdrop-blur-md px-4 sm:px-6 py-2 rounded-full"
        style={{ fontFamily: "var(--font-forum)" }}
        aria-live="polite"
        aria-atomic="true"
      >
        {`${selectedIndex + 1} of ${totalSlides}`}
      </div>

      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous project image"
        className="absolute z-20 bottom-5 right-1/2 -translate-x-2 sm:bottom-auto sm:right-auto sm:left-4 sm:top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/40 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft
          className="w-8 h-8 sm:h-14"
          aria-hidden="true"
          focusable="false"
        />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next project image"
        className="absolute z-20 bottom-5 left-1/2 translate-x-2 sm:bottom-auto sm:left-auto sm:right-4 sm:top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/40 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight
          className="w-8 h-8 sm:h-14"
          aria-hidden="true"
          focusable="false"
        />
      </button>
    </section>
  );
};

export default CarouselSection;
