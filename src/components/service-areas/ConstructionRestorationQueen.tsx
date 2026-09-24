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

const ConstructionRestorationQueen = () => {
  return (
    <>
      <main className="border-b p-4 dark:bg-slate-950">
        <article className="container mx-auto max-w-5xl space-y-10 pb-14 pt-24 sm:pt-36">
          <header className="border-b border-slate-300 pb-8 dark:border-slate-700">
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-accent px-6 py-10 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:px-10 sm:py-12">
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mt-2 mb-6 text-center text-3xl font-forum text-black dark:text-white md:text-4xl">
                  Construction & Restoration Services in Queens, NY
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
                    src="/historical-landmark/construction-manhattan.png"
                    alt="Construction & Restoration Services in Queens, NY"
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className={paragraphClass}>
                  Queens has a particularly varied mix of residential and
                  commercial properties. Brick homes, multi-family buildings,
                  masonry properties and older neighborhood architecture can all
                  require different types of exterior maintenance.
                </p>

                <p className={paragraphClass}>
                  Infinity Construction NYC provides{" "}
                  <strong>
                    construction and restoration services throughout Queens
                  </strong>
                  , including masonry, brick pointing, waterproofing, roofing,
                  stucco, fire escape restoration, concrete, stone and painting.
                </p>
              </div>
            </div>
          </header>

          <section>
            <h2 className={sectionHeadingClass}>
              Masonry & Brick Restoration in Queens
            </h2>

            <p className={paragraphClass}>
              For Queens property owners, masonry maintenance often starts with
              the visible signs: deteriorated mortar, damaged brick, cracking or
              moisture-related staining.
            </p>

            <p className={paragraphClass}>
              Our{" "}
              <strong>brick pointing and masonry restoration services</strong>{" "}
              address deteriorated mortar and exterior masonry based on the
              condition of the existing property.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Waterproofing & Stucco</h2>

            <p className={paragraphClass}>
              Moisture can gradually affect masonry and finished exterior
              surfaces.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>waterproofing and stucco services in Queens</strong> for
              walls, parapets and other appropriate masonry areas.
            </p>

            <p className={paragraphClass}>
              Where water intrusion is associated with masonry deterioration,
              the related exterior conditions can be evaluated together.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Restoration in Queens</h2>

            <p className={paragraphClass}>
              Queens homes and commercial properties also need reliable
              protection from roof leaks and deteriorated roofing materials.
            </p>

            <p className={paragraphClass}>
              Our <strong>roof restoration services</strong> address damaged
              roofing areas, penetrations and water-related problems.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Fire Escape & Metal Restoration
            </h2>

            <p className={paragraphClass}>
              For properties with exterior fire escapes, railings, fences or
              other metalwork, years of weather exposure can lead to visible
              deterioration.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC provides{" "}
              <strong>fire escape and metal restoration in Queens</strong>,
              including restoration of exterior metal elements.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Concrete & Stone Work</h2>

            <p className={paragraphClass}>
              Sidewalks, driveways, patios and exterior entrances can all
              require concrete or stone repairs over time.
            </p>

            <p className={paragraphClass}>
              Our <strong>concrete and stone services</strong> cover these
              exterior applications and can be part of a larger restoration
              project.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Painting & Masonry</h2>

            <p className={paragraphClass}>
              We also provide <strong>painting and masonry services</strong>,
              including plaster and paint applications, surface preparation,
              base and finish coats, and water-resistant materials where
              appropriate.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Queens Exterior Restoration for Different Property Types
            </h2>

            <p className={paragraphClass}>
              Unlike a location page built around one architectural style,
              Queens requires a broader residential and commercial perspective.
            </p>

            <p className={paragraphClass}>
              Infinity Construction NYC works with different property types and
              can address individual exterior problems or related restoration
              needs as part of a larger project.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Queens Restoration FAQs</h2>

            <div className="space-y-6">
              <div>
                <h3 className={subheadingClass}>
                  Do you provide brick pointing in Queens?
                </h3>

                <p className={paragraphClass}>
                  Yes. Brick pointing and repointing are part of the
                  company&apos;s masonry services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Can you waterproof a masonry building?
                </h3>

                <p className={paragraphClass}>
                  Yes. Infinity Construction NYC provides exterior waterproofing
                  and stucco work for appropriate masonry surfaces.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you restore fire escapes in Queens?
                </h3>

                <p className={paragraphClass}>
                  Yes. Fire escape and exterior metal restoration are among the
                  company&apos;s services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Do you work on residential properties?
                </h3>

                <p className={paragraphClass}>
                  Yes. Infinity Construction NYC provides residential as well as
                  commercial restoration and exterior construction services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>
                  Can you handle several exterior repairs?
                </h3>

                <p className={paragraphClass}>
                  Yes. Depending on the property, masonry, waterproofing,
                  roofing, concrete, stone, metal and painting work can be
                  coordinated.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Queens Construction & Restoration
            </h2>

            <p className={paragraphClass}>
              From brick masonry and roof problems to concrete, stone and
              exterior metalwork, Infinity Construction NYC provides restoration
              services based on the actual needs of your Queens property.
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
                to discuss your Queens project.
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

export default ConstructionRestorationQueen;