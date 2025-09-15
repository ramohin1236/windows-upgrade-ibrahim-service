"use client";

import { useState } from "react";
import { Calendar, Ban, X } from "lucide-react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import popularcateIcon from "../../../../public/popularcate.svg";

const Resolution = () => {
  const [openModal, setOpenModal] = useState(null);

  const options = [
    {
      title: "Ask Service Provider to Change Completion Date",
      icon: <Calendar className="w-6 h-6 text-color" />,
      action: () => setOpenModal("date"),
    },
    {
      title: "Request Cancellation",
      icon: <Ban className="w-6 h-6 text-color" />,
      action: () => setOpenModal("cancel"),
    },
  ];

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    
    const timeValue = e.target.value;
    console.log(e.target)
  };

  return (
    <div className="project_container py-10 lg:py-44 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-4">
          <Image
            src={popularcateIcon}
            alt="Popular Category"
            height={24}
            width={24}
          />
          <p className="font-semibold text-md md:text-xl text-color pb-3">
            Resolution Center
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-5">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={option.action}
            className="w-full flex items-center justify-between bg-[#E6F4F1] p-3 md:p-6 rounded-lg shadow-sm cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {option.icon}
              <span className="text-[#6B7280] text-base md:text-xl font-medium">
                {option.title}
              </span>
            </div>
            <span className="text-color text-2xl">
              <IoIosArrowForward />
            </span>
          </button>
        ))}
      </div>

      {/* MODALS */}
      {/* Date Change Modal */}
      {openModal === "date" && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenModal(null)}
          ></div>
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl mx-4 p-6 z-10">
            {/* Close button */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900">
              Request Change Of Task Completion Date
            </h2>
            <p className="text-gray-500 text-center mt-1 mb-6 text-sm md:text-base">
              Submit A Request To Update The Agreed Completion Date.
            </p>

            <div className="bg-[#E6F4F1] rounded-lg p-4 flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-[#115E59]" />
              <div>
                <p className="text-gray-900 font-medium text-sm md:text-base">
                  Current Completion Date
                </p>
                <p className="text-gray-600 text-sm">15 May 2020 8:00 am</p>
              </div>
            </div>

            <form onSubmit={handleButtonSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    New Proposed Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#115E59] focus:outline-none text-[#6B7280]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    New Proposed Time
                  </label>
                  <input
                    name="time"
                    type="time"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#115E59] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Reason for Request
                </label>
                <textarea
                  name="reason"
                  rows={3}
                  placeholder="e.g., Need more time for quality work / Client requested delay"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#115E59] focus:outline-none text-[#6B7280]"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-end gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenModal(null)}
                  className="w-full md:w-auto px-6 py-2 rounded-lg border border-[#115E59] text-[#115E59] font-medium cursor-pointer hover:bg-emerald-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 rounded-lg bg-[#1b867f] text-white font-medium hover:bg-[#115E59] cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Cancellation Modal */}
      {openModal === "cancel" && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000]">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpenModal(null)}
          ></div>
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-2xl mx-4 p-6 z-10">
            {/* Close button */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={22} />
            </button>

            <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900">
              Request Task Cancellation
            </h2>
            <p className="text-gray-500 text-center mt-1 mb-6 text-sm md:text-base">
              Submit A Cancellation Request With Supporting Details.
            </p>

            <form className="space-y-5">
              {/* Reason */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Reason for Cancellation
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#115E59] focus:outline-none">
                  <option>Select Reason</option>
                  <option>Personal</option>
                  <option>Technical Issues</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide additional details if needed"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#115E59] focus:outline-none text-[#6B7280]"
                />
              </div>

              {/* Evidence */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Evidence (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <span className="text-gray-400">📎 Upload Document</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-end gap-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenModal(null)}
                  className="w-full md:w-auto px-6 py-2 rounded-lg border border-[#115E59] cursor-pointer text-[#115E59 ]font-medium hover:bg-emerald-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 rounded-lg bg-[#1b867f] text-white font-medium hover:bg-[#115E59] cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resolution;
