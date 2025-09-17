import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import client from "../../../../public/client.png";
import Link from "next/link";

const UpdateInformation = () => {
  return (
    <div className="py-6 md:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
        <h2 className="font-medium text-gray-700">Update Info</h2>
      </div>

      {/* Content */}
      <div className="bg-white shadow rounded-xl p-6">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-12">
          {/* Profile Image */}
          <Image
            src={client}
            alt="profile"
            width={500}
            height={500}
            className="rounded-full w-44 h-44"
          />

          {/* Info Grid */}
          <div className=" w-full">
            {/* Left Column */}
            <form className="w-full p-6 bg-white shadow-lg rounded-xl space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="border border-gray-300 rounded-lg px-4 py-4 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded-lg px-4 py-4 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="border border-gray-300 rounded-lg px-4 py-4 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    className="border border-gray-300 rounded-lg px-4 py-4 focus:ring-2 focus:ring-teal-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-800 transition duration-300 ease-in-out"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInformation;
