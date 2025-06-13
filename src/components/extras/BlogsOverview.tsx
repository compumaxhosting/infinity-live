"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function BlogsOverview() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const plans = [
    {
      name: "Brownstone Facade Repair Park Slope",
      path: "/blog/brownstone-facade-repair-park-slope",
    },
    {
      name: "How To Bring Back The Original Splendor Of Your Brownstone",
      path: "/blog/how-to-bring-back-the-original-splendor-of-your-brownstone",
    },
    {
      name: "Why Choose Professional Brownstone Restoration Services",
      path: "/blog/why-choose-professional-brownstone-restoration-services",
    },
    {
      name: "Mini Split vs Central Air: Choosing the Right Cooling Solution for Your Home",
      path: "/blog/mini-split-vs-central-air",
    },
    {
      name: "How to Hand Scrape a Floor",
      path: "/blog/how-to-hand-scrape-a-floor",
    },
    {
      name: "How to Repair Crumbling Bricks",
      path: "/blog/how-to-repair-crumbling-bricks",
    },
    {
      name: "Veneer Masonry Construction Process - Expert's Guide",
      path: "/blog/veneer-masonry-construction-process",
    },
    {
      name: "Waterproof Caulking and Restoration: Enhancing Structural Integrity and Aesthetic Appeal",
      path: "/blog/waterproof-caulking-and-restoration",
    },
    {
      name: "Composite Masonry: A Comprehensive Overview",
      path: "/blog/composite-masonry-comprehensive-overview",
    },

    {
      name: "Stone Masonry- Exclusive Guide",
      path: "/blog/stone-masonry-exclusive-guide",
    },
    {
      name: "How to Maintain and Repair Leaded Windows",
      path: "/blog/how-to-maintain-and-repair-leaded-windows",
    },
    {
      name: "Masonry Work: Types, Advantages, Challenges and Safety Tips",
      path: "/blog/masonry-work",
    },
    {
      name: "How to Repair a Brownstone Stoop - Expert&apos;s Guide!",
      path: "/blog/how-to-repair-a-brownstone-stoop",
    },
    {
      name: "What are Brownstone Houses and Why are They Popular in NYC",
      path: "/blog/what-are-brownstone-houses-and-why-are-they-popular-in-nyc",
    },
    {
      name: "Concrete Mix Design Calculation - Must Following Steps",
      path: "/blog/concrete-mix-design-calculation",
    },
    {
      name: "Masonry Work - An Exclusive Guide!",
      path: "/blog/masonry-work-exclusive-guide",
    },
    {
      name: "Fire Escape Painting - Ensure Your Safety",
      path: "/blog/fire-escape-painting",
    },
    {
      name: "DIY Roof Repair: A Comprehensive Guide",
      path: "/blog/diy-roof-repair",
    },
    {
      name: "Brick Pointing - An Extensive Guide",
      path: "/blog/brick-pointing",
    },
    {
      name: "How to Restore Brownstone Facade",
      path: "/blog/how-to-restore-brownstone-facade",
    },
    {
      name: 'Brownstone "The inside scoop"',
      path: "/blog/brownstone-the-inside-scoop",
    },
    {
      name: "Why Infinity Construction NYC Is Brooklyn’s Go-To Brownstone Renovation Expert",
      path: "/blog/why-infinity-construction-nyc-is-brooklyns-go-to-brownstone-renovation-expert",
    },
    {
      name: "Signs Your Brownstone Needs Immediate Repair",
      path: "/blog/signs-your-brownstone-needs-immediate-repair",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const buttonTopPosition = isMounted
    ? pathname === "/"
      ? "top-[155px]"
      : "top-[265px]"
    : "top-[155px]";

  if (!isMounted) return null;

  return (
    <>
      {!isOpen && (
        <button
          className={`fixed right-0 ${buttonTopPosition} mt-[65px] md:mt-0 md:top-[85px] lg:top-[120px] z-40 btn_hotline`}
          onClick={() => setIsOpen(true)}
        >
          <div className="pl-5 pr-2 py-3 bg-primary/80 border-gray-400 shadow-lg lg:shadow-xl hover:bg-primary text-white uppercase font-semibold rounded-l-3xl">
            SELECT BLOG
          </div>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed z-20 inset-0 bg-black/80 cursor-pointer"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed w-[100vw] z-50 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            >
              <div className="relative bg-white mt-40 border border-gray-200 rounded-xl w-full max-w-3xl shadow-2xl px-8 py-10 transition-all duration-300 ease-in-out">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-800" />
                </button>

                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 md:mb-8">
                  SELECT BLOG
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-h-[350px] overflow-y-auto pr-2">
                  {plans.map((plan, index) => (
                    <Link key={index} href={plan.path}>
                      <div
                        className="group p-1 min-h-[100px] flex items-center justify-center text-center rounded-lg bg-gray-300 hover:bg-primary shadow-sm hover:shadow-md transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-white leading-snug">
                          {plan.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
