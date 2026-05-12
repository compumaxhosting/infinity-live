import { Phone, Mail, MapPin } from "lucide-react";
import { specialityData } from "@/data/ourServicesData";
import Link from "next/link";
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
          image: "/logo.webp",
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
        {/* 4 COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* COLUMN 1 - COMPANY INFO */}
          <div className="space-y-6">
            <div className="group">
              <div
                className="flex items-center space-x-3 group"
                itemProp="name"
              >
                <Image
                  src="/logo-white.webp"
                  alt="Infinity Construction NYC Logo"
                  width={230}
                  height={60}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  itemProp="image"
                />
              </div>

              <span className="block h-0.5 w-16 bg-gradient-to-r from-primary to-secondary mt-2 transition-all duration-300 group-hover:w-24"></span>

              <p
                className="mt-4 text-gray-100 text-sm leading-relaxed"
                itemProp="description"
              >
                We specialize in masonry and exterior construction services
                across New York City. Delivering durable, high-quality
                workmanship since 2015.
              </p>

              <p
                className="mt-4 text-white text-sm leading-relaxed font-semibold"
                itemProp="description"
              >
                LICENSED & INSURED
              </p>
            </div>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gradient-to-r from-primary to-secondary">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
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

          {/* COLUMN 3 - SERVICES */}
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

          {/* COLUMN 4 - LOCATIONS */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gradient-to-r from-primary to-secondary">
              Our Locations
            </h3>

            <div className="space-y-6">
              {/* BROOKLYN */}
              <div
                className="flex items-start gap-4"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <div className="p-2 bg-slate-800 rounded-lg">
                  <MapPin className="text-[#FFA726]" size={18} />
                </div>

                <div>
                  <p className="font-medium">Brooklyn, New York :</p>

                  <Link
                    href="https://share.google/x2afcKJ9BTCn2r4Hp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 text-sm hover:underline"
                  >
                    <span itemProp="streetAddress">1809 Albany Ave</span>,{" "}
                    <span itemProp="addressLocality">Brooklyn</span>,{" "}
                    <span itemProp="addressRegion">NY</span>{" "}
                    <span itemProp="postalCode">11210</span>
                  </Link>
                </div>
              </div>

              {/* MANHATTAN */}
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

                  <Link
                    href="https://share.google/OuJfkyBgaowURan8S"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 text-sm hover:underline"
                  >
                    <span itemProp="streetAddress">152 E 118th St S1</span>,{" "}
                    <span itemProp="addressLocality">New York</span>,{" "}
                    <span itemProp="addressRegion">NY</span>{" "}
                    <span itemProp="postalCode">10035</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-100 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-12 after:bg-gradient-to-r from-primary to-secondary">
              Contact Us
            </h3>

            <div className="space-y-6">
              {/* PHONE */}
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

              {/* EMAIL */}
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
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-200 mt-8 pt-12 md:pt-4 text-center text-gray-100 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Infinity Construction NYC. All
            Rights Reserved. Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;