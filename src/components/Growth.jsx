import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Growth = () => {
  const timelineData = [
    {
      year: "1950",
      date: "29th May 1950",
      title: "Building Construction Started",
      desc: "Hospital Construction - Bhoomi Pooja for the construction of the hospital was conducted and the foundation was laid by Sri Bheema Naidu.",
      img: "/images/1950.jpg",
    },
    {
      year: "1952",
      date: "1952",
      title: "Inauguration",
      desc: "Hospital inaugurated with blessings and community participation.",
      img: "/images/1952.jpg",
    },
    {
      year: "1954",
      date: "1954",
      title: "Expansion Phase",
      desc: "Added more facilities to serve patients better.",
      img: "/images/1954.jpg",
    },
    {
      year: "1958",
      date: "1958",
      title: "Leadership Milestone",
      desc: "Honoring key leaders who guided the hospital’s growth.",
      img: "/images/1958.jpg",
    },
    {
      year: "1971",
      date: "1971",
      title: "Medical Technology Upgrade",
      desc: "Introduced advanced medical equipment for patient care.",
      img: "/images/1971.jpg",
    },
    {
      year: "1978",
      date: "1978",
      title: "Community Recognition",
      desc: "Received recognition for community health initiatives.",
      img: "/images/1978.jpg",
    },
    {
      year: "1979",
      date: "1979",
      title: "Honors and Awards",
      desc: "Celebrated achievements with honorary guests.",
      img: "/images/1979.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-indigo-800 font-semibold">Our Growth Story</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-gray-800 font-bold text-lg">
            {timelineData[activeIndex].year}
          </h4>
          <p className="text-sm text-gray-500 mt-1">
            {timelineData[activeIndex].date}
          </p>
          <h2 className="text-2xl font-bold mt-2">
            {timelineData[activeIndex].title}
          </h2>
          <p className="text-gray-600 mt-4">
            {timelineData[activeIndex].desc}
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={timelineData[activeIndex].img}
            alt={timelineData[activeIndex].title}
            className="rounded-2xl shadow-lg w-full max-h-96 object-cover"
          />
        </div>
      </div>

      {/* Timeline Thumbnails */}
      <div className="relative mt-12">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center justify-center gap-8 overflow-x-auto scrollbar-hide px-10">
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.img}
                alt={item.year}
                className={`h-20 w-28 object-cover rounded-lg shadow ${
                  activeIndex === index ? "opacity-100" : "opacity-40 blur-sm"
                }`}
              />
              <p
                className={`mt-2 text-sm font-medium ${
                  activeIndex === index ? "text-indigo-700" : "text-gray-400"
                }`}
              >
                {item.year}
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Timeline Line */}
      <div className="mt-6 relative">
        <div className="h-0.5 bg-gray-200 w-full"></div>
        <div
          className="absolute top-0 h-0.5 bg-indigo-600 transition-all duration-500"
          style={{
            width: `${((activeIndex + 1) / timelineData.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Growth;
