import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Departmentsgrid from "../components/Departmentsgrid";

export default function Specialities() {
  return (
    <section className="bg-[#f5f7ff] py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div>
          <p className="text-gray-500 mb-2">Home / Specialities</p>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Specialities</h2>
          <p className="text-gray-600 mb-6">
            Every Care You Need, Right Here – Where You Feel Right At Home
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium">
              Enquiry Now
            </button>
            <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-full font-medium">
              Tele Consultation
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hand-touching-icons-medical-technology-network-connection-medical-technology-concept-blue-background-copy-space_150455-14291.jpg"
            alt="Doctor"
            className="rounded-2xl shadow-lg"
          />

          {/* Floating Card 1 */}
          <div className="absolute top-6 left-0 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
            <FaThumbsUp className="text-green-500 text-xl" />
            <div>
              <h3 className="text-blue-900 font-bold text-sm">Heart Care</h3>
              <p className="text-gray-500 text-xs">teams lead by pioneers</p>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-6 right-0 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
            <span className="text-green-500 text-lg">✔</span>
            <div>
              <h3 className="text-blue-900 font-bold text-sm">
                24 Hour Doctors
              </h3>
              <p className="text-gray-500 text-xs">can help your needs</p>
            </div>
          </div>
        </div>
      </div>
      <Departmentsgrid />
    </section>
  );
}
