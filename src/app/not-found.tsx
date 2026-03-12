"use client";

import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
   <HeaderSpecial />
      <section className="flex justify-center items-center bg-white dark:bg-slate-950 min-h-screen p-6 dark:border-b">
        <div className="max-w-5xl w-full text-center">
          <p className="text-6xl sm:text-7xl md:text-8xl text-black dark:text-white font-forum mb-6">
            404
          </p>

          <h1 className="text-2xl sm:text-4xl text-[#0a6dad] dark:text-[#4dd0e1] mb-4">
            Page Not Found
          </h1>

         
          <h3 className="text-lg md:text-xl text-[#042c46] dark:text-[#90caf9] mb-8">
            The page you’re looking for doesn’t exist or has been moved.
          </h3>

          <p
            className="text-lg md:text-xl leading-7 text-slate-800 dark:text-slate-300 mx-auto sm:px-10 mb-10"
            style={{ fontFamily: "var(--font-forum)" }}
          >
            Don’t worry — you can head back to the homepage or explore our
            professional brownstone restoration and masonry services across
            Brooklyn, Manhattan, Queens, and the Bronx.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-black transition-colors"
            >
              Go Back Home
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
