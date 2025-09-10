"use client";
import { Menu, Search } from "lucide-react";
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
    {
      id: 6,
      Name: "Marvin McKinney",
      short_message: "Let’s finalize the design this week.",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 6,
      Name: "Marvin McKinney",
      short_message: "Let’s finalize the design this week.",
      image: "https://i.pravatar.cc/150?img=6",
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
     {/* Mobile hamburger button */}
           
      {/* Sidebar */}
      <div className="relative ">
        <div className="mb-8 border-b pb-4">
          <div className="relative mx-auto ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your perfect event"
              
            
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#E6F4F1] text-gray-600"
            />
          </div>
        </div>

        {/* Scrollable Chat List Container */}
        <div className="w-full max-h-[650px] overflow-y-auto">
          {chatUser.map((user, index) => (
            <ul
              key={index}
              className="flex items-center gap-3 p-4 hover:bg-[#E6F4F1] cursor-pointer rounded-2xl "
            >
              <div className="w-16 h-16 overflow-clip">
                <img
                  src={user.image}
                  className="rounded-full w-full"
                  alt={user.Name}
                />
              </div>

              <div>
                <p className="text-xl font-semibold">{user.Name}</p>
                <p className="text-sm text-gray-500">{user.short_message}</p>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatSideNav;
