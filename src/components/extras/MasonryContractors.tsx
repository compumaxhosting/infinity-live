import Link from "next/link";
import Image from "next/image";
import ServiceLinks from "../ServiceLinks";

export default function MasonryContractors() {
  return (
    <article className="mx-auto w-full max-w-5xl">
      <section className="mb-10">
        <h1 className="mt-2 text-3xl md:text-4xl text-black dark:text-white font-forum mb-6">
          Masonry Contractors in New York City for Brick, Brownstone &amp;
          Facade Restoration
        </h1>
        <section className="mb-8">
          <div className="relative overflow-hidden max-w-3xl mx-auto rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100/60 dark:border-gray-700 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-6 text-center shadow-sm">
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600 dark:text-orange-500 font-bold">
                Call{" "}
                <a
                  href="tel:3479395779"
                  className="underline underline-offset-4 font-extrabold hover:text-orange-700 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  347 939 5779
                </a>{" "}
                for Professional Construction & Restoration Services in NYC.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>

            <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />
            <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/masonry-contractor.webp"
              alt="Masonry contractors in New York City providing brick, brownstone, and facade restoration"
              width={1200}
              height={675}
              className="block w-full h-auto object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 text-justify">
              Finding experienced{" "}
              <strong>masonry contractors in New York City</strong> is important
              when your property needs brick repair, repointing, facade
              restoration, brownstone repair, limestone restoration,
              waterproofing, or concrete work. NYC buildings are exposed to
              rain, snow, temperature changes, moisture, and years of wear,
              making professional exterior masonry maintenance essential.
            </p>
          </div>
        </div>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 text-justify">
          Infinity Construction NYC provides masonry and exterior restoration
          services throughout{" "}
          <strong>Brooklyn, Manhattan, Queens, and The Bronx</strong>. Its
          services include brick pointing and repointing, masonry repair, facade
          restoration, brownstone and limestone restoration, stoop restoration,
          waterproofing, concrete and stone work, and other exterior
          construction services.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-4">
          Masonry Services for NYC Properties
        </h2>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-2 text-justify">
          Professional masonry work can help address visible deterioration and
          protect exterior building materials. Common services include:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-lg leading-7 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Brick pointing and repointing</strong> – replacing
            deteriorated mortar joints between bricks.
          </li>

          <li>
            <strong>Brick repair</strong> – repairing damaged or deteriorated
            masonry.
          </li>

          <li>
            <strong>Facade restoration</strong> – addressing cracks, spalling,
            damaged masonry, and other exterior concerns.
          </li>

          <li>
            <strong>Brownstone restoration</strong> – restoring deteriorated
            brownstone facades, stoops, and architectural details.
          </li>

          <li>
            <strong>Limestone restoration</strong> – repairing and restoring
            limestone exterior elements.
          </li>

          <li>
            <strong>Stoop restoration</strong> – repairing and restoring
            exterior stoops and masonry details.
          </li>

          <li>
            <strong>Concrete and stone work</strong> – masonry-related work for
            sidewalks, patios, driveways, and other exterior areas.
          </li>

          <li>
            <strong>Waterproofing</strong> – helping address moisture intrusion
            and protect masonry surfaces.
          </li>
        </ul>
      </section>
      {/* Brick Pointing */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-4">
          Why Brick Pointing Matters in NYC
        </h2>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-2 text-justify">
          Mortar joints naturally deteriorate over time. Missing, cracked, or
          weakened mortar can allow moisture to enter masonry assemblies and
          contribute to additional deterioration.
        </p>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 text-justify">
          Proper repointing involves removing deteriorated mortar and installing
          compatible replacement mortar. For older NYC brick buildings, mortar
          selection is particularly important because excessively hard mortar
          can damage softer historic brick. Infinity Construction NYC states
          that it custom-blends mortar to match the existing masonry.
        </p>
      </section>
      {/* Brownstone Restoration */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-4">
          Brownstone and Historic Facade Restoration
        </h2>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-2 text-justify">
          New York City is known for its brownstones, limestone buildings, and
          historic masonry architecture. Restoration requires attention to the
          original materials, architectural details, and existing condition of
          the facade.
        </p>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 text-justify">
          A professional restoration contractor can assess deteriorated surfaces
          and determine whether the project requires localized repairs,
          repointing, waterproofing, stone or brownstone restoration, or more
          extensive facade work.
        </p>
      </section>
      {/* Service Areas */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-4">
          Masonry Contractors Serving Brooklyn, Manhattan, Queens &amp; The
          Bronx
        </h2>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-2 text-justify">
          Infinity Construction NYC serves property owners across New York City,
          including:
        </p>

        <ul className="list-disc pl-6 space-y-1 text-lg leading-7 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Brooklyn:</strong> brownstone restoration, brick pointing,
            masonry repair, stoop restoration, waterproofing, and exterior
            construction.
          </li>

          <li>
            <strong>Manhattan:</strong> limestone and brownstone restoration,
            facade repair, masonry, waterproofing, and exterior restoration.
          </li>

          <li>
            <strong>Queens:</strong> masonry, waterproofing, roofing, and
            exterior restoration.
          </li>

          <li>
            <strong>The Bronx:</strong> masonry repair, brick pointing, stoop
            restoration, and exterior restoration.
          </li>
        </ul>
      </section>
      {/* Choosing a Contractor */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-4">
          How to Choose a Masonry Contractor in NYC
        </h2>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-2 text-justify">
          Before starting a masonry or facade project, look for a contractor who
          can:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-lg leading-7 text-gray-700 dark:text-gray-300 mb-6">
          <li>Inspect the existing condition of the property.</li>

          <li>
            Identify the likely source of deterioration or moisture intrusion.
          </li>

          <li>Explain the recommended repair approach.</li>

          <li>Use materials compatible with the existing masonry.</li>

          <li>Understand applicable NYC building and landmark requirements.</li>

          <li>Clearly define the project scope before work begins.</li>
        </ol>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 text-justify mb-4">
          Infinity Construction NYC describes a project process that includes
          property assessment, identifying the problem, recommending the
          required work, preparing the area, completing restoration, and
          conducting a final review.
        </p>

        <ServiceLinks />
      </section>
      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          <details className="group border border-gray-200 dark:border-gray-700 rounded-md max-w-3xl">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-3 text-lg md:text-xl text-black dark:text-white font-forum">
              <span>What does a masonry contractor do in NYC?</span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 group-open:hidden">
                +
              </span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 hidden group-open:inline">
                −
              </span>
            </summary>

            <div className="px-5 pb-5">
              <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                A masonry contractor performs construction, repair, maintenance,
                and restoration work involving materials such as brick, stone,
                concrete, brownstone, limestone, and mortar.
              </p>
            </div>
          </details>

          <details className="group border border-gray-200 dark:border-gray-700 rounded-md max-w-3xl">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-3 text-lg md:text-xl text-black dark:text-white font-forum">
              <span>How do I know if my brickwork needs repointing?</span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 group-open:hidden">
                +
              </span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 hidden group-open:inline">
                −
              </span>
            </summary>

            <div className="px-5 pb-5">
              <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                Cracked, missing, recessed, or deteriorated mortar joints can be
                signs that masonry should be professionally inspected.
              </p>
            </div>
          </details>

          <details className="group border border-gray-200 dark:border-gray-700 rounded-md max-w-3xl">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-3 text-lg md:text-xl text-black dark:text-white font-forum">
              <span>Do you repair brownstone and limestone?</span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 group-open:hidden">
                +
              </span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 hidden group-open:inline">
                −
              </span>
            </summary>

            <div className="px-5 pb-5">
              <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                Yes. Infinity Construction NYC provides brownstone and limestone
                restoration and repair services for NYC properties.
              </p>
            </div>
          </details>

          <details className="group border border-gray-200 dark:border-gray-700 rounded-md max-w-3xl">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-3 text-lg md:text-xl text-black dark:text-white font-forum">
              <span>Do masonry contractors provide waterproofing?</span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 group-open:hidden">
                +
              </span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 hidden group-open:inline">
                −
              </span>
            </summary>

            <div className="px-5 pb-5">
              <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                Many masonry contractors provide related waterproofing services.
                Infinity Construction NYC lists waterproofing among its exterior
                construction services.
              </p>
            </div>
          </details>

          <details className="group border border-gray-200 dark:border-gray-700 rounded-md max-w-3xl">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-4 py-3 text-lg md:text-xl text-black dark:text-white font-forum">
              <span>Which NYC areas do you serve?</span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 group-open:hidden">
                +
              </span>

              <span className="shrink-0 text-2xl leading-none text-gray-600 dark:text-gray-300 hidden group-open:inline">
                −
              </span>
            </summary>

            <div className="px-5 pb-5">
              <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
                Infinity Construction NYC serves Brooklyn, Manhattan, Queens,
                and The Bronx, with additional NYC service coverage listed on
                its website.
              </p>
            </div>
          </details>
        </div>
      </section>
      {/* Call to Action / Final Section */}
      <section className="pb-8">
        <h2 className="text-2xl md:text-3xl text-black dark:text-white font-forum mb-4">
          Get a Masonry Assessment for Your NYC Property
        </h2>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 mb-2">
          Whether you need{" "}
          <strong>
            brick pointing, brick repair, facade restoration, brownstone
            restoration, limestone repair, stoop restoration, concrete work, or
            waterproofing
          </strong>
          , the first step is understanding the condition of the existing
          masonry.
        </p>

        <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
          Infinity Construction NYC provides masonry and exterior restoration
          services for residential and commercial properties throughout New York
          City. Contact the company to discuss your property, the visible
          masonry issues, and the restoration work you may need.
        </p>
      </section>
    </article>
  );
}
