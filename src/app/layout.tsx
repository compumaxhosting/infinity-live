import type { Metadata } from "next";
import localFont from "next/font/local";
import { Forum, Work_Sans } from "next/font/google"; // Importing Forum and Work Sans
import "./globals.css";
import { ThemeProvider } from "../components/extras/ThemeProvider";

// Geist Sans font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Geist Mono font
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Adding Forum font from Google Fonts
const forum = Forum({
  subsets: ["latin"],
  variable: "--font-forum",
  weight: "400",
});

// Adding Work Sans as a Helvetica alternative
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-helvetica", // Custom variable for consistency
  weight: ["400", "700"], // Regular and Bold weights
});

export const metadata: Metadata = {
  title: "Infinity Construction NYC",
  description:
    "Infinity Construction NYC is a leading Brownstone Restoration Specialist Company.",
  icons: {
    icon: "/logo-new.png", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
