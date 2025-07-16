"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

const PhoneNumber: React.FC = () => {
  return (
    <div className="mb-10 text-center sm:text-left">
      <p className="text-lg text-stone-700 dark:text-gray-300">
        Or speak to us directly
      </p>
      <Link
        href="tel:3479395779"
        className="mt-2 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
      >
        <Phone className="w-5 h-5" />
        <span className="tracking-wide text-base">(347) 939-5779</span>
      </Link>
    </div>
  );
};

export default PhoneNumber;
