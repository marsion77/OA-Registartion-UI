const DiagonalEnquiryForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 px-4">
      
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LEFT PANEL */}
          <div className="relative bg-[#2f344f] text-white p-10 flex flex-col justify-center">
            
            {/* Diagonal Shape */}
            <div className="absolute top-0 right-0 h-full w-32 bg-white transform skew-x-[-12deg] origin-top hidden md:block"></div>

            <h1 className="text-4xl font-bold mb-4">Hello</h1>
            <h2 className="text-5xl font-extrabold mb-6">World</h2>

            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              Fill in your details and our team will reach out with the
              right information tailored for you.
            </p>

            <button className="mt-8 w-fit px-6 py-2 rounded-full bg-pink-500 text-sm font-semibold">
              Learn More
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative p-8 sm:p-12 bg-white">
            
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              Enquiry
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              All fields marked with <span className="text-red-500">*</span> are mandatory
            </p>

            <form className="space-y-5">
              
              <div>
                <label className="label">
                  Name <span className="text-red-500">*</span>
                </label>
                <input className="input" type="text" />
              </div>

              <div>
                <label className="label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input className="input" type="email" />
              </div>

              <div>
                <label className="label">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input className="input" type="tel" />
              </div>

              <div>
                <label className="label">
                  Current Position <span className="text-red-500">*</span>
                </label>
                <input className="input" type="text" />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-pink-500 text-white font-semibold hover:opacity-90 transition"
              >
                ENQUIRY NOW
              </button>
            </form>
          </div>
        </div>

        {/* Center Floating Circle */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-pink-500 items-center justify-center text-white font-bold shadow-lg">
          →
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
            padding: 0.6rem 1rem;
            border-radius: 9999px;
            border: 1px solid #d1d5db;
            outline: none;
            transition: all 0.2s ease;
          }

          .input:focus {
            border-color: #ec4899;
            box-shadow: 0 0 0 2px rgba(236,72,153,0.25);
          }
        `}
      </style>
    </div>
  );
};

export default DiagonalEnquiryForm;