import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { specialityData } from "@/data/ourServicesData";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYelp,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative bg-secondary text-gray-100 pt-16 pb-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(200deg, #b07740 0%, #9c6434 25%, #9c6434 50%, #945e2c 75%, #cc9054 100%)",
      }}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Infinity Construction NYC",
          image: "/logo.png",
          telephone: "+13479395779",
          email: "Infinityconstructionnyc@gmail.com",
          openingHours: "Mo-Su 06:00-20:00",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1809 Albany Ave",
            addressLocality: "Brooklyn",
            addressRegion: "NY",
            postalCode: "11210",
            addressCountry: "US",
          },
          sameAs: [
            "https://www.instagram.com/infinity_construction_nyc/",
            "https://www.facebook.com/InfinityConstructionNYC",
            "https://www.linkedin.com/in/imrul-hassan-403724268",
            "https://www.yelp.com/biz/infinity-construction-nyc-brooklyn",
            "https://www.brownstoner.com/services/general-contractor-nyc/d6761b28e9652d/infinity-construction-nyc/",
          ],
        })}
      </script>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group">
              <h3
                className="text-2xl font-bold bg-clip-text text-transparent bg-white inline-block"
                itemProp="name"
              >
                Infinity Construction
                <span className="block h-0.5 w-16 bg-gradient-to-r from-primary to-secondary mt-2 transition-all duration-300 group-hover:w-24"></span>
              </h3>
              <p
                className="mt-4 text-gray-100 text-sm leading-relaxed"
                itemProp="description"
              >
                Transforming spaces with precision and excellence in New York
                City since 2015.
              </p>
              <p
                className="mt-4 text-white text-sm leading-relaxed font-semibold"
                itemProp="description"
              >
                LICENSED & INSURED BROWNSTONE RESTORATION AND HISTORICAL
                LANDMARK SPECIALIST
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4" itemProp="telephone">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <Link
                    href="tel:3479395779"
                    className="text-gray-100 text-sm"
                    aria-label="Call 347 939 5779"
                  >
                    347 939 5779
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4" itemProp="email">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <Link
                    href="mailto:Infinityconstructionnyc@gmail.com"
                    className="text-gray-100 hover:text-gray-300 text-sm transition-colors"
                    itemProp="email"
                  >
                    Infinityconstructionnyc@gmail.com
                  </Link>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4" itemProp="openingHours">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Clock className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-100 text-sm">6:00 AM – 8:00 PM</p>
                </div>
              </div>

              {/* Addresses */}
              <div className="space-y-4">
                <div
                  className="flex items-start gap-4"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Brooklyn, New York :</p>
                    <p className="text-gray-100 text-sm">
                      <span itemProp="streetAddress">1809 Albany Ave</span>,{" "}
                      <span itemProp="addressLocality">Brooklyn</span>,{" "}
                      <span itemProp="addressRegion">NY</span>{" "}
                      <span itemProp="postalCode">11210</span>
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <div className="p-2 bg-slate-800 rounded-lg">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Manhattan, New York :</p>
                    <p className="text-gray-100 text-sm">
                      <span itemProp="streetAddress">152 E 118th St S1</span>,{" "}
                      <span itemProp="addressLocality">New York</span>,{" "}
                      <span itemProp="addressRegion">NY</span>{" "}
                      <span itemProp="postalCode">10035</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gradient-to-r from-primary to-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Gallery", path: "/gallery" },
                { name: "Projects", path: "/projects" },
                { name: "Services", path: "/services" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-100 hover:text-gray-300 transition-colors flex items-center gap-2 group"
                    aria-label={link.name}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gradient-to-r from-primary to-secondary">
              Our Services
            </h3>
            <ul className="space-y-3">
              {specialityData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.path}
                    className="text-gray-100 hover:text-gray-300 transition-colors flex items-center gap-2 group"
                    aria-label={service.heading}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Reviews */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gradient-to-r from-primary to-secondary">
              Connect With Us
            </h3>
            <div className="flex justify-center">
              <Image
                src="/bbb.jpg"
                alt="BBB Accredited Business"
                width={90}
                height={30}
                className="object-contain transition-transform group-hover:scale-110 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/infinity_construction_nyc/",
                  icon: (
                    <FaInstagram className="text-gray-100 text-xl group-hover:scale-110 transition-transform" />
                  ),
                  color: "from-pink-500 to-purple-600",
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/InfinityConstructionNYC",
                  icon: (
                    <FaFacebook className="text-gray-100 text-xl group-hover:scale-110 transition-transform" />
                  ),
                  color: "from-blue-500 to-blue-700",
                },
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/imrul-hassan-403724268",
                  icon: (
                    <FaLinkedin className="text-gray-100 text-xl group-hover:scale-110 transition-transform" />
                  ),
                  color: "from-blue-400 to-blue-600",
                },
                {
                  name: "Yelp",
                  url: "https://www.yelp.com/biz/infinity-construction-nyc-brooklyn",
                  icon: (
                    <FaYelp className="text-gray-100 text-xl group-hover:scale-110 transition-transform" />
                  ),
                  color: "from-red-500 to-red-700",
                },
                {
                  name: "Brownstoner",
                  url: "https://www.brownstoner.com/services/general-contractor-nyc/d6761b28e9652d/infinity-construction-nyc/",
                  icon: (
                    <FaExternalLinkAlt className="text-gray-100 text-xl group-hover:scale-110 transition-transform mr-2" />
                  ),
                  text: "Brownstoner",
                  color: "from-amber-500 to-amber-700",
                  colSpan: "col-span-2",
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-slate-800 hover:bg-gradient-to-br ${
                    social.color
                  } p-3 rounded-lg flex items-center justify-center transition-all duration-300 group ${
                    social.colSpan || ""
                  }`}
                  aria-label={`${social.name} profile`}
                  itemProp="sameAs"
                >
                  {social.icon}
                  {social.text && (
                    <span className="text-sm font-medium">{social.text}</span>
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-4 flex justify-center pb-12 2xl:pb-0">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-gray-100 font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-100 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Infinity Construction NYC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
