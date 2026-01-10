import oaLogo from "../assets/1.png";

const OceanAcademyCurveEnquiry = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* TOP CURVED BRAND SECTION */}
        <div className="relative bg-gradient-to-r from-sky-500 to-blue-700 h-80 flex items-center justify-center">
          
          {/* Curve */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[100%]"></div>

          {/* Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={oaLogo}
              alt="Ocean Academy"
              className="w-44 mb-3 drop-shadow-lg"
            />
            <p className="text-white text-sm tracking-wide opacity-90">
              Empowering Future-Ready Professionals
            </p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="px-8 sm:px-14 py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
            Enquiry Form
          </h2>
          <p className="text-center text-sm text-gray-500 mb-8">
            Share your details and our team will connect with you
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <input type="text" placeholder="Full Name *" className="input" />
            <input type="email" placeholder="Email Address *" className="input" />
            <input type="tel" placeholder="Phone Number *" className="input" />
            <input type="text" placeholder="Current Role *" className="input" />

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold tracking-wide hover:scale-[1.02] transition-transform"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Utility styles */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.75rem 1.1rem;
            border-radius: 9999px;
            border: 1px solid #d1d5db;
            font-size: 0.9rem;
            outline: none;
            transition: all 0.2s ease;
          }

          .input:focus {
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14,165,233,0.25);
          }
        `}
      </style>
    </div>
  );
};

export default OceanAcademyCurveEnquiry;
