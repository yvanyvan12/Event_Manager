import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    country: "Rwanda",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Icon */}
        <FaUserCircle className="text-gray-300 mx-auto mb-6" size={90} />

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-white mb-6">
          Create account
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              name="fullName"
              placeholder="Enter full names"
              value={form.fullName}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              required
            >
              <option value="">Select your gender</option>
              <option value="male" className="bg-gray-800">Male</option>
              <option value="female" className="bg-gray-800">Female</option>
              <option value="other" className="bg-gray-800">Other</option>
            </select>
            <MdArrowDropDown className="text-gray-400" />
          </div>

          {/* Birth Date */}
          <div>
            <p className="text-sm text-gray-400 mb-1">Select your date of birth</p>
            <div className="flex items-center bg-gray-700 rounded-lg px-3">
              <FaCalendarAlt className="text-gray-400" />
              <input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <p className="text-sm text-gray-400 mb-1">Your country</p>
            <div className="flex items-center bg-gray-700 rounded-lg px-3">
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              >
                <option className="bg-gray-800">Rwanda</option>
                <option className="bg-gray-800">Kenya</option>
                <option className="bg-gray-800">Uganda</option>
                <option className="bg-gray-800">Tanzania</option>
              </select>
              <MdArrowDropDown className="text-gray-400" />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <FaEnvelope className="text-gray-400" />
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

          {/* Phone (optional) */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <FaPhone className="text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Phone number (Optional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
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

          {/* Confirm Password */}
          <div className="flex items-center bg-gray-700 rounded-lg px-3">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent px-3 py-2 text-gray-200 focus:outline-none"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login link */}
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
