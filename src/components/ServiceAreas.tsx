import { Building2, MapPin } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      city: "Brooklyn",
      content:
        "Brownstone restoration, facade repair, masonry, brick pointing, stoop restoration, waterproofing and exterior construction.",
    },
    {
      city: "Manhattan",
      content:
        "Brownstone and limestone restoration, facade repair, masonry, waterproofing, roofing and exterior restoration.",
    },
    {
      city: "Queens",
      content:
        "Masonry, exterior restoration, waterproofing, roofing and related construction services.",
    },
    {
      city: "The Bronx",
      content:
        "Brownstone restoration, masonry repair, stoop restoration, brick pointing and exterior restoration.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white px-4 py-10 dark:bg-slate-950 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16"
      aria-labelledby="nyc-service-areas-heading"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <header className="mx-auto w-full max-w-5xl text-left">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-primary" />

            <p
              className="text-xl font-semibold text-primary dark:text-[#90caf9] md:text-2xl"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Service areas
            </p>
          </div>

          <h2
            id="nyc-service-areas-heading"
            className="mt-3 text-3xl md:text-4xl text-black dark:text-white font-forum text-left"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Brownstone &amp; Masonry Restoration Across NYC
          </h2>

          <p
            className="mt-4 text-lg leading-7 text-slate-700 dark:text-slate-300"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Infinity Construction NYC serves property owners throughout New York
            City.
          </p>
        </header>

        {/* NYC Service Areas */}
        <div className="mx-auto mt-7 grid w-full max-w-5xl grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
          {areas.map((area) => (
            <article
              key={area.city}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 sm:p-4"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/10"
              />

              <div className="relative">
                <div className="mb-2 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-[#90caf9]"
                    aria-hidden="true"
                  >
                    {area.city === "Brooklyn" ? (
                      <Building2 className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </div>

                  <h3
                    className="text-lg font-medium text-slate-900 dark:text-white md:text-2xl"
                    style={{ fontFamily: "var(--font-forum)" }}
                  >
                    {area.city}
                  </h3>
                </div>

                <p
                  className="text-lg leading-7 text-slate-700 dark:text-slate-300"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  {area.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
