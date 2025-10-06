import { useState } from "react";
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        
        {/* User Icon */}
        <FaUserCircle className="text-gray-300 mx-auto mb-6" size={90} />

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-white mb-6">
          Sign in
        </h2>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <FaUser className="text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a href="#" className="text-blue-400 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign in button */}
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Create new account */}
        <div className="text-center">
          <a
            href="/register"
            className="text-blue-400 text-sm hover:underline"
          >
            Create new account?
          </a>
        </div>
      </div>
    </div>
  );
}
