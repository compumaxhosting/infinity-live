"use client";

import { ReceiptText } from "lucide-react";

const ContactScroll = () => {
  const handleScroll = () => {
    document.getElementById("contact-us")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleScroll}
      style={{ fontFamily: "var(--font-forum)" }}
      className="fixed z-10 bottom-12 lg:bottom-6 left-6 bg-primary text-white p-3 px-3 sm:px-8 md:px-10 rounded-full shadow-lg flex items-center space-x-2 hover:bg-stone-900 transition-all duration-300"
    >
      <ReceiptText className="w-4 h-4" />
      <span className="inline text-md md:text-xl">Get a Quote</span>
    </button>
  );
};

export default ContactScroll;
