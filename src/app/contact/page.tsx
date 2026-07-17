import React from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ServicesForm from "@/components/servicesSection/ServicesForm";

const Page = () => {
  return (
    <>
      <HeaderSpecial />

      <main className="pt-32 sm:pt-24 2xl:pt-28">
        <section className="bg-accent dark:bg-gray-900 py-12 border-b">
          <div className="text-center mb-8">
            <h1
              className="text-3xl sm:text-5xl text-tertiary dark:text-white"
              style={{ fontFamily: "var(--font-forum)" }}
            >
              Contact Us
            </h1>
          </div>

          <div className="mx-8 lg:mx-28 flex flex-col gap-6 lg:flex-row lg:items-stretch">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <ServicesForm />
            </div>

            {/* Review QR */}
            <div className="w-full lg:w-1/3">
              <Link
                href="https://g.page/r/CQiL86R32dW4EBE/review?utm_source=gbp&utm_medium=reviews&utm_campaign=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-center rounded-[2rem] border border-[#a89276]/30 bg-[#1a110b] p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Heading */}
                <div className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#847361]">
                  Review Us
                </div>

                {/* QR Code */}
                <div className="relative mx-auto my-4 aspect-square w-full max-w-[160px] overflow-hidden rounded-xl bg-white p-2">
                  <Image
                    src="/scanner-contact.png"
                    alt="Scan to leave a review"
                    fill
                    className="object-contain"
                    sizes="160px"
                    priority
                  />
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-yellow-500/20 bg-[#2d2312] px-3 py-3 text-center text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)] transition group-hover:bg-[#362a14]">
                  <p className="flex items-center justify-center gap-1.5 text-sm font-bold leading-tight">
                    ★ Click or Scan
                  </p>
                  <p className="text-sm font-bold leading-tight">
                    to Leave a 5-Star
                  </p>
                  <p className="text-sm font-bold leading-tight">Review</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <PhoneCall />
    </>
  );
};

export default Page;
