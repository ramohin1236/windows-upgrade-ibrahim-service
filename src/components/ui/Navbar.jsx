"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import taskalleyLogo from "../../../public/taskalley.svg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
      ? "text-teal-700 font-medium"
      : "text-gray-800 hover:text-teal-700";

  return (
    <nav
      className={`w-full bg-white shadow-sm sticky top-0 z-50 py-2 transform transition-transform duration-500 ${
        isVisible ? "translate-y-0": "-translate-y-full"
      }`}
    >
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
                href="/construction"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Request a Service
              </Link>
              <Link
                href="/construction"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Categories
              </Link>
              <Link
                href="/construction"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Browse Service
              </Link>
              <Link
                href="/construction"
                className="hover:bg-[#247570] hover:text-white px-4 py-2 text-black rounded-md"
              >
                Contact / Help
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/post_task"
                className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800"
              >
                Post a Task
              </Link>
              <Link href="/construction" className={linkClass("/browse-tasks")}>
                Browse tasks
              </Link>
              <Link
                href="/construction"
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
                href="/construction"
                className="px-6 py-2 border-2 border-[#115e59] rounded-md hover:bg-[#115e59] hover:text-white transition transform duration-300"
              >
                Log In
              </Link>
              <Link
                href="/construction"
                className="px-6 py-2.5 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-16 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  px-4 pr-10 py-4 shadow flex flex-col gap-5 
                "
              >
                <div className="flex items-center gap-3 pr-12 pb-6 border-b">
                  <div className="w-16 h-16 overflow-clip rounded-xl">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                  <div className="justify-between">
                    <p className="text-xl font-bold">Mr.Kashem</p>
                    <p>email@gmail.com</p>
                  </div>
                </div>
                <Link className="flex items-center gap-2 text-xl" href="/my_task">
                  <div>
                    <FaCalendarAlt className="text-[#115e59]"/>
                  </div>
                  <p >
                    My tasks
                    
                  </p>
                </Link>
                <Link className="flex items-center gap-2 text-xl" href="/chat">
                  <div>
                    <FaMessage className="text-[#115e59]"/>

                  </div>
                  <p >
                    Messages
                    
                  </p>
                </Link>
                <Link className="flex items-center gap-2 text-xl border-b pb-4" href="/profile_info">
                  <div>
                    <RiUserSettingsFill className="text-[#115e59]"/>

                  </div>
                  <p >
                    My Profile 
                    
                  </p>
                </Link>
                <Link className="flex items-center gap-2 text-xl" href="">
                  <div>
                    <PiSignOutBold  className="text-[#115e59]"/>

                  </div>
                  <p >
                    Sign Out
                    
                  </p>
                </Link>
               
              </ul>
            </div>
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
              href="/construction"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Request a Service
            </Link>
            <Link
              href="/construction"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Categories
            </Link>
            <Link
              href="/construction"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Browse service
            </Link>
            <Link
              href="/construction"
              className="block px-4 py-3 mx-6 text-lg hover:bg-[#115e59] text-[#115e59] rounded-md text-center hover:text-white"
            >
              Contact / Help
            </Link>
            <div className="flex gap-3 pt-4">
              <Link
                href="/construction"
                className="flex-1 text-center px-4 py-3 border border-teal-700 text-teal-700 rounded-md hover:bg-teal-50"
              >
                Log In
              </Link>
              <Link
                href="/construction"
                className="flex-1 text-center px-4 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800"
              >
                Register
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link
              href="/construction"
              className="block px-4 py-3 bg-teal-700 text-white rounded-md hover:bg-teal-800"
            >
              Post a Task
            </Link>
            <Link
              href="/construction"
              className={`block px-4 py-3 ${linkClass("/browse-tasks")}`}
            >
              Browse tasks
            </Link>
            <Link
              href="/construction"
              className={`block px-4 py-3 ${linkClass("/list-services")}`}
            >
              List my services
            </Link>
            {/* Profile */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            {/* profile */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
