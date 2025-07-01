import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYelp,
  FaExternalLinkAlt,
} from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Brownstoner",
      href: "https://www.brownstoner.com/services/general-contractor-nyc/d6761b28e9652d/infinity-construction-nyc/",
      icon: <FaExternalLinkAlt className="text-4xl sm:text-5xl mb-2" />,
    },
    {
      name: "Yelp",
      href: "https://m.yelp.com/biz/infinity-construction-nyc-brooklyn",
      icon: <FaYelp className="text-4xl sm:text-5xl mb-2" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/imrul-hassan-403724268",
      icon: <FaLinkedinIn className="text-4xl sm:text-5xl mb-2" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/InfinityConstructionNYC",
      icon: <FaFacebookF className="text-4xl sm:text-5xl mb-2" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/infinity_construction_nyc/",
      icon: <FaInstagram className="text-4xl sm:text-5xl mb-2" />,
    },
  ];

  return (
    <section
      className="py-8 md:py-16 bg-accent dark:bg-slate-950 dark:bg-sectext-secondary"
      style={{ fontFamily: "var(--font-forum)" }}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto text-center px-4">
        <h2
          className="text-3xl lg:text-5xl font-semibold text-tertiary dark:text-white mb-8"
          itemProp="name"
        >
          Connect with Us
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {socialLinks.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-secondary dark:text-white dark:hover:text-secondary hover:text-primary transition-colors duration-300"
              aria-label={`Infinity Construction NYC on ${name}`}
              itemProp="sameAs"
            >
              {icon}
              <span className="text-sm sm:text-base font-medium">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
