import React, { useState } from "react";

const Vision = () => {
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
  );
};

export default Vision;
