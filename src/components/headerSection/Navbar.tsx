"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { specialityData } from "@/data/ourServicesData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Update scrolled state based on scroll position
  const updateScrolledState = () => {
    setScrolled(window.scrollY > 20);
  };

  // Initialize and listen to scroll event
  useEffect(() => {
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState);
    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  return (
    <div className="hidden xl:flex gap-6 justify-center items-center">
      <nav>
        <ul
          className={`flex items-center space-x-6 font-medium ${
            scrolled
              ? "text-secondary dark:text-white"
              : "text-white dark:text-gray-100"
          }`}
          style={{ fontFamily: "var(--font-forum)" }}
        >
          <li className="text-xl font-bold transition-all duration-300 bg-primary dark:bg-primary p-2 px-4 text-white">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-xl hover:text-orange-500">
            <Link href="/about">ABOUT</Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative z-10 group">
            <div className="text-xl hover:text-orange-500 cursor-pointer">
              SERVICES
            </div>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg w-[300px] pt-2">
              {specialityData.map((service) => (
                <li
                  key={service.heading}
                  className="cursor-pointer text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2"
                >
                  <Link href={service.path}>{service.heading}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="text-xl hover:text-orange-500">
            <Link href="/projects">PROJECTS</Link>
          </li>

          <li className="text-xl hover:text-orange-500">
            <Link href="/contact">CONTACT</Link>
          </li>

          {/* More Dropdown */}
          <li className="relative z-10 group">
            <div className="text-xl hover:text-orange-500 cursor-pointer">
              MORE
            </div>
            <ul className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-gray-800 rounded shadow-lg">
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/blog">BLOG</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="text-secondary dark:text-gray-100 text-xl hover:text-orange-500 px-4 py-2">
                {" "}
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <Link
        href="tel:+13479395779"
        className="bg-primary text-white px-4 py-3 hover:bg-stone-900 hover:text-white dark:hover:text-white hover:border-transparent hover:border border border-transparent dark:border-transparent rounded-md shadow-lg transition-all duration-300 flex items-center space-x-2"
      >
        <Phone className="w-5 h-5" />
        <span>347 939 5779</span>
      </Link>
    </div>
  );
};

export default Navbar;
