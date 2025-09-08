"use client";
import React, { useState } from "react";
import { Check, Calendar } from "lucide-react";
import Image from "next/image";
import customer from "../../../public/customer.svg";
import { FaCalendar, FaMapPin, FaStar } from "react-icons/fa6";
import { BsChatLeftText } from "react-icons/bs";
import srvcporvider from "../../../public/women.svg";

const Completed = () => {
  // Status state (In Progress / Completed)
  const [status, setStatus] = useState("In Progress");

  // Feedback toggle state
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");

  const steps =
    status === "Completed"
      ? [
          { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
          {
            id: 2,
            label: "In Progress",
            date: "Feb 21, 2023",
            completed: true,
          },
          {
            id: 3,
            label: "Completed on",
            date: "Feb 22, 2023",
            completed: true,
          },
        ]
      : [
          { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
          {
            id: 2,
            label: "In Progress",
            date: "Feb 21, 2023",
            completed: true,
          },
          { id: 3, label: "Completed on", date: "", completed: false },
        ];

  const progressWidth = status === "Completed" ? "100%" : "66.67%";

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Top Section */}
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

        {/* Right side */}
        <div>
          <button className="px-6 py-2.5 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105 cursor-pointer flex gap-2 items-center justify-center mt-12">
            <BsChatLeftText />
            Chat Now
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">Details</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea
          fugit illo soluta in hic id, possimus reiciendis! ...
        </p>
      </div>

      {/* Price Section */}
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
              style={{ width: progressWidth }}
            ></div>

            {/* Steps */}
            <div className="relative z-20 flex justify-between items-start">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
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

                  {/* Label + Date */}
                  <div className="mt-3 min-w-[80px]">
                    <p
                      className={`
                        text-sm font-semibold mb-1 transition-colors duration-300
                        ${step.completed ? "text-gray-900" : "text-gray-400"}
                      `}
                    >
                      {step.label}
                    </p>
                    {step.date && (
                      <div
                        className={`
                          flex items-center justify-center text-xs
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

      <div className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
        <div className="w-16 h-16 rounded-full overflow-clip">
          {" "}
          <Image
            src={srvcporvider}
           
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Grace Carey</h4>
            <p className="text-sm text-gray-500">1 Sep, 2025</p>
          </div>
          <div className="flex gap-1 mt-1 mb-1">
              <FaStar className="text-yellow-400"/>
              <FaStar className="text-yellow-400"/>
              <FaStar className="text-yellow-400"/>
              <FaStar className="text-yellow-400"/>
          </div>
          <div>
            <p className="text-gray-600 text-sm mt-2">I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!</p>
          
          </div>
        </div>
      </div>

      {/* Feedback section - only when completed */}
      {status === "Completed" && (
        <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow">
          {!showFeedback ? (
            <button
              onClick={() => setShowFeedback(true)}
              className="px-6 py-2.5 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105 cursor-pointer"
            >
              Give Feedback
            </button>
          ) : (
            <div className="flex flex-col gap-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your feedback or comments..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#115e59]"
                rows={4}
              />
              <div className="flex gap-3">
                <button
                  onClick={() => alert(`Feedback submitted: ${feedback}`)}
                  className="px-6 py-2 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition duration-300 cursor-pointer"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowFeedback(false)}
                  className="px-6 py-2 border-2 border-[#115e59] rounded-md hover:bg-[#115e59] hover:text-white transition transform duration-300 cursor-pointer text-[#115e59]"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Demo Buttons for Switching Status */}
      <div className="flex gap-4">
        <button
          onClick={() => setStatus("Completed")}
          className="px-6 py-2 border-2 border-[#115e59] rounded-md hover:bg-[#115e59] hover:text-white transition transform duration-300 cursor-pointer text-[#115e59]"
        >
          Set Completed
        </button>
      </div>
    </div>
  );
};

export default Completed;
