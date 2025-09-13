import Image from "next/image";
import React from "react";
import popularcateIcon from "../../../public/popularcate.svg";
import Link from "next/link";
import righArrowIcon from "../../../public/whitearrow.svg";
import cateimg1 from "../../../public/cat1.svg";
import cateimg2 from "../../../public/service2.svg";
import service3 from "../../../public/service3.svg";
import service4 from "../../../public/service4.svg";
import service5 from "../../../public/service5.svg";
import service6 from "../../../public/service6.svg";
import CateCard from "@/sharred/CateCard";

const data = [
  {
    id: 1,
    cateName: "House Cleaning",
    providers: "4982 Providers",
    icon: cateimg1,
  },
  {
    id: 2,
    cateName: "Electricity Services",
    providers: "3,866 Providers",
    icon: cateimg2,
  },
  {
    id: 3,
    cateName: "Furniture Replacement",
    providers: "1,894 Providers",
    icon: service3,
  },
  {
    id: 4,
    cateName: "Mechanic Zone",
    providers: "2,894 Providers",
    icon: service4,
  },
  {
    id: 5,
    cateName: "Plumber Service",
    providers: "3,894 Providers",
    icon: service5,
  },
  {
    id: 6,
    cateName: "Painter Chaise",
    providers: "2,754 Providers",
    icon: service6,
  },
];

const PopularCategory = () => {
  return (
    <section className="max-w-[1240px] mx-auto px-4">
      <div className="flex flex-col gap-16">
        <div className="mt-16 md:mt-44 flex flex-col gap-5 md:flex-row justify-between md:items-center">
          {/* top header */}
          <div>
            <div className="flex items-center gap-4 ">
              <Image
                src={popularcateIcon}
                alt="Popular Category "
                height={24}
              />
              <p className="font-semibold text-md md:text-xl text-color pb-3">
                CATEGORIES
              </p>
            </div>
            <h3 className="font-semibold text-2xl md:text-4xl flex flex-col gap-6">
              Most Popular Categories
            </h3>
          </div>
          <div className="flex">
            <Link
              href="/categories"
              className="px-4 py-3 md:px-6 md:py-4 text-md md:text-xl font-semibold bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              View More
              <Image
                src={righArrowIcon}
                alt="Popular Category"
                className="w-3 md:w-4"
              />
            </Link>
          </div>

          {/* Cards */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <Link key={item.id} href="browseservice"><CateCard  item={item} /></Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
