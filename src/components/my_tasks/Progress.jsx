import React from "react";
import { Check, Calendar } from "lucide-react";
import Image from "next/image";
import customer from "../../../public/customer.svg";
import { FaCalendar, FaMapPin } from "react-icons/fa6";
import { BsChatLeftText } from "react-icons/bs";

const Progress = () => {
  const steps = [
    { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
    { id: 2, label: "In Progress", date: "Feb 21, 2023", completed: true },
    { id: 3, label: "Completed on", date: "", completed: false },
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
              <p className="text-base md:text-xl font-semibold">To Be Done On</p>
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
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea fugit illo soluta in hic id, possimus reiciendis! Porro voluptas impedit dolores ipsam et facere dolor. Non sint odit voluptatum reiciendis a provident soluta, repudiandae amet, sed nisi neque et doloremque! Porro eius molestias velit pariatur sed at facere libero voluptatum, minus voluptatibus asperiores explicabo corporis officiis nobis, ipsum quis quos. Maiores ad explicabo soluta nobis nam maxime neque aperiam ullam inventore blanditiis dicta, laborum possimus reiciendis! Doloremque, cumque a natus repudiandae delectus, incidunt aliquid quo, nemo sint rem totam dolore tempore iusto nisi earum. Distinctio tenetur natus laborum eligendi.</p>
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
      <div className="border-[#dedfe2] border-b-2 pb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border w-full max-w-5xl mx-auto ">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
          <div
            className="absolute top-6 left-0 h-0.5 bg-[#115E59] z-10 transition-all duration-500"
            style={{ width: "66.67%" }}
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
                w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300
                ${
                  step.completed
                    ? "bg-[#115E59] border-[#115E59]"
                    : "bg-gray-400 border-gray-400"
                }
              `}
                >
                  {step.completed ? (
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Label */}
                <div className="mt-3 min-w-[80px]">
                  <p
                    className={`
                  text-sm font-semibold mb-1 transition-colors duration-300
                  ${step.completed ? "text-gray-900" : "text-gray-400"}
                `}
                  >
                    {step.label}
                  </p>

                  {/* Date */}
                  {step.date && (
                    <div
                      className={`
                    flex items-center justify-center text-xs transition-colors duration-300
                    ${step.completed ? "text-gray-600" : "text-gray-400"}
                  `}
                    >
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

    </div>
  );
};

export default Progress;
