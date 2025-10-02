import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-yellow-400 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-gray-900">
                    EventMaster
                </Link>

                {/* Nav Links */}
                <div className="space-x-6 hidden md:flex">
                    <Link to="/" className="hover:text-gray-700 font-medium">Home</Link>
                    <Link to="/events" className="hover:text-gray-700 font-medium">Events</Link>
                    <Link to="/About" className="hover:text-gray-700 font-medium">About</Link>
                    <Link to="/contact" className="hover:text-gray-700 font-medium">Contact</Link>
                </div>

                {/* CTA Button */}
                <Link
                    to="/register"
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Register
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
