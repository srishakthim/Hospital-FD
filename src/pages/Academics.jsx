import React from "react";
import AcademicsSection from "../components/Academics-Section";
   

export default function Academics() {
  return (
    <div className="bg-white text-gray-800">
   
   <div className="bg-indigo-50 py-10">

        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500">Home / Academics</p>
            <h1 className="text-4xl font-bold text-indigo-900 mt-2">Academics</h1>
            <p className="text-gray-600 mt-2">
              Building The Future By Empowering Minds
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center relative">
            <img
              src="https://gdhospitals.com/wp-content/uploads/2024/07/Check-Ups.jpg"
              alt="Hospital"
              className="rounded-2xl shadow-lg border-4 border-green-100"
            />
          </div>
        </div>
      </div>
      <AcademicsSection />
    </div>  

      );
}