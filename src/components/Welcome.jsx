import React from "react";

export default function WelcomeSection() {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Welcome to <span className="text-green-600">GKNMH</span> — Where
            every life is touched by a legacy of care.
          </h2>
          <p className="text-lg text-gray-700 mt-6">
            Established in the year 1952 by the Kuppuswamy Naidu Charitable
            Trust,{" "}
            <span className="text-green-600 font-semibold">
              GKNM Super Speciality Hospital in Coimbatore
            </span>{" "}
            is recognised for its dedication to women’s and children’s
            healthcare.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            With our commitment to providing world-class healthcare, we take
            immense care in treating all patients with compassion and care. Our
            team of highly skilled doctors, nurses and other staff deliver the
            best possible care and treatment services with advanced technology
            in diverse specialities.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            As the Best Hospital in Coimbatore, we ensure that every patient
            gets the care they deserve.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="px-8 py-4 bg-blue-900 text-white text-lg font-medium rounded-full shadow hover:bg-blue-800 transition">
              View More
            </button>
            <button className="px-8 py-4 border border-blue-900 text-blue-900 text-lg font-medium rounded-full hover:bg-blue-50 transition">
              Find Us
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Hospital Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="bg-indigo-50 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-4xl font-bold text-blue-900">73+</p>
          <p className="text-lg text-gray-700">Years of Experience</p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-4xl font-bold text-blue-900">650+</p>
          <p className="text-lg text-gray-700">Patient Beds</p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-4xl font-bold text-blue-900">40+</p>
          <p className="text-lg text-gray-700">Departments</p>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-8 text-center shadow-sm">
          <p className="text-4xl font-bold text-blue-900">250+</p>
          <p className="text-lg text-gray-700">Doctors</p>
        </div>
      </div>
    </section>
  );
}
