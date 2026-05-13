import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqs = [
  {
    question: "How do I know if my brownstone needs repointing?",
    answer:
      "If you notice crumbling mortar, white powdery salt deposits (efflorescence), or interior dampness, it's time for Brick Pointing and Waterproofing NYC. Addressing this early prevents costly structural damage.",
  },
  {
    question:
      "Does Infinity Construction NYC handle Landmark Preservation Commission (LPC) permits?",
    answer:
      "Yes. As a specialist Brownstone Restoration Contractor NYC, we ensure all work on historic properties meets the strict aesthetic and structural standards required by the LPC and DOB.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide full NYC Building Restoration Services across Brooklyn (Albany Ave headquarters), Manhattan (E 118th St office), Queens, and the Bronx.",
  },
];

const FaqHomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our brownstone restoration and
            building services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg md:text-xl font-semibold text-gray-900 hover:text-orange-600 transition duration-200 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-gray-700 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Restore Your Property?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Don't let water damage compromise your building's legacy. Contact
            the Best Brownstone Restoration Company in NYC for a free
            consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/faq"
              className="inline-block bg-white hover:bg-gray-100 text-orange-600 font-semibold py-3 px-8 rounded-lg border-2 border-orange-600 transition duration-300"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqHomeSection;
