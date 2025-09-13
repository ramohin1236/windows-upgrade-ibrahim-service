import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import client from "../../../../public/client.png";
import Link from "next/link";

const ProfileInfo = () => {
  return (
    <div className="py-6 md:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
        <h2 className="font-medium text-gray-700">Profile Info</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">Name</h3>
                <p className="text-gray-600">Wade Warren</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  Phone Number
                </h3>
                <p className="text-gray-600">(555) 987-6543</p>
              </div>
              <Link
                href="/update_info"
                className="px-6 py-2 border-2 border-[#115e59] rounded-md hover:bg-[#115e59] hover:text-white transition transform duration-300 text-[#115e59] cursor-pointer"
              >
                Update Profile
              </Link>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">Email</h3>
                <p className="text-gray-600">WadeWarren@email.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  Location
                </h3>
                <p className="text-gray-600">
                  1234 Maple Avenue, Suite 5B <br />
                  San Diego, California, 92103, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
