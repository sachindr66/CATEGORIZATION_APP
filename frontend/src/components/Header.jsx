import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-between items-center px-8 py-4 bg-gray-100">
            <h1 className="text-2xl font-bold">ECOMMERCE</h1>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="focus:outline-none">
                    {isMobileMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>

            <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:underline">Categories</a>
                <a href="#" className="hover:underline">Sale</a>
                <a href="#" className="hover:underline">Clearance</a>
                <a href="#" className="hover:underline">New stock</a>
                <a href="#" className="hover:underline">Trending</a>
            </nav>

            <div className="hidden md:flex space-x-4">
                <a href="/login" className="hover:underline">Login</a>
                <a href="/register" className="hover:underline">Sign Up</a>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-100 z-20 transform ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 p-4 focus:outline-none absolute top-2 right-2"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <nav className="flex flex-col items-start space-y-4 px-8 py-10">
                    <a href="#" className="hover:underline">Categories</a>
                    <a href="#" className="hover:underline">Sale</a>
                    <a href="#" className="hover:underline">Clearance</a>
                    <a href="#" className="hover:underline">New stock</a>
                    <a href="#" className="hover:underline">Trending</a>
                </nav>
                <div className="flex flex-col items-start space-y-4 px-8 py-4 border-t border-gray-200">
                    <a href="/login" className="hover:underline">Login</a>
                    <a href="/register" className="hover:underline">Sign Up</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
