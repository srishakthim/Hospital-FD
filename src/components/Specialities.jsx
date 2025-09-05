import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Specialities() {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const specialities = [
    { icon: "https://cdn-icons-png.flaticon.com/512/2920/2920265.png", title: "Gastroenterology" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3474/3474364.png", title: "Gastrointestinal and HPB Surgery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png", title: "General Medicine" },
    { icon: "https://cdn-icons-png.flaticon.com/512/387/387561.png", title: "General Surgery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/747/747310.png", title: "Home Health Care Services" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2621/2621060.png", title: "Intensive Care Unit" },
    { icon: "https://cdn-icons-png.flaticon.com/512/4645/4645949.png", title: "Plastic Surgery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", title: "Psychiatry" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png", title: "Pulmonology" },
    { icon: "https://cdn-icons-png.flaticon.com/512/4712/4712010.png", title: "Robotic Assisted Surgery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png", title: "Transfusion Medicine" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", title: "Urology" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", title: "Extra Example" },
     { icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png", title: "General Medicine" },
    { icon: "https://cdn-icons-png.flaticon.com/512/387/387561.png", title: "General Surgery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/747/747310.png", title: "Home Health Care Services" },
    { icon: "https://cdn-icons-png.flaticon.com/512/2621/2621060.png", title: "Intensive Care Unit" },
    { icon: "https://cdn-icons-png.flaticon.com/512/4645/4645949.png", title: "Plastic Surgery" },
    { icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", title: "Psychiatry" },
  ];

  // Split into chunks of 12 items (6x2 grid per slide)
  const chunkedSpecialities = [];
  for (let i = 0; i < specialities.length; i += 12) {
    chunkedSpecialities.push(specialities.slice(i, i + 12));
  }

  const totalSlides = chunkedSpecialities.length;

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 👈 auto slide every 3s
          onSlideChange={(swiper) => {
            const newProgress = ((swiper.activeIndex + 1) / totalSlides) * 100;
            setProgress(newProgress);
          }}
        >
          {chunkedSpecialities.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-6 grid-rows-2 gap-6">
                {group.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-40"
                  >
                    <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                    <p className="text-base font-medium text-blue-900 text-center">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress bar + arrows */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex-1 h-[3px] bg-gray-200 relative">
            <div
              className="absolute left-0 top-0 h-[3px] bg-green-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 transition"
            >
              ←
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
