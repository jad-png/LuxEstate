import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../stores/authStore";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Add phone state
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !password || !passwordConfirmation) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("Passwords do not match.");
      return;
    }

    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number (at least 10 digits, numbers only).");
      return;
    }
    try {
      setError(null);
      setLoading(true);

      await register(name, email, phone, password, passwordConfirmation, 3);
      navigate("/my-profile");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6 text-center">
          Register with Luxtower
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Confirm your password"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-[#666666] manrope">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47] disabled:bg-[#a27d56]/50"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
        <p className="text-[#666666] manrope text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#a27d56] hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;