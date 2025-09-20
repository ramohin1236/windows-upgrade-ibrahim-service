"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import taskalleyLogo from "../../../public/Group (5).svg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiUserSettingsFill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const pathname = usePathname();
// "service_provider", "guest", "task_provider"
  const [role, setRole] = useState("service_provider");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile profile toggle
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkClass = (path) =>
    pathname === path
      ? "text-teal-700 font-medium"
      : "text-gray-800 hover:text-teal-700";

  // Guest Links
  const guestLinks = (
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
      
      <Link href="/categories" className="hover:bg-[#247570] hover:text-white px-4 py-2 rounded-md">
        Categories
      </Link>
      <Link href="/browseservice" className="hover:bg-[#247570] hover:text-white px-4 py-2 rounded-md">
       Browse Tasks
      </Link>
      <Link href="/service-listing" className="hover:bg-[#247570] hover:text-white px-4 py-2 rounded-md">
        Browse Service
      </Link>
      <Link href="/contact" className="hover:bg-[#247570] hover:text-white px-4 py-2 rounded-md">
        Contact / Help
      </Link>
    </div>
  );

  const taskProviderLinks = (
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
      <Link href="/post_task" className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800">
          Post A Task
      </Link>
      <Link href="/browseservice" className={linkClass("/browseservice")}>
        Browse Tasks
      </Link>
      <Link href="/service-listing" className={linkClass("/service-listing")}>
        Browse services
      </Link>
      <Link href="/login" className={linkClass("/login")}>
        List A Service
      </Link>
    </div>
  );

  const serviceProviderLinks = (
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
      <Link href="/service_tast_status" className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800">
         Browse Tasks
      </Link>
      <Link href="/list_my_service" className={linkClass("/list_my_service")}>
         My Service
      </Link>
      <Link href="/login" className={linkClass("/login")}>
          Post A Task
      </Link>
    </div>
  );

  // Auth buttons
  const guestAuthButtons = (
    <div className="flex flex-col lg:items-center lg:flex-row gap-3">
      <Link
        href="/login"
        className="px-6 py-2 border-2 border-[#115e59] rounded-md hover:bg-[#115e59] hover:text-white transition"
      >
        Log In
      </Link>
      <Link
        href="/register"
        className="px-6 py-2.5 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition hover:scale-105"
      >
        Register
      </Link>
    </div>
  );

  // ✅ Desktop profile (daisyUI)
  const desktopProfileDropdown = (
    <div className="dropdown dropdown-end hidden lg:block">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-12 rounded-full overflow-hidden">
          <img
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 px-4 pr-10 py-4 shadow flex flex-col gap-5"
      >
        <div className="flex items-center gap-3 pr-12 pb-6 border-b">
          <div className="w-16 h-16 overflow-hidden rounded-xl">
            <img
              alt="Profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
          <div>
            <p className="text-xl font-bold">Mr.Kashem</p>
            <p>email@gmail.com</p>
          </div>
        </div>
        <Link className="flex items-center gap-2 text-lg" href="/my_task">
          <FaCalendarAlt className="text-[#115e59]" /> My tasks
        </Link>
        <Link className="flex items-center gap-2 text-lg" href="/chat">
          <FaMessage className="text-[#115e59]" /> Messages
        </Link>
        {
          role === "service_provider" ? <Link className="flex items-center gap-2 text-lg border-b pb-4" href="/service_profile_info">
          <RiUserSettingsFill className="text-[#115e59]" /> My Profile
        </Link> : <Link className="flex items-center gap-2 text-lg border-b pb-4" href="/profile_info">
          <RiUserSettingsFill className="text-[#115e59]" /> My Profile
        </Link>
        }
       
        <Link className="flex items-center gap-2 text-lg" href="/logout">
          <PiSignOutBold className="text-[#115e59]" /> Sign Out
        </Link>
      </ul>
    </div>
  );

  // ✅ Mobile profile (custom toggle)
  const mobileProfileDropdown = (
    <div className="lg:hidden mt-6">
      <button
        className="flex items-center gap-3 w-full"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
        <span className="font-medium">My Account</span>
      </button>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          profileOpen ? "max-h-[400px] mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2 text-lg" href="/my_task">
            <FaCalendarAlt className="text-[#115e59]" /> My tasks
          </Link>
          <Link className="flex items-center gap-2 text-lg" href="/chat">
            <FaMessage className="text-[#115e59]" /> Messages
          </Link>
         {
          role === "service_provider" ? <Link className="flex items-center gap-2 text-lg border-b pb-4" href="/service_profile_info">
          <RiUserSettingsFill className="text-[#115e59]" /> My Profile
        </Link> : <Link className="flex items-center gap-2 text-lg border-b pb-4" href="/profile_info">
          <RiUserSettingsFill className="text-[#115e59]" /> My Profile
        </Link>
        }
          <Link className="flex items-center gap-2 text-lg" href="/logout">
            <PiSignOutBold className="text-[#115e59]" /> Sign Out
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={`w-full bg-white shadow-sm sticky top-0 z-50 py-2 transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition duration-300 hover:scale-105">
          <Image className="h-10 lg:h-12" src={taskalleyLogo}
          alt="TaskAlley Logo" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {role === "guest" && guestLinks}
          {role === "task_provider" && taskProviderLinks}
          {role === "service_provider" && serviceProviderLinks}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {role === "guest" ? guestAuthButtons : desktopProfileDropdown}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-teal-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/*  Mobile Dropdown  */}
      <div
        className={`lg:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[700px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {role === "guest" && (
          <>
            {guestLinks}
            <div className="pt-4">{guestAuthButtons}</div>
          </>
        )}
        {role === "task_provider" && taskProviderLinks}
        {role === "service_provider" && serviceProviderLinks}

        {/* Mobile Profile */}
        {role !== "guest" && mobileProfileDropdown}
      </div>
    </nav>
  );
};

export default Navbar;
