import React from "react";

export function Register() {
  return (
    <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] max-w-md w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6 text-center">
          Register with Luxtower
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <button className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]">
            Register
          </button>
        </div>
        <p className="text-[#666666] manrope text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#a27d56] hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;