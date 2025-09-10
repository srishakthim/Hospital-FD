import React from "react";
   

export default function Academics() {
  const academics = [
  {
    title: "Medical Science",
    image: "https://static.vecteezy.com/system/resources/thumbnails/050/817/819/small_2x/happy-smiling-male-doctor-with-hand-present-something-empty-space-standing-isolate-on-transparent-background-png.png",
  },
  {
    title: "Institute of Nursing",
    image: "https://thumbs.wbm.im/pw/small/3daeb86ba8b71c4136ec297dd281e861.jpg",
  },
  {
    title: "Allied Health Science",
    image: "https://etimg.etb2bimg.com/photo/120424911.cms",
  },
];
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
{/* AcademicsSection */}
<div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
        Academics
      </h2>
      <p className="text-gray-700 mb-8 max-w-3xl">
        GKNM Hospital was established in the year 1952 with a pure motto of
        servicing the human community through science and humanness.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {academics.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-indigo-900">
                {item.title}
              </h3>
              <p className="text-sm text-indigo-900 mt-4 cursor-pointer hover:underline">
                View More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>  

      );
}