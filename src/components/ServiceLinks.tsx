"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  {
    name: "Brownstone Restoration",
    href: "/brownstone-restoration",
  },
  {
    name: "Brownstone Renovation Brooklyn",
    href: "/brownstone-renovation-brooklyn-ny-brownstone-repair-contractors",
  },
  {
    name: "Manhattan Brownstone Restoration",
    href: "/manhattan-brownstone-restoration",
  },
];

export default function ServiceLinks() {
  const pathname = usePathname();

  return (
    <div className="overflow-x-auto scrollbar-hide py-2">
      <div className="flex w-max gap-3">
        {serviceLinks.map((service) => {
          const isActive = pathname === service.href;

          return (
            <Link
              key={service.href}
              href={service.href}
              className={`whitespace-nowrap rounded-full border px-4 py-2 transition ${
                isActive
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-orange-50 text-orange-600 border-orange-300 hover:bg-orange-100 hover:text-orange-700"
              }`}
            >
              {service.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
