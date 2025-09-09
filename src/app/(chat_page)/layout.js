"use client";
import React, { useState } from "react";
import "../globals.css";
import ChatSideNav from "@/components/chat/ChatSideNav";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const ChatLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="mb-16"><Navbar/></div>
        {/* Sidebar */}
        <div className="flex project_container px-6 shadow-2xl gap-4 border-2 border-red-600">
          <div
            className=" w-96 ">
            <ChatSideNav />
          </div>

          {/* Right Content */}
          <div className="flex-1 h-full bg-white border overflow-y-auto lg:ml-[260px]">
            {children}
          </div>
        </div>

       <div className="mt-16"> <Footer/></div>
      </body>
    </html>
  );
};

export default ChatLayout;
