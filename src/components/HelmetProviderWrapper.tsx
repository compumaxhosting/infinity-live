// components/HelmetProviderWrapper.tsx
"use client";

import { HelmetProvider } from "react-helmet-async";
import { ReactNode } from "react";

export default function HelmetProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
