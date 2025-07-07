"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ModeToggle } from "../extras/ModeToggle";
import SidebarMenu from "./SidebarMenu";
import NavbarSpecial from "./NavbarSpecial";

const HeaderSpecial: React.FC = () => {
  return (
    <header className="fixed inset-x-0 z-30 w-full bg-white shadow-lg transition-colors duration-300 dark:border dark:border-gray-800 dark:bg-slate-950">
      {/* Mobile = column;  ≥ sm = row */}
      <div className="container mx-auto flex flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        {/* ─── Logo + Brand ──────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Link href="/" aria-label="Infinity Construction NYC – home">
            <Image
              src="/infinity logo.png"
              alt="Infinity Construction NYC Logo"
              width={60}
              height={60}
              loading="lazy"
              className="h-auto w-16 cursor-pointer sm:w-20"
            />
          </Link>

          {/* Brand name & tagline */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className="text-sm md:text-lg text-md font-semibold text-tertiary dark:text-white sm:text-2xl"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC
            </span>
            <span
              className="text-xs md:text-sm text-gray-700 dark:text-gray-300 sm:text-base"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Quality is our Specialty
            </span>
          </Link>
        </div>

        {/* ─── Phone button (mobile only, now under logo) ───────────────── */}
        {/* ─── Phone button (mobile only, centered) ─── */}
        <div className="flex justify-center sm:hidden">
          <Link
            href="tel:+13479395779"
            className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-white hover:bg-orange-600"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">347&nbsp;939&nbsp;5779</span>
          </Link>
        </div>

        {/* ─── Desktop nav + actions ────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Full navbar (desktop) */}
          <div className="hidden lg:block">
            <NavbarSpecial />
          </div>

          {/* Burger menu (tablet & down) */}
          <div className="xl:hidden align-middle">
            <SidebarMenu />
          </div>

          {/* Dark‑mode toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default HeaderSpecial;
