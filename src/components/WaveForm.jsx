import { useState } from "react";
import oaLogo from "../assets/5.png";
import CourseDropdown from "./CourseDropDown";

const WaveEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name field is mandatory";
    if (!formData.email.trim()) newErrors.email = "Email field is mandatory";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is mandatory";
    if (!formData.query.trim()) newErrors.query = "Query field is mandatory";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT BRAND PANEL */}
          <div className="relative bg-gradient-to-br from-[#00A5E0] to-[#005A7A] text-white p-12 flex flex-col justify-between">
            <div className="absolute top-0 right-0 h-full w-36 bg-white/10 rounded-l-[120%] hidden md:block"></div>

            <div className="flex items-center gap-4 z-10">
              {/* <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                <img src={oaLogo} alt="" />
              </div> */}
               <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center">
                  <img src={oaLogo} alt="Ocean Academy" className="w-10" />
                </div>
              <div>
                <h3 className="text-2xl font-semibold">Ocean Academy</h3>
                <p className="text-sm opacity-80">A Mentor Beside You</p>
              </div>
            </div>

            <div className="mt-12 z-10">
              <h1 className="text-5xl font-semibold mb-6">
                Start Your <br /> Learning Journey
              </h1>
              <p className="opacity-90 max-w-md">
                Share your details and our academic advisors will connect with you.
              </p>
            </div>

            <p className="text-xs opacity-60 z-10">
              © 2026 Ocean Academy. All rights reserved.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="p-10 sm:p-14">
            <h2 className="text-2xl font-bold text-[#00A5E0] mb-4">
              Enquiry Form
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <CourseDropdown />

              <div>
                <input
                  className="input"
                  type="text"
                  name="query"
                  placeholder="Your Query"
                  value={formData.query}
                  onChange={handleChange}
                />
                {/* {errors.query && <span className="error">{errors.query}</span>} */}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#2fa4dd] text-white font-semibold hover:opacity-90 transition"
              >
                ENQUIRY NOW
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .input {
          width: 100%;
          border: none;
          border-bottom: 2px solid #d1d5db;
          outline: none;
          transition: border-color 0.2s ease;
          margin-left: 10px;
        }

        .input:focus {
          border-bottom-color: #2fa4dd;
        }

        .error {
          display: block;
          margin-top: 6px;
          margin-left: 10px;
          font-size: 0.75rem;
          color: #ef4444;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default WaveEnquiryForm;
