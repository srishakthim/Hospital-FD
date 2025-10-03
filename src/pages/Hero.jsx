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
import technology_image1 from "../Assets/technology/DAN03999.jpg";
import technology_image2 from "../Assets/technology/DAN03925.jpg";
import technology_image3 from "../Assets/technology/DAN04085.jpg";
import technology_image4 from "../Assets/technology/DAN04156.jpg";
import technology_image5 from "../Assets/technology/DAN04166.jpg";
import technology_image6 from "../Assets/technology/DAN03925.jpg";
import technology_image7 from "../Assets/technology/DAN04101.jpg";
import technology_image8 from "../Assets/technology/DAN04115.jpg";
import doctor_image1 from "../Assets/doctors/Dr.RajendranV.jpg";
import doctor_image2 from "../Assets/doctors/Dr.Karthick.S.jpg";
import doctor_image3 from "../Assets/doctors/Dr.LavanyaB.S.jpg";
import doctor_image4 from "../Assets/doctors/Dr.KalaimaniP.jpg";
import doctor_image5 from "../Assets/doctors/Dr.PREMA.S.jpg";
import doctor_image6 from "../Assets/doctors/Dr.THILAK.jpg";
import doctor_image7 from "../Assets/doctors/DrSANTHOSH.jpg";
import doctor from "../Assets/doctor.png";
import ot1 from "../Assets/ot/ot1.jpg";
import ot2 from "../Assets/ot/ot2.jpg";


const Hero = () => {
  const slides = [image1, image2, image3, image4];

  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
      title: (
        <>
          <span className="text-blue-600">PUKRA</span> Integrated Cardiac care
          Centre
        </>
      ),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      title: (
        <>
          Find a <span className="text-blue-500">Doctor</span>
        </>
      ),
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
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
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Cardiac Department",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Obstetrics & Gynecology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Orthopedics & Trauma Care",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Internal General & Laparoscopic Surgery",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Pediatrics",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Urology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "General Medicine",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Emergency & Intensive Care",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Diabetology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Pulmonology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "ENT",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Radiology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Dentistry",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Cardiothoracic & Vascular Surgery",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Neurology & Neurosurgery",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Radiotherapy",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Master Health Checkup",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Dermatology",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1686/1686815.png",
      title: "Diagnostic Medicine, Microbiology, Pathology, Biochemistry",
    }
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
      name: "Dr. Rajendran V",
      degrees: "M.D., (Gen.Med) DNB., DM., (Cardiology)",
      title:
        "Chairman & Managing Director - Consultant & Interventional Cardiologist",
      img: doctor_image1,
    },
    {
      name: "Dr.Karthick.S",
      degrees: "MS(Ortho),FIJR",
      title: "Consultant Orthopaedic Trauma and Joint replacement surgeon",
      img: doctor_image2,
    },
    {
      name: "Dr.Lavanya B.S",
      degrees:
        "MBBS.,DCH.,DNB(Paediatrics),Fellowship in Neonatology(NNF), IPPN(Nutrition)",
      title: "Consultant Paediatrician & Neonatologist",
      img: doctor_image3,
    },
    {
      name: "Dr.Kalaimani P",
      degrees: "M.S OG.,(JIPMER) ",
      title:
        "Consultant Obstetrician and Gynecologist -Infertility Specialist laparoscopic Surgeon",
      img: doctor_image4,
    },
    {
      name: "Dr.PREM A.S",
      degrees: "MBBS, MRCP (UK)",
      title: "Internal Medicine Consultant",
      img: doctor_image5,
    },
    {
      name: "Dr.G.Thilak",
      degrees: "MBBS, MS, MCh Urology",
      title: "Consultant Urologist",
      img: doctor_image6,
    },
    {
      name: "DR.C.SANTHOSH",
      degrees: "M.D (Pulmonary Medicine), IDCCM (Critical Care)",
      title: "Consultant Interventional Pulmonologist & Sleep Specialist",
      img: doctor_image7,
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
        "Our Cardiology departments stands at the heart of PUKRA’s Success Delivering the best of Cardiac Services in the country",
      bg: "bg-indigo-50",
      img: "https://cdn-icons-png.flaticon.com/512/4762/4762314.png",
      items: [
        "Electro Physiology",
        "Echo Cardiogram",
        "Angiogram",
        "Angio-Plasty / Stent placement",
        "Pacemaker placement",
      ],
    },
    {
      title: "Cardiothoracic and vascular Surgery",
      description:
        "PUKRA is the industry leader in the CTVS Department Having done the most number of BY-Pass Surgeries and high risk procedures in the region with one of Asia’s best cardiac surgeons.",
      bg: "bg-green-50",
      img: "https://www.aakashhospital.in/_next/image?url=%2Fassets%2Fimages%2Fspeciality_images%2Fdiabetology.png&w=1920&q=75",
      items: [
        "Coronary Artery bypass graft surgery",
        "Valve replacement",
        "Minimally invasive surgery",
      ],
    },
    {
      title: "Orthopedics &amp; Trauma",
      description:
        "PUKRA’s Expert care for bones, joints, ligaments, and muscles with advanced treatments and minimally invasive surgery.",
      bg: "bg-yellow-50",
      img: "https://healinghospital.co.in/wp-content/uploads/2020/01/ortho-grid1.png",
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
      title: "",
      img: technology_image1,
    },
    {
      title: "",
      img: technology_image2,
    },
    {
      title: "",
      img: technology_image3,
    },
    {
      title: "",
      img: technology_image4,
    },
    {
      title: "",
      img: technology_image5,
    },
    {
      title: "",
      img: technology_image6,
    },
    {
      title: "",
      img: technology_image7,
    },
    {
      title: "",
      img: technology_image8,
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
    img: "https://cvrti.utah.edu/wp-content/uploads/2021/09/Cardiac-Arrhythmia-1024x683.jpeg",
  };

  const recentNews = [
    {
      date: "Jul 11, 2025",
      title:
        "Indian Society of Neuroradiology (ISNR) Midterm Conference 2025 hosted by PUKRA",
      img: "https://strapi.merillife.com/uploads/cardiac_surgery_banner_5908d28fde.jpg",
    },
    {
      date: "Jun 28, 2025",
      title:
        "PUKRA Hospital’s 73rd Founder’s day event with vision and commitment to healthcare excellence",
      img: "https://idreamcareer.com/wp-content/uploads/2023/04/how-to-become-a-neurologist.webp",
    },
    {
      date: "Jun 14, 2025",
      title: "Thoracic Ultrasound Workshop 2025",
      img: "https://www.verywellhealth.com/thmb/CQRUDnA-cgcK02h8DNmOhEMUZRw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3d-illustration-of-spinal-cord--thoracic-vertebrae--a-part-of-human-skeleton-anatomy-698558388-21ae820feeea4a7aa9631c52747faa43.jpg",
    },
  ];

  const testimonials = [
    {
      doctor: "Dr.Rajendran",
      dept: "Cardiology",
      image: "https://static.vecteezy.com/system/resources/previews/026/576/128/non_2x/smiling-young-woman-isolated-png.png",
      review: "Very friendly and replying to all the queries patiently. Affordable treatment and far better than KMCH , Royal care or Ganga. Good parking space, canteen , neat and clean. Wish they maintain the atmosphere as good as now.",
      patient: "Google Reviews",
      rating: 5,
    },
    {
      doctor: "Dr.Rajendran",
      dept: "Cardiology",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBwbmd8ZW58MHx8MHx8fDA%3D",
      review:
        "My father was admitted this hospital,very good treatment and well experience doctors,Dr.Rajendren sir and team is doing great job",
      patient: "Google Reviews",
      rating: 5,
    },
    {
      doctor: "Dr. Kalaimani",
      dept: "Obstetrics and Gynaecology",
      image:
        "https://static.vecteezy.com/system/resources/previews/051/555/261/non_2x/smiling-professional-woman-indoors-png.png",
      review:
        "We recently had our baby delivered under the care of Dr. Kalaimani, and we are extremely thankful for the support and care she provided throughout the journey. From the first consultation to the delivery, she was professional, calm, and extremely knowledgeable.She handled everything with such dedication and personal attention, making us feel confident and comfortable. My wife received excellent care, and the entire process was smooth because of Dr. Kalaimani's expertise. Truly one of the best doctors we’ve come across – caring, experienced, and committed. Thank you so much, doctor, for everything ! ",
      patient: "Google Reviews",
      rating: 5,
    },
    {
      doctor: "General",
      dept: "",
      image:
        "https://png.pngtree.com/png-vector/20231103/ourmid/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_10329231.png",
      review:
        "New hospital with advanced equipments for detailed investigation and right treatment and care provided by highly experienced medical professionals team.",
      patient: "Google Reviews",
      rating: 5,
    }
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
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Static Content (smaller) */}
          <div className="flex flex-col justify-center space-y-3 text-center md:text-left md:col-span-1">
            <span className="text-blue-700 font-semibold text-xs sm:text-sm">
              Trusted Care for Healthier Tomorrow
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Your Health is,
              <br />
              <span className="bg-[linear-gradient(90deg,#606C32,#827145)] bg-clip-text text-transparent">
                Our Priority!
              </span>
            </h2>
            <p className="text-base sm:text-md text-gray-700 mt-6 leading-relaxed">
              Pukra is a state-of-the-art super-speciality hospital established
              under the esteemed <b> Kovai Heart Foundation</b> - a trusted name
              in cardiac care since 2009. With 16 years of excellence, Pukra
              delivers holistic, world-class healthcare with a patient-centric
              approach. Guided by <b>Dr. Rajendran's </b>visionary leadership,
              the foundation expanded across multiple specialties. A notable
              milestone includes the pioneering of a{" "}
              <b>15-minute angiography </b> procedure - promoted with the
              tagline <b>"Walk-in & Walk-out"</b> - benefiting over 1 lakh
              patients.
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
              Welcome to{" "}
              <span className="bg-[linear-gradient(90deg,#606C32,#827145)] bg-clip-text text-transparent">
                PUKRA
              </span>
            </h2>
            <h4 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 leading-snug">
              {" "}
              — Where every HEART is touched by a legacy of care.
            </h4>

            <p className="text-base sm:text-lg text-gray-700 mt-6 leading-relaxed">
              Today, we live in a world of striking contrasts - where more
              people than ever are aware of their health, yet face increasingly
              complex and unpredictable health challenges. At Pukra, we
              recognize this reality, and we exist to bridge that gap.<br></br>
              <span className="bg-[linear-gradient(90deg,#606C32,#827145)] bg-clip-text text-transparent">
                We are committed to supporting individuals and communities by
                delivering healthcare that is not only advanced and innovative
                but also accessible and deeply compassionate. Whether it's
                navigating everyday wellness or managing long-term conditions,
                our mission is to empower people to take control of their health
                in a world that often feels out of control.
              </span>{" "}
              <br></br>Pukra is more than a healthcare provider - we are a
              partner in your health journey, built on trust, empathy, and a
              belief that quality care should be within everyone’s reach
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[linear-gradient(90deg,#606C32,#827145)] 
  hover:bg-[linear-gradient(90deg,#827145,#606C32)] text-white text-base sm:text-lg font-medium rounded-full shadow transition"
              >
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
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4D8wcAgbknU"
              title="Hospital Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "26+", label: "Years of Experience" },
            { value: "110+", label: "Patient Beds" },
            { value: "20+", label: "Departments" },
            { value: "30+", label: "Doctors" },
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
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // ✅ capture instance once
            }}
            onSlideChange={(swiper) => {
              const percentage =
                ((swiper.realIndex + 1) / groupedSpecialities.length) * 100;
              setProgress(percentage);
            }}
            className="specialities-swiper"
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
                onClick={() =>
                  swiperRef.current && swiperRef.current.slidePrev()
                } // ✅ safe
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 transition"
              >
                ←
              </button>
              <button
                onClick={() =>
                  swiperRef.current && swiperRef.current.slideNext()
                } // ✅ safe
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
              Our Highly skilled Doctors !
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-2 md:px-0">
          {visibleDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 group h-full"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center flex-grow flex flex-col justify-between">
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
            Personalized Comprehensive Care for All
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
              <div className="flex justify-between items-start ">
                <div>
                  <h3 className="md:text-xl font-bold text-blue-900">
                    {spec.title}
                  </h3>
                  <p className="text-gray-700 mt-2 max-w-md">
                    {spec.description}
                  </p>
                </div>
                <img
                  src={spec.icon}
                  alt={spec.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-8">
                {spec.items.map((item, i) => (
                  <span
                    key={i}
                    className="w-32 h-16 flex items-center justify-center bg-white rounded-lg border text-sm text-gray-800 shadow-sm text-center"
                    // className="px-4 py-2 bg-white rounded-full border text-sm text-gray-800 shadow-sm text-center"
                  >
                    {item}
                  </span>
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
            Technology and Advanced Cardiac care Excellence
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-7xl mx-auto">
          {/* Card Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 flex-col sm:flex-row"
              style={{
                transform:
                  window.innerWidth < 640
                    ? "none"
                    : `translateX(-${currentIndex * (100 / 4)}%)`,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="w-full sm:min-w-[24%] relative rounded-2xl overflow-hidden group shadow hover:shadow-lg transition"

                  // className="min-w-[24%] relative rounded-2xl overflow-hidden group shadow hover:shadow-lg transition"
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
            src={doctor}
            alt="Dr.Krishna N.Dass. MD., Awarded as One of the best Doctors 2024 in USA"
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
              src={doctor}
              alt="Dr.Krishna N.Dass. MD., Awarded as One of the best Doctors 2024 in USA"
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
                src={ot1}
                alt="OT"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">
                  Operation Theatre
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Blog
                </span>
              </div>
            </div>

            {/* Small Blog */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={ot2}
                alt="OT"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-medium">
                  Operation Theatre
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
                src="https://www.youtube.com/embed/M4gf426Qg1s?si=hUqF9ondamxJY55-"
                title="Robotic Surgery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 object-cover"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">
                  MRI Scan
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. Rajendran
                </span>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/Wx_c0cprtwg?si=nbc-ZC0-3k2BOqPH"
                title="Mobile Phones Kids"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 object-cover"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">
                  CT Scan
                </p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. Rajendran
                </span>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/M4gf426Qg1s?si=hUqF9ondamxJY55-"
                title="Robotic Surgery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 object-cover"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">MRI Scan</p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. Rajendran
                </span>
              </div>
            </div>
            {/* Video 4 */}
            <div className="relative rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/Wx_c0cprtwg?si=nbc-ZC0-3k2BOqPH"
                title="Mobile Phones Kids"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 object-cover"
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm">CT Scan</p>
                <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
                  Dr. Rajendran
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
