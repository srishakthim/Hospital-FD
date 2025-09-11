import {React, useState} from "react";
import { ArrowUpRight, Bed, Building2, Award, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";


export default function AboutUs() {
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

    const [activeTab, setActiveTab] = useState("vision");
      
      const tabs = {
    vision: {
      title: "Our Vision",
      text: "It is the vision of the GKNM Hospital to be a humane health care service provider of the highest standard, focusing on providing accessible, safe, effective, and efficient medical services to the Community.",
      image: "https://www.shardahospital.org/assests/images/vision-mission-sharda-hospital.jpg", // replace with your image path
    },
    mission: {
      title: "Our Mission",
      text: "Our mission is to provide world-class medical services with compassion, care, and advanced technology, ensuring patient safety and quality treatment for all sections of society.",
      image: "https://www.ancoracc.org/hs-fs/hubfs/Images/nurse-with-older-lady_55650448.png?width=1800&height=1200&name=nurse-with-older-lady_55650448.png", // replace with your image path
    },
    values: {
      title: "Values",
      text: "We are guided by values of compassion, integrity, excellence, respect, and service, ensuring every patient is treated with dignity and care.",
      image: "https://manyahealthcare.com/img/pf3.jpg", // replace with your image path
    },
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-indigo-50 py-10">
        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500">Home / About Us</p>
            <h1 className="text-4xl font-bold text-indigo-900 mt-2">About Us</h1>
            <p className="text-gray-600 mt-2">
              Our Story Of Growth and Success
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center relative">
            <img
              src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
              alt="Hospital"
              className="rounded-2xl shadow-lg border-4 border-green-100"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
  {/* Overview Section */}
  <div>
    <h3 className="text-indigo-800 font-semibold">Overview</h3>
    <h2 className="text-2xl md:text-3xl font-bold mt-2">PUKRA</h2>
    <p className="text-gray-600 mt-4 leading-relaxed">
      PUKRA Multispeciality Hospital in Coimbatore was established in 1952 by
      the Kuppuswamy Naidu Charitable Trust to care for Women and Children.
      Since then, this institution has grown to encompass the entire
      spectrum of multi specialities of healthcare under one roof. Being the
      most renowned, trusted and the best hospital in Coimbatore, we take
      utmost care in treating the people with the most advanced technologies
      that help people to recover quickly.
    </p>
  </div>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <ArrowUpRight className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">6</h2>
      <p className="text-sm text-gray-600">
        Lac sq.ft<br />Total Infra Size
      </p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <Award className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">73+</h2>
      <p className="text-sm text-gray-600">Years of Experience</p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <Bed className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">650+</h2>
      <p className="text-sm text-gray-600">Patient Beds</p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <Building2 className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">40+</h2>
      <p className="text-sm text-gray-600">Departments</p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <UserCheck className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">250+</h2>
      <p className="text-sm text-gray-600">Doctor&apos;s</p>
    </div>
  </div>
</div>
{/* Growth */}
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
{/* Founder */}
<div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Our Founder
          </h2>
          <p className="text-lg text-indigo-800 font-medium mt-4">
            G.Kuppuswamy Naidu was one of the earliest Indian entrepreneurs. He
            established Lakshmi Mills Company, a major textile yarn and cloth
            manufacturer, in 1910 in Coimbatore, India.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            G.Kuppuswamy Naidu felt the urge in him to build a hospital for women
            and children after his step-sister, Smt. Rajammal and her child’s
            demise. His dream was fulfilled by his brother & sons. The hospital
            started to serve the women & children at the early stages.
          </p>

          {/* Read More Button */}
          <button className="mt-6 px-6 py-2 border border-indigo-700 text-indigo-700 rounded-full font-medium hover:bg-indigo-700 hover:text-white transition">
            Read More
          </button>

          {/* Quote Box */}
          <div className="mt-10 border rounded-xl shadow-sm bg-white p-6 relative">
            <p className="text-indigo-800 text-lg font-medium italic">
              “I am determined I shall do no other charity till I build a hospital
              for women and children in Coimbatore”
            </p>
            <p className="mt-4 text-gray-700 font-semibold">
              – G. Kuppuswamy Naidu
            </p>
          </div>
        </div>

        {/* Right Founder Image */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/founder.png" // replace with your founder image path
            alt="Founder"
            className="w-64 h-72 object-contain rounded-lg"
          />
          <p className="mt-4 text-indigo-700 font-semibold">Founder</p>
          <p className="text-gray-900 font-medium">
            Sri.G.Kuppuswamy Naidu
          </p>
          <p className="text-gray-600 text-sm">(1884–1942)</p>
        </div>
      </div>
    </div>
{/* Vision */}
           <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === key
                ? "bg-indigo-200 text-black"
                : "border border-black text-black hover:bg-gray-100"
            }`}
          >
            {tabs[key].title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {tabs[activeTab].title}
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {tabs[activeTab].text}
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
    </div>
    );
};
