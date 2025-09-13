import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ServiceCategoriesCard = ({ data }) => {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden flex w-full items-center flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="relative h-64">
        <Image
          src={data.image}
          alt="Cleaning Service"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />

        {/* Badge - Top Left */}
        {/* <span className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-lg">
          Cleaning
        </span> */}

        {/* Rating - Top Right */}
        {/* <span className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-lg">
          <FaStar className="text-yellow-500" /> 4.5
        </span> */}
      </div>

      {/* Right Side - Details */}
      <div className="p-5 flex flex-col justify-between md:w-2/3">
        <h2 className="text-xl font-semibold text-gray-800">
          Cleaning Service
        </h2>

        <div className="mt-3 space-y-2 text-gray-600 text-sm">
          <p>
            <span className="font-semibold">Starting Price :</span> ₦24.00
          </p>
          <p>
            <span className="font-semibold">Email :</span> Marvin@Gmail.Com
          </p>
          <p>
            <span className="font-semibold">Contact Number :</span> (603)
            555-0123
          </p>
          <p>
            <span className="font-semibold">Service Location :</span> 2715 Ash
            Dr. San Jose, South Dakota 83475
          </p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="px-5 py-2 bg-emerald-700 text-white text-sm rounded-lg shadow hover:bg-emerald-800 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoriesCard;
