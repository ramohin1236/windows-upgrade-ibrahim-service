import React from "react";
import Image from "next/image";
import Link from "next/link";
import client from "../../../public/client.png";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { TbDiscount } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const sidebarLinks = [
  { name: "Profile Info", href: "/service_profile_info", icon: <CgProfile /> },
  {
    name: "Notifications",
    href: "/service_provider_notification",
    icon: <IoIosNotifications />,
  },
  { name: "Linked Account", href: "/linked_account", icon: <FaMoneyBillTransfer /> },
  { name: "Earning", href: "/earning", icon: <FaMoneyBillTransfer /> },
  {
    name: "Security Settings",
    href: "/service_security",
    icon: <IoIosSettings />,
  },
  { name: "Refer & Discounts", href: "/service_discount", icon: <TbDiscount /> },
];

const ServiceProvideSideNav = ({ open, onClose }) => {
  return (
    <div
      className={`fixed md:relative top-0 left-0 min-h-full rounded-l-lg bg-[#E6F4F1] shadow-lg z-40 transform transition-transform duration-300
               ${
                 open ? "translate-x-0" : "-translate-x-full"
               } md:translate-x-0`}
    >
      <div className="flex flex-col items-center py-6 gap-2">
        {/* Profile Image */}
        <Image
          src={client}
          alt="profile"
          width={80}
          height={80}
          className="rounded-full shadow"
        />
        <h2 className="font-semibold">Wade Warren</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4">
        {sidebarLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="group px-3 py-4 flex items-center gap-3 rounded-lg border border-[#b8d3cd] text-[#115E59] text-xl font-medium hover:bg-[#115E59] hover:text-white transition w-64"
            onClick={() => {
              // Close sidebar when menu item is clicked (mobile only)
              if (onClose) {
                onClose();
              }
            }}
          >
            <span className="group-hover:text-white">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ServiceProvideSideNav;