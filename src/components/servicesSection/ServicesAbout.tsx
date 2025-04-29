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
        <Link href="/historical-landmark"><li>Historical Landmarks Design Restoration</li></Link>
        <Link href="/brownstone-restoration"><li>Brownstone Restoration</li></Link>
        <Link href="/fire-escape-restoration"><li>Fire Escape Restoration</li></Link>
        <Link href="/paving"><li>Masonry Contracting</li></Link>
        <Link href="/brownstone-restoration"><li>Brownstone Renovation Contractors</li></Link>
        <Link href="/brownstone-facade-restoration"><li>Facade Restoration</li></Link>
        <Link href="/roof-restoration-and-weatherproofing"><li>Roofing</li></Link>
        <Link href="/paving"><li>Paving</li></Link>
        <Link href="/brick-pointing"><li>Brick Pointing</li></Link>
      </ul>
    </div>
  );
};

export default ServicesAbout;
