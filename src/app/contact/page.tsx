import React from "react";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ServicesForm from "@/components/servicesSection/ServicesForm";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div>
        <HeaderSpecial />
        <div className="pt-32 sm:pt-16 2xl:pt-28">
          <div className="flex flex-col gap-2 bg-accent dark:bg-gray-900 py-12 pb-0 md:pb-12 border-b border">
            <div>
              <div className="text-center mb-4">
                <h1
                  className="text-3xl sm:text-5xl text-tertiary dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  Contact Us
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch mx-8 lg:mx-28">
              {/* Left Side - Form */}
              <div className="w-full lg:w-2/3">
                <ServicesForm />
              </div>

              {/* Right Side - Review Scanner */}
              <div className="w-full lg:w-1/3">
                <Link
                  href="https://g.page/r/CQiL86R32dW4EBE/review?utm_source=gbp&utm_medium=reviews&utm_campaign=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-2/3 flex-col justify-center rounded-[2rem] border border-[#a89276]/30 bg-[#1a110b] p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
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
                    />
                  </div>

                  {/* CTA */}
                  <div className="rounded-xl border border-[#eab308]/20 bg-[#2d2312] px-3 py-3 text-center text-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.1)] transition group-hover:bg-[#362a14]">
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
          </div>
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
