import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFileMedical, FaVials, FaCreditCard } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../Assets/1 infra.jpg";
import image2 from "../Assets/2 infra.jpg";
import image3 from "../Assets/front image.png";
import image4 from "../Assets/Final Image-VR.jpg";

const Hero = () => {
  const slides = [image1, image2, image3, image4];

  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
      title: (
        <>
          <span className="text-blue-600">PUKRA</span> Integrated Out-Patient
          Centre
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

  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [selected, setSelected] = useState(null);

 const specialities = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4762/4762314.png",
    title: "Cardiac Department",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
    title: "Diabetology",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png",
    title: "Orthopedic",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    title: "Internal Medicine",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
    title: "Neurology",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2621/2621060.png",
    title: "Intensive Care Unit",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920265.png",
    title: "Gastrology",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
    title: "Dianology",
  },
];

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
};

const groupedSpecialities = chunkArray(specialities, 4);

  const chunkedSpecialities = [];
  for (let i = 0; i < specialities.length; i += 12) {
    chunkedSpecialities.push(specialities.slice(i, i + 12));
  }

  const totalSlides = chunkedSpecialities.length;

  const doctors = [
    {
      name: "Dr. N. P. Kamalesh",
      degrees: "MBBS, MS, DNB (Gastrointestinal Surgery), FMAS, FICS, FACS",
      title:
        "Chairperson - General Surgery and Chief in Gastrointestinal, HPB and Bariatric Surgery",
      img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl9hX3Bob3RvX29mX2FfbWlkZGxlX2FnZV9tYWxlX2luZGlhbl9kb2N0b3JfaXNvbF8wZTAzNGE0YS1iMWU1LTQxOTEtYmU0Zi1iYmE2NWJkMjNmMmEucG5n.png",
    },
    {
      name: "Dr. Amutha Giridhar",
      degrees: "MBBS, MD OBG",
      title: "Chairperson - Obstetrics & Gynecology",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8E04i4f3RG9W9408PPhuTYafgQOHWStcnA&s",
    },
    {
      name: "Dr. B. Antony Terance",
      degrees: "MD, MRCPCH, DAA, DPSM, EDPRM",
      title:
        "Chairperson, Department of Paediatrics and Consultant paediatrics & pulmonology",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMXJJqsDvmiJTruxIZUI0uzylSJ93EYxNhw&s",
    },
    {
      name: "Dr. P. Ramachandran",
      degrees: "MBBS, MD",
      title: "Department Chairman (Gen. Med) Consultant Nephrologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjq-Cy9FzwSQ7tPUjspsGCDBXChRNxrqltGu0zEdQRvEUj_TaP1g3sgncsI74rEQXaupk&usqp=CAU",
    },
    {
      name: "Dr. V. S. Prasadh",
      degrees: "MBBS, DNB",
      title: "Chief of Medicine & Consultant General Physician",
      img: "https://png.pngtree.com/png-vector/20240317/ourmid/pngtree-indian-doctor-hospital-healthcare-worker-png-image_11857501.png",
    },
    {
      name: "Dr. K. S. Vengetesh",
      degrees: "MBBS, MS–Gen Surg, M.R.C.S–Edin, M.Ch–Uro",
      title: "Consultant Urologist",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBASqXGwIyvEMU0Lozjs64HmMKdEtkWgExHw&s",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % doctors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleDoctors = [];
  for (let i = 0; i < 5; i++) {
    visibleDoctors.push(doctors[(startIndex + i) % doctors.length]);
  }

const specialties = [
  {
    title: "Cardiac Sciences",
    description:
      "PUKRA is the first and largest private quaternary care institution for cardiovascular sciences in Coimbatore.",
    bg: "bg-indigo-50",
    icon: "/icons/heart.png",
    items: [
      "Cardiology (Adult & Paediatric)",
      "Cardio Thoracic Surgery (Adult & Paediatric)",
      "Electrophysiology",
      "Non Invasive Cardiology",
      "Heart Failure Clinic",
      "Heart Transplant",
      "Pulmonary Hypertension Clinic",
      "Cardiac Rehabilitation",
    ],
  },
  {
    title: "Diabetology",
    description:
      "Comprehensive care for diabetes management, prevention, and lifestyle modification with a multidisciplinary team.",
    bg: "bg-green-50",
    icon: "/icons/diabetes.png",
    items: [
      "Diabetes Screening",
      "Type 1 & Type 2 Diabetes Care",
      "Gestational Diabetes",
      "Diabetic Foot Care",
      "Lifestyle & Nutrition Counseling",
      "Insulin Therapy",
    ],
  },
  {
    title: "Orthopedic",
    description:
      "Expert care for bones, joints, ligaments, and muscles with advanced treatments and minimally invasive surgery.",
    bg: "bg-yellow-50",
    icon: "/icons/orthopedic.png",
    items: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Arthroscopy",
      "Trauma & Fracture Care",
      "Paediatric Orthopedics",
    ],
  },
];


  const cards = [
    {
      title: "4th Gen Da Vinci Xi Robotic Surgical System",
      img: "https://lirp.cdn-website.com/48020b6c/dms3rep/multi/opt/Intelligent-OR-6beedc3b-640w.png",
    },
    {
      title: "Neuro IR Biplane Cathlab",
      img: "https://lirp.cdn-website.com/48020b6c/dms3rep/multi/opt/C-Arm+Machine-640w.png",
    },
    {
      title: "PET CT Scanner",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Awl5RrKauPMgbOJA5sNxXMX_GNA2X1aVli8hd9q8xHT8gd35DeChzylesw0tFH0ZVvA&usqp=CAU",
    },
    {
      title: "3 Tesla MRI Scan",
      img: "https://images.stockcake.com/public/d/9/f/d9ffa4bf-9b7b-4b03-b504-98384a90a1b2_large/modern-surgical-room-stockcake.jpg",
    },
    {
      title: "Gamma Knife Radiosurgery",
      img: "https://lirp.cdn-website.com/48020b6c/dms3rep/multi/opt/Intelligent-OR-6beedc3b-640w.png",
    },
    {
      title: "Linear Accelerator",
      img: "https://labds.com/wp-content/uploads/2022/04/Planning-and-Constructing-a-Hybrid-Operating-Room-2-800x400-1.png",
    },
    {
      title: "Advanced Cathlab System",
      img: "https://www.inprocorp.com/globalassets/spaces-block-images/surgery-room.jpg",
    },
    {
      title: "Digital X-Ray Imaging",
      img: "https://myspineassociates.com/wp-content/uploads/2024/10/mako-img.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cards.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const upcomingEvent = {
    date: "28",
    month: "SEP",
    title: "Run for Little Hearts",
  };

  const featuredNews = {
    date: "Aug 14, 2025",
    title:
      "PUKRA Hospital Successfully Hosted the Asthma Training Module for Paediatricians",
    description:
      "PUKRA Hospital successfully held the Asthma Training Module on 14 August 2025, as a Pre Event Workshop of Kongu Pedicon 2025, in the IOP Auditorium and organized by the IAP National Respiratory Chapter, the full-day program featured accessible, easy-to-follow lectures and live demonstrations covering essential aspects of childhood asthma. Participated More than 40 Delegates Across the Region.",
    img: "/images/news/asthma-training.jpg", // replace with your image
  };

  const recentNews = [
    {
      date: "Jul 11, 2025",
      title:
        "Indian Society of Neuroradiology (ISNR) Midterm Conference 2025 hosted by PUKRA",
      img: "/images/news/isnr.jpg",
    },
    {
      date: "Jun 28, 2025",
      title:
        "PUKRA Hospital’s 73rd Founder’s day event with vision and commitment to healthcare excellence",
      img: "/images/news/founders-day.jpg",
    },
    {
      date: "Jun 14, 2025",
      title: "Thoracic Ultrasound Workshop 2025",
      img: "/images/news/ultrasound.jpg",
    },
  ];

  const testimonials = [
    {
      doctor: "Dr. K. A. Sambasivam",
      dept: "Cardiology",
      image:
        "https://static.vecteezy.com/system/resources/previews/026/576/128/non_2x/smiling-young-woman-isolated-png.png",
      review:
        "The ICU staff were very kind towards patients. Really grateful for their service. I thank Dr Sambasivam sir and their whole team for their diagnosis and timely treatment.",
      patient: "Kavitha Chandrasekaran",
      rating: 5,
    },
    {
      doctor: "Dr. G. Parvathy",
      dept: "Neurology",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBwbmd8ZW58MHx8MHx8fDA%3D",
      review:
        "Dr. G. Parvathy Neurology department treated Sanjana very well. We are very satisfied. All nurses also gave the best service. Thank you.",
      patient: "Mahadevi Gulyam",
      rating: 5,
    },
    {
      doctor: "Dr. Amutha Giridhar",
      dept: "Obstetrics and Gynaecology",
      image:
        "https://static.vecteezy.com/system/resources/previews/051/555/261/non_2x/smiling-professional-woman-indoors-png.png",
      review:
        "Dr. Amutha Giridhar is simply remarkable. She has meticulously cared for my pregnancy journey, from the initial follicular study to a successful normal delivery.",
      patient: "Brinda Pugalenthy",
      rating: 5,
    },
    {
      doctor: "Dr. P. Arulraj",
      dept: "Oncology",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
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
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
     <section className="w-full pt-24 md:pt-40 pb-16 bg-gray-50">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12">
    {/* Left Carousel (images - 2/3 width) */}
    <div className="relative md:col-span-2">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
        loop={true}
        className="rounded-2xl"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`hospital-${i}`}
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover" 
              // 👆 fixed height + object-cover keeps size consistent
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Right Static Content (smaller) */}
    <div className="flex flex-col justify-center space-y-3 text-center md:text-left md:col-span-1">
      <span className="text-blue-700 font-semibold text-xs sm:text-sm">
        Excellence in Quality and Scientific Healthcare
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
        Beyond Treatment,
        <br />
<span className="bg-[linear-gradient(90deg,#606C32,#827145)] bg-clip-text text-transparent">
  Towards Wellness!
</span>
      </h2>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
        Pukra is a state-of-the-art super specialty hospital committed to
        providing world-class medical care with a patient-centric approach.
        Equipped with advanced technology and a team of highly experienced
        specialists, we offer comprehensive healthcare services across multiple
        disciplines, ensuring excellence in diagnosis, treatment, and recovery.
      </p>
      <div className="flex justify-center md:justify-start">
    <button className="relative px-5 py-2 rounded-full border-2 border-[#606C32] text-[#606C32] font-medium overflow-hidden group">
  <span className="relative z-10 group-hover:text-white transition duration-300">
     Discover Our Services
  </span>
  <span className="absolute inset-0 bg-[linear-gradient(90deg,#606C32,#827145)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
</button>

      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-6 lg:px-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img src={feature.icon} alt="icon" className="w-10 h-10" />
            <p className="text-blue-800 text-base sm:text-lg font-medium">
              {feature.title}
            </p>
          </div>
        ))}
      </section>
      {/* Intro Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Welcome to <span className="bg-[linear-gradient(90deg,#606C32,#827145)] bg-clip-text text-transparent">PUKRA</span> — Where
              every life is touched by a legacy of care.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mt-6 leading-relaxed">
              Established in the year 1952 by the Kuppuswamy Naidu Charitable
              Trust,{" "}
<span className="bg-[linear-gradient(90deg,#606C32,#827145)] bg-clip-text text-transparent">
                PUKRA Super Speciality Hospital in Coimbatore
              </span>{" "}
              is recognised for its dedication to women’s and children’s
              healthcare.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
              With our commitment to providing world-class healthcare, we take
              immense care in treating all patients with compassion and care.
              Our team of highly skilled doctors, nurses and other staff deliver
              the best possible care and treatment services with advanced
              technology in diverse specialities.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
              As the Best Hospital in Coimbatore, we ensure that every patient
              gets the care they deserve.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[linear-gradient(90deg,#606C32,#827145)] 
  hover:bg-[linear-gradient(90deg,#827145,#606C32)] text-white text-base sm:text-lg font-medium rounded-full shadow transition">
                View More
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-[#606C32]-900 text-[#606C32]-900 text-base sm:text-lg font-medium rounded-full hover:bg-blue-50 transition">
                Find Us
              </button>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Hospital Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "73+", label: "Years of Experience" },
            { value: "650+", label: "Patient Beds" },
            { value: "40+", label: "Departments" },
            { value: "250+", label: "Doctors" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-indigo-50 rounded-2xl p-6 sm:p-8 text-center shadow-sm"
            >
              <p className="text-3xl sm:text-4xl font-bold text-blue-900">
                {stat.value}
              </p>
              <p className="text-sm sm:text-lg text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialities Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
       <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
>
  {groupedSpecialities.map((group, slideIndex) => (
    <SwiperSlide key={slideIndex}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {group.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition h-36"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mb-4"
            />
            <p className="text-sm font-medium text-blue-900 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </SwiperSlide>
  ))}
</Swiper>


          {/* Progress bar + arrows */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex-1 h-[3px] bg-gray-200 relative">
              <div
                className="absolute left-0 top-0 h-[3px] bg-green-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex gap-2 ml-4">
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 transition"
              >
                ←
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10 px-4">
        {/* Header Row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 px-4 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our Doctors
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Get online consultations with top doctors for all of your health
              concerns!
            </p>
          </div>
          <div className="mt-4 md:mt-0">
           <button className="relative px-5 py-2 rounded-full border-2 border-[#606C32] text-[#606C32] font-medium overflow-hidden group">
  <span className="relative z-10 group-hover:text-white transition duration-300">
    Explore Our Medical Team
  </span>
  <span className="absolute inset-0 bg-[linear-gradient(90deg,#606C32,#827145)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
</button>

          </div>
        </div>

        {/* Doctors slider */}
        <div className="flex gap-4 overflow-x-auto md:overflow-hidden px-2 md:px-0">
          {visibleDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[18%] flex-shrink-0 relative flex flex-col bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 group"
            >
             <img
  src={doc.img}
  alt={doc.name}
  className="w-full h-60 object-cover rounded-t-xl"
/>
              <div className="p-4 text-center flex-grow">
                <h3 className="font-semibold text-lg text-gray-800">
                  {doc.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{doc.degrees}</p>
                <p className="text-sm text-teal-700 font-medium mt-2">
                  {doc.title}
                </p>
              </div>
              <div className="p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className=" bg-[linear-gradient(90deg,#606C32,#827145)] text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition text-sm">
                  Book an Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-10 px-4 md:px-6">
        {/* Header with button */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug max-w-2xl">
            Personalized Comprehensive Care for Adult & Paediatrics
          </h2>
          <button className="relative px-5 py-2 rounded-full border-2 border-[#606C32] text-[#606C32] font-medium overflow-hidden group">
  <span className="relative z-10 group-hover:text-white transition duration-300">
          View All
  </span>
  <span className="absolute inset-0 bg-[linear-gradient(90deg,#606C32,#827145)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
</button>

        </div>

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec, idx) => (
            <div
              key={idx}
              className={`${spec.bg} rounded-3xl p-6 shadow-sm relative transition-colors duration-300`}
            >
              {/* Title + Description */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-900">
                    {spec.title}
                  </h3>
                  <p className="text-gray-700 mt-2 text-sm md:text-base">
                    {spec.description}
                  </p>
                </div>
                <img
                  src={spec.icon}
                  alt={spec.title}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* Pills - responsive layout */}
              <div
                className={`mt-6 ${
                  spec.title === "Neuro Sciences"
                    ? "flex flex-wrap gap-3"
                    : "grid grid-cols-2 sm:grid-cols-3 gap-3"
                }`}
              >
                {spec.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(item)}
                    className={`px-3 py-2 rounded-full border text-xs md:text-sm shadow-sm text-center transition-colors duration-300 ${
                      selected === item
                        ? "bg-sky-200 border-sky-400 text-blue-900"
                        : "bg-white border-gray-300 text-gray-800 hover:bg-sky-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white px-6 py-12">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-8">
          <h3 className="text-blue-900 font-medium">Cutting-Edge</h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Technology and Advanced Surgical Excellence
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-7xl mx-auto">
          {/* Card Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="min-w-[24%] relative rounded-2xl overflow-hidden group shadow hover:shadow-lg transition"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                  {/* Text */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">
                      {card.title}
                    </h3>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-40"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= cards.length - 4}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-40"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
        {/* Left Content */}
        <div className="text-white max-w-lg z-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Beyond Boundaries
          </h1>
          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            Trusted Care Beyond Borders <br /> For Our International Patients
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
            Explore
          </button>
        </div>

        {/* Right World Map with images */}
        <div className="relative w-full md:w-2/3 h-[300px] sm:h-[400px] lg:h-[500px]">
          {/* Doctor image in background */}
          <img
            src="/doctor.png"
            alt="Doctor"
            className="absolute right-0 top-0 h-full object-cover opacity-60 mix-blend-overlay"
          />
          {/* World map background */}
          <img
            src="https://png.pngtree.com/png-vector/20220613/ourmid/pngtree-dotted-world-map-dot-land-png-image_5058658.png"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-contain opacity-90 filter brightness-0 invert"
          />

          {/* Profile Images positioned manually */}
          <div className="absolute top-[20%] left-[15%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr-XrtQd52FdpFt92aYHOz8y_ALpTi5iivg&s"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute top-[5%] left-[40%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj4ljaAlxdwcQyPLvKMB9a29Z-CrwIxE4_h1aG02dw5k2VP19e72uFG94TAyaIOXi1b4&usqp=CAU"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute top-[40%] left-[45%]">
            <img
              src="https://www.shutterstock.com/image-photo/serious-crossed-arms-portrait-senior-260nw-2333089713.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute top-[25%] left-[65%]">
            <img
              src="https://images.unsplash.com/photo-1649433658557-54cf58577c68?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute bottom-[20%] left-[70%]">
            <img
              src="https://www.shutterstock.com/image-photo/serious-indian-guy-casual-blue-260nw-2429711541.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute top-[50%] left-[30%]">
            <img
              src="https://www.shutterstock.com/image-photo/asian-young-man-smiling-hands-260nw-2145349747.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute bottom-[10%] left-[50%]">
            <img
              src="https://static.vecteezy.com/ti/fotos-kostenlos/p2/24541591-sud-osten-asiatisch-malaiisch-mann-gesichts-ausdruck-zuversichtlich-waffen-uber-truhe-aussehen-nach-vorne-foto.JPGg"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            News & Events
          </h2>
          <button className="relative px-6 py-2 rounded-full border-2 border-blue-800 text-blue-800 font-medium overflow-hidden group">
            <span className="relative z-10 group-hover:text-white transition duration-300">
              View All News & Events
            </span>
            <span className="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
          </button>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Upcoming Events */}
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col min-h-full">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 rounded-full border text-sm">
                Work shop
              </span>
              <span className="px-3 py-1 rounded-full border text-sm">CME</span>
              <span className="px-3 py-1 rounded-full border text-sm bg-green-600 text-white">
                Event
              </span>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <div className="bg-white rounded-lg shadow px-4 py-2 text-center">
                <p className="text-xl font-bold text-gray-800">
                  {upcomingEvent.date}
                </p>
                <p className="text-sm text-gray-500">{upcomingEvent.month}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">
                  {upcomingEvent.title}
                </h4>
                <button className="flex items-center text-sm text-blue-800 font-medium mt-1 hover:underline">
                  View Details <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured News */}
          <div className="md:col-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col min-h-full">
            <img
              src={featuredNews.img}
              alt={featuredNews.title}
              className="rounded-xl w-full h-64 object-cover mb-4"
            />
            <p className="text-sm text-gray-500">{featuredNews.date}</p>
            <h3 className="font-semibold text-lg text-gray-900 mt-2">
              {featuredNews.title}
            </h3>
            <p className="text-gray-700 mt-2">{featuredNews.description}</p>
            <div className="mt-auto"></div>
          </div>

          {/* Recent News */}
          <div className="flex flex-col gap-4">
            {recentNews.map((news, i) => (
              <div key={i} className="flex gap-4 items-start">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-28 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-500">{news.date}</p>
                  <h4 className="text-gray-800 font-medium">{news.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">Blogs & Doctor Vlogs</h2>
          <a
            href="#"
            className="text-sm px-4 py-2 border rounded-full hover:bg-gray-100"
          >
            View All
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Side (Blogs) */}
          <div className="flex flex-col gap-4">
            {/* Big Blog */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://www.excelsior.edu/wp-content/uploads/2022/11/Medical_Records_Manager_blog-1000x568.jpg"
                alt="Laser Proctology"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">
                  Laser Proctology A Modern Solution for Common Anorectal Issues
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Blog
                </span>
              </div>
            </div>

            {/* Small Blog */}
            <div className="relative rounded-2xl overflow-hidden w-2/3">
              <img
                src="https://img.freepik.com/free-photo/doctor-writing-about-routine-medical-checkup_23-2149281072.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Robotic-Assisted Surgery"
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-medium">
                  Robotic-Assisted Cardiac Surgery Recovery, Benefits, and
                  Safety
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Blog
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (Videos) */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {/* Video 1 */}
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/OwPZIhTHDUk"
                title="Robotic Surgery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 object-cover"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">
                  Want to know how robotic surgery helps out in Gastrointestinal
                  Surgery?
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. N. P. Kamalesh
                </span>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/QUY0Jl-di8k"
                title="Mobile Phones Kids"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 object-cover"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">
                  Do you think giving mobile phones to kids is okay? Listen to
                  Dr. Faizua Mouli
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. S. Fouzea Mouli
                </span>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative rounded-2xl overflow-hidden">
              <video
                src="https://youtu.be/aUvqDz0Azvs?si=rqmzRT7_2O06Q51Z"
                controls
                className="w-full h-64 object-cover rounded-2xl"
              ></video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">
                  Gaining excess weight is not healthy for kids – Hear more from
                  Dr. V. S. Prasadh
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. V. S. Prasadh
                </span>
              </div>
            </div>

            {/* Video 4 */}
            <div className="relative rounded-2xl overflow-hidden">
              <video
                src="https://youtu.be/AxroOOCEy4o?si=FHN4jHng4q0oBkt8"
                controls
                className="w-full h-64 object-cover rounded-2xl"
              ></video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">
                  Common Things to Avoid Asthma Attacks – Hear from Dr. Senthil
                  Kumar
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. S. Senthilkumar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-16">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Testimonials</h2>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-[#243c94] text-white p-6 rounded-2xl flex items-start space-x-4">
            <FaFileMedical className="text-4xl" />
            <div>
              <h3 className="font-semibold text-lg">
                Web Portal - Out Patients
              </h3>
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
      </section>
    </>
  );
};

export default Hero;
