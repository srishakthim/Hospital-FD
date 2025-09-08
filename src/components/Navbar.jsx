import React, { useState, useRef, useEffect } from "react";
import {
  PhoneCall,
  PlusCircle,
  CalendarDays,
  FlaskConical,
  UserCircle,
  Mail,
} from "lucide-react";
import Logo from "../Assets/PUKRA-Logo-Teal.png";

const NavbarMegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const panelRef = useRef();

  const menuStructure = {
    "About Us": [
      {
        title: "Our Growth Story",
        desc: "PUKRA Hospital, founded in 1952 by the Kuppuswamy Naidu Charitable Trust is dedicated to providing compassionate care for women and children.",
        btns: ["Growth Story", "Founder Info"],
        img: "/images/about-growth.jpg",
      },
      {
        title: "Board of Trustees",
        desc: "Meet the leaders who guide PUKRA Hospital with vision and dedication.",
        btns: ["Board Of Trustees"],
        img: "/images/about-trustees.jpg",
      },
      {
        title: "Administrative Team",
        desc: "Our administrative team ensures smooth and patient-centric operations.",
        btns: ["View Team"],
        img: "/images/about-admin.jpg",
      },
      {
        title: "Why PUKRAH?",
        desc: "Discover why PUKRA Hospital is a trusted name in healthcare.",
        btns: ["Know More"],
        img: "/images/about-why.jpg",
      },
      {
        title: "Awards & Honors",
        desc: "Recognitions and awards that celebrate our excellence in healthcare.",
        btns: ["View Awards"],
        img: "/images/about-awards.jpg",
      },
      {
        title: "Community Initiatives",
        desc: "Our contributions to social and community health initiatives.",
        btns: ["Explore"],
        img: "/images/about-community.jpg",
      },
      {
        title: "Charitable Initiatives",
        desc: "Supporting patients through charity and healthcare access.",
        btns: ["Learn More"],
        img: "/images/about-charity.jpg",
      },
    ],
    // TODO: Add Specialities, Academics, Patient Care, etc. the same way
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeMenu && panelRef.current && !panelRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  return (
    <div className="w-full">
      {/* Top strip */}
      <div className="bg-white border-b text-sm text-gray-700">
        <div className="max-w-7xl mx-auto flex justify-end items-center px-4 py-2 space-x-6">
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <CalendarDays size={16} /> Upcoming Events
          </span>
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <FlaskConical size={16} /> Lab Results
          </span>
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <UserCircle size={16} /> Patient Login
          </span>
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <Mail size={16} /> Contact Us
          </span>
          <span className="flex items-center gap-1 text-red-600 font-semibold">
            <PhoneCall size={16} /> 0422 - 430 5212
          </span>
          <span className="flex items-center gap-1 text-red-600 font-semibold cursor-pointer">
            <PlusCircle size={18} /> Ambulance
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <header className="bg-white fixed top-8 left-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="PUKRA Logo" className="h-14" />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold">
            {["Home", "About Us", "Specialities", "Find a Doctor", "Academics", "Patient Care", "More"].map(
              (menu) => (
                <button
                  key={menu}
                  className={`hover:text-green-600 transition ${
                    activeMenu === menu ? "text-green-600" : ""
                  }`}
                  onClick={() => {
                    setActiveMenu(activeMenu === menu ? null : menu);
                    setActiveSubmenu(null);
                  }}
                >
                  {menu}
                </button>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900">
              Book an Appointment
            </button>
            <img src="/nabh.png" alt="NABH Logo" className="h-12 w-12 rounded-full border" />
          </div>
        </div>
      </header>

      {/* Mega menu panel */}
      {activeMenu && menuStructure[activeMenu] && (
        <div ref={panelRef} className="bg-white shadow-lg mt-40 border-t">
          <div className="max-w-7xl mx-auto flex px-6 py-6">
            {/* Sidebar */}
            <div className="w-1/3 border-r">
              <ul>
                {menuStructure[activeMenu].map((sm) => (
                  <li
                    key={sm.title}
                    className={`px-4 py-2 border-b cursor-pointer ${
                      activeSubmenu?.title === sm.title
                        ? "bg-green-50 text-green-600 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveSubmenu(sm)}
                  >
                    {sm.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="w-2/3 px-6">
              {activeSubmenu ? (
                <>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{activeSubmenu.title}</h2>
                  <p className="text-gray-600 mb-4">{activeSubmenu.desc}</p>
                  <div className="flex gap-3 mb-6">
                    {activeSubmenu.btns.map((btn) => (
                      <button
                        key={btn}
                        className="border border-blue-900 px-6 py-2 rounded-full text-blue-900 hover:bg-blue-50"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                  <img
                    src={activeSubmenu.img}
                    alt={activeSubmenu.title}
                    className="rounded-xl shadow max-h-64 object-cover"
                  />
                </>
              ) : (
                <p className="text-gray-500">Select an option to view details.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMegaMenu;
