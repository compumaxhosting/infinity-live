"use client";

import React, { useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const projects = [
    {
      id: 1,
      src: "/blog/img-14.webp",
      alt: "Brownstone restoration NYC",
      title: "Brownstone Restoration Services in NYC – 15% Off",
      type: "",
      features: [
        "Brooklyn, Manhattan, Queens",
        "Expert Restoration",
        "Limited-Time Discount",
      ],
      path: "/blog/brownstone-repair-nyc",
    },
    {
      id: 2,
      src: "/blog/img-24.jpg",
      alt: "Brownstone repair signs",
      title: "Signs Your Brownstone Needs Immediate Repair",
      type: "",
      features: ["Visible Cracks", "Water Damage", "Facade Issues"],
      path: "/blog/signs-your-brownstone-needs-immediate-repair",
    },
    {
      id: 3,
      src: "/blog/img-19.webp",
      alt: "Brownstone expert NYC",
      title: "Why Infinity Construction NYC Is Brooklyn's Go-To",
      type: "",
      features: [
        "Trusted by Locals",
        "Skilled Craftsmanship",
        "Brownstone Specialist",
      ],
      path: "/blog/why-infinity-construction-nyc-is-brooklyns-go-to-brownstone-renovation-expert",
    },
    {
      id: 4,
      src: "/blog/img-8.jpg",
      alt: "Brownstone interior insight",
      title: 'Brownstone "The Inside Scoop"',
      type: "",
      features: ["Historical Perspective", "Modern Touch", "Design Ideas"],
      path: "/blog/brownstone-the-inside-scoop",
    },
    {
      id: 5,
      src: "/blog/img-11.jpg",
      alt: "Brownstone facade Park Slope",
      title: "Brownstone Facade Repair in Park Slope",
      type: "",
      features: ["Historic Area", "Restoration Tips", "Professional Guide"],
      path: "/blog/brownstone-facade-repair-park-slope",
    },
    {
      id: 6,
      src: "/portfolio/image-1.jpg",
      alt: "Brownstone original splendor",
      title: "Bring Back the Original Splendor of Your Brownstone",
      type: "",
      features: ["Restoration Guide", "Architectural Revival", "Expert Advice"],
      path: "/blog/how-to-bring-back-the-original-splendor-of-your-brownstone",
    },
  ];

  const handleOpenImage = (index: number) => {
    setCurrentImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setCurrentImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? projects.length - 1 : (prev || 0) - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === projects.length - 1 ? 0 : (prev || 0) + 1
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-40"></div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            BROWNSTONE RESTORATION SPECIALIST -{" "}
            <span className="text-primary">LICENSED & INSURED</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div
                className="relative h-72 w-full cursor-pointer"
                onClick={() => handleOpenImage(index)}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center p-6 pointer-events-none">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:hidden">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:hidden">
                  {project.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-3xl z-50 hover:text-primary transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Close image viewer"
          >
            &times;
          </button>

          <div className="relative w-3/4 h-3/4 md:w-1/2 md:h-1/2 max-w-6xl max-h-[90vh] flex items-center">
            <button
              onClick={goToPrev}
              className="absolute left-0 md:-left-12 text-white text-4xl z-50 hover:text-primary transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Previous image"
            >
              &larr;
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects[currentImageIndex].src}
                alt={projects[currentImageIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={goToNext}
              className="absolute right-0 md:-right-12 text-white text-4xl z-50 hover:text-primary transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Next image"
            >
              &rarr;
            </button>
          </div>

          <div className="absolute bottom-56 lg:bottom-24 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium bg-black/50 rounded-lg inline-block px-4 py-2">
              {projects[currentImageIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
