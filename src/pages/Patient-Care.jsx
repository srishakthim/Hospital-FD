import React from "react";
import PatientCareSection from "../components/Patientcare-Section";
   

export default function Patient() {
  return (
    <div className="bg-white text-gray-800">
   
   <div className="bg-indigo-50 py-10">

        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500">Home / Patient Care Guide</p>
            <h1 className="text-4xl font-bold text-indigo-900 mt-2">Patient Care Guide</h1>
            <p className="text-gray-600 mt-2">
              Your easy Hospital Guide, All in One Place
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center relative">
            <img
              src="https://givingcare.silverts.com/wp-content/uploads/2023/12/bedridden-patient-care.jpg"
              alt="Hospital"
              className="rounded-2xl shadow-lg border-4 border-green-100"
            />
          </div>
        </div>
      </div>
      <PatientCareSection />
    </div>  

      );
}