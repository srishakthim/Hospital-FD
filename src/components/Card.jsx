import React from "react";

export default function Card() {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
      title: (
        <>
          <span className="text-blue-600">PUKRA</span> Integrated
          Out-Patient Centre
        </>
      ),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      title: (
        <>
          Master Health <span className="text-blue-600">Check-up</span>
        </>
      ),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
      title: (
        <>
          Find a <span className="text-blue-500">Doctor</span>
        </>
      ),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
      title: (
        <>
          Book an <span className="text-blue-500">Appointment</span>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-80"
        >
          <img src={feature.icon} alt="icon" className="w-10 h-10" />
          <p className="text-blue-800 text-lg font-medium text-base">{feature.title}</p>
        </div>
      ))}
    </div>
  );
}
