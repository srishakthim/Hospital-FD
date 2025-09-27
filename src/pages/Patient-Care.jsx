import React from "react";
   

export default function Patient() {
  const patient = [
  {
    title: "Out Patient Service",
    image:
      "https://cdn.prod.website-files.com/659c9d2768dc328628d30423/65c5fdf9ff3ca317fd55400a_Apollo%20Hospitals%20Ahmedabad.jpg",
  },
  {
    title: "In Patient Service",
    image:
      "https://media.istockphoto.com/id/481073846/photo/the-long-hard-road-to-recovery.jpg?s=612x612&w=0&k=20&c=8SK7QeWO9VZpy3ei3eBKLKLdcWpgLOOikyByYdrzkwU=",
  },
  {
    title: "Master Health Checkup",
    image:
      "https://www.metropolisindia.com/upgrade/blog/upload/2023/06/Full-body-checkup.jpg",
  },
  {
    title: "Insurance",
    image:
      "https://cdn.turtlemintpro.com/wp-content/uploads//review-and-upgrade-your-health-insurance.webp",
  },
  {
    title: "Patient Education",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_THqSnIn1v2Mf0cxYyDJqrJ9tjgvCCi8_A&s",
  },
  {
    title: "Ambulance Service",
    image: "https://ortho-one.in/wp-content/uploads/2021/07/ambulance-book-1.jpg",
  },
  {
    title: "International Patients",
    image: "https://www.dashospital.com/myimages/inter/global.jpg",
  },
];
  return (
    <div className="bg-white text-gray-800">
   
   <div className="bg-indigo-50 py-10">

        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="mt-[50px]">
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
              className="rounded-2xl shadow-lg border-4 border-green-100 mt-[70px]"
            />
          </div>
        </div>
      </div>
    {/* PatientCareSection */}
      <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
        Patient Care Guide
      </h2>
      <p className="text-gray-700 mb-8 max-w-3xl">
        Expert care that makes a positive difference to you.
      </p>

      {/* Cards in rows */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {patient.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-2xl transform group-hover:scale-110 transition duration-500"
              />
            </div>
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