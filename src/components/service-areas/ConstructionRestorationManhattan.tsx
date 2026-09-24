import Footer from "@/components/Footer";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import ConstructionRestorationNav from "../extras/ConstructionRestorationNav";
import Link from "next/link";

const sectionHeadingClass =
  "mb-4 text-xl text-orange-600 dark:text-orange-400 sm:text-2xl";

const subheadingClass =
  "mb-3 text-lg text-slate-900 dark:text-white sm:text-xl";

const paragraphClass =
  "mb-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg text-justify";

const ConstructionRestorationManhattan = () => {
  return (
    <>
      <main className="border-b p-4 dark:bg-slate-950">
        <article className="container mx-auto max-w-5xl space-y-10 pb-14 pt-24 sm:pt-36">
          <header className="border-b border-slate-300 pb-8 dark:border-slate-700">
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-accent px-6 py-10 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:px-10 sm:py-12">
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mt-2 mb-6 text-center text-3xl font-forum text-black dark:text-white md:text-4xl">
                  Construction & Restoration Services in Manhattan, NY
                </h1>

                <div className="mt-8">
                  <ConstructionRestorationNav />
                </div>

                <div className="mt-2 border-t border-orange-100 pt-7 dark:border-gray-700">
                  <p className="mb-4 text-xl font-bold text-orange-600 dark:text-orange-500 sm:text-2xl">
                    Call{" "}
                    <a
                      href="tel:3479395779"
                      className="font-extrabold underline underline-offset-4 transition-colors duration-300 hover:text-orange-700 dark:hover:text-orange-400"
                    >
                      347 939 5779
                    </a>{" "}
                    for Professional Construction & Restoration Services in NYC.
                  </p>

                  <Link
                    href="/contact"
                    className="inline-block rounded-lg bg-primary px-8 py-3 font-bold text-white shadow-sm transition-all duration-300 hover:bg-primary/80 hover:shadow-md"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />
              <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />
            </div>

            <div className="flex flex-col gap-8 sm:m-10 lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-700">
                  <Image
                    src="/historical-landmark/construction-queen.png"
                    alt="Construction & Restoration Services in Manhattan, NY"
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className={paragraphClass}>
                  Manhattan&apos;s building stock ranges from brownstone and
                  limestone townhouses to apartment buildings and commercial
                  properties. Older neighborhoods such as Harlem, Carnegie Hill,
                  Chelsea, Greenwich Village and the Upper West Side contain
                  numerous historic districts and architecturally significant
                  buildings.
                </p>
              </div>
            </div>
            <p className={paragraphClass}>
              That variety means exterior restoration in Manhattan often
              requires a building-specific approach.{" "}
              <strong>
                Infinity Construction NYC provides Manhattan construction and
                restoration services
              </strong>
              , specializing in brownstone, limestone, facade and masonry
              restoration.
            </p>
          </header>

          <section>
            <h2 className={sectionHeadingClass}>
              Brownstone, Limestone & Facade Restoration
            </h2>

            <p className={paragraphClass}>
              For Manhattan townhouses and older residential properties, facade
              deterioration can involve brownstone, limestone, brick, stoops and
              architectural details.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>
                brownstone and limestone restoration, facade repair and masonry
                restoration
              </strong>{" "}
              for residential and commercial properties. The work is based on
              the condition and material of the existing building rather than a
              one-size-fits-all repair.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Brick Pointing & Repointing in Manhattan
            </h2>

            <p className={paragraphClass}>
              Mortar deterioration can affect the weather resistance and
              appearance of older brick facades.
            </p>

            <p className={paragraphClass}>
              Our <strong>Manhattan brick pointing and repointing</strong>{" "}
              service addresses deteriorated mortar joints and forms part of
              broader masonry restoration when required.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Waterproofing & Stucco</h2>

            <p className={paragraphClass}>
              Manhattan buildings can develop moisture problems around masonry
              walls, parapets and other exterior surfaces.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>waterproofing and stucco work</strong> designed for
              appropriate masonry surfaces. When water intrusion is connected to
              deteriorated masonry, the conditions can be considered together.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Restoration</h2>

            <p className={paragraphClass}>
              Roof deterioration can create problems for ceilings, walls and
              other parts of a building.
            </p>

            <p className={paragraphClass}>
              Our <strong>Manhattan roof restoration services</strong> address
              damaged roofing materials, penetrations and water-related issues.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Fire Escape & Metal Restoration
            </h2>

            <p className={paragraphClass}>
              Fire escapes, railings and other exterior metal elements require
              maintenance and restoration as they age.
            </p>

            <p className={paragraphClass}>
              We provide{" "}
              <strong>fire escape and metal restoration in Manhattan</strong>,
              including restoration of fire escapes, railings, fences and other
              exterior metalwork.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Concrete, Stone, Painting & Masonry
            </h2>

            <p className={paragraphClass}>
              Infinity Construction NYC also handles{" "}
              <strong>concrete and stone work</strong> for exterior areas such
              as sidewalks, driveways and patios, as well as painting and
              masonry work involving plaster and finished surfaces.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Manhattan Restoration for Residential & Commercial Properties
            </h2>

            <p className={paragraphClass}>
              The company serves both residential and commercial properties
              throughout Manhattan and the wider NYC area. Its work ranges from
              brownstone restoration to masonry, waterproofing, roofing and
              exterior restoration.
            </p>

            <p className={paragraphClass}>
              For landmarked properties or buildings within historic districts,
              property owners should verify applicable LPC requirements before
              starting regulated exterior work.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Manhattan Restoration FAQs</h2>

            <div className="space-y-6">
              <div>
                <h3 className={subheadingClass}>
                  Do you restore Manhattan brownstones?
                </h3>

                <p className={paragraphClass}>
                  Yes. Brownstone and limestone restoration, including facades
                  and stoops, is a core service.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you repair brick and masonry?
                </h3>

                <p className={paragraphClass}>
                  Yes. Brick pointing, repointing and masonry restoration are
                  part of the company&apos;s services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you work on commercial buildings?
                </h3>

                <p className={paragraphClass}>
                  Yes. Infinity Construction NYC works with residential and
                  commercial property owners.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Can roofing and facade work be combined?
                </h3>

                <p className={paragraphClass}>
                  Depending on the property&apos;s condition, multiple exterior
                  restoration services can be included within one project scope.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Manhattan Construction & Restoration
            </h2>

            <p className={paragraphClass}>
              Whether the property is a brownstone, masonry building, apartment
              property or commercial structure, Infinity Construction NYC can
              evaluate the exterior condition and recommend the appropriate
              restoration work.
            </p>

            <p className={paragraphClass}>
              <strong>
                Call{" "}
                <a
                  href="tel:3479395779"
                  className="text-orange-600 underline hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-600"
                >
                  347-939-5779
                </a>{" "}
                to discuss your Manhattan property.
              </strong>
            </p>
          </section>
        </article>
      </main>

      <Footer />
      <PhoneCall />
    </>
  );
};

export default ConstructionRestorationManhattan;