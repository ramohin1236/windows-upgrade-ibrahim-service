import React from "react";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import ServiceCard from "@/components/browseservice/ServiceCard";
import userImage from "../../../../public/task_img.png";
import GoogleMap from "@/components/browseservice/GoogleMap";
import Filter from "@/components/browseservice/Filter";


const BrowseService = () => {
  return (
    <div >
      {/* filter head */}
        
      {/* card and map */}
      <div className="flex flex-col md:flex-row gap-8">
        
        <div className="w-full h-96 md:h-[800px] ">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default BrowseService;
