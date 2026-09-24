"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locations = [
  {
    name: "Brooklyn",
    href: "/construction-restoration-brooklyn",
  },
  {
    name: "Manhattan",
    href: "/construction-restoration-manhattan",
  },
  {
    name: "Queens",
    href: "/construction-restoration-queens",
  },
  {
    name: "The Bronx",
    href: "/construction-restoration-bronx",
  },
];

const ConstructionRestorationNav = () => {
  const pathname = usePathname();

  return (
    <section
      className="py-2 sm:py-1"
      aria-labelledby="brownstone-restoration-location-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto w-fit border border-primary bg-white/95 px-8 py-4 shadow-sm sm:px-6">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <h2
              id="brownstone-restoration-location-heading"
              className="whitespace-nowrap text-center text-lg font-semibold tracking-wide text-gray-700 sm:text-left sm:text-xl"
            >
              Select a Location
            </h2>

            <nav
              aria-label="Brownstone restoration locations"
              className="grid w-full grid-cols-2 items-center justify-center gap-2 sm:flex sm:w-auto sm:flex-wrap"
            >
              {locations.map((location) => {
                const isActive = pathname === location.href;

                return (
                  <Link
                    key={location.href}
                    href={location.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex min-h-10 w-full items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto sm:px-4 ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-sm"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-primary hover:bg-white hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-primary"
                    }`}
                  >
                    {location.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionRestorationNav;