import React, { useState } from 'react';

function TicketmasterNavAndSearch() {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('All Dates');
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    console.log({ location, dates, search });
  };

  return (
    <div className="bg-yellow-400">
      {/* Navbar */}
      <nav className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              eventmaster
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex space-x-4 xl:space-x-8 text-gray-900 font-medium">
              <a href="/concerts" className="hover:text-gray-700 transition">
                Events
              </a>
              <a href="/sports" className="hover:text-gray-700 transition">
                Blog
              </a>
              <a href="/arts-theater" className="hover:text-gray-700 transition">
                About us
              </a>
              <a href="/family" className="hover:text-gray-700 transition">
                Contact
              </a>
              
            </div>

            {/* Sign In/Register - Desktop */}
            <a
              href="/register"
              className="hidden lg:flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition font-medium"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                />
              </svg>
              <span>Sign In/Register</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-900 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3">
              <a href="/concerts" className="block text-gray-900 hover:text-gray-700 font-medium">
                Concerts
              </a>
              <a href="/sports" className="block text-gray-900 hover:text-gray-700 font-medium">
                Sports
              </a>
              <a href="/arts-theater" className="block text-gray-900 hover:text-gray-700 font-medium">
                Arts, Theater & Comedy
              </a>
              <a href="/family" className="block text-gray-900 hover:text-gray-700 font-medium">
                Family
              </a>
              <a href="/cities" className="block text-gray-900 hover:text-gray-700 font-medium">
                Cities
              </a>
              <a href="/register" className="flex items-center space-x-2 text-gray-900 hover:text-gray-700 font-medium pt-2 border-t border-gray-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Sign In/Register</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Search Form */}
      <div className="py-6 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex bg-white rounded-lg shadow-xl items-stretch overflow-hidden">
            {/* Location Field */}
            <div className="flex-1 px-4 lg:px-6 py-4 border-r border-gray-200">
              <div className="flex items-start space-x-2 lg:space-x-3">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City or Zip Code"
                    className="w-full text-sm lg:text-base text-gray-600 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Dates Field */}
            <div className="flex-1 px-4 lg:px-6 py-4 border-r border-gray-200">
              <div className="flex items-start space-x-2 lg:space-x-3">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                </svg>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Dates
                  </label>
                  <select
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full text-sm lg:text-base text-gray-600 outline-none appearance-none cursor-pointer bg-transparent"
                  >
                    <option>All Dates</option>
                    <option>Today</option>
                    <option>This Weekend</option>
                    <option>This Week</option>
                    <option>Next Week</option>
                    <option>This Month</option>
                  </select>
                </div>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 mt-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* Search Field */}
            <div className="flex-[2] px-4 lg:px-6 py-4 flex items-stretch">
              <div className="flex items-start space-x-2 lg:space-x-3 flex-1 min-w-0">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Search
                  </label>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Artist, Event or Venue"
                    className="w-full text-sm lg:text-base text-gray-600 placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 lg:px-8 rounded-md ml-4 transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden bg-white rounded-lg shadow-xl p-4 space-y-4">
            {/* Location Field */}
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or Zip Code"
                  className="w-full text-base text-gray-600 placeholder-gray-400 outline-none border-b border-gray-200 pb-2"
                />
              </div>
            </div>

            {/* Dates Field */}
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
              </svg>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Dates
                </label>
                <select
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full text-base text-gray-600 outline-none appearance-none cursor-pointer bg-transparent border-b border-gray-200 pb-2"
                >
                  <option>All Dates</option>
                  <option>Today</option>
                  <option>This Weekend</option>
                  <option>This Week</option>
                  <option>Next Week</option>
                  <option>This Month</option>
                </select>
              </div>
            </div>

            {/* Search Field */}
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Search
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Artist, Event or Venue"
                  className="w-full text-base text-gray-600 placeholder-gray-400 outline-none border-b border-gray-200 pb-2"
                />
              </div>
            </div>

            {/* Search Button - Mobile */}
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketmasterNavAndSearch;