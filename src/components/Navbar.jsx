import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PhoneCall,
  PlusCircle,
  CalendarDays,
  FlaskConical,
  UserCircle,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Logo from "../Assets/PUKRA-Hospial Logo-enggg.png";
import { Link } from "react-router-dom";

const NavbarMegaMenu = () => {
    const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" }, // now behaves like normal link in mobile
    { name: "Specialities", path: "/specialities" },
    { name: "Find a Doctor", path: "/find-doctor" },
    { name: "Academics", path: "/academics" },
    { name: "Patient Care", path: "/patient-care" },
    { name: "Conatct Us", path: "/contact" },
  ];

   const handleBookAppointment = () => {
    navigate("/contact");
    setMobileOpen(false); // also close drawer in mobile
  };

  return (
    <div className="w-full">
      {/* Main navbar */}
      <header className="bg-white fixed left-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
          {/* Logo */}
          <div className="flex justify-start items-center w-50 px-4">
            <img src={Logo} alt="PUKRA Logo" className="h-10 md:h-14" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-800 font-semibold">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                to={menu.path}
                className="text-gray-800 font-semibold px-2 py-1"
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Right side + Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            <button
        onClick={handleBookAppointment}
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

      {/* MOBILE: Drawer (no About Us dropdown anymore) */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t fixed top-20 left-0 w-full h-screen overflow-y-auto z-40 p-4 space-y-4">
          {menus.map((menu) => (
            <div key={menu.name}>
              <Link
                to={menu.path}
                className="block py-2 border-b text-gray-800 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {menu.name}
              </Link>
            </div>
          ))}

            <button
          onClick={handleBookAppointment}
          className="w-full bg-blue-800 text-white py-2 rounded-full"
        >
          Book Appointment
        </button>
        </div>
      )}
    </div>
  );
};

export default NavbarMegaMenu;
