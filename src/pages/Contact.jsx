import React, { useRef } from "react";
import emailjs from "emailjs-com";


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1td76c",   // replace with your Service ID
        "template_cs39cld",  // replace with your Template ID
        form.current,
        "9IiQILbseS_yDnazv"    // replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Consultation request sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send email. Please try again.");
          console.error(error.text);
        }
      );
  };
  
  return (
<>
     <div className="bg-white text-gray-800">
   
   <div className="bg-indigo-50 py-10">

        <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="mt-[50px]">
            <p className="text-sm text-gray-500">Home / Contact Us</p>
            <h1 className="text-4xl font-bold text-indigo-900 mt-2">Contact Us</h1>
            <p className="text-gray-600 mt-2">
              Your easy Hospital Guide, All in One Place
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center relative">
            <img
              src="https://givingcare.silverts.com/wp-content/uploads/2023/12/bedridden-patient-care.jpg"
              alt="Hospital"
              className="rounded-2xl shadow-lg border-4 border-green-100 mt-[70px]"
            />
          </div>
        </div>
      </div>
  <section className="container mx-auto my-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2625114607285!2d77.07313197480859!3d11.018920289144996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f0c718819b%3A0xda5c0e5a561b1e76!2sPukra%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1758859432040!5m2!1sen!2sin"
            className="w-full h-[450px] rounded-lg border-0 shadow"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        {/* Form */}
     <div>
  <h2 className="text-2xl lg:text-3xl font-bold mb-6">
    Book Your Consultation
  </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
    {/* Patient Name */}
    <div>
      <label
        htmlFor="patientName"
        className="block text-sm font-medium text-gray-700"
      >
        Patient Name
      </label>
      <input
        type="text"
        id="patientName"
        placeholder="Enter full name"
        required
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-yellow-500 focus:ring-yellow-500"
      />
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        required
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-yellow-500 focus:ring-yellow-500"
      />
    </div>

    {/* Phone Number */}
    <div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="Enter phone number"
        required
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-yellow-500 focus:ring-yellow-500"
      />
    </div>

    {/* Symptoms */}
    <div>
      <label
        htmlFor="symptoms"
        className="block text-sm font-medium text-gray-700"
      >
        Symptoms
      </label>
      <input
        type="text"
        id="symptoms"
        placeholder="Enter main symptoms"
        required
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-yellow-500 focus:ring-yellow-500"
      />
    </div>

    {/* Description */}
    <div>
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        Description
      </label>
      <textarea
        id="description"
        rows="4"
        placeholder="Describe your condition"
        required
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm 
                   focus:border-yellow-500 focus:ring-yellow-500"
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-md bg-yellow-500 text-white 
                 font-bold hover:bg-yellow-600 transition"
    >
      Submit Consultation Request →
    </button>
  </form>
</div>

      </div>
    </section>
    </div>  
    </>
  );
}
export default ContactUs;
