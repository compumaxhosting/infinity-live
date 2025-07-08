import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqs = [
  {
    question: "What are your financing options?",
    answer:
      "We take payments in Cash, Checks, and Credit Card. We don’t have any specific payment plan or financing options. However, we accept payments in phases. Our jobs are completed in phases and the payments are accepted after each phase has been completed. Based on the job, the client has the room to make payments over the period of time as the job is being completed.",
  },
  {
    question: "How is Infinity Construction NYC different from its competitors?",
    answer:
      "We don’t sugarcoat our process of work for our clients. We run an honest business, and from the beginning, we explain everything step by step to our clients so they don’t get any accidental surprises during the project. We have experienced licensed civil engineers to visit sites throughout the process of work, and our workers are highly experienced and love their work.",
  },
  {
    question: "How long does it take to get a job estimate?",
    answer:
      "When you make an appointment with us, we will send an engineer for inspection, and after a thorough inspection, we will send a detailed estimate and contract within 5 business days. It depends on our workload and how big your project is.",
  },
  {
    question: "Are you guys insured?",
    answer:
      "We are completely insured. We follow all the NYC DOB regulations and OSHA standards at our worksite. We get all the necessary permits so our clients have nothing to worry about.",
  },
];

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-40 sm:pt-28 xl:pt-32 pb-14 bg-gray-50 dark:bg-gray-900 p-4">
        <h2 className="text-center text-2xl lg:text-4xl font-bold mb-10 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl lg:text-3xl font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base lg:text-lg text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer /> 
      <PhoneCall />
    </div>
  );
};

export default page;
