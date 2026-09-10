"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I know if my brownstone needs repointing?",
      answer:
        "Look for signs such as cracked, loose, missing, or deteriorated mortar between bricks or masonry. Water getting through the exterior, damaged masonry, or areas where previous repairs are failing can also be warning signs. An inspection can help determine whether repointing is the right solution or if the property needs other masonry or facade repairs.",
    },
    {
      question:
        "Does Infinity Construction NYC handle Landmark Preservation Commission (LPC) permits?",
      answer:
        "It depends on the property and the work being planned. If a building is located in a designated historic district or is an individual landmark, certain exterior changes may require approval from the New York City Landmarks Preservation Commission. We can help you understand the restoration scope and identify when LPC requirements may apply. Where professional filing or approval services are required, the appropriate licensed professional can be involved.",
    },
    {
      question: "What areas does Infinity Construction NYC serve?",
      answer:
        "We serve property owners throughout New York City, including Brooklyn, Manhattan, Queens, and The Bronx. Our services include brownstone restoration, facade repair, masonry, brick pointing, waterproofing, stoop restoration, roofing, and other exterior restoration work. Project availability can vary depending on the location and scope of the work.",
    },
    {
      question: "What does brownstone restoration include?",
      answer:
        "Brownstone restoration can involve repairing deteriorated stone, cracks, damaged surfaces, architectural details, and other exterior areas affected by age, weather, or water. Depending on the property, restoration may also include masonry repair, repointing, waterproofing, and stoop restoration.",
    },
    {
      question: "Do you restore limestone and brownstone stoops?",
      answer:
        "Yes. We provide restoration and repair services for brownstone and limestone stoops, including damaged surfaces, worn areas, cracks, and other forms of deterioration. The appropriate repair method depends on the condition and material of the existing stoop.",
    },
    {
      question: "Do you provide brick pointing and masonry repair?",
      answer:
        "Yes. We provide brick pointing and repointing, along with masonry repair for deteriorated mortar joints and exterior masonry. The work begins with evaluating the condition of the existing masonry so the appropriate repair can be recommended.",
    },
    {
      question:
        "Can you help with water damage or leaks in a masonry building?",
      answer:
        "Yes. Water intrusion can come from several sources, including deteriorated mortar, cracks, roof conditions, joints, or other exterior openings. We provide waterproofing and exterior restoration services to address masonry-related moisture problems and help protect the building from further deterioration.",
    },
    {
      question: "How can I get started with a restoration project?",
      answer:
        "Contact Infinity Construction NYC and tell us about the property, its location, and the exterior problem you're seeing. If possible, send photographs of the affected area. This helps us understand the project before determining the appropriate next step for an assessment and estimate.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-10 dark:bg-slate-950 sm:px-6 sm:py-8 md:px-8 md:py-8 lg:px-8 lg:py-8"
      aria-labelledby="faq-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* FAQ Header */}
        <header className="w-full max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-primary"
            />

            <p
              className="text-xl font-semibold text-primary dark:text-[#90caf9] md:text-2xl"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              FAQ
            </p>

            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-primary"
            />
          </div>

          <h2
            id="faq-heading"
            className="mt-2 text-3xl text-black dark:text-white md:text-4xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Frequently Asked Questions
          </h2>

          <p
            className="mx-auto mt-3 max-w-4xl text-lg leading-7 text-slate-700 dark:text-slate-300 w-full md:w-2/3"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Have questions about brownstone restoration, masonry repair,
            waterproofing, or exterior restoration in New York City? Here are
            answers to some of the questions we hear most often.
          </p>
        </header>

        {/* FAQ Items */}
        <div className="mt-7 w-full max-w-4xl space-y-3 sm:mt-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="mx-auto w-full md:w-2/3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between gap-3 p-2 text-left sm:p-3"
                  >
                    <span
                      className="min-w-0 text-lg font-medium leading-7 text-slate-900 dark:text-white md:text-lg"
                      style={{ fontFamily: "var(--font-forum)" }}
                    >
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 dark:text-[#90caf9] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    className="border-t border-slate-200 px-4 pb-3 pt-3 dark:border-slate-800 sm:px-5 sm:pb-4"
                  >
                    <p
                      className="text-lg leading-7 text-slate-700 dark:text-slate-300"
                      style={{ fontFamily: "var(--font-forum)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-8 w-full max-w-5xl rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 p-6 text-center sm:mt-10 sm:p-8 md:p-10">
          <h3
            className="text-xl font-semibold text-gray-900 md:text-2xl"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Ready to Restore Your Property?
          </h3>

          <p
            className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-gray-700"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Don&apos;t let water damage compromise your building&apos;s legacy.
            Contact the Best Brownstone Restoration Company in NYC for a free
            consultation and estimate.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg bg-orange-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-orange-700 sm:w-auto"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/faq"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-orange-600 bg-white px-7 py-3 font-semibold text-orange-600 transition duration-300 hover:bg-gray-100 sm:w-auto"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
