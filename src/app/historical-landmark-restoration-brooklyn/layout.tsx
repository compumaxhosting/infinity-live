import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark-restoration-brooklyn/";

export const metadata: Metadata = {
  title:
    "Historic Landmark Restoration Brooklyn NY | Infinity Construction NYC",
  description:
    "Historic landmark restoration in Brooklyn, NY for brownstone facades, limestone, stoops, masonry, and historic exterior restoration by Infinity Construction NYC.",
  authors: [{ name: "Infinity Construction NYC" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    title:
      "Historic Landmark Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Historic landmark restoration in Brooklyn, NY including brownstone facades, limestone, stoops, masonry, and historic exterior repairs.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: "YOUR-IMAGE-URL-HERE",
        alt: "Historic landmark and brownstone restoration in Brooklyn NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Historic Landmark Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Historic landmark restoration in Brooklyn, NY for brownstone facades, limestone, stoops, masonry, and exterior repairs.",
    images: ["YOUR-IMAGE-URL-HERE"],
  },
  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Historic Landmark Restoration Brooklyn NY | Infinity Construction NYC",
      description:
        "Historic landmark restoration in Brooklyn, NY for brownstone facades, limestone, stoops, masonry, and historic exterior restoration.",
      isPartOf: {
        "@type": "WebSite",
        name: "Infinity Construction NYC",
        url: "https://www.infinityconstructionnyc.com/",
      },
      about: {
        "@type": "Service",
        name: "Historic Landmark Restoration in Brooklyn, NY",
        serviceType: "Historic Landmark Restoration",
        areaServed: {
          "@type": "City",
          name: "Brooklyn",
          containedInPlace: {
            "@type": "State",
            name: "New York",
          },
        },
        provider: {
          "@type": "LocalBusiness",
          name: "Infinity Construction NYC",
          url: "https://www.infinityconstructionnyc.com/",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does historic landmark restoration involve in Brooklyn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Historic landmark restoration in Brooklyn can involve repairing and restoring brownstone facades, limestone details, masonry, stoops, pointing, and other historic exterior elements while considering the character of the property.",
          },
        },
        {
          "@type": "Question",
          name: "Can brownstone facades be restored instead of replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, damaged brownstone can be repaired and restored rather than completely replaced. The appropriate approach depends on the condition, extent of deterioration, and requirements applicable to the property.",
          },
        },
        {
          "@type": "Question",
          name: "Does a landmarked Brooklyn property require special approval for exterior work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Exterior work on a landmarked property or a property within a designated historic district may require review or approval before work begins. Requirements depend on the property's designation and the proposed work.",
          },
        },
        {
          "@type": "Question",
          name: "What types of historic exterior restoration are available in Brooklyn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Historic exterior restoration may include brownstone facade repair, limestone restoration, stoop restoration, masonry repair, brick pointing, waterproofing, and related exterior restoration work.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my Brooklyn brownstone needs facade restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visible cracking, deteriorated stone, failing mortar joints, water infiltration, loose material, or damaged architectural details can indicate that a facade should be professionally evaluated.",
          },
        },
      ],
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
