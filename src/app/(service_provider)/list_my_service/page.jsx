import React from "react";
import serviceImage from "../../../../public/service_image.png";
import ServiceCategoriesCard from "@/components/service_provider/ServiceCategoriesCard";

const ListMyService = () => {
  const serviceData = [
    {
      id: 1,
      email: "mavin@gmail.com",
      starting_price: "₦24.00",
      number: 1234567,
      service_location: "2715 Ash Dr. San Jose, South Dakota 83475",
      image: serviceImage,
    },
    {
      id: 2,
      email: "mavin@gmail.com",
      starting_price: "₦24.00",
      number: 1234567,
      service_location: "2715 Ash Dr. San Jose, South Dakota 83475",
      image: serviceImage,
    },
    {
      id: 3,
      email: "mavin@gmail.com",
      starting_price: "₦24.00",
      number: 1234567,
      service_location: "2715 Ash Dr. San Jose, South Dakota 83475",
      image: serviceImage,
    },
    {
      id: 4,
      email: "mavin@gmail.com",
      starting_price: "₦24.00",
      number: 1234567,
      service_location: "2715 Ash Dr. San Jose, South Dakota 83475",
      image: serviceImage,
    },
    {
      id: 5,
      email: "mavin@gmail.com",
      starting_price: "₦24.00",
      number: 1234567,
      service_location: "2715 Ash Dr. San Jose, South Dakota 83475",
      image: serviceImage,
    },
    {
      id: 6,
      email: "mavin@gmail.com",
      starting_price: "₦24.00",
      number: 1234567,
      service_location: "2715 Ash Dr. San Jose, South Dakota 83475",
      image: serviceImage,
    },
  ];
  return (
    <div className="project_container px-6 py-12">
      <div className="rounded-4xl">
   
        <div className=" flex flex-col gap-8">
          <p className="text-3xl font-semibold">Cleaning Service</p>

          {serviceData?.map((data, index) => (
            <ServiceCategoriesCard data={data} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMyService;
