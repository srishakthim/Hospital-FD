import React from "react";
import { FaPlay } from "react-icons/fa";

const BlogsAndVlogs = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
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
                Robotic-Assisted Cardiac Surgery Recovery, Benefits, and Safety
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
        Want to know how robotic surgery helps out in Gastrointestinal Surgery?
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
        Do you think giving mobile phones to kids is okay? Listen to Dr. Faizua
        Mouli
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
        Gaining excess weight is not healthy for kids – Hear more from Dr. V. S.
        Prasadh
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
        Common Things to Avoid Asthma Attacks – Hear from Dr. Senthil Kumar
      </p>
      <span className="inline-block mt-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
        Dr. S. Senthilkumar
      </span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default BlogsAndVlogs;
