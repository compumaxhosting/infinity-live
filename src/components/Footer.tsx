import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"; // Correct import statement
import { specialityData } from "@/data/ourServicesData";
import Link from "next/link";
import { FaExternalLinkAlt, FaYelp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-12 pb-24 md:pb-20 md:py-20 bg-secondary/95 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-12 lg:px-16">
        {/* Flex container for columns */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 sm:pl-16">
          {/* Column 1: Company Info */}
          <div className="flex flex-col items-start max-w-sm">
            <h3 className="text-xl font-semibold mb-4">Company Name</h3>
            <div className="flex items-center mb-3">
              {/* Phone icon */}
              <div className="bg-secondary p-2 mr-2 sm:p-3 sm:mr-4 rounded-full">
                <Phone className="text-white" />
              </div>
              <p className="text-sm sm:text-base">
                Phone: <br /> 347 939 5779
              </p>
            </div>
            <div className="flex items-center mb-3">
              {/* Email icon */}
              <div className="bg-secondary p-2 mr-2 sm:p-3 sm:mr-4 rounded-full">
                <Mail className="text-white" />
              </div>
              <Link href="mailto:Infinityconstructionnyc@gmail.com">
              <p className="text-sm sm:text-base">
                Email: Infinityconstructionnyc@gmail.com
              </p>
              </Link>
            </div>
            <div className="flex items-center mb-3">
              {/* Address icon */}
              <div className="bg-secondary p-2 mr-2 sm:p-3 sm:mr-4 rounded-full">
                <MapPin className="text-white" />
              </div>
              <p className="text-sm sm:text-base">
                Address: <br />
                1809 Albany Ave, Brooklyn <br /> NY 11210
              </p>
            </div>
            <div className="mt-6 flex space-x-6">
              {/* Instagram Icon */}
              <Link
                href="https://www.instagram.com/infinity_construction_nyc/"
                className="text-white hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </Link>
              {/* Facebook Icon */}
              <Link
                href="https://www.facebook.com/InfinityConstructionNYC"
                className="text-white hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </Link>
              {/* LinkedIn Icon */}
              <Link
                href="https://www.linkedin.com/in/imrul-hassan-403724268"
                className="text-white hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </Link>
              <Link
                href="https://www.yelp.com/biz/infinity-construction-nyc-brooklyn"
                className="text-white hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYelp className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </Link>
              <Link
                href="https://www.brownstoner.com/services/general-contractor-nyc/d6761b28e9652d/infinity-construction-nyc/"
                className="text-white hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="h-8 w-8 bg-white text-black rounded-full p-2" />
              </Link>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col items-start max-w-xs lg:pl-16">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>

            <button className="mt-6 bg-primary text-white py-3 px-6 hover:bg-stone-900 transition-all duration-300">
              Review us
            </button>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-base">
              {specialityData.map((service) => (
                <li key={service.id}>
                  <Link href={`${service.path}`} className="hover:underline">
                    {service.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
