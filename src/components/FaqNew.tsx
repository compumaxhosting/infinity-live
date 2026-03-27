"use client";

import React, { useState, KeyboardEvent } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why is mortar quality so important in NYC?",
    answer:
      "New York experiences extreme temperature swings. We use specific mortar types (such as Type N or Type S) that offer the right balance of flexibility and strength to prevent cracking during the freeze-thaw cycle.",
  },
  {
    question: "Can CMU blocks be used for fire-rated walls? ",
    answer:
      "Yes. Concrete blocks offer excellent fire resistance. We ensure all CMU installations meet NYC building codes for safety and fire separation in multi-family and commercial units.",
  },
  {
    question:
      "How do you prevent Efflorescence (white staining) on new brickwork? ",
    answer:
      "Efflorescence is caused by salt migration. We use clean, potable water for mixing and apply professional-grade sealants to prevent moisture from pulling salts to the surface of your new brick facade.",
  },
];

export default function FaqNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen(index);
    }
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xl sm:text-2xl mb-4 text-orange-600">
          Frequently Asked Questions
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleOpen(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`w-full flex justify-between items-center px-5 py-4 text-left transition ${
                  isOpen ? "bg-orange-400 text-white" : "bg-white text-gray-900"
                }`}
              >
                <span className="font-medium text-sm md:text-lg">
                  Q{index + 1}. {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown size={20} />
                </motion.span>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 py-4 text-gray-700 text-sm md:text-lg bg-gray-50">
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
