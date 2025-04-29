import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b text-lg lg:text-xl"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary dark:text-white mb-8">
          Fire Escape/Metal Railing & Fence Restoration
        </h1>
        <p className="text-lg">
          Fire escapes are a critical safety feature, and maintaining them in
          excellent condition is essential for ensuring the safety and
          compliance of your property. At Infinity Construction NYC, we provide
          comprehensive fire escape restoration services designed to address
          structural issues, enhance durability, and extend the lifespan of your
          fire escape system.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          <div className="w-full lg:w-8/12 p-4 space-y-6">
            <h1 className="text-4xl my-4">
              Our Fire Escape Restoration Services
            </h1>
            <ul>
              <li>
                • Rust and Corrosion Removal: We clean and treat rusted areas to
                prevent further damage and restore the metal’s integrity. This
                includes applying rust inhibitors and protective primers to
                prevent future corrosion.
              </li>
              <li>
                • Component Replacement: Damaged or worn-out stairs, platforms,
                railings, and brackets are expertly replaced to ensure safety
                and functionality. We source durable, high-quality components to
                ensure long-lasting performance.
              </li>
              <li>
                • Reinforcements: Weak or unstable sections are reinforced to
                guarantee the structural integrity of the entire fire escape
                system. We use advanced techniques and materials, such as steel
                plates or braces, to strengthen critical areas.
              </li>
              <li>
                • Repainting and Coating: High-quality, weather-resistant paints
                and coatings are applied to protect against corrosion and
                maintain a polished, professional appearance. We offer a variety
                of color options to complement your building’s aesthetic.
              </li>
              <li>
                • Inspection and Safety Checks: We conduct thorough inspections
                to ensure your fire escape meets all safety standards and
                compliance codes. Our detailed evaluations identify any hidden
                vulnerabilities that need to be addressed.
              </li>
              <li>
                • Welding Repairs: For fire escapes with cracks or broken
                joints, we perform precise welding repairs to restore structural
                soundness and extend the life of the system.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 p-4 space-y-6">
            <Image
              src="/fire-escape/fire-escape-img-1.JPG"
              width={600}
              height={600}
              alt="Historical Landmark Restoration"
              className="w-full rounded-lg shadow-md h-96 object-cover"
            />
          </div>
        </div>
        <h1 className="text-4xl my-4">Additional Services</h1>
        <ul>
          <li>
            • Load Testing: We offer load testing to verify the fire escape’s
            capacity to safely support weight during emergencies.
          </li>
          <li>
            • Galvanization: For added durability and protection against rust,
            we provide galvanization services, ensuring your fire escape
            withstands harsh weather conditions.
          </li>
          <li>
            • Emergency Repairs: We offer prompt emergency repair services to
            address urgent safety concerns and bring your fire escape back to
            operational standards.
          </li>
        </ul>
        <h1 className="text-4xl my-4">Why Regular Maintenance Matters</h1>
        <p>
          Regular maintenance and timely repairs are essential for preventing
          costly replacements and avoiding potential safety hazards. By
          addressing minor issues early, you can extend the life of your fire
          escape and keep your property compliant with local safety regulations.
          Routine maintenance also improves the appearance and functionality of
          your fire escape, adding value to your property.
        </p>
        <h1 className="text-4xl my-4">
          Why Choose Infinity Construction NYC for Fire Escape Restoration?
        </h1>
        <ul className="mb-6">
          <li>
            • Expertise You Can Trust: With years of experience, our skilled
            technicians deliver high-quality restoration services tailored to
            your specific needs.
          </li>
          <li>
            • Commitment to Safety: We prioritize safety and compliance,
            ensuring your fire escape meets all legal requirements and industry
            standards.
          </li>
          <li>
            • Durable Solutions: Using premium materials and advanced
            techniques, we ensure long-lasting results that protect your
            investment.
          </li>
          <li>
            • Customer-Focused Service: From the initial inspection to project
            completion, we provide clear communication and reliable service
            every step of the way.
          </li>
          <li>
            • Comprehensive Approach: We address every aspect of fire escape
            restoration, from structural repairs to aesthetic enhancements,
            ensuring a complete and professional result.
          </li>
        </ul>
        <p>
          Protect and restore your brickwork with Infinity Construction NYC.
          Contact us today to learn more about our brick pointing and
          waterproofing services, and schedule a consultation with our experts.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
