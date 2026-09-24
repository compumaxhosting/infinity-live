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

const ConstructionRestorationBrooklyn = () => {
  return (
    <>
      <main className="border-b p-4 dark:bg-slate-950">
        <article className="container mx-auto max-w-5xl space-y-10 pb-14 pt-24 sm:pt-36">
          <header className="border-b border-slate-300 pb-8 dark:border-slate-700">
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-accent px-6 py-10 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:px-10 sm:py-12">
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mt-2 mb-6 text-center text-3xl font-forum text-black dark:text-white md:text-4xl">
                  Construction & Restoration Services in Brooklyn, NY
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
                    for Best Masonry Contractors New York.
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
                    src="/historical-landmark/construction-manhattan.png"
                    alt="Construction & Restoration Services in Brooklyn, NY"
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className={paragraphClass}>
                  Brooklyn&apos;s brownstones, row houses and brick buildings
                  are a major part of the borough&apos;s character. Properties
                  in neighborhoods such as Brooklyn Heights, Bedford-Stuyvesant,
                  Carroll Gardens and Clinton Hill can also have aging masonry,
                  stoops, facades and exterior details that require careful
                  restoration. Brooklyn has numerous designated historic
                  districts documented by the NYC Landmarks Preservation
                  Commission.
                </p>
              </div>
            </div>

            <p className={paragraphClass}>
              <strong>
                Infinity Construction NYC provides construction and restoration
                services throughout Brooklyn
              </strong>
              , specializing in brownstone, limestone, facade and masonry
              restoration. The company has served NYC since 2001 and works with
              both residential and commercial properties.
            </p>
          </header>

          <section>
            <h2 className={sectionHeadingClass}>
              Brooklyn Brownstone & Facade Restoration
            </h2>

            <p className={paragraphClass}>
              Brownstone restoration requires attention to the existing facade,
              stoop and architectural details—not simply a new surface finish.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC restores{" "}
              <strong>
                brownstone and limestone facades, stoops and architectural
                elements
              </strong>
              , along with broader masonry and facade repairs.
            </p>

            <p className={paragraphClass}>
              For older Brooklyn properties, the condition of the masonry,
              mortar, stone and surrounding details should be considered
              together before restoration work begins.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Brick Pointing & Repointing</h2>

            <p className={paragraphClass}>
              Deteriorated mortar can leave Brooklyn&apos;s brick facades
              vulnerable to weather and moisture.
            </p>

            <p className={paragraphClass}>
              Our <strong>brick pointing and repointing services</strong>{" "}
              address deteriorated mortar joints while helping maintain the
              existing brick masonry. Infinity Construction NYC also has
              completed brick-pointing projects involving careful preparation of
              the joints before repointing.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Waterproofing & Stucco</h2>

            <p className={paragraphClass}>
              Water intrusion can affect more than the area where a leak first
              appears. Cracked masonry, deteriorated joints and vulnerable
              exterior surfaces can all contribute to moisture problems.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>waterproofing and stucco services in Brooklyn</strong> for
              walls, parapets and other appropriate masonry surfaces.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Restoration</h2>

            <p className={paragraphClass}>
              Brooklyn property owners can also encounter roof deterioration,
              leaks and problems around roofing penetrations.
            </p>

            <p className={paragraphClass}>
              Our <strong>roof restoration services</strong> address damaged
              roofing materials and water-related issues and can be coordinated
              with other exterior restoration when appropriate.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Fire Escape & Metal Restoration
            </h2>

            <p className={paragraphClass}>
              Older Brooklyn properties may also require attention to fire
              escapes, railings, fences and other exterior metalwork.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>fire escape and metal restoration</strong>, including
              repair and restoration of exterior metal elements.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Concrete, Stone, Painting & Masonry
            </h2>

            <p className={paragraphClass}>
              We also provide <strong>concrete and stone work</strong> for
              sidewalks, driveways, patios and related exterior areas, along
              with painting and masonry services involving plaster, surface
              preparation and finish coats.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Why Brooklyn Property Owners Choose Infinity Construction NYC
            </h2>

            <ul className="mb-5 list-disc space-y-3 pl-6 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              <li>Serving NYC since 2001</li>
              <li>Licensed and insured</li>
              <li>Brownstone, limestone and masonry restoration experience</li>
              <li>Residential and commercial projects</li>
              <li>Brick pointing and facade restoration</li>
              <li>Waterproofing and roofing</li>
              <li>Fire escape and metal restoration</li>
              <li>Concrete, stone, painting and masonry work</li>
              <li>Project-specific restoration recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Brooklyn Restoration FAQs</h2>

            <div className="space-y-6">
              <div>
                <h3 className={subheadingClass}>
                  Do you restore Brooklyn brownstones?
                </h3>

                <p className={paragraphClass}>
                  Yes. Brownstone and limestone facade, stoop and
                  architectural-detail restoration are core services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you provide brick pointing in Brooklyn?
                </h3>

                <p className={paragraphClass}>
                  Yes. Infinity Construction NYC provides brick pointing and
                  repointing for deteriorated masonry.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Can you work on historic Brooklyn properties?
                </h3>

                <p className={paragraphClass}>
                  Yes. However, owners of landmarked properties or properties
                  within designated historic districts should verify applicable
                  NYC Landmarks Preservation Commission requirements before
                  beginning regulated exterior work.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you provide several restoration services for one property?
                </h3>

                <p className={paragraphClass}>
                  Yes. Masonry, waterproofing, roofing, concrete, stone, metal
                  and painting work can be evaluated together when the property
                  requires multiple repairs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Brooklyn Construction & Restoration
            </h2>

            <p className={paragraphClass}>
              From a brownstone stoop to a deteriorating brick facade, Infinity
              Construction NYC provides practical restoration solutions based on
              the condition of the property.
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
                to discuss your Brooklyn project.
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

export default ConstructionRestorationBrooklyn;
