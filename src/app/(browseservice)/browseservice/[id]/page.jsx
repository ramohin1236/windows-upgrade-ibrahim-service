"use client";
import React from 'react'
import { usePathname, useSearchParams } from "next/navigation";
// import userImage from "../../../../../publictask_img.png";

// const taskData = [
//   {
//     id: 1,
//     userImaage: userImage,
//     serviceName: "Help move a couch",
//     category: "gardening",
//     userName: "Marvin Fey",
//     mapIcon: <LuMapPin />,
//     place: "Los Angeles CA 90024",
//     calenderIcon: <SlCalender />,
//     city: "New York, USA",
//     monthIcon: <IoTimerOutline />,
//     month: "15 May 2020 8.00am",
//     open: "open",
//     close: "close",
//     price: "$24.00",
//   },
//   {
//     id: 2,
//     userImaage: userImage,
//     serviceName: "Help move a couch",
//     category: "gardening",
//     userName: "Marvin Fey",
//     mapIcon: <LuMapPin />,
//     place: "Los Angeles CA 90024",
//     calenderIcon: <SlCalender />,
//     city: "New York, USA",
//     monthIcon: <IoTimerOutline />,
//     month: "15 May 2020 8.00am",
//     open: "open",
//     close: "close",
//     price: "$24.00",
//   },
//   {
//     id: 3,
//     userImaage: userImage,
//     serviceName: "Help move a couch",
//     category: "gardening",
//     userName: "Marvin Fey",
//     mapIcon: <LuMapPin />,
//     place: "Los Angeles CA 90024",
//     calenderIcon: <SlCalender />,
//     city: "New York, USA",
//     monthIcon: <IoTimerOutline />,
//     month: "15 May 2020 8.00am",
//     open: "open",
//     close: "close",
//     price: "$24.00",
//   },
//   {
//     id: 4,
//     userImaage: userImage,
//     serviceName: "Help move a couch",
//     category: "gardening",
//     userName: "Marvin Fey",
//     mapIcon: <LuMapPin />,
//     place: "Los Angeles CA 90024",
//     calenderIcon: <SlCalender />,
//     city: "New York, USA",
//     monthIcon: <IoTimerOutline />,
//     month: "15 May 2020 8.00am",
//     open: "open",
//     close: "close",
//     price: "$24.00",
//   },
//   {
//     id: 5,
//     userImaage: userImage,
//     serviceName: "Help move a couch",
//     category: "gardening",
//     userName: "Marvin Fey",
//     mapIcon: <LuMapPin />,
//     place: "Los Angeles CA 90024",
//     calenderIcon: <SlCalender />,
//     city: "New York, USA",
//     monthIcon: <IoTimerOutline />,
//     month: "15 May 2020 8.00am",
//     open: "open",
//     close: "close",
//     price: "$24.00",
//   },
// ];

const ServiceDetails = ({params}) => {
    const path = usePathname()
    console.log(path)

    const searchParams = useSearchParams();
    console.log("searchparams",searchParams)
    
  // console.log(params.id)
  return (
    <div>
        {params.id}
    </div>
  )
}

export default ServiceDetails