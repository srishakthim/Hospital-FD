import React from "react";
import { ArrowUpRight, Bed, Building2, Award, UserCheck } from "lucide-react";
import Growth from "../components/Growth";
import Founder from "../components/Founder";
import Vision from "../components/Vision";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <div className="bg-indigo-50 py-10">
        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500">Home / About Us</p>
            <h1 className="text-4xl font-bold text-indigo-900 mt-2">About Us</h1>
            <p className="text-gray-600 mt-2">
              Our Story Of Growth and Success
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center relative">
            <img
              src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
              alt="Hospital"
              className="rounded-2xl shadow-lg border-4 border-green-100"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      {/* <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-indigo-800 font-semibold">Overview</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          PUKRA
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          PUKRA Multispeciality Hospital in Coimbatore was established in 1952 by
          the Kuppuswamy Naidu Charitable Trust to care for Women and Children.
          Since then, this institution has grown to encompass the entire
          spectrum of multi specialities of healthcare under one roof. Being the
          most renowned, trusted and the best hospital in Coimbatore, we take
          utmost care in treating the people with the most advanced technologies
          that help people to recover quickly.
        </p>
      </div> */}

      {/* Stats Section */}
      {/* <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-16">
        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
          <ArrowUpRight className="mx-auto text-indigo-700" size={28} />
          <h2 className="text-3xl font-bold text-indigo-900 mt-2">6</h2>
          <p className="text-sm text-gray-600">Lac sq.ft<br />Total Infra Size</p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
          <Award className="mx-auto text-indigo-700" size={28} />
          <h2 className="text-3xl font-bold text-indigo-900 mt-2">73+</h2>
          <p className="text-sm text-gray-600">Years of Experience</p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
          <Bed className="mx-auto text-indigo-700" size={28} />
          <h2 className="text-3xl font-bold text-indigo-900 mt-2">650+</h2>
          <p className="text-sm text-gray-600">Patient Beds</p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
          <Building2 className="mx-auto text-indigo-700" size={28} />
          <h2 className="text-3xl font-bold text-indigo-900 mt-2">40+</h2>
          <p className="text-sm text-gray-600">Departments</p>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
          <UserCheck className="mx-auto text-indigo-700" size={28} />
          <h2 className="text-3xl font-bold text-indigo-900 mt-2">250+</h2>
          <p className="text-sm text-gray-600">Doctor&apos;s</p>
        </div>
      </div> */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
  {/* Overview Section */}
  <div>
    <h3 className="text-indigo-800 font-semibold">Overview</h3>
    <h2 className="text-2xl md:text-3xl font-bold mt-2">PUKRA</h2>
    <p className="text-gray-600 mt-4 leading-relaxed">
      PUKRA Multispeciality Hospital in Coimbatore was established in 1952 by
      the Kuppuswamy Naidu Charitable Trust to care for Women and Children.
      Since then, this institution has grown to encompass the entire
      spectrum of multi specialities of healthcare under one roof. Being the
      most renowned, trusted and the best hospital in Coimbatore, we take
      utmost care in treating the people with the most advanced technologies
      that help people to recover quickly.
    </p>
  </div>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <ArrowUpRight className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">6</h2>
      <p className="text-sm text-gray-600">
        Lac sq.ft<br />Total Infra Size
      </p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <Award className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">73+</h2>
      <p className="text-sm text-gray-600">Years of Experience</p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <Bed className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">650+</h2>
      <p className="text-sm text-gray-600">Patient Beds</p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <Building2 className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">40+</h2>
      <p className="text-sm text-gray-600">Departments</p>
    </div>

    <div className="bg-indigo-50 p-6 rounded-xl text-center shadow-sm">
      <UserCheck className="mx-auto text-indigo-700" size={28} />
      <h2 className="text-3xl font-bold text-indigo-900 mt-2">250+</h2>
      <p className="text-sm text-gray-600">Doctor&apos;s</p>
    </div>
  </div>
</div>
<Growth />
<Founder />
<Vision />

    </div>
  );
}
