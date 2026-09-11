"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MapPin,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Building2, text: "Brownstone stoop restoration and repair" },
  { icon: Building2, text: "Limestone stoop restoration and repair" },
  { icon: Wrench, text: "Damaged and deteriorated surface repair" },
  { icon: Wrench, text: "Brownstone step and stair repair" },
  { icon: CheckCircle2, text: "Tread and riser restoration" },
  { icon: Wrench, text: "Brownstone resurfacing" },
  { icon: Building2, text: "Masonry repair and reconstruction" },
  { icon: ShieldCheck, text: "Historic stoop restoration" },
  { icon: CheckCircle2, text: "Repairs related to water and moisture deterioration" },
];

const locations = [
  {
    city: "Brooklyn",
    icon: Building2,
    content:
      "Brownstone stoop repair, restoration, resurfacing, masonry repair, and related exterior restoration.",
  },
  {
    city: "Manhattan",
    icon: MapPin,
    content:
      "Brownstone and limestone stoop restoration, step repair, masonry work, and historic exterior restoration.",
  },
  {
    city: "Queens",
    icon: MapPin,
    content:
      "Stoop repair, masonry restoration, resurfacing, and related exterior construction services.",
  },
  {
    city: "The Bronx",
    icon: MapPin,
    content:
      "Brownstone and limestone stoop repair, masonry restoration, step repair, and exterior restoration.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Property Assessment",
    content:
      "We review the condition of the stoop and look for visible signs of damage, deterioration, cracks, worn surfaces, masonry problems, and other areas requiring attention.",
    icon: Search,
  },
  {
    number: "2",
    title: "Identify the Problem",
    content:
      "We determine what may be contributing to the deterioration, such as damaged masonry, failing surfaces, cracks, moisture, or other visible issues.",
    icon: ClipboardCheck,
  },
  {
    number: "3",
    title: "Recommend the Work",
    content:
      "We explain the recommended scope of work based on the actual condition of the stoop, from targeted repairs and resurfacing to partial reconstruction or more extensive restoration.",
    icon: FileCheck2,
  },
  {
    number: "4",
    title: "Plan the Restoration",
    content:
      "The restoration approach is planned around the condition of the property while considering the appearance and architectural character of the building.",
    icon: ShieldCheck,
  },
  {
    number: "5",
    title: "Complete the Restoration",
    content:
      "The required repair, resurfacing, masonry work, reconstruction, or restoration is completed according to the agreed scope of work.",
    icon: Wrench,
  },
];

const reasons = [
  {
    icon: Building2,
    text: "Brownstone and limestone restoration experience",
  },
  {
    icon: Wrench,
    text: "Stoop repair and resurfacing",
  },
  {
    icon: ShieldCheck,
    text: "Historic restoration services",
  },
  {
    icon: Building2,
    text: "Masonry and exterior restoration",
  },
  {
    icon: CheckCircle2,
    text: "Licensed and insured construction services",
  },
  {
    icon: MapPin,
    text: "Service throughout Brooklyn, Manhattan, Queens, and The Bronx",
  },
];

const faqs = [
  {
    question: "How much does brownstone stoop restoration cost in NYC?",
    answer:
      "The cost depends on the size and condition of the stoop, the extent of deterioration, the materials involved, and whether the project requires repair, resurfacing, partial reconstruction, or full restoration. A project-specific assessment is the best way to determine the cost.",
  },
  {
    question: "Can a damaged brownstone stoop be repaired?",
    answer:
      "Yes. Many damaged stoops can be repaired or resurfaced without completely replacing the existing structure. The appropriate solution depends on the extent of the deterioration.",
  },
  {
    question: "Do you restore limestone stoops?",
    answer:
      "Yes. Infinity Construction NYC provides both brownstone and limestone stoop restoration and repair.",
  },
  {
    question: "Do you repair individual steps and treads?",
    answer:
      "Yes. Stoop restoration can include damaged steps, treads, risers, masonry surfaces, and other deteriorated areas.",
  },
  {
    question: "Do you restore historic stoops?",
    answer:
      "Yes. We provide restoration services for historic and landmark properties. Specific NYC preservation and building requirements may apply depending on the property and scope of work.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide stoop restoration and repair throughout Brooklyn, Manhattan, Queens, and The Bronx.",
  },
];

const BrownstoneStoopRestoration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="w-full">
      {/* INTRO */}
      <section className="bg-white px-4 sm:px-6 sm:py-10 md:px-8 md:py-4 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-primary sm:w-10"
              />
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Infinity Construction NYC
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-left text-tertiary md:py-3">
              Brownstone Stoop Renovation &amp; Restoration NYC
            </h1>

            <p className="max-w-2xl text-lg leading-7 text-slate-700 dark:text-slate-300">
              Call 347-939-5779 for Brownstone Stoop Renovation Experts in NYC.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+13479395779"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Call 347-939-5779
              </a>

              <a
                href="#request-quote"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-white"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STOOP RESTORATION */}
      <section
        className="relative overflow-hidden bg-gray-100 px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="stoop-restoration-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-primary/5 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mx-auto grid max-w-5xl items-center gap-7 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink-0 bg-primary"
                />
                <p className="text-xl font-semibold text-primary">
                  Stoop Restoration
                </p>
              </div>

              <h2
                id="stoop-restoration-heading"
                className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
              >
                Stoop Restoration
              </h2>

              <div className="mt-4 space-y-3 text-lg leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Infinity Construction NYC provides{" "}
                  <strong>
                    restoration and repair of brownstone and limestone stoops
                  </strong>
                  , including <strong>damaged and deteriorated surfaces</strong>
                  . We repair and restore steps, treads, risers, masonry, and
                  other worn areas while preserving the character of the
                  property.
                </p>

                <p>
                  Whether your stoop has surface damage, cracks, worn stone, or
                  more extensive deterioration, we evaluate its condition and
                  recommend the right approach—from targeted repairs and
                  resurfacing to partial reconstruction or more extensive
                  restoration.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/portfolio/before-after.webp"
                  alt="Brownstone stoop before and after restoration"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="bg-white px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="stoop-services-heading"
      >
        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-primary"
              />
              <p className="text-xl font-semibold text-primary">Our Services</p>
            </div>

            <h2
              id="stoop-services-heading"
              className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
            >
              Brownstone &amp; Limestone Stoop Restoration Services
            </h2>

            <p className="mt-3 text-lg leading-7 text-slate-700 dark:text-slate-300">
              Our stoop restoration services include:
            </p>
          </header>

          <div className="mx-auto mt-5 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={index}
                  className={`group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 sm:gap-4 ${
                    index === services.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white dark:bg-primary/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <p className="pt-0.5 text-lg leading-7 text-slate-800 dark:text-slate-200">
                    {service.text}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-4 max-w-5xl border-t border-slate-200 pt-4 text-lg leading-7 text-slate-700 dark:border-slate-700 dark:text-slate-300">
            The goal is to restore the stoop properly while maintaining the
            appearance and architectural character of the building.
          </p>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        className="bg-gray-100 px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="nyc-service-areas-heading"
      >
        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-primary"
              />
              <p className="text-xl font-semibold text-primary">
                NYC Service Areas
              </p>
            </div>

            <h2
              id="nyc-service-areas-heading"
              className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
            >
              Stoop Restoration Throughout NYC
            </h2>

            <div className="mt-3 space-y-2 text-lg leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Infinity Construction NYC provides{" "}
                <strong>
                  brownstone and limestone stoop restoration throughout
                  Brooklyn, Manhattan, Queens, and The Bronx
                </strong>
                .
              </p>

              <p>
                We work with residential and commercial properties and can help
                with both traditional and historic stoop restoration projects.
              </p>
            </div>
          </header>

          <div className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4">
            {locations.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.city}
                  className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-5"
                >
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-primary/10 sm:h-20 sm:w-20"
                  />

                  <div className="relative">
                    <div className="mb-2 flex items-center gap-2">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
                        aria-hidden="true"
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <h3 className="text-lg font-medium text-slate-900 dark:text-white sm:text-xl">
                        {area.city}
                      </h3>
                    </div>

                    <p className="text-base leading-6 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-7">
                      {area.content}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEEDS RESTORATION */}
      <section
        className="bg-white px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="needs-restoration-heading"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <header>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 shrink-0 bg-primary"
                />
                <p className="text-xl font-semibold text-primary">
                  Know the Signs
                </p>
              </div>

              <h2
                id="needs-restoration-heading"
                className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
              >
                How Do You Know If a Stoop Needs Restoration?
              </h2>
            </header>

            <div className="space-y-3 text-lg leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Cracks, chipped or crumbling surfaces, damaged steps, loose
                masonry, uneven areas, and visible deterioration can all
                indicate that a stoop needs attention.
              </p>

              <p>
                Not every damaged stoop needs complete replacement. Depending on
                the condition, restoration may involve repairing specific areas,
                resurfacing the existing material, rebuilding damaged sections,
                or completing a more extensive reconstruction.
              </p>

              <p>
                A proper assessment helps determine the most practical solution
                for the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESTORATION PROCESS */}
      <section
        className="bg-gray-100 px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="restoration-process-heading"
      >
        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-primary"
              />
              <p className="text-xl font-semibold text-primary">Our Process</p>
            </div>

            <h2
              id="restoration-process-heading"
              className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
            >
              How Our Stoop Restoration Process Works
            </h2>
          </header>

          <ol className="mx-auto mt-5 max-w-5xl space-y-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-primary"
                  />

                  <div className="flex gap-3 p-4 sm:gap-4 sm:p-5">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Step {step.number}
                      </p>

                      <h3 className="mt-0.5 text-lg font-medium text-slate-900 dark:text-white md:text-xl">
                        {step.title}
                      </h3>

                      <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="bg-white px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="why-choose-us-heading"
      >
        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-primary"
              />
              <p className="text-xl font-semibold text-primary">
                Why Choose Us
              </p>
            </div>

            <h2
              id="why-choose-us-heading"
              className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
            >
              Why Choose Infinity Construction NYC?
            </h2>
          </header>

          <div className="mx-auto mt-5 max-w-5xl rounded-2xl border border-slate-200 bg-gray-100 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
            <p className="text-lg leading-7 text-slate-800 dark:text-slate-300">
              Restoring a New York City stoop requires attention to both the
              condition of the masonry and the character of the building.
            </p>

            <p className="mt-3 text-lg leading-7 text-slate-800 dark:text-slate-300">
              Infinity Construction NYC provides:
            </p>

            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <li
                    key={index}
                    className={`flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/40 ${
                      index === reasons.length - 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <p className="pt-0.5 text-lg leading-7 text-slate-800 dark:text-slate-200">
                      {reason.text}
                    </p>
                  </li>
                );
              })}
            </ul>

            <p className="mt-4 border-t border-slate-200 pt-4 text-lg leading-7 text-slate-800 dark:border-slate-700 dark:text-slate-300">
              We focus on the actual condition of the stoop and recommend work
              based on what the property needs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-gray-100 px-4 py-9 dark:bg-slate-950 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
        aria-labelledby="stoop-faq-heading"
      >
        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-primary"
              />
              <p className="text-xl font-semibold text-primary">
                Frequently Asked Questions
              </p>
            </div>

            <h2
              id="stoop-faq-heading"
              className="mt-2 text-3xl font-forum text-black dark:text-white md:text-4xl"
            >
              Brownstone Stoop Restoration FAQ
            </h2>
          </header>

          <div className="mx-auto mt-5 max-w-5xl space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-slate-50 dark:hover:bg-slate-800 sm:px-5"
                  >
                    <span className="text-lg font-medium leading-7 text-slate-900 dark:text-white">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 px-4 pb-4 pt-3 dark:border-slate-800 sm:px-5">
                      <p className="text-lg leading-7 text-slate-700 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="request-quote"
        className="bg-white px-4 py-9 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-forum leading-tight text-slate-900 md:text-4xl">
            Restore Your Brownstone or Limestone Stoop
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-slate-700">
            If your stoop is cracked, worn, damaged, or deteriorating,
            don&apos;t wait for the problem to become more extensive.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-lg leading-7 text-slate-700">
            Contact Infinity Construction NYC at 347-939-5779 to discuss your
            stoop restoration project or request an estimate.
          </p>

          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+13479395779"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Call 347-939-5779
            </a>

            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
            >
              Request an Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrownstoneStoopRestoration;