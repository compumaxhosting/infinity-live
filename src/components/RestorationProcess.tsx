import {
  CheckCircle2,
  ClipboardCheck,
  Search,
  Wrench,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

const RestorationProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Property Assessment",
      content:
        "We review the condition of the affected facade, masonry, stoop, roof or other exterior areas and look for visible signs of deterioration.",
      icon: Search,
    },
    {
      number: "2",
      title: "Identify the Problem",
      content:
        "We determine what may be contributing to the deterioration, such as damaged masonry, failing mortar, cracks or water intrusion.",
      icon: ClipboardCheck,
    },
    {
      number: "3",
      title: "Recommend the Work",
      content:
        "We explain the recommended repairs and the scope of work needed for the property.",
      icon: FileCheck2,
    },
    {
      number: "4",
      title: "Prepare the Area",
      content:
        "Proper preparation may include removing deteriorated material, preparing masonry surfaces and protecting surrounding areas.",
      icon: ShieldCheck,
    },
    {
      number: "5",
      title: "Complete the Restoration",
      content:
        "Our team performs the required brownstone, limestone, masonry, pointing, waterproofing, roofing or exterior restoration work based on the project scope.",
      icon: Wrench,
    },
    {
      number: "6",
      title: "Final Review",
      content:
        "We review the completed work, clean the work area and communicate the completed scope with the property owner.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-gray-100 px-4 py-10 dark:bg-slate-950 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16"
      aria-labelledby="restoration-process-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mx-auto w-full max-w-5xl text-left">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-primary" />

            <p
              className="text-xl font-semibold text-primary dark:text-[#90caf9] md:text-2xl"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Our Process
            </p>
          </div>

          <h2
            id="restoration-process-heading"
            className="mt-3 text-3xl md:text-4xl text-black dark:text-white font-forum text-left"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            How Our NYC Restoration Process Works
          </h2>
        </header>

        <ol className="mx-auto mt-7 w-full max-w-5xl space-y-2 sm:mt-4 sm:space-y-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <li
                key={step.number}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-primary" />

                <div className="flex flex-col gap-3 p-4 sm:flex-row sm:gap-5 sm:p-5 md:px-3 md:py-3">
                  <div className="flex shrink-0 items-center gap-3 sm:block">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-[#90caf9]"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 sm:hidden">
                      Step {step.number}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="hidden text-sm font-semibold uppercase tracking-wide text-primary dark:text-[#90caf9] sm:block">
                      Step {step.number}
                    </p>

                    <h3
                      className="text-lg font-medium text-slate-900 dark:text-white md:text-xl"
                      style={{ fontFamily: "var(--font-forum)" }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-md leading-7 text-slate-700 dark:text-slate-300"
                      style={{ fontFamily: "var(--font-forum)" }}
                    >
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
  );
};

export default RestorationProcess;