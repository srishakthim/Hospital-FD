import React, { useState } from "react";
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
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    // add more sections if needed
  };

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Specialities", path: "/specialities" },
    { name: "Find a Doctor", path: "/find-doctor" },
    { name: "Academics", path: "/academics" },
    { name: "Patient Care", path: "/patient-care" },
  ];

  return (
    <div className="w-full">
      {/* Main navbar */}
      <header className="bg-white fixed left-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
          {/* Logo */}
          <div className="flex justify-start items-center w-50 px-4">
            <img src={Logo} alt="PUKRA Logo" className="h-10 md:h-14" />
          </div>

          {/* Desktop Menu: pure navigation links (no hover effect, no toggling) */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-semibold">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                to={menu.path}
                // no hover classes here, simple link
                className="text-gray-800 font-semibold px-2 py-1"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right side + Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:block text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base 
  bg-[linear-gradient(90deg,#606C32,#827145)] transition"
            >
              Book Appointment
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE: Drawer with expandable submenus */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t fixed top-20 left-0 w-full h-screen overflow-y-auto z-40 p-4 space-y-4">
          {menus.map((menu) => (
            <div key={menu.name}>
              <div className="flex justify-between items-center py-2 border-b">
                {/* If this menu has a submenu (in menuStructure) -> render a button that toggles expansion.
                    Otherwise render a Link that navigates and closes the drawer. */}
                {menuStructure[menu.name] ? (
                  <button
                    className="text-gray-800 font-medium text-left w-full"
                    onClick={() =>
                      setActiveMobileMenu((prev) =>
                        prev === menu.name ? null : menu.name
                      )
                    }
                  >
                    {menu.name}
                  </button>
                ) : (
                  <Link
                    to={menu.path}
                    className="text-gray-800 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {menu.name}
                  </Link>
                )}

                {menuStructure[menu.name] && (
                  <ChevronDown
                    className={`transition-transform ${
                      activeMobileMenu === menu.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Mobile Submenu (expanded) */}
              {menuStructure[menu.name] && activeMobileMenu === menu.name && (
                <div className="ml-4 mt-2 space-y-4">
                  {menuStructure[menu.name].map((sm) => (
                    <div key={sm.title} className="space-y-1">
                      <p className="font-semibold text-green-700">{sm.title}</p>
                      <p className="text-sm text-gray-600">{sm.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {sm.btns.map((btn) => (
                          <button
                            key={btn}
                            className="text-xs border border-blue-900 px-3 py-1 rounded-full text-blue-900"
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

          <button className="w-full bg-blue-800 text-white py-2 rounded-full">
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarMegaMenu;