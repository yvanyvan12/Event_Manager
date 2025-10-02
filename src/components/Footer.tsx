import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} EventMaster. All rights reserved.</p>
                <div className="space-x-4">
                    <a href="#" className="hover:text-yellow-400">Facebook</a>
                    <a href="#" className="hover:text-yellow-400">Twitter</a>
                    <a href="#" className="hover:text-yellow-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
