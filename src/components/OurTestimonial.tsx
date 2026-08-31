"use client";

import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function OurTestimonial() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = testimonialRef.current;

    if (!section) {
      return;
    }

    const scriptId = "elfsight-platform-script";

    const loadElfsight = () => {
      // Avoid loading Elfsight more than once
      if (document.getElementById(scriptId)) {
        return;
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;

      document.body.appendChild(script);
    };

    // Load Elfsight shortly before the testimonial section
    // enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadElfsight();
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="pt-8 pb-4 px-4 sm:px-6 bg-[#f9f9f9] mb-10 md:mb-15 shadow-xl"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2
            id="testimonial-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003269] font-inter"
          >
            <span className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-px bg-primary" />

              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary uppercase font-inter">
                Testimonials
              </span>

              <span className="w-6 h-px bg-primary" />
            </span>

            Our Clients Reviews
          </h2>
        </motion.div>

        <div
          ref={testimonialRef}
          className="mt-8 min-h-[420px]"
          aria-label="Google Reviews"
        >
          <div
            className="elfsight-app-abd730e7-d6ab-4d2b-b118-36d16685decc"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}

export default memo(OurTestimonial);