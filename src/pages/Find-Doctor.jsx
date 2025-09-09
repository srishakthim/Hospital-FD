import React from "react";
import { Search } from "lucide-react"; // for search icon (npm install lucide-react)
import DoctorsList from "../components/Doctors-List";
import { FaFileMedical, FaVials, FaCreditCard } from "react-icons/fa";


export default function FindDoctor() {
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
      <DoctorsList />

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
