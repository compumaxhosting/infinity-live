
import React from "react";

export type BlogSection = {
  title: string;
  paragraph: string | JSX.Element;
};

export type Blog = {
  title: string;
  keywords: string;
  slug: string;
  description: string | JSX.Element;
  image: string;
  sections: BlogSection[];
  metatitle: string; 
  metadescription: string; 
};

export const BlogsData: Blog[] = [
  {
    keywords:
      "brownstone stoop restoration, brownstone stoop repair, stoop restoration NYC, brownstone restoration NYC, brownstone steps repair, historic stoop restoration, Brooklyn brownstone stoop, Manhattan brownstone repair, masonry stoop restoration, NYC stoop contractors",
    title:
      "What to Expect During a Brownstone Stoop Restoration Project in NYC",
    slug: "brownstone-stoop-restoration-project-guide",
    description: (
      <>
        Brownstone stoops are iconic features of historic homes across Brooklyn,
        Manhattan, and Queens. Over time, weather exposure, foot traffic, and
        aging materials can cause cracks, loose steps, and structural damage.
        Knowing what to expect during a brownstone stoop restoration project
        helps homeowners plan effectively and protect their property investment.
      </>
    ),
    image: "/blog/blog-project-guide.png",
    sections: [
      {
        title: "Initial Inspection and Assessment",
        paragraph: (
          <>
            The restoration process begins with a professional inspection.
            Contractors evaluate:
            <ul className="list-disc ml-6 mt-3">
              <li>Cracks, spalling, and erosion in the stone</li>
              <li>Uneven or sinking steps</li>
              <li>Foundation and structural stability</li>
              <li>Damaged or unsafe railings</li>
            </ul>
            <p className="mt-3">
              In neighborhoods like Park Slope and Brooklyn Heights, inspections
              also account for landmark preservation requirements.
            </p>
          </>
        ),
      },
      {
        title: "Permits and Approvals",
        paragraph: (
          <>
            Most stoop restorations in New York City require permits from the
            NYC Department of Buildings (DOB). Landmark properties may also need
            approval from the Landmarks Preservation Commission (LPC). Working
            with experienced professionals in brownstone stoop restoration in
            NYC ensures all filings and approvals are handled correctly and
            efficiently.
          </>
        ),
      },
      {
        title: "Restoration and Repair Work",
        paragraph: (
          <>
            Once permits are secured, restoration begins. Typical work includes:
            <ul className="list-disc ml-6 mt-3">
              <li>Repairing or replacing damaged steps</li>
              <li>Repointing and reinforcing masonry</li>
              <li>Restoring or installing metal railings</li>
              <li>Waterproofing to prevent future deterioration</li>
            </ul>
            <p className="mt-3">
              These steps improve safety while preserving the stoop’s original
              architectural character.
            </p>
          </>
        ),
      },
      {
        title: "Project Timeline and Disruptions",
        paragraph: (
          <>
            Most brownstone stoop restoration projects take two to four weeks,
            depending on damage severity and weather conditions. Homeowners
            should expect temporary access restrictions and protective barriers
            during construction, especially in dense NYC neighborhoods.
          </>
        ),
      },
      {
        title: "Final Results and Long-Term Benefits",
        paragraph: (
          <>
            A properly restored stoop enhances curb appeal, improves structural
            safety, and increases property value. Regular maintenance and timely
            restoration also help prevent costly repairs in the future.
          </>
        ),
      },
      {
        title: "Conclusion",
        paragraph: (
          <>
            A brownstone stoop restoration project in NYC is a structured
            process focused on safety, durability, and historic preservation. By
            understanding each phase—from inspection to final finish—homeowners
            can make informed decisions and ensure long-lasting results that
            complement New York City’s classic brownstone architecture.
          </>
        ),
      },
    ],
    metatitle: "What to Expect During a Brownstone Stoop Restoration Project",
    metadescription:
      "Discover what to expect during a brownstone stoop restoration project in NYC, including inspections, permits, repairs, and timelines.",
  },
];