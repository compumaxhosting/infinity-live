import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import {
  Menu,
  Phone,
  ChevronDown,
  ChevronUp,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { specialityData } from "@/data/ourServicesData";

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State to toggle services dropdown

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div>
      {/* Mobile Menu Toggle */}
      <div className="xl:hidden absolute right-0 top-0 sm:right-4 md:h-full flex items-center">
        <button
          onClick={toggleSheet}
          className="dark:text-gray-300 text-gray-200 bg-secondary p-4"
        >
          <Menu className="w-8 h-8" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
      {/* Sidebar Sheet Component */}
      <Sheet open={isOpen} onOpenChange={toggleSheet}>
        <SheetContent
          side="left"
          className="dark:bg-slate-950 transition-colors duration-300 overflow-y-auto w-[90%]"
        >
          <SheetHeader>
            <div className="flex justify-center pt-6">
              <Link href="/" aria-label="Infinity Construction NYC Home">
                <Image
                  src="/logo-new.png"
                  alt="Infinity Construction NYC Logo"
                  width={120}
                  height={40}
                  priority
                  className="cursor-pointer w-24 2xl:w-32"
                />
              </Link>
            </div>
            <SheetTitle
              className="text-center pt-4 pb-4 dark:text-gray-300 text-2xl font-semibold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Infinity Construction NYC
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col space-y-4 p-4 pl-0">
            <Link
              href="/"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center justify-between text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500 w-full"
              >
                Services
                {isServicesOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {isServicesOpen && (
                <div>
                  {specialityData.map((service, index) => (
                    <Link
                      key={index}
                      href={service.path}
                      className="block text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 mt-4"
                    >
                      <ul className="pl-2">
                        <li>{service.heading}</li>
                      </ul>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Projects
            </Link>
            <Link
              href="/gallery"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Gallery
            </Link>
            <Link
              href="/faq"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Faq&apos;s
            </Link>
            <Link
              href="/blog"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Contact
            </Link>
          </nav>

          {/* Phone Button */}
          <div className="flex gap-4 items-center mt-6">
            <div className="p-4">
              <Link href="tel:+13479395779">
                <div className="bg-primary text-white px-4 py-3 hover:bg-white hover:text-primary hover:border-primary hover:border transition-all duration-300 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>347 939 5779</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-6 justify-center">
            <a
              href="https://www.instagram.com/infinity_construction_nyc/"
              className="text-white hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-10 w-10 bg-primary text-white rounded-full p-2 hover:bg-tertiary transition-all duration-300" />
            </a>
            <a
              href="https://www.facebook.com/InfinityConstructionNYC"
              className="text-white hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-10 w-10 bg-primary text-white rounded-full p-2 hover:bg-tertiary transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/imrul-hassan-403724268"
              className="text-white hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-10 w-10 bg-primary text-white rounded-full p-2 hover:bg-tertiary transition-all duration-300" />
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SidebarMenu;
