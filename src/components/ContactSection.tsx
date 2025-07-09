import ServicesForm from "./servicesSection/ServicesForm";

const ContactSection = () => {
  return (
    <>
      {/* About and Form Section */}
      <div className="flex flex-col gap-6 bg-accent dark:bg-gray-900 py-12 pb-0 md:pb-12 border-b border">
        <div>
          <div className="text-center mb-4">
            <h2
              className="text-3xl sm:text-5xl text-tertiary dark:text-white"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Contact Us
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <ServicesForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
