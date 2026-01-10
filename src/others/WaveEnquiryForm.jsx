const WaveEnquiryForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT BRAND PANEL */}
          <div className="relative bg-gradient-to-br from-[#0f3b4f] to-[#0c2f40] text-white p-12 flex flex-col justify-between">

            {/* Decorative Shape */}
            <div className="absolute top-0 right-0 h-full w-36 bg-white/10 rounded-l-[120%] hidden md:block"></div>

            {/* LOGO PLACEHOLDER */}
            <div className="flex items-center gap-3 z-10">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#0f3b4f] font-bold text-xl shadow-md">
                LOGO
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  Your Institution
                </h3>
                <p className="text-xs opacity-80">
                  Empowering Future Professionals
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="mt-14 z-10">
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Start Your <br /> Learning Journey
              </h1>

              <p className="text-sm leading-relaxed opacity-90 max-w-sm">
                Share your details and our academic advisors will connect
                with you to guide your next career move.
              </p>
            </div>

            {/* FOOTER */}
            <p className="text-xs opacity-60 z-10">
              © 2026 Your Institution. All rights reserved.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="p-10 sm:p-14">
            <h2 className="text-2xl font-bold text-teal-700 mb-1">
              Enquiry Form
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Fields marked with <span className="text-red-500">*</span> are mandatory
            </p>

            <form className="space-y-6">

              <div>
                <label className="label">Name *</label>
                <input className="input" type="text" />
              </div>

              <div>
                <label className="label">Email *</label>
                <input className="input" type="email" />
              </div>

              <div>
                <label className="label">Phone Number *</label>
                <input className="input" type="tel" />
              </div>

              <div>
                <label className="label">Current Position *</label>
                <input className="input" type="text" />
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

      {/* Utility Styles */}
      <style>{`
        .label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          display: block;
          margin-bottom: 0.25rem;
        }

        .input {
          width: 100%;
          border: none;
          border-bottom: 2px solid #d1d5db;
          padding: 0.5rem 0;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .input:focus {
          border-bottom-color: #2fa4dd;
        }
      `}</style>
    </div>
  );
};

export default WaveEnquiryForm;
