"use client"

import { ReceiptText } from "lucide-react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("react-scroll").then((mod) => mod.Link), {
  ssr: false,
});

const ContactScroll = () => {
  return (
    <Link href="" to="contact-us" smooth={true} duration={1000}>
      <button
        style={{ fontFamily: "var(--font-forum)" }}
        className="fixed z-10 bottom-12 lg:bottom-6 left-6 bg-primary text-white p-3 px-3 sm:px-8 md:px-10 rounded-full shadow-lg flex items-center space-x-2 hover:bg-stone-900 transition-all duration-300"
      >
        <ReceiptText className="w-4 h-4" />
        <span className="inline text-md md:text-xl">Get a Quote</span>
      </button>
    </Link>
  );
};

export default ContactScroll;
