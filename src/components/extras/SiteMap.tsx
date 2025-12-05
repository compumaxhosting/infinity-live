// app/site-map/page.tsx

import Link from "next/link";
import { FaLink } from "react-icons/fa";

const SiteMap = () => {
  const links = [
    { name: "Home", url: "https://www.infinityconstructionnyc.com/" },
    { name: "About Us", url: "https://www.infinityconstructionnyc.com/about" },
    {
      name: "Historical Landmark Restoration",
      url: "https://www.infinityconstructionnyc.com/historical-landmark",
    },
    {
      name: "Stucco Services",
      url: "https://www.infinityconstructionnyc.com/stucco",
    },
    {
      name: "Brick & CMU Block Layering",
      url: "https://www.infinityconstructionnyc.com/brownstone-facade-restoration",
    },
    {
      name: "Roof Restoration & Weatherproofing",
      url: "https://www.infinityconstructionnyc.com/roof-restoration-and-weatherproofing",
    },
    {
      name: "Brick Pointing",
      url: "https://www.infinityconstructionnyc.com/brick-pointing",
    },
    {
      name: "Fire Escape Restoration",
      url: "https://www.infinityconstructionnyc.com/fire-escape-restoration",
    },
    {
      name: "Concrete, Stone, and Brick Paving",
      url: "https://www.infinityconstructionnyc.com/paving",
    },
    {
      name: "Painting & Masonry",
      url: "https://www.infinityconstructionnyc.com/painting-and-masonry",
    },
    {
      name: "Projects",
      url: "https://www.infinityconstructionnyc.com/projects",
    },
    { name: "Gallery", url: "https://www.infinityconstructionnyc.com/gallery" },
    { name: "Blog Home", url: "https://www.infinityconstructionnyc.com/blog" },
    { name: "FAQs", url: "https://www.infinityconstructionnyc.com/faq" },
    { name: "Contact Us", url: "https://www.infinityconstructionnyc.com/contact" },

    // Blog Posts
    {
      name: "Blog - Brownstone Repair NYC",
      url: "https://www.infinityconstructionnyc.com/blog/brownstone-repair-nyc",
    },
    {
      name: "Blog - Signs Your Brownstone Needs Immediate Repair",
      url: "https://www.infinityconstructionnyc.com/blog/signs-your-brownstone-needs-immediate-repair",
    },
    {
      name: "Blog - Why Infinity Construction NYC Is Brooklyn’s Renovation Expert",
      url: "https://www.infinityconstructionnyc.com/blog/why-infinity-construction-nyc-is-brooklyns-go-to-brownstone-renovation-expert",
    },
    {
      name: "Blog - Brownstone – The Inside Scoop",
      url: "https://www.infinityconstructionnyc.com/blog/brownstone-the-inside-scoop",
    },
    {
      name: "Blog - Brownstone Facade Repair Park Slope",
      url: "https://www.infinityconstructionnyc.com/blog/brownstone-facade-repair-park-slope",
    },
    {
      name: "Blog - Bring Back the Original Splendor of Your Brownstone",
      url: "https://www.infinityconstructionnyc.com/blog/how-to-bring-back-the-original-splendor-of-your-brownstone",
    },
    {
      name: "Blog - Why Choose Professional Brownstone Restoration",
      url: "https://www.infinityconstructionnyc.com/blog/why-choose-professional-brownstone-restoration-services",
    },
    {
      name: "Blog - Mini Split vs Central Air",
      url: "https://www.infinityconstructionnyc.com/blog/mini-split-vs-central-air",
    },
    {
      name: "Blog - How to Hand Scrape a Floor",
      url: "https://www.infinityconstructionnyc.com/blog/how-to-hand-scrape-a-floor",
    },
    {
      name: "Blog - How to Repair Crumbling Bricks",
      url: "https://www.infinityconstructionnyc.com/blog/how-to-repair-crumbling-bricks",
    },
    {
      name: "Blog - Veneer Masonry Construction Process",
      url: "https://www.infinityconstructionnyc.com/blog/veneer-masonry-construction-process",
    },
    {
      name: "Blog - Waterproof Caulking & Restoration",
      url: "https://www.infinityconstructionnyc.com/blog/waterproof-caulking-and-restoration",
    },
    {
      name: "Blog - Composite Masonry – Full Overview",
      url: "https://www.infinityconstructionnyc.com/blog/composite-masonry-comprehensive-overview",
    },
    {
      name: "Blog - Stone Masonry – Exclusive Guide",
      url: "https://www.infinityconstructionnyc.com/blog/stone-masonry-exclusive-guide",
    },
    {
      name: "Blog - How to Maintain and Repair Leaded Windows",
      url: "https://www.infinityconstructionnyc.com/blog/how-to-maintain-and-repair-leaded-windows",
    },
    {
      name: "Blog - Masonry Work Overview",
      url: "https://www.infinityconstructionnyc.com/blog/masonry-work",
    },
    {
      name: "Blog - How to Repair a Brownstone Stoop",
      url: "https://www.infinityconstructionnyc.com/blog/how-to-repair-a-brownstone-stoop",
    },
    {
      name: "Blog - What Are Brownstone Houses & Why Popular in NYC",
      url: "https://www.infinityconstructionnyc.com/blog/what-are-brownstone-houses-and-why-are-they-popular-in-nyc",
    },
    {
      name: "Blog - Concrete Mix Design Calculation",
      url: "https://www.infinityconstructionnyc.com/blog/concrete-mix-design-calculation",
    },
    {
      name: "Blog - Masonry Work – Exclusive Guide",
      url: "https://www.infinityconstructionnyc.com/blog/masonry-work-exclusive-guide",
    },
    {
      name: "Blog - Fire Escape Painting",
      url: "https://www.infinityconstructionnyc.com/blog/fire-escape-painting",
    },
    {
      name: "Blog - DIY Roof Repair",
      url: "https://www.infinityconstructionnyc.com/blog/diy-roof-repair",
    },
    {
      name: "Blog - Brick Pointing Guide",
      url: "https://www.infinityconstructionnyc.com/blog/brick-pointing",
    },
    {
      name: "Blog - How to Restore Brownstone Facade",
      url: "https://www.infinityconstructionnyc.com/blog/how-to-restore-brownstone-facade",
    },

    // Additional page
    {
      name: "Brownstone Restoration",
      url: "https://www.infinityconstructionnyc.com/brownstone-restoration",
    },
  ];

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
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
