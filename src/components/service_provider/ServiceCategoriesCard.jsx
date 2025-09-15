import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ServiceCategoriesCard = ({ data }) => {
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden 
    flex w-full items-center flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="relative lg:h-64">
        <Image
          src={data.image}
          alt="Cleaning Service"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />

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
          <Link href={`/list_my_service/list_my_service_details/${data.id}`} className="px-5 py-2 bg-emerald-700 text-white text-sm rounded-lg shadow hover:bg-emerald-800 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategoriesCard;
