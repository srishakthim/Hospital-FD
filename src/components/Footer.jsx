import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../Assets/PUKRA-Hospial Logo-enggg.png";


export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 text-sm">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + Hospital Name */}
                <div>
                    <img
                        src={Logo}
                        alt="PUKRA Logo"
                        className="w-20 mb-4"
                    />
                    <h2 className="font-bold text-lg">
                        PUKRA
                    </h2>
                    <p className="text-xs text-gray-600 mt-2">
                        (A unit of Kovai Heart Foundation - a trusted name in cardiac care for 16+ years)
                    </p>
                </div>

                {/* Hospital Address 1 */}
                <div>
                    <h3 className="font-semibold mb-2">PUKRA</h3>
                    <p>9, L&T Bypass, Irugur, Coimbatore – 641103, Tamil Nadu, India.</p>
                    <p className="mt-2">📧 pukra.in</p>
                    <p>📞 +91 422 2320789, 94875 44415, 97865 44415</p>
                </div>

                {/* Hospital Address 2 */}


                {/* Social Media */}
                <div>
                    <h3 className="font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#"><FaInstagram className="text-xl hover:text-pink-500" /></a>
                        <a href="#"><FaFacebookF className="text-xl hover:text-blue-600" /></a>
                        <a href="#"><FaTwitter className="text-xl hover:text-sky-500" /></a>
                        <a href="#"><FaLinkedinIn className="text-xl hover:text-blue-700" /></a>
                        <a href="#"><FaYoutube className="text-xl hover:text-red-600" /></a>
                    </div>
                </div>
            </div>


            <hr className="border-gray-300" />

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
                <div>
                    <h4 className="font-semibold mb-2">About PUKRA Hospital</h4>
                    <ul className="space-y-1 text-gray-600">
                        <li>Administrative Team</li>
                        <li>Awards & Honor</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Patient Care Guide</h4>
                    <ul className="space-y-1 text-gray-600">
                        <li>Out Patient</li>
                        <li>In Patient services</li>
                        <li>Master Health Checkup</li>
                        <li>Insurance</li>
                        <li>Ambulance Services</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <ul className="space-y-1 text-gray-600">

                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mt-4 mb-2">Academics</h4>
                    <ul className="space-y-1 text-gray-600">
                        </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Other Links</h4>
                    <ul className="space-y-1 text-gray-600">
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

            <hr className="border-gray-300" />

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© Copyright 2025 PUKRA Super Speciality Hospital. All rights reserved.</p>
                <p>
                    Designed & Developed by{" "}
                    <a href="#" className="font-semibold hover:text-blue-600">
                        Tenthfeet Business Consulatnts Private Limited
                    </a>
                </p>
            </div>
        </footer>
    );
}
