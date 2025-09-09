import React from "react";

const doctors = [
    {
        name: "Dr. K. A. Sambasivam",
        degree: "MBBS, MD, DM, DCL, FCSI, FACC, FESC",
        role: "Department Chairman - Senior Consultant Interventional Cardiologist",
        image: "https://static.vecteezy.com/system/resources/previews/041/409/060/non_2x/ai-generated-a-female-doctor-with-a-stethoscope-isolated-on-transparent-background-free-png.png",
    },
    {
        name: "Dr. P. Chandrasekar",
        degree: "MBBS, MS (Surg), DNB (Surg), DNB (CTS), MCh (Am)",
        role: "Chairman Department Cardiothoracic Surgery & Director Cardiac Transplant Services",
        image: "https://i.pinimg.com/736x/00/f8/e6/00f8e62a60bba40c1cbc109b2a8c559a.jpg",
    },
    {
        name: "Dr. B. Sivanesan",
        degree: "MBBS, MD, DM - DM Medical Oncology, DNB",
        role: "Chairman Department of Oncology & HOD Medical Oncology",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS0FYNooCkZDixEyLcSP_TRsSyYcZHqXm-p86OWLqSotJkPUji7h4sVnMsenEerpuX7o&usqp=CAU",
    },
    {
        name: "Dr. N. P. Kamalesh",
        degree: "MBBS, MS, MCh (Gastrointestinal Surgery), FMAS, FICS, FACS",
        role: "Senior Consultant Gastrointestinal Surgeon",
        image: "https://www.manipalhospitals.com/uploads/doctors_photo/best-icu-and-critical-care-specialist-in-mysore_1681385250.png",
    },
    {
        name: "Dr. Amutha Giridhar",
        degree: "MBBS, MD (OBG)",
        role: "Senior Consultant Obstetrics & Gynaecology",
        image: "https://www.manipalhospitals.com/uploads/doctors_photo/dr-meena-muthaiah-consultant-obstetrics-gynaecology.png",
    },
    {
        name: "Dr. B. Antony Terance",
        degree: "MB, MCH(CTS), DNB, ECTS, EDCTA",
        role: "Senior Consultant Cardiothoracic Surgeon",
        image: "https://www.manipalhospitals.com/uploads/doctors_photo/dr-aakansha-malawat-best-dental-medicine-doctor-in-dhakuria-manipal-hospitals.png",
    },
];

export default function DoctorsList() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filter */}
            <div className="col-span-1">
                <h3 className="font-semibold text-gray-700 mb-4">Filter by</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-600">
                        Specialities
                    </label>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <input
                            type="text"
                            placeholder="Search speciality"
                            className="flex-grow bg-transparent outline-none text-sm text-gray-700"
                        />
                        <span className="text-gray-500">→</span>
                    </div>
                </div>
            </div>

            {/* Doctor Cards */}
            <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doc, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h4 className="font-bold text-gray-900">{doc.name}</h4>
                            <p className="text-xs text-gray-600 mt-1">{doc.degree}</p>
                            <p className="text-sm text-green-700 mt-2">{doc.role}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <button className="px-4 py-1 text-sm border border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-50 whitespace-nowrap">
                                    View Profile
                                </button>
                                <button className="px-4 py-1 text-sm border border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-50 whitespace-nowrap">
                                    Book an Appointment
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
