import React, { useState, useRef, useEffect } from "react";
import {
  PhoneCall,
  PlusCircle,
  CalendarDays,
  FlaskConical,
  UserCircle,
  Mail,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Logo from "../Assets/PUKRA-Hospial Logo-enggg.png";
import { Link } from "react-router-dom";

const NavbarMegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    // TODO: Add Specialities, Academics, Patient Care, etc.
  };

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeMenu && panelRef.current && !panelRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu]);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Specialities", path: "/specialities" },
    { name: "Find a Doctor", path: "/find-doctor" },
    { name: "Academics", path: "/academics" },
    { name: "Patient Care", path: "/patient-care" },
    { name: "More", path: "/more" },
  ];

  return (
    <div className="w-full">
      {/* Top strip */}
      {/* <div className="bg-white border-b text-xs sm:text-sm text-gray-700">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-end items-center px-4 py-2 space-x-3 sm:space-x-6">
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <CalendarDays size={14} /> Events
          </span>
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <FlaskConical size={14} /> Lab
          </span>
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <UserCircle size={14} /> Login
          </span>
          <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer">
            <Mail size={14} /> Contact
          </span>
          <span className="flex items-center gap-1 text-red-600 font-semibold">
            <PhoneCall size={14} /> 0422 - 430 5212
          </span>
          <span className="flex items-center gap-1 text-red-600 font-semibold cursor-pointer">
            <PlusCircle size={16} /> Ambulance
          </span>
        </div>
      </div> */}

      {/* Main navbar */}
      <header className="bg-white fixed left-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="PUKRA Logo" className="h-10 md:h-14" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-semibold">
            {menus.map((menu) => (
              <div
                key={menu.name}
                className="relative"
                onMouseEnter={() => {
                  if (menuStructure[menu.name]) setActiveMenu(menu.name);
                }}
                onMouseLeave={() => {
                  if (menuStructure[menu.name]) setActiveMenu(null);
                }}
              >
                <Link
                  to={menu.path}
                  className={`hover:text-green-600 transition ${
                    activeMenu === menu.name ? "text-green-600" : ""
                  }`}
                  onClick={() => setActiveMenu(null)} // close dropdown on click
                >
                  {menu.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side + Mobile Hamburger */}
          <div className="flex items-center space-x-4">
          <button className="hidden md:block text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base 
  bg-[linear-gradient(90deg,#606C32,#827145)] hover:opacity-90 transition">
  Book Appointment
</button>

            
            {/* <img
              src="/nabh.png"
              alt="NABH Logo"
              className="hidden md:block h-10 w-10 lg:h-12 lg:w-12 rounded-full border"
            /> */}
            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Mega Menu */}
      {activeMenu && menuStructure[activeMenu] && (
        <div
          ref={panelRef}
          className="hidden md:block bg-white shadow-lg mt-40 border-t"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
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
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                    {activeSubmenu.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{activeSubmenu.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {activeSubmenu.btns.map((btn) => (
                      <button
                        key={btn}
                        className="border border-blue-900 px-4 lg:px-6 py-2 rounded-full text-blue-900 hover:bg-blue-50 text-sm"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                  <img
                    src={activeSubmenu.img}
                    alt={activeSubmenu.title}
                    className="rounded-xl shadow max-h-52 md:max-h-64 object-cover"
                  />
                </>
              ) : (
                <p className="text-gray-500">Select an option to view details.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t fixed top-20 left-0 w-full h-screen overflow-y-auto z-40 p-4 space-y-4">
          {menus.map((menu) => (
            <div key={menu.name}>
              <div
                className="flex justify-between items-center py-2 border-b cursor-pointer"
                onClick={() =>
                  setActiveMenu(activeMenu === menu.name ? null : menu.name)
                }
              >
                <Link to={menu.path} className="text-gray-800 font-medium">
                  {menu.name}
                </Link>
                {menuStructure[menu.name] && (
                  <ChevronDown
                    className={`transition-transform ${
                      activeMenu === menu.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Mobile Submenu */}
              {menuStructure[menu.name] && activeMenu === menu.name && (
                <div className="ml-4 mt-2 space-y-2">
                  {menuStructure[menu.name].map((sm) => (
                    <div key={sm.title} className="space-y-1">
                      <p className="font-semibold text-green-700">{sm.title}</p>
                      <p className="text-sm text-gray-600">{sm.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {sm.btns.map((btn) => (
                          <button
                            key={btn}
                            className="text-xs border border-blue-900 px-3 py-1 rounded-full text-blue-900 hover:bg-blue-50"
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="w-full bg-blue-800 text-white py-2 rounded-full hover:bg-blue-900">
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarMegaMenu;
