"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const ServicesAbout: React.FC = () => {
  const [clipPath, setClipPath] = useState<string>("none");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClipPath(
        window.innerWidth >= 1280
          ? "polygon(80px 0, 100% 0, 100% calc(100% - 80px), calc(100% - 80px) 100%, 0 100%, 0 80px)"
          : "none"
      );
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts
  return (
    <div
      className="flex flex-col w-full h-full p-6 lg:p-14 lg:px-20 bg-secondary/80 text-white relative"
      style={{
        fontFamily: "var(--font-forum)",
        clipPath: clipPath, // Use the state value for clipPath
      }}
    >
      <h2 className="mb-5 text-3xl font-semibold lg:text-6xl ml-6">
        Area&apos;s Of Services
      </h2>
      <ul className="list-disc list-inside lg:text-2xl space-y-2">
  <li><Link href="/historical-landmark">Historical Landmarks Design Restoration</Link></li>
  <li><Link href="/brownstone-restoration">Brownstone Restoration</Link></li>
  <li><Link href="/fire-escape-restoration">Fire Escape Restoration</Link></li>
  <li><Link href="/paving">Masonry Contracting</Link></li>
  <li><Link href="/brownstone-restoration">Brownstone Renovation Contractors</Link></li>
  <li><Link href="/brownstone-facade-restoration">Facade Restoration</Link></li>
  <li><Link href="/roof-restoration-and-weatherproofing">Roofing</Link></li>
  <li><Link href="/paving">Paving</Link></li>
  <li><Link href="/brick-pointing">Brick Pointing</Link></li>
</ul>
    </div>
  );
};

export default ServicesAbout;
