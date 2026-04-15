// app/site-map/page.tsx

import Link from "next/link";
import { FaLink } from "react-icons/fa";

const SiteMap = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    {
      name: "Historical Landmark Restoration",
      url: "/historical-landmark",
    },
    {
      name: "Stucco Services",
      url: "/stucco",
    },
    {
      name: "Brick & CMU Block Layering",
      url: "/brownstone-facade-restoration",
    },
    {
      name: "Roof Restoration & Weatherproofing",
      url: "/roof-restoration-and-weatherproofing",
    },
    {
      name: "Brick Pointing",
      url: "/brick-pointing",
    },
    {
      name: "Fire Escape Restoration",
      url: "/fire-escape-restoration",
    },
    {
      name: "Concrete, Stone, and Brick Paving",
      url: "/paving",
    },
    {
      name: "Painting & Masonry",
      url: "/painting-and-masonry",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    { name: "Gallery", url: "/gallery" },
    { name: "Blog Home", url: "/blog" },
    { name: "FAQs", url: "/faq" },
    {
      name: "Contact Us",
      url: "/contact",
    },

    // Blog Posts
    {
      name: "Blog - Brownstone Repair NYC",
      url: "/blog/brownstone-repair-nyc",
    },
    {
      name: "Blog - Signs Your Brownstone Needs Immediate Repair",
      url: "/blog/signs-your-brownstone-needs-immediate-repair",
    },
    {
      name: "Blog - Why Infinity Construction NYC Is Brooklyn’s Renovation Expert",
      url: "/blog/why-infinity-construction-nyc-is-brooklyns-go-to-brownstone-renovation-expert",
    },
    {
      name: "Blog - Brownstone – The Inside Scoop",
      url: "/blog/brownstone-the-inside-scoop",
    },
    {
      name: "Blog - Brownstone Facade Repair Park Slope",
      url: "/blog/brownstone-facade-repair-park-slope",
    },
    {
      name: "Blog - Bring Back the Original Splendor of Your Brownstone",
      url: "/blog/how-to-bring-back-the-original-splendor-of-your-brownstone",
    },
    {
      name: "Blog - Why Choose Professional Brownstone Restoration",
      url: "/blog/why-choose-professional-brownstone-restoration-services",
    },
    {
      name: "Blog - Mini Split vs Central Air",
      url: "/blog/mini-split-vs-central-air",
    },
    {
      name: "Blog - How to Hand Scrape a Floor",
      url: "/blog/how-to-hand-scrape-a-floor",
    },
    {
      name: "Blog - How to Repair Crumbling Bricks",
      url: "/blog/how-to-repair-crumbling-bricks",
    },
    {
      name: "Blog - Veneer Masonry Construction Process",
      url: "/blog/veneer-masonry-construction-process",
    },
    {
      name: "Blog - Waterproof Caulking & Restoration",
      url: "/blog/waterproof-caulking-and-restoration",
    },
    {
      name: "Blog - Composite Masonry – Full Overview",
      url: "/blog/composite-masonry-comprehensive-overview",
    },
    {
      name: "Blog - Stone Masonry – Exclusive Guide",
      url: "/blog/stone-masonry-exclusive-guide",
    },
    {
      name: "Blog - How to Maintain and Repair Leaded Windows",
      url: "/blog/how-to-maintain-and-repair-leaded-windows",
    },
    {
      name: "Blog - Masonry Work Overview",
      url: "/blog/masonry-work",
    },
    {
      name: "Blog - How to Repair a Brownstone Stoop",
      url: "/blog/how-to-repair-a-brownstone-stoop",
    },
    {
      name: "Blog - What Are Brownstone Houses & Why Popular in NYC",
      url: "/blog/what-are-brownstone-houses-and-why-are-they-popular-in-nyc",
    },
    {
      name: "Blog - Concrete Mix Design Calculation",
      url: "/blog/concrete-mix-design-calculation",
    },
    {
      name: "Blog - Masonry Work – Exclusive Guide",
      url: "/blog/masonry-work-exclusive-guide",
    },
    {
      name: "Blog - Fire Escape Painting",
      url: "/blog/fire-escape-painting",
    },
    {
      name: "Blog - DIY Roof Repair",
      url: "/blog/diy-roof-repair",
    },
    {
      name: "Blog - Brick Pointing Guide",
      url: "/blog/brick-pointing",
    },
    {
      name: "Blog - How to Restore Brownstone Facade",
      url: "/blog/how-to-restore-brownstone-facade",
    },
    {
      name: "Blog - Common Problems with Brownstones in NYC",
      url: "/blog/nyc-brownstone-issues-and-repairs",
    },
    {
      name: "Blog - Brownstone Facade Restoration in NYC",
      url: "/blog/nyc-brownstone-facade-repair",
    },
    {
      name: "Blog - What to Expect During a Brownstone Stoop Restoration",
      url: "/blog/brownstone-stoop-restoration-project-guide",
    },
    {
      name: "Blog - Benefits of Using CMU Blocks for Residential & Commercial Buildings",
      url: "/blog/benefits-of-using-cmu-blocks-for-residential-and-commercial-buildings",
    },
    {
      name: "Blog - Sustainable Upgrades for Historic Brownstone Properties in NYC",
      url: "/blog/sustainable-upgrades-historic-brownstones-nyc",
    },

    // Additional page
    {
      name: "Brownstone Restoration",
      url: "/brownstone-restoration",
    },
    {
      name: "Blog - The Ultimate Guide: How to Maintain Your Brownstone Building",
      url: "/blog/maintaining-historical-landmark-brownstones",
    },
    {
      name: "Blog - Why Brick Pointing and Waterproofing Are Essential ",
      url: "/blog/brick-pointing-waterproofing-nyc-homes",
    },
  ];

  return (
    <div className="max-w-[900px] mx-auto px-6 pt-32 md:pt-12 pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
        Sitemap
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">
        Pages
      </h2>

      <ul className="space-y-4">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className="text-gray-800 hover:underline flex items-center text-lg"
            >
              <FaLink className="mr-3 text-gray-800" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiteMap;
