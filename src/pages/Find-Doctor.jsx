import React from "react";
import { Search } from "lucide-react"; 
import { FaFileMedical, FaVials, FaCreditCard } from "react-icons/fa";


export default function FindDoctor() {
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
  return (
    <div className="bg-indigo-50">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-500 text-sm">
            Home / <span className="text-gray-700">Find a Doctor</span>
          </p>
          <h1 className="text-4xl font-bold text-indigo-900 mt-2">
            Find a Doctor
          </h1>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://media.istockphoto.com/id/938197650/photo/doctor-writing-on-sheet-in-clipboard.jpg?s=612x612&w=0&k=20&c=4MF20eMIbowXkfR9qp95a03OaAa94LrWo92iiIlilfw=" // replace with your image
            alt="Find a Doctor"
            className="rounded-3xl border-2 border-green-600 max-h-72 object-cover"
          />
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search by doctor's name"
            className="flex-grow px-6 py-3 outline-none text-gray-700 text-base"
          />
          <button className="bg-indigo-900 p-3 rounded-full flex items-center justify-center mr-2">
            <Search size={18} className="text-white" />
          </button>
        </div>
      </div>
    {/* Doctors List Section */}
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

       <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-[#243c94] text-white p-6 rounded-2xl flex items-start space-x-4">
                <FaFileMedical className="text-4xl" />
                <div>
                  <h3 className="font-semibold text-lg">Web Portal - Out Patients</h3>
                  <p className="text-sm opacity-90">
                    Streamlined Care Anytime @ Your Fingertips
                  </p>
                </div>
              </div>
      
              <div className="bg-[#1556d6] text-white p-6 rounded-2xl flex items-start space-x-4">
                <FaVials className="text-4xl" />
                <div>
                  <h3 className="font-semibold text-lg">Lab Results</h3>
                  <p className="text-sm opacity-90">
                    Instant Access To Your Health – Track It At Ease
                  </p>
                </div>
              </div>
      
              <div className="bg-[#0d8c48] text-white p-6 rounded-2xl flex items-start space-x-4">
                <FaCreditCard className="text-4xl" />
                <div>
                  <h3 className="font-semibold text-lg">Online Payment</h3>
                  <p className="text-sm opacity-90">
                    Pay Easy, Pay Quickly With Online Payment
                  </p>
                </div>
              </div>
            </div>
      
    </div>
    
  );
}
