import React from "react";

const Hero = () => {
  return (
    <section className="w-full pt-40 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {/* Left Image */}
        <div className="relative">
          <img
            src="https://www.parkhospital.in/storage/app/public/images/about/kJTAbDtDkQjDByztnJsosLOTcZCTaO92jhKteuOV.webp"
            alt="hospital"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md flex items-center gap-4 w-72">
            {/* Small Image inside the box */}
            <img
              src="https://e7.pngegg.com/pngimages/297/227/png-clipart-hospital-health-care-clinic-hospital-miscellaneous-medicine-thumbnail.png/60"
              alt="icon"
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Text Content */}
            <div>
              <h3 className="font-bold text-gray-800">
                Celebrating 73+ years of quality care
              </h3>
              <p className="text-gray-600 text-sm">Since 1952</p>
            </div>
          </div>

          {/* <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-bold text-gray-800">
              Celebrating 73+ years of quality care
            </h3>
            <p className="text-gray-600 text-sm">Since 1952</p>
          </div> */}
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center space-y-4">
          <span className="text-blue-700 font-semibold">
            Excellence in Quality Healthcare
          </span>
          <h2 className="text-5xl font-bold text-gray-900">
            We care <br></br><span className="text-green-600">And it shows...</span>
          </h2>
          <p className="text-gray-600">
            Compassionate Care That Makes a Real Difference
          </p>
          <button className="w-max border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
            Discover Our Services
          </button>

          {/* Dots indicator */}
          <div className="flex space-x-2 mt-4">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === 0 ? "bg-blue-700" : "bg-gray-300"
                  }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
