"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ModeToggle } from "../extras/ModeToggle";
import SidebarMenu from "./SidebarMenu";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Update scrolled state based on scroll position
  const updateScrolledState = () => {
    // Only update scroll state for screens larger than 'sm'
    if (window.matchMedia("(min-width: 640px)").matches) {
      setScrolled(window.scrollY > 20);
    } else {
      setScrolled(false); // Reset state for smaller screens
    }
  };

  // Initialize and listen to scroll event
  useEffect(() => {
    // Set the initial state based on the current scroll position
    updateScrolledState();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrolledState);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  return (
    <header
      className={`absolute sm:fixed z-10 sm:z-30 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-950 shadow-lg"
          : "bg-transparent dark:bg-transparent"
      }`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto flex justify-center sm:justify-between items-center p-1 pt-8 md:pt-2 pb-4 md:pb-2 xl:pb-0 xl:pt-0">
        {/* Logo and Business Name with Schema Markup */}
        <div className="flex flex-col sm:flex-row py-12 sm:py-0 justify-center items-center gap-6">
          <div itemProp="logo">
            <Link href="/" aria-label="Infinity Construction NYC Home">
              <Image
                src="/infinity_logo_new.png"
                alt="Infinity Construction NYC Logo"
                width={120}
                height={40}
                priority // Important for LCP (Largest Contentful Paint)
                className="cursor-pointer w-24 2xl:w-32"
              />
            </Link>
          </div>
          <Link href="/" className="text-center">
            <div
              className={`flex flex-col justify-center items-center ${
                scrolled ? "text-stone-950 dark:text-white" : "text-white"
              }`}
            >
              <h1
                className="text-2xl font-semibold leading-tight"
                style={{ fontFamily: "var(--font-forum)" }}
                itemProp="name"
              >
                Infinity Construction NYC
              </h1>
              <p
                className="text-lg leading-tight"
                style={{ fontFamily: "var(--font-forum)" }}
                itemProp="slogan"
              >
                Quality is our Specialty
              </p>
            </div>
          </Link>
          {/* Phone Link with Schema Markup */}
          <div
            className="flex sm:hidden"
            itemProp="telephone"
            content="+13479395779"
          >
            <Link
              href="tel:+13479395779"
              className="bg-primary text-white px-4 py-3 hover:bg-orange-600 transition-all duration-300 flex items-center space-x-2"
              aria-label="Call Infinity Construction NYC"
            >
              <Phone className="w-5 h-5" />
              <span>347 939 5779</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden xl:block" aria-label="Main navigation">
          <Navbar />
        </nav>

        {/* Mobile Menu */}
        <div className="flex xl:hidden">
          <SidebarMenu aria-label="Mobile menu" />
        </div>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
