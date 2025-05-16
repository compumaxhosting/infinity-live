"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Contact bar"
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#fb823a] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {/* Phone */}
    <Link
      href="tel:3479395779"
      aria-label="Call Infinity Construction"
      className="flex flex-col items-center justify-center py-2 hover:bg-[#fb823a] transition-colors font-inter"
    >
      <Phone size={18} />
      <span className="text-xs font-semibold mt-1">Phone</span>
    </Link>

    {/* Location */}
    <Link
      href="https://maps.google.com/?cid=6135882278024640728&entry=gps&g_st=aw"
      aria-label="View Infinity Construction location on Google Maps"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center py-2 hover:bg-[#fb823a] transition-colors font-inter"
    >
      <MapPin size={18} />
      <span className="text-xs font-semibold mt-1">Location</span>
    </Link>

    {/* Email */}
    <Link
      href="mailto:Infinityconstructionnyc@gmail.com?subject=Inquiry&body=Hi%20InfinityConstruction%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about..."
      aria-label="Email Infinity Construction"
      className="flex flex-col items-center justify-center py-2 hover:bg-[#fb823a] transition-colors font-inter"
    >
      <Mail size={18} />
      <span className="text-xs font-semibold mt-1">Email</span>
    </Link>
  </nav>
);

export default ContactBar;
