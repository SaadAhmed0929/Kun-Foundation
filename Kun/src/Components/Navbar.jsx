import { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  Heart,
  Menu,
  X,
  Home,
  Users,
  BookOpen,
  Info,
  Newspaper,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Home", path: "/", icon: Home },
  { label: "Who We Are?", path: "/who-we-are", icon: Users },
  { label: "Programs", path: "/programs", icon: BookOpen },
  { label: "About", path: "/about", icon: Info },
  { label: "Blog", path: "/blog", icon: Newspaper },
  { label: "Contact Us", path: "/contact", icon: Phone },
];

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative after:absolute after:left-1/2 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 after:origin-center hover:after:w-full after:translate-x-[-50%]"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const nav = navRef.current;
    gsap.set(nav, { y: -60, opacity: 0 });
    gsap.to(nav, { y: 0, opacity: 1, duration: 1, ease: "power2.out" });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest("#mobileSidebar") && !e.target.closest("#menuToggle")) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMobileLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* === Top Bar === */}
      <div className="w-full bg-[#454603] text-white text-sm py-2 px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="tel:+923164396658" className="flex items-center gap-1 hover:text-green-400 transition">
            <Phone size={15} />
            +92 316 4396658
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:info@kunfoundation.org" className="flex items-center gap-1 hover:text-green-400 transition">
            <Mail size={15} />
            info@kunfoundation.org
          </a>
        </div>

        <div className="flex gap-3 mt-1 sm:mt-0">
          <a href="#" className="hover:text-green-400 transition"><Facebook size={17} /></a>
          <a href="#" className="hover:text-green-400 transition"><Instagram size={17} /></a>
          <a href="#" className="hover:text-green-400 transition"><Linkedin size={17} /></a>
          <a href="#" className="hover:text-green-400 transition"><Youtube size={17} /></a>
        </div>
      </div>

      {/* === Main Navbar === */}
      <nav
        ref={navRef}
        className={`fixed left-0 w-full z-50 text-white transition-all duration-500 ${
          scrolled
            ? "bg-[#454603]/90 py-3 shadow-md backdrop-blur-lg top-0"
            : "bg-transparent py-5 top-[10px]"
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
            scrolled ? "h-[55px]" : "h-[85px]"
          }`}
        >
          {/* Logo & Name */}
          <div className="flex items-center gap-2 transition-all duration-500">
            <img
              src={scrolled ? "/images/white_logo.png" : "/images/logo.png"}
              alt="Kun Foundation Logo"
              className={`object-contain transition-all duration-500 ${
                scrolled ? "w-10 h-10" : "w-15 h-15"
              }`}
            />
            <Link
              to="/"
              className={`font-semibold tracking-wide whitespace-nowrap transition-all duration-500 ${
                scrolled ? "text-lg" : "text-2xl sm:text-3xl"
              }`}
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              Kun Foundation
            </Link>
          </div>

          {/* Nav Links (hide on scroll) */}
          {!scrolled && (
            <ul className="hidden lg:flex gap-4 xl:gap-8 mx-6 text-sm xl:text-base font-medium whitespace-nowrap">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <NavLink to={path}>{label}</NavLink>
                </li>
              ))}
            </ul>
          )}

          {/* Donate + Menu */}
          <div className="flex items-center gap-4 xl:gap-6">
            <Link to="/donate" className="hidden sm:inline">
              <button
                className={`px-5 py-2.5 text-sm xl:text-base flex items-center gap-2 font-medium rounded transition-all duration-300 transform hover:scale-[1.03] hover:shadow-md ${
                  scrolled
                    ? "bg-white text-[#454603] hover:bg-gray-200"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                <Heart size={18} />
                Make a Donation
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <div id="menuToggle" className="lg:hidden z-[70]">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* === Mobile Sidebar === */}
      {isOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[80] lg:hidden transition-opacity" />}

      <aside
        id="mobileSidebar"
        className={`fixed top-0 right-0 w-[260px] sm:w-[300px] h-full bg-white shadow-lg z-[999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-red-500 transition">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-start px-6 py-6 text-gray-800 space-y-5">
          {NAV_LINKS.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={handleMobileLinkClick}
              className="flex items-center gap-3 text-base font-light hover:text-red-500 transition-all"
            >
              <Icon size={18} className="text-gray-500" />
              <span>{label}</span>
            </Link>
          ))}

          <hr className="w-full border-gray-200" />

          <a href="tel:+923164396658" className="text-sm font-light text-gray-600 underline underline-offset-4 decoration-dashed hover:text-green-600 transition">
            +92 316 4396658
          </a>

          <Link to="/donate" onClick={handleMobileLinkClick} className="pt-2">
            <button className="bg-[#454603] text-white px-5 py-2 text-sm rounded hover:bg-[#5a5c04] transition">
              <Heart size={16} className="inline mr-1" />
              Make a Donation
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
}
