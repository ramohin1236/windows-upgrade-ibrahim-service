"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const ChatSideNav = () => {
  const chatUser = [
    {
      id: 1,
      Name: "Lee Williamso",
      short_message: "Hey, are you available for a quick call?",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      Name: "Eleanor Pena",
      short_message: "Yes, that’s gonna work, hopefully.",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      Name: "Jacob Jones",
      short_message: "I’ll send you the files by tonight.",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      Name: "Theresa Webb",
      short_message: "Can we move the meeting to tomorrow?",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      Name: "Courtney Henry",
      short_message: "Thanks for the update! Much appreciated.",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      Name: "Marvin McKinney",
      short_message: "Let’s finalize the design this week.",
      image: "https://i.pravatar.cc/150?img=6",
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <nav className="pb-6 space-y-2">
        {/* Search */}
        <div className="relative bg-gray-100 px-4 py-2.5 rounded-md mt-6">
          <input
            className="text-sm text-slate-800 outline-none bg-transparent px-1 w-full"
            placeholder="Search..."
          />
        </div>

        {/* Profile */}
        <div className="flex gap-5 items-center cursor-pointer"></div>

        {/* Nav Links */}
        <ul className="space-y-2 pl-2 flex-1 mt-2">
          {chatUser.map((user, index) => (
            <li
              key={index}
              className="flex items-center gap-4 hover:bg-[#E6F4F1] py-4 px-3 mr-2 rounded-xl cursor-pointer"
            >
              <div className="relative">
                <div>
                  <img
                    src="https://readymadeui.com/profile_2.webp"
                    alt="profile"
                    className="w-16 h-16 rounded-full border-white"
                  />
                </div>
                <div className="h-3 w-3 rounded-full bg-green-600 border-2 border-white block absolute  right-0"></div>
              </div>

              <div>
                <p className="text-base font-medium">{user.Name}</p>
                <p className="text-sm text-[#6B7280]">{user.short_message}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ChatSideNav;
