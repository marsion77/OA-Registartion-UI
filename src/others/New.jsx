// StudentRegistrationForm.jsx
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaBook } from "react-icons/fa";
import Reg from "../assets/Reg.png";
import oaLogo from "../assets/5.png";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    query: "",
  });

  const courses = ["Python", "JavaScript", "React", "Full Stack", "Data Science"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Panel with Full Background Image */}
        <div className="relative flex flex-col justify-center p-10 md:p-16 overflow-hidden">
          {/* Background Image */}
          <img
            src={Reg}
            alt="Student Illustration"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Logo + Academy Name */}
          <div className="flex items-center gap-4 relative z-10 mb-8">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md">
              <img src={oaLogo} alt="Ocean Academy" className="w-10" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black">Ocean Academy</h3>
              <p className="text-sm text-gray-700">A Mentor Beside You</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Kickstart Your Learning Journey
            </h1>
            <p className="mb-6 text-lg md:text-xl text-black">
              Join our student community and unlock your potential with expert mentorship.
            </p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="p-10 md:p-16 bg-white">
          <h2 className="text-2xl font-semibold text-black mb-6">Enquiry Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="relative">
              <FaBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="" disabled>Select Course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <textarea
              name="query"
              placeholder="Your Query"
              value={formData.query}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={3}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold py-2 rounded-lg hover:from-blue-600 hover:to-blue-500 transition-all"
            >
              ENROLL NOW
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
