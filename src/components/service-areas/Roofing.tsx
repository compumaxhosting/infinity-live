import Image from "next/image";
import Link from "next/link";
import ServiceLinks from "../ServiceLinks";
import { Globe, Mail, Phone } from "lucide-react";

const contactPhone = "347 939 5779";
const contactPhoneHref = "tel:+13479395779";

const sectionHeadingClass =
  "mb-2 text-xl text-orange-600 dark:text-orange-400 sm:text-2xl";

const subheadingClass =
  "text-lg text-slate-900 dark:text-white sm:text-xl";

const paragraphClass =
  "mb-1 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg text-justify";

const listClass =
  "list-disc pl-6 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg";

const Roofing = () => {
  return (
    <>
      <main className="border-b p-4 dark:bg-slate-950">
        <article className="container mx-auto max-w-5xl space-y-4 pb-6 pt-24 sm:pt-36">
          <header className="border-b border-slate-300 pb-4 dark:border-slate-700">
            <div className="relative mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-accent px-6 py-6 shadow-md dark:border-slate-700 dark:bg-slate-900 sm:px-10 sm:py-8">
              <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="text-3xl md:text-4xl text-black dark:text-white font-forum sm:px-20 py-4 pb-0 mb-3 mt-1 font-forum">
                  Roofing Services in NYC
                </h1>

                <p className="mx-auto mb-0 pb-2 max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
                  Professional Roofing Services for Brooklyn, Manhattan, Queens
                  &amp; The Bronx
                </p>

                <div className="border-t border-orange-100 pt-2 dark:border-gray-700">
                  <p className="mb-3 text-xl font-bold text-orange-600 dark:text-orange-500 sm:text-2xl">
                    Call{" "}
                    <a
                      href="tel:3479395779"
                      className="font-extrabold underline underline-offset-4 transition-colors duration-300 hover:text-orange-700 dark:hover:text-orange-400"
                    >
                      347 939 5779
                    </a>{" "}
                    for Professional Roofing Services in NYC.
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

            <div className="flex flex-col gap-4 pb-2 lg:flex-row lg:items-center lg:gap-5">
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-700">
                  <Image
                    src="/roofing/roofing.webp"
                    alt="Roofing Services in NYC"
                    width={1600}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <p className={paragraphClass}>
                  A strong, reliable roof is essential for protecting your
                  property from rain, snow, wind, heat, and other weather
                  conditions. Infinity Construction NYC provides roofing
                  services throughout Brooklyn, Manhattan, Queens and The Bronx,
                  serving both residential and commercial properties.
                </p>

                <p className={paragraphClass}>
                  Our roofing services include roof repair, roof replacement,
                  roof installation, flat roof installation, roof restoration,
                  weatherproofing and emergency roof repair. We also provide
                  full roof reconstruction when severe deterioration requires
                  more extensive work.
                </p>
              </div>
            </div>

            <p className={paragraphClass}>
              If your roof has a leak, damaged materials, drainage problems, or
              signs of deterioration, contact Infinity Construction NYC to
              discuss your roofing needs.
            </p>

            <p className="mb-0 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              <strong>
                Call{" "}
                <a
                  href="tel:3479395779"
                  className="text-orange-600 underline hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-600"
                >
                  347-939-5779
                </a>{" "}
                or request a quote today.
              </strong>
            </p>
          </header>

          <section>
            <h2 className={sectionHeadingClass}>NYC Roofing Services</h2>
            <p className={paragraphClass}>
              Infinity Construction NYC provides comprehensive roofing solutions
              for residential and commercial properties throughout New York
              City.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Repair</h2>
            <p className={paragraphClass}>
              Roof damage can lead to water infiltration and further
              deterioration when problems are not addressed. Our roof repair
              services are designed to address damaged roofing materials, leaks,
              penetrations and other roofing problems.
            </p>
            <p className={paragraphClass}>
              We assess the condition of the roof and determine the appropriate
              repair work based on the existing roofing system and the extent of
              the damage.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Replacement</h2>
            <p className={paragraphClass}>
              When a roof is severely deteriorated or can no longer be
              effectively restored, roof replacement may be necessary. Infinity
              Construction NYC provides roof replacement services for properties
              throughout NYC.
            </p>
            <p className={paragraphClass}>
              The appropriate replacement approach depends on the existing roof,
              building requirements, roof condition and project scope.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Installation</h2>
            <p className={paragraphClass}>
              Infinity Construction NYC provides roof installation services for
              residential and commercial properties. Proper installation is
              important for creating a roofing system that can protect the
              building against weather exposure and water infiltration.
            </p>
            <p className={paragraphClass}>
              Our roofing services are available throughout Brooklyn, Manhattan,
              Queens and The Bronx.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Flat Roof Installation</h2>
            <p className={paragraphClass}>
              Flat and low-slope roofs require appropriate materials, drainage
              and waterproofing to help manage water and weather exposure.
            </p>
            <p className={paragraphClass}>
              Infinity Construction NYC provides flat roof installation services
              in NYC for residential and commercial properties.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Restoration</h2>
            <p className={paragraphClass}>
              Roof restoration can help address deterioration and improve the
              condition of an existing roofing system when restoration is
              appropriate.
            </p>
            <p className={paragraphClass}>
              Our roof restoration services include replacing damaged roofing
              materials, sealing penetrations, installing waterproof membranes
              and improving drainage systems.
            </p>
            <p className={paragraphClass}>
              When deterioration is severe, full roof reconstruction may be
              required.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Roof Weatherproofing</h2>
            <p className={paragraphClass}>
              Weatherproofing helps protect roofing systems against water
              infiltration and changing weather conditions.
            </p>
            <p className={paragraphClass}>
              Infinity Construction NYC provides roof weatherproofing services
              designed to address vulnerable areas of an existing roofing system
              and improve protection against moisture and weather exposure.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Emergency Roof Repair</h2>
            <p className={paragraphClass}>
              Roof problems can require prompt attention when water is entering
              a property or significant damage has occurred. Infinity
              Construction NYC provides emergency roof repair services for
              urgent roofing concerns.
            </p>
            <p className={paragraphClass}>
              If you are experiencing an active roof leak or another urgent
              roofing problem, call{" "}
              <a
                href="tel:3479395779"
                className="font-bold text-orange-600 underline hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-600"
              >
                347-939-5779
              </a>{" "}
              to discuss the situation.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Residential Roofing Services
            </h2>
            <p className={paragraphClass}>
              Infinity Construction NYC provides residential roofing services
              throughout Brooklyn, Manhattan, Queens and The Bronx.
            </p>
            <p className={paragraphClass}>
              Residential roofing needs can include roof repairs, replacement,
              installation, flat roof work, restoration and weatherproofing. The
              appropriate service depends on the type and condition of the
              existing roof and the property&apos;s specific requirements.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Commercial Roofing Services</h2>
            <p className={paragraphClass}>
              Commercial buildings have roofing requirements that can vary
              according to building size, roof design, existing materials,
              drainage and the condition of the roofing system.
            </p>
            <p className={paragraphClass}>
              Infinity Construction NYC provides commercial roofing services in
              NYC, including roof repair, roof installation, restoration,
              weatherproofing and replacement.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Roof Restoration &amp; Weatherproofing
            </h2>
            <p className={paragraphClass}>
              Roof restoration and weatherproofing can address existing roofing
              problems without automatically assuming that complete replacement
              is required.
            </p>
            <p className={paragraphClass}>
              Infinity Construction NYC&apos;s restoration services can include:
            </p>
            <ul className={listClass}>
              <li>Replacing damaged roofing materials</li>
              <li>Sealing roof penetrations</li>
              <li>Installing waterproof membranes</li>
              <li>Improving drainage systems</li>
              <li>Addressing water infiltration</li>
              <li>Weatherproofing vulnerable roofing areas</li>
            </ul>
            <p className={paragraphClass}>
              When the existing roof is severely deteriorated, full roof
              reconstruction may be more appropriate.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              How Do You Know If Your Roof Needs Repair or Replacement?
            </h2>
            <p className={paragraphClass}>
              The appropriate roofing solution depends on the condition of the
              existing roof.
            </p>
            <p className={paragraphClass}>
              Minor or localized damage may be addressed through roof repair. A
              roof with broader deterioration may require restoration or
              replacement. When deterioration is severe, full roof
              reconstruction may be necessary.
            </p>
            <p className={paragraphClass}>
              A professional assessment can help determine the condition of the
              roofing system and the appropriate scope of work.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Common Roofing Problems</h2>
            <p className={paragraphClass}>
              Property owners may need professional roofing services when they
              notice:
            </p>
            <ul className={listClass}>
              <li>Roof leaks</li>
              <li>Damaged roofing materials</li>
              <li>Water infiltration</li>
              <li>Deteriorated roofing areas</li>
              <li>Problems around roof penetrations</li>
              <li>Drainage problems</li>
              <li>Weather-related roof damage</li>
              <li>Deterioration requiring restoration</li>
              <li>A roof that requires replacement</li>
              <li>Problems with an existing flat roof</li>
            </ul>
            <p className={paragraphClass}>
              Addressing roofing problems early can help property owners
              understand the condition of the roof and determine what type of
              work is required.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Roofing Services Throughout NYC
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className={subheadingClass}>Roofing in Brooklyn</h3>
                <p className={paragraphClass}>
                  Infinity Construction NYC provides roof repair, roof
                  replacement, roof installation, flat roof installation,
                  restoration and weatherproofing services in Brooklyn.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>Roofing in Manhattan</h3>
                <p className={paragraphClass}>
                  We provide residential and commercial roofing services
                  throughout Manhattan, including roof repair, roof
                  installation, restoration, weatherproofing and replacement.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>Roofing in Queens</h3>
                <p className={paragraphClass}>
                  Property owners in Queens can contact Infinity Construction
                  NYC for roofing repair, installation, restoration, replacement
                  and weatherproofing services.
                </p>
              </div>

              <div>
                <h3 className={subheadingClass}>Roofing in The Bronx</h3>
                <p className={paragraphClass}>
                  Infinity Construction NYC provides roofing services throughout
                  The Bronx, including repair, replacement, installation,
                  restoration and weatherproofing.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>
              Why Choose Infinity Construction NYC?
            </h2>
            <p className={paragraphClass}>
              Infinity Construction NYC provides roofing and exterior
              construction services throughout New York City.
            </p>
            <p className={paragraphClass}>
              In addition to roofing, the company provides related exterior
              construction services including:
            </p>
            <ul className={listClass}>
              <li>Brownstone and limestone restoration</li>
              <li>Facade restoration</li>
              <li>Brick pointing and repointing</li>
              <li>Waterproofing and stucco</li>
              <li>Fire escape and metal restoration</li>
              <li>Concrete and stone work</li>
              <li>Painting and masonry</li>
              <li>Construction and restoration</li>
            </ul>
            <p className={paragraphClass}>
              Infinity Construction NYC is licensed and insured and serves
              residential and commercial property owners throughout NYC.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Get Roofing Services in NYC</h2>
            <p className={paragraphClass}>
              Whether you need roof repair, roof replacement, flat roof
              installation, roof restoration, weatherproofing or emergency roof
              repair, Infinity Construction NYC can discuss your roofing
              requirements and the appropriate scope of work.
            </p>
            <p className={paragraphClass}>
              Serving Brooklyn, Manhattan, Queens and The Bronx.
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
                to discuss your roofing project or request a quote.
              </strong>
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>Frequently Asked Questions</h2>

            <div className="space-y-3">
              <details>
                <summary className={subheadingClass}>
                  What roofing services does Infinity Construction NYC provide?
                </summary>
                <p className={paragraphClass}>
                  Infinity Construction NYC provides roof repair, roof
                  replacement, roof installation, flat roof installation, roof
                  restoration, weatherproofing and emergency roof repair. The
                  company also provides full roof reconstruction when severe
                  deterioration requires extensive work.
                </p>
              </details>

              <details>
                <summary className={subheadingClass}>
                  Does Infinity Construction NYC serve Brooklyn, Manhattan,
                  Queens and The Bronx?
                </summary>
                <p className={paragraphClass}>
                  Yes. Infinity Construction NYC provides roofing and exterior
                  construction services throughout Brooklyn, Manhattan, Queens
                  and The Bronx. Roofing services are available for both
                  residential and commercial properties.
                </p>
              </details>
              <details>
                <summary className={subheadingClass}>
                  Does Infinity Construction NYC provide roof replacement?
                </summary>
                <p className={paragraphClass}>
                  Yes. Roof replacement is included among the roofing services
                  offered by Infinity Construction NYC. Replacement may be
                  appropriate when the existing roofing system is severely
                  deteriorated or when restoration is no longer suitable.
                </p>
              </details>
              <details>
                <summary className={subheadingClass}>
                  Does Infinity Construction NYC install flat roofs?
                </summary>
                <p className={paragraphClass}>
                  Yes. The company provides flat roof installation services for
                  properties in NYC. Flat roofing requires appropriate
                  installation, waterproofing and drainage considerations based
                  on the building and roofing system.
                </p>
              </details>
              <details>
                <summary className={subheadingClass}>
                  What is included in roof restoration?
                </summary>
                <p className={paragraphClass}>
                  Roof restoration services can include replacing damaged
                  roofing materials, sealing penetrations, installing waterproof
                  membranes and improving drainage systems. The appropriate
                  restoration work depends on the condition of the existing
                  roofing system.
                </p>
              </details>
              <details>
                <summary className={subheadingClass}>
                  Does Infinity Construction NYC provide emergency roof repair?
                </summary>
                <p className={paragraphClass}>
                  Yes. Emergency roof repair is listed among the company&apos;s
                  roofing services. Property owners experiencing an urgent
                  roofing problem can call{" "}
                  <a
                    href="tel:3479395779"
                    className="font-bold text-orange-600 underline hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-600"
                  >
                    347-939-5779
                  </a>{" "}
                  to discuss their situation.
                </p>
              </details>
              <details>
                <summary className={subheadingClass}>
                  Should I repair, restore or replace my roof?
                </summary>
                <p className={paragraphClass}>
                  The appropriate option depends on the condition and extent of
                  deterioration. Localized problems may require repair, while
                  broader deterioration may call for restoration or replacement.
                  Severe deterioration may require full roof reconstruction. A
                  professional assessment can help determine the appropriate
                  approach.
                </p>
              </details>
              <details>
                <summary className={subheadingClass}>
                  How can I request roofing service in NYC?
                </summary>
                <p className={paragraphClass}>
                  You can contact Infinity Construction NYC by calling{" "}
                  <a
                    href="tel:3479395779"
                    className="font-bold text-orange-600 underline hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-600"
                  >
                    347-939-5779
                  </a>{" "}
                  or by using the website&apos;s Request a Quote option. The
                  company provides roofing services throughout Brooklyn,
                  Manhattan, Queens and The Bronx.
                </p>
              </details>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClass}>NYC Roofing Services</h2>
            <p className={paragraphClass}>
              Infinity Construction NYC provides professional roofing services
              for residential and commercial properties throughout New York
              City. From roof repair and replacement to flat roof installation,
              restoration, weatherproofing and emergency repairs, our services
              are based on the condition and requirements of the existing
              roofing system.
            </p>
            <p className="mb-0 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
              <strong>
                Call{" "}
                <a
                  href="tel:3479395779"
                  className="text-orange-600 underline hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-600"
                >
                  347-939-5779
                </a>{" "}
                to discuss your NYC roofing project or request a quote.
              </strong>
            </p>
          </section>
          <section className="mt-12 mb-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl sm:text-2xl mb-4 text-orange-600">
                Contact Us Today
              </p>

              <p className="mb-3 text-base sm:text-lg text-gray-700">
                Your shield against the elements starts with a professional roof
                assessment and weatherproofing plan.
              </p>

              <div className="flex flex-col items-center gap-3 mb-6 text-base sm:text-lg">
                <a
                  href={contactPhoneHref}
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Phone size={20} />
                  <span className="font-semibold">{contactPhone}</span>
                </a>

                <a
                  href="mailto:infinityconstructionnyc@gmail.com"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Mail size={20} />
                  <span>infinityconstructionnyc@gmail.com</span>
                </a>

                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-primary transition"
                  target="_blank"
                >
                  <Globe size={20} />
                  <span>www.infinityconstructionnyc.com</span>
                </Link>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 mb-4"
              >
                Request a Quote
              </Link>

              <p className="mt-2 font-semibold text-gray-800">
                Infinity Construction NYC - Your Shield Against the Elements.
              </p>
            </div>
          </section>

          <ServiceLinks />
        </article>
      </main>

    </>
  );
};

export default Roofing;