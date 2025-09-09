import React from "react";

const Founder = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Our Founder
          </h2>
          <p className="text-lg text-indigo-800 font-medium mt-4">
            G.Kuppuswamy Naidu was one of the earliest Indian entrepreneurs. He
            established Lakshmi Mills Company, a major textile yarn and cloth
            manufacturer, in 1910 in Coimbatore, India.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            G.Kuppuswamy Naidu felt the urge in him to build a hospital for women
            and children after his step-sister, Smt. Rajammal and her child’s
            demise. His dream was fulfilled by his brother & sons. The hospital
            started to serve the women & children at the early stages.
          </p>

          {/* Read More Button */}
          <button className="mt-6 px-6 py-2 border border-indigo-700 text-indigo-700 rounded-full font-medium hover:bg-indigo-700 hover:text-white transition">
            Read More
          </button>

          {/* Quote Box */}
          <div className="mt-10 border rounded-xl shadow-sm bg-white p-6 relative">
            <p className="text-indigo-800 text-lg font-medium italic">
              “I am determined I shall do no other charity till I build a hospital
              for women and children in Coimbatore”
            </p>
            <p className="mt-4 text-gray-700 font-semibold">
              – G. Kuppuswamy Naidu
            </p>
          </div>
        </div>

        {/* Right Founder Image */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/founder.png" // replace with your founder image path
            alt="Founder"
            className="w-64 h-72 object-contain rounded-lg"
          />
          <p className="mt-4 text-indigo-700 font-semibold">Founder</p>
          <p className="text-gray-900 font-medium">
            Sri.G.Kuppuswamy Naidu
          </p>
          <p className="text-gray-600 text-sm">(1884–1942)</p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
