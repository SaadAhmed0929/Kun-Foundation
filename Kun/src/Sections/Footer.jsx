import React from "react";
import ScrollLink from "../Components/ScrollLink.jsx"; // adjust path if needed
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaArrowUp,
    FaHandsHelping,
} from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <footer className="bg-[#d96245] text-white relative">
            <div className="max-w-7xl mx-auto py-16 px-6 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {/* Logo */}
                <div className="col-span-full md:col-span-1">
                    <h2 className="text-2xl font-semibold italic mb-4 flex items-center gap-2">
                        <FaHandsHelping className="text-3xl" /> Kun Foundation
                    </h2>
                    <p className="text-sm leading-relaxed mb-4">
                        When a child gets access to good food, it can change just about everything.
                    </p>
                    <div className="flex space-x-3">
                        {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="bg-white/10 hover:bg-white/20 p-3 rounded transition-all"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                    <ul className="space-y-2 text-sm">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <ScrollLink
                                    to={item.path}
                                    className="relative inline-block after:block after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="text-sm space-y-2">
                        <li>4486 Richards Avenue, Modesto CA - 95354</li>
                        <li>209-818-6041</li>
                        <li>charity90@gmail.com</li>
                    </ul>
                </div>

                {/* Support */}
                <div className="col-span-full md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <p className="text-sm mb-4">
                        When a child gets access to good food, it can change.
                    </p>
                    <ScrollLink
                        to="/contact"
                        className="inline-block text-center bg-white text-[#d96245] font-semibold px-5 py-2 rounded border border-white hover:bg-transparent hover:text-white transition-all duration-300"
                    >
                        Join Us Today
                    </ScrollLink>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="text-center text-sm py-4 border-t border-white/20">
                ©2025 All rights reserved
            </div>

            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-teal-500 hover:bg-teal-600 text-white p-4 text-lg rounded-full shadow-lg z-50 transition-all"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
        </footer>
    );
};

export default Footer;
