import React, { useState } from "react";
import useAuthStore from "../../stores/authStore";
import { useNavigate } from "react-router";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };
  return (
    <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] max-w-md w-full">
        <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6 text-center">
          Login to Luxtower
        </h2>
        <div className="space-y-4">
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
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <button type="submit" className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]">
            Login
          </button>
        </div>
        <p className="text-[#666666] manrope text-center mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-[#a27d56] hover:underline">
            Register here
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
