import React, { useState } from "react";

const specialties = [
  {
    title: "Cardiac Sciences",
    description:
      "PUKRA is the first and largest private quaternary care institution for cardiovascular sciences in Coimbatore.",
    bg: "bg-indigo-50",
    icon: "/icons/heart.png", // replace with your icon path
    items: [
      "Cardiology (Adult & Paediatric)",
      "Cardio Thoracic Surgery (Adult & Paediatric)",
      "Electrophysiology",
      "Non Invasive Cardiology",
      "Heart Failure Clinic",
      "Heart Transplant",
      "Pulmonary Hypertension Clinic",
      "Cardiac Rehabilitation",
    ],
  },
  {
    title: "Oncology",
    description:
      "Our world-class cancer specialists deliver quality care that is compassionate, easy to access, and personalized to your needs.",
    bg: "bg-green-50",
    icon: "/icons/oncology.png", // replace with your icon path
    items: [
      "Medical Oncology",
      "Radiation Oncology",
      "Surgical Oncology",
      "Haematology",
      "Bone Marrow Transplant",
      "Robotic Surgery",
      "Paediatric Oncology",
      "Palliative Care Services",
    ],
  },
    {
    title: "Paediatrics",
    description:
      "Our world-class cancer specialists deliver quality care that is compassionate, easy to access, and personalized to your needs.",
    bg: "bg-green-50",
    icon: "/icons/oncology.png", // replace with your icon path
    items: [
      "Paediatric surgery",
      "Paediatric Endocrinology",
      "Paediatric Oncology",
      "Paediatric Neurology",
      "Developmental Paediatric",
      "Paediatric infectious Diseases",
      "Neonatal Intensive Care Unit",
    ],
  },
    {
    title: "Neuro Sciences",
    description:
      "Our world-class cancer specialists deliver quality care that is compassionate, easy to access, and personalized to your needs.",
    bg: "bg-green-50",
    icon: "/icons/oncology.png", // replace with your icon path
    items: [
      "Neurology",
      "Neuro Surgery",
      "Neuro Intervention",
     
    ],
  },
];

const CareSpecialties = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white py-10 px-6">
      {/* Header with button */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Personalized Comprehensive Care for Adult & Paediatrics
        </h2>
        <button className="relative px-6 py-2 rounded-full border-2 border-blue-800 text-blue-800 font-medium overflow-hidden group">
          <span className="relative z-10 group-hover:text-white transition duration-300">
            View All
          </span>
          <span className="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
        </button>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {specialties.map((spec, idx) => (
          <div
            key={idx}
            className={`${spec.bg} rounded-3xl p-6 shadow-sm relative transition-colors duration-300`}
          >
            {/* Title + Description */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-900">{spec.title}</h3>
                <p className="text-gray-700 mt-2 max-w-md">{spec.description}</p>
              </div>
              <img
                src={spec.icon}
                alt={spec.title}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Pills - conditionally layout */}
            <div
              className={`mt-6 ${
                spec.title === "Neuro Sciences"
                  ? "flex flex-wrap gap-4" // single row layout
                  : "grid grid-cols-2 gap-4" // default 2-column layout
              }`}
            >
              {spec.items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(item)}
                  className={`px-4 py-2 rounded-full border text-sm shadow-sm text-center transition-colors duration-300 ${
                    selected === item
                      ? "bg-sky-200 border-sky-400 text-blue-900"
                      : "bg-white border-gray-300 text-gray-800 hover:bg-sky-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareSpecialties;