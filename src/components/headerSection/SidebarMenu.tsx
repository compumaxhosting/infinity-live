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
  ChevronDown,
  ChevronUp,
 
} from "lucide-react";
import { specialityData } from "@/data/ourServicesData";

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // const toggleMoreDropdown = () => {
  //   setIsMoreOpen(!isMoreOpen);
  // };

  return (
    <div>
      <div className="xl:hidden absolute right-0 top-0 sm:right-4 md:h-full flex items-center">
        <button
          onClick={toggleSheet}
          className="dark:text-gray-300 text-gray-200 bg-secondary p-4"
        >
          <Menu className="w-8 h-8" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <Sheet open={isOpen} onOpenChange={toggleSheet}>
        <SheetContent
          side="left"
          className="dark:bg-slate-950 transition-colors duration-300 overflow-y-auto w-[90%]"
        >
          <SheetHeader>
            <div className="flex justify-center pt-6">
              <Link href="/" aria-label="Infinity Construction NYC Home">
                <Image
                  src="/logo-new.webp"
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
            {/* <Link
              href="/portfolio"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Projects
            </Link> */}

            <Link
              href="/contact"
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              Contact
            </Link>
            {/* More Dropdown */}
            {/* <div className="flex flex-col">
              <button
                onClick={toggleMoreDropdown}
                className="flex items-center justify-between text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500 w-full"
              >
                More
                {isMoreOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {isMoreOpen && (
                <div>
                  <Link
                    href="/blog"
                    className="block text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 mt-4"
                  >
                    <ul className="pl-2">
                      <li>Blog</li>
                    </ul>
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 mt-4"
                  >
                    <ul className="pl-2">
                      <li>FAQs</li>
                    </ul>
                  </Link>
                  <Link
                    href="/gallery"
                    className="block text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 mt-4"
                  >
                    <ul className="pl-2">
                      <li>Gallery</li>
                    </ul>
                  </Link>
                  <Link
                    href="/projects"
                    className="block text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 mt-4"
                  >
                    <ul className="pl-2">
                      <li>Other Works</li>
                    </ul>
                  </Link>
                </div>
              )}
            </div> */}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SidebarMenu;