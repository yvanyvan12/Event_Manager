import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-grow bg-gray-50">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Layout;
