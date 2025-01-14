import Image from "next/image";
import React from "react";

const expertiseData = [
  {
    id: 1,
    title: "Commercial",
    description:
      "Customized professional services to meet your needs. From initial planning to final execution, we offer tailored solutions to help you bring your commercial vision to life.",
    image: "/services-img-1.jpg", // Replace with the actual image path
  },
  {
    id: 2,
    title: "Residential",
    description:
      "We provide expert guidance to help every step of the way. From planning your perfect home to the final construction, we deliver exceptional results and unmatched quality.",
    image: "/services-img-4.jpeg", // Replace with the actual image path
  },
];

const AreasOfExpertise = () => {
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        {/* Section Heading */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
          Areas of Expertise
        </h2>

        {/* Expertise Section */}
        <div className="md:space-y-16 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasOfExpertise;
