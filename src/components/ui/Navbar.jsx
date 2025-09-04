"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import taskalleyLogo from "../../../public/taskalley.svg";


const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isOpen, setIsOpen] = useState(false); 

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down → Hide navbar
        setIsVisible(false);
      } else {
        // Scrolling Up → Show navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // helper for active links
  const linkClass = (path) =>
    pathname === path
      ? "text-teal-700 font-semibold"
      : "text-gray-800 hover:text-teal-700";

  return (
    <nav className={`w-full bg-white shadow-sm sticky top-0 z-50 py-2 transform transition-transform duration-500 ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  }`}>
      <div className="max-w-[1240px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition transform duration-300 hover:scale-105"
        >
          <Image src={taskalleyLogo} alt="TaskAlley Logo" priority />
        </Link>

        {/* Desktop Menu (lg+) */}
        <div className="hidden lg:flex items-center gap-6">
          {!isLoggedIn ? (
            <>
              <Link
                href="/"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Request a Service
              </Link>
              <Link
                href="/"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Categories
              </Link>
              <Link
                href="/"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Browse Service
              </Link>
              <Link
                href="/"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
               Contact / Help	
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800"
              >
                Post a Task
              </Link>
              <Link href="/" className={linkClass("/browse-tasks")}>
                Browse tasks
              </Link>
              <Link
                href="/"
                className={linkClass("/list-services")}
              >
                List my services
              </Link>
            </>
          )}
        </div>

        {/* Desktop Right Side (lg+) */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="px-6 py-2 border-2 border-[#115e59] rounded-md hover:bg-[#115e59] hover:text-white transition transform duration-300"
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="px-6 py-2.5 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105"
              >
                Register
              </Link>
            </>
          ) : (
            <button className="text-teal-700 text-2xl">
              <FaUserCircle />
            </button>
          )}
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden text-3xl text-teal-700 transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose className="transition-transform duration-300 ease-in-out rotate-180" />
          ) : (
            <MdMenu className="transition-transform duration-300 ease-in-out rotate-0" />
          )}
        </button>
      </div>

      {/* Mobile / Tablet Dropdown */}
      <div
        className={`lg:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {!isLoggedIn ? (
          <>
            <Link
              href="/"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Request a Service
            </Link>
            <Link
              href="/"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Categories
            </Link>
            <Link
              href="/"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Browse service
            </Link>
            <Link
              href="/"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Contact / Help	
            </Link>
            <div className="flex gap-3 pt-4">
              <Link
                href="/"
                className="flex-1 text-center px-4 py-3 border border-teal-700 text-teal-700 rounded-md hover:bg-teal-50"
              >
                Log In
              </Link>
              <Link
                href="/"
                className="flex-1 text-center px-4 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800"
              >
                Register
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link
              href="/"
              className="block px-4 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800"
            >
              Post a Task
            </Link>
            <Link
              href="/"
              className={`block px-4 py-3 ${linkClass("/browse-tasks")}`}
            >
              Browse tasks
            </Link>
            <Link
              href="/"
              className={`block px-4 py-3 ${linkClass("/list-services")}`}
            >
              List my services
            </Link>
            <button className="w-full flex justify-center pt-3 text-teal-700 text-2xl">
              <FaUserCircle />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
