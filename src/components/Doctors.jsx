import React, { useEffect, useState } from "react";

const doctors = [
    {
        name: "Dr. N. P. Kamalesh",
        degrees: "MBBS, MS, DNB (Gastrointestinal Surgery), FMAS, FICS, FACS",
        title: "Chairperson - General Surgery and Chief in Gastrointestinal, HPB and Bariatric Surgery",
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

const DoctorsSlider = () => {
    const [startIndex, setStartIndex] = useState(0);

    // Auto-slide every 3 seconds
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

    return (
        <div className="bg-gray-100 py-10 px-4">
            {/* Header Row */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 px-4">
                {/* Left side text */}
                <div className="text-left">
                    <h2 className="text-3xl font-bold text-gray-800">Our Doctors</h2>
                    <p className="text-gray-600 mt-2">
                        Get online consultations with top doctors for all of your health concerns!
                    </p>
                </div>

                {/* Right side button */}
                <div className="mt-4 md:mt-0">
                    <button className="relative px-5 py-2 rounded-full border-2 border-blue-800 text-blue-800 font-medium overflow-hidden group">
                        <span className="relative z-10 group-hover:text-white transition duration-300">
                            Explore Our Medical Team
                        </span>
                        <span className="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
                    </button>
                </div>
            </div>

            {/* Doctors slider */}
            <div className="flex gap-4 overflow-hidden justify-center">
                {visibleDoctors.map((doc, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 w-60 group"
                    >
                        {/* Doctor image */}
                        <img
                            src={doc.img}
                            alt={doc.name}
                            className="w-full h-48 object-cover rounded-t-xl"
                        />

                        {/* Content */}
                        <div className="p-4 text-center flex-grow">
                            <h3 className="font-semibold text-lg text-gray-800">{doc.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{doc.degrees}</p>
                            <p className="text-sm text-teal-700 font-medium mt-2">{doc.title}</p>
                        </div>

                        {/* Book Appointment button - shows on hover */}
                        <div className="p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition text-sm">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsSlider;
