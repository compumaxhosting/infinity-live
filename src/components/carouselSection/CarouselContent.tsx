import Link from "next/link";
import React from "react";

interface CarouselContentProps {
  title: string;
  subtitle: string;
}

const CarouselContent: React.FC<CarouselContentProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="text-white py-6 text-center flex flex-col justify-center items-center min-h-[400px]">
        {/* Dynamic Text */}
        <p
          className="hidden sm:block text-2xl md:text-4xl lg:text-5xl md:pb-2"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          {title}
        </p>
        <h2
          className="text-3xl md:text-2xl lg:text-4xl leading-snug"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          {subtitle}
        </h2>

        {/* Buttons Section */}
        <div className="mt-6 flex gap-4 flex-col sm:flex-row">
          <Link
            href="/contact"
            className="bg-primary border-2 border-primary text-lg md:text-2xl text-white py-1 px-2 md:py-3 md:px-4 rounded-full hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 w-[130px] md:w-[200px]"
          >
            Contact Us
          </Link>

          <Link
            href="/gallery"
            className="hidden md:block bg-transparent border-2 border-white text-xl md:text-2xl text-white py-1 px-2 md:py-3 md:px-4 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 w-[200px]"
            style={{ textShadow: "0px 0px 10px black" }}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
