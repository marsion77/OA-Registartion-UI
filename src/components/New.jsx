import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaTimes } from "react-icons/fa";
import Regg from "../assets/Regg.png";
import oaLogo from "../assets/5.png";
import NewDropDown from "./NewDropDown";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

  const validateName = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) return "Name field is mandatory";
    if (trimmedName.length < 2) return "Name must be at least 2 characters long";
    if (!/^[a-zA-Z\s]+$/.test(trimmedName)) return "Name should only contain letters and spaces";
    return "";
  };

  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return "Email field is mandatory";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone) => {
    const trimmedPhone = phone.trim();
    if (!trimmedPhone) return "Phone number is mandatory";
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(trimmedPhone)) return "Please enter a valid 10-digit Indian phone number";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "name") error = validateName(value);
    if (name === "email") error = validateEmail(value);
    if (name === "phone") error = validatePhone(value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative max-w-6xl w-full bg-white rounded-xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 z-50 text-gray-500 hover:text-black transition"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        {/* Left Panel with Gradient Transition */}
        <div className="relative flex flex-col justify-start p-10 md:p-16 overflow-hidden 
          after:absolute after:inset-y-0 after:right-0 after:w-10 
          after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          
          <img
            src={Regg}
            alt="Student Illustration"
            className="absolute inset-0 w-full h-full object-cover object-[85%] z-0"
          />

          {/* Logo Section */}
          <div className="flex items-center gap-4 relative z-20 mb-8">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md">
              <img src={oaLogo} alt="Ocean Academy" className="w-10" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2E81A9] to-[#00AEFF] bg-clip-text text-transparent">
                Ocean Academy
              </h3>
              <p className="text-sm font-semibold text-gray-700">
                A Mentor Beside You
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-20">
            <h1 className="text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#0179c9] to-[#0065a8] bg-clip-text text-transparent">
              Transform Your Learning into  Real World-Career Success
            </h1>
            <p className="mt-5 text-lg text-gray-800 font-medium">
              Join our student community <br />
              and unlock your potential with <br /> expert mentorship.
            </p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="p-8 md:p-16 bg-white relative z-20">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Enquiry Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="space-y-1">
              <div className="relative h-10">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-full pl-11 pr-4 text-sm border rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none transition-all ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                />
              </div>
              {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <div className="relative h-10">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full h-full pl-11 pr-4 text-sm border rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none transition-all ${
                    errors.email ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>

            {/* Phone Field */}
            <div className="space-y-1">
              <div className="relative h-10">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={16} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                  className={`w-full h-full pl-11 pr-4 text-sm border rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none transition-all ${
                    errors.phone ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                />
              </div>
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>

            {/* Course Dropdown */}
            <NewDropDown
              name="course"
              value={formData.course}
              onChange={handleChange}
            />

            {/* Query Textarea */}
            <div className="mt-2">
              <textarea
                name="query"
                placeholder="Your Query"
                value={formData.query}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none resize-none"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!!errors.name || !!errors.email || !!errors.phone}
              className="w-full py-3 text-sm rounded-md bg-[#2fa4dd] text-white font-semibold hover:bg-[#1e87c2] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
            >
              Talk to a Mentor
            </button>
            
            <p className="text-[11px] text-center text-gray-500">
              No Spam. Our Counselor will contact you within 24 hours
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;