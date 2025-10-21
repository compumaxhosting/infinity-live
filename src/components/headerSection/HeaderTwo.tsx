"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../extras/ModeToggle";
import SidebarMenu from "./SidebarMenu";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const updateScrolledState = () => {
    setScrolled(window.scrollY > 20);
  };

  useEffect(() => {
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState);
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-colors duration-300 z-30 ${
        scrolled ? "bg-white dark:bg-slate-950 shadow-lg" : "bg-transparent"
      }`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" aria-label="Infinity Construction NYC Home">
            <Image
              src="/infinity_logo_new.png"
              alt="Infinity Construction NYC Logo"
              width={120}
              height={40}
              priority
              className="w-20 xs:w-24 sm:w-28 2xl:w-32 cursor-pointer"
            />
          </Link>

          {/* Company name & slogan */}
          <div className="flex flex-col justify-center truncate min-w-0">
            <p
              className={`text-sm xs:text-base sm:text-xl font-semibold leading-tight truncate ${
                scrolled ? "text-stone-950 dark:text-white" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-forum)" }}
              itemProp="name"
            >
              Infinity Construction NYC
            </p>
            <p
              className={`text-xs xs:text-sm sm:text-lg leading-tight truncate ${
                scrolled ? "text-stone-900 dark:text-gray-300" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-forum)" }}
              itemProp="slogan"
            >
              Quality is our Specialty
            </p>
          </div>
        </div>

        {/* Right: Desktop Navbar / Mobile Menu / Phone / Theme Toggle */}
        <div className="flex items-center gap-2 xs:gap-3 mt-2 xs:mt-0">
          {/* Desktop Navbar */}
          <nav className="hidden xl:block">
            <Navbar />
          </nav>

          

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden">
            <SidebarMenu aria-label="Mobile menu" />
          </div>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
