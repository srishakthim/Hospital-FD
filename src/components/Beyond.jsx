import React from "react";

export default function Beyond() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-10 flex items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="text-white max-w-lg z-10">
        <h1 className="text-4xl font-bold mb-4">Beyond Boundaries</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Trusted Care Beyond Borders <br /> For Our International Patients
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Explore
        </button>
      </div>

      {/* Right World Map with images */}
       <div className="relative w-2/3 h-[500px]">
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr-XrtQd52FdpFt92aYHOz8y_ALpTi5iivg&s" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="absolute top-[5%] left-[40%]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcj4ljaAlxdwcQyPLvKMB9a29Z-CrwIxE4_h1aG02dw5k2VP19e72uFG94TAyaIOXi1b4&usqp=CAU" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="absolute top-[40%] left-[45%]">
          <img src="https://www.shutterstock.com/image-photo/serious-crossed-arms-portrait-senior-260nw-2333089713.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="absolute top-[25%] left-[65%]">
          <img src="https://images.unsplash.com/photo-1649433658557-54cf58577c68?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="absolute bottom-[20%] left-[70%]">
          <img src="https://www.shutterstock.com/image-photo/serious-indian-guy-casual-blue-260nw-2429711541.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="absolute top-[50%] left-[30%]">
          <img src="https://www.shutterstock.com/image-photo/asian-young-man-smiling-hands-260nw-2145349747.jpg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
        <div className="absolute bottom-[10%] left-[50%]">
          <img src="https://static.vecteezy.com/ti/fotos-kostenlos/p2/24541591-sud-osten-asiatisch-malaiisch-mann-gesichts-ausdruck-zuversichtlich-waffen-uber-truhe-aussehen-nach-vorne-foto.JPGg" alt="Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
        </div>
      </div>
    </div>
  );
}
