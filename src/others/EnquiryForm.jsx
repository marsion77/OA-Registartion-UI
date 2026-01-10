const EnquiryForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 px-4">
      
      {/* Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Branding Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-teal-500 to-blue-600 text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-center text-sm opacity-90 mb-8">
            Share your details and our team will connect with you shortly.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Enquiry Form
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            All fields marked with <span className="text-red-500">*</span> are mandatory
          </p>

          <form className="space-y-5">
            
            {/* Name */}
            <div>
              <label className="label">
                Name <span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="Enter your full name" className="input" />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input" />
            </div>

            {/* Phone */}
            <div>
              <label className="label">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input type="tel" placeholder="Enter your phone number" className="input" />
            </div>

            {/* Current Position */}
            <div>
              <label className="label">
                Current Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Student, Developer, Manager"
                className="input"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold tracking-wide hover:opacity-90 transition"
            >
              ENQUIRY NOW
            </button>
          </form>
        </div>
      </div>

      {/* Utility Styles */}
      <style>
        {`
          .label {
            display: block;
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.25rem;
          }

          .input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            border: 1px solid #d1d5db;
            outline: none;
            transition: all 0.2s ease;
          }

          .input:focus {
            border-color: #14b8a6;
            box-shadow: 0 0 0 2px rgba(20,184,166,0.25);
          }
        `}
      </style>
    </div>
  );
};

export default EnquiryForm;
