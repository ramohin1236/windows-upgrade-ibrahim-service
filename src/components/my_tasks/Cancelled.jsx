import React from "react";
import { Check, Calendar } from "lucide-react";
import Image from "next/image";
import customer from "../../../public/customer.svg";
import { FaCalendar, FaMapPin } from "react-icons/fa6";
import { BsChatLeftText } from "react-icons/bs";

const Cancelled = () => {
  const steps = [
    { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
    { id: 2, label: "In Progress", date: "Feb 21, 2023", completed: true },
    {
      id: 3,
      label: "Cancelled",
      date: "Feb 21, 2023",
      completed: false,
      cancelled: true,
    },
  ];
  return (
    <div className="flex flex-col gap-12 pb-20">
      <div className="flex flex-col md:flex-row justify-between">
        {/* left side */}
        <div>
          <div className="flex mt-8 items-center gap-3">
            <Image src={customer} alt="imagae" className="w-8 md:w-12" />
            <div>
              <p className="text-base md:text-xl font-semibold"> Assigned To</p>
              <p className="text-[#6B7280] text-sm">Marvin Fey</p>
            </div>
          </div>
          <div className="flex mt-8 items-center gap-3">
            <div className="bg-[#E6F4F1] rounded-full p-2 md:p-3">
              <FaMapPin className="text-[#115E59] text-sm md:text-xl" />
            </div>
            <div>
              <p className="text-base md:text-xl font-semibold"> Location</p>
              <p className="text-[#6B7280] text-sm">New York, USA</p>
            </div>
          </div>
          <div className="flex mt-8 items-center gap-3">
            <div className="bg-[#E6F4F1] rounded-full p-2 md:p-3 ">
              <FaCalendar className="text-[#115E59] text-sm md:text-xl" />
            </div>
            <div>
              <p className="text-base md:text-xl font-semibold">
                To Be Done On
              </p>
              <p className="text-[#6B7280] text-sm">15 May 2020 8:00 am</p>
            </div>
          </div>
        </div>

        {/* RIGH SIDE */}
        <div>
          {" "}
          <button
            href="/construction"
            className="px-6 py-2.5 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center mt-12"
          >
            <BsChatLeftText />
            Chat Now
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">Details</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea
          fugit illo soluta in hic id, possimus reiciendis! Porro voluptas
          impedit dolores ipsam et facere dolor. Non sint odit voluptatum
          reiciendis a provident soluta, repudiandae amet, sed nisi neque et
          doloremque! Porro eius molestias velit pariatur sed at facere libero
          voluptatum, minus voluptatibus asperiores explicabo corporis officiis
          nobis, ipsum quis quos. Maiores ad explicabo soluta nobis nam maxime
          neque aperiam ullam inventore blanditiis dicta, laborum possimus
          reiciendis! Doloremque, cumque a natus repudiandae delectus, incidunt
          aliquid quo, nemo sint rem totam dolore tempore iusto nisi earum.
          Distinctio tenetur natus laborum eligendi.
        </p>
      </div>

      <div className="flex flex-col gap-4 border-b-2 border-[#dedfe2] pb-4">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold">Offered Price</p>
          <p className="text-base text-[#6B7280]">₦ 27.6</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold">Discount (0%)</p>
          <p className="text-base text-[#6B7280]">₦ 0</p>
        </div>
      </div>
      {/* Progress Bar */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="relative">
          {/* Progress Line Background */}
          <div className="absolute top-4 left-8 right-8 h-0.5 bg-gray-300 z-0"></div>

          {/* Green Progress Line (from first to second step) */}
          <div
            className="absolute top-4 left-8 h-0.5 bg-[#115e59] z-10 transition-all duration-500"
            style={{ width: "calc(50% - 16px)" }}
          ></div>

          {/* Red Progress Line (from second to third step) */}
          <div
            className="absolute top-4 h-0.5 bg-red-500 z-10 transition-all duration-500"
            style={{ left: "50%", width: "calc(50% - 32px)" }}
          ></div>

          {/* Steps */}
          <div className="relative z-20 flex justify-between items-start">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with icon */}
                <div
                  className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${
                    step.cancelled
                      ? "bg-red-500"
                      : step.completed
                      ? "bg-[#115e59]"
                      : "bg-gray-400"
                  }
                `}
                >
                  {step.completed || step.cancelled ? (
                    <Check className="w-4 h-4 text-white" strokeWidth={2} />
                  ) : (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Label */}
                <div className="mt-3 min-w-[80px]">
                  <p className="text-sm font-medium mb-1 text-gray-900">
                    {step.label}
                  </p>

                  {/* Date */}
                  {step.date && (
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{step.date}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancelled;
