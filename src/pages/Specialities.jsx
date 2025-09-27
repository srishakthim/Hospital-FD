import React from "react";
import { FaThumbsUp } from "react-icons/fa";

export default function Specialities() {
  const departments = [
    { name: "Dermatology Aesthetics and Lasers", icon: "/icons/dermatology.png" },
    { name: "Diagnostic Radiology", icon: "/icons/radiology.png" },
    { name: "Emergency Medicine", icon: "/icons/emergency.png" },
    { name: "Endocrinology and Diabetology", icon: "/icons/diabetology.png" },
    { name: "ENT and Skull Base Surgery", icon: "/icons/ent.png" },
    { name: "Gastroenterology", icon: "/icons/gastro.png" },
    { name: "Gastrointestinal and HPB Surgery", icon: "/icons/hpb.png" },
    { name: "General Medicine", icon: "/icons/general-medicine.png" },
    { name: "General Surgery", icon: "/icons/surgery.png", highlight: true },
    { name: "Home Health Care Services", icon: "/icons/homecare.png" },
    { name: "Intensive Care Unit", icon: "/icons/icu.png" },
    { name: "Interventional Radiology", icon: "/icons/interventional.png" },
    { name: "Laboratory Medicine", icon: "/icons/lab.png" },
    { name: "Nephrology", icon: "/icons/nephrology.png" },
    { name: "Neurology", icon: "/icons/neurology.png" },
    { name: "Neurosurgery", icon: "/icons/neurosurgery.png" },
    { name: "Nuclear Medicine and Molecular Imaging", icon: "/icons/nuclear.png" },
    { name: "Obstetrics and Gynaecology", icon: "/icons/obg.png" },
    { name: "Oncology", icon: "/icons/oncology.png" },
    { name: "Ophthalmology", icon: "/icons/ophthalmology.png" },
    { name: "Orthopedics", icon: "/icons/ortho.png" },
    { name: "Paediatrics", icon: "/icons/pediatrics.png" },
    { name: "Pain Medicine", icon: "/icons/pain.png" },
    { name: "Palliative Care Service", icon: "/icons/palliative.png" },
  ];

  return (
    <section className="bg-[#f5f7ff] py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="mt-[50px]">
          <p className="text-gray-500 mb-2 text-sm md:text-base">
            Home / Specialities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Specialities
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
            Every Care You Need, Right Here – Where You Feel Right At Home
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium text-sm md:text-base">
              Enquiry Now
            </button>
            <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full font-medium text-sm md:text-base">
              Tele Consultation
            </button>
          </div>
        </div>

        {/* Right Content (Image + Floating Cards) */}
<div className="relative mt-[70px]">
          <img
            src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hand-touching-icons-medical-technology-network-connection-medical-technology-concept-blue-background-copy-space_150455-14291.jpg"
            alt="Doctor"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* Floating Card 1 */}
          <div className="absolute top-4 left-2 sm:top-6 sm:left-4 bg-white rounded-xl shadow-md px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 max-w-[180px]">
            <FaThumbsUp className="text-green-500 text-lg sm:text-xl" />
            <div>
              <h3 className="text-blue-900 font-bold text-xs sm:text-sm">Heart Care</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs">teams led by pioneers</p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-4 right-2 sm:bottom-6 sm:right-4 bg-white rounded-xl shadow-md px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 max-w-[180px]">
            <span className="text-green-500 text-base sm:text-lg">✔</span>
            <div>
              <h3 className="text-blue-900 font-bold text-xs sm:text-sm">24 Hour Doctors</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs">can help your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {departments.map((dept, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl shadow-sm border
                w-full h-32 sm:h-40 cursor-pointer transition duration-300 
                ${
                  dept.highlight
                    ? "bg-green-50 hover:bg-green-100"
                    : "bg-indigo-50 hover:bg-indigo-100"
                }`}
            >
              <img src={dept.icon} alt={dept.name} className="h-10 w-10 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
              <p className="text-center text-xs sm:text-sm font-medium text-indigo-900 leading-snug">
                {dept.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
