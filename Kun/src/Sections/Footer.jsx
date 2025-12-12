import React, { useEffect, useState, useRef } from "react";
import ScrollLink from "../Components/ScrollLink.jsx";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaHandsHelping,
} from "react-icons/fa";

const Footer = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);
  const footerRef = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  // helper to check element visibility
  const isElementVisible = (el, minVisiblePx = 1) => {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    return visibleHeight >= minVisiblePx;
  };

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      ticking = false;

      const footerEl = footerRef.current;
      const helpEl = document.getElementById("helpSection");
      const blogEl = document.getElementById("blogSection");

      const footerVisible = isElementVisible(footerEl, 1);
      const helpVisible = isElementVisible(helpEl, 1);
      const blogVisible = isElementVisible(blogEl, 1);

      if ((helpVisible || footerVisible) && !blogVisible) {
        setIsWhiteMode(true);
      } else {
        setIsWhiteMode(false);
      }
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(checkVisibility);
        ticking = true;
      }
    };

    checkVisibility(); // initial run
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#454603] text-white relative">
      <div className="max-w-7xl mx-auto py-16 px-6 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo */}
        <div className="col-span-full md:col-span-1">
          <h2 className="text-2xl font-semibold italic mb-4 flex items-center gap-2">
            <FaHandsHelping className="text-3xl" /> Kun Foundation
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            When a child gets access to good education, it can change just about everything.
          </p>
          <div className="flex space-x-3">
            {[
  { Icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61572980026848&rdid=IVsETalcxFzrkJJ8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BxWRDfgfb%2F" },
  { Icon: FaLinkedinIn, link: "https://www.linkedin.com/company/kunfoundation" },
  { Icon: FaInstagram, link: "https://www.instagram.com/kun_foundation_org" },
  { Icon: FaWhatsapp, link: "https://wa.me/923284797092" },
].map(({ Icon, link }, i) => (
  <a
    key={i}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
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
            <li>Main Campus, Sector C DHA Phase 6, Lahore, 54000</li>
            <li>+92 328-4797092</li>
            <li>kunfoundation.org@gmail.com</li>
          </ul>
        </div>

        {/* Support */}
        <div className="col-span-full md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm mb-4">When a child gets access to good education, it can change.</p>
          <ScrollLink
            to="/contact"
            className="inline-block text-center bg-white text-[#454603] font-semibold px-5 py-2 rounded border border-white hover:bg-transparent hover:text-white transition-all duration-300"
          >
            Join Us Today
          </ScrollLink>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 border-t border-white/20">
        ©2025 KUN Foundation All rights reserved
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-4 text-lg rounded-full shadow-lg z-50 transition-colors duration-300 ${
          isWhiteMode ? "bg-white text-[#454603]" : "bg-[#454603] text-white hover:bg-[#5c5f0a]"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
