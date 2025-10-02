import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="text-center py-20 bg-gradient-to-r from-yellow-300 to-yellow-500">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Welcome to EventMaster 🎉
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Organize, manage, and attend amazing events with ease.
                </p>
                <Link
                    to="/events"
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
                >
                    Explore Events
                </Link>
            </section>

            {/* Featured Events */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold mb-6">Upcoming Events</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Example Card */}
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-bold">Tech Conference 2025</h3>
                        <p className="text-gray-600 mt-2">Dec 10, Kigali Convention Center</p>
                        <Link to="/events/1" className="text-yellow-500 font-medium mt-4 inline-block">
                            View Details →
                        </Link>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-bold">Music Festival</h3>
                        <p className="text-gray-600 mt-2">Nov 15, Kigali Arena</p>
                        <Link to="/events/2" className="text-yellow-500 font-medium mt-4 inline-block">
                            View Details →
                        </Link>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
                        <h3 className="text-xl font-bold">Startup Meetup</h3>
                        <p className="text-gray-600 mt-2">Oct 25, Innovation Hub</p>
                        <Link to="/events/3" className="text-yellow-500 font-medium mt-4 inline-block">
                            View Details →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
