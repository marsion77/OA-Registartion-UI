const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10">
          <div className="text-4xl font-bold mb-4">Romanchat</div>
          <p className="text-center text-sm opacity-90 mb-8">
            Connect with people around the world.  
            Create your account and get started today.
          </p>
          <button className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transition">
            GET STARTED
          </button>
        </div>

        {/* Right Section */}
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Register
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your account. It’s free and only takes a minute.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input"
              />
            </div>

            <input
              type="text"
              placeholder="Username"
              className="input"
            />

            <input
              type="email"
              placeholder="Email"
              className="input"
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" />
              <p>
                I accept the{" "}
                <span className="text-indigo-600 cursor-pointer">
                  Terms of Use
                </span>{" "}
                &{" "}
                <span className="text-indigo-600 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
            >
              SIGN UP
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Already a member?{" "}
            <span className="text-indigo-600 font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>

      {/* Tailwind utility class */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            border: 1px solid #e5e7eb;
            outline: none;
            transition: all 0.2s;
          }
          .input:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 2px rgba(99,102,241,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default Register;
