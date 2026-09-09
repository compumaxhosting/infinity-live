"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

type Review = {
name: string;
date: string;
rating: number;
text: string;
detailText: string;
image: string;
};

const reviews: Review[] = [
{
name: "Heidi Knecht-Seegers",
date: "review",
rating: 5,
text: "Great company. They did a wonderful job fixing...",
detailText:
"Great company. They did a wonderful job fixing, scraping, and painting the fire escape. Reliable and pleasant. Will surely use them again. I recommend highly!",
image: "/profile1.webp",
},
{
name: "David Albert",
date: "review",
rating: 5,
text: "Infinity did an amazing job completely restoring...",
detailText:
"Infinity did an amazing job completely restoring the stoop of our brownstone. This is a long and involved process with multiple steps. Shaiful and his team worked tirelessly over several weeks to achieve a really beautiful result. Shaiful is a great communicator and very reliable. He and his team are real artisans. Highly recommended!",
image: "/profile1.webp",
},
{
name: "Erica Lewis-Conliffe",
date: "review",
rating: 5,
text: "I used Infinity Construction to get my steps done...",
detailText:
"I used Infinity Construction to get my steps done. And I must say, the work that was done was outstanding. My steps look great! I would recommend this company again, and I will definitely be calling them back to get the entire facade of my brownstone done.Great work!",
image: "/profile1.webp",
},
{
name: "Omar Khalil",
date: "review",
rating: 5,
text: "Imrul and his team did an amazing job waterproofing...",
detailText:
"Imrul and his team did an amazing job waterproofing my brick house. I wanted to get it done before the weather got really bad, and they delivered. The brick pointing repair looks amazing, and weatherproofing my rear stucco with white color sealant makes it look like a brand new wall. Imrul was very professional, highly recommend.",
image: "/profile1.webp",
},
{
name: "Bryan Villatoro",
date: "review",
rating: 5,
text: "I was having issues with water leaking through my...",
detailText:
"I was having issues with water leaking through my brick facade and window sills. Imrul and his team did an awesome job. They redid my brick pointing and window sills, and now I don't have any water leakage. I really recommend them!",
image: "/profile1.webp",
},
{
name: "Daniel David",
date: "review",
rating: 5,
text: "This company recently worked on two of my homes in...",
detailText:
"This company recently worked on two of my homes in Bushwick, and the job was completed beyond satisfactory. Their prices were extremely reasonable and if there were any concerns or minor issues, they were addressed in a timely manner. Communication is key when doing business, and they exceeded my expectations. Highly recommended",
image: "/profile1.webp",
},
{
name: "elvis",
date: "review",
rating: 5,
text: "Imrul and his team did an excellent job on our...",
detailText:
"Imrul and his team did an excellent job on our brownstone façade & stoop. They paid careful attention to detail, and maintained a safe and clean working environment throughout the process. They made sure everything was to our satisfaction. I Would recommend them to anyone who wants reliable and good quality work!.",
image: "/profile1.webp",
},
{
name: "Grant Nelson",
date: "review",
rating: 5,
text: "Thank you for such a amazing job! Really good...",
detailText:
"Thank you for such a amazing job! Really good reliable and efficient company. The workmanship was excellent I would definitely recommend this company and would use them again.....Infinity Construction NYC Inc.",
image: "/profile1.webp",
},
{
name: "Veronica Armstrong",
date: "review",
rating: 5,
text: "Fast and flawless brownstone repointing.",
detailText:
"I am extremely happy that I called on Infinity Construction NYC INC on my second attempt at having the stoop renovated. Shaiful and his crew did a fantastic job. Their work exceeded my expectations. It was a wonderful experience and I highly recommend their expertise. Also, they were truly a pleasure to work with, very professional. I will call on them again for future projects.",
image: "/profile1.webp",
},
];

const ReviewSlider = () => {
const [selectedReview, setSelectedReview] = useState<Review | null>(null);
const modalRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
if (
modalRef.current &&
!modalRef.current.contains(event.target as Node)
) {
setSelectedReview(null);
}
};


const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    setSelectedReview(null);
  }
};

if (selectedReview) {
  document.addEventListener("mousedown", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);

  requestAnimationFrame(() => {
    modalRef.current?.focus();
  });
}

return () => {
  document.removeEventListener("mousedown", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
};


}, [selectedReview]);

return ( <section
   className="py-8 bg-[#f9f9f9]"
   aria-labelledby="overall-rating-heading"
 > <div className="text-center mb-10"> <h2
       id="overall-rating-heading"
       className="text-4xl font-bold text-gray-900 flex items-center justify-center font-inter"
     >
4.9 <span className="ml-2 text-primary" aria-hidden="true">
★★★★★ </span> <span className="sr-only">out of 5 stars</span> </h2>

    <Link
      href="https://www.google.com/search?sca_esv=abfa54d360d79d5a&sxsrf=AE3TifNpX2z7RG3-xcBIvnSVS7BSzRJGSg:1751039734053&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E7ZvZjCeQyii5sTHHyNcBBBmaMGfI5ph4qe83UXNHYzoprbLEhjuCu3agYGJ61dGrVwkz_571FQFw62Pmc3fqRTzrdtd9-8kWRoZSdU4DuT2hXH6x4qlaEccMZlDnIND_sPwZkanpgBsZBV0EkY2sajsLOH7_wBdOzHrU37-IEThK3eGhYP15hn6wsVEOei27WgaT5mUmmo1Q8I22-t6LJYIC4Za-MbQiXDXAZmGogXV6oBsrw%3D%3D&q=Infinity+Construction+NYC+Inc+%7C+Brownstone+Restoration+Specialist+%7C+Masonry+%7C+Waterproofing+%7C+Roofing+%7C+Fire+Escape+Painting+Reviews&sa=X&ved=2ahUKEwim2Neq-5GOAxVyxjgGHWhBHckQ0bkNegQIMBAE&biw=1536&bih=730&dpr=1.25#lrd=0x4d0887ba99f2e715:0x74660f5418ca6bb3,3,,,,"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Review us on Google. Opens in a new tab."
    >
      <span
        className="inline-block mt-2 bg-[#003269] text-white px-4 py-2 rounded-full text-sm hover:bg-primary font-inter"
      >
        Review us on Google
      </span>
    </Link>
  </div>

  <div
    className="px-4 max-w-6xl md:mx-auto"
    role="region"
    aria-label="Customer Reviews Slider"
  >
    <Swiper
      className="review-swiper !pb-10"
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      aria-live="polite"
      aria-atomic="true"
    >
      {reviews.map((review, idx) => (
        <SwiperSlide
          key={review.name}
          className="h-full"
          role="group"
          aria-roledescription="slide"
          aria-label={`Review ${idx + 1} of ${reviews.length}`}
        >
          <div
            className="bg-primary text-white rounded-xl p-4 w-[250px] h-[300px] flex flex-col gap-2 items-start mx-auto transition-transform duration-300 hover:scale-[1.02]"
            aria-labelledby={`review-name-${idx}`}
            aria-describedby={`review-text-${idx}`}
            tabIndex={0}
          >
            <div className="flex items-center gap-3">
              <Image
                src={review.image}
                alt={`${review.name}'s avatar`}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />

              <div>
                <p
                  className="font-semibold text-base font-inter"
                  id={`review-name-${idx}`}
                >
                  {review.name}
                </p>

                <p className="text-xs text-white font-inter">
                  {review.date}
                </p>
              </div>
            </div>

            <div
              className="text-[#002147] text-3xl mt-2"
              aria-hidden="true"
            >
              {"★".repeat(review.rating)}
            </div>

            <p className="sr-only">{review.rating} out of 5 stars</p>

            <p
              className="text-sm text-left mt-2 leading-snug font-bevietnam"
              id={`review-text-${idx}`}
            >
              {review.text}
            </p>

            <button
              type="button"
              className="text-sm text-white hover:text-[#002147] mt-2 cursor-pointer font-bevietnam"
              onClick={() => setSelectedReview(review)}
              aria-haspopup="dialog"
              aria-controls="review-modal"
              aria-expanded={
                selectedReview?.name === review.name
              }
              aria-label={`Read full review by ${review.name}`}
            >
              Read more
            </button>

            <div className="flex items-center gap-2 text-xs text-white mt-3">
              <Image
                src="/google.webp"
                alt="Google Logo"
                width={16}
                height={16}
                className="w-4 h-4"
              />

              <span className="font-bevietnam">Posted on</span>

              <span className="font-semibold text-white font-bevietnam">
                Google
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {selectedReview && (
    <div
      className="fixed inset-0 bg-black/40 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      id="review-modal"
      tabIndex={-1}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md relative animate-[reviewModalIn_0.3s_ease-out]"
        tabIndex={0}
      >
        <h2 id="modal-title" className="sr-only">
          Full review by {selectedReview.name}
        </h2>

        <button
          type="button"
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
          onClick={() => setSelectedReview(null)}
          aria-label="Close review modal"
        >
          &times;
        </button>

        <div className="flex items-start gap-3 mb-4">
          <Image
            src={selectedReview.image}
            alt={`${selectedReview.name}'s avatar`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          <div>
            <p className="font-semibold">{selectedReview.name}</p>
            <p className="text-sm text-gray-500">
              {selectedReview.date}
            </p>
          </div>
        </div>

        <div className="text-primary text-2xl" aria-hidden="true">
          {"★".repeat(selectedReview.rating)}
        </div>

        <p className="sr-only">
          {selectedReview.rating} out of 5 stars
        </p>

        <p
          id="modal-description"
          className="mt-3 text-gray-700 text-sm text-left whitespace-pre-line"
        >
          {selectedReview.detailText}
        </p>

        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
          <Image
            src="/google.webp"
            alt="Google Logo"
            width={16}
            height={16}
          />

          <span>Posted on</span>
          <strong>Google</strong>
        </div>
      </div>
    </div>
  )}
</section>

);
};

export default ReviewSlider;
