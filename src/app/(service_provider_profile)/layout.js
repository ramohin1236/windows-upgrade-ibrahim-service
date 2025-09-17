"use client";
import React, { useState } from "react";
import "../globals.css";
import { Menu } from "lucide-react";
import ServiceProvideSideNav from "@/components/service_provider/ServiceProvideSideNav";


const ServiceProviderProfileLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="max-w-10/12 mx-auto min-h-screen flex justify-center items-center">
          <div className="flex shadow-lg rounded-xl overflow-hidden min-h-[1000px] w-full p-4">
            {/* Sidebar (mobile toggle button) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden absolute top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>

            {/* Sidebar */}

            <ServiceProvideSideNav open={open} />
            {/* Overlay (mobile only) */}
            {open && (
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                onClick={() => setOpen(false)}
              />
            )}

            {/* Content */}
            <main className="flex-1 bg-white shadow-inner rounded-r-lg">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ServiceProviderProfileLayout;
