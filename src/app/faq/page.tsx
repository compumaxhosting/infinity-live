import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know if my NYC building needs masonry repair?",
    answer:
      "Look for cracked or missing mortar, loose or damaged bricks, spalling, water stains, deteriorating facade surfaces, or visible cracks. These issues can indicate that the exterior needs professional evaluation.",
  },
  {
    question:
      "What should I do if I notice cracks or crumbling brick on my building?",
    answer:
      "Do not ignore visible masonry deterioration. Have the affected area inspected to determine whether the problem is limited to mortar and surface damage or requires more extensive masonry or facade restoration.",
  },
  {
    question: "When does brick pointing become necessary on an NYC property?",
    answer:
      "Brick pointing may be needed when mortar joints become cracked, recessed, loose, or deteriorated. Repointing restores the joints and helps protect the surrounding masonry from moisture and weather exposure.",
  },
  {
    question:
      "Is brick repointing the same thing as replacing damaged bricks?",
    answer:
      "No. Repointing replaces deteriorated mortar joints, while brick replacement involves removing and replacing individual damaged masonry units. A project may require one or both depending on the condition of the wall.",
  },
  {
    question:
      "How can I tell whether my brownstone needs restoration or just minor repairs?",
    answer:
      "The answer depends on the condition of the facade, architectural details, stoop, mortar, and underlying masonry. An inspection can help determine whether localized repairs or a broader restoration approach is appropriate.",
  },
  {
    question:
      "Can an older Brooklyn brownstone be restored without losing its original character?",
    answer:
      "Yes. Brownstone restoration can focus on repairing deteriorated areas while preserving important architectural details and the property's historic appearance. Material selection and restoration methods are particularly important for older buildings.",
  },
  {
    question: "What is involved in restoring a brownstone facade in NYC?",
    answer:
      "Depending on the building, restoration can involve repairing deteriorated brownstone, masonry and architectural details, addressing cracks and water intrusion, restoring damaged areas, and completing related exterior work.",
  },
  {
    question:
      "Can you restore a limestone facade as well as brownstone?",
    answer:
      "Yes. Limestone restoration is among Infinity Construction NYC's exterior restoration services and can include work on limestone facades, stoops, and architectural elements.",
  },
  {
    question:
      "My building has a damaged stoop. Can the masonry be restored?",
    answer:
      "Yes. Brownstone and limestone stoops can develop cracks, surface deterioration, and other masonry problems over time. Restoration work can address damaged areas while considering the surrounding facade and architectural details.",
  },
  {
    question:
      "What causes masonry facades in New York City to deteriorate?",
    answer:
      "Weather exposure, moisture intrusion, freeze-thaw cycles, aging mortar, damaged masonry units, poor previous repairs, and long-term exposure to the elements can all contribute to facade deterioration.",
  },
  {
    question: "Can water damage cause problems with brick or brownstone?",
    answer:
      "Yes. Water can enter deteriorated mortar joints, cracks, facade surfaces, and other exterior openings. Over time, moisture can contribute to masonry deterioration and other building-envelope problems.",
  },
  {
    question:
      "How can I prevent water from getting into my masonry facade?",
    answer:
      "The appropriate solution depends on where water is entering and why. Masonry repairs, repointing, facade restoration, waterproofing, and related exterior work may be part of the solution after the source of moisture is identified.",
  },
  {
    question:
      "What is parapet wall waterproofing, and why does it matter?",
    answer:
      "Parapets are exposed portions of a building's exterior and can be vulnerable to water intrusion. Proper repair and waterproofing can help protect the surrounding masonry and building envelope.",
  },
  {
    question:
      "Can you repair deteriorated mortar without rebuilding the entire wall?",
    answer:
      "In many cases, yes. If the underlying masonry remains serviceable, deteriorated mortar joints may be repaired through repointing rather than rebuilding the entire wall. The appropriate method depends on the actual condition of the masonry.",
  },
  {
    question:
      "Do you work on both historic brownstones and newer NYC buildings?",
    answer:
      "Yes. Infinity Construction NYC provides masonry, restoration, facade, waterproofing, and related exterior services for different types of residential and commercial properties throughout New York City.",
  },
  {
    question:
      "Can you work on a landmarked or historic property in NYC?",
    answer:
      "Infinity Construction NYC works on historic brownstone and facade restoration projects. Landmark-related requirements vary by property and project, so the applicable NYC Landmarks Preservation Commission requirements should be determined before work begins.",
  },
  {
    question:
      "What happens if my property is in an NYC historic district?",
    answer:
      "Additional preservation requirements may apply to exterior work in a designated historic district. The exact requirements depend on the property's designation and the proposed work.",
  },
  {
    question:
      "Do you handle both the masonry and waterproofing when a facade has moisture problems?",
    answer:
      "Infinity Construction NYC provides both masonry and waterproofing services. Depending on the condition of the building, these services may be incorporated into the same exterior restoration project.",
  },
  {
    question:
      "Can you repair brick and concrete masonry on the same property?",
    answer:
      "Yes. The company provides masonry services involving brick and CMU block construction, along with concrete and stone work. The materials and repair approach depend on the property's existing construction and project requirements.",
  },
  {
    question:
      "What types of exterior masonry problems can a contractor evaluate?",
    answer:
      "An evaluation can address issues such as deteriorated mortar, damaged bricks, cracks, facade deterioration, water intrusion, damaged stoops, parapet problems, and other visible exterior masonry concerns.",
  },
  {
    question: "Do you provide masonry services throughout Brooklyn?",
    answer:
      "Yes. Brooklyn is one of the primary NYC service areas covered by Infinity Construction NYC.",
  },
  {
    question:
      "Can I hire Infinity Construction NYC for masonry work in Manhattan?",
    answer:
      "Yes. Infinity Construction NYC provides masonry and exterior restoration services in Manhattan, including work involving brownstone, limestone, brick, facades, waterproofing, and related exterior elements.",
  },
  {
    question: "Do you provide masonry and facade services in Queens?",
    answer:
      "Yes. Queens is included in Infinity Construction NYC's NYC service area.",
  },
  {
    question: "Do you work on masonry properties in The Bronx?",
    answer:
      "Yes. Infinity Construction NYC serves property owners in The Bronx as part of its New York City service area.",
  },
  {
    question:
      "Do you work with commercial property owners as well as homeowners?",
    answer:
      "Yes. Infinity Construction NYC provides exterior construction and restoration services for both residential and commercial properties.",
  },
  {
    question:
      "How should I prepare before requesting a masonry estimate?",
    answer:
      "Have the property address, a brief description of the problem, and photographs of the affected areas available. This gives the contractor useful initial information before evaluating the project in greater detail.",
  },
  {
    question:
      "Can I send photos of my damaged masonry before scheduling an inspection?",
    answer:
      "Photos can be useful for providing initial information about visible cracks, damaged brick, deteriorated mortar, facade surfaces, or other exterior problems. A professional evaluation may still be necessary to determine the underlying cause.",
  },
  {
    question: "How long does masonry restoration usually take in NYC?",
    answer:
      "There is no standard timeframe for every project. Duration depends on the property's size, the extent of deterioration, access, materials, weather, project scope, and any required approvals.",
  },
  {
    question:
      "Why can two masonry repair estimates for the same building be different?",
    answer:
      "Masonry estimates can vary because contractors may identify different repair requirements, materials, access conditions, quantities of damaged masonry, waterproofing needs, and restoration details.",
  },
  {
    question:
      "How do I get started with a masonry or facade restoration project?",
    answer:
      "Contact Infinity Construction NYC with details about the property and the exterior work you need. You can discuss the condition of the masonry, facade, brownstone, limestone, stoop, waterproofing, or other exterior elements and determine the appropriate next step.",
  },
];

const page = () => {
  return (
    <div>
      <HeaderSpecial />

      <div className="pt-28 sm:pt-28 xl:pt-32 pb-14 bg-gray-50 dark:bg-gray-900 p-4">
        <h1 className="mt-2 text-3xl md:text-4xl text-black dark:text-white font-forum text-center mb-4">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg lg:text-xl font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="mt-2 text-sm lg:text-lg text-gray-600 dark:text-gray-300">
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
