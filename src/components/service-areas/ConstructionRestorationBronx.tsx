import Footer from "@/components/Footer";
import PhoneCall from "@/components/PhoneCall";
import Image from "next/image";
import Link from "next/link";
import ConstructionRestorationNav from "../extras/ConstructionRestorationNav";

const sectionHeadingClass =
  "mb-4 text-xl text-orange-600 dark:text-orange-400 sm:text-2xl";

const subheadingClass =
  "mb-3 text-lg text-slate-900 dark:text-white sm:text-xl";

const paragraphClass =
  "mb-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg text-justify";

const ConstructionRestorationBronx = () => {
  return (
    <>
      <main className="border-b p-4 dark:bg-slate-950">
        <article className="container mx-auto max-w-5xl space-y-10 pb-14 pt-24 sm:pt-36">
          <header className="border-b border-slate-300 pb-8 dark:border-slate-700">
            <section className="mb-8">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-accent px-6 py-10 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:px-10 sm:py-12">
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                  <h1 className="mt-2 mb-6 text-center text-3xl font-forum text-black dark:text-white md:text-4xl">
                    Construction & Restoration Services in the Bronx, NY
                  </h1>

                  <div className="mt-8">
                    <ConstructionRestorationNav />
                  </div>

                  <div className="mt-8 border-t border-orange-100 pt-7 dark:border-gray-700">
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
            </section>

            <div className="flex flex-col gap-8 sm:m-10 lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-700">
                  <Image
                    src="/historical-landmark/construction-queen.png"
                    alt="Construction & Restoration Services in the Bronx, NY"
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className={paragraphClass}>
                  The Bronx includes older row houses, brownstones, masonry
                  apartment buildings and other properties where exterior
                  materials have been exposed to decades of weather and use.
                </p>

                <p className={paragraphClass}>
                  Infinity Construction NYC provides{" "}
                  <strong>Bronx construction and restoration services</strong>,
                  with particular experience in brownstone restoration, masonry
                  repair, brick pointing, stoop restoration and exterior
                  restoration.
                </p>
              </div>
            </div>

            <p className={paragraphClass}>
              The borough also includes designated historic areas such as Mott
              Haven and Longwood, making appropriate restoration an important
              consideration for certain older properties. The NYC Landmarks
              Preservation Commission continues to document and preserve
              historic Bronx neighborhoods.
            </p>
          </header>

          <section>
            <h2 className={sectionHeadingClass}>
              Brownstone, Stoop & Facade Restoration
            </h2>

            <p className={paragraphClass}>
              Older Bronx properties may have several exterior materials
              requiring attention at the same time.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>
                brownstone and limestone restoration, facade repair and stoop
                restoration
              </strong>
              , with restoration methods selected according to the existing
              material and condition.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Brick Pointing & Masonry Repair
            </h2>

            <p className={paragraphClass}>
              Deteriorated mortar can leave older masonry more exposed to
              moisture and weather.
            </p>

            <p className={paragraphClass}>
              Our <strong>Bronx brick pointing and repointing services</strong>{" "}
              address damaged mortar joints and form part of broader masonry
              restoration when required. Infinity Construction NYC has also
              completed dedicated brick-pointing work using specialized
              preparation equipment.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Waterproofing & Stucco</h2>

            <p className={paragraphClass}>
              Water intrusion and masonry deterioration can often occur
              together.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>waterproofing and stucco services in the Bronx</strong>{" "}
              for walls, parapets and appropriate masonry surfaces.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Restoration</h2>

            <p className={paragraphClass}>
              Roof deterioration can contribute to water problems throughout a
              building.
            </p>

            <p className={paragraphClass}>
              Our <strong>Bronx roof restoration services</strong> address
              damaged roofing materials, penetrations and water-related issues
              and can be considered alongside other exterior repairs.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Fire Escape & Metal Restoration
            </h2>

            <p className={paragraphClass}>
              Fire escapes, railings and fences are important exterior
              components on many older NYC properties.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>fire escape and metal restoration in the Bronx</strong>,
              including repair and restoration of exterior metal elements.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Concrete & Stone Work</h2>

            <p className={paragraphClass}>
              Exterior concrete and stone can deteriorate around stoops,
              sidewalks, driveways, patios and entrances.
            </p>

            <p className={paragraphClass}>
              Our <strong>concrete and stone work</strong> addresses these
              exterior areas and can be incorporated into a larger masonry or
              restoration project.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Painting & Masonry</h2>

            <p className={paragraphClass}>
              Infinity Construction NYC also provides{" "}
              <strong>painting and masonry services</strong>, including plaster
              and paint applications, surface preparation and finish coats.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Bronx Restoration for Older Properties
            </h2>

            <p className={paragraphClass}>
              For an older Bronx building, the visible problem may not be the
              only issue.
            </p>

            <p className={paragraphClass}>
              A deteriorated facade may need masonry and waterproofing work. A
              damaged stoop may involve stone, concrete or brownstone
              restoration. An aging exterior can also require attention to fire
              escapes, railings or other metal components.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC evaluates the property and recommends
              the work appropriate to the project rather than applying the same
              restoration package to every building.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Bronx Restoration FAQs</h2>

            <div className="space-y-6">
              <div>
                <h3 className={subheadingClass}>
                  Do you restore Bronx brownstones?
                </h3>

                <p className={paragraphClass}>
                  Yes. Brownstone restoration, stoop restoration and related
                  masonry work are part of the company&apos;s services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you provide brick pointing in the Bronx?
                </h3>

                <p className={paragraphClass}>
                  Yes. Brick pointing and repointing are available for
                  deteriorated masonry.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Can you restore a brownstone stoop?
                </h3>

                <p className={paragraphClass}>
                  Yes. Infinity Construction NYC&apos;s project portfolio
                  includes brownstone stoop renovation.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>Do you repair fire escapes?</h3>

                <p className={paragraphClass}>
                  Yes. Fire escape and metal restoration are among the
                  company&apos;s exterior restoration services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  What if my property is in a historic district?
                </h3>

                <p className={paragraphClass}>
                  The NYC Landmarks Preservation Commission should be consulted
                  to determine whether the property is designated and whether
                  proposed exterior work requires approval.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Bronx Construction & Restoration
            </h2>

            <p className={paragraphClass}>
              From historic masonry and brownstone stoops to roof, waterproofing
              and exterior metal concerns, Infinity Construction NYC provides
              restoration services tailored to the condition of your Bronx
              property.
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
                to discuss your Bronx project.
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

export default ConstructionRestorationBronx;
