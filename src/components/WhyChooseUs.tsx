import {
  Building2,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Building2,
      text: "Serving NYC since 2001",
    },
    {
      icon: Wrench,
      text: "Brownstone, limestone and masonry restoration experience",
    },
    {
      icon: ShieldCheck,
      text: "Licensed & insured",
    },
    {
      icon: Building2,
      text: "Residential and commercial projects",
    },
    {
      icon: MapPin,
      text: "Services throughout Brooklyn, Manhattan, Queens and The Bronx",
    },
    {
      icon: Wrench,
      text: "Restoration, masonry, waterproofing and exterior construction services",
    },
    {
      icon: CheckCircle2,
      text: "Project-specific recommendations based on the condition of the property",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-14 dark:bg-slate-950 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <header className="mx-auto w-full max-w-5xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-primary sm:w-10"
            />

            <p
              className="text-xl md:text-2xl text-primary dark:text-[#90caf9] font-semibold"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Why choose us
            </p>
          </div>

          <h2
            id="why-choose-us-heading"
            className="mt-2 text-3xl md:text-4xl text-black dark:text-white font-forum text-left"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Why Property Owners Choose Infinity Construction NYC
          </h2>
        </header>

        {/* Main SEO Content Box */}
        <div className="mx-auto mt-8 w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-7 md:p-8 lg:p-9">
            {/* Decorative corner */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/10"
            />

            <div className="relative">
              {/* Introduction */}
              <div className="max-w-4xl">
                <p
                  className="text-lg leading-7 text-slate-800 dark:text-slate-300"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  Restoration work on a New York City property requires an
                  understanding of masonry, exterior deterioration, weather
                  exposure and the architectural character of the building. <br />
                  Infinity Construction NYC brings that local experience to
                  residential and commercial restoration projects throughout
                  NYC.
                </p>
              </div>

              {/* Reasons */}
              <ul
                className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
                style={{ fontFamily: "var(--font-forum)" }}
              >
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;

                  return (
                    <li
                      key={index}
                      className={`group flex min-w-0 items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:gap-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/40 dark:hover:border-[#90caf9]/30 ${
                        index === reasons.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white dark:bg-primary/20 dark:text-[#90caf9] dark:group-hover:bg-[#90caf9] dark:group-hover:text-slate-950"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <p className="min-w-0 pt-1 text-lg font-medium leading-7 text-slate-800 dark:text-slate-200">
                        {reason.text}
                      </p>
                    </li>
                  );
                })}
              </ul>

              {/* Closing Content */}
              <div className="mt-4 border-t border-slate-200 pt-3 dark:border-slate-700">
                <p
                  className="text-lg leading-7 text-slate-800 dark:text-slate-300"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  We focus on understanding the condition of the building first,
                  then recommending the work needed to restore and protect the
                  exterior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;