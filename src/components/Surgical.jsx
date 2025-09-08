import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Surgical() {
  const cards = [
    { title: "4th Gen Da Vinci Xi Robotic Surgical System", img: "https://lirp.cdn-website.com/48020b6c/dms3rep/multi/opt/Intelligent-OR-6beedc3b-640w.png" },
    { title: "Neuro IR Biplane Cathlab", img: "https://lirp.cdn-website.com/48020b6c/dms3rep/multi/opt/C-Arm+Machine-640w.png" },
    { title: "PET CT Scanner", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Awl5RrKauPMgbOJA5sNxXMX_GNA2X1aVli8hd9q8xHT8gd35DeChzylesw0tFH0ZVvA&usqp=CAU" },
    { title: "3 Tesla MRI Scan", img: "https://images.stockcake.com/public/d/9/f/d9ffa4bf-9b7b-4b03-b504-98384a90a1b2_large/modern-surgical-room-stockcake.jpg" },
    { title: "Gamma Knife Radiosurgery", img: "https://lirp.cdn-website.com/48020b6c/dms3rep/multi/opt/Intelligent-OR-6beedc3b-640w.png" },
    { title: "Linear Accelerator", img: "https://labds.com/wp-content/uploads/2022/04/Planning-and-Constructing-a-Hybrid-Operating-Room-2-800x400-1.png" },
    { title: "Advanced Cathlab System", img: "https://www.inprocorp.com/globalassets/spaces-block-images/surgery-room.jpg" },
    { title: "Digital X-Ray Imaging", img: "https://myspineassociates.com/wp-content/uploads/2024/10/mako-img.webp" },
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

  return (
    <section className="bg-white px-6 py-12">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-8">
        <h3 className="text-blue-900 font-medium">Cutting-Edge</h3>
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
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
                  <h3 className="text-white font-semibold text-lg leading-snug">
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
  );
}
