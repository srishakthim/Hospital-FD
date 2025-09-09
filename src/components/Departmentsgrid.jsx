import React from "react";

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

export default function Departmentsgrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-sm border
              w-full h-40 cursor-pointer transition duration-300 
              ${
                dept.highlight
                  ? "bg-green-50 hover:bg-green-100"
                  : "bg-indigo-50 hover:bg-indigo-100"
              }`}
          >
            <img src={dept.icon} alt={dept.name} className="h-12 w-12 mb-4" />
            <p className="text-center text-sm font-medium text-indigo-900">
              {dept.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
