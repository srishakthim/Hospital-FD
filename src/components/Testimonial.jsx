import React from "react";
import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFileMedical, FaVials, FaCreditCard } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const testimonials = [
    {
      doctor: "Dr. K. A. Sambasivam",
      dept: "Cardiology",
      image: "https://static.vecteezy.com/system/resources/previews/026/576/128/non_2x/smiling-young-woman-isolated-png.png",
      review:
        "The ICU staff were very kind towards patients. Really grateful for their service. I thank Dr Sambasivam sir and their whole team for their diagnosis and timely treatment.",
      patient: "Kavitha Chandrasekaran",
      rating: 5,
    },
    {
      doctor: "Dr. G. Parvathy",
      dept: "Neurology",
      image: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBwbmd8ZW58MHx8MHx8fDA%3D",
      review:
        "Dr. G. Parvathy Neurology department treated Sanjana very well. We are very satisfied. All nurses also gave the best service. Thank you.",
      patient: "Mahadevi Gulyam",
      rating: 5,
    },
    {
      doctor: "Dr. Amutha Giridhar",
      dept: "Obstetrics and Gynaecology",
      image: "https://static.vecteezy.com/system/resources/previews/051/555/261/non_2x/smiling-professional-woman-indoors-png.png",
      review:
        "Dr. Amutha Giridhar is simply remarkable. She has meticulously cared for my pregnancy journey, from the initial follicular study to a successful normal delivery.",
      patient: "Brinda Pugalenthy",
      rating: 5,
    },
    {
      doctor: "Dr. P. Arulraj",
      dept: "Oncology",
      image: "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      review:
        "My Wife had Da Vinci Robotic – precise & scarless Total Thyroidectomy Surgery at PUKRA Hospital with a steady and fast recovery. We Thank Dr. P. Arulraj and the Entire team at PUKRA Hospital.",
      patient: "RAJA C",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // ✅ still 4 on large screens
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // 2 on tablet
      { breakpoint: 640,  settings: { slidesToShow: 1 } }, // 1 on mobile
    ],
  };

  return (
    <div className="px-10 py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

      {/* Testimonials Slider */}
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="px-3">
            <div className="bg-white shadow-md rounded-2xl border border-gray-200 h-[280px] flex flex-col justify-between p-6">
            
              {/* Doctor Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={t.image}
                    alt={t.doctor}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{t.doctor}</h3>
                    <p className="text-gray-500 text-sm">{t.dept}</p>
                  </div>
                </div>
                <FaGoogle className="text-3xl text-[#4285F4]" />
              </div>

              {/* Review */}
              <p className="text-gray-700 flex-grow">{t.review}</p>

              {/* Patient + Rating */}
              <div className="mt-6 flex justify-between items-center">
                <p className="font-semibold">{t.patient}</p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="bg-[#243c94] text-white p-6 rounded-2xl flex items-start space-x-4">
          <FaFileMedical className="text-4xl" />
          <div>
            <h3 className="font-semibold text-lg">Web Portal - Out Patients</h3>
            <p className="text-sm opacity-90">
              Streamlined Care Anytime @ Your Fingertips
            </p>
          </div>
        </div>

        <div className="bg-[#1556d6] text-white p-6 rounded-2xl flex items-start space-x-4">
          <FaVials className="text-4xl" />
          <div>
            <h3 className="font-semibold text-lg">Lab Results</h3>
            <p className="text-sm opacity-90">
              Instant Access To Your Health – Track It At Ease
            </p>
          </div>
        </div>

        <div className="bg-[#0d8c48] text-white p-6 rounded-2xl flex items-start space-x-4">
          <FaCreditCard className="text-4xl" />
          <div>
            <h3 className="font-semibold text-lg">Online Payment</h3>
            <p className="text-sm opacity-90">
              Pay Easy, Pay Quickly With Online Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
