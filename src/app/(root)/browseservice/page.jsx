import React from "react";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import ServiceCard from "@/components/browseservice/ServiceCard";
import userImage from "../../../../public/task_img.png";
import GoogleMap from "@/components/browseservice/GoogleMap";

const taskData = [
  {
    id: 1,
    userImaage: userImage,
    serviceName: "Help move a couch",
    category: "gardening",
    userName: "Marvin Fey",
    mapIcon: <LuMapPin />,
    place: "Los Angeles CA 90024",
    calenderIcon: <SlCalender />,
    city: "New York, USA",
    monthIcon: <IoTimerOutline />,
    month: "15 May 2020 8.00am",
    open: "open",
    close: "close",
    price: "$24.00",
  },
  {
    id: 2,
    userImaage: userImage,
    serviceName: "Help move a couch",
    category: "gardening",
    userName: "Marvin Fey",
    mapIcon: <LuMapPin />,
    place: "Los Angeles CA 90024",
    calenderIcon: <SlCalender />,
    city: "New York, USA",
    monthIcon: <IoTimerOutline />,
    month: "15 May 2020 8.00am",
    open: "open",
    close: "close",
    price: "$24.00",
  },
  {
    id: 3,
    userImaage: userImage,
    serviceName: "Help move a couch",
    category: "gardening",
    userName: "Marvin Fey",
    mapIcon: <LuMapPin />,
    place: "Los Angeles CA 90024",
    calenderIcon: <SlCalender />,
    city: "New York, USA",
    monthIcon: <IoTimerOutline />,
    month: "15 May 2020 8.00am",
    open: "open",
    close: "close",
    price: "$24.00",
  },
  {
    id: 4,
    userImaage: userImage,
    serviceName: "Help move a couch",
    category: "gardening",
    userName: "Marvin Fey",
    mapIcon: <LuMapPin />,
    place: "Los Angeles CA 90024",
    calenderIcon: <SlCalender />,
    city: "New York, USA",
    monthIcon: <IoTimerOutline />,
    month: "15 May 2020 8.00am",
    open: "open",
    close: "close",
    price: "$24.00",
  },
  {
    id: 5,
    userImaage: userImage,
    serviceName: "Help move a couch",
    category: "gardening",
    userName: "Marvin Fey",
    mapIcon: <LuMapPin />,
    place: "Los Angeles CA 90024",
    calenderIcon: <SlCalender />,
    city: "New York, USA",
    monthIcon: <IoTimerOutline />,
    month: "15 May 2020 8.00am",
    open: "open",
    close: "close",
    price: "$24.00",
  },
];

const BrowseService = () => {
  return (
    <div className="project_container p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[600px] flex flex-col gap-4 ">
          {taskData.slice(0, 3).map((data, index) => (
            <ServiceCard key={index} data={data} />
          ))}
        </div>
        <div className="w-full h-96 md:h-[800px] ">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default BrowseService;
