"use client";
import React from "react";
import { useState } from "react";
import service_main_image from "../../../../../../public/main_home.jpg";
import service_second from "../../../../../../public/service_second.png";
import Image from "next/image";
import InfoProvider from "@/components/serviceprovider/InfoProvider";
import ServiceTabs from "@/components/serviceprovider/ServiceTabs";
import BookingCard from "@/components/serviceprovider/BookingCard";
import { PiNotePencilFill } from "react-icons/pi";
import { MdBlock } from "react-icons/md";

const ListMyServiceDetails = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="project_container mx-auto lg:p-6 overflow-clip">
      {/* Header */}
      <div className="px-6 mt-8">
        {/* heading part */}
        <div className="flex flex-col flex-co gap-3 mb-6">
          <div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Cleaning
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Office Cleaning Service
          </h1>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap flex-col lg:flex-row gap-4 mb-6">
          {/* Main large image */}
          <div className="flex-1">
            <Image
              src={service_main_image}
              height={800}
              alt="Professional cleaner vacuuming office"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            {/* Smaller images */}

            <div className="grid grid-cols-2 gap-4">
              <Image
                src={service_second}
                alt="Window cleaning"
                className="w-full h-36 md:h-60  object-cover rounded-lg"
              />
              <Image
                src={service_second}
                alt="Office cleaning"
                className="w-full h-36 md:h-60 object-cover rounded-lg"
              />
              <Image
                src={service_second}
                alt="Window cleaning"
                className="w-full h-36 md:h-60 object-cover rounded-lg"
              />

              <Image
                src={service_second}
                alt="Office cleaning"
                className="w-full h-36 md:h-60 object-cover rounded-lg"
              />
            </div>

            <div className="flex gap-4"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Content */}
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <InfoProvider />

            <ServiceTabs />
          </div>

          <div className="flex">
            <div className="flex w-1/2 gap-3">
              <button className="flex-1 text-center px-4 py-3 border border-teal-700 text-teal-700 rounded-md hover:bg-teal-50 cursor-pointer flex items-center gap-3 justify-center">
                <PiNotePencilFill /> Update Details
              </button>
              <button className="flex-1 text-center px-4 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-50 cursor-pointer flex items-center gap-3 justify-center">
                <MdBlock /> Inactive
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <BookingCard />
      </div>
    </div>
  );
};

export default ListMyServiceDetails;
