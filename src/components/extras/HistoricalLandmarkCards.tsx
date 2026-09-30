import Image from "next/image";
import Link from "next/link";

const landmarkCards = [
  {
    href: "/historical-landmark-restoration-bronx",
    title: "Historical Landmark Restoration Contractor in The Bronx, NY",
    description:
      "Historical landmark restoration in The Bronx requires careful preservation of original materials, architectural details, and exterior features. Infinity Construction NYC provides restoration and masonry services for historic properties, including brownstone and limestone facade restoration, brick pointing, masonry repair, stoop restoration, waterproofing, and exterior maintenance. Each project is approached according to the property's existing condition and architectural character.",
    image: "/historical-landmark/historical-img-1.webp",
    alt: "Historical landmark restoration contractor working on a historic property in The Bronx, NY",
  },
  {
    href: "/historical-landmark-restoration-brooklyn",
    title: "Historical Landmark Restoration in Brooklyn, NY",
    description:
      "Brooklyn is home to many historic brownstone, limestone, and masonry properties that require specialized restoration and exterior maintenance. Infinity Construction NYC provides historical landmark restoration services throughout Brooklyn, including brownstone restoration, limestone repair, facade restoration, brick pointing, masonry repair, stoop restoration, and waterproofing. Our work focuses on preserving architectural details while addressing the condition of the building exterior.",
    image: "/historical-landmark/historical-img-2.webp",
    alt: "Historical landmark and brownstone restoration services in Brooklyn, NY",
  },
  {
    href: "/historical-landmark-restoration-manhattan",
    title: "Historical Landmark Restoration in Manhattan, NY",
    description:
      "Historical properties throughout Manhattan require careful restoration to protect original architectural materials and exterior details. Infinity Construction NYC provides restoration services for brownstone and limestone properties, along with masonry repair, brick pointing, facade restoration, exterior waterproofing, and related exterior work. Our approach considers the existing condition and architectural character of each historic property.",
    image: "/historical-landmark/construction-manhattan.webp",
    alt: "Historical landmark restoration and facade masonry work in Manhattan, NY",
  },
  {
    href: "/historical-landmark-restoration-queens",
    title: "Historical Landmark Restoration Contractor in Queens, NY",
    description:
      "Historic properties in Queens can require specialized masonry and exterior restoration to preserve original architectural features. Infinity Construction NYC provides historical landmark restoration services including brownstone and limestone restoration, facade repair, brick pointing, masonry repair, stoop restoration, and waterproofing. We work with property owners to address exterior deterioration while maintaining the character of the existing structure.",
    image: "/historical-landmark/construction-queen.webp",
    alt: "Historical landmark restoration and facade repair services in Queens, NY",
  },
  {
    href: "/historical-landmark",
    title: "NYC Historical Landmark Restoration: Brownstone and Limestone",
    description:
      "New York City's historic neighborhoods are known for distinctive brownstone, limestone, masonry, and detailed architectural facades. Infinity Construction NYC provides historical landmark restoration services designed to address exterior deterioration while preserving the character of these properties. Services include brownstone and limestone restoration, masonry repair, facade restoration, brick pointing, stoop restoration, and exterior waterproofing for historic properties throughout New York City.",
    image: "/historical-landmark/historical-img-1.webp",
    alt: "NYC historical landmark brownstone and limestone restoration",
  },
];

export function HistoricalLandmarkCards() {
  return (
    <section
      aria-label="Historical landmark restoration services in New York City"
      className="space-y-8"
    >
      {landmarkCards.map((card, index) => {
        const imageFirst = index % 2 === 0;

        return (
          <article
            key={card.href}
            className="overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-gray-900"
          >
            <Link
              href={card.href}
              aria-label={`Learn more about ${card.title}`}
              className={`group flex flex-col ${
                imageFirst ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full sm:w-[30%]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={800}
                  height={520}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  priority={index === 0}
                  className="h-full min-h-[200px] w-full object-cover rounded-t-2xl sm:rounded-none"
                />
              </div>

              {/* Content */}
              <div
                className={`flex w-full flex-col justify-center p-5 sm:w-[70%] sm:p-8 ${
                  imageFirst ? "" : "sm:text-left"
                }`}
              >
                <h2
                  className="text-2xl font-semibold text-tertiary transition-colors duration-300 group-hover:underline group-hover:underline-offset-4 md:text-3xl dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  {card.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-gray-700 xl:text-lg dark:text-gray-300">
                  {card.description}
                </p>

                <span className="mt-5 inline-block text-base font-semibold text-tertiary dark:text-white">
                  Learn More →
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
}
