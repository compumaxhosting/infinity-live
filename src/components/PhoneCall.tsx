import React from "react";
import { Phone } from "lucide-react"; // You can replace this with any icon library you use
import Link from "next/link";

const PhoneCall: React.FC = () => {
  return (
    <Link
      href="tel:+13479395779" 
      className="fixed bottom-12 md:bottom-6 right-4 z-50 bg-primary hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
      aria-label="Call us"
    >
      <Phone size={23} />
    </Link>
  );
};

export default PhoneCall;
