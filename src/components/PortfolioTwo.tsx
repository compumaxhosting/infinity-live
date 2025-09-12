"use client";

import React, { useState } from "react";
import Image from "next/image";

const PortfolioTwo = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      src: "/portfolio/103-jefferson.mp4",
      alt: "Brownstone restoration NYC",
      title: "103 Jefferson ave brooklyn New York  complete stoop restoration",
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
      src: "/portfolio/310-west.mp4",
      alt: "Brownstone repair signs",
      title:
        "310 west 102nd street New York , New York Completed stoop restoration ",
      type: "",
      features: ["Visible Cracks", "Water Damage", "Facade Issues"],
      path: "/blog/signs-your-brownstone-needs-immediate-repair",
    },
    {
      id: 3,
      src: "/portfolio/379-street.mp4",
      alt: "Brownstone expert NYC",
      title: "379 16th street,Brooklyn, park slope",
      type: "",
      features: [
        "Trusted by Locals",
        "Skilled Craftsmanship",
        "Brownstone Specialist",
      ],
      path: "/blog/why-infinity-construction-nyc-is-brooklyns-go-to-brownstone-renovation-expert",
    },
  ];

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : (prev || 0) - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : (prev || 0) + 1
    );
  };

  // helper: check if src is video
  const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <section className="pt-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-40"></div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Works
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div
                className="relative h-72 w-full cursor-pointer"
                onClick={() => handleOpen(index)}
              >
                {isVideo(project.src) ? (
                  <video
                    src={project.src}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
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

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl z-50 hover:text-primary transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Close viewer"
          >
            &times;
          </button>

          <div className="relative w-3/4 h-3/4 md:w-1/2 md:h-1/2 max-w-6xl max-h-[90vh] flex items-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 md:-left-12 text-white text-4xl z-50 hover:text-primary transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Previous"
            >
              &larr;
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo(projects[currentIndex].src) ? (
                <video
                  src={projects[currentIndex].src}
                  className="object-contain w-full h-full"
                  controls
                  autoPlay
                />
              ) : (
                <Image
                  src={projects[currentIndex].src}
                  alt={projects[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              )}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-12 text-white text-4xl z-50 hover:text-primary transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Next"
            >
              &rarr;
            </button>
          </div>

          <div className="absolute bottom-56 lg:bottom-24 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium bg-black/50 rounded-lg inline-block px-4 py-2">
              {projects[currentIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioTwo;
