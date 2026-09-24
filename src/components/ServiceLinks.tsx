"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
const serviceLinks = [
  { name: "Historical Landmark", href: "/historical-landmark" },
  { name: "Stucco", href: "/stucco" },
  {
    name: "Brownstone Facade Restoration",
    href: "/brownstone-facade-restoration",
  },
  {
    name: "Roof Restoration & Weatherproofing",
    href: "/roof-restoration-and-weatherproofing",
  },
  { name: "Brick Pointing", href: "/brick-pointing" },
  { name: "Fire Escape Restoration", href: "/fire-escape-restoration" },
  { name: "Paving", href: "/paving" },
  { name: "Painting & Masonry", href: "/painting-and-masonry" },
  { name: "Brownstone Restoration", href: "/brownstone-restoration" },
  {
    name: "Brownstone Renovation Brooklyn",
    href: "/brownstone-renovation-brooklyn-ny-brownstone-repair-contractors",
  },
  {
    name: "Manhattan Brownstone Restoration",
    href: "/manhattan-brownstone-restoration",
  },
  {
    name: "Masonry Contractors",
    href: "/masonry-contractors",
  },
];
export default function ServiceLinks() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="relative flex items-start gap-2 py-2">
      {" "}
      {/* Left Button */}{" "}
      <button
        type="button"
        onClick={scrollLeft}
        aria-label="Scroll service links left"
        className="hidden md:flex shrink-0 items-center justify-center w-9 h-9 rounded-full border border-orange-300 bg-orange-50 text-orange-600 transition hover:bg-orange-100 hover:text-orange-700"
      >
        {" "}
        <ChevronLeft className="w-5 h-5" />{" "}
      </button>{" "}
      {/* Service Links */}{" "}
      <div ref={scrollRef} className="flex-1 overflow-x-auto scrollbar-hide">
        {" "}
        <div className="flex w-max gap-3">
          {" "}
          {serviceLinks.map((service) => {
            const isActive = pathname === service.href;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`whitespace-nowrap rounded-full border px-4 py-2 transition ${isActive ? "bg-orange-600 text-white border-orange-600" : "bg-orange-50 text-orange-600 border-orange-300 hover:bg-orange-100 hover:text-orange-700"}`}
              >
                {" "}
                {service.name}{" "}
              </Link>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
      {/* Right Button */}{" "}
      <button
        type="button"
        onClick={scrollRight}
        aria-label="Scroll service links right"
        className="hidden md:flex shrink-0 items-center justify-center w-9 h-9 rounded-full border border-orange-300 bg-orange-50 text-orange-600 transition hover:bg-orange-100 hover:text-orange-700"
      >
        {" "}
        <ChevronRight className="w-5 h-5" />{" "}
      </button>{" "}
    </div>
  );
}
