import React from "react";
import service_provider from "../../../public/client.png";
import { Star, Shield } from "lucide-react";
import Image from "next/image";

const InfoProvider = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between lg:items-baseline md:items-start lg:gap-20 md:mb-6 border-b">
      {/* left side image and name */}
      <div className="flex items-center gap-4 mb-2">
        <div>
          <Image
            src={service_provider}
            alt="Marvin Fey"
            className="w-20 md:w-44 rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="md:text-xl font-semibold text-gray-900">Marvin Fey</h2>
          <p className="text-gray-600 text-sm md:text-base">Marvin@gmail.com</p>
        </div>
      </div>
      <div className="flex md:flex-col lg:flex-row w-full items-center justify-between mb-4">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">4.5</span>
          <span className="text-gray-500">(149 Reviews)</span>
        </div>
        <div className="">
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-[#00786f]">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProvider;
